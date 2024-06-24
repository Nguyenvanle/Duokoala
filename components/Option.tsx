import Colors from "@/constants/Colors";
import { text } from "@/constants/Styles";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface ContentProps {
  content: string;
}

export function DefaultOption(props: ContentProps) {
  const { content } = props;
  return (
    <View style={backgroundStyle.default}>
      <Text style={contentStyle.default}>{content}</Text>
    </View>
  );
}

//< - - - - - - - - - - - - - - - - - - - - >//

export function SelectedOption(props: ContentProps) {
  const { content } = props;
  return (
    <View style={backgroundStyle.selected}>
      <Text style={contentStyle.selected}>{content}</Text>
    </View>
  );
}

//< - - - - - - - - - - - - - - - - - - - - >//

export function CorrectOption(props: ContentProps) {
  const { content } = props;
  return (
    <View style={backgroundStyle.correct}>
      <Text style={contentStyle.selected}>{content}</Text>
    </View>
  );
}

//< - - - - - - - - - - - - - - - - - - - - >//

export function WrongOption(props: ContentProps) {
  const { content } = props;
  return (
    <View style={backgroundStyle.wrong}>
      <Text style={contentStyle.selected}>{content}</Text>
    </View>
  );
}

//< - - - - - - - - - - - - - - - - - - - - >//

export function NoneClick(props: ContentProps) {
  const { content } = props;
  return (
    <View style={backgroundStyle.buttontab}>
      <Text style={contentStyle.texttab}>{content}</Text>
    </View>
  );
}

//< - - - - - - - - - - - - - - - - - - - - >//

export function SelectedClick(props: ContentProps) {
  const { content } = props;
  return (
    <View style={backgroundStyle.buttontab}>
      <Text style={contentStyle.selectedtab}>{content}</Text>
    </View>
  );
}

//< - - - - - - - - - - - - - - - - - - - - >//

const contentStyle = StyleSheet.create({
  default: {
    ...text.mainContent,
    fontWeight: "bold",
  },
  selected: {
    ...text.mainContent,
    fontWeight: "bold",
    color: Colors.milk,
  },
  texttab: {
    ...text.note,
    color: Colors.blue.text,
    backgroundColor: Colors.milk,
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
  selectedtab: {
    ...text.note,
    color: Colors.blue.text,
    backgroundColor: Colors.red,
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

const background = StyleSheet.create({
  bg: {
    flex: 0,
    padding: 15,
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 8, // Border radius
    borderWidth: 3, // Độ rộng của border
    borderColor: Colors.black, // Màu sắc của border
  },
});
const backgroundStyle = StyleSheet.create({
  default: {
    ...background.bg,
    backgroundColor: Colors.milk,
  },
  selected: {
    ...background.bg,
    backgroundColor: Colors.blue.deep,
  },
  correct: {
    ...background.bg,
    backgroundColor: Colors.green,
  },
  wrong: {
    ...background.bg,
    backgroundColor: Colors.red,
  },
  buttontab: {
    flex: 0,
    justifyContent: "space-between",
    alignSelf: "stretch",
    flexDirection: "row",
    gap: 10,
    height: 35,
  },
});
