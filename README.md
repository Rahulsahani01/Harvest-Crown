# Harvest Crown

A premium, modern React website built with Vite and Tailwind CSS.

---

## 1. Project Setup & Execution

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### Install Dependencies
Run this command from the project root directory:
```bash
npm install
```

### Start Development Server
To launch the hot-reloading development server locally:
```bash
npm run dev
```
* **Dev Server URL**: `http://localhost:5173/`

### Create Production Build
To compile the TypeScript code and generate optimized assets for production hosting inside the `/dist` directory:
```bash
npm run build
```

### Preview Production Build
To spin up a local preview server serving the production build files:
```bash
npm run preview
```

### Run Linter
To verify code formatting and identify syntax or style issues:
```bash
npm run lint
```

---

## 2. Environment Variables

To send contact, quote, and newsletter submissions through Azure Communication Services, create a `.env` file in the project root:

```env
ACS_CONNECTION_STRING="endpoint=https://your-resource.communication.azure.com/;accesskey=your_access_key"
ACS_EMAIL_SENDER="DoNotReply@your-resource.azurecomm.net"
ACS_EMAIL_RECIPIENT="you@example.com"
```

> [!NOTE]
> These values are consumed by the Azure Static Web Apps API function. They are not exposed to the browser.

For local API execution, the same values can also live in `api/.env`.

For GitHub Actions deployment, add these repository secrets:

```text
ACS_CONNECTION_STRING
ACS_EMAIL_SENDER
ACS_EMAIL_RECIPIENT
AZURE_STATIC_WEB_APPS_API_TOKEN
```

---

## 3. Email Integration Flow
For the architecture and runtime flow, see [server/EMAIL_FLOW.md](/home/ayush/temp/Harvest-Crown/server/EMAIL_FLOW.md).
