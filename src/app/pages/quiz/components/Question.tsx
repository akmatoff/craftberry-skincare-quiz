import { type Question } from "@/app/shared/types";
import OptionButton from "./OptionButton";
import { useQuiz } from "@/app/shared/services/useQuiz";
import { useCallback } from "react";

type Props = {
  question: Question;
};

export default function Question({ question }: Props) {
  const { setAnswer, isSelected } = useQuiz();

  const handleSelect = useCallback(
    (optionId: string) => setAnswer(question.id, optionId),
    [question.id, setAnswer]
  );

  return (
    <div className="flex flex-col items-center space-y-8 lg:max-w-[50dvw]">
      <p className="text-center lg:max-w-[30dvw] text-[40px]/[40px] font-light grange">
        {question.question}
      </p>

      <div className="flex items-center justify-center gap-[10px] flex-wrap">
        {question.options.map((option) => (
          <OptionButton
            key={option.id}
            option={option}
            isSelected={isSelected(option.id)}
            onSelect={() => handleSelect(option.id)}
          />
        ))}
      </div>
    </div>
  );
}
