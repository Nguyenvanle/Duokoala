import KoalaLoading from "@/components/KoalaLoading";
import StudyTime, { CourseProgress } from "@/components/StudyTime";
import UserGreeting from "@/components/UserGreeting";
import { defaultStyles } from "@/constants/Styles";
import useCourseViewModel from "@/models/course/v-model";
import UserViewModel from "@/models/user/v-model";
import { Section } from "@/screens/home/Section";
import useHomeViewModel from "@/screens/home/v-model";
import {
  Button,
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";

export default function HomeScreen() {
  const { isLoading, courses, iconUri } = useHomeViewModel();
  const { course, setTitle } = useCourseViewModel();

  const userViewModel = UserViewModel();
  const user = userViewModel.user;

  if (isLoading) return <KoalaLoading />;

  return (
    <ImageBackground
      source={require("@/assets/images/radiant-bg.png")}
      style={defaultStyles.pageContainer}
    >
      <ScrollView style={home.container}>
        {/* Greeting */}
        <Button title="click me" onPress={() => setTitle("hello1")} />
        <UserGreeting user={user} />

        {user?.role === "Student" ? (
          <View style={{ gap: 5 }}>
            {/* Study Time */}
            <StudyTime clockUri={iconUri.clock} user={user} />

            <Section title="Khóa học mới nhất" courses={courses?.newest} />
            <Section title="Dành cho bạn" courses={courses?.suggested} />
            <Section title="Đã đăng ký" courses={courses?.subscribed} />
          </View>
        ) : (
          <View style={{ gap: 5 }}>
            <CourseProgress courseUri={iconUri.course} user={user} />
            <Section title="Khóa học đã tạo" courses={courses?.created} />
            <Section title="Khóa học mới nhất" courses={courses?.newest} />
          </View>
        )}
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
