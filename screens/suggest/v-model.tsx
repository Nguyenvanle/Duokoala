import { AnswerOpsProps, SuggestOpsProps } from "@/components/RadioBG";
import { useSuggestScreenStore } from "./model";

const SuggestScreenModel = () => {
  const store = useSuggestScreenStore();

  const isSuggestOpsProps = (obj: SuggestOpsProps | AnswerOpsProps) => {
    return "For" in obj;
  };
  return { store, isSuggestOpsProps };
};
export default SuggestScreenModel;
