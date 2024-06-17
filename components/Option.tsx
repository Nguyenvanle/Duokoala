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
});
