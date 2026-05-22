import styles from "@/assets/styles/homeStyle";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import { Image, Pressable, Text, View } from "react-native";

export default function Home() {
  const [checkIn, setCheckin] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [total, setTotal] = useState("");
  const now = new Date();

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    let timeout: number;

    const updateClock = () => {
      const now = new Date();
      setTime(now);

      // Hitung sisa waktu ke menit berikutnya
      const seconds = now.getSeconds();
      const milliseconds = now.getMilliseconds();

      const delay = (60 - seconds) * 1000 - milliseconds;

      timeout = setTimeout(updateClock, delay);
    };

    updateClock();

    return () => clearTimeout(timeout);
  }, []);

  const formatDate = (date: Date) => {
    const days = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];

    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "Mei",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Okt",
      "Nov",
      "Des",
    ];

    const dayName = days[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];

    return `${dayName}, ${day} ${month}`;
  };

  const formattedTime = time
    .toLocaleTimeString("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    })
    .replaceAll(".", ":");

  const absentClick = () => {
    const formattedTime = now
      .toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      })
      .replaceAll(".", ":");
    setCheckin(formattedTime);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/BubbleDesign.png")}
        style={{ position: "absolute", top: 0, width: "100%" }}
      />

      {/* Top Header Container */}
      <View style={styles.topHeaderContainer}>
        <View style={{ width: 50, height: 50 }}></View>
        <Text style={styles.greetingText}>Halo User, Siap Untuk Bekerja?</Text>
        <Image
          source={{
            uri: "https://i.pinimg.com/1200x/e3/a1/44/e3a1446e603d77a85b6c14d479fe5243.jpg",
          }}
          style={styles.profileImage}
        />
      </View>
      {/* Main Activity | Submit Attendance */}
      <View style={styles.mainActivityContainer}>
        {/* Date And Time Info */}
        <View style={styles.dateTimeHeaderContainer}>
          <Text style={styles.timeInfoMainActivity}>{formattedTime} AM</Text>
          <Text style={styles.dateInfoMainActivity}>
            {formatDate(new Date())}
          </Text>
        </View>

        {/* Circle Submit | Button For Submit Attendance */}
        <Pressable style={styles.buttonSubmitAttendance} onPress={absentClick}>
          <Image
            style={{ position: "absolute" }}
            source={require("../../assets/images/OutlineWavy.png")}
          />
          <LinearGradient
            colors={["#c2ff67", "#84CC16"]}
            start={{ x: 1, y: 0 }} // kanan atas
            end={{ x: 0, y: 1 }} // kiri bawah
            style={{
              width: 170,
              height: 170,
              borderRadius: 85,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Ionicons name="hand-right-outline" size={100} color="#0F172A" />
            <Text style={styles.shiftText}>Morning Shift</Text>
          </LinearGradient>
        </Pressable>

        {/* Location Info (Optional) */}
        <View style={styles.locationInfoContainer}>
          <Text style={styles.locationInfoText}>
            Location: You're currently on reach office
          </Text>
        </View>
      </View>

      {/* footer info  */}
      <View style={styles.footerHistoryInfoContainer}>
        {/* Time checked-in */}
        <View>
          <Ionicons name="time-outline" size={60} color="#0F172A" />
          {checkIn ? (
            <Text style={styles.footerTimeInfoText}>{checkIn} AM</Text>
          ) : (
            <Text style={styles.footerTimeInfoText}>-- : -- AM</Text>
          )}
          <Text style={styles.footerInfoText}>checked-in</Text>
        </View>
        {/* Time checked-out */}
        <View>
          <Ionicons name="stopwatch-outline" size={60} color="#0F172A" />
          <Text style={styles.footerTimeInfoText}>--:--</Text>
          <Text style={styles.footerInfoText}>checked-out</Text>
        </View>
        {/* Total hours */}
        <View>
          <Ionicons name="hourglass-outline" size={60} color="#0F172A" />
          <Text style={styles.footerTimeInfoText}>--:--</Text>
          <Text style={styles.footerInfoText}>total-hour</Text>
        </View>
      </View>
    </View>
  );
}
