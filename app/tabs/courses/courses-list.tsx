import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  ImageSourcePropType,
} from "react-native";
import React, { isValidElement } from "react";
import { FlaticonIcon } from "@/components/FlaticonIcon";
import { text } from "@/constants/Styles";
import Colors from "@/constants/Colors";
import { home } from "../homes/home";
import Course from "@/components/Course";
import { router } from "expo-router";
import { TabsRadioBG } from "@/components/RadioBG";

const AddCoursesHandler = () => {
  router.push("/tabs/courses/add-courses");
};

const courseImageUrl: ImageSourcePropType = require("@/assets/images/course/toeic-700.jpg");

export const coursesData = [
  {
    title: "Khóa học TOEIC 700+",
    imageUrl: courseImageUrl,
    instructor: "Tiến Đạt",
    level: "Hard",
    tags: ["toeic", "700+", "hard"],
  },
  {
    title: "Khóa học IELTS 7.0+",
    imageUrl: courseImageUrl,
    instructor: "Minh Anh",
    level: "Advanced",
    tags: ["ielts", "7.0+", "hard"],
  },
  {
    title: "Khóa học tiếng Anh B2+",
    imageUrl: courseImageUrl,
    instructor: "Hồng Nhung",
    level: "Easy",
    tags: ["community", "B2", "easy"],
  },
  {
    title: "Khóa học TOEIC 650+",
    imageUrl: courseImageUrl,
    instructor: "Văn Lẹ",
    level: "Medium",
    tags: ["toeic", "650+", "hard"],
  },
  {
    title: "Khóa học IELTS 9.0+",
    imageUrl: courseImageUrl,
    instructor: "Hưng Thịnh",
    level: "Advanced",
    tags: ["ielts", "8.0+", "advanced"],
  },
  {
    title: "Khóa học tiếng Anh giao tiếp nâng cao",
    imageUrl: courseImageUrl,
    instructor: "Tú Lê",
    level: "Hard",
    tags: ["community", "english", "hard"],
  },
  {
    title: "Khóa học TOEIC 450+",
    imageUrl: courseImageUrl,
    instructor: "Tú Lê",
    level: "Easy",
    tags: ["toeic", "450+", "easy"],
  },
  {
    title: "Khóa học IELTS 6.0+",
    imageUrl: courseImageUrl,
    instructor: "Tiến Đạt",
    level: "Medium",
    tags: ["ielts", "6.0+", "medium"],
  },
  {
    title: "Khóa học tiếng Anh B1+",
    imageUrl: courseImageUrl,
    instructor: "Văn Lẹ",
    level: "Easy",
    tags: ["community", "B1", "easy"],
  },
];

export default function CoursesList() {
  const buttonList = [
    { title: "Toeic" },
    { title: "Ielts" },
    { title: "Giao tiếp" },
    { title: "B1-B2" },
    { title: "VStep" },
  ];

  return (
    <View style={containerList.pageContainer}>
      <ImageBackground
        source={require("@/assets/images/radiant-bg.png")}
        style={[home.container, { paddingBottom: 0 }]}
      >
        <View style={containerList.bottom}>
          {/* <FlatList
            contentContainerStyle={{
              flex: 0,
              justifyContent: "space-between",
              alignSelf: "stretch",
              flexDirection: "row",
              gap: 10,
              height: 35,
            }}
            data={buttonList}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.title}
            renderItem={({ item }) => (
              <View>
                <TouchableOpacity>
                  <Text style={textList.texttab}>{item.title}</Text>
                </TouchableOpacity>
              </View>
            )}
          /> */}
        </View>
        <FlatList
          contentContainerStyle={{ gap: 6 }}
          data={coursesData}
          keyExtractor={(item) => item.title}
          scrollEnabled={true}
          showsVerticalScrollIndicator={false}
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
    </View>
  );
}

export const containerList = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: Colors.blue.light,
  },
  buttontab: {
    flex: 0,
    justifyContent: "space-between",
    alignSelf: "stretch",
    flexDirection: "row",
    gap: 10,
    height: 35,
  },
  bottom: {
    flex: 0,
    gap: 10,
    paddingTop: 10,
  },
  floatingBtn: {
    position: "absolute",
    bottom: 20,
    right: 25,
  },
});

export const textList = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold", // set type of text = fontWeight
    color: Colors.blue.deep,
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
});
