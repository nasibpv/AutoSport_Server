require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require("./config/db.js");
const cloudinary = require('./config/cloudinary.js');
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger/swagger.js");
const productRoutes = require("./routes/productRoutes.js");

const app = express();

connectDB()
  .then(() => console.log("MongoDB connected successfully"))
  .catch(err => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });

app.use(cors());
app.use(express.json());

app.get('/check-cloudinary', async (req, res) => {
  try {
    const result = await cloudinary.api.ping();
    res.json({ success: true, result });
  } catch (err) {
    res.json({ success: false, error: err.message });
  }
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/', (req, res) => {
  res.send('Backend is running...');
});

app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
