FROM node:lts-slim
WORKDIR /tmp
COPY package.json .
RUN mkdir /node_modules && yarn
RUN npm config set unsafe-perm true
WORKDIR /app