const Product = require("../models/Products");

// @desc Get all products
// @route GET /api/products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

// @desc Add a new product
// @route POST /api/products
const addProduct = async (req, res) => {
  try {
    const { title, category, price, description, imageUrl } = req.body;

    if (!title || !price) {
      return res.status(400).json({ error: "Title and price are required" });
    }

    const product = new Product({
      title,
      category,
      price,
      description,
      imageUrl
    });

    await product.save();
    res.status(201).json({ message: "Product added successfully", product });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to add product" });
  }
};

module.exports = { getProducts, addProduct };
