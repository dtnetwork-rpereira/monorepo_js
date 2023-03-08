module.exports = {
  apps: [
    {
      name: "web",
      script: "yarn web:dev",
    },
    {
      name: "core",
      script: "yarn core:dev",
      env: {
        PORT: 3001,
      },
    },
  ],
};
