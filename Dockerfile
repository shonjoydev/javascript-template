FROM node:24-alpine

# Enable Corepack and setup workspace
RUN corepack enable

WORKDIR /app

# Install dependencies in one layer
COPY package.json pnpm-lock.yaml .npmrc* ./
RUN corepack install && pnpm install --frozen-lockfile

# Copy source and test
COPY . .
CMD ["pnpm", "test", "--run"]
