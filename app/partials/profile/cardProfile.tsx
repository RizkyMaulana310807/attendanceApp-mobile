import styles from "@/assets/styles/profileStyle";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, Text, View } from "react-native";

interface ProfileCardProps {
  user_name: string;
  user_role: string;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
  user_name,
  user_role,
}) => {
  return (
    <View style={styles.profileCardContainer}>
      {/* Profile Image Container */}
      <View>
        <View style={styles.profileImageContainer}>
          <Image
            source={{
              uri: "https://i.pinimg.com/1200x/e3/a1/44/e3a1446e603d77a85b6c14d479fe5243.jpg",
            }}
            style={styles.profileImage}
          />
          <View style={styles.userStatusCircle}></View>
        </View>
      </View>

      {/* User Name */}
      <View style={styles.UserNameContainer}>
        <Text style={styles.userNameText}>{user_name}</Text>
        <Text style={styles.userRoleText}>{user_role}</Text>
      </View>

      {/* Account Settings */}
      <View style={styles.settingContainer}>
        <View style={styles.settingsButton}>
          <Ionicons name="cog-outline" size={40} color="#0F172A" />
        </View>
      </View>
    </View>
  );
};
