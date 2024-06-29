// viewModel.ts
import { useEffect } from "react";
import { CourseProps, coursesData, useCourseStore } from "./model";
import { useState } from "react";

export default function useCourseViewModel() {
  const store = useCourseStore();

  const [selectedCategory, setSelectedCategory] = useState<string>("toeic");

  useEffect(() => {
    store.categorizeCourses(coursesData.newest);
  }, []);

  return {
    course: store.course,
    categorizedCourses: store.categorizedCourses,
    selectedCategory: selectedCategory,

    setCourse: (course: CourseProps) => {
      store.setCourse(course);
    },

    setTitle: (title: string) => {
      store.setTitle(title);
    },

    categorizeCourses: (courses: CourseProps[]) => {
      store.categorizeCourses(courses);
    },

    handleSegmentChange: (category: string) => {
      setSelectedCategory(category.toLowerCase());
    },
  };
}
