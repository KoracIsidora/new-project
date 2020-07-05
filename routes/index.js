const express = require("express");
const router = express.Router();

// Login/Landing page
// Get /
router.get("/", (req, res) => {
  res.render("login", {
    layout: "login"
  });
});

// Dashboard page
// Get /dashboard
router.get("/dashboard", (req, res) => {
    res.render("dashboard");
  });

module.exports = router;
