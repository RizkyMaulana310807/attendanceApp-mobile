import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";

import { HapticTab } from "@/components/haptic-tab";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        tabBarInactiveTintColor: Colors[colorScheme ?? "light"].tabIconDefault,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          height: 80,
          paddingBottom: 10,
          paddingTop: 10,
          backgroundColor: Colors[colorScheme ?? "light"].background,
          borderTopColor: Colors[colorScheme ?? "light"].tabIconDefault,
          borderTopWidth: 1,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginTop: 4,
        },
      }}
    >
      <Tabs.Screen
        name="history"
        options={{
          title: "History",
          href: "/history",
          tabBarIcon: ({ color, focused }) => (
            <View
              style={[
                styles.iconContainer,
                {
                  transform: [{ translateY: focused ? -8 : 0 }],
                },
              ]}
            >
              <View
                style={[
                  styles.iconWrapper,
                  {
                    backgroundColor: focused
                      ? Colors[colorScheme ?? "light"].tint
                      : "transparent",
                    borderRadius: focused ? 12 : 0,
                  },
                ]}
              >
                <IconSymbol size={28} name="clock.fill" color={color} />
              </View>
            </View>
          ),
          tabBarLabel: ({ focused, color }) => (!focused ? "History" : ""),
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          href: "/home",
          tabBarIcon: ({ color, focused }) => (
            <View
              style={[
                styles.iconContainer,
                {
                  transform: [{ translateY: focused ? -8 : 0 }],
                },
              ]}
            >
              <View
                style={[
                  styles.iconWrapper,
                  {
                    backgroundColor: focused
                      ? Colors[colorScheme ?? "light"].tint
                      : "transparent",
                    borderRadius: focused ? 12 : 0,
                  },
                ]}
              >
                <IconSymbol size={28} name="house.fill" color={color} />
              </View>
            </View>
          ),
          tabBarLabel: ({ focused, color }) => (!focused ? "Home" : ""),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          href: "/profile",
          tabBarIcon: ({ color, focused }) => (
            <View
              style={[
                styles.iconContainer,
                {
                  transform: [{ translateY: focused ? -8 : 0 }],
                },
              ]}
            >
              <View
                style={[
                  styles.iconWrapper,
                  {
                    backgroundColor: focused
                      ? Colors[colorScheme ?? "light"].tint
                      : "transparent",
                    borderRadius: focused ? 12 : 0,
                  },
                ]}
              >
                <IconSymbol size={28} name="person.fill" color={color} />
              </View>
            </View>
          ),
          tabBarLabel: ({ focused, color }) => (!focused ? "Profile" : ""),
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
    padding: 8,
    paddingHorizontal: 12,
  },
});
