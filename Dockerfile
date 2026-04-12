# Stage 1: Frontend bauen
FROM node:20-alpine AS frontend
WORKDIR /build
COPY app/package*.json ./
RUN npm install
COPY app/ ./
RUN npm run build

# Stage 2: Server
FROM node:20-alpine
WORKDIR /app

COPY server/package*.json ./
RUN npm ci --omit=dev

COPY server/ ./

# Frontend-Build in public/app kopieren
COPY --from=frontend /build/dist ./public/app

ENV NODE_ENV=production
ENV PORT=3001

# Daten-Verzeichnis für SQLite
RUN mkdir -p /data

EXPOSE 3001

CMD ["node", "index.js"]
