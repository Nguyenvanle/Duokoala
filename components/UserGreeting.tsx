import { Text, View } from "react-native";
import { text } from "@/constants/Styles";
import React from "react";

interface UserGreetingProps {
  user: UserProps | null;
}

const UserGreeting: React.FC<UserGreetingProps> = (props) => {
  const { user } = props;
  return (
    <View style={{ alignItems: "flex-start" }}>
      <Text style={text.subTitle}>Xin chào {user?.name} 🥰</Text>
      {user?.role === "Teacher" ? (
        <Text style={text.mainContent}>Bắt đầu dạy nào!</Text>
      ) : (
        <Text style={text.mainContent}>Bắt đầu học nào!</Text>
      )}
    </View>
  );
};

export default UserGreeting;
