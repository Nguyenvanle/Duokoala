import { ImageSourcePropType } from "react-native";
import { create } from "zustand";
const courseImageUrl: ImageSourcePropType = require("@/assets/images/course/toeic-700.jpg");
export const toeicUrl: string =
  "https://images.unsplash.com/photo-1543109740-4bdb38fda756?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const ieltsUrl: string =
  "https://img.freepik.com/free-photo/dictionary-definition-word_93675-128626.jpg?w=996&t=st=1718206024~exp=1718206624~hmac=c76824de6cab1502be74808fac002f276790d43e84b54c4de1e7e641867032ea";
export interface CourseProps {
  title: string;
  imageUrl: ImageSourcePropType | string;
  instructor: string;
  level: string;
  tags: string[];
}

export interface CourseState {
  course: CourseProps;
  setCourse: (course: CourseProps) => void;
  setTitle: (state: CourseState, title: string) => void;
  levelUp: (state: CourseState) => void;
}

export const useCourseStore = create<CourseState>((set) => ({
  course: {
    title: "",
    imageUrl: null || "",
    instructor: "",
    level: "",
    tags: [""],
  },
  setCourse: (course: CourseProps) => set({ course: course }),
  setTitle: (state: CourseState, title: string) =>
    set({
      course: {
        ...state.course,
        title: title,
      },
    }),
  levelUp: (state: CourseState) =>
    set({
      course: {
        ...state.course,
        level: state.course.level,
      },
    }),
}));

export const coursesData: {
  newest: CourseProps[];
  suggested: CourseProps[];
  subscribed: CourseProps[];
  created: CourseProps[];
} = {
  newest: [
    {
      title: "Khóa học TOEIC 700+",
      imageUrl: toeicUrl,
      instructor: "Tiến Đạt",
      level: "Hard",
      tags: ["toeic", "700+", "hard"],
    },
    {
      title: "Khóa học IELTS 7.0+",
      imageUrl: ieltsUrl,
      instructor: "Văn Lẹ",
      level: "Advanced",
      tags: ["ielts", "7.0+", "hard"],
    },
  ],
  suggested: [
    {
      title: "Khóa học tiếng Anh giao tiếp",
      imageUrl: courseImageUrl,
      instructor: "Hưng Thịnh",
      level: "Easy",
      tags: ["community", "english", "easy"],
    },
  ],
  subscribed: [
    {
      title: "Khóa học TOEIC 700+",
      imageUrl: toeicUrl,
      instructor: "Tiến Đạt",
      level: "Hard",
      tags: ["toeic", "700+", "hard"],
    },
  ],
  created: [
    {
      title: "Khóa học TOEIC 500+",
      imageUrl: courseImageUrl,
      instructor: "John Doe",
      level: "Medium",
      tags: ["toeic", "500+", "medium"],
    },
  ],
};
