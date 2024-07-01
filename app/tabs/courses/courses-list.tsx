import Colors from "@/constants/Colors";
import useCourseViewModel from "@/models/course/v-model";
import SegmentButtons from "@/screens/home/segment-button/SegmentButtons";
import { FlatList, ImageBackground, StyleSheet, View } from "react-native";
import Course from "@/components/Course";
import { home } from "@/app/tabs/homes/home";
import StudyTime from "@/components/StudyTime";
import { data } from "@/vms/home";
import { useUserViewModel } from "@/vms";

export default function CoursesList() {
  const { categorizedCourses, handleSegmentChange, selectedCategory } =
    useCourseViewModel();
  const { user } = useUserViewModel();

  return (
    <View style={container.pageContainer}>
      <ImageBackground
        source={require("@/assets/images/radiant-bg.png")}
        style={[home.container, { paddingBottom: 0 }]}
      >
        <SegmentButtons onSegmentChange={handleSegmentChange} />

        <StudyTime clockUri={data.iconUri.clock} user={user} />

        <FlatList
          contentContainerStyle={{ gap: 6 }}
          data={categorizedCourses[selectedCategory] || []}
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
              id={""}
              description={""}
              duration={0}
              price={0}
              rating={0}
              reviewsCount={0}
              lessonsCount={0}
              language={""}
              createdAt={new Date()}
              updatedAt={new Date()}
              isFeatured={false}
              isFree={false}
              prerequisites={[]}
              category={""}
              videoUrl={""}
              enrolledUsers={[]}
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

const styles = StyleSheet.create({
  categoryTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
});
