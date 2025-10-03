const Item = require("../models/Items");

// @desc Get all items
// @route GET /api/items
const getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch items" });
  }
};

// @desc Add a new item
// @route POST /api/items
const addItem = async (req, res) => {
  try {
    const {
      name,
      price,
      image,
      category,
      scent,
      description,
      ingredients,
      rating,
      reviews,
      inStock,
      isNew,
    } = req.body;

    if (!name || !price || !image) {
      return res.status(400).json({ error: "Name, price, and image are required" });
    }

    const item = new Item({
      name,
      price,
      image,
      category,
      scent,
      description,
      ingredients,
      rating,
      reviews,
      inStock,
      isNew,
    });

    await item.save();
    res.status(201).json({ message: "Item added successfully", item });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to add item" });
  }
};

module.exports = { getItems, addItem };
