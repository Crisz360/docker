FROM node:18.17.1-alpine3.18 AS build-env

WORKDIR /app

COPY . /app

RUN npm install

RUN npm run build

EXPOSE 80

CMD npm run start