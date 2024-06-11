import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  FlatList,
  ImageBackground,
} from "react-native";
import { defaultStyles, text } from "@/constants/Styles";
import { index } from "@/app/index";
import React, { useEffect, useState } from "react";
import UserGreeting from "@/components/UserGreeting";
import StudyTime from "@/components/StudyTime";
import { Link } from "expo-router";
import KoalaLoading from "@/components/KoalaLoading";
import { user } from "@/models/user/model";
import { CourseProps, coursesData } from "@/models/course/model";
import Course from "@/components/Course";
const clockUri: string =
  "https://cdn-icons-png.flaticon.com/512/2755/2755545.png";
const routerHref: string = "/tabs/join/join-courses";

export default function HomeScreen() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [courses, setCourses] = useState<CourseProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setCourses(coursesData);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  if (isLoading) return <KoalaLoading></KoalaLoading>;
  else
    return (
      <ScrollView style={defaultStyles.pageContainer}>
        {/* root */}
        <ImageBackground
          source={require("@/assets/images/radiant-bg.png")}
          style={home.container}
        >
          {/* Greeting */}
          <UserGreeting name={user.name} role={user.role} />

          {/* Study Time */}
          <StudyTime
            clockUri={clockUri}
            currentTime={user.currentTime}
            targetTime={user.targetTime}
          />

          {/* Newest Courses */}
          <View style={home.text}>
            <Text style={text.subTitle}>Khóa học mới nhất</Text>
            <Link style={text.link} href={routerHref}>
              Xem thêm
            </Link>
          </View>

          <FlatList
            contentContainerStyle={{ gap: 6 }}
            data={courses}
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

          {/* Suggest Courses */}
          <View style={home.text}>
            <Text style={text.subTitle}>Dành cho bạn</Text>
            <Link style={text.link} href={routerHref}>
              Xem thêm
            </Link>
          </View>

          <FlatList
            contentContainerStyle={{ gap: 6 }}
            data={coursesData}
            scrollEnabled={false}
            keyExtractor={(item) => item.title}
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

          {/* Subscribed Courses */}
          <View style={home.text}>
            <Text style={text.subTitle}>Đã đăng ký</Text>
            <Link style={text.link} href={routerHref}>
              Xem thêm
            </Link>
          </View>

          <FlatList
            contentContainerStyle={{ gap: 6 }}
            data={coursesData}
            scrollEnabled={false}
            keyExtractor={(item) => item.title}
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
        </ImageBackground>
      </ScrollView>
    );
}

export const home = StyleSheet.create({
  container: {
    ...index.container,
    gap: 10,
    justifyContent: "flex-start",
    flex: 1,
  },
  text: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
