FROM node

# create app directory
WORKDIR /apitodo/src/app

COPY package*.json ./


# Bundle app source
COPY . .

EXPOSE 8090

CMD ["node", "app.js"]