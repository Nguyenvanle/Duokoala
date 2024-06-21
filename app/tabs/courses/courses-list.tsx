import Course from "@/components/Course";
import Colors from "@/constants/Colors";
import { data } from "@/models/course/data";
import SegmentButtons from "@/screens/home/components/SegmentButtons";
import { FlatList, ImageBackground, StyleSheet, View } from "react-native";
import { home } from "../homes/home";

export default function CoursesList() {
  return (
    <View style={container.pageContainer}>
      <ImageBackground
        source={require("@/assets/images/radiant-bg.png")}
        style={[home.container, { paddingBottom: 0 }]}
      >
        <SegmentButtons />
        <FlatList
          contentContainerStyle={{ gap: 6 }}
          data={data.coursesList}
          keyExtractor={(item) => item.title}
          scrollEnabled={true}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Course
              title={item.title}
              imageUrl={item.imageUrl}
              instructor={item.instructor}
              level={item.level}
              tags={item.tags}
            />
          )}
        />
      </ImageBackground>
    </View>
  );
}

export const container = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: Colors.blue.light,
  },
  flatList: {
    flex: 0,
    justifyContent: "space-between",
    alignSelf: "stretch",
    flexDirection: "row",
    gap: 10,
    height: 35,
  },
  bottom: {
    flex: 0,
    gap: 10,
    paddingTop: 10,
  },
  floatingBtn: {
    position: "absolute",
    bottom: 20,
    right: 25,
  },
});
