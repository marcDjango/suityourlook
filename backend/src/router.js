const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import productsControllers module for handling products-related operations
const modelsControllers = require("./controllers/modelsControllers");
const productControllers = require("./controllers/productControllers");

// Route to get a list of products
router.get("/models", modelsControllers.browse);
router.get("/models/:id", modelsControllers.read);
router.post("/models", modelsControllers.add);
router.put("/models/:id", modelsControllers.edit);
router.delete("/models/:id", modelsControllers.destroy);

router.get("/products", productControllers.browse);
router.get("/products/:id", productControllers.read);
router.post("/products", productControllers.add);
router.put("/products/:id", productControllers.edit);
router.delete("/products/:id", productControllers.destroy);

/* ************************************************************************* */

module.exports = router;
