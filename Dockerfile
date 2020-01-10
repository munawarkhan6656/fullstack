FROM node:latest as builder
RUN apt-get update && apt-get install
# RUN apt-get install zip

Run mkdir /app
WORKDIR /app
COPY package.json /app
COPY . /app
Run npm install
RUN npm run build
EXPOSE 4200:80
ENTRYPOINT  npm run start:stage









# FROM node:latest as builder
# RUN apt-get update && apt-get install

# Run mkdir /app
# WORKDIR /app
# COPY package.json /app
# COPY . /app
# Run npm install
# RUN npm run build


# FROM nginx:1.15.8-alpine as webServer
# COPY --from=builder /app/dist/chairlift/ /usr/share/nginx/html
# COPY default.conf /etc/nginx/conf.d
# EXPOSE 80
# CMD ["nginx", "-g","daemon off;"]
