FROM node:12.4.0

ADD ./ /opt/app
WORKDIR /opt/app

RUN npm install

ENV PORT 80
EXPOSE 80

CMD ["npm", "run", "start"]