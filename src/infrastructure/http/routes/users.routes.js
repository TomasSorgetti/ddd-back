const { Router } = require("express");

const usersRoutes = Router();

usersRoutes.get("/", (req, res) => {
  res.send("Get users");
});
usersRoutes.post("/", (req, res) => {
  res.send("Post users");
});
usersRoutes.put("/", (req, res) => {
  res.send("Put users");
});
usersRoutes.delete("/", (req, res) => {
  res.send("Delete users");
});

module.exports = usersRoutes;
