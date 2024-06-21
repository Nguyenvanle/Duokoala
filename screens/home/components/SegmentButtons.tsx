import Colors from "@/constants/Colors";
import { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { SegmentedButtons } from "react-native-paper";
import { data } from "./data";

const SegmentButtons = () => {
  const [value, setValue] = useState("");

  const onClick = (item: string) => {
    setValue(item);
    console.log(item);
  };

  return (
    <SafeAreaView style={container.container}>
      <SegmentedButtons
        value={value}
        onValueChange={onClick}
        buttons={data.segmentTabs}
        style={container.segmentButtons}
        theme={{
          colors: {
            secondaryContainer: Colors.green,
            primary: Colors.black,
            onSecondaryContainer: "red",
          },
        }}
      />
    </SafeAreaView>
  );
};

const container = StyleSheet.create({
  container: {
    flex: 0,
    alignItems: "center",
    padding: 5,
    backgroundColor: Colors.milk,
    borderRadius: 50,
    borderWidth: 2,
  },
  segmentButtons: {
    flex: 0,
  },
});

export default SegmentButtons;
