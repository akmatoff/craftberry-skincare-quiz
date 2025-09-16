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
    <div className="space-y-8">
      <h1 className="text-center">{question.question}</h1>

      <div className="flex items-center space-x-[10px]">
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
