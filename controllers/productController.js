const { ObjectID } = require("mongodb");
const mongoose = require("../connection");
const Product = require("../schemas/productSchema");

// Done
module.exports.createProduct = async (req, res) => {
  const { name, amount, price } = req.body;
  // Create instance, object --> document
  const product = new Product({
    name: name,
    amount: amount,
    price: price,
  });
  await product
    .save()
    .then((done) => res.sendStatus(200))
    .catch((err) => res.sendStatus(400));
};

// Done
module.exports.getProduct = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("Can not find that id");
  }

  const data = await Product.findById(id).exec();
  res.status(200).json(data);
};

// Done
module.exports.getProducts = async (req, res) => {
  await Product.find()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.sendStatus(400);
    });
};

// Done
module.exports.deleteProduct = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("Can not find that id");
  }
  await Product.findByIdAndDelete(id)
    .then((data) => res.sendStatus(200))
    .catch((err) => res.sendStatus(400));
};
// Done
module.exports.putProduct = async (req, res) => {
  const { id } = req.params;
  console.log(req.body);
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("Can not find that id");
  }
  const newProduct = {
    $set: { ...req.body, _id: id },
  };
  try {
    await Product.findByIdAndUpdate(id, newProduct);
  } catch (err) {
    res.sendStatus(400);
  }
  res.sendStatus(200);
};
