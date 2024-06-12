import { ImageSourcePropType } from "react-native";

export interface CourseProps {
  title: string;
  imageUrl: ImageSourcePropType | string;
  instructor: string;
  level: string;
  tags: string[];
}
