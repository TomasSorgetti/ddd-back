const { Sequelize } = require("sequelize");
const config = require("../../config/index.config.js");

const sequelize = new Sequelize(
  config.dbConfig.db_name,
  config.dbConfig.db_user,
  config.dbConfig.db_password,
  {
    host: config.dbConfig.db_host,
    dialect: config.dbConfig.db_dialect,
  }
);
module.exports = { sequelize };

require("./models/user.model");
require("./associations");

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

async function syncDatabase() {
  try {
    await sequelize.sync({ force: false });
    console.log("Database & tables synchronized successfully.");
  } catch (err) {
    console.error("Unable to sync the database:", err);
    throw err; // Lanza el error para que el servidor no inicie si la sincronización falla
  }
}

module.exports.syncDatabase = syncDatabase;
