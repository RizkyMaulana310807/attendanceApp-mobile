import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/BubbleDesign.png")}
        style={{ position: "absolute", top: 0, width: "100%" }}
      />

      {/* Top Header Container */}
      <View style={styles.topHeaderContainer}>
        <View style={{ width: 50, height: 50 }}></View>
        <Text style={styles.greetingText}>Welcome User</Text>
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
          <Text style={styles.timeInfoMainActivity}>09:12 AM</Text>
          <Text style={styles.dateInfoMainActivity}>Wed, 21 Des</Text>
        </View>

        {/* Circle Submit | Button For Submit Attendance */}
        <View style={styles.buttonSubmitAttendance}>
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
        </View>

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
          <Text style={styles.footerTimeInfoText}>09:10 AM</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7FFF7",
    justifyContent: "space-around",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 4,
  },
  greetingText: {
    fontFamily: "Fredoka",
    color: "#0F172A",
    fontSize: 20,
    fontWeight: "bold",
  },
  topHeaderContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  dateTimeHeaderContainer: {
    alignItems: "center",
  },
  timeInfoMainActivity: {
    fontFamily: "Quicksand",
    color: "#0F172A",
    fontSize: 36,
    fontWeight: "bold",
  },
  dateInfoMainActivity: {
    fontFamily: "Quicksand",
    color: "#0F172A",
    fontSize: 20,
    fontWeight: "500",
  },
  buttonSubmitAttendance: {
    position: "relative",
    width: 170,
    height: 170,
    borderRadius: 85,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 4,
  },
  shiftText: {
    fontFamily: "Quicksand",
    color: "#0F172A",
    fontSize: 15,
    marginTop: 8,
  },
  locationInfoText: {
    fontFamily: "Quicksand",
    color: "#0F172A",
    fontSize: 15,
  },
  locationInfoContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  footerHistoryInfoContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 10,
  },
  footerTimeInfoText: {
    fontFamily: "Quicksand",
    color: "#0F172A",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  footerInfoText: {
    fontFamily: "Quicksand",
    color: "#0F172A",
    textAlign: "center",
    fontSize: 11,
  },
  mainActivityContainer: {
    display: "flex",
    justifyContent: "space-around",
    gap: 16,
  },
});
