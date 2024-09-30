# Multi-stage
# 1) Node image for building frontend assets
# 2) nginx stage to serve frontend assets

FROM node:21.7.3-alpine AS builder
WORKDIR /app

COPY docs ./docs
COPY package.json .

RUN ls

RUN npm install
RUN npm run docs:build

FROM nginx:alpine
WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder /app/docs/.vitepress/dist .

#Change nginx config
RUN echo "server {\
  listen       80;\
  server_name  localhost;\
  location / {\
    root   /usr/share/nginx/html;\
    index  index.html;\
    try_files \$uri \$uri/ /index.html;\
  }\
  error_page   500 502 503 504  /50x.html;\
  location = /50x.html {\
    root   /usr/share/nginx/html;\
  }\
}" > /etc/nginx/conf.d/default.conf

EXPOSE 80

MAINTAINER "Artur Kołecki <biuro@minecodes.pl>"

ENTRYPOINT ["nginx", "-g", "daemon off;"]
