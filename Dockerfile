FROM node:12-buster-slim
WORKDIR /app/
COPY package*.json ./
COPY yarn.lock ./
COPY . /
RUN yarn
EXPOSE 4000
CMD yarn staging