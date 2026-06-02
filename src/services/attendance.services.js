const prisma = require("../config/prisma");
const { toZonedTime, fromZonedTime } = require("date-fns-tz");

const getAllAttendance = async () => {
  const attendances = await prisma.attendance.findMany({
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

  return attendances.map((attendance) => ({
    ...attendance,

    tanggal: attendance.tanggal
      ? attendance.tanggal.toLocaleDateString("id-ID", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        })
      : null,

    checkIn: attendance.checkIn
      ? attendance.checkIn.toLocaleString("id-ID", {
          hour: "2-digit",
          minute: "2-digit",
        })
      : null,

    checkOut: attendance.checkOut
      ? attendance.checkOut.toLocaleString("id-ID", {
          hour: "2-digit",
          minute: "2-digit",
        })
      : null,

    updatedAt: attendance.updatedAt
      ? attendance.updatedAt.toLocaleString("id-ID", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        })
      : null,
  }));
};

const attendanceAction = async (userId) => {
  const timeZone = "Asia/Jakarta";

  // Waktu sekarang dalam timezone WIB
  const now = new Date();
  const zonedNow = toZonedTime(now, timeZone);

  // Ambil awal & akhir hari berdasarkan WIB
  const startOfDay = new Date(zonedNow);
  startOfDay.setHours(0, 0, 0, 0);

  const endOfDay = new Date(zonedNow);
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
