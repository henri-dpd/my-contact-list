# Use the official Node.js image as the base image
FROM node:20.11.1-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Move to the client directory,
WORKDIR /usr/src/app/client

# Create an .env file with a pipe and set an environment variable
RUN echo "VITE_APP_API_URL=/api" > .env

# Install client dependencies
RUN npm install

# Build the client application
RUN npm run build

# Move back to the root working directory
WORKDIR /usr/src/app

# Build the NestJS application
RUN npm run build

# Expose the application port
EXPOSE 3001

# Command to run the application
CMD ["node", "dist/main"]