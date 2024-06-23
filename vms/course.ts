import { CourseProps, toeicUrl } from "@/models/course/model";
import { CourseRepository } from "@/services/repositories/courses";
import { useEffect, useState } from "react";

export class CourseViewModel {
  private courseRepository: CourseRepository;

  constructor() {
    this.courseRepository = new CourseRepository();
  }

  // Hàm tiện ích để xử lý lỗi
  private handleError(error: any): void {
    console.error("Error: ", error);
    // Bạn có thể thêm logic xử lý lỗi cụ thể ở đây
    // Ví dụ: Hiển thị thông báo lỗi cho người dùng
  }

  async addCourse(course: Omit<CourseProps, "id">): Promise<void> {
    try {
      await this.courseRepository.create(course);
    } catch (error) {
      this.handleError(error);
    }
  }

  async updateCourse(
    id: string,
    course: Omit<CourseProps, "id">
  ): Promise<void> {
    try {
      await this.courseRepository.update(id, course);
    } catch (error) {
      this.handleError(error);
    }
  }

  async deleteCourse(id: string): Promise<void> {
    try {
      await this.courseRepository.delete(id);
    } catch (error) {
      this.handleError(error);
    }
  }

  async getAllCourses(): Promise<CourseProps[]> {
    try {
      return await this.courseRepository.getAll();
    } catch (error) {
      this.handleError(error);
      return [];
    }
  }

  async getCourseById(id: string): Promise<CourseProps | null> {
    try {
      return await this.courseRepository.read(id);
    } catch (error) {
      this.handleError(error);
      return null;
    }
  }
}

export function useCourseViewModel() {
  const [courses, setCourses] = useState<CourseProps[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const courseViewModel = new CourseViewModel();

  useEffect(() => {
    setLoading(true);
    const fetchCourses = async () => {
      const allCourses = await courseViewModel.getAllCourses();
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
      .addCourse(newCourse)
      .then(() => console.log("Add success"))
      .catch((error) => console.error(error));
  };

  const deleteCourse = async (id: string) => {
    await courseViewModel
      .deleteCourse(id)
      .then(() => console.log("Delete success"))
      .catch((error) => console.error(error));
  };

  const findCourse = async (id: string) => {
    await courseViewModel
      .getCourseById(id)
      .then((course) => console.log(course))
      .catch((error) => console.error(error));
  };

  const updateCourse = async (id: string, course: CourseProps) => {
    await courseViewModel
      .updateCourse(id, course)
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
