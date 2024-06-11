import { Text, View } from "react-native";
import { text } from "@/constants/Styles";
import React from "react";

interface UserGreetingProps {
  name: string;
  role: boolean;
}

const UserGreeting: React.FC<UserGreetingProps> = ({ name, role }) => {
  return (
    <View style={{ alignItems: "flex-start" }}>
      <Text style={text.subTitle}>Xin chào {name} 🥰</Text>
      {role ? (
        <Text style={text.mainContent}>Bắt đầu dạy nào!</Text>
      ) : (
        <Text style={text.mainContent}>Bắt đầu học nào!</Text>
      )}
    </View>
  );
};

export default UserGreeting;
