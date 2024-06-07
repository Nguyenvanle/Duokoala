import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageSourcePropType,
} from "react-native";
import { defaultStyles, text } from "@/constants/Styles";
import Colors from "@/constants/Colors";
import React from "react";
import { studyTime } from "./StudyTime";

interface CourseProps {
  title: string;
  imageUrl: ImageSourcePropType;
  instructor: string;
  tags: string[];
}

const Course: React.FC<CourseProps> = ({
  title,
  imageUrl,
  instructor,
  tags,
}) => {
  return (
    <View style={course.container}>
      <View style={course.rightContainer}>
        <Image
          source={imageUrl}
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
      <View style={course.leftContainer}>
        <Text style={{ ...text.btnText, color: "black" }}>{title}</Text>

        <Text style={[text.note, { color: Colors.blue.text }]}>
          Giảng viên: {instructor}
        </Text>
        <Text style={text.mainContent}>Tag: </Text>
        <Text style={text.link}>{tags.join(" #")}</Text>
      </View>
    </View>
  );
};

const course = StyleSheet.create({
  container: {
    ...studyTime.container,
    backgroundColor: Colors.milk,
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  leftContainer: {
    ...studyTime.leftContainer,
  },
  rightContainer: {
    ...studyTime.rightContainer,
    borderWidth: 2,
    borderRadius: 20,
    backgroundColor: Colors.light,
    justifyContent: "center",
    alignItems: "center",
    width: 90,
    height: 90,
    overflow: "hidden",
  },
});

export default Course;
