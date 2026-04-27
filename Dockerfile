# Сборка делается локально: npm run build
# В докер копируется только готовый билд

FROM node:20-alpine

WORKDIR /app

COPY .next/standalone ./
COPY public ./public
COPY .next/static ./.next/static

RUN npm install --omit=dev --omit=scripts

EXPOSE 3000
ENV NODE_ENV=production
ENV PORT=3000

CMD ["node", "server.js"]