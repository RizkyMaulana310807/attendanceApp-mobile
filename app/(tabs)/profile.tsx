import { ProfileCard } from "@/app/partials/profile/cardProfile";
import styles from "@/assets/styles/profileStyle";
import React from "react";
import { Image, Text, View } from "react-native";
import { StreakCard } from "../partials/profile/cardWeekStreak";
import CircleProgress from "../partials/profile/progressCard";
export default function profile() {
  // Menggunakan Template String untuk menyusun JSX yang bersih dan bebas spasi acak
  const dataUser = {
    name: "Rizky Maulana",
    role: "Senior Developer",
  };
  const dataProgress = {
    totalHours: Math.round((8 / 8) * 100),
    progress: Math.round((60 / 365) * 100),
    taskCompleted: Math.round((2 / 3) * 100),
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
      <View style={styles.cardProgressContainer}>
        {/* Hours total */}
        <View style={styles.progressTextContainer}>
          <CircleProgress progress={dataProgress.totalHours} />
          <Text>Hours Total</Text>
        </View>

        {/* Separator */}
        <View style={styles.separator} />

        {/* Total present */}
        <View style={styles.progressTextContainer}>
          <CircleProgress progress={dataProgress.progress} />
          <Text>Total Present</Text>
        </View>

        {/* Separator */}
        <View style={styles.separator} />

        {/* Task Complete */}
        <View style={styles.progressTextContainer}>
          <CircleProgress progress={dataProgress.taskCompleted} />
          <Text>Task Complete</Text>
        </View>
      </View>{" "}
    </View>
  );

  return renderBody();
}
