FROM node:16.18.0

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

COPY ./dist ./dist

RUN cd src

RUN npm install

CMD ["npm", "run", "start:dev"]
