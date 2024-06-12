import { StyleSheet, ScrollView, ImageBackground } from "react-native";
import { defaultStyles } from "@/constants/Styles";
import { index } from "@/app/index";
import UserGreeting from "@/components/UserGreeting";
import StudyTime from "@/components/StudyTime";
import KoalaLoading from "@/components/KoalaLoading";
import useHomeViewModel from "@/screens/home/v-model";
import { Section } from "@/screens/home/Section";

export default function HomeScreen() {
  const { user, isLoading, courses, iconUri } = useHomeViewModel();

  if (isLoading) return <KoalaLoading />;

  return (
    <ScrollView style={defaultStyles.pageContainer}>
      {/* root */}
      <ImageBackground
        source={require("@/assets/images/radiant-bg.png")}
        style={home.container}
      >
        {/* Greeting */}
        <UserGreeting user={user} />

        {/* Study Time */}
        <StudyTime clockUri={iconUri.clock} user={user} />

        <Section title="Khóa học mới nhất" courses={courses?.newest} />
        <Section title="Dành cho bạn" courses={courses?.suggested} />
        <Section title="Đã đăng ký" courses={courses?.subscribed} />
      </ImageBackground>
    </ScrollView>
  );
}

export const home = StyleSheet.create({
  container: {
    ...index.container,
    gap: 10,
    justifyContent: "flex-start",
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
