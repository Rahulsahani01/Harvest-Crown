const path = require("path");
const dotenv = require("dotenv");
const { EmailClient } = require("@azure/communication-email");

dotenv.config({ path: path.resolve(__dirname, "../../.env") });
dotenv.config({ path: path.resolve(__dirname, "../.env"), override: true });

const REQUIRED_ENV_VARS = [
  "ACS_CONNECTION_STRING",
  "ACS_EMAIL_SENDER",
  "ACS_EMAIL_RECIPIENT",
];

const ALLOWED_TYPES = new Set(["inquiry", "quote", "newsletter"]);

function getMissingEnvVars() {
  return REQUIRED_ENV_VARS.filter((key) => !process.env[key]);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatMetadata(metadata) {
  return Object.entries(metadata)
    .filter(([, value]) => value !== undefined && value !== null && String(value).trim() !== "")
    .map(([key, value]) => {
      const label = key
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, (character) => character.toUpperCase());

      return `<tr>
        <td style="padding:8px 12px;border:1px solid #d9d2c3;font-weight:600;background:#f6f1e8;">${escapeHtml(label)}</td>
        <td style="padding:8px 12px;border:1px solid #d9d2c3;">${escapeHtml(value)}</td>
      </tr>`;
    })
    .join("");
}

function buildMessageBody(payload) {
  const rows = formatMetadata(payload.metadata || {});

  return `
    <div style="font-family:Arial,sans-serif;color:#2f281f;line-height:1.6;">
      <h2 style="margin:0 0 16px;">New ${escapeHtml(payload.type)} submission</h2>
      <p style="margin:0 0 16px;">
        A new form submission was received from the Crown Harvest website.
      </p>
      <table style="border-collapse:collapse;width:100%;max-width:720px;">
        <tr>
          <td style="padding:8px 12px;border:1px solid #d9d2c3;font-weight:600;background:#f6f1e8;">Form Type</td>
          <td style="padding:8px 12px;border:1px solid #d9d2c3;">${escapeHtml(payload.type)}</td>
        </tr>
        <tr>
          <td style="padding:8px 12px;border:1px solid #d9d2c3;font-weight:600;background:#f6f1e8;">Sender Email</td>
          <td style="padding:8px 12px;border:1px solid #d9d2c3;">${escapeHtml(payload.senderEmail)}</td>
        </tr>
        ${rows}
      </table>
    </div>
  `;
}

module.exports = async function (context, req) {
  if (req.method !== "POST") {
    context.res = {
      status: 405,
      headers: { Allow: "POST" },
      body: { success: false, message: "Method not allowed." },
    };
    return;
  }

  const missingEnvVars = getMissingEnvVars();
  if (missingEnvVars.length > 0) {
    context.log.error("Missing Azure Communication Services configuration.", missingEnvVars);
    context.res = {
      status: 500,
      body: {
        success: false,
        message: `Missing environment variables: ${missingEnvVars.join(", ")}`,
      },
    };
    return;
  }

  const payload = req.body || {};
  const { type, senderEmail, subject, metadata = {} } = payload;

  if (!ALLOWED_TYPES.has(type)) {
    context.res = {
      status: 400,
      body: { success: false, message: "Invalid form type." },
    };
    return;
  }

  if (!senderEmail || !subject) {
    context.res = {
      status: 400,
      body: { success: false, message: "Sender email and subject are required." },
    };
    return;
  }

  try {
    const emailClient = new EmailClient(process.env.ACS_CONNECTION_STRING);
    const message = {
      senderAddress: process.env.ACS_EMAIL_SENDER,
      content: {
        subject,
        plainText: `New ${type} submission from ${senderEmail}.`,
        html: buildMessageBody({ type, senderEmail, metadata }),
      },
      recipients: {
        to: [{ address: process.env.ACS_EMAIL_RECIPIENT }],
      },
      replyTo: [{ address: senderEmail }],
    };

    const poller = await emailClient.beginSend(message);
    const result = await poller.pollUntilDone();

    if (result.status !== "Succeeded") {
      throw new Error(`Email send did not succeed. Final status: ${result.status}`);
    }

    context.res = {
      status: 200,
      body: { success: true, messageId: result.id || null },
    };
  } catch (error) {
    context.log.error("Failed to send email with Azure Communication Services.", error);
    context.res = {
      status: 500,
      body: {
        success: false,
        message: error.message || "Failed to send email.",
      },
    };
  }
};
