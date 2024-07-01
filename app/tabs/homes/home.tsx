import { CRUDList, renderCourseItem } from "@/components/CRUDList";
import KoalaLoading from "@/components/KoalaLoading";
import StudyTime from "@/components/StudyTime";
import UserGreeting from "@/components/UserGreeting";
import { defaultStyles } from "@/constants/Styles";
import { CourseProps, toeicUrl } from "@/models/course/model";
import { Section } from "@/screens/home/Section";
import { CourseViewModel, useCourseViewModel } from "@/vms";
import { data, useHomeViewModel } from "@/vms/home";
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
  const { user, courses } = useHomeViewModel();

  if (courses.length === 0) return <KoalaLoading />;

  // const { isSuggestLoading, setSuggestLoading, findSuggest, currentCourses } =
  //   useSuggestViewModel();

  return (
    <ImageBackground
      source={require("@/assets/images/radiant-bg.png")}
      style={defaultStyles.pageContainer}
    >
      <ScrollView style={home.container}>
        {/* Greeting */}
        <UserGreeting user={user} />

        <View style={{ gap: 5, paddingTop: 10 }}>
          {/* Study Time */}
          <StudyTime clockUri={data.iconUri.clock} user={user} />

          <Section title="Khóa học mới nhất" courses={courses} />
          {/* <Section title="Dành cho bạn" courses={courses?.suggested} /> */}
          {/* <Section title="Đã đăng ký" courses={subCourses} /> */}
        </View>
      </ScrollView>
    </ImageBackground>
  );
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
