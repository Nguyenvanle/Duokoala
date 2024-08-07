import { updateUser } from "./../api/user.api";
import { CourseProps, toeicUrl } from "@/models/course/model";
import { CourseRepository } from "@/services/repositories/courses";
import { useEffect, useState } from "react";
import { ViewModel } from "./viewmodel";
import { getAuthToken } from "@/services/auth/auth.service";
import UserProps from "@/models/user/model";
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

  useEffect(() => {
    console.log("state courses: " + courses.length);
  }, [courses]);

  useEffect(() => {
    fetchCourses();

    getAuthToken().then((res) => console.log(res?.toString()));
    getUsers("L4cbtMjWPuNEMqqbjK1HEWOmbS12").then((res) => console.log(res));
    updateUser("hahahahaahaha", newUser)
      .then((user) => {
        if (user) {
          console.log("User created successfully:", user);
        } else {
          console.log("Failed to create user.");
        }
      })
      .catch((error) => {
        console.error("Error creating user:", error);
      });
  }, []);

  const fetchCourses = async () => {
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
