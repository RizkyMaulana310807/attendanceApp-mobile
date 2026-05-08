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

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#F7FFF7",
      }}
    >
      {/* STICKY BANNER */}
      <Image
        source={require("@/assets/images/ProfileBanner.png")}
        style={{
          position: "absolute",
          top: -60,
          width: "100%",
          aspectRatio: 16 / 9,
          zIndex: 1,
        }}
        resizeMode="contain"
      />

      {/* BACK BUTTON */}
      <TouchableOpacity
        activeOpacity={0.7}
        style={[
          styles.circleButton,
          {
            position: "absolute",
            top: 60,
            left: 25,

            zIndex: 20,
            elevation: 20,
          },
        ]}
        onPress={() => {
          console.log("Back button clicked");
        }}
      >
        <Ionicons name="arrow-back-outline" size={32} color="#FFFFFF" />
      </TouchableOpacity>

      {/* CONTENT LAYER */}
      <View
        style={{
          flex: 1,
          zIndex: 10,
          elevation: 10,
        }}
      >
        <ScrollView
          contentContainerStyle={{
            paddingBottom: 120,
          }}
          showsVerticalScrollIndicator={false}
          bounces={true}
          overScrollMode="never"
          scrollEventThrottle={16}
          decelerationRate="fast"
          removeClippedSubviews={true}
        >
          {/* MAIN BODY */}
          <View style={styles.bodyContainer}>
            {/* PROFILE */}
            <Text style={styles.cardHeader}>Profile</Text>

            <ProfileCard user_name={dataUser.name} user_role={dataUser.role} />

            {/* STREAK */}
            <Text style={styles.cardHeader}>Streak Progress</Text>

            <StreakCard streak_total={20} />

            {/* MISSION */}
            <Text style={styles.cardHeader}>Mission</Text>

            <View style={styles.cardProgressContainer}>
              {/* HOURS */}
              <View style={styles.progressTextContainer}>
                <CircleProgress progress={dataProgress.totalHours} />

                <Text>Hours Total</Text>
              </View>

              {/* SEPARATOR */}
              <View style={styles.separator} />

              {/* PRESENT */}
              <View style={styles.progressTextContainer}>
                <CircleProgress progress={dataProgress.progress} />

                <Text>Total Present</Text>
              </View>

              {/* SEPARATOR */}
              <View style={styles.separator} />

              {/* TASK */}
              <View style={styles.progressTextContainer}>
                <CircleProgress progress={dataProgress.taskCompleted} />

                <Text>Task Complete</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
