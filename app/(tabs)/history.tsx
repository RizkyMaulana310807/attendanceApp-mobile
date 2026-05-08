import CardCalendar from "@/app/partials/history/cardCalendar";
import React from "react";
import { Image, ScrollView, View } from "react-native";

export default function History() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#F7FFF7",
      }}
    >
      {/* Banner */}
      <Image
        source={require("@/assets/images/HistoryBanner.png")}
        style={{
          position: "absolute",
          top: -60,
          width: "100%",
          aspectRatio: 16 / 9,
        }}
        resizeMode="contain"
      />

      {/* Scroll */}
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 120,
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* CONTENT */}
        <CardCalendar />
      </ScrollView>
    </View>
  );
}
