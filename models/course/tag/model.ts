import { create } from "zustand";

export interface Tag {
  title: string;
  aim: string;
  level: string;
}

interface TagState {
  tag: Tag | null;
  setTag: (tag: Tag) => void;
  toString: () => string;
}

export const useTagStore = create<TagState>((set, get) => ({
  tag: {
    title: "",
    aim: "",
    level: "",
  },
  setTag: (tag: Tag) => {
    set({
      tag: {
        title: tag.title,
        aim: tag.aim,
        level: tag.level,
      },
    });
  },
  toString: () => {
    const tag = get().tag;
    return tag?.title + ", " + tag?.aim + ", " + tag?.level;
  },
}));
