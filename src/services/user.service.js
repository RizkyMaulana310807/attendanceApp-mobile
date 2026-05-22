// const prisma = require("../config/prisma");

// const getAllUsers = async () => {
//   return await prisma.user.findMany({
//     select: {
//       id: true,
//       nama: true,
//       email: true,
//       role: true,
//       joinDate: true,
//       createdAt: true,
//     },
//   });
// };

// module.exports = {
//   getAllUsers,
// };

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

const getUserById = async (id) => {
  return await prisma.user.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      nama: true,
      email: true,
      role: true,
      photo: true,
      isActive: true,
      joinDate: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};

const createUser = async (data) => {
  return await prisma.user.create({
    data: {
      nama: data.nama,
      email: data.email,
      password: data.password,
      role: data.role || "USER",
      joinDate: data.joinDate || new Date(),
      photo: data.photo || null,
    },
  });
};

const updateUser = async (id, data) => {
  return await prisma.user.update({
    where: {
      id,
    },
    data: {
      nama: data.nama,
      email: data.email,
      photo: data.photo,
      role: data.role,
      isActive: data.isActive,
    },
  });
};

const deleteUser = async (id) => {
  return await prisma.user.delete({
    where: {
      id,
    },
  });
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
