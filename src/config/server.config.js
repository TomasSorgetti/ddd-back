require("dotenv").config();

const serverConfig = {
  node_env: process.env.NODE_ENV || "production",
  port: process.env.PORT || 8080,
};

module.exports = serverConfig;
