import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7FFF7",
    justifyContent: "space-around",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 4,
  },
  greetingText: {
    fontFamily: "Fredoka",
    color: "#0F172A",
    fontSize: 20,
    fontWeight: "bold",
  },
  topHeaderContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  dateTimeHeaderContainer: {
    alignItems: "center",
  },
  timeInfoMainActivity: {
    fontFamily: "Quicksand",
    color: "#0F172A",
    fontSize: 36,
    fontWeight: "bold",
  },
  dateInfoMainActivity: {
    fontFamily: "Quicksand",
    color: "#0F172A",
    fontSize: 20,
    fontWeight: "500",
  },
  buttonSubmitAttendance: {
    position: "relative",
    width: 170,
    height: 170,
    borderRadius: 85,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 4,
  },
  shiftText: {
    fontFamily: "Quicksand",
    color: "#0F172A",
    fontSize: 15,
    marginTop: 8,
  },
  locationInfoText: {
    fontFamily: "Quicksand",
    color: "#0F172A",
    fontSize: 15,
  },
  locationInfoContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  footerHistoryInfoContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 10,
  },
  footerTimeInfoText: {
    fontFamily: "Quicksand",
    color: "#0F172A",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  footerInfoText: {
    fontFamily: "Quicksand",
    color: "#0F172A",
    textAlign: "center",
    fontSize: 11,
  },
  mainActivityContainer: {
    display: "flex",
    justifyContent: "space-around",
    gap: 16,
  },
});

export default styles;
