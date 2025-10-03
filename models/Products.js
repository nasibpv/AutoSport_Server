const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);


const productSchema = new mongoose.Schema(
  {
    Id: { type: Number, unique: true }, 
    title: { type: String, required: true },
    category: String,
    price: Number,
    description: String,
    imageUrl: String,
  },
  { timestamps: true }
);

productSchema.plugin(AutoIncrement,{inc_field:"Id"});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
