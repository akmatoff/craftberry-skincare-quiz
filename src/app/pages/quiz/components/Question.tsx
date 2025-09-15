import { type Question } from "@/app/shared/types";
import OptionButton from "./OptionButton";

type Props = {
  question: Question;
};

export default function Question({ question }: Props) {
  return (
    <div className="space-y-8">
      <h1 className="text-center">{question.question}</h1>

      <div className="flex items-center space-x-[10px]">
        {question.options.map((option) => (
          <OptionButton
            option={option}
            isSelected={false}
            onSelect={() => {}}
          />
        ))}
      </div>
    </div>
  );
}
