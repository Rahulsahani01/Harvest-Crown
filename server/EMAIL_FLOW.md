# Web3Forms Email Flow Integration Guide

This guide details the frontend-only email integration using Web3Forms for the contact inquiry, wholesale quote, and newsletter subscription forms.

---

## 1. System Architecture & Email Flow

This application is fully client-side and does not require hosting or running any server-side database or API code. Web3Forms acts as the serverless handler, securely forwarding submissions to your email inbox.

```
+-------------------------------------------------------------+
|                     Client-Side (React)                     |
|                                                             |
|   [Contact Form]        [Quote Form]       [Newsletter]     |
|          \                   |                 /            |
|           +------------------+----------------+             |
|                              |                              |
|                       [useEmail Hook]                       |
|                              |                              |
|                 Fetch POST api.web3forms.com                |
+------------------------------|------------------------------+
                               v
+------------------------------|------------------------------+
|                     Web3Forms Gateway                       |
|                              |                              |
|             Authenticates with public access key            |
|            Formats form fields into structured body         |
+------------------------------|------------------------------+
                               v
+------------------------------|------------------------------+
|                         Email Inbox                         |
|                              |                              |
|               Delivered directly to company email           |
+-------------------------------------------------------------+
```

### Flow Steps:
1. **Form Input**: The user fills out any form on the site (Contact, Quote request, or Newsletter).
2. **Hook Trigger**: The form submit handler triggers the `sendEmail` function of the custom `useEmail` hook.
3. **API Call**: The hook reads your public access key (`VITE_WEB3FORMS_ACCESS_KEY`) and makes a direct HTTP POST request to the Web3Forms submission API (`https://api.web3forms.com/submit`).
4. **Delivery**: Web3Forms processes the submission and sends a formatted email alert directly to the email inbox associated with your access key.

---

## 2. Configuration & Environment Setup

To enable email delivery, you must obtain a Web3Forms access key and configure it in your environment:

### Step 1: Get a Web3Forms Access Key
1. Go to [Web3Forms](https://web3forms.com/).
2. Enter the email address where you want to receive form submissions.
3. Check your inbox; Web3Forms will immediately email you your unique **Access Key** (e.g. `1234abcd-1234-abcd-1234-abcd1234abcd`).

### Step 2: Configure Environment Variables
Create a file named `.env` in the root of the project (this is ignored by Git in `.gitignore`) and add the access key:

```env
# Web3Forms Access Key
VITE_WEB3FORMS_ACCESS_KEY="your_web3forms_access_key_here"
```

> [!NOTE]
> Vite environment variables must be prefixed with `VITE_` in order to be exposed to the client-side code via `import.meta.env.VITE_...`.

---

## 3. Local Development Testing

1. Ensure your `.env` file contains your valid `VITE_WEB3FORMS_ACCESS_KEY`.
2. Start the Vite development server:
   ```bash
   npm run dev
   ```
3. Open `http://localhost:5173/` and submit any form.
4. You will receive the form submission email directly in your inbox.
