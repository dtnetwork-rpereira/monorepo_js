printf "\n\x1B[4mDevelopment script provided by\033[0m \033[4;38;2;197;63;209mRCovery\033[0m\n\n"

pm2 delete all
pm2 start dev.ecosystem.config.js
