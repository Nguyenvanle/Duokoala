import Colors from "@/constants/Colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { text } from "@/constants/Styles";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "blue",
        headerStyle: {
          backgroundColor: Colors.blue.light,
        },
        headerTitleAlign: "center",
        headerTitleStyle: {
          ...text.title,
        },
      }}
    >
      <Tabs.Screen
        name="homes"
        options={{
          title: "Trang Chủ",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="courses"
        options={{
          title: "Tạo Khóa Học",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="cog" color={color} />
          ),
          headerBackgroundContainerStyle: { backgroundColor: "red" },
        }}
      />
      <Tabs.Screen
        name="join"
        options={{
          title: "Tham Gia Khóa Học",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="meetup" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
