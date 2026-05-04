import styles from "@/assets/styles/profileStyle";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, Text, View } from "react-native";

export default function profile() {
  return (
    <View
      style={{
        height: "100%",
        backgroundColor: "#F7FFF7",
        position: "relative",
      }}
    >
      {/* Pattern Profile */}
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

      {/* Card Photo Profile { HEADER } */}
      <View style={styles.profileCardContainer}>
        {/* Profile Image Container */}
        <View>
          {/* Image Container */}
          <View style={styles.profileImageContainer}>
            {/* Profile Image */}
            <Image
              style={styles.profileImage}
              source={{
                uri: "https://i.pinimg.com/1200x/e3/a1/44/e3a1446e603d77a85b6c14d479fe5243.jpg",
              }}
            />
            {/* User Status */}
            <View style={styles.userStatusCircle}></View>
          </View>
        </View>

        {/* User Name */}
        <View style={styles.UserNameContainer}>
          <Text style={styles.userNameText}>User_Name</Text>
          <Text style={styles.userRoleText}>User_Role</Text>
        </View>

        {/* Account Settings */}
        <View style={styles.settingContainer}>
          <View style={styles.settingsButton}>
            <Ionicons name="cog-outline" size={40} color="#0F172A" />
          </View>
        </View>
      </View>

      {/* Card Streak { BODY } */}
      <View style={styles.cardStreakContainer}>
        {/* Streak Data Info */}
        <View style={styles.StreakDataContainer}>
          {/* Streak Week Display */}
          <View style={styles.streakWeekDisplayContainer}>
            {/* Number Of Week */}
            <View style={styles.numberOfWeekContainer}>
              {/* Number */}
              <View>
                <Text style={styles.numberOfWeekText}>1</Text>
              </View>

              {/* Ordinal Indicator st, nd, rd, th */}
              <View>
                <Text style={styles.ordinalIndicatorText}>St.</Text>
              </View>
            </View>

            {/* Date Display */}
            <View style={styles.dateDisplayContainer}>
              <Text style={styles.weekNameText}>Wednesday</Text>
              <Text style={styles.dateInfoText}>December, 2026</Text>
            </View>
          </View>
          {/* Week Change Button */}
          <View style={styles.actionButtonContainer}>
            {/* Previous Week Button */}
            <View style={styles.streakWeekActionButton}>
              {" "}
              <Ionicons name="chevron-back-outline" size={35} color="#F7FFF7" />
            </View>

            {/* Next Week Button */}
            <View style={styles.streakWeekActionButton}>
              {" "}
              <Ionicons
                name="chevron-forward-outline"
                size={35}
                color="#F7FFF7"
              />
            </View>
          </View>
          {/* Streak Count Info */}
          <View style={styles.streakCounterContainer}>
            <Image
              source={require("@/assets/images/StreakCounter.png")}
              style={{ width: 75, height: 75 }}
            />

            <Text style={styles.streakCounterText}>512</Text>
          </View>{" "}
        </View>

        {/* Streak Days Progress { FOOTER } */}
        <View style={styles.streakDaysProgressContainer}>
          <View style={styles.streakAbsent}>
            <Text style={styles.alphabetStreakProgress}>A</Text>
          </View>
          <View style={styles.streakPresent}>
            <Text style={styles.alphabetStreakProgress}>P</Text>
          </View>
          <View style={styles.streakPresent}>
            <Text style={styles.alphabetStreakProgress}>P</Text>
          </View>
          <View style={styles.streakPresent}>
            <Text style={styles.alphabetStreakProgress}>P</Text>
          </View>
          <View style={styles.streakPresent}>
            <Text style={styles.alphabetStreakProgress}>P</Text>
          </View>
          <View style={styles.streakPresent}>
            <Text style={styles.alphabetStreakProgress}>P</Text>
          </View>
          <View style={styles.streakSick}>
            <Text style={styles.alphabetStreakProgress}>S</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
