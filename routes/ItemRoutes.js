const express = require("express");
const { getItems, addItem,updateItem,deleteItem } = require("../controllers/itemController");

const router = express.Router();

/**
 * @swagger
 * /api/items:
 *   get:
 *     summary: Get all items
 *     responses:
 *       200:
 *         description: List of items
 */
router.get("/", getItems);

/**
 * @swagger
 * /api/items:
 *   post:
 *     summary: Add a new item
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - price
 *               - image
 *             properties:
 *               name:
 *                 type: string
 *                 example: Midnight Noir
 *               category:
 *                 type: string
 *                 example: Unisex
 *               scent:
 *                 type: string
 *                 example: Oriental
 *               description:
 *                 type: string
 *                 example: A mysterious and captivating fragrance...
 *               image:
 *                 type: string
 *                 example: https://example.com/image.png
 *               ingredients:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ["Bergamot", "Sandalwood"]
 *               rating:
 *                 type: number
 *                 example: 4.8
 *               reviews:
 *                 type: number
 *                 example: 234
 *               inStock:
 *                 type: boolean
 *                 example: true
 *               isNew:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       201:
 *         description: Item created successfully
 */
router.post("/", addItem);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);

module.exports = router;
