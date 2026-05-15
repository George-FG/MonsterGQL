# Local Database

A Docker Compose setup for running PostgreSQL locally during development.

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/) with the Compose plugin (included in Docker Desktop)

## Starting the database

From the **root of the repository**, run:

```bash
npm run db:start
```

This starts a PostgreSQL 17 container named `monstergql_db` on port **5432**, with:

| Setting  | Value        |
| -------- | ------------ |
| User     | `postgres`   |
| Password | `postgres`   |
| Database | `monstergql` |

Data is persisted in a named Docker volume (`postgres_data`) so it survives container restarts.

## Stopping the database

```bash
npm run db:stop
```

## Backend environment variables

Copy `backend/.env.local.example` to `backend/.env` for local dev:

```bash
cp backend/.env.local.example backend/.env
```

This sets both `DATABASE_URL` and `DIRECT_URL` to point at the local Docker container:

```
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/monstergql"
DIRECT_URL="postgresql://postgres:postgres@localhost:5432/monstergql"
```

In production, `DATABASE_URL` should use your pooled connection (e.g. via PgBouncer) and `DIRECT_URL` the direct connection. See `backend/.env.example` for the production template.
