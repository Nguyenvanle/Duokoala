import UserViewModel from "@/models/user/v-model";
import { useEffect, useState } from "react";
import { useHomeModel } from "./model";

const useHomeViewModel = () => {
  const { fetchHomeData, ...homeState } = useHomeModel();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const userViewModel = UserViewModel();

  useEffect(() => {
    const fetchData = async () => {
      await fetchHomeData();
      setIsLoading(false);
    };

    fetchData();
  }, [fetchHomeData]);

  
  const onClick = () => {
    console.log("add");
    userViewModel.addCourse();
  };

  return { ...homeState, isLoading, onClick };
};

export default useHomeViewModel;
