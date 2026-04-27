# На сервере: docker build -t cely . && docker run -p 3000:3000 cely
# Предварительно запушить .next папку

FROM node:20-alpine

WORKDIR /app

COPY .next/standalone ./
COPY public ./public
COPY .next/static ./.next/static

EXPOSE 3000
ENV NODE_ENV=production
ENV PORT=3000

CMD ["node", "server.js"]