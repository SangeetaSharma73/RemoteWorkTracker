const express = require("express");
const cors = require("cors");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test route
app.get("/check", (req, res) => {
  res.send("Server is running ✅");
});

module.exports = app;
