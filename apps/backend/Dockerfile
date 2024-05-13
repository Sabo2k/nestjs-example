# Base image
# See https://stackoverflow.com/a/53581620
# See https://forums.docker.com/t/differences-between-standard-docker-images-and-alpine-slim-versions/134973/2
FROM node:20-alpine as base

# Enable corepack, a tool to manage JS package managers like pnpm
RUN corepack enable

# Create app directory
# This is where the application code will reside.
WORKDIR /usr/src/app

# Install pnpm globally
RUN corepack prepare pnpm@8.15.1 --activate

FROM base as installer

# copy both package.json and package-lock.json
COPY package.json ./
COPY pnpm-lock.yaml ./

# Install dependencies using pnpm with --frozen-lockfile option to ensure 
# that the exact version specified in the lock file is installed
RUN pnpm install --frozen-lockfile --prod

FROM base as builder

# Set environment variable NX_DAEMON to "false".
# This is likely intended to disable the NX daemon
ENV NX_DAEMON="false"

COPY --from=installer /usr/src/app/node_modules ./node_modules

# Copy application code from host machine to /app directory in the container
COPY . .

RUN pnpm install --frozen-lockfile

#  Creates a "dist" folder with the production build
RUN pnpm nx build backend

FROM node:20-alpine as production

# Copy node_modules from the installer stage into the production stage.
COPY --from=installer /usr/src/app/node_modules ./node_modules

# Copy the built application from the builder stage into the production stage
COPY --from=builder /usr/src/app/dist/apps/backend ./dist/

# Expose the port on which the app will run
EXPOSE 3000

# Start the server using the production build
CMD [ "node", "dist/main.js" ]