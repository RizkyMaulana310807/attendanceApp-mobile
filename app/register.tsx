import styles from "@/assets/styles/authStyle";
import { Stack } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleLogin = () => {
    if (!password || !email) return;
    Alert.alert(
      "data login",
      `email: ${email}\npassword: ${password}\nconfirm: ${confirmPassword}`,
    );
    alert(
      `email: ${email}\npassword: ${password}\nconfirm: ${confirmPassword}`,
    );
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
          <Text style={styles.headerHeadlineText}>New Here?</Text>
          <Text style={styles.headerTaglineText}>
            Lorem ipsum dolor sit amet.
          </Text>
        </View>
      </View>

      {/* Form Body */}
      <View>
        <Text style={styles.labelTextInputField}>Email</Text>
        <TextInput
          style={styles.textInputField}
          placeholder="your_email@gmail.com"
          value={email}
          onChangeText={setEmail}
        />
        <Text style={styles.labelTextInputField}>Password</Text>
        <TextInput
          style={styles.textInputField}
          placeholder="your_password123#"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Text style={styles.labelTextInputField}>Confirm Password</Text>
        <TextInput
          style={styles.textInputField}
          placeholder="your_password123#"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />

        <View style={styles.loginOptionContainer}>
          {/* <Pressable
            style={styles.rememberMeOption}
            onPress={() => setChecked(!checked)}
          >
            <Checkbox value={checked} onValueChange={setChecked} />
            <Text>remember me</Text>
          </Pressable>
          <Text>forgot Password?</Text> */}
        </View>

        <TouchableOpacity onPress={handleLogin} style={styles.submitButton}>
          <Text style={styles.submitButtonLabel}>Submit</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
    </ScrollView>
  );
}
