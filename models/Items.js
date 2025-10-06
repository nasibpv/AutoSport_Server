const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

const itemSchema = new mongoose.Schema(
  {
    Id: { type: Number, unique: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    category: { type: String, default: "Unisex" },
    scent: { type: String, default: "Unknown" },
    description: { type: String },
    ingredients: { type: [String], default: [] },
    rating: { type: Number, default: 0 },
    reviews: { type: Number, default: 0 },
    inStock: { type: Boolean, default: true },
    isNew: { type: Boolean, default: false },
  },
  { timestamps: true }
);
itemSchema.plugin(AutoIncrement, {
  inc_field: "Id",
  id: "item_id_counter",
  start_seq: 1,
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
