import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { defaultStyles, text } from "@/constants/Styles";
import { index } from "@/app/index";
import { container } from "@/app/sign-in";
import Colors from "@/constants/Colors";
import * as Progress from "react-native-progress";
import { FlaticonIcon } from "@/components/FlaticonIcon";

const user = {
  name: "Tiến Đạt",
  role: "HV",
  process: 0.75,
};
const fontSize: number = 34;
const clockUri: string =
  "https://cdn-icons-png.flaticon.com/512/2755/2755545.png";

export default function HomeScreen() {
  return (
    <ScrollView style={defaultStyles.pageContainer}>
      {/* root */}
      <View style={home.container}>
        {/* hello */}
        <View style={{ alignItems: "flex-start" }}>
          <Text style={text.subTitle}>Xin chào {user.name} 🥰</Text>

          {/* display depend on user role */}
          {user.role === "GV" ? (
            <Text style={text.mainContent}>Bắt đầu dạy nào!</Text>
          ) : (
            <Text style={text.mainContent}>Bắt đầu học nào!</Text>
          )}
        </View>

        {/* study time */}
        <View style={studyTime.container}>
          <View style={studyTime.leftContainer}>
            <Text style={{ ...text.btnText, color: "black" }}>
              Thời gian học hôm nay
            </Text>

            <Text style={home.timeTextRed}>
              45/{<Text style={home.timeTextMilk}>60 phút</Text>}
            </Text>

            <Progress.Bar
              progress={user.process}
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

        {/* course */}
        <View style={course.textContainer}>
          <Text style={text.subTitle}>Khóa học</Text>
          <Text style={text.link}>Xem thêm</Text>
        </View>
        <View style={course.container}>
          <View style={course.rightContainer}>
            <Image
              source={require("@/assets/images/course/toeic-700.jpg")}
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
            <Text style={{ ...text.btnText, color: "black" }}>
              Khóa học TOEIC 700+
            </Text>

            <Text style={[text.note, { color: Colors.blue.text }]}>
              Giảng viên: {user.name}
            </Text>
            <Text style={text.mainContent}>Tag: </Text>
            <Text style={text.link}>#toeic #700+ #hard</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const home = StyleSheet.create({
  container: {
    ...index.container,
    gap: 10,
  },
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

const studyTime = StyleSheet.create({
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
