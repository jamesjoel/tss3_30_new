const routes = require("express").Router();

routes.use("/api/city", require("../controllers/CityController"));
routes.use("/api/user", require("../controllers/UserController"));

module.exports = routes;