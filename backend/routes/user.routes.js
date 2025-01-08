const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const userControllers = require("../controller/user.controllers");

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Please enter a valid email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
    body("fullname.firstname")
      .isLength({ min: 2 })
      .withMessage("Fullname must be at least 2 characters long"),
  ],
  userControllers.registerUser
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Please enter a valid email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  userControllers.loginUser
);

module.exports = router;
