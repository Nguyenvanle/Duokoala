import { CourseProps, toeicUrl } from "@/models/course/model";
import { CourseRepository } from "@/services/repositories/courses";
import { useEffect, useState } from "react";
import { ViewModel } from "./viewmodel";

export class CourseViewModel extends ViewModel<CourseProps> {
  constructor() {
    super(new CourseRepository());
  }
}

export function useCourseViewModel() {
  const [courses, setCourses] = useState<CourseProps[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const courseViewModel = new CourseViewModel();

  useEffect(() => {
    setLoading(true);
    const fetchCourses = async () => {
      const allCourses = await courseViewModel.getAllItems();
      setCourses(allCourses);
    };

    fetchCourses();
    setLoading(false);
  }, [courses]);

  const addCourse = async () => {
    const newCourse: CourseProps = {
      id: "2",
      title: "Khóa học IELTS 7.0+",
      imageUrl: toeicUrl,
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
    };
    await courseViewModel
      .addItem(newCourse)
      .then(() => console.log("Add success"))
      .catch((error) => console.error(error));
  };

  const deleteCourse = async (id: string) => {
    await courseViewModel
      .deleteItem(id)
      .then(() => console.log("Delete success"))
      .catch((error) => console.error(error));
  };

  const findCourse = async (id: string) => {
    await courseViewModel
      .getItemById(id)
      .then((course) => console.log(course))
      .catch((error) => console.error(error));
  };

  const updateCourse = async (id: string, course: CourseProps) => {
    await courseViewModel
      .updateItem(id, course)
      .then(() => console.log("Update Success"))
      .catch((error) => console.error(error));
  };

  return {
    isLoading,
    courses,
    addCourse,
    deleteCourse,
    updateCourse,
    findCourse,
  };
}
