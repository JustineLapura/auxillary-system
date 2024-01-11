const express = require("express");

// controller functions
const { loginUser, signupUser } = require("../controllers/auth");

const router = express.Router();

// LOGIN user
router.post("/login", loginUser);
// SIGNUP user
router.post("/signup", signupUser);

module.exports = router;
