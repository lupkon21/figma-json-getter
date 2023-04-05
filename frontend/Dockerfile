# build stage
FROM node:lts-alpine as build
WORKDIR /app
COPY package.json .
ARG REACT_APP_REST_API_URL
ENV REACT_APP_REST_API_URL=$REACT_APP_REST_API_URL
RUN npm install --silent
COPY . .
RUN npm run build

# prepare nginx
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY /nginx/nginx.conf /etc/nginx/conf.d

# run nginx
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]