import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, Text, View } from "react-native";

import styles from "@/assets/styles/profileStyle";

interface StreakCardProps {
  streak_total: number;
  date: number;
  month_name: string;
  day_name: string;
  year: number;
}

export const StreakCard: React.FC<StreakCardProps> = ({
  streak_total,
  date,
  month_name,
  day_name,
  year,
}) => {
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
  return (
    <View style={styles.cardStreakContainer}>
      {/* Streak Data Info */}
      <View style={styles.StreakDataContainer}>
        {/* Streak Week Display */}
        <View style={styles.streakWeekDisplayContainer}>
          {/* Number Of Week */}
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

          {/* Date Display */}
          <View style={styles.dateDisplayContainer}>
            <Text style={styles.weekNameText}>{day_name}</Text>
            <Text style={styles.dateInfoText}>
              {month_name}, {year}
            </Text>
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
