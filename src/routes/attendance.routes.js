const express = require("express");

const router = express.Router();

const attendanceController = require("../controllers/attendance.controller");

const authMiddleware = require("../middleware/user.middleware");

router.get("/", attendanceController.getAttendance);

router.post("/action", authMiddleware, attendanceController.attendance);
router.get("/today", authMiddleware, attendanceController.getTodayAttendance);
router.get("/total", authMiddleware, attendanceController.getTotalAttendance);
router.get(
  "/userAttendance",
  authMiddleware,
  attendanceController.getUserAttendance,
);

module.exports = router;
