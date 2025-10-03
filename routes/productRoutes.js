const express = require("express");
const { getProducts, addProduct } = require("../controllers/productController");

const router = express.Router();

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Get all products
 *     responses:
 *       200:
 *         description: List of products
 */
router.get("/", getProducts);

/**
 * @swagger
 * /api/products:
 *   post:
 *     summary: Add a new product
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - price
 *             properties:
 *               title:
 *                 type: string
 *                 example: Phone
 *               category:
 *                 type: string
 *                 example: Electronics
 *               price:
 *                 type: number
 *                 example: 15000
 *               description:
 *                 type: string
 *                 example: "Latest smartphone"
 *               imageUrl:
 *                 type: string
 *                 example: "https://example.com/image.png"
 *     responses:
 *       201:
 *         description: Product created successfully
 */
router.post("/", addProduct);

module.exports = router;
