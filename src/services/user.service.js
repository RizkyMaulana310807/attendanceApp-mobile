const prisma = require("../config/prisma");

const getAllUsers = async () => {
  return await prisma.user.findMany({
    select: {
      id: true,
      nama: true,
      email: true,
      role: true,
      joinDate: true,
      createdAt: true,
    },
  });
};

module.exports = {
  getAllUsers,
};
