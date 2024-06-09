import {
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
import { suggest } from "@/app/suggest/certificate";
import { Link, useGlobalSearchParams } from "expo-router";
import Course, { levelTemplate } from "@/components/Course";
import { coursesData, home } from "@/app/tabs/homes/home";
import { defaultStyles, text } from "@/constants/Styles";
import { FlaticonIcon } from "@/components/FlaticonIcon";
import { create } from "../courses/add-courses";
import Button, { StretchButton } from "@/components/Button";
import { studyTime } from "@/components/StudyTime";

const imageCourse: string =
  "https://cdn-icons-png.flaticon.com/512/3069/3069172.png";

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

  const [levelColor, setLevelColor] = useState(Colors.green);

  useEffect(() => {
    switch (level) {
      case levelTemplate[1]:
        setLevelColor(Colors.teal);
        break;
      case levelTemplate[2]:
        setLevelColor(Colors.purple);
        break;
      case levelTemplate[3]:
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
          <FlaticonIcon size={100} uri={imageCourse} />
          <Text style={textStyle.title}>{title}</Text>
          <Text style={textStyle.mainContent}>
            {instructor} • <Text style={{ color: levelColor }}>{level}</Text>
          </Text>
          <View style={containerStyle.btn}>
            <StretchButton
              backgroundColor={Colors.blue.regular}
              title="Trở về"
              href="/tabs"
            />
            <StretchButton
              backgroundColor={Colors.teal}
              title="Tham gia"
              href="/tabs"
            />
          </View>
        </View>
        <View style={containerStyle.bottom}>
          <View style={containerStyle.buttontab}>
            <Text style={textStyle.texttab}>{tag1}</Text>
            <Text style={textStyle.texttab}>{tag2}</Text>
            <Text style={textStyle.texttab}>{tag3}</Text>
            <Text style={textStyle.texttab}>course</Text>
          </View>

          <View style={containerStyle.description}>
            <Text style={textStyle.description}>Mô tả</Text>
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
                  source={courseImageUrl}
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
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

const join = StyleSheet.create({
  btnContainer: {
    ...suggest.decide,
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingTop: 10,
  },
  subTitle1: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold", // set type of text = fontWeight
    color: Colors.black,
    paddingTop: 15,
  },
  note1: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "normal", // set type of text = fontWeight
    fontStyle: "italic",
    color: Colors.blue.deep,
    paddingTop: 10,
  },
  titleCourse: {
    alignContent: "stretch",
    fontSize: 20,
    fontWeight: "bold", // set type of text = fontWeight
    color: Colors.blue.text,
  },
  form: {
    justifyContent: "center",
    backgroundColor: Colors.blue.sky,
    width: "100%",
    borderWidth: 4,
    borderRadius: 40,
    borderColor: Colors.blue.text,
    gap: 10,
    padding: 20,
    paddingTop: 10,
    alignSelf: "center",
  },
  input: {
    alignSelf: "stretch",
    justifyContent: "flex-start",
  },
  mainContent: {
    textAlign: "left",
    fontSize: 16,
    fontWeight: "bold", // set type of text = fontWeight
    color: Colors.blue.deep,
  },
  mainCourse: {
    textAlign: "left",
    fontSize: 16,
    fontWeight: "regular", // set type of text = fontWeight
    color: Colors.brown,
  },
  pageContainer: {
    flex: 1,
    backgroundColor: Colors.blue.light,
  },
  description: {
    flex: 0,
    alignSelf: "stretch",
    color: Colors.milk,
    padding: 10,
  },
  container: {
    alignContent: "center",
    justifyContent: "center",
    flex: 0,
    backgroundColor: Colors.milk,
    paddingVertical: 10,
    borderWidth: 2,
  },
  slogan: {
    flex: 0,
    alignContent: "center",
    justifyContent: "center",
    gap: 10,
  },
  line: {
    padding: 1,
    height: 0,
    width: "95%",
    alignSelf: "center",
    backgroundColor: Colors.black,
  },
});

export const containerStyle = StyleSheet.create({
  top: {
    flex: 0,
    gap: 20,
    alignItems: "center",
    backgroundColor: Colors.blue.light,
    padding: 20,
    borderBottomRightRadius: 24,
    borderBottomLeftRadius: 24,
    marginHorizontal: -20,
  },
  bottom: {
    flex: 0,
    gap: 10,
  },
  btn: {
    ...create.btnContainer,
    paddingTop: 0,
    gap: 20,
  },
  tabs: {
    flex: 0,
    padding: 10,
    alignItems: "stretch",
  },
  buttontab: {
    flex: 0,
    justifyContent: "space-between",
    alignSelf: "stretch",
    flexDirection: "row",
    gap: 10,
  },
  description: {
    flex: 0,
    alignItems: "flex-start",
    paddingVertical: 10,
    alignSelf: "stretch",
    gap: 10,
  },
  gallery: {
    flex: 0,
    flexDirection: "row",
    gap: 10,
    justifyContent: "space-between",
  },
  image: {
    ...studyTime.rightContainer,
    borderRadius: 20,
    backgroundColor: Colors.light,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "row",
    maxWidth: 70,
    maxHeight: 70,
  },
});

const textStyle = StyleSheet.create({
  title: {
    ...text.title,
  },

  texttab: {
    ...text.note,
    color: Colors.blue.text,
    paddingTop: 6,
    backgroundColor: Colors.light,
    borderRadius: 10,
    flex: 1,
    overflow: "hidden",
    paddingVertical: 5,
  },
  description: {
    ...text.subTitle,
    fontWeight: "bold",
  },
  mainContent: {
    ...text.mainContent,
    textAlign: "left",
    color: Colors.grey,
  },
});
