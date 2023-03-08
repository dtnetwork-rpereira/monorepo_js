module.exports = {
  apps: [
    {
      name: "web",
      script: "yarn web:start",
    },
    {
      name: "core",
      script: "yarn core:start",
      env: {
        PORT: 3001,
      },
    },
  ],
};
