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

To allow direct form submissions to your email inbox via Web3Forms, create a `.env` file in the project root:

```env
# Web3Forms Access Key
VITE_WEB3FORMS_ACCESS_KEY="your_web3forms_access_key_here"
```

> [!NOTE]
> Vite environment variables must be prefixed with `VITE_` to be loaded in the application using `import.meta.env`.

---

## 3. Email Integration Flow
For detailed guides on how to request an access key and test form submissions locally, see the [Web3Forms Email Integration Guide](file:///home/rahul/Documents/Harvest%20Crown/server/EMAIL_FLOW.md).
