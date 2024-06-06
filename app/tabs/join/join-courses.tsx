import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { defaultStyles, text } from "@/constants/Styles";
import { container } from "@/app/sign-in";
import { index, logo } from "@/app";
import { FlaticonIcon } from "@/components/FlaticonIcon";
import Button from "@/components/Button";
import Colors from "@/constants/Colors";
import { suggest } from "@/app/suggest/certificate";

const imageURI: string =
  "https://cdn-icons-png.flaticon.com/512/15748/15748424.png";

const course = { name_course: "Ôn luyện TOEIC 4 kỹ năng 700+" };

export default function JoinCourses() {
  return (
    <View style={defaultStyles.pageContainer}>
      <View style={logo.container}>
        <FlaticonIcon uri={imageURI} size={160} />
      </View>

      <View style={container.form}>
        <View style={container.input}>
          <Text style={text.subTitle}>BẠN CÓ CHẮC CHẮN THAM GIA KHÓA HỌC</Text>
          <Text style={text.titleCourse} id={course.name_course} />
          <Text style={text.note}>
            Lưu ý: Khóa học chỉ được bắt đầu khi bạn "Tham gia" khóa học
          </Text>

          <View style={join.btnContainer}>
            <Button backgroundColor={Colors.red} title="HỦY" />
            <Button backgroundColor={Colors.blue.regular} title="THAM GIA" />
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
});
