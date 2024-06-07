import Colors from "@/constants/Colors";
import { Tabs } from "expo-router";
import { text } from "@/constants/Styles";
import { FlaticonIcon } from "@/components/FlaticonIcon";
import { StyleSheet } from "react-native";

const icon = {
  home: "https://cdn-icons-png.flaticon.com/512/2626/2626923.png",
  course: "https://cdn-icons-png.flaticon.com/512/2702/2702154.png",
  user: "https://cdn-icons-png.flaticon.com/512/5065/5065208.png",
};
export default function TabLayout() {
  return (
    <Tabs
      initialRouteName="homes"
      screenOptions={{
        tabBarActiveTintColor: "blue",
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: tabStyle.tabBarStyle,
        headerStyle: { backgroundColor: Colors.blue.light },
        headerTitleAlign: "center",
        headerTitleStyle: { ...text.title },
      }}
    >
      <Tabs.Screen
        name="courses"
        options={{
          title: "Tạo Khóa Học",
          tabBarIcon: () => <FlaticonIcon size={30} uri={icon.course} />,
        }}
      />
      <Tabs.Screen
        name="homes"
        options={{
          title: "Trang Chủ",
          tabBarIcon: () => <FlaticonIcon size={30} uri={icon.home} />,
        }}
      />
      <Tabs.Screen
        name="profiles"
        options={{
          title: "Cá Nhân",
          tabBarIcon: () => <FlaticonIcon size={28} uri={icon.user} />,
        }}
      />
    </Tabs>
  );
}

const tabStyle = StyleSheet.create({
  tabBarStyle: {
    height: 60,
    paddingBottom: 7,
    backgroundColor: Colors.blue.light,
    borderTopWidth: 0, // Tắt đường viền trên cùng
    shadowColor: "transparent", // Tắt bóng (shadow) trên iOS
    elevation: 0, // Tắt bóng (shadow) trên Android
  },
});
