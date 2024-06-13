import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { toeicUrl } from "@/models/course/model";

export default function HeaderImage() {
  return (
    <View style={styles.imageContainer}>
      <Image src={toeicUrl} style={{ height: "100%" }} resizeMode="cover" />
    </View>
  );
}

const { width, height } = Dimensions.get("window");
const viewHeight = (1 / 4) * height;

const styles = StyleSheet.create({
  imageContainer: {
    width: width - 40,
    height: viewHeight,
    overflow: "hidden",
    flex: 0,
    borderRadius: 20,
    borderWidth: 2,
  },
});
