import { CourseProps, toeicUrl } from "@/models/course/model";
import { CourseRepository } from "@/services/repositories/courses";
import { useEffect, useState } from "react";
import { ViewModel } from "./viewmodel";
import { getUsers } from "@/api/user.api";

export class CourseViewModel extends ViewModel<CourseProps> {
  constructor() {
    super(new CourseRepository());
  }
}

export function useCourseViewModel() {
  const [courses, setCourses] = useState<CourseProps[]>([]);
  const [subCourses, setSubCourses] = useState<CourseProps[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  const courseViewModel = new CourseViewModel();

  useEffect(() => {
    console.log("state courses: " + courses.length);
  }, [courses]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    getUsers().then((res) => console.log(res[0].name));
    await courseViewModel
      .getAllItems()
      .catch((e) => {
        throw new Error("courseViewModel.getAllItems() fail", e);
      })
      .then((allCourses) => setCourses(allCourses));
  };

  const addCourse = async () => {
    const newCourse = {
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
      enrolledUsers: ["u5fVZpOTWscvwdoSKoK87tqtxiH3", "user4"],
    };
    await courseViewModel
      .addItem(newCourse)
      .then(() => {
        console.log("Add success");
      })
      .catch((error) => console.error(error))
      .finally(fetchCourses);
  };

  const deleteCourse = async (id: string) => {
    await courseViewModel
      .deleteItem(id)
      .then(() => {
        setCourses((prevCourses) =>
          prevCourses.filter((course) => course.id !== id)
        );
        console.log("Delete success");
      })
      .catch((error) => console.error(error));
  };

  const findCourse = async (id: string) => {
    await courseViewModel
      .getItemById(id)
      .then((course) => {
        if (course) {
          setCourses((prevCourses) => {
            const index = prevCourses.findIndex((c) => c.id === id);
            if (index !== -1) {
              const updatedCourses = [...prevCourses];
              updatedCourses[index] = course;
              return updatedCourses;
            } else {
              return [...prevCourses, course];
            }
          });
        }
        console.log(course);
      })
      .catch((error) => console.error(error));
  };

  const updateCourse = async (id: string, course: CourseProps) => {
    await courseViewModel
      .updateItem(id, course)
      .then(() => {
        setCourses((prevCourses) => {
          const index = prevCourses.findIndex((c) => c.id === id);
          if (index !== -1) {
            const updatedCourses = [...prevCourses];
            updatedCourses[index] = { ...updatedCourses[index], ...course };
            return updatedCourses;
          }
          return prevCourses;
        });
        console.log("Update Success");
      })
      .catch((error) => console.error(error));
  };

  return {
    isLoading,
    courses,
    subCourses,
    setLoading,
    addCourse,
    deleteCourse,
    updateCourse,
    findCourse,
  };
}
