// viewModel.ts
import { useEffect } from "react";
import { CourseProps, useCourseStore } from "./model";
import { useState } from "react";
import { data } from "./data";

export default function useCourseViewModel() {
  const store = useCourseStore();

  const [selectedCategory, setSelectedCategory] = useState<string>("toeic");

  useEffect(() => {
    store.categorizeCourses(data.coursesList);
  }, []);

  useEffect(() => {
    console.log(store.course);
  }, [store]);

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
