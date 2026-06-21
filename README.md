# 🍦 O'Heaven Ice Cream — Website

An Ice Cream Joint · Denver, CO

## Project Structure

```
src/
├── App.js                  # Root component — composes all sections
├── index.js                # React entry point
├── index.css               # Entry CSS
│
├── data/                   # ✏️  Edit your content here
│   ├── menu.js             # Menu categories, prices, items
│   └── packages.js         # Event packages + event types
│
├── styles/                 # 🎨 Edit your design tokens here
│   ├── variables.css       # Colors, fonts, spacing, shadows
│   └── global.css          # Reset + shared utility classes
│
└── components/             # 🧩 Individual page sections
    ├── TopBar.jsx/.css     # Top announcement bar
    ├── Navbar.jsx/.css     # Sticky navigation
    ├── Hero.jsx/.css       # Hero section with flavor strip
    ├── Marquee.jsx/.css    # Scrolling ticker
    ├── Menu.jsx/.css       # Menu grid
    ├── Packages.jsx/.css   # Package cards
    ├── BookingSection.jsx/.css  # Booking section wrapper
    ├── BookingForm.jsx/.css     # Booking form + success state
    └── Footer.jsx/.css     # Footer
```

## Getting Started

```bash
npm install
npm start
```

Opens at http://localhost:3000

## How to Edit Content

**Change menu items:** Edit `src/data/menu.js`
**Change packages:** Edit `src/data/packages.js`
**Change colors:** Edit `src/styles/variables.css`
**Change copy/headlines:** Edit the relevant component in `src/components/`
**Change logo:** Replace `public/logo.png`

## Build for Production

```bash
npm run build
```

## Deploy to GitHub Pages

```bash
npm install --save-dev gh-pages
```

Add to `package.json`:
```json
"homepage": "https://YOURUSERNAME.github.io/oheaven",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

Then run:
```bash
npm run deploy
```

## Connect Real Payments

To actually collect the $100 deposit online:
1. Sign up at **stripe.com** or **squareup.com**
2. Create a payment link for $100
3. Replace the form submit handler in `BookingForm.jsx` to redirect to your payment link after validation
