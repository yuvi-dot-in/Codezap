//this is the master file for all routes

const Router = require("express").Router();

Router.use("/user", require("./user/user"));
// Router.use("/contest")
// Router.use("/practice")
// Router.use("/admin")


Router.get("/", (req, res) => {
  return res.send("hi");
});

module.exports = Router;
