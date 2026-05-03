import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const LoginScreen = () => {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: mode === "login" ? 0 : 1,
      duration: 400,
      useNativeDriver: true,
    }).start();
  }, [mode, animation]);

  const loginTranslate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -300],
  });

  const registerTranslate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [300, 0],
  });

  const loginOpacity = animation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 0.3, 0],
  });

  const registerOpacity = animation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 0.3, 1],
  });

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.header}>
        <Text style={styles.title}>
          {mode === "login" ? "Selamat Datang" : "Buat Akun Baru"}
        </Text>
        <Text style={styles.subtitle}>Masuk atau daftar untuk melanjutkan</Text>
      </View>

      <View style={styles.switchRow}>
        <Pressable
          onPress={() => setMode("login")}
          style={[styles.switchButton, mode === "login" && styles.activeSwitch]}
        >
          <Text
            style={[
              styles.switchText,
              mode === "login" && styles.activeSwitchText,
            ]}
          >
            Login
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setMode("register")}
          style={[
            styles.switchButton,
            mode === "register" && styles.activeSwitch,
          ]}
        >
          <Text
            style={[
              styles.switchText,
              mode === "register" && styles.activeSwitchText,
            ]}
          >
            Register
          </Text>
        </Pressable>
      </View>

      <View style={styles.formWrapper}>
        <Animated.View
          style={[
            styles.formCard,
            {
              opacity: loginOpacity,
              transform: [{ translateX: loginTranslate }],
            },
          ]}
        >
          <Text style={styles.formTitle}>Login</Text>
          <TextInput
            placeholder="Email"
            placeholderTextColor="#888"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#888"
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <Pressable style={styles.submitButton}>
            <Text style={styles.submitText}>Masuk</Text>
          </Pressable>
        </Animated.View>

        <Animated.View
          style={[
            styles.formCard,
            {
              opacity: registerOpacity,
              transform: [{ translateX: registerTranslate }],
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
            },
          ]}
        >
          <Text style={styles.formTitle}>Register</Text>
          <TextInput
            placeholder="Email"
            placeholderTextColor="#888"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#888"
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TextInput
            placeholder="Konfirmasi Password"
            placeholderTextColor="#888"
            style={styles.input}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
          <Pressable style={styles.submitButton}>
            <Text style={styles.submitText}>Daftar</Text>
          </Pressable>
        </Animated.View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0C3B66",
    paddingHorizontal: 24,
    paddingTop: 60,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    color: "#FFF",
    fontWeight: "700",
  },
  subtitle: {
    color: "#B0C9E0",
    marginTop: 6,
    fontSize: 16,
  },
  switchRow: {
    flexDirection: "row",
    alignSelf: "center",
    backgroundColor: "#153F70",
    borderRadius: 999,
    padding: 4,
    marginBottom: 24,
  },
  switchButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 999,
  },
  switchText: {
    color: "#B0C9E0",
    fontSize: 16,
    fontWeight: "600",
  },
  activeSwitch: {
    backgroundColor: "#FFF",
  },
  activeSwitchText: {
    color: "#0C3B66",
  },
  formWrapper: {
    flex: 1,
    justifyContent: "center",
    minHeight: 360,
  },
  formCard: {
    backgroundColor: "#FFF",
    borderRadius: 28,
    padding: 24,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowOffset: { width: 0, height: 12 },
    shadowRadius: 18,
    elevation: 8,
  },
  formTitle: {
    fontSize: 24,
    color: "#0C3B66",
    fontWeight: "700",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#F3F7FB",
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
    color: "#0C3B66",
    marginBottom: 16,
    fontSize: 15,
  },
  submitButton: {
    backgroundColor: "#0C3B66",
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 8,
  },
  submitText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "700",
  },
});

export default LoginScreen;
