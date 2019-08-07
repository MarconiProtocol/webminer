FROM ubuntu:16.04

RUN apt-get update -y;apt-get install nginx -y
COPY deploy/nginx.conf /etc/nginx/nginx.conf
COPY deploy/site.crt /etc/nginx/site.crt
COPY deploy/site.key /etc/nginx/site.key

RUN apt-get -qq update
RUN apt-get install -y build-essential
RUN apt-get install -y curl vim telnet libpng-dev libjpeg-dev
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash
RUN apt-get install -y nodejs

# Create app directory
WORKDIR /usr/src/app
COPY deploy/start.sh ./start.sh

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# Bundle app source
COPY . .

RUN npm install
# If you are building your code for production
RUN npm run buildProd

EXPOSE 80/tcp
EXPOSE 443/tcp

CMD ["./start.sh"]
