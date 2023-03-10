FROM node:slim

WORKDIR /home/app

RUN apt update
# RUN apt --fix-broken install -y
RUN apt install git sudo curl procps wget -y
RUN echo "node ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers

RUN apt install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb -y

RUN npm install pm2 -g
RUN npm install @nestjs/cli -g

USER node

ENTRYPOINT tail -f /dev/null
