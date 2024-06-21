import Colors from "@/constants/Colors";
import * as React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { SegmentedButtons } from "react-native-paper";
import { data } from "./data";

const SegmentButtons = () => {
  const [value, setValue] = React.useState("");

  return (
    <SafeAreaView style={container.container}>
      <SegmentedButtons
        value={value}
        onValueChange={setValue}
        buttons={data.segmentTabs}
        style={container.segmentButtons}
        theme={{
          colors: { secondaryContainer: Colors.blue.regular },
          roundness: 10,
        }}
      />
    </SafeAreaView>
  );
};

const container = StyleSheet.create({
  container: {
    flex: 0,
    alignItems: "center",
    padding: 10,
    backgroundColor: Colors.mute,
    borderRadius: 50,
  },
  segmentButtons: {
    flex: 0,
  },
});

export default SegmentButtons;
