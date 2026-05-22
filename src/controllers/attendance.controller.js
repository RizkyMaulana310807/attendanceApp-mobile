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

module.exports = {
  getAttendance,
};
