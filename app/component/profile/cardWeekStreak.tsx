import styles from "@/assets/styles/profileStyle";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";

interface StreakCardProps {
  streak_total: number;
  date: number;
  month_name: string;
  day_name: string;
  year: number;
}

interface AttendanceItem {
  id: string;
  status: string;
  tanggal: string;
}

export const StreakCard: React.FC<StreakCardProps> = ({
  streak_total,
  date,
  month_name,
  day_name,
  year,
}) => {
  const [attendanceData, setAttendanceData] = useState<AttendanceItem[]>([]);

  const [allWeeks, setAllWeeks] = useState<Record<string, AttendanceItem[]>>(
    {},
  );

  const [currentWeek, setCurrentWeek] = useState(1);
  // format bulan jadi 01,02,03 dst
  const formatBulan = (angkaBulan: number) => {
    return String(angkaBulan).padStart(2, "0");
  };

  // fetch data attendance
  const getUserAttendance = async () => {
    try {
      const bearerToken = await AsyncStorage.getItem("accessToken");

      const response = await axios.get(
        "http://10.249.221.72:3000/api/attendances/userAttendance",
        {
          headers: {
            Authorization: `Bearer ${bearerToken}`,
          },
        },
      );

      const weeks = response.data.weeks;

      setAllWeeks(weeks);

      // cari week terakhir yang ada data
      const totalWeeks = response.data.totalWeeks;

      const latestWeek = `Week ${totalWeeks}`;
      const currentWeekData = weeks[latestWeek] || [];

      setCurrentWeek(totalWeeks);
      setAttendanceData(currentWeekData);
    } catch (error: any) {
      console.error("Error attendance:", error);
    }
  };

  // auto fetch ketika component render
  useEffect(() => {
    getUserAttendance();
  }, []);

  // pindah bulan
  const ubahWeek = (arah: "tambah" | "kurang") => {
    let targetWeek = currentWeek;

    if (arah === "tambah") {
      targetWeek++;
    } else {
      targetWeek--;
    }

    // jangan kurang dari week 1
    if (targetWeek < 1) {
      Alert.alert("Info", "Kamu sudah berada di minggu pertama");
      return;
    }

    const targetWeekKey = `Week ${targetWeek}`;

    const targetData = allWeeks[targetWeekKey];

    // cek apakah week ada data
    if (!targetData || targetData.length === 0) {
      Alert.alert(
        "Data belum tersedia",
        `Absensi pada ${targetWeekKey} belum ada.`,
      );
      return;
    }

    // update state
    setCurrentWeek(targetWeek);
    setAttendanceData(targetData);
  };
  const getOrdinalSuffix = (day: number) => {
    if (day >= 11 && day <= 13) {
      return "Th.";
    }

    switch (day % 10) {
      case 1:
        return "St.";
      case 2:
        return "Nd.";
      case 3:
        return "Rd.";
      default:
        return "Th.";
    }
  };

  const getAttendanceStyle = (status: string) => {
    switch (status) {
      case "PRESENT":
        return styles.streakPresent;

      case "ABSENT":
        return styles.streakAbsent;

      case "LATE":
        return styles.streakLate;

      case "PERMISSION":
        return styles.streakPermission;

      default:
        return styles.streakAbsent;
    }
  };

  return (
    <View style={styles.cardStreakContainer}>
      {/* Streak Data Info */}
      <View style={styles.StreakDataContainer}>
        {/* Streak Week Display */}
        <View style={styles.streakWeekDisplayContainer}>
          <View style={styles.numberOfWeekContainer}>
            <View>
              <Text style={styles.numberOfWeekText}>{date}</Text>
            </View>

            <View>
              <Text style={styles.ordinalIndicatorText}>
                {getOrdinalSuffix(date)}
              </Text>
            </View>
          </View>

          <View style={styles.dateDisplayContainer}>
            <Text style={styles.weekNameText}>{day_name}</Text>
            <Text style={styles.dateInfoText}>
              {month_name}, {year}
            </Text>
          </View>
        </View>

        {/* Action Button */}
        <View style={styles.actionButtonContainer}>
          <TouchableOpacity
            onPress={() => ubahWeek("kurang")}
            style={styles.streakWeekActionButton}
          >
            <Ionicons name="chevron-back-outline" size={20} color="#F7FFF7" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => ubahWeek("tambah")}
            style={styles.streakWeekActionButton}
          >
            <Ionicons
              name="chevron-forward-outline"
              size={20}
              color="#F7FFF7"
            />
          </TouchableOpacity>
        </View>

        {/* Counter */}
        <View style={styles.streakCounterContainer}>
          <Image
            source={require("@/assets/images/StreakCounter.png")}
            style={{ width: 50, height: 50 }}
          />

          <Text style={styles.streakCounterText}>{streak_total}</Text>
        </View>
      </View>
      {/* Streak Days Progress */}
      <View style={styles.streakDaysProgressContainer}>
        {[...attendanceData, ...Array(7 - attendanceData.length).fill(null)]
          .slice(0, 7)
          .map((item, index) => {
            const tanggal = item ? new Date(item.tanggal).getDate() : "-";

            return (
              <View
                key={item?.id ?? `empty-${index}`}
                style={
                  item ? getAttendanceStyle(item.status) : styles.streakEmpty
                }
              >
                <Text style={styles.alphabetStreakProgress}>{tanggal}</Text>
              </View>
            );
          })}
      </View>
    </View>
  );
};
