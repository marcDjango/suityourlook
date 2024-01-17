const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const modelsControllers = require("./controllers/modelsControllers");

// Route to get a list of items
router.get("/models", modelsControllers.browse);

// Route to get a specific item by ID
router.get("/models/:id", modelsControllers.read);

// Route to add a new item
router.post("/models", modelsControllers.add);

/* ************************************************************************* */

module.exports = router;
