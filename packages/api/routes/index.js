const express = require("express");
const router = express.Router();
const { cakeControllerInstance } = require("../controllers");
const {
  addNewCakeRequestValidator,
  deleteCakeRequestValidator,
} = require("../route-validators");

function configureRoutes() {
  router.get("/cakes", cakeControllerInstance.getAllCakes);
  router.post(
    "/cake",
    addNewCakeRequestValidator,
    cakeControllerInstance.addNewCake
  );
  router.delete(
    "/cake",
    deleteCakeRequestValidator,
    cakeControllerInstance.deleteCakeById
  );
  return router;
}

module.exports.configureRoutes = configureRoutes;
