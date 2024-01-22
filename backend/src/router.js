const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import auth services for security operations
const { hashPassword, verifyToken } = require("./services/Auth");

// Import itemControllers module for handling item-related operations
const itemControllers = require("./controllers/itemControllers");
const bikeControllers = require("./controllers/bikeControllers");

// // Route to get a list of items
router.get("/items", itemControllers.browse);

// // Route to get a specific item by ID
router.get("/items/:id", itemControllers.read);

// // Route to add a new item
router.post("/items", itemControllers.add);

/* ************************************************************************* */

router.get("/bikes", bikeControllers.getBikes);

/* ************************************************************************* */

// Import userControllers module for handling user-related operations
const userControllers = require("./controllers/userControllers");

router.get("/users", userControllers.browse);
router.get("/users/:id", userControllers.read);
router.post("/users", hashPassword, userControllers.add);

router.get("/welcomeadmin", verifyToken, userControllers.welcomeAdmin); // <------------- route admin

// Import authControllers module for handling auth-related operations
const authControllers = require("./controllers/authControllers");

router.post("/login", authControllers.login);
router.get("/logout", authControllers.logout);

module.exports = router;
