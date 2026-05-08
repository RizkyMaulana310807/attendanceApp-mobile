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
  bodyContainer: {
    flex: 1,
    marginTop: verticalScale(125),
    flexDirection: "column",
    gap: scale(10),
  },

  profileCardContainer: {
    backgroundColor: "#F7FFF7",
    borderRadius: scale(10),
    zIndex: 100,
    padding: scale(20),
    flexDirection: "row",
    justifyContent: "space-around",
    gap: scale(12),
    borderWidth: scale(4),
    borderColor: "#0F172A",
    width: "85%",
    alignSelf: "center",
  },

  profileImage: {
    width: scale(100),
    height: scale(100),
    borderRadius: scale(100),
    borderWidth: scale(4),
  },

  profileImageContainer: {
    position: "relative",
  },

  userStatusCircle: {
    position: "absolute",
    width: scale(25),
    height: scale(25),
    backgroundColor: "#84CC16",
    borderRadius: scale(100),
    borderColor: "#0F172A",
    borderWidth: scale(4),
    bottom: scale(5),
    right: scale(2),
  },

  UserNameContainer: {
    flexDirection: "column",
    justifyContent: "center",
    flex: 1,
  },

  userNameText: {
    fontSize: moderateScale(20),
    fontFamily: "Quicksand",
    fontWeight: "bold",
  },

  userRoleText: {
    fontSize: moderateScale(15),
    fontFamily: "Quicksand",
    fontWeight: "400",
  },

  settingContainer: {
    justifyContent: "center",
  },

  settingsButton: {
    backgroundColor: "#84CC16",
    paddingVertical: verticalScale(3),
    paddingHorizontal: scale(4),
    borderRadius: scale(999),
    borderWidth: scale(4),
    borderColor: "#0F172A",
  },

  numberOfWeekText: {
    fontFamily: "Fredoka",
    fontSize: moderateScale(64),
    fontWeight: "bold",
    color: "#84CC16",
    textShadowColor: "black",
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowRadius: 1,
  },

  ordinalIndicatorText: {
    fontSize: moderateScale(20),
    fontFamily: "Fredoka",
    fontWeight: "bold",
    color: "#84CC16",
    textShadowColor: "black",
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowRadius: 1,
  },

  numberOfWeekContainer: {
    flexDirection: "row",
  },

  dateDisplayContainer: {
    flexDirection: "column",
    justifyContent: "center",
  },

  streakWeekDisplayContainer: {
    flexDirection: "row",
  },

  weekNameText: {
    fontFamily: "Quicksand",
    fontWeight: "bold",
    fontSize: moderateScale(14),
  },

  dateInfoText: {
    fontFamily: "Quicksand",
    fontWeight: "400",
    fontSize: moderateScale(10),
  },

  streakWeekActionButton: {
    width: scale(35),
    height: scale(35),
    backgroundColor: "#84CC16",
    borderWidth: scale(4),
    borderColor: "#0F172A",
    borderRadius: scale(100),
    alignItems: "center",
    justifyContent: "center",
  },

  actionButtonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: scale(10),
  },

  StreakDataContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    gap: scale(5),
  },

  streakCounterText: {
    fontFamily: "Quicksand",
    position: "absolute",
    fontSize: moderateScale(18),
    fontWeight: "bold",
    color: "white",
  },

  streakCounterContainer: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },

  cardStreakContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    gap: scale(20),
    width: "85%",
    alignSelf: "center",
    borderWidth: scale(4),
    borderColor: "#0F172A",
    borderRadius: scale(10),
    padding: scale(20),
  },

  streakDaysProgressContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  streakAbsent: {
    width: scale(40),
    height: scale(40),
    borderRadius: scale(100),
    borderWidth: scale(4),
    borderColor: "#ff353c80",
    backgroundColor: "#C1292E",
    justifyContent: "center",
    alignItems: "center",
  },

  streakPresent: {
    width: scale(40),
    height: scale(40),
    borderRadius: scale(100),
    borderWidth: scale(4),
    borderColor: "#84CC1680",
    backgroundColor: "#84CC16",
    justifyContent: "center",
    alignItems: "center",
  },

  streakSick: {
    width: scale(40),
    height: scale(40),
    borderRadius: scale(100),
    borderWidth: scale(4),
    borderColor: "#627C8580",
    backgroundColor: "#627C85",
    justifyContent: "center",
    alignItems: "center",
  },

  alphabetStreakProgress: {
    fontFamily: "Quicksand",
    fontSize: moderateScale(24),
    fontWeight: "bold",
    color: "#F7FFF7",
    textAlign: "center",
  },

  cardProgressContainer: {
    flexDirection: "row",
    borderWidth: scale(4),
    borderRadius: scale(10),
    width: "85%",
    alignSelf: "center",
    padding: scale(20),
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  progressTextContainer: {
    alignItems: "center",
    justifyContent: "center",
    gap: scale(5),
  },

  separator: {
    width: scale(2),
    height: "85%",
    backgroundColor: "rgba(0,0,0,0.1)",
  },
  cardHeader: {
    paddingHorizontal: scale(30),
    fontFamily: "Quicksand",
    fontSize: moderateScale(15),
    fontWeight: "bold",
  },
  circleButton: {
    width: scale(50),
    height: scale(50),
    backgroundColor: "#84CC16",
    borderRadius: "100%",
    zIndex: 100,
    borderWidth: 4,
    justifyContent: "center",
    alignItems: "center",
    top: scale(85),
    left: scale(25),
  },
});

export default styles;
