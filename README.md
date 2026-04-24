# Abhishek — Performance Marketing Website

A full-stack performance marketing personal website built with Hono + Cloudflare Pages.

## 🌐 Live URLs
- **GitHub Pages**: https://abhishek-collab-ppc.github.io/performance-marketing/
- **Cloudflare (dev)**: Local sandbox

## ✅ Features
- Hero with animated blobs + trust badges (Google, Meta, Upwork)
- Animated stats counters ($100M+, 300% ROAS, 100+ accounts)
- About section with real profile photo + platform badges
- 6 Service cards (Google Ads, Meta, Tracking, Feed, Lead Gen, Audit)
- 4-step methodology section
- 6 Case studies with real results
- 6 Testimonials with source tags (Upwork/Direct)
- 8 Google Certifications displayed
- Skills cloud + Industries served
- Contact form → emails delivered to PPCbyAbhishek@gmail.com via Web3Forms
- Full mobile responsive with hamburger nav
- Scroll animations, counter animations, card tilt effects
- Dark theme with indigo/purple gradient design system

## 📧 Contact Form Setup (Web3Forms)
1. Go to https://web3forms.com
2. Enter **PPCbyAbhishek@gmail.com** and get your free access key
3. In `docs/static/app.js`, replace `YOUR_WEB3FORMS_KEY_HERE` with your key
4. For the Cloudflare/Hono version, update `src/index.tsx` with the real key

## 🚀 Deploy to GitHub Pages
1. Push this repo to `Abhishek-collab-PPC/performance-marketing`
2. Go to Settings → Pages → Source: **GitHub Actions**
3. The workflow in `.github/workflows/deploy.yml` will auto-deploy from `docs/`

## 🛠 Tech Stack
- **Backend**: Hono + Cloudflare Workers
- **Frontend**: Vanilla JS + TailwindCSS-style custom CSS
- **Fonts**: Inter + Space Grotesk
- **Icons**: Font Awesome 6
- **Email**: Web3Forms (free)
- **Deployment**: GitHub Pages (static) + Cloudflare Pages (edge)

## 📊 Data Architecture
- **Storage**: No database required (static site)
- **Email**: Web3Forms API (free tier: 250 submissions/month)
- **Assets**: Served from `/static/` (profile photo, logo, CSS, JS)

## 📁 Project Structure
```
webapp/
├── src/index.tsx          # Hono app (Cloudflare Pages)
├── public/static/
│   ├── style.css          # Full design system
│   ├── app.js             # Frontend JS
│   ├── profile.jpg        # Profile photo
│   ├── logo.png           # RG / Rav Growth logo
│   └── favicon.svg        # SVG favicon
├── docs/                  # GitHub Pages output
│   ├── index.html
│   └── static/
├── .github/workflows/
│   └── deploy.yml         # Auto-deploy to GitHub Pages
└── ecosystem.config.cjs   # PM2 dev server config
```

## Last Updated: April 2025
