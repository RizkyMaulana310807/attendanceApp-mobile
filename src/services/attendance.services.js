const { JSDocParsingMode } = require("typescript");
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

const getTodayAttendance = async (userId) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const attendance = await prisma.attendance.findUnique({
    where: {
      userId_tanggal: {
        userId,
        tanggal: today,
      },
    },
    select: {
      checkIn: true,
      checkOut: true,
      totalMinutes: true,
    },
  });

  if (!attendance) {
    return null;
  }

  const formatTime = (date) => {
    if (!date) return "--:--";

    return new Intl.DateTimeFormat("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "Asia/Jakarta",
    }).format(date);
  };

  const totalMinutes = attendance.totalMinutes;

  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  const totalHours = `${hours}.${minutes.toString().padStart(2, "0")}`;

  return {
    checkIn: formatTime(attendance.checkIn),
    checkOut: formatTime(attendance.checkOut),
    totalHours,
  };
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

const getTotalAttendance = async (userId) => {
  const attendance = await prisma.attendance.count({
    where: {
      userId: userId,
    },
  });
  return attendance;
};

const getUserAttendance = async (userId) => {
  const attendance = await prisma.attendance.findMany({
    where: { userId },
    orderBy: {
      tanggal: "asc",
    },
  });

  if (attendance.length === 0) {
    return { totalWeeks: 0, weeks: {} };
  }

  const groupedWeeks = {};
  let weekCounter = 1;

  const firstAttendanceDate = new Date(attendance[0].tanggal);

  const startOfFirstWeek = new Date(firstAttendanceDate);
  const dayIndex = startOfFirstWeek.getDay(); // 0 = Minggu, 1 = Senin, dst.
  const diffToMonday = dayIndex === 0 ? -6 : 1 - dayIndex;
  startOfFirstWeek.setDate(startOfFirstWeek.getDate() + diffToMonday);
  startOfFirstWeek.setHours(0, 0, 0, 0); // Reset jam ke 00:00

  let currentWeekStart = new Date(startOfFirstWeek);
  let currentWeekEnd = new Date(currentWeekStart);
  currentWeekEnd.setDate(currentWeekStart.getDate() + 6);
  currentWeekEnd.setHours(23, 59, 59, 999);

  groupedWeeks[`Week ${weekCounter}`] = [];

  attendance.forEach((record) => {
    const recordDate = new Date(record.tanggal);

    while (recordDate > currentWeekEnd) {
      weekCounter++;

      currentWeekStart.setDate(currentWeekStart.getDate() + 7);
      currentWeekEnd.setDate(currentWeekEnd.getDate() + 7);

      groupedWeeks[`Week ${weekCounter}`] = [];
    }

    groupedWeeks[`Week ${weekCounter}`].push(record);
  });

  return {
    totalWeeks: weekCounter,
    weeks: groupedWeeks,
  };
};
module.exports = {
  attendanceAction,
  getAllAttendance,
  getTodayAttendance,
  getTotalAttendance,
  getUserAttendance,
};
