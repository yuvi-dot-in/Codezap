//this is the master file for all routes

const Router = require("express").Router();

const ensureAuthenticated = require("../middleware/ensureAuthenticated/ensureAuthenticated");

Router.use("/users", ensureAuthenticated, require("./user/user"));
// Router.use("/contest")
// Router.use("/practice")
// Router.use("/admin")

Router.get("/", ensureAuthenticated, (req, res) => {
  return res.send("hi");
});

module.exports = Router;
