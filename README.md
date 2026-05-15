# Energy Drink Ranker

A fullstack GraphQL project for ranking energy drinks.

## Stack

- **Frontend** — React, TypeScript, Vite, React Router
- **Backend** — Node.js, Express, Apollo Server, GraphQL, TypeScript

## Project setup

Clone the repo and install all dependencies from the root:

```bash
npm run install:all
```

## Running the app

For local db, simple flow is:

```
npm run db:start
npm run primsa:migrate #if you havent already
npm run prisma:generate #if you havent already
npm run backend
npm run frontend
```

All commands run from the root of the repository.

| Command                  | Description                       |
| ------------------------ | --------------------------------- |
| `npm run frontend`       | Start the frontend dev server     |
| `npm run backend`        | Start the backend server          |
| `npm run frontend:build` | Build the frontend for production |
| `npm run backend:build`  | Build the backend for production  |

## Code quality

| Command                | Description                      |
| ---------------------- | -------------------------------- |
| `npm run lint`         | Lint frontend and backend        |
| `npm run lint:fix`     | Auto-fix lint errors             |
| `npm run typecheck`    | Type-check frontend and backend  |
| `npm run format`       | Format all files with Prettier   |
| `npm run format:check` | Check formatting without writing |

## Structure

```
MonsterGQL/
  frontend/   # React + Vite frontend
  backend/    # Express + Apollo GraphQL backend
  localdb/    # Docker Compose for local PostgreSQL
```

## Local database

Requires [Docker](https://docs.docker.com/get-docker/). Start the PostgreSQL container with:

```bash
npm run db:start   # start (detached)
npm run db:stop    # stop
```

Then copy the local env template and run migrations:

```bash
cp backend/.env.local.example backend/.env
npm run prisma:migrate
```

To seed the database with ~20 Monster drinks:

```bash
npm run seed
```

The seed script is safe to re-run — it skips any drink that already exists by name.

See [localdb/README.md](localdb/README.md) for full details.
