import { create } from "zustand";
import { SuggestScreen } from "@/screens/suggest/suggestScreen";

//< - Import - >//
interface CerProp {
  cerName: string;
  aims: string[];
}
export type CerProps = CerProp[];

//< - - - - - - - - - - - - - - - - - - - - >//

interface QuestProp {
  uri: string | null;
  question: string;
  answer: string[];
  correctAnswer: string;
}
export type QuestProps = QuestProp[];

//< - - - - - - - - - - - - - - - - - - - - >//
export interface Suggest {
  cer: string | null;
  aim: string | null;
  score: number | null;
}
interface SuggestState {
  suggest: Suggest | null;
  setSuggest: (suggest: Suggest) => void;
}
export const useSuggestStore = create<SuggestState>((set) => ({
  suggest: null,
  setSuggest(suggest: Suggest) {
    set({ suggest: suggest });
  },
}));

//< - - - - - - - - - - - - - - - - - - - - >//

export interface Answer {
  answer: string | null;
}
interface AnswerState {
  answer: Answer | null;
  setAnswer: (answer: Answer) => void;
}
export const useAnswerStore = create<AnswerState>((set) => ({
  answer: null,
  setAnswer(answer: Answer) {
    set({ answer: answer });
  },
}));
