FROM nginx:alpine
WORKDIR /home-web

COPY nginx/nginx.conf /etc/nginx/conf.d/nginx.conf
COPY build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

