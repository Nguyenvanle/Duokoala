import { ImageSourcePropType } from "react-native";
const courseImageUrl: ImageSourcePropType = require("@/assets/images/course/toeic-700.jpg");

export interface CourseProps {
  title: string;
  imageUrl: ImageSourcePropType;
  instructor: string;
  level: string;
  tags: string[];
}

export const coursesData: CourseProps[] = [
  {
    title: "Khóa học TOEIC 700+",
    imageUrl: courseImageUrl,
    instructor: "Tiến Đạt",
    level: "Hard",
    tags: ["toeic", "700+", "hard"],
  },
  {
    title: "Khóa học IELTS 7.0+",
    imageUrl: courseImageUrl,
    instructor: "Minh Anh",
    level: "Advanced",
    tags: ["ielts", "7.0+", "hard"],
  },
  {
    title: "Khóa học tiếng Anh giao tiếp",
    imageUrl: courseImageUrl,
    instructor: "Hồng Nhung",
    level: "Easy",
    tags: ["community", "english", "easy"],
  },
];
