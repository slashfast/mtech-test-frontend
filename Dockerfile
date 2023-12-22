FROM node:alpine AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
RUN apk add --no-cache git
RUN apk add --no-cache openssh
RUN git clone https://github.com/slashfast/mtech-test-frontend.git
WORKDIR /mtech-test-frontend
RUN pnpm install --frozen-lockfile

EXPOSE 5173
CMD ["pnpm", "dev"]

