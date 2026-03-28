# AGENTS.md

## Project Overview
This is a modern Next.js (App Router) landing page for a premium fitness application called "Poochie Fitness".

The goal of this project is to deliver:
- Apple-level UI/UX polish
- Clean, minimal, premium design
- High-performance static-first rendering
- Scalable architecture for future expansion (auth, dashboard, blog, APIs)

---

## Core Tech Stack
- Next.js (App Router ONLY)
- TypeScript (STRICT)
- Tailwind CSS (NO inline styles)
- React functional components ONLY

---

## Hard Rules (DO NOT BREAK)

### 1. App Router ONLY
- Always use `/src/app`
- NEVER use Pages Router (`pages/`)
- Prefer Server Components unless interactivity is required

---

### 2. TypeScript Strictness
- No `any`
- Always type props
- Prefer explicit types over inference for public interfaces

---

### 3. Styling Rules
- Use Tailwind CSS ONLY
- No inline `style={}`
- No CSS files unless absolutely necessary
- Use consistent spacing and typography scale

---

### 4. Component Architecture
- Components must be small, reusable, and composable
- No large monolithic components
- Separate UI into `/components/landing/` sections

Example:
- Hero.tsx
- Features.tsx
- Screenshots.tsx
- CTA.tsx
- Footer.tsx

---

### 5. Design Principles (VERY IMPORTANT)
- Premium, minimal, Apple-like design
- Strong spacing and visual hierarchy
- Avoid clutter and excessive text
- Use subtle animations only where meaningful
- Prefer neutral color palette (zinc/black/white)

---

### 6. Performance
- Prefer Server Components
- Avoid unnecessary client-side state
- Optimize images using `next/image`
- Keep bundle size minimal

---

### 7. Dependencies
- Avoid adding new libraries unless absolutely necessary
- Prefer built-in Next.js + React solutions

---

### 8. File Naming
- Use PascalCase for components
- Use clear, descriptive names

---

## Preferred Patterns

### Layout
- Use flex/grid with Tailwind
- Use max-width containers (e.g., `max-w-6xl mx-auto`)
- Ensure responsive design by default

---

### Buttons
- Rounded-full
- Subtle hover + active states
- Clear primary vs secondary hierarchy

---

### Typography
- Large bold headlines
- Controlled paragraph widths (`max-w-2xl`)
- Use opacity for hierarchy (`text-white/80`, `text-zinc-400`)

---

## Agent Behavior Expectations

When generating code:
- Follow all rules above strictly
- Do not introduce outdated React or Next.js patterns
- Do not over-engineer
- Prefer simplicity + clarity
- Output clean, production-ready code only

If unsure:
- Choose the simplest modern Next.js approach