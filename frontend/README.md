# Frontend — Energy Drink Ranker

React + TypeScript + Vite frontend.

## Stack

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [React Router](https://reactrouter.com/)

## Setup

From the repo root, install all dependencies:

```bash
npm run install:all
```

Or install frontend dependencies only:

```bash
npm install
```

## Running

From the repo root:

```bash
npm run frontend
```

Or directly:

```bash
npm run dev
```

## Scripts

| Script              | Description                          |
| ------------------- | ------------------------------------ |
| `npm run dev`       | Start the Vite dev server            |
| `npm run build`     | Type-check and build for production  |
| `npm run typecheck` | Type-check without emitting          |
| `npm run lint`      | Run ESLint                           |
| `npm run lint:fix`  | Auto-fix ESLint errors               |
| `npm run preview`   | Preview the production build locally |

## Structure

```
src/
  app/
    App.tsx         # Router entry point
    routes.tsx      # Route definitions
  pages/
    LandingPage/    # Home page with login, sign up, and rank actions
    RankingPage/    # Main ranking feature page (in progress)
  components/
    Button/         # Shared button component
  styles/
    global.css      # Global styles
  main.tsx          # Application entry point
```
