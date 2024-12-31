FROM oven/bun:alpine AS base

WORKDIR /src

FROM base AS build

COPY --link ./server/package.json ./server/bun.lockb /src/

RUN bun i

COPY --link ./server .