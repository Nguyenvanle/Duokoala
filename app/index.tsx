import { FlaticonIcon } from "@/components/FlaticonIcon";
import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import { router } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={defaultStyles.pageContainer}>
      <View style={index.container}>
        <Text style={index.text}>Roboto Font</Text>
        <View style={index.logo}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/3069/3069172.png",
            }}
            style={{
              width: 100,
              height: 100,
            }}
          />
          <FlaticonIcon
            size={100}
            uri={"https://cdn-icons-png.flaticon.com/512/3069/3069172.png"}
          />
        </View>
      </View>
    </View>
  );
}

export const index = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 24,
  },
  logo: {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});
