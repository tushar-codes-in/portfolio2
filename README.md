# Tusharakanta Chintada — Portfolio

A simple, responsive personal portfolio built with **React + Vite + Tailwind CSS**.

## Tech Stack
- React (Functional Components + Hooks)
- Vite
- Tailwind CSS (no UI libraries, no animation libraries)

## Folder Structure
```
src/
  components/
    Navbar.jsx
    Hero.jsx
    About.jsx
    Skills.jsx
    Projects.jsx
    Contact.jsx
    Footer.jsx
  App.jsx
  main.jsx
  index.css
index.html
tailwind.config.js
postcss.config.js
vite.config.js
package.json
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the dev server:
   ```bash
   npm run dev
   ```
   Then open the printed `localhost` URL in your browser.

3. Build for production:
   ```bash
   npm run build
   ```

4. Preview the production build:
   ```bash
   npm run preview
   ```

## Customizing

- **Personal info / project details**: edit the data arrays at the top of
  `Hero.jsx`, `About.jsx`, `Skills.jsx`, and `Projects.jsx`.
- **Colors**: the blue accent and dark theme colors are defined in
  `tailwind.config.js` under `theme.extend.colors` (`accent` and `dark`).
- **Contact form**: `Contact.jsx` currently just logs the submission to the
  console and shows a success message (no backend). Hook it up to a service
  like Formspree, EmailJS, or your own API to make it functional.
- **Resume / social links**: update the placeholder `#` hrefs in `Navbar.jsx`,
  `Contact.jsx`, and `Footer.jsx` with your real links.

## Notes
- Fully responsive (mobile, tablet, desktop) using Tailwind's responsive
  utility classes.
- Dark theme with a blue accent (`#3b82f6`), rounded cards, and subtle hover
  effects throughout.
- No external UI kits, Framer Motion, GSAP, or Three.js — just React state
  and Tailwind transitions.
