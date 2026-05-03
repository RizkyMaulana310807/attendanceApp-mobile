import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet, View } from "react-native";

import { HapticTab } from "@/components/haptic-tab";

// 🔥 Component reusable untuk icon animasi
function AnimatedIcon({
  route,
  focused,
}: {
  route: "home" | "history" | "profile";
  focused: boolean;
}) {
  const translateY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(translateY, {
      toValue: focused ? -12 : 0,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }, [focused]);

  // 🎯 mapping icon
  const getIconName = () => {
    switch (route) {
      case "home":
        return focused ? "home" : "home-outline";
      case "history":
        return focused ? "time" : "time-outline";
      case "profile":
        return focused ? "person" : "person-outline";
    }
  };

  return (
    <Animated.View
      style={[
        styles.iconContainer,
        {
          transform: [{ translateY }],
        },
      ]}
    >
      <View
        style={[
          styles.iconWrapper,
          {
            backgroundColor: focused ? "#FFFFFF" : "#000000",
          },
        ]}
      >
        <Ionicons
          size={24}
          name={getIconName()}
          color={focused ? "#000000" : "#FFFFFF"}
        />
      </View>
    </Animated.View>
  );
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          height: 80,
          paddingTop: 10,
          paddingBottom: 10,
          backgroundColor: "#000",
          borderTopWidth: 0,
        },
      }}
    >
      {/* ❗ Hide index */}
      <Tabs.Screen
        name="index"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="history"
        options={{
          tabBarIcon: ({ focused }) => (
            <AnimatedIcon route="history" focused={focused} />
          ),
        }}
      />

      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ focused }) => (
            <AnimatedIcon route="home" focused={focused} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <AnimatedIcon route="profile" focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  iconWrapper: {
    width: 50,
    height: 50,
    borderRadius: 25, // ✅ bulat sempurna
    justifyContent: "center",
    alignItems: "center",
  },
});
