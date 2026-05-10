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
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />

      {/* Dekorasi kanan atas */}
      <View style={styles.topDecoration}>
        <View style={[styles.line, { backgroundColor: "#B7E36B" }]} />
        <View style={[styles.line, { backgroundColor: "#84CC16" }]} />
        <View style={[styles.line, { backgroundColor: "#CBEA96" }]} />
        <View style={[styles.line, { backgroundColor: "#7CC700" }]} />
      </View>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>WELCOME</Text>
        <Text style={styles.title}>BACK</Text>

        <Text style={styles.subtitle}>Lorem ipsum dolor sit amet</Text>
      </View>

      {/* Form */}
      <View style={styles.form}>
        {/* Username */}
        <Text style={styles.label}>Email or Username</Text>

        <View style={styles.inputContainer}>
          <Ionicons name="person" size={22} color="#111827" />

          <TextInput
            placeholder="Username"
            placeholderTextColor="#4B5563"
            style={styles.input}
          />
        </View>

        {/* Password */}
        <Text style={styles.label}>Password</Text>

        <View style={styles.inputContainer}>
          <MaterialIcons name="password" size={22} color="#111827" />

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
              color="#111827"
            />
          </TouchableOpacity>
        </View>

        {/* Remember & Forgot */}
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.rememberContainer}
            onPress={() => setRememberMe(!rememberMe)}
          >
            <View
              style={[styles.checkbox, rememberMe && styles.checkboxActive]}
            />

            <Text style={styles.rememberText}>Remember me</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        {/* Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        {/* Register */}
        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>Dont have an account?</Text>

          <TouchableOpacity>
            <Text style={styles.registerLink}> Register Now</Text>
          </TouchableOpacity>
        </View>
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

  /* Dekorasi */
  topDecoration: {
    position: "absolute",
    top: -25,
    right: -25,
    transform: [{ rotate: "45deg" }],
  },

  line: {
    width: 145,
    height: 36,
    borderRadius: 20,
    marginBottom: 12,
  },

  /* Header */
  header: {
    marginTop: 145,
  },

  title: {
    fontSize: 48,
    fontWeight: "900",
    color: "#0F172A",
    lineHeight: 54,
  },

  subtitle: {
    marginTop: 8,
    fontSize: 15,
    color: "#374151",
  },

  /* Form */
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
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: "#111827",
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

  /* Row */
  row: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  rememberContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  checkbox: {
    width: 22,
    height: 22,
    borderWidth: 1.5,
    borderColor: "#111827",
    borderRadius: 6,
    backgroundColor: "#FFFFFF",
  },

  checkboxActive: {
    backgroundColor: "#84CC16",
  },

  rememberText: {
    marginLeft: 8,
    fontSize: 15,
    color: "#374151",
  },

  forgotText: {
    fontSize: 15,
    color: "#111827",
  },

  /* Button */
  button: {
    width: 170,
    height: 58,
    backgroundColor: "#84CC16",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#111827",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 70,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "700",
  },

  /* Register */
  registerContainer: {
    marginTop: 45,
    flexDirection: "row",
    justifyContent: "center",
  },

  registerText: {
    fontSize: 15,
    color: "#374151",
  },

  registerLink: {
    fontSize: 15,
    color: "#9AD12A",
    textDecorationLine: "underline",
  },
});
