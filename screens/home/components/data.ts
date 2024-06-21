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
  },
});

const segmentTabs = [
  {
    value: "walk",
    label: "Walking",
    style: container.leftButton,
    labelStyle: text.label,
  },
  {
    value: "train",
    label: "Transit",
    style: defaultContainer.buttonNoBorder,
    labelStyle: text.label,
  },
  {
    value: "abc",
    label: "Abc",
    style: defaultContainer.buttonNoBorder,
    labelStyle: text.label,
  },
  {
    value: "drive",
    label: "Driving",
    style: container.rightButton,
    labelStyle: text.label,
  },
];

export const data = {
  segmentTabs,
};
