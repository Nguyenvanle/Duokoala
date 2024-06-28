import { Identifiable } from "@/services/repositories";
import { create } from "zustand";

//< - Import - >//
interface CerProp {
  cerName: string;
  aims: string[];
}
export type CerProps = CerProp[];

//< - - - - - - - - - - - - - - - - - - - - >//

export interface QuestProp {
  uri: string | null;
  question: string;
  answer: string[];
  correctAnswer: string;
}
export type QuestProps = QuestProp[];

//< - - - - - - - - - - - - - - - - - - - - >//
export interface SuggestProp extends Identifiable {
  id: string;
  uid: string;
  cer: string;
  aim: string;
  time: string;
  score: number | string;
}

// Định nghĩa interface SuggestState với các hàm setter cho mỗi thuộc tính
interface SuggestState {
  suggest: SuggestProp;
  setSuggest: (suggest: SuggestProp) => void;
  setNull: () => void;
  setCer: (cer: string) => void;
  setAim: (aim: string) => void;
  setTime: (time: string) => void;
  setScore: (score: string | number) => void;
}

// Tạo store với các hàm setter riêng cho từng thuộc tính
export const useSuggestStore = create<SuggestState>((set, get) => ({
  suggest: {
    id: "",
    uid: "",
    cer: "",
    aim: "",
    time: "",
    score: "",
  },
  setSuggest(suggest: SuggestProp) {
    set({ suggest: suggest });
  },
  setNull() {
    set({
      suggest: {
        id: "",
        uid: "",
        cer: "",
        aim: "",
        time: "",
        score: "",
      },
    });
  },
  setCer: (cer: string) =>
    set({
      suggest: {
        ...get().suggest,
        cer: cer,
      },
    }),
  setAim: (aim: string) =>
    set({
      suggest: {
        ...get().suggest,
        aim: aim,
      },
    }),
  setTime: (time: string) =>
    set({
      suggest: {
        ...get().suggest,
        time: time,
      },
    }),
  setScore: (score: number | string) =>
    set({
      suggest: {
        ...get().suggest,
        score: score,
      },
    }),
}));

//< - - - - - - - - - - - - - - - - - - - - >//
