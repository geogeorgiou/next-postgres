#!/bin/sh
# ENVIRONMENT from docker-compose.yaml doesn't get through to subprocesses
# Need to explicit pass POSTGRES_PRISMA_URL here, otherwise migration doesn't work

# Run migrations
POSTGRES_PRISMA_URL="postgresql://postgres@localhost:5432/webapp_dev?sslmode=disable" npx db:migrate
# start app
POSTGRES_PRISMA_URL="postgresql://postgres@localhost:5432/webapp_dev?sslmode=disable" node server.js