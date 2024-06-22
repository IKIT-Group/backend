ARG NODE_VERSION=21.7.3

FROM node:${NODE_VERSION}-alpine as builder

ENV NODE_ENV build

USER node
WORKDIR /usr/src/app

COPY package*.json .
RUN npm ci

COPY --chown=node:node . .
RUN npx prisma generate \
    && npm run build \
    && npm prune --omit=dev





FROM node:${NODE_VERSION}-alpine

ENV NODE_ENV production

USER node
WORKDIR /usr/src/app

COPY --from=builder --chown=node:node /usr/src/app/package*.json .
COPY --from=builder --chown=node:node /usr/src/app/node_modules ./node_modules
COPY --from=builder --chown=node:node /usr/src/app/dist ./dist

EXPOSE 8080

CMD ["node", "dist/main"]
