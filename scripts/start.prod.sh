#!bin/bash

printf "\n\033[4mProduction script provided by\033[0m \033[4;38;2;197;63;209mRCovery\033[0m\n\n"

pm2 startOrReload ../ecosystem.config.js
