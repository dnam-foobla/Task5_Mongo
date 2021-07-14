const mongoose = require("../connection");

// Create schema
const productSchema = new mongoose.Schema({
  name: String,
  amount: Number,
  price: Number,
});

// Create class
const Product = mongoose.model("product", productSchema);

module.exports = Product;
