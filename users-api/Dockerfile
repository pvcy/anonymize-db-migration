FROM node:18

WORKDIR /app
COPY ./users-api/src/package*.json ./
RUN npm install

ADD ./users-api/src .
ADD ./users-api/data/users.json ./users.json

EXPOSE 8080

CMD ["./docker-entrypoint.sh"]
# CMD [ "node", "server.js" ]
