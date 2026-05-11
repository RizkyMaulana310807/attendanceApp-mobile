import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const scale = (size) => {
  return (width / guidelineBaseWidth) * size;
};

const verticalScale = (size) => {
  return (height / guidelineBaseHeight) * size;
};

const moderateScale = (size, factor = 0.5) => {
  return size + (scale(size) - size) * factor;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEF2EC",
  },
  bannerContainer: {
    display: "flex",
  },
  bannerImage: {
    alignItems: "flex-end",
    width: "100%",
    backgroundColor: "red",
    padding: 0,
    margin: 0,
    position: "relative",
  },
  textHeaderContainer: {
    marginTop: "35%",
    padding: scale(35),
  },
  headerHeadlineText: {
    color: "black",
    fontFamily: "fredoka",
    fontSize: moderateScale(48),
    fontWeight: "bold",
  },
  headerTaglineText: {
    color: "black",
    fontFamily: "quicksand",
    fontSize: moderateScale(10),
  },
});

export default styles;
