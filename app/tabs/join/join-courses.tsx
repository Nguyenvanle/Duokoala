import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FlaticonIcon } from "@/components/FlaticonIcon";
import Button from "@/components/Button";
import Colors from "@/constants/Colors";
import { defaultStyles, text } from "@/constants/Styles";
import { index, logo } from "@/app/index";
import { container } from "@/app/sign-in";
import { suggest } from "@/app/suggest/certificate";

const imageCourse: string =
  "https://cdn-icons-png.flaticon.com/512/3069/3069172.png";

const course = { name_course: "Ôn luyện TOEIC 4 kỹ năng 700+" };

const level = { medium: "Trung Bình", easy: "Dễ", difficult: "Khó" };

const level_color = {
  medium: Colors.teal,
  easy: Colors.green,
  difficult: Colors.red,
};

const info_course = {
  name_user: "Nguyễn Lê Tiến Đạt",
  description:
    "Khóa học TOEIC 4 kỹ năng hỗ trợ 2 phần thi riêng biệt: \nBài thi TOEIC Listening / Reading  \nBài thi TOEIC Speaking/Writing \n\n + Đối với phần thi Listening và Reading: Đây chính là bài thi Toeic phổ biến nhất ở Việt Nam hiện nay gồm 2 bài thi Nghe và Đọc với tổng cộng 200 câu trắc nghiệm. Mức điểm cho cả hai phần Listening/ Reading nằm trong khoảng từ 10 đến 990 điểm. \n\n + Đối với phần thi Speaking và Writing: Đây là bài thi Toeic mà các bạn có thể đăng ký thi nếu Trường hoặc công ty của các bạn yêu cầu. Tổng điểm của bài thi Speaking/Writing là 400 điểm.",
};

export default function JoinCourses() {
  return (
    <ScrollView style={join.pageContainer}>
      <View
        style={{
          flexDirection: "row",
          flex: 0,
          padding: 20,
          paddingHorizontal: 10,
        }}
      >
        <FlaticonIcon uri={imageCourse} size={120} />
        <View style={{ flexDirection: "column", flex: 1, padding: 10 }}>
          <Text numberOfLines={2} style={join.titleCourse}>
            {course.name_course}
          </Text>
          <Text style={join.mainContent}>Độ Khó: {level.medium}</Text>
        </View>
      </View>
      <View style={join.container}>
        <View style={join.description}>
          <View style={{ flexDirection: "row", paddingBottom: 25 }}>
            <Text style={join.mainContent}>Tác Giả: </Text>
            <Text style={join.mainCourse}> {info_course.name_user}</Text>
          </View>
          <Text style={join.mainContent}>Giới Thiệu:</Text>
          <Text style={join.mainCourse}>{info_course.description}</Text>
        </View>
      </View>
      <Text style={join.note1}>
        Khóa học chỉ được bắt đầu khi bạn "Tham Gia" khóa học
      </Text>

      <View style={join.btnContainer}>
        <Button backgroundColor={Colors.red} title="HỦY" />
        <Button backgroundColor={Colors.blue.regular} title="THAM GIA" />
      </View>
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
    color: Colors.blue.deep,
    paddingVertical: 5,
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
