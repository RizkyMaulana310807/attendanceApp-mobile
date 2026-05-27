const prisma = require("../config/prisma");
const bcrypt = require("bcrypt");
const { generateAccessToken, generateRefreshToken } = require("../utils/jwt");

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

const login = async (email, password) => {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    throw new Error("User tidak ditemukan");
  }

  const isPasswordMatch = await bcrypt.compare(password, user.password);

  if (!isPasswordMatch) {
    throw new Error("Password salah");
  }

  // generate token
  const accessToken = generateAccessToken(user);

  const refreshToken = generateRefreshToken(user);

  // expired refresh token
  const expiresAt = new Date();
  expiresAt.setDate(expiresAt.getDate() + 30);

  // save refresh token
  await prisma.refreshToken.create({
    data: {
      userId: user.id,
      token: refreshToken,
      expiresAt,
    },
  });

  return {
    user: {
      id: user.id,
      nama: user.nama,
      email: user.email,
      role: user.role,
    },
    accessToken,
    refreshToken,
  };
};

module.exports = {
  login,
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
