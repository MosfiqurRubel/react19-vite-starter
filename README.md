# React 19 + Vite + Tailwind CSS Starter

A small, structured starter for building React applications with TypeScript, Vite, Tailwind CSS v4, and React Router.

## Requirements

- Node.js 22.12+ recommended for the current Vite line
- npm

## Getting started

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Scripts

- `npm run dev` — start the development server
- `npm run build` — type-check and create a production build
- `npm run preview` — preview the production build
- `npm run lint` — run ESLint

## Folder structure

```text
src/
├── app/
│   ├── App.tsx              # Route declarations
│   └── router.tsx           # Optional place for a larger router config
├── assets/                  # Images, fonts, and other imported assets
├── components/
│   ├── layout/              # App shell, header, navigation
│   └── ui/                  # Reusable UI components
├── features/
│   └── dashboard/           # Feature-specific components and data
├── hooks/                   # Shared custom hooks
├── lib/                     # Shared utilities and constants
├── pages/                   # Route-level page components
├── types/                   # Shared TypeScript types
├── index.css                # Tailwind import and global styles
└── main.tsx                 # Application entry point
```

## Architecture notes

- Keep reusable, feature-agnostic UI in `components/ui`.
- Keep domain-specific UI, data, and types inside `features/<feature-name>`.
- Keep route-level page components in `pages`.
- Add API clients, state management, authentication, and tests only when the app needs them.
- Tailwind v4 is configured with `@tailwindcss/vite` and `@import "tailwindcss";`; no `tailwind.config.js` is required for this starter.

## Included demo

- Responsive dashboard layout
- React Router routes: Dashboard, About, and Not Found
- Reusable button and stat-card components
- Working mobile navigation toggle
- TypeScript strict mode
