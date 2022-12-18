FROM node:16.16.0-alpine

RUN mkdir -p /app
# Create app directory
WORKDIR /app
# Install app dependencies
COPY . /app
RUN npm install -s


EXPOSE 4001
ENV PORT 4001
CMD [ "node", "index.js" ]
