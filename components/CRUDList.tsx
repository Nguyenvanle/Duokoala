// components/CRUDList.tsx
import { CourseProps } from "@/models/course/model";
import React from "react";
import { View, Text, Button, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface CRUDListProps<T> {
  data: T[];
  addItem: () => void;
  deleteItem: (id: string) => void;
  updateItem: (id: string, item: T) => void;
  renderItem: (item: T) => React.ReactNode;
  keyExtractor: (item: T) => string;
}

const CRUDList = <T extends { id: string }>({
  data,
  addItem,
  deleteItem,
  updateItem,
  renderItem,
  keyExtractor,
}: CRUDListProps<T>) => {
  return (
    <SafeAreaView>
      <View
        style={{
          flex: 0,
          padding: 10,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Button title="Add Item" onPress={addItem} />
      </View>
      <Text>Item List</Text>
      <FlatList
        data={data}
        keyExtractor={keyExtractor}
        scrollEnabled
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: "row",
              padding: 10,
            }}
          >
            <View style={{ flex: 1 }}>{renderItem(item)}</View>
            <View style={{ flex: 0, padding: 10, gap: 10 }}>
              <Button title="Delete" onPress={() => deleteItem(item.id)} />
              <Button
                title="Update"
                onPress={() =>
                  updateItem(item.id, { ...item, instructor: "Changed" })
                }
              />
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const renderCourseItem = (item: CourseProps) => (
  <>
    <Text>{item.id}</Text>
    <Text>{item.title}</Text>
    <Text>{item.description}</Text>
    <Text>{item.instructor}</Text>
    <Text>{item.duration} hours</Text>
  </>
);

// Usage:
//
// return (
//     <CRUDList
//       data={courses}
//       addItem={addCourse}
//       deleteItem={deleteCourse}
//       updateItem={updateCourse}
//       renderItem={renderCourseItem}
//       keyExtractor={(item) => item.id}
//     />
//   );

export { CRUDList, renderCourseItem };
