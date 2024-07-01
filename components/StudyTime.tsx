import { StyleSheet, Text, View } from "react-native";
import { container } from "@/app/sign-in";
import Colors from "@/constants/Colors";
import * as Progress from "react-native-progress";
import { FlaticonIcon } from "@/components/FlaticonIcon";
import React from "react";
import { text } from "@/constants/Styles";
import UserProps from "@/models/user/model";

const fontSize: number = 34;

interface StudyTimeProps {
  user: UserProps | null;
  clockUri: string;
}

const StudyTime: React.FC<StudyTimeProps> = (props) => {
  const { user, clockUri } = props;

  if (user === null) return;

  const process: number = user.currentTime / user.targetTime;

  return (
    <View style={studyTime.container}>
      <View style={studyTime.leftContainer}>
        <Text style={{ ...text.btnText, color: "black" }}>
          Thời gian học hôm nay
        </Text>

        <Text style={home.timeTextRed}>
          {user.currentTime}/
          {<Text style={home.timeTextMilk}>{user.targetTime} phút</Text>}
        </Text>

        <Progress.Bar
          progress={process}
          color={Colors.red}
          unfilledColor={Colors.milk}
          borderWidth={0}
          height={10}
          width={170}
        />
      </View>

      <View style={studyTime.rightContainer}>
        <FlaticonIcon size={80} uri={clockUri} />
      </View>
    </View>
  );
};

interface CourseProgressProps {
  user: UserProps | null;
  courseUri: string;
}

// export const CourseProgress: React.FC<CourseProgressProps> = (props) => {
//   const { user, courseUri } = props;

//   if (user === null) return;

//   const process: number = user.createdCourses / user.targetCourses;

//   return (
//     <View style={studyTime.container}>
//       <View style={studyTime.leftContainer}>
//         <Text style={{ ...text.btnText, color: "black" }}>
//           Số khóa học đã tạo
//         </Text>

//         <Text style={home.timeTextRed} numberOfLines={1} ellipsizeMode="tail">
//           {user.createdCourses}/
//           {<Text style={home.timeTextMilk}>{user.targetCourses} khóa</Text>}
//         </Text>

//         <Progress.Bar
//           progress={process}
//           color={Colors.red}
//           unfilledColor={Colors.milk}
//           borderWidth={0}
//           height={10}
//           width={170}
//         />
//       </View>

//       <View style={studyTime.rightContainer}>
//         <FlaticonIcon size={80} uri={courseUri} />
//       </View>
//     </View>
//   );
// };

const home = StyleSheet.create({
  timeTextRed: {
    ...text.title,
    color: Colors.red,
    fontSize: fontSize,
  },
  timeTextMilk: {
    ...text.title,
    color: Colors.milk,
    fontSize: fontSize,
  },
});

export const studyTime = StyleSheet.create({
  container: {
    ...container.form,
    borderRadius: 20,
    borderWidth: 2,
    backgroundColor: Colors.blue.sky,
    alignItems: "flex-start",
    flexDirection: "row",
    alignContent: "space-between",
    padding: 12,
  },
  leftContainer: {
    flex: 1,
    alignItems: "flex-start",
    flexDirection: "column",
    gap: 4,
  },
  rightContainer: {
    flex: 0,
    alignItems: "flex-end",
    flexDirection: "column",
  },
});

export default StudyTime;
