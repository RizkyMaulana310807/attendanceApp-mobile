const prisma = require("../config/prisma");

const getAllAttendance = async () => {
  return await prisma.attendance.findMany({
    select: {
      id: true,
      userId: true,
      tanggal: true,
      checkIn: true,
      checkOut: true,
      status: true,
      workMode: true,
      autoCheckout: true,
      updatedAt: true,
    },
  });
};

const createAttendance = async (data) => {
  return await prisma.attendance.create({
    data: {},
  });
};

module.exports = {
  getAllAttendance,
};
