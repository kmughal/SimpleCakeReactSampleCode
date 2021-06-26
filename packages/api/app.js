const { configureRoutes } = require("./routes");
const { configureMiddleWares } = require("./middlewares");

module.exports.configureApp = async (app) => {
  await configureMiddleWares(app);
  const routes = configureRoutes();
  app.use("/", routes);
};
