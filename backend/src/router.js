const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations

const validateUser = require("./middlewares/validateUser");
const {
  hashPassword,
  verifyPassword,
  verifyAdmin,
  verifyToken,
} = require("./middlewares/authentication");
// Import productsControllers module for handling products-related operations
const userControllers = require("./controllers/userControllers");
const modelsControllers = require("./controllers/modelsControllers");
const productControllers = require("./controllers/productControllers");

/* ************************************************************************* */

router.post("/users", hashPassword, validateUser, userControllers.add);
router.post(
  "/users/login",
  userControllers.readByEmailAndPassToNext,
  verifyPassword
);
router.get("/users", userControllers.browse);

router.get("/products", productControllers.browse);
router.get("/products/:id", productControllers.read);

router.get("/models", modelsControllers.browse);
router.get("/models/:id", modelsControllers.read);

// Add middleware to verify if the user is authenticated
router.use(verifyToken);

router.put("/users/:id", userControllers.edit);
router.delete("/users/:id", userControllers.destroy);

// Add middleware to verify if the user is an admin
router.use(verifyAdmin);

router.post("/products", productControllers.add);
router.put("/products/:id", productControllers.edit);
router.delete("/products/:id", productControllers.destroy);

router.post("/models", modelsControllers.add);
router.put("/models/:id", modelsControllers.edit);
router.delete("/models/:id", modelsControllers.destroy);

module.exports = router;
