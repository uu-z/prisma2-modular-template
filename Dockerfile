FROM node:12-alpine

ADD ./ /opt/app
WORKDIR /opt/app

RUN yarn install --production=true

RUN npm prune --production

ENV PORT 80
EXPOSE 80

CMD ["npm", "run", "start"]