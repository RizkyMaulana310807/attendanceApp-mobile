import styles from "@/assets/styles/authStyle";

import { loginUser } from "@/src/services/auth.services";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Checkbox from "expo-checkbox";
import { router, Stack } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);

  const handleLogin = async () => {
    try {
      if (!email || !password) {
        Alert.alert("Error", "Email dan password wajib diisi");
        return;
      }

      const response = await loginUser(email, password);

      const data = response.data;
      // simpan token
      await AsyncStorage.setItem("accessToken", data.accessToken);

      await AsyncStorage.setItem("refreshToken", data.refreshToken);

      await AsyncStorage.setItem("user", JSON.stringify(data.user));

      router.replace("/home");
    } catch (error: any) {
      console.log(error);

      Alert.alert(
        "Login Error",
        JSON.stringify(
          error?.response?.data || error?.message || error,
          null,
          2,
        ),
      );
    }
  };
  return (
    <ScrollView style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />

      {/* Header Atas */}
      <View style={styles.bannerContainer}>
        {/* Banner Image Container */}
        <View style={styles.bannerImage}>
          <Image
            source={require("@/assets/images/LoginBanner.png")}
            style={{
              aspectRatio: 16 / 9,
              width: "50%",
              resizeMode: "contain",
              position: "absolute",
              top: -50,
              marginTop: -40,
            }}
          />
        </View>
        {/* Text Header Container */}
        <View style={styles.textHeaderContainer}>
          <Text style={styles.headerHeadlineText}>Welcome{"\n"}Back</Text>
          <Text style={styles.headerTaglineText}>
            Lorem ipsum dolor sit amet.
          </Text>
        </View>
      </View>

      {/* Form Body */}
      <View style={styles.formBody}>
        <View>
          <Text style={styles.labelTextInputField}>Email</Text>
          <TextInput
            style={styles.textInputField}
            placeholder="your_email@gmail.com"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View>
          <Text style={styles.labelTextInputField}>Password</Text>
          <TextInput
            style={styles.textInputField}
            placeholder="your_password123#"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        <View style={styles.loginOptionContainer}>
          <Pressable
            style={styles.rememberMeOption}
            onPress={() => setChecked(!checked)}
          >
            <Checkbox value={checked} onValueChange={setChecked} />
            <Text>remember me</Text>
          </Pressable>
          <Text>forgot Password?</Text>
        </View>

        {/* separator */}
        <View style={styles.separatorContainer}>
          <View style={styles.separator}></View>
          <Text>Or Login With</Text>
          <View style={styles.separator}></View>
        </View>

        <TouchableOpacity onPress={handleLogin} style={styles.submitButton}>
          <Text style={styles.submitButtonLabel}>Submit</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
    </ScrollView>
  );
}
