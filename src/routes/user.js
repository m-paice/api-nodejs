const express = require("express");
const route = express.Router();

const userController = require("../controller/user");

route.post("/user", userController.create);
route.get("/user", userController.list);

module.exports = route;
