import { StyleSheet } from "react-native";
import Colors from "./Colors";

export const defaultStyles = StyleSheet.create({
  btn: {
    height: 50,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: Colors.black,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  pageContainer: {
    flex: 1,
    backgroundColor: Colors.blue.light,
  },
});

export const text = StyleSheet.create({
  container: {
    flex: 0,
    alignContent: "center",
    justifyContent: "center",
    alignSelf: "stretch",
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold", // set type of text = fontWeight
    color: Colors.blue.text,
  },
  subTitle: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold", // set type of text = fontWeight
    color: Colors.blue.text,
  },
  mainContent: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "regular", // set type of text = fontWeight
    color: Colors.blue.text,
  },
  note: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "normal", // set type of text = fontWeight
    fontStyle: "italic",
    color: Colors.milk,
  },
  btnText: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold", // set type of text = fontWeight
    color: Colors.milk,
  },
  link: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "regular", // set type of text = fontWeight
    color: Colors.blue.deep,
  },
  titleCourse: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold", // set type of text = fontWeight
    color: Colors.red,
  },
});
