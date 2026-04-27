# На сервере: docker build -t cely . && docker run -p 3000:3000 cely

FROM node:20-alpine

WORKDIR /app

COPY .next/standalone/.next ./.next
COPY .next/standalone/node_modules ./node_modules
COPY .next/standalone/package.json ./
COPY .next/standalone/server.js ./
COPY public ./public

EXPOSE 3000
ENV NODE_ENV=production
ENV PORT=3000

CMD ["node", "server.js"]