require("dotenv").config();
const app = require("express")();
const { connect } = require("./database");
const { configureApp } = require("./app");

connect().then(async () => {
  const port = process.env.PORT || 3001;
  app.listen(port, async () => {
    console.log("listening:", port);
    configureApp(app);
  });
});
