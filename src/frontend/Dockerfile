FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

# Install dependencies including devDependencies
RUN npm install

COPY . .

EXPOSE 3000
EXPOSE 3001

# Make the start script executable
RUN chmod +x /app/start-services.sh

# Use shell to run the script
CMD ["/bin/sh", "/app/start-services.sh"] 