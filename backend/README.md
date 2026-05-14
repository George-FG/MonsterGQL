# Backend — Energy Drink Ranker

Node.js + Express + Apollo Server GraphQL backend.

## Stack

- [Node.js](https://nodejs.org/)
- [Express 5](https://expressjs.com/)
- [Apollo Server](https://www.apollographql.com/docs/apollo-server/)
- [GraphQL](https://graphql.org/)
- [TypeScript](https://www.typescriptlang.org/)

## Setup

From the repo root, install all dependencies:

```bash
npm run install:all
```

Or install backend dependencies only:

```bash
npm install
```

## Running

From the repo root:

```bash
npm run backend
```

Or directly:

```bash
npm start
```

## Scripts

| Script              | Description                          |
| ------------------- | ------------------------------------ |
| `npm start`         | Build and start the server           |
| `npm run build`     | Compile TypeScript to `dist/`        |
| `npm run typecheck` | Type-check without emitting          |
| `npm run codegen`   | Regenerate GraphQL types from schema |
| `npm run lint`      | Run ESLint                           |
| `npm run lint:fix`  | Auto-fix ESLint errors               |
| `npm test`          | Run tests with Vitest                |

## Development notes

- GraphQL is a work in progress — do not expect a fully working API yet
- Keep resolvers segmented by parent type
- Keep resolvers free from logic — move business logic into `lib/`
- Expensive calls should be made in field-level resolvers
- Use custom type validation inside `lib/` for any service logic
- Use types from `lib/types.ts`

## Structure

```
src/
  graphQL/    # Schema definitions and resolvers
  http/       # Express server setup
  lib/        # Shared types and business logic
  index.ts    # Entry point
```
