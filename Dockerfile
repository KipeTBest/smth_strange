# Stage 1: Install dependencies
FROM node:14 AS builder
WORKDIR /app
COPY package.json ./
RUN npm install

# Stage 2: Copy app files and install only production dependencies
FROM node:14-alpine
WORKDIR /app
COPY --from=builder /app/node_modules /app/node_modules
COPY . .

EXPOSE 3000
CMD ["npm", "start"]
