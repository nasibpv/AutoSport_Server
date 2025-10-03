require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require("./config/db.js");
const cloudinary = require('./config/cloudinary.js');
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger/swagger.js");
const productReoutes = require("./routes/productRoutes.js");
const itemRoutes = require("./routes/ItemRoutes.js"); // ← ADD THIS LINE

const app = express();
connectDB();
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

// ✅ Test Server Route
app.get('/', (req, res) => {
  res.send('Backend is running...');
});


app.use("/api/products",productReoutes);

app.use("/api/items", itemRoutes); // ← REGISTER ITEM ROUTES

app.get("/", (req, res) => {
  res.send("Backend is running...");
});

// const multer = require("multer");

// // store file in memory or disk
// const storage = multer.memoryStorage(); 
// const upload = multer({ storage });

// app.post("/addProduct", upload.single("image"), async (req, res) => {
//   try {
//     const { title, category, price, description } = req.body;
//     const file = req.file; // this is your uploaded image

//     console.log("Form fields:", req.body);
//     console.log("Uploaded file:", file);

//     // later, upload file.buffer to Cloudinary if you want

//     res.status(201).json({
//       message: "Product added successfully",
//       data: {
//         title,
//         category,
//         price,
//         description,
//         image: file ? file.originalname : null,
//       },
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Failed to add product" });
//   }
// });


app.listen(process.env.PORT, () => {
  console.log(`🚀 Server running on port ${process.env.PORT}`);
});
