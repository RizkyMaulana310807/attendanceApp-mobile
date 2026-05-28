import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useEffect } from "react";

export default function Index() {
  const router = useRouter();

  const checkLogin = async () => {
    try {
      const user = await AsyncStorage.getItem("user");

      const token = await AsyncStorage.getItem("accessToken");

      // kalau user & token ada
      if (user && token) {
        router.replace("/home");
        return;
      }

      // kalau belum login
      router.replace("/login");
    } catch (error) {
      console.log(error);

      router.replace("/login");
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  return null;
}
