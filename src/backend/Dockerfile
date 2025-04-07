FROM php:8.2-apache

RUN apt-get update && apt-get install -y \
    libzip-dev \
    zip \
    && docker-php-ext-install zip pdo pdo_mysql

RUN a2enmod rewrite

# Configure Apache for API routing
COPY apache-config.conf /etc/apache2/sites-available/000-default.conf

WORKDIR /var/www/html

COPY . .

EXPOSE 8000

CMD ["apache2-foreground"] 