# Mare Digitale sp. z o. o. — Website

A bilingual (EN/PL) marketing-agency website for **Mare Digitale sp. z o. o.**, built with React (Vite) on the front end and Node.js (Express + Nodemailer) on the back end.

## Project structure

```
mare-digitale/
├── client/   # React + Vite front end
└── server/   # Express + Nodemailer back end (contact form)
```

## Quick start

Open two terminals.

### 1. Back end

```bash
cd server
cp .env.example .env      # then fill in your SMTP credentials
npm install
npm run dev               # http://localhost:5000
```

### 2. Front end

```bash
cd client
npm install
npm run dev               # http://localhost:5173
```

The Vite dev server proxies `/api/*` to `http://localhost:5000`, so the contact form works end-to-end out of the box once SMTP is configured.

## Building for production

```bash
cd client && npm run build      # outputs to client/dist
cd ../server && npm start       # serves API on the port from .env
```

You can host `client/dist` on any static host (Netlify, Vercel, Cloudflare Pages, Nginx) and the Express API on a Node host (Render, Railway, Fly.io, a VPS).

## SMTP setup

Edit `server/.env`:

```
PORT=5000
SMTP_HOST=smtp.your-provider.com
SMTP_PORT=587
SMTP_SECURE=false           # true for port 465
SMTP_USER=your-smtp-username
SMTP_PASS=your-smtp-password
MAIL_FROM="Mare Digitale <noreply@maredigitale.com>"
MAIL_TO=office@maredigitale.com
CORS_ORIGIN=http://localhost:5173
```

For Gmail, use an App Password (not your real password) and `smtp.gmail.com` on port 587.
