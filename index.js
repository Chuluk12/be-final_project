const express = require("express");
const bodyParser = require("body-parser");
require("express-group-routes");
const path = require("path");
const paginate = require("express-paginate");

const AuthRoutes = require("./routes/auth-routes");
const ProductRoutes = require("./routes/product-routes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET,PUT,PATCH,POST,DELETE,OPTIONS"
  );
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(paginate.middleware(10, 50));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(AuthRoutes);
app.use(ProductRoutes);

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`App running on port ${PORT}`);
});