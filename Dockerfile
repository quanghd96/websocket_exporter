FROM node:alpine

WORKDIR /app

COPY package.json /app
COPY *.js /app

RUN yarn install

EXPOSE 9189

CMD [ "npm", "start" ]
