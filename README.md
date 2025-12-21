# Harshdeep — Full Stack Developer Portfolio

Professional, recruiter-friendly portfolio built with React (Vite), Framer Motion, and advanced interactive features.

This repository contains a modern, corporate-style personal portfolio with cutting-edge UI/UX featuring dark mode, 3D graphics, interactive modals, command palette, and real-time GitHub stats. Optimized for internship applications, job outreach, and personal brand positioning.

---

## ✨ Advanced Features

### 🎨 Visual Storytelling & Motion
- **Microinteractions**: Hover effects, card tilts, button pulses using Framer Motion
- **Scroll-based parallax**: Hero section with `useScroll` and `useTransform`
- **Ambient gradient lighting**: Floating gradient background for futuristic feel
- **Animated gradient text**: Flowing gradient animation on hero title

### 🌓 Dark Mode
- **Theme toggle**: Persistent dark/light mode with smooth transitions
- **System-aware**: Respects user preferences and saves to localStorage

### ⌨️ Command Palette
- **Keyboard shortcut**: Press `Ctrl+K` (or `⌘K` on Mac) to open
- **Quick navigation**: Jump to any section instantly
- **Search functionality**: Filter commands by typing
- **Arrow key navigation**: Navigate with keyboard for power users

### 🚀 Dynamic Integrations
- **GitHub Stats**: Real-time repository, star, follower, and fork counts via GitHub API
- **Live data**: Automatically fetches and displays your latest activity
- **Fallback data**: Gracefully handles API failures with placeholder stats

### 🎭 Personality Rhythm
- **Developer identity**: "I code, I learn, I design" section
- **Animated icons**: Cycling through coding activities with motion
- **Interactive cards**: Click or auto-cycle through your daily rhythm

### 📊 Skills Visualization
- **Dual view**: Toggle between progress bars and radar chart
- **Recharts integration**: Professional data visualization
- **Animated bars**: Skill bars fill dynamically on scroll

### 🎬 Project Showcases
- **Interactive modals**: Click project cards to open detailed case studies
- **Image carousel**: Navigate through multiple project screenshots
- **Hover overlays**: "View Case Study" appears on hover
- **Rich metadata**: Timeline, role, team size, challenges, and solutions

### 🌌 3D Tech Stack Orbit
- **React Three Fiber**: Rotating 3D sphere with orbiting tech icons
- **Interactive**: Mouse controls to rotate and explore
- **Animated spheres**: Floating tech stack visualization

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

- **Frontend**: React 19 + Vite 7
- **Styling**: Plain CSS with CSS variables (corporate theme + enhanced features)
- **Animations**: Framer Motion (scroll, transitions, micro-interactions)
- **3D Graphics**: React Three Fiber + Drei
- **Charts**: Recharts (radar charts, data visualization)
- **State Management**: Zustand (dark mode, modal state, command palette)
- **Icons**: React Icons (Feather icons)
- **API Calls**: Axios (GitHub API integration)
- **Form Handling**: Formspree (no backend required)
- **Build & Dev**: Vite

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
│  ├─ store/
│  │  └─ useStore.js          # Zustand state (dark mode, modals, command palette)
│  ├─ styles/
│  │  ├─ corporate.css         # Base theme variables + layout
│  │  └─ enhanced.css          # Advanced features styling
│  ├─ assets/                  # Images (image.jpeg, image1.png, image4.png)
│  └─ components/
│     ├─ Header.jsx            # Nav with dark mode toggle & command palette trigger
│     ├─ Hero.jsx              # Parallax hero with 3D orbit
│     ├─ PersonalityRhythm.jsx # Developer rhythm section
│     ├─ About.jsx
│     ├─ GitHubStats.jsx       # Real-time GitHub API stats
│     ├─ SkillsEnhanced.jsx    # Progress bars + radar chart toggle
│     ├─ Projects.jsx          # Project cards with modal triggers
│     ├─ ProjectModal.jsx      # Detailed case study modal
│     ├─ GrowthJourney.jsx
│     ├─ Certifications.jsx
│     ├─ Contact.jsx
│     ├─ Footer.jsx
│     ├─ CommandPalette.jsx    # Ctrl+K quick navigation
│     ├─ DarkModeToggle.jsx    # Theme switcher button
│     └─ TechStackOrbit.jsx    # 3D rotating tech icons
```
│  ├─ styles/
│  │  └─ corporate.css   # theme variables + layout
│  ├─ assets/            # project images and profile image (image.jpeg, image1.png, image4.png)
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
Each component uses small, focused CSS classes defined in `corporate.css` and `enhanced.css`. Animations are driven by Framer Motion.

---

## 🎮 How to Use Advanced Features

### Command Palette
1. Press `Ctrl+K` (Windows/Linux) or `⌘K` (Mac)
2. Type to search for commands or sections
3. Use arrow keys to navigate, Enter to select
4. Press Esc to close

### Dark Mode
- Click the sun/moon icon in the header
- Your preference is saved to localStorage
- Automatically applies on next visit

### Project Modals
- Click on any project card thumbnail
- Or click "View Case Study" when hovering over project cards
- Use carousel arrows to navigate multiple screenshots
- Click outside or the X button to close

### Skills Visualization
- Click "Progress Bars" to see animated skill levels
- Click "Radar Chart" to see a comparative visualization
- Both views are interactive and responsive

### GitHub Stats
- Automatically fetches your real-time stats
- Update the username in `src/components/GitHubStats.jsx`:
  ```jsx
  export default function GitHubStats({ username = 'YOUR_GITHUB_USERNAME' }) {
  ```
- Displays repositories, stars, followers, and forks

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
<form action="https://formspree.io/f/xqezbwao" method="POST">
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
- Add more project details for richer modals:
  - `fullDescription`: Extended description for modal
  - `images`: Array of image paths for carousel
  - `timeline`: Project duration
  - `role`: Your role in the project
  - `team`: Team size or composition
  - `features`: Array of key features
  - `challenges`: Description of challenges and solutions

Example project object in `Projects.jsx`:

```js
{
  title: 'ZaikaHub',
  desc: 'Short description...',
  fullDescription: 'Detailed case study description...',
  tech: ['React','Node.js','MongoDB'],
  timeline: '3 months (2024)',
  role: 'Full Stack Developer',
  team: 'Solo Project',
  features: [
    'Real-time search',
    'User authentication',
    'Responsive design'
  ],
  challenges: 'Implemented caching strategies...',
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
