import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function LoginScreen() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />

      {/* Dekorasi kanan atas */}
      <View style={styles.topDecoration}>
        <View style={[styles.line, { backgroundColor: "#A3D84C" }]} />
        <View style={[styles.line, { backgroundColor: "#7ACC00" }]} />
        <View style={[styles.line, { backgroundColor: "#BFE676" }]} />
        <View style={[styles.line, { backgroundColor: "#84CC16" }]} />
      </View>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>REGISTER</Text>
        <Text style={styles.subtitle}>Lorem ipsum dolor sit amet</Text>
      </View>

      {/* Form */}
      <View style={styles.form}>
        {/* Email */}
        <Text style={styles.label}>Email</Text>
        <View style={styles.inputContainer}>
          <Ionicons name="person" size={22} color="#1A1F36" />
          <TextInput
            placeholder="Email"
            placeholderTextColor="#4B5563"
            style={styles.input}
          />
        </View>

        {/* Password */}
        <Text style={styles.label}>Password</Text>
        <View style={styles.inputContainer}>
          <MaterialIcons name="password" size={22} color="#1A1F36" />

          <TextInput
            placeholder="Password"
            placeholderTextColor="#4B5563"
            secureTextEntry={!showPassword}
            style={styles.input}
          />

          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={showPassword ? "eye" : "eye-off"}
              size={24}
              color="#1A1F36"
            />
          </TouchableOpacity>
        </View>

        {/* Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>REGISTER</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEF2EC",
    paddingHorizontal: 35,
  },

  topDecoration: {
    position: "absolute",
    top: -30,
    right: -30,
    transform: [{ rotate: "45deg" }],
  },

  line: {
    width: 140,
    height: 36,
    borderRadius: 20,
    marginBottom: 12,
  },

  header: {
    marginTop: 140,
  },

  title: {
    fontSize: 48,
    fontWeight: "900",
    color: "#0F172A",
    lineHeight: 55,
  },

  subtitle: {
    marginTop: 5,
    fontSize: 15,
    color: "#374151",
  },

  form: {
    marginTop: 90,
  },

  label: {
    fontSize: 16,
    color: "#374151",
    marginBottom: 10,
    marginTop: 15,
  },

  inputContainer: {
    width: "100%",
    height: 60,
    borderWidth: 1.5,
    borderColor: "#1A1F36",
    borderRadius: 14,
    backgroundColor: "#F8F8F8",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },

  input: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: "#111827",
  },

  button: {
    width: 170,
    height: 58,
    backgroundColor: "#84CC16",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 50,
    borderWidth: 1,
    borderColor: "#1A1F36",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "700",
  },
});
