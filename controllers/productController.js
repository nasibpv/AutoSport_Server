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
    const {
      name,
      category,
      scent,
      price,
      description,
      image,
      ingredients,
      rating,
      reviews,
      inStock,
      isNew
    } = req.body;

    if (!name || !price || !image) {
      return res.status(400).json({ error: "Name, price, and image are required" });
    }

    const product = new Product({
      name,
      category,
      scent,
      price,
      description,
      image,
      ingredients,
      rating,
      reviews,
      inStock,
      isNew
    });

    await product.save();
    res.status(201).json({ message: "Product added successfully", product });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to add product" });
  }
};

module.exports = { getProducts, addProduct };
