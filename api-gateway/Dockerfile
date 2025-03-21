FROM nginx:alpine
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./proxy.conf /etc/nginx/conf.d/proxy.conf
COPY ./default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]