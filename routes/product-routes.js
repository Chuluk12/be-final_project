  
const express = require("express");
require("express-group-routes");
const app = express();
const auth = require("../middleware/authenticate");
const upload = require("../middleware/upload");

const ProductController = require("../controllers/product-controller");

app.group("/api/v1/products", (router) => {
  router.post("/", upload.array("image", 5), ProductController.store);
  router.get("/", ProductController.getall);
  router.get("/:id", ProductController.getone);
  router.put("/:id", upload.array("image", 5), ProductController.update);
  router.delete("/:id", ProductController.destroy);
});

module.exports = app;