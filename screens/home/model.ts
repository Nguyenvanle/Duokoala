import { CourseProps, coursesData } from "@/models/course/model";
import { create } from "zustand";

interface HomeState {
  user: UserProps | null;
  courses: {
    newest: CourseProps[];
    suggested: CourseProps[];
    subscribed: CourseProps[];
  } | null;
  iconUri: {
    clock: string;
  };
  fetchHomeData: () => Promise<void>;
}

export const useHomeModel = create<HomeState>((set) => ({
  user: null,
  courses: null,
  iconUri: {
    clock: "",
  },
  fetchHomeData: async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    set({
      user: {
        name: "John Doe",
        role: "Student",
        currentTime: 45,
        targetTime: 60,
      },
      courses: {
        newest: coursesData,
        suggested: coursesData,
        subscribed: coursesData,
      },
      iconUri: {
        clock: "https://cdn-icons-png.flaticon.com/512/2755/2755545.png",
      },
    });
  },
}));
