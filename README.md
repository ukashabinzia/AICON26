# AICON'26 Landing Page

A modern, responsive landing page concept for **AICON'26**, an AI and technology experience bringing together coding, AI, startups, and innovation at SEECS, NUST.

---

## Creative Direction

> **AICON'26 — BUILD WHAT'S NEXT.**  
> _AI · Code · Startups · Innovation_  
> _03 Days · 04 Modules · One Tech Experience_

---

## Built With

- **React 19** — Core UI component architecture
- **TypeScript** — Strict type safety across all components and routes
- **Tailwind CSS v4** — Utility-first styling with tailored OKLCH color palettes
- **TanStack Start & TanStack Router** — Full-stack SSR routing and entry points
- **Radix UI** — Accessible headless UI primitives (Accordion, Dialog, etc.)
- **Lucide React** — Minimal, modern icon library
- **Vite** — High-performance frontend build tooling

---

## Features

- **Asymmetric Editorial Hero**: Bold typographic hierarchy with official AICON'26 branding, technical micro-labels, and dual action pathways.
- **Interactive AICON Modules**: Dedicated interactive drawers showcasing all four official event tracks:
  1. `01 / Pitchfest` — 90 seconds. One idea. Live panel.
  2. `02 / Competitive Speed Programming` — Ranked. Timed. Live leaderboard.
  3. `03 / AI RapidSprint` — Build. Demo. Defend.
  4. `04 / Sponsor Innovation Challenge` — Real briefs from industry partners.
- **Stats & Community Section**: Dynamic animated counter displaying `03 Days`, `04 Modules`, and `01 Tech Experience` alongside confirmed organizing student chapters (NUST ACM, GDGoC NUST, NUST Entrepreneur Club, NUST Hack Club).
- **Three-Day Experience Flow**: Structured programme preview detailing the 3-day journey (_Day 01 Learn_, _Day 02 Build_, _Day 03 Compete_).
- **Module-Specific FAQ Accordion**: Keyboard-accessible Radix accordion answering key queries about participation, modules, and registration.
- **Interactive Registration Demo**: Client-side validated form with field error states, loading spinner, and success confirmation.
- **Responsive Navigation**: Sticky header with backdrop blur, smooth anchor navigation, and full mobile menu toggle.
- **Accessibility & Motion**: Semantic HTML structure, high-contrast palette, visible focus rings, and full `prefers-reduced-motion` compliance.

---

## Local Development

### Prerequisites

Ensure you have **Node.js** (v20+ recommended) installed.

### 1. Clone the Repository

```bash
git clone https://github.com/ukashabinzia/AICON26.git
cd AICON26
```

### 2. Install Dependencies

Using `npm`:

```bash
npm install
```

Or using `bun`:

```bash
bun install
```

### 3. Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or the port indicated in your terminal) in your browser.

### 4. Build for Production

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

### 5. Lint and Format

```bash
npm run lint
npm run format
```

---

## License

Created for the AICON'26 Web & IT Team candidate assessment.
