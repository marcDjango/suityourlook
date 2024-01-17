const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const itemControllers = require("./controllers/itemControllers");
const validateUser = require("./middlewares/validateUser");
const userControllers = require("./controllers/userControllers");
const {
  hashPassword,
  verifyPassword,
  verifyToken,
} = require("./middlewares/authentication");

// Route to get a list of items
router.get("/items", itemControllers.browse);

// Route to get a specific item by ID
router.get("/items/:id", itemControllers.read);

// Route to add a new item
router.post("/items", itemControllers.add);

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
