import {
  useHandlerButtonViewModel,
  useSuggestViewModel,
} from "@/models/suggestion/v-model";
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
  const viewModel = useSuggestViewModel();
  const { setStateCall } = useHandlerButtonViewModel();
  const { For, Options, Default } = props;
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  useEffect(() => {
    if (Default) setSelectedItem(Default);
  }, []);

  const onClickHandler = (item: any) => {
    setSelectedItem(item);
    if (For === "certificated") {
      viewModel.setSuggest({
        cer: item,
        aim: viewModel.suggest?.aim ?? null,
        time: null,
        score: null,
      });
      setStateCall(true);
    } else if (For === "aim") {
      viewModel.setSuggest({
        ...viewModel.suggest,
        cer: viewModel.suggest?.cer ?? null,
        aim: item,
        time: null,
        score: null,
      });
    } else {
      viewModel.setSuggest({
        cer: viewModel.suggest?.cer ?? null,
        aim: viewModel.suggest?.cer ?? null,
        time: item,
        score: null,
      });
    }
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
  const viewModel = useSuggestViewModel();

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

  function CourseRadioBG(props: CourseTabProps) {
    const viewModel = useSuggestViewModel();
    const { For, Tabs, None } = props;
    const [selectedItem, setSelectedItem] = useState<string | null>(null);

    useEffect(() => {
      if (None) setSelectedTabs(None);
    }, []);
    const ClickHandler = (item: any) => {
      setSelectedTabs(item);
      if (For === "certificated") {
        viewModel.setSuggest({
          cer: item,
          aim: viewModel.suggest?.aim ?? null,
          score: viewModel.suggest?.score ?? null,
        });
      } else {
        viewModel.setSuggest({
          cer: viewModel.suggest?.cer ?? null,
          aim: item,
          score: viewModel.suggest?.score ?? null,
        });
      }
    };

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
}
