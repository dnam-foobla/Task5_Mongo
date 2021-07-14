const { Router } = require("express");
const {
  getProducts,
  createProduct,
  putProduct,
  deleteProduct,
  getProduct,
} = require("../controllers/productController");

const productRouter = new Router();

productRouter.get("/", getProducts);
productRouter.get("/:id", getProduct);
productRouter.post("/create", createProduct);
productRouter.put("/:id", putProduct);
productRouter.delete("/:id", deleteProduct);

module.exports = productRouter;
