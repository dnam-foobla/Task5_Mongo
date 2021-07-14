const express = require("express");
const bodyParser = require("body-parser");
const productRouter = require("./router/productRouter");

require("dotenv").config();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/product", productRouter);

app.listen(process.env.PORT, () => {
  console.log("Connected to server on port 3000");
});
