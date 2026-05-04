import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

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
      {/* Card photo Profile */}
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
    </View>
  );
}

const styles = StyleSheet.create({
  profileCardContainer: {
    backgroundColor: "#F7FFF7",
    borderRadius: 10,
    zIndex: 100,
    padding: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 12,
    borderWidth: 4,
    borderColor: "#0F172A",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderWidth: 4,
  },
  profileImageContainer: {
    position: "relative",
  },
  userStatusCircle: {
    position: "absolute",
    width: 25,
    height: 25,
    backgroundColor: "#84CC16",
    borderRadius: 100,
    borderColor: "#0F172A",
    borderWidth: 4,
    bottom: 5,
  },
  UserNameContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    flex: 1,
  },
  userNameText: {
    fontSize: 20,
    fontFamily: "Quicksand",
    fontWeight: "bold",
  },
  userRoleText: {
    fontSize: 15,
    fontFamily: "Quicksand",
    fontWeight: "regular",
  },
  settingContainer: {
    display: "flex",
  },
  settingsButton: {
    backgroundColor: "#84CC16",
    paddingVertical: 3,
    paddingHorizontal: 4,
    borderRadius: 999,
    borderWidth: 4,
    borderColor: "#0F172A",
  },
});
