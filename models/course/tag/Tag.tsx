import Colors from "@/constants/Colors";
import { text } from "@/constants/Styles";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Tag } from "./model";
import useTagViewModel from "./v-model";

export function TagView(item: Tag) {
  const { onClick, color } = useTagViewModel(item);

  return (
    <TouchableOpacity onPress={onClick}>
      <Text style={[textList.textTab, { backgroundColor: color }]}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );
}

export const textList = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold", // set type of text = fontWeight
    color: Colors.blue.deep,
  },
  textTab: {
    ...text.note,
    color: Colors.blue.text,
    backgroundColor: Colors.light,
    borderRadius: 10,
    flex: 0,
    overflow: "hidden",
    paddingVertical: 10,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    lineHeight: 16,
    borderWidth: 2,
    width: 80,
  },
});
