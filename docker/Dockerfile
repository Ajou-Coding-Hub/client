## STAGE 0
### Install Node Modules



## STAGE 1
### Build React
FROM node:alpine as build

# set working directory
# this is the working folder in the container from which the app
# will be running from
WORKDIR /app

# add the node_modules folder to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# copy package.json file to /app directory for installation prep
COPY ./package.json /app/

# install dependencies
RUN yarn --silent

# copy everything to /app directory
COPY . /app

# build the app 
RUN yarn build


## STAGE 2
### Build Nginx
FROM nginx:latest

RUN rm /etc/nginx/conf.d/default.conf

COPY ./default.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]