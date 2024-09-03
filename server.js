const server = require("./src/app.js");
const config = require("./src/config/index.config");

server.listen(config.serverConfig.port, () => {
  console.log("- - - - - - - - - - - - - - -");
  console.log(`Server listening on port ${config.serverConfig.port}`);
  console.log("- - - - - - - - - - - - - - -");
});
