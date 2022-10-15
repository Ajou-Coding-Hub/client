## STAGE 2
### Build Nginx
FROM nginx:latest

RUN rm /etc/nginx/conf.d/default.conf

COPY ./dist /usr/share/nginx/html

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]