import type { QuestionOption } from "@/app/shared/types";
import cn from "classnames";

type Props = {
  option: QuestionOption;
  isSelected?: boolean;
  onSelect: () => void;
};

export default function OptionButton({ option, isSelected, onSelect }: Props) {
  return (
    <label
      htmlFor={option.id}
      className={cn(
        "cursor-pointer select-none min-w-[180px] px-5 py-[14px] border border-border rounded-lg hover:opacity-80 duration-300",
        isSelected ? "bg-primary" : "bg-transparent"
      )}
    >
      <input
        type="radio"
        name={option.id}
        id={option.id}
        className="sr-only"
        checked={isSelected}
        onChange={onSelect}
      />
      {option.id}. {option.text}
    </label>
  );
}
