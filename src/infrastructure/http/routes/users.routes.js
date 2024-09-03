const { Router } = require("express");
const UserService = require("../../../domain/user/services/user.service");
const UserController = require("../controllers/user.controller");
const SequelizeUserRepository = require("../../repositories/Sequelize.user.repository");

const userRepository = new SequelizeUserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

const userRouter = Router();

userRouter.get("/:id", (req, res) => userController.getUserById(req, res));

module.exports = userRouter;
