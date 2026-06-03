require("dotenv/config");

const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL tidak ditemukan di .env");
}

const prisma = new PrismaClient({
  datasourceUrl: process.env.DATABASE_URL,
});

async function main() {
  console.log("Seeding database...");

  // ======================
  // USERS
  // ======================
  const password = await bcrypt.hash("123456", 10);

  const users = await Promise.all([
    prisma.user.create({
      data: {
        nama: "Admin Sekolah",
        email: "admin@school.com",
        password,
        role: "ADMIN",
        joinDate: new Date("2025-01-01"),
      },
    }),
    prisma.user.create({
      data: {
        nama: "Budi Santoso",
        email: "budi@mail.com",
        password,
        joinDate: new Date("2025-02-01"),
      },
    }),
    prisma.user.create({
      data: {
        nama: "Siti Rahma",
        email: "siti@mail.com",
        password,
        joinDate: new Date("2025-02-10"),
      },
    }),
    prisma.user.create({
      data: {
        nama: "Rizky Pratama",
        email: "rizky@mail.com",
        password,
        joinDate: new Date("2025-03-01"),
      },
    }),
    prisma.user.create({
      data: {
        nama: "Andi Saputra",
        email: "andi@mail.com",
        password,
        joinDate: new Date("2025-04-01"),
      },
    }),
  ]);

  const admin = users[0];

  // ======================
  // ATTENDANCE LOCATION
  // ======================
  await prisma.attendanceLocation.createMany({
    data: [
      {
        namaTempat: "Sekolah Utama",
        latitude: -6.2088,
        longitude: 106.845599,
        radiusMeter: 150,
      },
      {
        namaTempat: "Gedung Timur",
        latitude: -6.209,
        longitude: 106.846,
        radiusMeter: 100,
      },
      {
        namaTempat: "Gedung Barat",
        latitude: -6.21,
        longitude: 106.847,
        radiusMeter: 100,
      },
      {
        namaTempat: "Lab Komputer",
        latitude: -6.211,
        longitude: 106.848,
        radiusMeter: 80,
      },
      {
        namaTempat: "Kampus Cabang",
        latitude: -6.212,
        longitude: 106.849,
        radiusMeter: 120,
      },
    ],
  });

  // ======================
  // DAILY TASKS
  // ======================
  const tasks = await Promise.all([
    prisma.dailyTask.create({
      data: {
        title: "Datang Tepat Waktu",
        description: "Masuk sebelum jam 08:00",
        points: 20,
      },
    }),
    prisma.dailyTask.create({
      data: {
        title: "Kerja 8 Jam",
        description: "Minimal bekerja 8 jam",
        points: 30,
      },
    }),
    prisma.dailyTask.create({
      data: {
        title: "Tidak Telat",
        description: "Tidak telat hari ini",
        points: 15,
      },
    }),
    prisma.dailyTask.create({
      data: {
        title: "Absensi Lengkap",
        description: "Checkin & checkout",
        points: 25,
      },
    }),
    prisma.dailyTask.create({
      data: {
        title: "Streak Mingguan",
        description: "Masuk 5 hari berturut",
        points: 50,
      },
    }),
  ]);

  // ======================
  // ATTENDANCE
  // ======================
  for (let i = 1; i < users.length; i++) {
    const user = users[i];

    // 14 hari ke belakang sampai hari ini
    for (let dayOffset = 14; dayOffset >= 0; dayOffset--) {
      const currentDate = new Date();

      // mundur X hari
      currentDate.setDate(currentDate.getDate() - dayOffset);

      // clone date agar tidak bentrok reference
      const attendanceDate = new Date(currentDate);

      // jam masuk 08:00
      const checkIn = new Date(currentDate);
      checkIn.setHours(8, 0, 0, 0);

      // jam pulang 16:00
      const checkOut = new Date(currentDate);
      checkOut.setHours(16, 0, 0, 0);

      await prisma.attendance.create({
        data: {
          userId: user.id,
          tanggal: attendanceDate,
          checkIn,
          checkOut,
          totalMinutes: 480,
          status: "PRESENT",

          // contoh: setiap hari ke-3 WFH
          workMode: dayOffset % 3 === 0 ? "WFH" : "ONSITE",
        },
      });
    }
  }
  // ======================
  // WORK PERMISSION
  // ======================
  await prisma.workPermission.createMany({
    data: [
      {
        userId: users[1].id,
        type: "WFH",
        startDate: new Date("2026-05-03"),
        endDate: new Date("2026-05-03"),
        alasan: "Internet rumah maintenance",
        approvedById: admin.id,
      },
      {
        userId: users[2].id,
        type: "WFA",
        startDate: new Date("2026-05-02"),
        endDate: new Date("2026-05-04"),
        alasan: "Meeting luar kantor",
        approvedById: admin.id,
      },
      {
        userId: users[3].id,
        type: "WFH",
        startDate: new Date("2026-05-01"),
        endDate: new Date("2026-05-01"),
        alasan: "Sakit ringan",
        approvedById: admin.id,
      },
      {
        userId: users[4].id,
        type: "WFA",
        startDate: new Date("2026-05-05"),
        endDate: new Date("2026-05-05"),
        alasan: "Survey lokasi",
        approvedById: admin.id,
      },
      {
        userId: users[1].id,
        type: "WFA",
        startDate: new Date("2026-05-10"),
        endDate: new Date("2026-05-10"),
        alasan: "Client meeting",
        approvedById: admin.id,
      },
    ],
  });

  // ======================
  // GEOFENCE LOG
  // ======================
  for (let i = 1; i < users.length; i++) {
    await prisma.geofenceLog.createMany({
      data: [
        {
          userId: users[i].id,
          latitude: -6.2088,
          longitude: 106.845599,
          insideArea: true,
        },
        {
          userId: users[i].id,
          latitude: -6.2089,
          longitude: 106.8457,
          insideArea: true,
        },
        {
          userId: users[i].id,
          latitude: -6.22,
          longitude: 106.86,
          insideArea: false,
        },
        {
          userId: users[i].id,
          latitude: -6.209,
          longitude: 106.8458,
          insideArea: true,
        },
        {
          userId: users[i].id,
          latitude: -6.23,
          longitude: 106.87,
          insideArea: false,
        },
      ],
    });
  }

  // ======================
  // USER TASK PROGRESS
  // ======================
  for (let i = 1; i < users.length; i++) {
    for (const task of tasks) {
      await prisma.userTaskProgress.create({
        data: {
          userId: users[i].id,
          taskId: task.id,
          tanggal: new Date(),
          isCompleted: Math.random() > 0.3,
          completedAt: new Date(),
        },
      });
    }
  }

  // ======================
  // WEEKLY SUMMARY
  // ======================
  for (let i = 1; i < users.length; i++) {
    await prisma.weeklySummary.create({
      data: {
        userId: users[i].id,
        weekNumber: 20,
        year: 2026,
        totalHours: 40,
        totalPresence: 5,
        streakCount: 12,
      },
    });
  }

  console.log("Seed selesai ✅");
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
