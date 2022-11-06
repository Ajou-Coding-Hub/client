## STAGE 1
### Build React
FROM node:16 AS builder
ENV NODE_ENV production

WORKDIR /usr/src/app

# Copy Yarn Things
COPY .yarn ./.yarn
COPY .yarnrc.yml ./

# Install app dependencies
COPY package.json yarn.lock ./
RUN yarn install

COPY . .
RUN yarn run build

## STAGE 2
### Build Nginx
FROM nginx:latest

COPY --from=builder /usr/src/app/dist /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
