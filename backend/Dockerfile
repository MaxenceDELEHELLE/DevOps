FROM node:20-alpine

# Set working directory inside the container
WORKDIR /app

# Copy only package files first (for better caching)
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of your application files
COPY . .

# Expose port 8080 for Kubernetes/Minikube
EXPOSE 8080

# Start the backend server
CMD ["node", "server.js"]

