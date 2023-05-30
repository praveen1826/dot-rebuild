FROM node:18.16-slim

RUN mkdir -p /home/DOT-REBUILD

WORKDIR /home/DOT-REBUILD

RUN apt-get update \
    && apt-get install -y wget gnupg \
    && wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
    && apt-get update \
    && apt-get install -y google-chrome-stable fonts-ipafont-gothic fonts-wqy-zenhei fonts-thai-tlwg fonts-kacst fonts-freefont-ttf libxss1 \
      --no-install-recommends \
    && rm -rf /var/lib/apt/lists/*

COPY . .

WORKDIR /home/DOT-REBUILD/frontend

RUN npm install --legacy-peer-deps

RUN npm run build

WORKDIR /home/DOT-REBUILD/backend

RUN npm ci

RUN npm i pm2 -g

EXPOSE 3000 5000 5001

CMD [ "pm2-runtime", "start", "server.js"]