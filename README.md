# Harshdeep — Full Stack Developer Portfolio

Professional, recruiter-friendly portfolio built with React (Vite) and Framer Motion.

This repository contains a modern, corporate-style personal portfolio designed to showcase projects, skills, certifications, and an interactive contact form. It's optimized for internship applications, job outreach, and personal brand positioning.

---

## Quick demo (local)

Start the development server:

```bash
npm install
npm run dev
# open http://localhost:5173
```

Build for production:

```bash
npm run build
npm run preview
```

Deploy options: Vercel, Netlify, or GitHub Pages. See the `Deployment` section below.

---

## Tech Stack

- Frontend: React + Vite
- Styling: plain CSS (corporate theme in `src/styles/corporate.css`)
- Animations: Framer Motion
- Form handling: Formspree (no backend required) — placeholder action in `src/components/Contact.jsx`
- Build & Dev server: Vite

---

## Project structure (key files)

```
portfolio/
├─ index.html
├─ package.json
├─ public/
│  └─ assets/ (static images, favicon)
├─ src/
│  ├─ main.jsx
│  ├─ App.jsx
│  ├─ styles/
│  │  └─ corporate.css   # theme variables + layout
│  ├─ assets/            # project images and profile image (imageP.jpeg, image1.png, image4.png)
│  └─ components/
│     ├─ Header.jsx
│     ├─ Hero.jsx
│     ├─ About.jsx
│     ├─ Skills.jsx
│     ├─ Projects.jsx
│     ├─ GrowthJourney.jsx
│     ├─ Certifications.jsx
│     ├─ Contact.jsx
│     └─ Footer.jsx
```

Tip: component responsibilities are listed in the file header comments inside `src/components`.

---

## Visual Identity & Theme (single source)

Theme variables live in `src/styles/corporate.css` in the `:root` block and are referenced across components.

- Primary accent: `--blue-primary: #2563EB`
- Accent gradient: `--blue-indigo: #4F46E5` (used with linear-gradient)
- Background / surface: `--bg-surface: #F8FAFC` (light surfaces)
- Borders / neutral: `--border-gray: #E5E7EB`
- Text primary: `--text-primary: #0F172A`
- Text secondary: `--text-secondary: #475569`
- Shadow: `--shadow-md: 0 4px 16px rgba(0,0,0,0.08)`
- Radius: `--radius-lg: 16px`
- Motion timings: `--transition-smooth: 0.4s cubic-bezier(0.4,0,0.2,1)`

If you want to change the palette or global spacing, edit the variables at the top of `src/styles/corporate.css` and the site will update immediately.

---

## Typography

- Body: Poppins (loaded in `index.html`)
- Headings: Inter (loaded in `index.html`)

Change fonts by editing the Google Fonts `link` in `index.html` and update `--font-body` / `--font-heading` variables in `corporate.css`.

---

## Components overview

- `Header.jsx` — sticky nav + mobile menu
- `Hero.jsx` — main intro, name highlight, CTA buttons, profile image
- `About.jsx` — bio and career goal
- `Skills.jsx` — skill categories with animated progress bars
- `Projects.jsx` — featured project cards (images: `src/assets/image1.png` & `src/assets/image4.png`)
- `GrowthJourney.jsx` — timeline + animated counters
- `Certifications.jsx` — certificate cards grid
- `Contact.jsx` — Formspree-enabled contact form and social links
- `Footer.jsx` — copyright and credits

Each component uses small, focused CSS classes defined in `corporate.css`. Animations are driven by Framer Motion.

---

## Images & Assets

- Profile image used in Hero: `src/assets/imageP.jpeg` (imported in `Hero.jsx`)
- Project 1 image: `src/assets/image1.png` (used in `Projects.jsx`)
- Project 2 image: `src/assets/image4.png` (used in `Projects.jsx`)

Replace these files with your own images (keep the same file names or update imports in the components).

Image optimization tip: run PNG/JPEG images through an optimizer (e.g., TinyPNG) to reduce load times.

---

## Contact Form (Formspree)

By default the form action in `src/components/Contact.jsx` is set to a placeholder:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  ...
</form>
```

To enable:

1. Sign up at https://formspree.io/
2. Create a form and copy the Form ID
3. Replace `YOUR_FORM_ID` in `Contact.jsx` with your ID

Formspree will forward messages to the email you registered with.

Alternative: EmailJS — use client-side JS to send via your email provider (requires `npm install emailjs-com` and updating `Contact.jsx`).

---

## How to customize projects

- Update `src/components/Projects.jsx` to change title, description, tech tags, live and GitHub links.
- Replace the image import at the top of the file to use different screenshots.
- If you add more projects, adjust the `.projects-grid` CSS if needed.

Example project object in `Projects.jsx`:

```js
{
  title: 'ZaikaHub',
  desc: 'Short description...',
  tech: ['React','Node.js','MongoDB'],
  liveUrl: 'https://example.com',
  githubUrl: 'https://github.com/your/repo',
  image: image1 // import at top: import image1 from '../assets/image1.png'
}
```

---

## Accessibility & SEO

- Sections use semantic tags (`section`, `header`, `main`) and anchor links for navigation.
- Add `alt` text to images (profile and project images already have alt attributes). Update as needed.
- Metadata (title, description, Open Graph) are set in `index.html` – update them before deploying for better sharing previews.

---

## Linting, tests and CI

- This starter includes ESLint in `devDependencies`. Run `npm run lint` to check for linting issues.
- Add CI (GitHub Actions) to run `npm ci && npm run build` on push for production verification.

---

## Deployment

Vercel (fast deploy):

1. Install Vercel CLI (optional): `npm i -g vercel`
2. `vercel` then follow prompts, or connect the GitHub repo from Vercel dashboard.

Netlify:

1. Push to GitHub
2. In Netlify, choose "New site from Git" and connect your repo
3. Build command: `npm run build`, Publish directory: `dist`

GitHub Pages (static, requires config):

1. Build: `npm run build`
2. Push `dist` to `gh-pages` branch using `gh-pages` package or GitHub Actions

---

## Future improvements (suggestions)

- Add dark mode using CSS variables and a toggle in `Header.jsx`.
- Integrate GitHub API to surface live stats or repositories automatically.
- Add modal project pages with detailed case studies.
- Add unit/integration tests for critical components.

---

If you'd like, I can: update the README with screenshots, add a deploy workflow (Netlify/Vercel), or create a GitHub Actions pipeline to auto-publish builds. Tell me which next step you want and I'll implement it.

---

© 2025 Harshdeep — Portfolio
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
