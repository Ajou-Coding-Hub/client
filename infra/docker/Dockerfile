## STAGE 1
### Build React
FROM node:16 AS builder

# Install app dependencies
RUN yarn install

RUN yarn run build


## STAGE 2
### Build Nginx
FROM nginx:latest

COPY --from=builder ./dist /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
