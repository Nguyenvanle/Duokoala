import { defaultStyles } from "@/constants/Styles";
import { router } from "expo-router";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={defaultStyles.pageContainer}>
      <View style={index.indexContainer}>
        <Text style={index.indexText}>Index Page</Text>
      </View>
    </View>
  );
}

const index = StyleSheet.create({
  indexContainer: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
  indexText: {
    textAlign: "center",
  },
});
