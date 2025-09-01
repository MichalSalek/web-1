FROM node:lts-alpine

WORKDIR /app

ARG NEXT_TELEMETRY_DISABLED
ENV NEXT_TELEMETRY_DISABLED=${NEXT_TELEMETRY_DISABLED}
ARG DATABASE_URL
ENV DATABASE_URL=${DATABASE_URL}
ARG DATABASE_URL_DIRECT
ENV DATABASE_URL_DIRECT=${DATABASE_URL_DIRECT}
ARG CLOUDINARY_URL
ENV CLOUDINARY_URL=${CLOUDINARY_URL}

COPY package.json package-lock.json ./
CMD npm run install

COPY src ./src
COPY next.config.mjs .
COPY tsconfig.json .

# Start Next.js in development mode
CMD npm run dev
