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
    console.error("ATTENDANCE ERROR:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getTodayAttendance = async (req, res) => {
  try {
    const userId = req.user.id;
    const result = await attendanceService.getTodayAttendance(userId);
    return res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.error("GAGAL MENGAMBIL DATA HARI INI", error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getTotalAttendance = async (req, res) => {
  try {
    const userId = req.user.id;
    const result = await attendanceService.getTotalAttendance(userId);
    return res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.error("GAGAL MENGAMBIL TOTAL DATA", error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getUserAttendance = async (req, res) => {
  try {
    const userId = req.user.id;

    // Ambil page dan limit dari query string, berikan nilai default jika tidak diisi
    // req.query mengembalikan string, jadi kita parsing ke Integer
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;

    // Panggil service dengan parameter pagination baru
    const result = await attendanceService.getUserAttendance(
      userId,
      page,
      limit,
    );

    return res.status(200).json({
      success: true,
      message: "Berhasil mengambil data absensi",
      ...result, // Ini akan otomatis mengekstrak { metadata, data } dari service sebelumnya
    });
  } catch (error) {
    console.error("GAGAL MENGAMBIL DATA ATTENDANCE", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
module.exports = {
  getAttendance,
  attendance,
  getTodayAttendance,
  getTotalAttendance,
  getUserAttendance,
};
