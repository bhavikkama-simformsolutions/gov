FROM node:14-buster-slim 
WORKDIR /app/
#COPY package*.json ./
COPY yarn.lock /app
#COPY .env /app
COPY . /app
RUN yarn
EXPOSE 4000
CMD yarn staging
