# Tulas International School (TIS) - Homepage Redesign

A modern, animated redesign of the Tulas International School homepage focusing on high conversion, fluid animations, and mobile responsiveness.

## 🚀 Live Demo
- **Live URL:** Not deployed yet
- **Repository:** Add the public GitHub URL after publishing this project

## 🛠️ Tech Stack
- **Framework:** Next.js 14 (App Router) with TypeScript
- **Styling:** Tailwind CSS v3 (class-based dark mode)
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Ready for Vercel or Netlify

## ✨ Standout Features Implemented
1. **Custom Cursor:** A spring-driven ring and dot that follow the pointer via motion values (no React re-renders), grow over links and buttons, and are never mounted on touch devices (`hover: hover` and `pointer: fine`).
2. **Scroll-Triggered Reveals:** Shared `stagger` and `fadeUp` variants with `whileInView` and `once: true`; 0.6s entrances.
3. **Animated Dark/Light Theme Switcher:** Spring-animated switch with an icon swap; the choice is saved to `localStorage` and applied before first paint to avoid a flash.
4. **Scroll Progress Bar:** `useScroll` smoothed with `useSpring`, fixed above the header.

## 📦 Getting Started Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/tis-homepage-redesign.git
   cd tis-homepage-redesign
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open http://localhost:3000 in your browser.

Production check: `npm run build`

## Component Architecture Overview

- `components/ui/` - Atomic UI components (Button, Logo)
- `components/layout/` - Navbar (animated mobile menu), Footer
- `components/sections/` - Main page sections (Hero, About, CTA)
- `components/animation/` - Animation drivers (CustomCursor, ScrollProgress, ThemeToggle, shared variants)
- `hooks/` - `useMousePosition`
- `data/` - `content.ts` (copy, stats, navigation, external links)

## Brand Identity Retained

- Deep maroon as the dominant color across header, hero and CTA, a teal accent for interactive elements, white for headings and buttons, and green and orange kept to the logo emblem
- Sans-serif for interface text, classic serif for the "TULA'S" wordmark
- Core messaging, stats and links (apply, virtual tour, brochure, helpline) are based on tis.edu.in; the logo is a lightweight SVG recreation
- The hero classroom photograph is served by Unsplash; replace it with an approved TIS campus image before public submission if one is available

## Before Submission

- Deploy the project and replace the live URL above with the public deployment link.
- Push the project to a public GitHub repository and replace the repository note above.
- Test the page at 375px, 768px and 1280px or wider, and confirm the external TIS links and hero image load in the deployment environment.
