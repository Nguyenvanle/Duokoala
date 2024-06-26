import {
  CerProps,
  QuestProps,
  SuggestProp,
  useSuggestStore,
} from "@/models/suggestion/model";
import {
  Confirm,
  Finish,
  Next,
  cerProps,
  questPhotoProps,
  questTextProps,
} from "@/screens/suggest/data";
import { useCourseViewModel } from "@/vms";
import { useSuggestViewModel } from "@/vms/suggest";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { CourseProps } from "../course/model";

//< - Import - >//

//< - - - - - - - - - - - - - - - - - - - - >//

export function getCerNames(props: CerProps): string[] {
  return props.map((prop) => prop.cerName) || [];
}

//< - - - - - - - - - - - - - - - - - - - - >//

export function getCerAims(props: CerProps, cerName: any): string[] {
  const foundCer = props.find((prop) => prop.cerName === cerName);
  return foundCer ? foundCer.aims : [];
}

//< - - - - - - - - - - - - - - - - - - - - >//

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

  const setFinalScore = async () => {
    await viewModel.setScore((stateAnswer / ArrayLength) * 10);
  };

  const handleFinish = async (routerName: string) => {
    await setFinalScore();
    await console.log(viewModel.suggest.score);
    await viewModel.updateSuggest();
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

  useEffect(() => {
    setArrayOpsAims(getCerAims(cerProps, viewModel.suggest?.cer));
  }, [viewModel.suggest.cer]);

  const NextHandler = (isData: string, address: string) => {
    if (isData) router.replace(address);
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

  return {
    cautionNotConfirm,
    setCautionNotConfirm,
    cautionSkip,
    setCautionSkip,
    CautionSkipHandler,
    SkipHandler,
    arrayOpsAims,
    AimsBackHandler,
    statusTestAlert,
    setStatusTestAlert,
    NextHandler,
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

export function RandomAnswerProps(array: QuestProps): QuestProps {
  return array.map((item) => {
    return {
      ...item,
      answer: getRandomArray(item.answer.length, item.answer),
    };
  });
}

//< - - - - - - - - - - - - - - - - - - - - >//

export function CombineAndRandom(array1: QuestProps, array2: QuestProps) {
  const R1 = RandomAnswerProps(array1);
  const R2 = RandomAnswerProps(array2);
  const ArrayQuest = R1.concat(R2);
  return shuffleArray(ArrayQuest);
}
