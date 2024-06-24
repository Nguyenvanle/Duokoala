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
  id: string;
  cer: string;
  aim: string;
  time: string;
  score: number | string;
}

// Định nghĩa interface SuggestState với các hàm setter cho mỗi thuộc tính
interface SuggestState {
  suggest: Suggest;
  setSuggest: (suggest: Suggest) => void;
  setCer: (cer: string) => void;
  setAim: (aim: string) => void;
  setTime: (time: string) => void;
  setScore: (score: string | number) => void;
}

// Tạo store với các hàm setter riêng cho từng thuộc tính
export const useSuggestStore = create<SuggestState>((set) => ({
  suggest: {
    id: "",
    cer: "",
    aim: "",
    time: "",
    score: "",
  },
  setSuggest(suggest: Suggest) {
    set({ suggest: suggest });
  },
  setCer(cer: string) {
    set((state) => ({
      suggest: {
        ...state.suggest,
        cer: cer,
      },
    }));
  },
  setAim(aim: string) {
    set((state) => ({
      suggest: {
        ...state.suggest,
        aim: aim,
      },
    }));
  },
  setTime(time: string) {
    set((state) => ({
      suggest: {
        ...state.suggest,
        time: time,
      },
    }));
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
