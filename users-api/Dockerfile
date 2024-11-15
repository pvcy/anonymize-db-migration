FROM node:18

WORKDIR /app
COPY ./src/package*.json ./
RUN npm install

COPY ./src .
COPY ./data/ .

EXPOSE 8080

CMD ["./docker-entrypoint.sh"]
