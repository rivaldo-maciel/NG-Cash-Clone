FROM node:16-alpine

WORKDIR /

COPY package*.json ./

RUN npm install --silent

CMD ["npm", "run", "typeorm", "migration:run"]

COPY . .

EXPOSE 3001

ENTRYPOINT ["npm", "start"]