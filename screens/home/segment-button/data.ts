import Colors from "@/constants/Colors";
import { defaultContainer } from "@/constants/Styles";
import { StyleSheet } from "react-native";

const container = StyleSheet.create({
  leftButton: {
    ...defaultContainer.buttonNoBorder,
    borderTopRightRadius: 50,
    borderBottomEndRadius: 50,
  },
  rightButton: {
    ...defaultContainer.buttonNoBorder,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
  },
});

const text = StyleSheet.create({
  label: {
    fontSize: 12, // Adjust the font size as needed
    color: Colors.dark,
  },
});

const segmentTabs = [
  {
    value: "toeic",
    label: "TOEIC",
    style: container.leftButton,
    labelStyle: text.label,
  },
  {
    value: "ielts",
    label: "IELTS",
    style: defaultContainer.buttonNoBorder,
    labelStyle: text.label,
  },
  {
    value: "vstep",
    label: "VSTEP",
    style: defaultContainer.buttonNoBorder,
    labelStyle: text.label,
  },
  {
    value: "community",
    label: "COMM",
    style: container.rightButton,
    labelStyle: text.label,
  },
];

export const data = {
  segmentTabs,
};
