import { AnswerOpsProps, SuggestOpsProps } from "@/components/RadioBG";
import { create } from "zustand";
export interface SuggestScreenProps {
  suggest: {
    uri: string;
    uriSize: number;
    title: string;
    content: string;
  };
  radioBG: SuggestOpsProps | AnswerOpsProps;
  buttons: {
    color: string;
    name: string;
    isButton: boolean;
    handle: () => void;
  }[];
}

interface SuggestScreenState {
  suggestScreen: SuggestScreenProps | null;
  setSuggestScreen: (suggest: SuggestScreenProps) => void;
}
export const useSuggestScreenStore = create<SuggestScreenState>((set) => ({
  suggestScreen: null,
  setSuggestScreen: (suggestScreen: SuggestScreenProps) =>
    set({ suggestScreen }),
}));
