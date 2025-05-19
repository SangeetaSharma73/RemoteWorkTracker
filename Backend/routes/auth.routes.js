const express = require("express");
const { body } = require("express-validator");
const authController = require("../controllers/auth.controller");
const validateInput = require("../middlewares/validateInput.middleware");

const router = express.Router();

router.post("/register", [
  body("name").not().isEmpty().withMessage("Name is required"),
  body("email").not().isEmpty().withMessage("Email is required"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),
  validateInput,
  authController.register,
]);

module.exports = router;
