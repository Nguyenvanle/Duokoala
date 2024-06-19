import { CerProps, Suggest, useSuggestStore } from "@/models/suggestion/model";

//< - Import - >//

export function getCerNames(props: CerProps): string[] {
  return props.map((prop) => prop.cerName) || [];
}

//< - - - - - - - - - - - - - - - - - - - - >//

export function getCerAims(props: CerProps, cerName: any): string[] {
  const foundCer = props.find((prop) => prop.cerName === cerName);
  return foundCer ? foundCer.aims : [];
}

//< - - - - - - - - - - - - - - - - - - - - >//

export const useSuggestViewModel = () => {
  const store = useSuggestStore();
  return {
    suggest: store.suggest,
    setSuggest: (suggest: Suggest) => store.setSuggest(suggest),
  };
};

//< - - - - - - - - - - - - - - - - - - - - >//

export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = array.slice(); // Tạo bản sao của mảng ban đầu
  let i = array.length;

  while (i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[i]];
  }
  return shuffled;
}

//< - - - - - - - - - - - - - - - - - - - - >//

export function getRandomArray<T>(quantity: number, array: T[]): T[] {
  let i = array.length;
  let resultArray: T[] = [];

  while (quantity > 0 && resultArray.length < i) {
    const randomIndex = Math.floor(Math.random() * i);
    if (!resultArray.includes(array[randomIndex])) {
      resultArray.push(array[randomIndex]);
      quantity--;
    }
  }
  return resultArray;
}

//< - - - - - - - - - - - - - - - - - - - - >//

export function CombineAndRandom<T>(array1: T[], array2: T[]): T[] {
  const ArrayQuest = array1.concat(array2);
  return shuffleArray(ArrayQuest);
}
