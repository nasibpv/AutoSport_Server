const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const productSchema = new mongoose.Schema(
  {
    id: { type: Number, unique: true }, // Auto-incremented
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    category: { type: String },
    scent: { type: String },
    description: { type: String },
    ingredients: { type: [String], default: [] },
    rating: { type: Number, default: 0 },
    reviews: { type: Number, default: 0 },
    inStock: { type: Boolean, default: true },
    isNew: { type: Boolean, default: false }
  },
  { timestamps: true }
);

// ✅ Use the correct field name here:
productSchema.plugin(AutoIncrement, { inc_field: "id" });

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
