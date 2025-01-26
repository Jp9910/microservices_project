FROM node:20-alpine

RUN apk add mysql-client

USER node

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY --chown=node:node package*.json ./

RUN npm install

# copy host's current folder to container's current workdir, setting file ownership
COPY --chown=node:node ./ ./ 

EXPOSE 3000

CMD [ "yarn", "dev" ]
# CMD [ "npm", "run", "dev" ]
# CMD [ "node", "app.js" ]