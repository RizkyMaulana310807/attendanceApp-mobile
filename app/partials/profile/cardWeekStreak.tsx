import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, Text, View } from "react-native";

import styles from "@/assets/styles/profileStyle";

interface StreakCardProps {
  streak_total: number;
}

export const StreakCard: React.FC<StreakCardProps> = ({ streak_total }) => {
  return (
    <View style={styles.cardStreakContainer}>
      {/* Streak Data Info */}
      <View style={styles.StreakDataContainer}>
        {/* Streak Week Display */}
        <View style={styles.streakWeekDisplayContainer}>
          {/* Number Of Week */}
          <View style={styles.numberOfWeekContainer}>
            <View>
              <Text style={styles.numberOfWeekText}>1</Text>
            </View>
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
            <Ionicons name="chevron-back-outline" size={20} color="#F7FFF7" />
          </View>

          {/* Next Week Button */}
          <View style={styles.streakWeekActionButton}>
            <Ionicons
              name="chevron-forward-outline"
              size={20}
              color="#F7FFF7"
            />
          </View>
        </View>

        {/* Streak Count Info */}
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
  );
};
