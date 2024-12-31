FROM oven/bun:alpine AS base

WORKDIR /src

FROM base AS build

COPY --link package.json bun.lockb /src/

RUN bun i

COPY --link . .