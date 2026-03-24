# Karina Valens — Portfolio

My personal portfolio website showcasing projects in frontend development, mobile apps, UX/UI design, and illustration.

## Features

- **Home page** — Animated landing with skill showcase and sidebar navigation
- **About** — Background, education, and professional profile
- **Projects** — Grid of project cards with category badges and tech stack tags
- **Project detail pages** — Image carousel, description, metadata (year, role, tech stack), and live site links
- **Responsive design** — Mobile-first with glass-morphism UI
- **Dark/light mode** — Automatic via `prefers-color-scheme`
- **Animations** — Framer Motion for page transitions and scroll reveals

## Tech Stack

- **Framework**: Next.js 13, React 18
- **Animations**: Framer Motion
- **Icons**: React Icons (Simple Icons, Tabler)
- **Styling**: Custom CSS with CSS variables, glass-effect design system
- **Fonts**: Space Grotesk (headings), Poppins (body)

## Projects Featured

- **With Home Taste** — React Native recipe app with AI extraction (Expo, Supabase)
- **Cosmo Festival** — Festival booking app with schedule and checkout (Next.js, JSON Server)
- **Sleepy Baby** — Hand-illustrated browser game (JavaScript, CSS, Adobe Illustrator)
- **Solomon Sound Therapy** — Client website with brand redesign (HTML, CSS, REST API)
- **Hack Hogwarts Student List** — Data-driven web app with filtering and hidden hack feature

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the dev server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
pages/
  index.js              — Home page
  about.js              — About page
  projects/
    index.js            — Project listing
    [name].js           — Project detail (dynamic)
  api/
    projects.js         — Project data
components/
  content/
    About.js            — About section
    Projects.js         — Homepage project grid
    SkillsIcons.js      — Tech stack icons
  navigation/
    Header.js, Nav.js, Footer.js, Layout.js
  context/
    AppContext.js        — Global state
styles/
  globals.css           — All styles, CSS variables, responsive breakpoints
```
