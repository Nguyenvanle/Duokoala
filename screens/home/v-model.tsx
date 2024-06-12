import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { useHomeModel } from "./model";

const useHomeViewModel = () => {
  const { fetchHomeData, ...homeState } = useHomeModel();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      await fetchHomeData();
      setIsLoading(false);
    };

    fetchData();
  }, [fetchHomeData]);

  return { ...homeState, isLoading };
};

export default useHomeViewModel;
