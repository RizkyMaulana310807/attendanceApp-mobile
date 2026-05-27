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

const attendanceAction = async (userId) => {
  const now = new Date();

  // Buat tanggal tanpa jam (YYYY-MM-DD)
  const startOfDay = new Date(now);
  startOfDay.setHours(0, 0, 0, 0);

  const endOfDay = new Date(now);
  endOfDay.setHours(23, 59, 59, 999);

  // Cari attendance hari ini
  const attendance = await prisma.attendance.findFirst({
    where: {
      userId,
      tanggal: {
        gte: startOfDay,
        lte: endOfDay,
      },
    },
  });

  // =========================
  // CHECK-IN (ABSEN MASUK)
  // =========================
  if (!attendance) {
    return await prisma.attendance.create({
      data: {
        userId,
        tanggal: startOfDay,
        checkIn: now,
        status: "PRESENT",
        workMode: "ONSITE",
      },
    });
  }

  // =========================
  // CHECK-OUT (ABSEN PULANG)
  // =========================
  if (attendance && !attendance.checkOut) {
    const totalMinutes = Math.floor((now - attendance.checkIn) / (1000 * 60));

    return await prisma.attendance.update({
      where: {
        id: attendance.id,
      },
      data: {
        checkOut: now,
        totalMinutes,
      },
    });
  }

  // =========================
  // SUDAH ABSEN PULANG
  // =========================
  throw new Error("Anda sudah melakukan check-out hari ini");
};

module.exports = {
  attendanceAction,
  getAllAttendance,
};
