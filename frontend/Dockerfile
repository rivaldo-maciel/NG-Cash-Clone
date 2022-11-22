FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --silent

COPY . .

EXPOSE 5173

ENTRYPOINT ["npm", "run", "dev", "--", "--host"]