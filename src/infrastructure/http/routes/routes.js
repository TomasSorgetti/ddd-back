const { Router } = require('express');

const routes = Router();

routes.use("/users", require("./users.routes"));

module.exports = routes