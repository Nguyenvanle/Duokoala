import KoalaLoading from "@/components/KoalaLoading";
import StudyTime, { CourseProgress } from "@/components/StudyTime";
import UserGreeting from "@/components/UserGreeting";
import { defaultStyles } from "@/constants/Styles";
import { CourseProps, toeicUrl } from "@/models/course/model";
import { Section } from "@/screens/home/Section";
import { CourseViewModel, useCourseViewModel } from "@/vms";
import { useSuggestViewModel } from "@/vms/suggest";
import {
  Button,
  FlatList,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function HomeScreen() {
  const {
    isLoading,
    courses,
    addCourse,
    deleteCourse,
    updateCourse,
    findCourse,
  } = useCourseViewModel();

  const { isSuggestLoading, setSuggestLoading, findSuggest, currentCourses } =
    useSuggestViewModel();

  return (
    <View>
      <View
        style={{
          flex: 0,
          padding: 10,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Button title="Add Course" onPress={addCourse} />
      </View>
      <Text>Course List</Text>
      <FlatList
        data={courses}
        keyExtractor={(item) => item.id}
        scrollEnabled
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: "row",
              padding: 10,
            }}
          >
            <View style={{ flex: 1 }}>
              <Text style={{ color: "black" }}>{item.id}</Text>
              <Text style={{ color: "black" }}>{item.title}</Text>
              <Text style={{ color: "black" }}>{item.description}</Text>
              <Text style={{ color: "black" }}>{item.instructor}</Text>
              {/* <Text style={{ color: "black" }}>{item.duration} hours</Text> */}
            </View>
            <View style={{ flex: 0, padding: 10, gap: 10 }}>
              <Button title="Delete" onPress={() => deleteCourse(item.id)} />

              <Button
                title="Change Title"
                onPress={() =>
                  updateCourse(item.id, { ...item, instructor: "Changed" })
                }
              />
            </View>
          </View>
        )}
      />
      <Text>Suggest Course List</Text>
      <FlatList
        data={currentCourses}
        keyExtractor={(course) => course.id}
        scrollEnabled
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: "row",
              padding: 10,
            }}
          >
            <View style={{ flex: 1 }}>
              <Text style={{ color: "black" }}>{item.id}</Text>
              <Text style={{ color: "black" }}>{item.title}</Text>
              <Text style={{ color: "black" }}>{item.description}</Text>
              <Text style={{ color: "black" }}>{item.instructor}</Text>
              {/* <Text style={{ color: "black" }}>{item.duration} hours</Text> */}
            </View>
          </View>
        )}
      />
    </View>
  );

  // return (
  //   <ImageBackground
  //     source={require("@/assets/images/radiant-bg.png")}
  //     style={defaultStyles.pageContainer}
  //   >
  //     <ScrollView style={home.container}>
  //       {/* Greeting */}
  //       <UserGreeting user={user} />

  //       {user?.role === "Student" ? (
  //         <View style={{ gap: 5, paddingTop: 10 }}>
  //           {/* Study Time */}
  //           <StudyTime clockUri={iconUri.clock} user={user} />

  //           <Section title="Khóa học mới nhất" courses={courses?.newest} />
  //           <Section title="Dành cho bạn" courses={courses?.suggested} />
  //           <Section title="Đã đăng ký" courses={courses?.subscribed} />
  //         </View>
  //       ) : (
  //         <View style={{ gap: 5, paddingTop: 10 }}>
  //           <CourseProgress courseUri={iconUri.course} user={user} />
  //           <Section title="Khóa học đã tạo" courses={courses?.created} />
  //           <Section title="Khóa học mới nhất" courses={courses?.newest} />
  //         </View>
  //       )}
  //     </ScrollView>
  //   </ImageBackground>
  // );
}

export const home = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    gap: 10,
    flex: 1,
  },
  text: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
