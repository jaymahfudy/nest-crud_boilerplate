FROM node:10.13-alpine
ENV NODE_ENV development

ADD . /app
WORKDIR /app

RUN npm install -f --production --silent && mv node_modules ../
COPY . .
RUN npm install typescript
RUN npm install ts-node
RUN npm install -g @nestjs/cli

EXPOSE 3000
CMD npm run start:dev