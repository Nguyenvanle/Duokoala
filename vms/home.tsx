import { useCourseViewModel } from "@/vms/course";
import { useEffect, useState } from "react";

// Temp User View Model
export function useUserViewModel() {
  const [user, setUser] = useState(data.user);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        const response = {
          id: "user3",
          email: "johndoe@gmail.com",
          password: "johndoe",
          isNewUser: true,
          name: "John Doe",
          role: "Student",
          currentTime: 45,
          targetTime: 60,
          createdCourses: 10,
          targetCourses: 100,
        };
        const result = await response;
        setUser(result);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [isLoading]);

  return { user, setUser, isLoading, error };
}

export function useHomeViewModel() {
  const userVM = useUserViewModel();
  const courseVM = useCourseViewModel();

  return { user: userVM.user, courses: courseVM.courses };
}

export const data = {
  user: {
    id: "user3",
    email: "johndoe@gmail.com",
    password: "johndoe",
    isNewUser: true,
    name: "John Doe",
    role: "Student",
    currentTime: 45,
    targetTime: 60,
    createdCourses: 10,
    targetCourses: 100,
  },
  iconUri: {
    clock: "https://cdn-icons-png.flaticon.com/512/2755/2755545.png",
    course: "https://cdn-icons-png.flaticon.com/512/2949/2949758.png",
  },
};
