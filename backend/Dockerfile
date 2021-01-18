FROM node:14

WORKDIR /app

COPY package.json yarn.lock /app/

RUN yarn install

COPY . .

EXPOSE 5000

CMD ["yarn", "run", "server"]