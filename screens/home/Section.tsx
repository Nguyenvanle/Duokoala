import { View, Text, FlatList, StyleSheet } from "react-native";
import { text } from "@/constants/Styles";
import React from "react";
import Course from "@/components/Course";
import { Link } from "expo-router";
import { CourseProps } from "@/models/course/model";
const routerHref: string = "/tabs/join/join-courses";

interface SectionProps {
  title: string;
  courses?: CourseProps[];
}
const MAX_ITEMS = 2; // Số lượng phần tử tối đa

export function Section(props: SectionProps) {
  const { title, courses } = props;
  // Giới hạn số lượng phần tử trong mảng
  const limitCourses = courses?.slice(0, MAX_ITEMS);

  return (
    <>
      <View style={styles.text}>
        <Text style={text.subTitle}>{title}</Text>
        <Link style={text.link} href={routerHref}>
          Xem thêm
        </Link>
      </View>

      <FlatList
        contentContainerStyle={{ gap: 6 }}
        data={limitCourses}
        keyExtractor={(item) => item.title}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <Course
            title={item.title}
            imageUrl={item.imageUrl}
            instructor={item.instructor}
            level={item.level}
            tags={item.tags}
          />
        )}
      />
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
});
