# Deployment Guide

## Prerequisites
- Node.js v18+ ([nodejs.org](https://nodejs.org))
- Git
- Vercel account ([vercel.com](https://vercel.com))

## Local Setup

```bash
cd waynes-world-eft-site
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel

1. Push this repo to GitHub (already done)
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import the `waynes-world-eft-site` GitHub repo
4. Vercel auto-detects Next.js — click **Deploy**
5. Done. Every push to `main` triggers a redeploy.

## Before Launch Checklist

- [ ] Wire up contact form — replace `action="#"` in `app/contact/page.tsx` with a [Formspree](https://formspree.io) endpoint
- [ ] Add real phone number to Footer and Contact page
- [ ] Add real email address to Footer and Contact page
- [ ] Confirm logo files look correct at `/public/images/logo.png`
- [ ] Consider adding a hero photo of Wayne or the gym (place in `/public/images/`)
- [ ] Update meta descriptions if needed (`app/layout.tsx` and each page)
- [ ] Set up Google Analytics or Vercel Analytics (optional)

## Logo Files

- `logo.png` — square icon logo (used in header)
- `logo-full.png` — full horizontal logo (available if needed)
