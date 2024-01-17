const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations

const validateUser = require("./middlewares/validateUser");
const userControllers = require("./controllers/userControllers");
const {
  hashPassword,
  verifyPassword,
  verifyToken,
} = require("./middlewares/authentication");
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

router.post("/users", hashPassword, validateUser, userControllers.add);

router.post(
  "/users/login",
  userControllers.readByEmailAndPassToNext,
  verifyPassword
);
router.get("/users", userControllers.browse);
router.put("/users/:id", userControllers.edit);
router.delete("/users/:id", userControllers.destroy);

router.use(verifyToken);

module.exports = router;
