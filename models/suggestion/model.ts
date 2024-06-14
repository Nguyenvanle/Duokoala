import { create } from "zustand";
export class cerScoreList {
  cerScores: string[];

  constructor(cerScores: string[]) {
    this.cerScores = cerScores;
  }
  public setCerScores(cerScores: string[]) {
    this.cerScores = cerScores;
  }
  public getCerScore() {
    return this.cerScores;
  }
}

export const cerScore = new cerScoreList([]);

interface Suggest {
  cer: string;
  aim: string;
  score: number;
}

interface SuggestState {
  suggest: Suggest | null;
  getSuggest: () => Suggest | null;
  setSuggest: (suggest: Suggest) => void;
  getCer: () => string | null;
  setCer: (cer: string) => void;
  getAim: () => string | null;
  setAim: (aim: string) => void;
  getScore: () => number | null;
  setScore: (score: number) => void;
}
const useSuggestStore = create<SuggestState>((set, get) => ({
  suggest: null,

  getSuggest: () => get().suggest || null,
  setSuggest: (suggest: Suggest) => set({ suggest }),

  getCer: () => get().suggest?.cer || null,
  setCer: (cer: string) =>
    set((state) => ({
      suggest: state.suggest ? { ...state.suggest, cer } : null,
    })),

  getAim: () => get().suggest?.aim || null,
  setAim: (aim: string) =>
    set((state) => ({
      suggest: state.suggest ? { ...state.suggest, aim } : null,
    })),

  getScore: () => get().suggest?.score || null,
  setScore: (score: number) =>
    set((state) => ({
      suggest: state.suggest ? { ...state.suggest, score } : null,
    })),
}));

export default useSuggestStore;
