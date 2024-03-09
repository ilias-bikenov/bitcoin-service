FROM node:18 as builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM node:18-slim

ENV NODE_ENV production
USER node

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --production

COPY --from=builder /usr/src/app/dist ./dist

EXPOSE 8080
CMD [ "node", "--experimental-specifier-resolution=node", "dist/index.js" ]