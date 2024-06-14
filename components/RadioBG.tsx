import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { DefaultOption, SelectedOption } from "./Option";
import useSuggestStore, { cerScore } from "@/models/suggestion/model";
interface OptionProps {
  Options: string[];
}
export function RadioBG(props: OptionProps) {
  // const { setCer } = useSuggestStore();
  const { Options } = props;
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const onClickHandler = (item: any) => {
    setSelectedItem(item);
    // setCer(item);
  };

  return (
    <FlatList
      contentContainerStyle={{ gap: 6 }}
      data={Options}
      keyExtractor={(item) => item}
      scrollEnabled={false}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => onClickHandler(item)}>
          {selectedItem === item ? (
            <SelectedOption content={item} />
          ) : (
            <DefaultOption content={item} />
          )}
        </TouchableOpacity>
      )}
    />
  );
}
