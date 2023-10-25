# Sample Dockerfile for React
FROM node:16-alpine

WORKDIR /usr/app

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install

COPY . .

RUN npm run build
RUN npm install -g serve

CMD ["serve", "-s", "build", "-l" "3000"]
