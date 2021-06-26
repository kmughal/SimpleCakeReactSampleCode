const bodyParser = require("body-parser");
const cors = require("cors");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const helmet = require("helmet");

async function configureMiddleWares(app) {

  const swaggerOptions = {
    swaggerDefinition: {
      info: {
        title: "Epsilon Promotion",
        description: "Epsilon Promotion",
        contact: {
          name: "Epsilon Dev team",
        },
        servers: ["http://localhost:3001"],
      },
    },
    apis: ["./controllers/*.js"],
  };
  const swaggerDoc = await swaggerJsDoc(swaggerOptions);
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

  app.use((err, req, res, next) => {
    try {
      if (err) throw err;
      res.setHeader("Access-Control-Allow-Origin", "http://localhost:3001");
      res.setHeader(
        "Access-Control-Allow-Methods",
        "OPTIONS,GET,POST,PUT,DELETE"
      );
      res.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Type,Authorization"
      );
      if (req.method === "OPTOINS") {
        return res.sendStatus(204);
      }
      next();
    } catch (e) {
      res.status(502).send("Something went wrong.");
    }
  });

  app.use(
    bodyParser.json(),
    bodyParser.urlencoded({ extended: false }),
    cors(),
    helmet()
  );
}

module.exports.configureMiddleWares = configureMiddleWares;
