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
  "https://th.bing.com/th/id/R.1b0e780d92d6ce16ecbf1b8e70b11241?rik=g8lhidF%2fT9Z1Qw&pid=ImgRaw&r=0";

const course = { name_course: "Ôn luyện TOEIC 4 kỹ năng 700+" };

export default function JoinCourses() {
  return (
    <View style={defaultStyles.pageContainer}>
      <View style={index.container}>
        {/* <View style={logo.container}>
          <FlaticonIcon uri={imageURI} size={200} />
        </View> */}
        <View style={join.form}>
          <View style={join.input}>
            <Text style={join.subTitle1}>
              BẠN CÓ CHẮC CHẮN THAM GIA KHÓA HỌC
            </Text>
            <FlaticonIcon uri={imageCourse} size={270} />
            <Text style={join.titleCourse}>{course.name_course}</Text>
            <Text style={join.note1}>
              Lưu ý: Khóa học chỉ được bắt đầu khi bạn "Tham gia" khóa học
            </Text>
            <View style={join.btnContainer}>
              <Button backgroundColor={Colors.red} title="HỦY" />
              <Button backgroundColor={Colors.blue.regular} title="THAM GIA" />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const join = StyleSheet.create({
  btnContainer: {
    ...suggest.decide,
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingTop: 16,
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
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold", // set type of text = fontWeight
    color: Colors.red,
    alignSelf: "center",
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
    alignItems: "center",
    gap: 5,
    flex: 0,
    alignSelf: "stretch",
  },
});
