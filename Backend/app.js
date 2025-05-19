const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth.routes");
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test route
app.get("/check", (req, res) => {
  res.send("Server is running ✅");
});
app.use("/api/auth", authRoutes);

module.exports = app;
