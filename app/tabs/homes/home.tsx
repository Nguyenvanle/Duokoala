import {
  StyleSheet,
  ScrollView,
  View,
  ImageSourcePropType,
  Text,
} from "react-native";
import { defaultStyles, text } from "@/constants/Styles";
import { index } from "@/app/index";
import React from "react";
import UserGreeting from "@/components/UserGreeting";
import StudyTime from "@/components/StudyTime";
import Course from "@/components/Course";
const user = {
  name: "Tiến Đạt",
  role: "HV",
  process: 0.75,
};
const clockUri: string =
  "https://cdn-icons-png.flaticon.com/512/2755/2755545.png";
const courseImageUrl: ImageSourcePropType = require("@/assets/images/course/toeic-700.jpg");

export default function HomeScreen() {
  return (
    <ScrollView style={defaultStyles.pageContainer}>
      {/* root */}
      <View style={home.container}>
        <UserGreeting name={user.name} role={user.role} />

        <StudyTime process={user.process} clockUri={clockUri} />

        <View style={home.text}>
          <Text style={text.subTitle}>Khóa học</Text>
          <Text style={text.link}>Xem thêm</Text>
        </View>

        <Course
          title="Khóa học TOEIC 700+"
          imageUrl={courseImageUrl}
          instructor={user.name}
          tags={["toeic", "700+", "hard"]}
        />
      </View>
    </ScrollView>
  );
}

const home = StyleSheet.create({
  container: {
    ...index.container,
    gap: 10,
  },
  text: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
});
