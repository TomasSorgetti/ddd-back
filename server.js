const server = require("./src/app.js");
const config = require("./src/config/index.config");
const { syncDatabase } = require("./src/infrastructure/database/database");

syncDatabase()
  .then(() => {
    server.listen(config.serverConfig.port, () => {
      console.log("- - - - - - - - - - - - - - -");
      console.log(`Server listening on port ${config.serverConfig.port}`);
      console.log("- - - - - - - - - - - - - - -");
    });
  })
  .catch((err) => {
    console.error(err);
  });
