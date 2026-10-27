# NEXUS TI — Web Platform

Modern corporate portal for **NEXUS TI**, specializing in strategic IT consulting, custom software engineering, microservices architecture, Business Intelligence, and governance frameworks (COBIT & ITIL).

---

## 🛠️ Tech Stack & Tools

### Core Framework & Build
- **[Astro v5](https://astro.build/)** — Content-driven, performance-first web framework utilizing Islands architecture and static pre-rendering.
- **[TypeScript](https://www.typescriptlang.org/)** — Static typing for robust client-side scripts and data structures.
- **[Vite](https://vitejs.dev/)** — Underlying build engine providing rapid HMR and optimized asset bundling.

### Styling & Design System
- **[Tailwind CSS v3](https://tailwindcss.com/)** — Utility-first styling framework integrated via `@astrojs/tailwind`.
- **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** — Utility for resolving and merging conflicting Tailwind class declarations cleanly.
- **Lucide Icons (`lucide`)** — Clean, modular icon set used across navigation and service components.

### 3D Graphics & Shaders
- **[Three.js](https://threejs.org/)** — WebGL library powering interactive 3D elements and geometric scenes.
- **Custom GLSL Shaders** — Background aurora borealis canvas shader reacting dynamically to mouse movement and viewport scroll.
- **[canvas-confetti](https://github.com/catdad/canvas-confetti)** — Performant canvas-based particle bursts for user interaction feedback.

### Offline & Progressive Web App (PWA)
- **[@vite-pwa/astro](https://vite-pwa-org.netlify.app/)** — Zero-config PWA integration for Astro.
- **[Workbox (`workbox-window`)](https://developer.chrome.com/docs/workbox)** — Service worker registration, asset caching strategies, and offline capabilities.

---

## 📂 Project Structure

```text
├── public/                 # Static assets, favicons, PWA icons
├── src/
│   ├── components/         # Astro UI components & WebGL canvases
│   │   ├── AuroraShaderCanvas.astro
│   │   ├── ContactCTA.astro
│   │   ├── Governance.astro
│   │   ├── Hero.astro
│   │   ├── InteractiveArchitecture.astro
│   │   ├── Navbar.astro
│   │   ├── ScrollStreamCanvas.astro
│   │   ├── ServicesGrid.astro
│   │   └── ThreeCanvas.astro
│   ├── layouts/            # Global HTML layout and metadata
│   ├── pages/              # Astro routing entrypoints (index.astro)
│   └── styles/             # Global CSS and custom styles
├── astro.config.mjs        # Astro & PWA configuration
├── tailwind.config.mjs     # Tailwind design tokens & themes
└── tsconfig.json           # TypeScript configuration
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18.14.1 or higher)
- npm / pnpm / yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/<your-username>/nexus-ti-web.git
cd nexus-ti-web

# Install dependencies
npm install
```

### Development & Build Commands

```bash
# Run local dev server with network host exposed
npm run dev

# Build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 📄 License

Private / Proprietary — All rights reserved by NEXUS TI.
