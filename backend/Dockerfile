FROM node:16.18.1-slim

RUN npm i -g @nestjs/cli
USER node

RUN mkdir -p /home/node/backend
WORKDIR /home/node/backend

COPY --chown=node package*.json ./
RUN npm ci

COPY --chown=node . .

EXPOSE ${BACKEND_PORT}

CMD ["npm", "run", "start:dev"]
