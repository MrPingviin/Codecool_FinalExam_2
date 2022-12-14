FROM nginx:alpine
COPY . /usr/share/nginx/html
FROM apache
COPY . /var/www/html