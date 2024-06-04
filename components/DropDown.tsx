import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

const MyDropdownMenu = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Tùy chọn 1", value: "option1" },
    { label: "Tùy chọn 2", value: "option2" },
    { label: "Tùy chọn 3", value: "option3" },
  ]);

  return (
    <View style={styles.container}>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder="Chọn tùy chọn"
        style={styles.picker}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: ,
    justifyContent: "center",
    alignItems: "center",
  },
  picker: {
    width: 200,
    height: 50,
  },
});

export default MyDropdownMenu;
