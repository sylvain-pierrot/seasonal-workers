FROM node:18-alpine AS build

RUN apk add protoc

WORKDIR /app

COPY gateway/package*.json ./

RUN npm ci && npm cache clean --force

COPY proto /proto
COPY gateway/ ./

RUN npm run build


FROM node:18-alpine AS runner

USER node

COPY --chown=node:node --from=build /app/node_modules ./node_modules
COPY --chown=node:node --from=build /app/dist ./dist

ENV PORT_GATEWAY=3000
ENV NATS_HOST=nats://127.0.0.1:4222

CMD [ "node", "dist/main.js" ]