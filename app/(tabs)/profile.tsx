import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import styles from "@/assets/styles/profileStyle";

// COMPONENT
import { ProfileCard } from "@/app/partials/profile/cardProfile";
import { StreakCard } from "@/app/partials/profile/cardWeekStreak";
import CircleProgress from "@/app/partials/profile/progressCard";

export default function ProfileScreen() {
  // Dummy Data
  const dataUser = {
    name: "Rizky Maulana",
    role: "UI Designer",
  };

  const dataProgress = {
    totalHours: 75,
    progress: 90,
    taskCompleted: 60,
  };

  const renderBody = () => (
    <ScrollView
      contentContainerStyle={{
        backgroundColor: "#F7FFF7",
        paddingBottom: 120,
      }}
      showsVerticalScrollIndicator={false}
    >
      {/* Background Banner */}
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

      {/* Back Button */}
      <TouchableOpacity
        style={styles.circleButton}
        activeOpacity={0.7}
        onPress={() => {
          console.log("Back button clicked");
        }}
      >
        <Ionicons name="arrow-back-outline" size={32} color="#FFFFFF" />
      </TouchableOpacity>

      {/* Main Body */}
      <View style={styles.bodyContainer}>
        {/* Profile */}
        <Text style={styles.cardHeader}>Profile</Text>

        <ProfileCard user_name={dataUser.name} user_role={dataUser.role} />

        {/* Streak */}
        <Text style={styles.cardHeader}>Streak Progress</Text>

        <StreakCard streak_total={20} />

        {/* Mission */}
        <Text style={styles.cardHeader}>Mission</Text>

        <View style={styles.cardProgressContainer}>
          {/* Hours Total */}
          <View style={styles.progressTextContainer}>
            <CircleProgress progress={dataProgress.totalHours} />

            <Text>Hours Total</Text>
          </View>

          {/* Separator */}
          <View style={styles.separator} />

          {/* Total Present */}
          <View style={styles.progressTextContainer}>
            <CircleProgress progress={dataProgress.progress} />

            <Text>Total Present</Text>
          </View>

          {/* Separator */}
          <View style={styles.separator} />

          {/* Task Completed */}
          <View style={styles.progressTextContainer}>
            <CircleProgress progress={dataProgress.taskCompleted} />

            <Text>Task Complete</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );

  return renderBody();
}
