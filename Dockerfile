FROM node:22-alpine

WORKDIR /app

COPY . .

RUN npm ci

CMD ["node", "app.js"]