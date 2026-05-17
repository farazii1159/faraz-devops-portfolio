# ---------- BUILD STAGE ----------
FROM node:20 AS builder

# Working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Build Vite app
RUN npm run build

# ---------- PRODUCTION STAGE ----------
FROM nginx:stable-alpine

# Copy build files to nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose nginx port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]