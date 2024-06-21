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

const segmentTabs = [
  {
    value: "walk",
    label: "Walking",
    style: container.leftButton,
  },
  {
    value: "train",
    label: "Transit",
    style: defaultContainer.buttonNoBorder,
  },
  {
    value: "abc",
    label: "Abc",
    style: defaultContainer.buttonNoBorder,
  },
  {
    value: "drive",
    label: "Driving",
    style: container.rightButton,
  },
];

export const data = {
  segmentTabs,
};
