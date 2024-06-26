import Colors from "@/constants/Colors";
import { text } from "@/constants/Styles";
import { data } from "@/models/course/data";
import { CourseProps } from "@/models/course/model";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FlaticonIcon } from "./FlaticonIcon";
import { studyTime } from "./StudyTime";

const routerHref: string = "/tabs/join/join-courses";

const Course: React.FC<CourseProps> = ({
  title,
  imageUrl,
  instructor,
  level,
  tags,
}) => {
  const [levelColor, setLevelColor] = useState(Colors.green);

  const imageSource =
    typeof imageUrl === "string" ? { uri: imageUrl } : imageUrl;

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
  }, []);

  return (
    <TouchableOpacity
      style={course.container}
      onPress={() => {
        router.push({
          pathname: routerHref,
          params: {
            title: title,
            level: level,
            instructor: instructor,
            tag1: tags[0],
            tag2: tags[1],
            tag3: tags[2],
          },
        });
      }}
    >
      <View style={course.leftContainer}>
        <Image
          source={imageSource}
          style={{
            width: 100,
            height: 100,
          }}
          resizeMode="cover"
          onError={(error: any) => {
            throw new Error("Require Link Incorrect" + error.message);
          }}
        />
      </View>
      <View style={{ ...course.rightContainer, flexDirection: "row" }}>
        <View style={course.rightContainer}>
          <Text
            style={{ ...text.btnText, color: "black", textAlign: "left" }}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {title}
          </Text>

          <Text
            style={[text.note, { color: Colors.blue.text }]}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            Giảng viên: {instructor}
          </Text>
          <Text style={[text.note, { color: Colors.blue.text }]}>
            Độ khó:{" "}
            <Text style={{ color: levelColor, fontWeight: "bold" }}>
              {level}
            </Text>
          </Text>
          <Text style={text.link} numberOfLines={1} ellipsizeMode="tail">
            #{tags.join(" #")}
          </Text>
        </View>
        <View style={course.iconContainer}>
          <FlaticonIcon
            size={30}
            uri={"https://cdn-icons-png.flaticon.com/128/2989/2989988.png"}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const course = StyleSheet.create({
  container: {
    ...studyTime.container,
    backgroundColor: Colors.milk,
    alignItems: "center",
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  leftContainer: {
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
  rightContainer: {
    ...studyTime.leftContainer,
  },
  iconContainer: {
    justifyContent: "center",
    alignSelf: "stretch",
  },
});

export default Course;
