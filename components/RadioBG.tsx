import { useEffect, useState } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import {
  CorrectOption,
  DefaultOption,
  NoneClick,
  SelectedClick,
  SelectedOption,
  WrongOption,
} from "./Option";
import { useSuggestViewModel } from "@/vms/suggest";
import { useSynSuggest } from "@/models/suggestion/v-model";
interface OptionProps {
  Options: string[];
}

//< - - - - - - - - - - - - - - - - - - - - >//
export function RadioBG(props: OptionProps) {
  const viewModel = useSuggestViewModel();
  const { Options } = props;

  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const onClickHandler = (item: any) => {
    setSelectedItem(item);
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

//< - - - - - - - - - - - - - - - - - - - - >//

export interface SuggestOpsProps {
  For: string | null;
  Options: string[];
  Default: string | null;
}

export function SuggestRadioBG(props: SuggestOpsProps) {
  const viewModel = useSynSuggest();
  const { For, Options, Default } = props;
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  useEffect(() => {
    if (Default) setSelectedItem(Default);
  }, []);

  const onClickHandler = (item: any) => {
    setSelectedItem(item);
    if (For === "certificated") {
      viewModel.setCer(item);
      viewModel.setAim("");
    } else if (For === "aim") viewModel.setAim(item);
    else viewModel.setTime(item);
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

//< - - - - - - - - - - - - - - - - - - - - >//

export interface AnswerOpsProps {
  Options: string[];
  Correct: string;
  Status: boolean;
}

export function AnswerRadioBG(props: AnswerOpsProps) {
  const viewModel = useSynSuggest();

  const { Options, Correct, Status } = props;
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const onClickHandler = (item: any) => {
    setSelectedItem(item);
    viewModel.setScore(item);
  };

  return (
    <FlatList
      contentContainerStyle={{ gap: 6 }}
      data={Options}
      keyExtractor={(item) => item}
      scrollEnabled={false}
      renderItem={({ item }) =>
        Status ? (
          <TouchableOpacity onPress={() => onClickHandler(item)}>
            {selectedItem === item ? (
              <SelectedOption content={item} />
            ) : (
              <DefaultOption content={item} />
            )}
          </TouchableOpacity>
        ) : (
          <View>
            {selectedItem === Correct && selectedItem === item ? (
              <CorrectOption content={item} />
            ) : item === Correct ? (
              <WrongOption content={item} />
            ) : item === selectedItem ? (
              <SelectedOption content={item} />
            ) : (
              <DefaultOption content={item} />
            )}
          </View>
        )
      }
    />
  );
}

interface TabProps {
  Tabs: string[];
}

export function TabsRadioBG(props: TabProps) {
  const { Tabs } = props;

  const [selectedTabs, setSelectedTabs] = useState<string | null>(null);
  const ClickHandler = (item: any) => {
    setSelectedTabs(item);
  };

  interface CourseTabProps {
    For: string | null;
    Tabs: string[];
    None: string | null;
  }

  return (
    <FlatList
      contentContainerStyle={{ gap: 6 }}
      data={Tabs}
      keyExtractor={(item) => item}
      scrollEnabled={false}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => ClickHandler(item)}>
          {selectedTabs === item ? (
            <SelectedClick content={item} />
          ) : (
            <NoneClick content={item} />
          )}
        </TouchableOpacity>
      )}
    />
  );
}
