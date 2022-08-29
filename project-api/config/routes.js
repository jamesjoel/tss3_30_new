const routes = require("express").Router();

routes.use("/api/city", require("../controllers/CityController"));
routes.use("/api/user", require("../controllers/UserController"));
routes.use("/api/login", require("../controllers/LoginController"));
routes.use("/api/admin", require("../controllers/AdminController"));
routes.use("/api/category", require("../controllers/CategoryController"));

module.exports = routes;