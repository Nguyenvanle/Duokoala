import {
  StyleSheet,
  ScrollView,
  View,
  ImageSourcePropType,
  Text,
  FlatList,
  ImageBackground,
} from "react-native";
import { defaultStyles, text } from "@/constants/Styles";
import { index } from "@/app/index";
import React from "react";
import UserGreeting from "@/components/UserGreeting";
import StudyTime from "@/components/StudyTime";
import Course from "@/components/Course";
import { Link } from "expo-router";
const user = {
  name: "Tiến Đạt",
  role: "HV",
  process: 0.75,
};
const clockUri: string =
  "https://cdn-icons-png.flaticon.com/512/2755/2755545.png";
const courseImageUrl: ImageSourcePropType = require("@/assets/images/course/toeic-700.jpg");
const routerHref: string = "/tabs/join/join-courses";

const coursesData = [
  {
    title: "Khóa học TOEIC 700+",
    imageUrl: courseImageUrl,
    instructor: "Tiến Đạt",
    level: "hard",
    tags: ["toeic", "700+", "hard"],
  },
  {
    title: "Khóa học IELTS 7.0+",
    imageUrl: courseImageUrl,
    instructor: "Minh Anh",
    level: "advanced",
    tags: ["ielts", "7.0+", "hard"],
  },
  {
    title: "Khóa học tiếng Anh giao tiếp",
    imageUrl: courseImageUrl,
    instructor: "Hồng Nhung",
    level: "easy",
    tags: ["community", "english", "easy"],
  },
];

export default function HomeScreen() {
  return (
    <ScrollView style={defaultStyles.pageContainer}>
      {/* root */}
      <ImageBackground
        source={require("@/assets/images/radiant-bg.png")}
        style={home.container}
      >
        {/* Greeting */}
        <UserGreeting name={user.name} role={user.role} />

        {/* Study Time */}
        <StudyTime process={user.process} clockUri={clockUri} />

        {/* Newest Courses */}
        <View style={home.text}>
          <Text style={text.subTitle}>Khóa học mới nhất</Text>
          <Link style={text.link} href={routerHref}>
            Xem thêm
          </Link>
        </View>

        <FlatList
          contentContainerStyle={{ gap: 6 }}
          data={coursesData}
          keyExtractor={(item) => item.title}
          scrollEnabled={false}
          renderItem={({ item }) => (
            <Course
              title={item.title}
              imageUrl={item.imageUrl}
              instructor={item.instructor}
              level={item.level}
              tags={item.tags}
            />
          )}
        />

        {/* Suggest Courses */}
        <View style={home.text}>
          <Text style={text.subTitle}>Dành cho bạn</Text>
          <Link style={text.link} href={routerHref}>
            Xem thêm
          </Link>
        </View>

        <FlatList
          contentContainerStyle={{ gap: 6 }}
          data={coursesData}
          scrollEnabled={false}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <Course
              title={item.title}
              imageUrl={item.imageUrl}
              instructor={item.instructor}
              level={item.level}
              tags={item.tags}
            />
          )}
        />

        {/* Subscribed Courses */}
        <View style={home.text}>
          <Text style={text.subTitle}>Đã đăng ký</Text>
          <Link style={text.link} href={routerHref}>
            Xem thêm
          </Link>
        </View>

        <FlatList
          contentContainerStyle={{ gap: 6 }}
          data={coursesData}
          scrollEnabled={false}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <Course
              title={item.title}
              imageUrl={item.imageUrl}
              instructor={item.instructor}
              level={item.level}
              tags={item.tags}
            />
          )}
        />
      </ImageBackground>
    </ScrollView>
  );
}

export const home = StyleSheet.create({
  container: {
    ...index.container,
    gap: 10,
    justifyContent: "flex-start",
  },
  text: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
});
