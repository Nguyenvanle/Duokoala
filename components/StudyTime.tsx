import { StyleSheet, Text, View } from "react-native";
import { container } from "@/app/sign-in";
import Colors from "@/constants/Colors";
import * as Progress from "react-native-progress";
import { FlaticonIcon } from "@/components/FlaticonIcon";
import React from "react";
import { text } from "@/constants/Styles";

const fontSize: number = 34;

interface StudyTimeProps {
  clockUri: string;
  currentTime: number;
  targetTime: number;
}

const StudyTime: React.FC<StudyTimeProps> = ({
  clockUri,
  currentTime,
  targetTime,
}) => {
  const process: number = currentTime / targetTime;
  return (
    <View style={studyTime.container}>
      <View style={studyTime.leftContainer}>
        <Text style={{ ...text.btnText, color: "black" }}>
          Thời gian học hôm nay
        </Text>

        <Text style={home.timeTextRed}>
          {currentTime}/
          {<Text style={home.timeTextMilk}>{targetTime} phút</Text>}
        </Text>

        <Progress.Bar
          progress={process}
          color={Colors.red}
          unfilledColor={Colors.milk}
          borderWidth={0}
          height={10}
          width={170}
        />
      </View>

      <View style={studyTime.rightContainer}>
        <FlaticonIcon size={80} uri={clockUri} />
      </View>
    </View>
  );
};

const home = StyleSheet.create({
  timeTextRed: {
    ...text.title,
    color: Colors.red,
    fontSize: fontSize,
  },
  timeTextMilk: {
    ...text.title,
    color: Colors.milk,
    fontSize: fontSize,
  },
});

export const studyTime = StyleSheet.create({
  container: {
    ...container.form,
    borderRadius: 20,
    borderWidth: 2,
    backgroundColor: Colors.blue.sky,
    alignItems: "flex-start",
    flexDirection: "row",
    alignContent: "space-between",
    padding: 12,
  },
  leftContainer: {
    flex: 1,
    alignItems: "flex-start",
    flexDirection: "column",
    gap: 4,
  },
  rightContainer: {
    flex: 0,
    alignItems: "flex-end",
    flexDirection: "column",
  },
});

export default StudyTime;
