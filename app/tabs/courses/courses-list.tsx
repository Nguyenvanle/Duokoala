import Course from "@/components/Course";
import Colors from "@/constants/Colors";
import { data } from "@/models/course/data";
import { TagView } from "@/models/course/tag/Tag";
import { FlatList, ImageBackground, StyleSheet, View } from "react-native";
import { home } from "../homes/home";

export default function CoursesList() {
  return (
    <View style={container.pageContainer}>
      <ImageBackground
        source={require("@/assets/images/radiant-bg.png")}
        style={[home.container, { paddingBottom: 0 }]}
      >
        <View style={container.bottom}>
          <FlatList
            contentContainerStyle={container.flatList}
            data={data.tagsList}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.title}
            renderItem={({ item }) => (
              <TagView aim={item.aim} title={item.title} level={item.level} />
            )}
          />
        </View>
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
