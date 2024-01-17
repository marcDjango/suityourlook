const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import
const productControllers = require("./controllers/productControllers");

router.get("/products", productControllers.browse);
router.get("/products/:id", productControllers.read);
router.post("/products", productControllers.add);
router.put("/products/:id", productControllers.edit);
router.delete("/products/:id", productControllers.destroy);

/* ************************************************************************* */

module.exports = router;
