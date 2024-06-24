import Colors from "@/constants/Colors";
import { CerProps, Suggest, useSuggestStore } from "@/models/suggestion/model";
import {
  cerProps,
  questPhotoProps,
  questTextProps,
} from "@/screens/suggest/data";
import { router } from "expo-router";
import { useEffect, useState } from "react";

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
    setScore: (score: string | number) => store.setScore(score),
  };
};

//< - - - - - - - - - - - - - - - - - - - - >//

const Confirm = {
  title: "Xác nhận chọn",
  colors: Colors.teal,
};
const Next = {
  title: "Câu tiếp theo",
  colors: Colors.green,
};
const Finish = {
  title: "Hoàn thành",
  colors: Colors.red,
};

const TextQuestion = getRandomArray(5, questTextProps); // so cau hoi Chu
const PhotoQuestion = getRandomArray(5, questPhotoProps); // so cau hoi Hinh
const ArrayQuestion = CombineAndRandom(TextQuestion, PhotoQuestion); // dua vao 1 mang va xao tron no
const ArrayLength = ArrayQuestion.length;

export const useTestViewModel = () => {
  const viewModel = useSuggestViewModel();
  const [IPage, setIPage] = useState(0);

  const [stateColor, setStateColor] = useState(Confirm.colors);
  const [stateTitle, setStateTitle] = useState(Confirm.title);

  const [stateAnswer, setStateAnswer] = useState(0);
  const { cautionNotConfirm, setCautionNotConfirm } =
    useHandlerButtonViewModel();

  const updateStateButton = () => {
    switch (stateTitle) {
      case Confirm.title: {
        if (IPage == ArrayLength - 1) {
          setStateTitle(Finish.title);
          setStateColor(Finish.colors);
        } else {
          setStateTitle(Next.title);
          setStateColor(Next.colors);
        }
        break;
      }
      case Next.title: {
        setStateTitle(Confirm.title);
        setStateColor(Confirm.colors);
      }
    }
  };

  const handleConfirm = () => {
    if (viewModel.suggest.score == "") {
      setCautionNotConfirm(true);
      return;
    }
    updateStateButton();
    if (viewModel.suggest.score === ArrayQuestion[IPage].correctAnswer)
      setStateAnswer(stateAnswer + 1);
    viewModel.setScore("");
  };

  const handleNext = () => {
    if (stateTitle == Confirm.title) {
      handleConfirm();
    } else if (stateTitle == Next.title) {
      setIPage(IPage + 1);
      updateStateButton();
    } else handleFinish("/tabs/homes");
  };

  const handleFinish = (routerName: string) => {
    viewModel.setSuggest({
      cer: viewModel.suggest?.cer ?? null,
      aim: viewModel.suggest?.aim ?? null,
      time: viewModel.suggest?.time ?? null,
      score: (stateAnswer / ArrayLength) * 10,
    });
    router.replace(routerName);
  };

  const getUriSize = (): number => {
    if (ArrayQuestion[IPage].uri) return 320;
    return 260;
  };

  return {
    IPage,
    stateAnswer,
    ArrayQuestion,
    cautionNotConfirm,
    stateTitle,
    stateColor,
    ArrayLength,
    getUriSize,
    handleConfirm,
    handleNext,
    setCautionNotConfirm,
  };
};

//< - - - - - - - - - - - - - - - - - - - - >//

export const useHandlerButtonViewModel = () => {
  const viewModel = useSuggestViewModel();
  const [cautionNotConfirm, setCautionNotConfirm] = useState(false);
  const [cautionSkip, setCautionSkip] = useState(false);
  const [statusTestAlert, setStatusTestAlert] = useState(false);
  const [arrayOpsAims, setArrayOpsAims] = useState<string[]>([]);
  const [stateCall, setStateCall] = useState(false);

  useEffect(() => {
    setArrayOpsAims(getCerAims(cerProps, viewModel.suggest?.cer));
    if (stateCall === false) return;
    viewModel.setSuggest({
      cer: viewModel.suggest?.cer ?? null,
      aim: null,
      score: null,
      time: null,
    });
  }, [viewModel.suggest.cer]);

  const CerNextHandler = (address: string) => {
    if (viewModel.suggest?.cer) router.replace(address);
    else setCautionNotConfirm(true);
  };

  const AimsNextHandler = (address: string) => {
    if (viewModel.suggest?.aim) router.replace(address);
    else setCautionNotConfirm(true);
  };

  const TimeNextHandler = (address: string) => {
    if (viewModel.suggest?.time) setStatusTestAlert(true);
    else setCautionNotConfirm(true);
  };

  const AimsBackHandler = (address: string) => {
    router.replace(address);
  };

  const CautionSkipHandler = () => {
    setCautionSkip(true);
  };

  const SkipHandler = (address: string) => {
    router.replace(address);
  };

  const SetNullSuggest = () => {
    viewModel.setSuggest({
      cer: null,
      aim: null,
      time: null,
      score: null,
    });
  };

  const SetTimeNull = () => {
    viewModel.setSuggest({
      cer: viewModel.suggest?.cer ?? null,
      aim: viewModel.suggest?.aim ?? null,
      time: null,
      score: null,
    });
  };

  return {
    cautionNotConfirm,
    setCautionNotConfirm,
    cautionSkip,
    setCautionSkip,
    CerNextHandler,
    CautionSkipHandler,
    SkipHandler,
    SetNullSuggest,
    arrayOpsAims,
    AimsBackHandler,
    AimsNextHandler,
    SetTimeNull,
    TimeNextHandler,
    setStateCall,
    statusTestAlert,
    setStatusTestAlert,
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

//< - - - - - - - - - - - - - - - - - - - - >//
