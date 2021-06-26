const app = require("express")();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const { configureRoutes } = require("../routes");
const routes = configureRoutes();
app.use("/", routes);
module.exports.app = app;
