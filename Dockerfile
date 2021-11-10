FROM node:14-alpine AS production

WORKDIR /app

COPY . .

EXPOSE 3000

RUN npm i
RUN npm run build

CMD ["sh", "-c", "npm start"]
