import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from "react-native";
import { defaultStyles, text } from "@/constants/Styles";
import Colors from "@/constants/Colors";
import React, { useEffect, useState } from "react";
import { studyTime } from "./StudyTime";
import { FlaticonIcon } from "./FlaticonIcon";
import { router } from "expo-router";

interface CourseProps {
  title: string;
  imageUrl: ImageSourcePropType;
  instructor: string;
  level: string;
  tags: string[];
}


export const levelTemplate = ["easy", "medium", "hard", "advanced"];
const routerHref: string = "/tabs/join/";

const Course: React.FC<CourseProps> = ({
  title,
  imageUrl,
  instructor,
  level,
  tags,
}) => {
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
  }, []);

  return (
    <TouchableOpacity
      style={course.container}
      onPress={() => {
        router.push({
          pathname: routerHref,
          params: { title: title },
        });
      }}
    >
      <View style={course.leftContainer}>
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
