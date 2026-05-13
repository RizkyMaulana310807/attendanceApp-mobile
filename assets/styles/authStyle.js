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
    fontSize: moderateScale(42),
    fontWeight: "bold",
  },
  headerTaglineText: {
    color: "black",
    fontFamily: "quicksand",
    fontSize: moderateScale(10),
  },
  textInputField: {
    borderWidth: scale(1),
    padding: scale(14),
    marginHorizontal: scale(35),
    borderRadius: scale(10),
    fontFamily: "quicksand",
    fontWeight: "bold",
    fontSize: scale(15),
  },
  labelTextInputField: {
    marginHorizontal: scale(35),
    paddingVertical: scale(4),
    fontFamily: "quicksand",
    fontWeight: "bold",
    fontSize: scale(14),
  },
  submitButton: {
    borderWidth: scale(2),
    backgroundColor: "#84CC16",
    padding: scale(14),
    borderRadius: scale(10),
    marginHorizontal: scale(35),
    marginVertical: scale(8),
  },
  submitButtonLabel: {
    fontFamily: "fredoka",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: scale(20),
    color: "#F7FFF7",
  },
  loginOptionContainer: {
    display: "flex",
    flexDirection: "row",
    marginHorizontal: scale(35),
    justifyContent: "space-between",
    paddingVertical: scale(20),
    alignItems: "center",
    textAlign: "center",
  },
  rememberMeOption: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: scale(4),
  },
});

export default styles;
