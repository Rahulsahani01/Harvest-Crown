# Azure Communication Services Email Flow

This project now sends contact inquiries, quote requests, and newsletter subscriptions through an Azure Static Web Apps API backed by Azure Communication Services Email.

---

## 1. System Architecture

```text
+-------------------------------------------------------------+
|                     Client-Side (React)                     |
|                                                             |
|   [Contact Form]        [Quote Form]       [Newsletter]     |
|          \                   |                 /            |
|           +------------------+----------------+             |
|                              |                              |
|                       [useEmail Hook]                       |
|                              |                              |
|                 Fetch POST /api/send-email                  |
+------------------------------|------------------------------+
                               v
+------------------------------|------------------------------+
|             Azure Static Web Apps API (Function)            |
|                              |                              |
|       Reads ACS credentials from environment variables      |
|       Formats the submission into an email payload          |
+------------------------------|------------------------------+
                               v
+------------------------------|------------------------------+
|           Azure Communication Services Email Send           |
|                              |                              |
|      Sends from verified sender to configured recipient     |
+------------------------------|------------------------------+
                               v
+------------------------------|------------------------------+
|                         Email Inbox                         |
+-------------------------------------------------------------+
```

## 2. Required Environment Variables

Use these values locally in `.env` or `api/.env`, and as GitHub repository secrets for deployment:

```env
ACS_CONNECTION_STRING="endpoint=https://your-resource.communication.azure.com/;accesskey=your_access_key"
ACS_EMAIL_SENDER="DoNotReply@your-resource.azurecomm.net"
ACS_EMAIL_RECIPIENT="you@example.com"
```

## 3. Flow Steps

1. A user submits the contact, quote, or newsletter form.
2. `useEmail` posts the structured payload to `/api/send-email`.
3. The Azure Function validates the payload and loads the ACS configuration from env.
4. The function sends the email through Azure Communication Services.
5. The configured recipient inbox receives the submission, and the sender is set as the reply-to address.
