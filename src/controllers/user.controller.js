const userService = require("../services/user.service");

const getUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();

    res.status(200).json({
      success: true,
      message: "Berhasil ambil user",
      data: users,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

const login = async (req, res) => {
  try {
    console.log(req.body);

    const { email, password } = req.body;

    const result = await userService.login(email, password);

    return res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.log(error);

    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getUsers,
  login,
};
