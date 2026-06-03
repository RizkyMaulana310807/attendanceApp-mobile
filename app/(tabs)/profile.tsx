import styles from "@/assets/styles/profileStyle";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// COMPONENT
import { ProfileCard } from "@/app/component/profile/cardProfile";
import { StreakCard } from "@/app/component/profile/cardWeekStreak";
import CircleProgress from "@/app/component/profile/progressCard";
import { router } from "expo-router";

export default function ProfileScreen() {
  // Dummy Data
  const [user, setUser] = useState<any>(null);
  const [streakTotal, setStreakTotal] = useState<number>(0);
  const getStreak = async () => {
    const bearerToken = await AsyncStorage.getItem("accessToken");

    try {
      const response = await axios.get(
        "http://10.249.221.72:3000/api/attendances/total",
        {
          headers: {
            Authorization: `Bearer ${bearerToken}`,
          },
        },
      );
      const streak = response.data.data;
      setStreakTotal(streak);
    } catch (error: any) {
      Alert.alert(
        "Error",
        error?.response?.data?.message || error.message || "Gagal attendance",
      );
    }
  };

  const getLoginData = async () => {
    try {
      const userData = await AsyncStorage.getItem("user");

      if (userData) {
        const parsedUser = JSON.parse(userData);

        const firstName = parsedUser.nama?.trim().split(" ")[0];

        setUser({
          ...parsedUser,
          nama: firstName,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getStreak();
    getLoginData();
  }, []);

  const dataProgress = {
    totalHours: 75,
    progress: 90,
    taskCompleted: 60,
  };

  const getCurrentDate = () => {
    const now = new Date();

    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    return {
      dayName: days[now.getDay()],
      date: now.getDate(),
      monthName: months[now.getMonth()],
      year: now.getFullYear(),
    };
  };

  const currentDate = getCurrentDate();

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

            <ProfileCard
              user_name={user?.nama}
              user_role={user?.role}
              onLogout={async () => {
                await AsyncStorage.clear();
                router.replace("/login");
              }}
            />

            {/* STREAK */}
            <Text style={styles.cardHeader}>Streak Progress</Text>

            <StreakCard
              streak_total={streakTotal}
              date={currentDate.date}
              day_name={currentDate.dayName}
              month_name={currentDate.monthName}
              year={currentDate.year}
            />

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
