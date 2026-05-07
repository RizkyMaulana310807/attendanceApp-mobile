import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";

type CircleProgressProps = {
  progress: number;
  size?: number;
  width?: number;
  color?: string;
  backgroundColor?: string;
};

export default function CircleProgress({
  progress,
  size = 80,
  width = 8,
  color = "#7CFC00",
  backgroundColor = "#D9D9D9",
}: CircleProgressProps) {
  return (
    <View style={styles.container}>
      <AnimatedCircularProgress
        size={size}
        width={width}
        fill={progress}
        tintColor={color}
        backgroundColor={backgroundColor}
        rotation={0}
        lineCap="round"
      >
        {() => <Text style={[styles.text, { color }]}>{progress}%</Text>}
      </AnimatedCircularProgress>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontFamily: "Quicksand",
    fontWeight: "bold",
    textShadowColor: "#2F4F00",
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowRadius: 1,
  },
});
