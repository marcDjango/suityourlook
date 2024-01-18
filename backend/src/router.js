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
const modelsProductsControllers = require("./controllers/modelsProductsControllers");
const favoriteControllers = require("./controllers/favoriteControllers");

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

router.get("/products", productControllers.browse);
router.get("/products/:id", productControllers.read);

router.get("/models-products", modelsControllers.readModelsAndProducts);

router.get("/models", modelsControllers.browse);
router.get("/models/:id", modelsControllers.read);

router.get("/favorite", favoriteControllers.readFavorite);
// Add middleware to verify if the user is authenticated
router.use(verifyToken);

router.put("/users/:id", userControllers.edit);
router.delete("/users/:id", userControllers.destroy);

router.post("/favorite", favoriteControllers.add);

// Add middleware to verify if the user is an admin
router.use(verifyAdmin);

router.post("/products", productControllers.add);
router.put("/products/:id", productControllers.edit);
router.delete("/products/:id", productControllers.destroy);

router.post("/models", modelsControllers.add);
router.put("/models/:id", modelsControllers.edit);
router.delete("/models/:id", modelsControllers.destroy);

// Route for CLOUDINARY
router.post("/models/upload", modelsControllers.uploadCloud);
// router.get("/models/images", modelsControllers.getImagesFromCloud)

// Route for CLOUDINARY
router.post("/products/upload", productControllers.uploadCloud);
// router.get("/products/images", productControllers.getImagesFromCloud);

router.post("/models-products", modelsProductsControllers.add);

module.exports = router;
