import { useEffect } from "react";
import { CourseProps, useCourseStore } from "./model";

export default function useCourseViewModel() {
  const store = useCourseStore();

  useEffect(() => {
    console.log(store);
  }, [store]);

  return {
    course: store.course,
    setCourse: (course: CourseProps) => {
      store.setCourse(course);
    },
    setTitle: (title: string) => {
      store.setTitle(store, title);
    },
  };
}
