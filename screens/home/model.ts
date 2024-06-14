import { CourseProps, coursesData } from "@/models/course/model";
import { create } from "zustand";
import { showLogoDuration } from "@/screens/index/v-model";
import UserProps from "@/models/user/model";

interface HomeState {
  user: UserProps | null;
  courses: {
    newest: CourseProps[];
    suggested: CourseProps[];
    subscribed: CourseProps[];
    created: CourseProps[];
  } | null;
  iconUri: {
    clock: string;
    course: string;
  };
  fetchHomeData: () => Promise<void>;
}

export const useHomeModel = create<HomeState>((set) => ({
  user: null,
  courses: null,
  iconUri: {
    clock: "",
    course: "",
  },
  fetchHomeData: async () => {
    await new Promise((resolve) => setTimeout(resolve, showLogoDuration));
    set({
      user: {
        email: "johndoe@gmail.com",
        password: "johndoe",
        isNewUser: true,
        name: "John Doe",
        role: "Student",
        currentTime: 45,
        targetTime: 60,
        createdCourses: 10,
        targetCourses: 100,
      },
      courses: {
        newest: coursesData.newest,
        suggested: coursesData.suggested,
        subscribed: coursesData.subscribed,
        created: coursesData.subscribed,
      },
      iconUri: {
        clock: "https://cdn-icons-png.flaticon.com/512/2755/2755545.png",
        course: "https://cdn-icons-png.flaticon.com/512/2949/2949758.png",
      },
    });
  },
}));
