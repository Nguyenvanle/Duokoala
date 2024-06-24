import { create } from "zustand";

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
  time: number | null;
  score: number | string | null;
}

// Định nghĩa interface SuggestState với các hàm setter cho mỗi thuộc tính
interface SuggestState {
  suggest: Suggest;
  setSuggest: (suggest: Suggest) => void;
  setScore: (score: string | number) => void;
}

// Tạo store với các hàm setter riêng cho từng thuộc tính
export const useSuggestStore = create<SuggestState>((set) => ({
  suggest: {
    cer: null,
    aim: null,
    time: null,
    score: null,
  },
  setSuggest(suggest: Suggest) {
    set({ suggest: suggest });
  },
  setScore(score: number | string) {
    set((state) => ({
      suggest: {
        ...state.suggest,
        score: score,
      },
    }));
  },
}));

//< - - - - - - - - - - - - - - - - - - - - >//
