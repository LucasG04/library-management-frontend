# lucasg04/library-management-frontend
FROM node:22-alpine

WORKDIR /usr/app

COPY ./dist/library-management ./

CMD node server/server.mjs
EXPOSE 4000
