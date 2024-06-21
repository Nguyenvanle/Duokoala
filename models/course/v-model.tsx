import { useEffect } from "react";
import { CourseProps, useCourseStore } from "./model";

export default function useCourseViewModel() {
  const store = useCourseStore();

  useEffect(() => {
    console.log(store.course);
  }, [store]);

  return {
    course: store.course,

    setCourse: (course: CourseProps) => {
      store.setCourse(course);
    },

    setTitle: (title: string) => {
      store.setTitle(title);
    },
  };
}
