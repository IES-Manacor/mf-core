FROM node:16-alpine

WORKDIR /app

RUN npm install -g typescript
RUN npm install -g @quasar/cli
