import UserViewModel from "@/models/user/v-model";
import SegmentButtons from "@/screens/home/components/SegmentButtons";
import useHomeViewModel from "@/screens/home/v-model";
import { StyleSheet } from "react-native";

export default function HomeScreen() {
  const { isLoading, courses, iconUri } = useHomeViewModel();

  const userViewModel = UserViewModel();
  const user = userViewModel.user;

  return <SegmentButtons />;

  // if (isLoading) return <KoalaLoading />;

  // return (
  //   <ImageBackground
  //     source={require("@/assets/images/radiant-bg.png")}
  //     style={defaultStyles.pageContainer}
  //   >
  //     <ScrollView style={home.container}>
  //       {/* Greeting */}
  //       <UserGreeting user={user} />

  //       {user?.role === "Student" ? (
  //         <View style={{ gap: 5 }}>
  //           {/* Study Time */}
  //           <StudyTime clockUri={iconUri.clock} user={user} />

  //           <Section title="Khóa học mới nhất" courses={courses?.newest} />
  //           <Section title="Dành cho bạn" courses={courses?.suggested} />
  //           <Section title="Đã đăng ký" courses={courses?.subscribed} />
  //         </View>
  //       ) : (
  //         <View style={{ gap: 5 }}>
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
