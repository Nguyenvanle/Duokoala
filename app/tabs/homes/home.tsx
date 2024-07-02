import { getUsers, updateUser } from "@/api/user.api";
import { CRUDList, renderCourseItem } from "@/components/CRUDList";
import KoalaLoading from "@/components/KoalaLoading";
import StudyTime from "@/components/StudyTime";
import UserGreeting from "@/components/UserGreeting";
import { defaultStyles } from "@/constants/Styles";
import { Section } from "@/screens/home/Section";
import { useUserViewModel } from "@/vms";
import { data, useHomeViewModel } from "@/vms/home";
import { useSuggestViewModel } from "@/vms/suggest";
import { useState } from "react";
import {
  Button,
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import courseAPI from "@/api/course.api";
import { getAuthToken } from "@/services/auth/auth.service";
import { CourseProps, toeicUrl } from "@/models/course/model";
import UserProps from "@/models/user/model";
import { CourseData, UserData } from "@/api/api-conver-class";

const newUser: UserProps = {
  id: "user123",
  email: "john.doe@example.com",
  isNewUser: true,
  name: "John Doe",
  role: "Student",
  phoneNumber: "",
  gender: "other",
  subscriptionType: "free",
  currentTime: 0,
  targetTime: 1,
  address: "",
  avatarUrl: "defaultImageUser",
  registrationDate: new Date(),
  lastLoginDate: new Date(),
  coursesEnrolled: [],
  progress: {},
  preferences: {},
  completedCourses: [],
  notificationsEnabled: false,
};
const newCourse: CourseProps = {
  id: "1",
  title: "dsfsdf",
  imageUrl: toeicUrl,
  instructor: "Tiến Đạt",
  level: "Hard",
  tags: ["toeic", "700+", "hard"],
  description: "Mô tả chi tiết về khóa học TOEIC 700+",
  duration: 120,
  price: 100,
  rating: 4.3,
  reviewsCount: 100,
  lessonsCount: 20,
  language: "Vietnamese",
  createdAt: new Date(),
  updatedAt: new Date(),
  isFeatured: true,
  isFree: false,
  prerequisites: ["Basic English"],
  category: "Language",
  videoUrl: "https://example.com/video/toeic-700",
  enrolledUsers: ["user1", "user2"],
};

export default function HomeScreen() {
  // Suggest Loading
  const { isSuggestLoading, setSuggestLoading, findSuggest, currentCourses } =
    useSuggestViewModel();

  // Courses Loading
  // const { courses } = useHomeViewModel();
  const [coursesState, setCoursesState] = useState();
  const pressHandler = () => {
    console.log("click");
    const fetchCourses = async () => {
      try {
        const token = await getAuthToken();
        console.log(token);
        const courses = await courseAPI
          .getCourseById(
            "wcoGVVbGIO98ZCyW5ZHf"
            // newCourse
          )
          .then((res) => {
            const course = new CourseData(res);
            alert(course.getTags());
          });
        // Xử lý dữ liệu courses ở đây
        console.log(courses);
      } catch (e) {
        // Xử lý lỗi ở đây
        console.log("Lỗi khi lấy courses");
      }
    };
    fetchCourses();
    // getAuthToken().then((res) => console.log(res?.toString()));
    // getUsers("L4cbtMjWPuNEMqqbjK1HEWOmbS12").then((res) => {
    //   const user = new UserData(res);
    //   alert();
    // });
    // updateUser("hahahahaahaha", newUser)
    //   .then((user) => {
    //     if (user) {
    //       console.log("User created successfully:", user);
    //     } else {
    //       console.log("Failed to create user.");
    //     }
    //   })
    //   .catch((error) => {
    //     console.error("Error creating user:", error);
    //   });
  };

  // User Loading
  const { user } = useUserViewModel();

  // if (courses.length === 0) return <KoalaLoading />;

  return (
    <ImageBackground
      source={require("@/assets/images/radiant-bg.png")}
      style={defaultStyles.pageContainer}
    >
      <ScrollView style={home.container}>
        {/* Greeting */}
        <UserGreeting user={user} />
        <Button title="bấm" onPress={pressHandler}></Button>
        <View style={{ gap: 5, paddingTop: 10 }}>
          {/* Study Time */}
          <StudyTime clockUri={data.iconUri.clock} user={user} />

          <Section title="Khóa học mới nhất" courses={coursesState} />
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
