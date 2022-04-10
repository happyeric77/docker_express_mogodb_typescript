FROM node:13-alpine

ENV MONGO_DB_USERNAME=admin \
    MONGO_DB_PWD=admin

# The RUN command will be run inside the container, not host
RUN mkdir -p /home/app

# The COPY command can copy host content to docker container
COPY ./app /home/app

# set default dir so that next commands executes in /home/app dir
WORKDIR /home/app

# will execute npm install in /home/app because of WORKDIR
RUN npm install

RUN npm run build

# no need for /home/app/server.js because of WORKDIR
CMD ["npm", "run", "start"]