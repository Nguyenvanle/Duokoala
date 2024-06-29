import { ImageSourcePropType } from "react-native";
import { Tag } from "./tag/model";

const courseImageUrl: ImageSourcePropType = require("@/assets/images/course/toeic-700.jpg");

const coursesList = [
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
    title: "Khóa học tiếng Anh B2+",
    imageUrl: courseImageUrl,
    instructor: "Hồng Nhung",
    level: "Easy",
    tags: ["community", "B2", "easy"],
  },
  {
    title: "Khóa học TOEIC 650+",
    imageUrl: courseImageUrl,
    instructor: "Văn Lẹ",
    level: "Medium",
    tags: ["toeic", "650+", "hard"],
  },
  {
    title: "Khóa học IELTS 9.0+",
    imageUrl: courseImageUrl,
    instructor: "Hưng Thịnh",
    level: "Advanced",
    tags: ["ielts", "8.0+", "advanced"],
  },
  {
    title: "Khóa học tiếng Anh giao tiếp nâng cao",
    imageUrl: courseImageUrl,
    instructor: "Tú Lê",
    level: "Hard",
    tags: ["community", "english", "hard"],
  },
  {
    title: "Khóa học TOEIC 450+",
    imageUrl: courseImageUrl,
    instructor: "Tú Lê",
    level: "Easy",
    tags: ["toeic", "450+", "easy"],
  },
  {
    title: "Khóa học IELTS 6.0+",
    imageUrl: courseImageUrl,
    instructor: "Tiến Đạt",
    level: "Medium",
    tags: ["ielts", "6.0+", "medium"],
  },
  {
    title: "Khóa học tiếng Anh B1+",
    imageUrl: courseImageUrl,
    instructor: "Văn Lẹ",
    level: "Easy",
    tags: ["community", "B1", "easy"],
  },
  {
    title: "Khóa học tiếng Anh Vstep B1",
    imageUrl: courseImageUrl,
    instructor: "Văn Lẹ",
    level: "Easy",
    tags: ["vstep", "B1", "easy"],
  },
];

const levelsList = ["Easy", "Medium", "Hard", "Advanced"];

const tagsList: Tag[] = [
  { title: "Toeic", aim: "", level: "" },
  { title: "Ielts", aim: "", level: "" },
  { title: "Giao tiếp", aim: "", level: "" },
  { title: "B1-B2", aim: "", level: "" },
  { title: "VStep", aim: "", level: "" },
];

const data = {
  coursesList,
  tagsList,
  levelsList,
};
export { data };
