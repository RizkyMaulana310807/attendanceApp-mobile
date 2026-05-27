const express = require("express");

const router = express.Router();

const userController = require("../controllers/user.controller");

const authMiddleware = require("../middleware/user.middleware");

router.post("/login", userController.login);

router.get("/profile", authMiddleware, (req, res) => {
  res.json({
    success: true,
    user: req.user,
  });
});

router.get("/", userController.getUsers);

module.exports = router;
