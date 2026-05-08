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
    paddingTop: verticalScale(140),
    paddingHorizontal: scale(20),
    gap: scale(20),
  },
  headerContainer: { gap: scale(4) },
  headerTitle: {
    fontSize: moderateScale(28),
    fontFamily: "Fredoka",
    fontWeight: "bold",
    color: "#0F172A",
  },
  headerSubtitle: {
    fontSize: moderateScale(14),
    fontFamily: "Quicksand",
    color: "#627C85",
  },
  calendarCard: {
    backgroundColor: "#F7FFF7",
    borderWidth: scale(4),
    borderColor: "#0F172A",
    borderRadius: scale(20),
    padding: scale(10),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  calendar: { borderRadius: scale(20) },
  dayContainer: {
    width: scale(42),
    height: scale(42),
    borderRadius: scale(100),
    borderWidth: scale(3),
    borderColor: "#0F172A",
    justifyContent: "center",
    alignItems: "center",
  },
  sundayContainer: { borderColor: "#C1292E" },
  disabledContainer: { opacity: 0.3 },
  dayText: {
    fontSize: moderateScale(16),
    fontFamily: "Quicksand",
    fontWeight: "bold",
    color: "#0F172A",
  },
  sundayText: { color: "#C1292E" },
  disabledText: { color: "#999" },
  tableContainer: {
    backgroundColor: "#F7FFF7",
    borderRadius: scale(20),
    borderWidth: scale(4),
    borderColor: "#0F172A",
    overflow: "hidden",
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#84CC16",
    paddingVertical: verticalScale(14),
    paddingHorizontal: scale(8),
    justifyContent: "space-between",
  },
  tableHeaderText: {
    flex: 1,
    textAlign: "center",
    fontSize: moderateScale(14),
    fontFamily: "Fredoka",
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  tableRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: verticalScale(14),
    paddingHorizontal: scale(8),
    borderTopWidth: scale(2),
    borderTopColor: "#E5E5E5",
  },
  tableCell: {
    flex: 1,
    textAlign: "center",
    fontSize: moderateScale(12),
    fontFamily: "Quicksand",
    color: "#0F172A",
    borderRightWidth: scale(1),
    borderRightColor: "#0F172A",
  },
  presentBadge: {
    flex: 1,
    backgroundColor: "#84CC16",
    paddingVertical: verticalScale(6),
    borderRadius: scale(100),
    alignItems: "center",
    marginHorizontal: scale(4),
  },
  sickBadge: {
    flex: 1,
    backgroundColor: "#627C85",
    paddingVertical: verticalScale(6),
    borderRadius: scale(100),
    alignItems: "center",
    marginHorizontal: scale(4),
  },
  alphaBadge: {
    flex: 1,
    backgroundColor: "#C1292E",
    paddingVertical: verticalScale(6),
    borderRadius: scale(100),
    alignItems: "center",
    marginHorizontal: scale(4),
  },
  badgeText: {
    color: "#FFFFFF",
    fontFamily: "Fredoka",
    fontWeight: "bold",
    fontSize: moderateScale(12),
  },
  todayContainer: {
    borderColor: "#84CC16",
    backgroundColor: "#84CC1620",
    borderStyle: "dashed",
  },
  todayText: { color: "#84CC16" },
  historyContainer: {
    gap: scale(16),

    paddingBottom: verticalScale(100),
  },

  historyCard: {
    flexDirection: "row",

    alignItems: "center",

    backgroundColor: "#F7FFF7",

    borderWidth: scale(4),

    borderColor: "#0F172A",

    borderRadius: scale(20),

    padding: scale(12),

    gap: scale(14),
  },

  activeHistoryCard: {
    backgroundColor: "#84CC16",
  },

  numberContainer: {
    width: scale(80),

    height: scale(80),

    backgroundColor: "#84CC16",

    borderRadius: scale(10),

    justifyContent: "center",

    alignItems: "center",
  },

  activeNumberContainer: {
    backgroundColor: "#A3E635",
  },

  numberText: {
    fontSize: moderateScale(48),

    fontFamily: "Fredoka",

    fontWeight: "bold",

    color: "#FFFFFF",

    textShadowColor: "rgba(0,0,0,0.2)",

    textShadowOffset: {
      width: 0,
      height: 3,
    },

    textShadowRadius: 3,
  },

  infoContainer: {
    flex: 1,

    flexDirection: "row",

    justifyContent: "space-between",

    alignItems: "center",
  },

  infoColumn: {
    flex: 1,

    alignItems: "center",
  },

  infoTitle: {
    fontSize: moderateScale(20),

    fontFamily: "Fredoka",

    fontWeight: "bold",

    color: "#0F172A",
  },

  infoSubtitle: {
    fontSize: moderateScale(11),

    fontFamily: "Quicksand",

    color: "#0F172A",
  },

  line: {
    width: scale(1),

    height: "80%",

    backgroundColor: "#0F172A",

    opacity: 0.4,
  },

  selectedContainer: {
    backgroundColor: "#84CC16",

    borderColor: "#84CC16",
  },

  selectedText: {
    color: "#FFFFFF",
  },
  historyWrapper: {
    borderWidth: scale(4),

    borderColor: "#0F172A",

    borderRadius: scale(24),

    padding: scale(16),

    gap: scale(16),

    backgroundColor: "#F7FFF7",
  },

  historyHeading: {
    fontSize: moderateScale(24),

    fontFamily: "Fredoka",

    fontWeight: "bold",

    color: "#0F172A",
  },

  historyContainer: {
    gap: scale(16),

    paddingBottom: verticalScale(20),
  },

  historyCard: {
    flexDirection: "row",

    alignItems: "center",

    backgroundColor: "#F7FFF7",

    borderWidth: scale(4),

    borderColor: "#0F172A",

    borderRadius: scale(20),

    padding: scale(12),

    gap: scale(14),
  },

  activeHistoryCard: {
    backgroundColor: "#84CC16",
  },

  numberContainer: {
    width: scale(80),

    height: scale(80),

    backgroundColor: "#84CC16",

    borderRadius: scale(12),

    justifyContent: "center",

    alignItems: "center",
  },

  activeNumberContainer: {
    backgroundColor: "#FFFFFF",
  },

  numberText: {
    fontSize: moderateScale(48),

    fontFamily: "Fredoka",

    fontWeight: "bold",

    color: "#FFFFFF",

    textShadowColor: "rgba(0,0,0,0.2)",

    textShadowOffset: {
      width: 0,
      height: 3,
    },

    textShadowRadius: 3,
  },

  activeNumberText: {
    color: "#84CC16",
  },

  infoContainer: {
    flex: 1,

    flexDirection: "row",

    justifyContent: "space-between",

    alignItems: "center",
  },

  infoColumn: {
    flex: 1,

    alignItems: "center",
  },

  infoTitle: {
    fontSize: moderateScale(18),

    fontFamily: "Fredoka",

    fontWeight: "bold",

    color: "#0F172A",
  },

  infoSubtitle: {
    fontSize: moderateScale(11),

    fontFamily: "Quicksand",

    color: "#0F172A",
  },

  line: {
    width: scale(1),

    height: "80%",

    backgroundColor: "#0F172A",

    opacity: 0.4,
  },
  historyListWrapper: {
    height: scale(320),

    overflow: "hidden",
  },
});

export default styles;
