FROM node:18
WORKDIR /app-node-library
COPY . .
RUN npm install
ENTRYPOINT npm run dev