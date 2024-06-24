import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  ImageSourcePropType,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import Colors from "@/constants/Colors";
import { Link, useGlobalSearchParams } from "expo-router";
import { home } from "@/app/tabs/homes/home";
import { defaultStyles, text } from "@/constants/Styles";
import { create } from "@/app/tabs/courses/add-courses";
import { StretchButton } from "@/components/Button";
import { studyTime } from "@/components/StudyTime";
import HeaderImage from "@/screens/course/join/HeaderImage";
import { data } from "@/models/course/data";

const info_course = {
  description:
    "Khóa học TOEIC 4 kỹ năng hỗ trợ 2 phần thi riêng biệt: \nBài thi TOEIC Listening / Reading  \nBài thi TOEIC Speaking/Writing \n\n + Đối với phần thi Listening và Reading: Đây chính là bài thi Toeic phổ biến nhất ở Việt Nam hiện nay gồm 2 bài thi Nghe và Đọc với tổng cộng 200 câu trắc nghiệm. Mức điểm cho cả hai phần Listening/ Reading nằm trong khoảng từ 10 đến 990 điểm. \n\n + Đối với phần thi Speaking và Writing: Đây là bài thi Toeic mà các bạn có thể đăng ký thi nếu Trường hoặc công ty của các bạn yêu cầu. Tổng điểm của bài thi Speaking/Writing là 400 điểm.",
};

const routerHref: string = "/tabs/join/join-courses";
const courseImageUrl: ImageSourcePropType = require("@/assets/images/course/toeic-700.jpg");

const gallery = [
  {
    id: "1",
    src: courseImageUrl,
  },
  {
    id: "2",
    src: courseImageUrl,
  },
  {
    id: "3",
    src: courseImageUrl,
  },
  {
    id: "4",
    src: courseImageUrl,
  },
];

export default function JoinCourses() {
  const { title, level, instructor, tag1, tag2, tag3 } =
    useGlobalSearchParams();
  const rating: number = 4.5;
  const course = {
    title: title,
    level: level,
    instructor: instructor,
    tag1: tag1,
    tag2: tag2,
    tag3: tag3,
    time: "1h 20m",
    lesson: 18,
  };

  const [levelColor, setLevelColor] = useState(Colors.green);

  useEffect(() => {
    switch (level) {
      case data.levelsList[1]:
        setLevelColor(Colors.teal);
        break;
      case data.levelsList[2]:
        setLevelColor(Colors.purple);
        break;
      case data.levelsList[3]:
        setLevelColor(Colors.red);
        break;
      default:
        setLevelColor(Colors.green);
        break;
    }
  }, [title]);

  return (
    <ScrollView style={defaultStyles.pageContainer}>
      <ImageBackground
        source={require("@/assets/images/radiant-bg.png")}
        style={home.container}
      >
        <View style={containerStyle.top}>
          <HeaderImage />
          <View style={{ alignSelf: "stretch" }}>
            <Text style={textStyle.subTitle}>
              {course.instructor} |{" "}
              <Text style={{ color: levelColor }}>{course.level}</Text>
            </Text>
            <Text style={textStyle.title}>{course.title}</Text>
            <Text style={textStyle.mainContent}>
              {course.time} • {course.lesson} phần
            </Text>
          </View>
        </View>
        <View style={containerStyle.bottom}>
          <View style={containerStyle.buttonTab}>
            <Text style={textStyle.textTab}>{tag1}</Text>
            <Text style={textStyle.textTab}>{tag2}</Text>
            <Text style={textStyle.textTab}>{tag3}</Text>
            <Text style={textStyle.rating}>⭐ {rating}</Text>
          </View>

          <Text style={textStyle.description}>Mô tả</Text>
          <View style={containerStyle.description}>
            <Text style={textStyle.mainContent}>{info_course.description}</Text>
          </View>

          <View style={home.text}>
            <Text style={text.subTitle}>Hình ảnh</Text>
            <Link style={text.link} href={routerHref}>
              Xem thêm
            </Link>
          </View>

          <FlatList
            contentContainerStyle={containerStyle.gallery}
            data={gallery}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <View style={containerStyle.image}>
                <Image
                  source={item.src}
                  style={{
                    width: 100,
                    height: 100,
                  }}
                  resizeMode="contain"
                  onError={() => {
                    throw new Error("Require Link Incorrect");
                  }}
                />
              </View>
            )}
          />

          <View style={containerStyle.btn}>
            <View>
              <StretchButton
                backgroundColor={Colors.blue.regular}
                title="Trở về"
                href="/tabs"
              />
            </View>
            <StretchButton
              backgroundColor={Colors.green}
              title="Tham gia"
              href="/tabs"
            />
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

export const containerStyle = StyleSheet.create({
  top: {
    flex: 0,
    gap: 10,
    alignItems: "center",
  },
  bottom: {
    flex: 0,
    gap: 10,
  },
  btn: {
    ...create.btnContainer,
    paddingTop: 0,
    gap: 10,
  },
  tabs: {
    flex: 0,
    padding: 10,
    alignItems: "stretch",
  },
  buttonTab: {
    flex: 0,
    justifyContent: "space-between",
    alignSelf: "stretch",
    flexDirection: "row",
    gap: 10,
  },
  description: {
    flex: 0,
    alignItems: "flex-start",
    padding: 14,
    alignSelf: "stretch",
    gap: 10,
    backgroundColor: Colors.milk,
    borderRadius: 20,
    borderWidth: 2,
  },
  gallery: {
    flex: 0,
    flexDirection: "row",
    gap: 10,
    justifyContent: "space-between",
  },
  image: {
    ...studyTime.rightContainer,
    borderRadius: 16,
    borderWidth: 2,
    backgroundColor: Colors.light,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "row",
    maxWidth: 70,
    maxHeight: 70,
  },
  courseImage: {},
});

const textStyle = StyleSheet.create({
  title: {
    ...text.title,
    textAlign: "left",
    alignSelf: "stretch",
  },
  subTitle: {
    ...text.subTitle,
    textAlign: "left",
    fontSize: 16,
    color: Colors.blue.regular,
  },
  textTab: {
    ...text.btnText,
    color: Colors.milk,
    paddingTop: 6,
    backgroundColor: Colors.blue.regular,
    borderRadius: 10,
    flex: 1,
    overflow: "hidden",
    paddingVertical: 5,
    borderWidth: 2,
  },
  description: {
    ...text.subTitle,
    fontWeight: "bold",
    textAlign: "left",
  },
  mainContent: {
    ...text.mainContent,
    textAlign: "left",
    color: Colors.grey,
  },
  rating: {
    ...text.btnText,
    paddingTop: 6,
    backgroundColor: Colors.green,
    borderRadius: 10,
    flex: 1,
    overflow: "hidden",
    paddingVertical: 5,
    color: Colors.milk,
    fontStyle: "normal",
    borderWidth: 2,
    justifyContent: "center",
  },
});

