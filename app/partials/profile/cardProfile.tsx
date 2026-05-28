import styles from "@/assets/styles/profileStyle";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";

interface ProfileCardProps {
  user_name: string;
  user_role: string;
  onLogout?: () => void;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
  user_name,
  user_role,
  onLogout,
}) => {
  const [showMenu, setShowMenu] = useState(false);

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

          <View style={styles.userStatusCircle} />
        </View>
      </View>

      {/* User Name */}
      <View style={styles.UserNameContainer}>
        <Text style={styles.userNameText}>{user_name}</Text>

        <Text style={styles.userRoleText}>{user_role}</Text>
      </View>

      {/* Settings */}
      <View style={styles.settingContainer}>
        <TouchableOpacity
          style={styles.settingsButton}
          onPress={() => setShowMenu(!showMenu)}
        >
          <Ionicons name="cog-outline" size={40} color="#FFFFFF" />
        </TouchableOpacity>

        {/* Dropdown */}
        {showMenu && (
          <>
            {/* click outside */}
            <Pressable
              onPress={() => setShowMenu(false)}
              style={{
                position: "absolute",
                width: 500,
                height: 500,
                top: -200,
                right: -50,
                zIndex: 1,
              }}
            />

            <View
              style={{
                position: "absolute",
                top: 50,
                right: 0,
                backgroundColor: "#fff",
                borderRadius: 16,
                paddingVertical: 8,
                minWidth: 140,
                elevation: 6,
                zIndex: 999,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  setShowMenu(false);

                  onLogout?.();
                }}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                  paddingHorizontal: 16,
                  paddingVertical: 12,
                }}
              >
                <Ionicons name="log-out-outline" size={20} color="#FF3B30" />

                <Text
                  style={{
                    color: "#FF3B30",
                    fontWeight: "600",
                  }}
                >
                  Logout
                </Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    </View>
  );
};
