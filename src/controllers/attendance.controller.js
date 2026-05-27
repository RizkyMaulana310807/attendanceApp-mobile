const attendanceService = require("../services/attendance.services");

const getAttendance = async (req, res) => {
  try {
    const attendances = await attendanceService.getAllAttendance();
    res.status(200).json({
      success: true,
      message: "berhasil ambil attendance",
      data: attendances,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "server error",
    });
  }
};

const attendance = async (req, res) => {
  try {
    const userId = req.user.id;

    const result = await attendanceService.attendanceAction(userId);

    return res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getAttendance,
};
