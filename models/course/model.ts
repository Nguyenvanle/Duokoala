import { Identifiable } from "@/services/repositories";
import { ImageSourcePropType } from "react-native";
import { create } from "zustand";

const courseImageUrl: ImageSourcePropType = require("@/assets/images/course/toeic-700.jpg");

export const toeicUrl: string =
  "https://images.unsplash.com/photo-1543109740-4bdb38fda756?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const ieltsUrl: string =
  "https://img.freepik.com/free-photo/dictionary-definition-word_93675-128626.jpg?w=996&t=st=1718206024~exp=1718206624~hmac=c76824de6cab1502be74808fac002f276790d43e84b54c4de1e7e641867032ea";

export interface CourseProps extends Identifiable {
  id: string;
  title: string;
  imageUrl: ImageSourcePropType | string;
  instructor: string;
  level: string;
  tags: string[];
  description: string; // Mô tả chi tiết về khóa học
  duration: number; // Thời lượng khóa học (phút)
  price: number; // Giá khóa học
  rating: number; // Đánh giá trung bình của khóa học
  reviewsCount: number; // Số lượng đánh giá
  lessonsCount: number; // Số lượng bài học trong khóa học
  language: string; // Ngôn ngữ của khóa học
  createdAt: Date; // Ngày tạo khóa học
  updatedAt: Date; // Ngày cập nhật khóa học
  isFeatured: boolean; // Khóa học nổi bật
  isFree: boolean; // Khóa học miễn phí
  prerequisites: string[]; // Các yêu cầu trước khi tham gia khóa học
  category: string; // Danh mục khóa học
  videoUrl: string; // URL video giới thiệu khóa học
  enrolledUsers: string[];
}

export interface CourseState {
  course: CourseProps;
  categorizedCourses: Record<string, CourseProps[]>;
  setCourse: (course: CourseProps) => void;
  setTitle: (title: string) => void;
  levelUp: () => void;
  categorizeCourses: (courses: CourseProps[]) => void;
}

// Định nghĩa một Record type mapping từ kiểu dữ liệu gốc sang kiểu dữ liệu mong muốn
const fieldValueMapping: Record<
  string,
  (value: any) => any
> = {
  string: (value: string) => ({ stringValue: value }),
  number: (value: number) => ({ doubleValue: value.toString() }),
  boolean: (value: boolean) => ({ booleanValue: value }),
  object: (value: any) => {
    if (value instanceof Date) {
      return { timestampValue: value.toISOString() };
    } else if (Array.isArray(value)) {
      return {
        arrayValue: {
          values: value.map((item: string) => ({ stringValue: item })),
        },
      };
    }
    // Xử lý trường hợp object không phải Date hoặc Array (nếu cần)
    return {};
  },
};

export const transformCourseToFields = (course: CourseProps) => {
  return Object.fromEntries(
    Object.entries(course).map(([key, value]) => {
      const valueType = typeof value;
      const transformFn = fieldValueMapping[valueType];
      return [key, transformFn ? transformFn(value) : {}];
    })
  );
};

export const useCourseStore = create<CourseState>((set, get) => ({
  course: {
    id: "",
    title: "",
    imageUrl: "",
    instructor: "",
    level: "",
    tags: [""],
    description: "",
    duration: 0,
    price: 0,
    rating: 0,
    reviewsCount: 0,
    lessonsCount: 0,
    language: "",
    createdAt: new Date(),
    updatedAt: new Date(),
    isFeatured: false,
    isFree: false,
    prerequisites: [""],
    category: "",
    videoUrl: "",
    enrolledUsers: [""],
  },
  categorizedCourses: {},

  setCourse: (course: CourseProps) => set({ course: course }),

  setTitle: (title: string) =>
    set({
      course: {
        ...get().course,
        title: title,
      },
    }),

  levelUp: () =>
    set({
      course: {
        ...get().course,
        level: get().course.level,
      },
    }),

  categorizeCourses: (courses: CourseProps[]) => {
    const categories: Record<string, CourseProps[]> = {
      toeic: [],
      ielts: [],
      vstep: [],
      community: [],
    };

    courses.forEach((course) => {
      course.tags.forEach((tag) => {
        const normalizedTag = tag.toLowerCase();
        if (categories[normalizedTag]) {
          categories[normalizedTag].push(course);
        }
      });
    });

    set({ categorizedCourses: categories });
  },
}));

export const coursesData: {
  newest: CourseProps[];
  suggested: CourseProps[];
  subscribed: CourseProps[];
  created: CourseProps[];
} = {
  newest: [
    {
      id: "1",
      title: "Khóa học TOEIC 700+",
      imageUrl: toeicUrl,
      instructor: "Tiến Đạt",
      level: "Hard",
      tags: ["toeic", "700+", "hard"],
      description: "Mô tả chi tiết về khóa học TOEIC 700+",
      duration: 120,
      price: 100,
      rating: 4.5,
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
    },
    {
      id: "2",
      title: "Khóa học IELTS 7.0+",
      imageUrl: ieltsUrl,
      instructor: "Văn Lẹ",
      level: "Advanced",
      tags: ["ielts", "7.0+", "hard"],
      description: "Mô tả chi tiết về khóa học IELTS 7.0+",
      duration: 150,
      price: 150,
      rating: 4.8,
      reviewsCount: 200,
      lessonsCount: 25,
      language: "Vietnamese",
      createdAt: new Date(),
      updatedAt: new Date(),
      isFeatured: true,
      isFree: false,
      prerequisites: ["Intermediate English"],
      category: "Language",
      videoUrl: "https://example.com/video/ielts-7.0",
      enrolledUsers: ["user3", "user4"],
    },
  ],
  suggested: [
    {
      id: "3",
      title: "Khóa học tiếng Anh giao tiếp",
      imageUrl: courseImageUrl,
      instructor: "Hưng Thịnh",
      level: "Easy",
      tags: ["community", "english", "easy"],
      description: "Mô tả chi tiết về khóa học tiếng Anh giao tiếp",
      duration: 90,
      price: 50,
      rating: 4.0,
      reviewsCount: 50,
      lessonsCount: 15,
      language: "Vietnamese",
      createdAt: new Date(),
      updatedAt: new Date(),
      isFeatured: false,
      isFree: true,
      prerequisites: ["None"],
      category: "Language",
      videoUrl: "https://example.com/video/english-communication",
      enrolledUsers: ["user5", "user6"],
    },
  ],
  subscribed: [
    {
      id: "1",
      title: "Khóa học TOEIC 700+",
      imageUrl: toeicUrl,
      instructor: "Tiến Đạt",
      level: "Hard",
      tags: ["toeic", "700+", "hard"],
      description: "Mô tả chi tiết về khóa học TOEIC 700+",
      duration: 120,
      price: 100,
      rating: 4.5,
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
    },
  ],
  created: [
    {
      id: "4",
      title: "Khóa học TOEIC 500+",
      imageUrl: courseImageUrl,
      instructor: "John Doe",
      level: "Medium",
      tags: ["toeic", "500+", "medium"],
      description: "Mô tả chi tiết về khóa học TOEIC 500+",
      duration: 100,
      price: 80,
      rating: 4.2,
      reviewsCount: 80,
      lessonsCount: 18,
      language: "Vietnamese",
      createdAt: new Date(),
      updatedAt: new Date(),
      isFeatured: false,
      isFree: false,
      prerequisites: ["Basic English"],
      category: "Language",
      videoUrl: "https://example.com/video/toeic-500",
      enrolledUsers: ["user7", "user8"],
    },
  ],
};
