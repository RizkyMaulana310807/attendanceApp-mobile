import { ProfileCard } from "@/app/partials/profile/cardProfile";
import React from "react";
import { Image, View } from "react-native";
import { StreakCard } from "../partials/profile/cardWeekStreak";
import ProgressCard from "../partials/profile/progressCard";
export default function profile() {
  // Menggunakan Template String untuk menyusun JSX yang bersih dan bebas spasi acak
  const dataUser = {
    name: "Rizky Maulana",
    role: "Senior Developer",
  };
  const data = {
    totalHours: 8, // Data dari API/API/State
    progress: 60, // Angka 0 - 100 (misal: 60)
    taskText: "2/3", // String hasil parsing dari server ("2/3")
  };

  const renderBody = () => (
    <View
      style={{
        height: "100%",
        backgroundColor: "#F7FFF7",
        position: "relative",
      }}
    >
      {/* Pattern Profile Banner */}
      <Image
        source={require("../../assets/images/ProfileBanner.png")}
        style={{
          position: "absolute",
          top: -60,
          width: "100%",
          aspectRatio: 16 / 9,
        }}
        resizeMode="contain"
      />

      {/* Card Photo Profile */}
      <ProfileCard user_name={dataUser.name} user_role={dataUser.role} />
      {/* Card Streak */}
      <StreakCard streak_total={10} />
      {/* Progress Card */}
      <ProgressCard
        totalHours={data.totalHours}
        totalPresent={data.progress}
        task={data.taskText}
      />
    </View>
  );

  return renderBody();
}
