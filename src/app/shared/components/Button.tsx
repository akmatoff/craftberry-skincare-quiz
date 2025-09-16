import type { ButtonHTMLAttributes, ReactNode } from "react";
import { tv } from "tailwind-variants";
import LoadingSpinner from "./LoadingSpinner";

const button = tv({
  base: "inline-flex items-center justify-center rounded-lg px-12 py-[14px] font-medium outline-none disabled:pointer-events-none disabled:opacity-60",

  variants: {
    variant: {
      solid:
        "min-w-[210px] bg-primary text-foreground hover:opacity-80 duration-300",
      outline: "border border-border hover:opacity-80 duration-300",
      ghost: "px-4 text-foreground underline",
    },
  },

  defaultVariants: {
    variant: "solid",
  },
});

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
  variant?: "solid" | "outline" | "ghost";
  isLoading?: boolean;
  trailingIcon?: ReactNode;
};

export default function Button({
  children,
  variant,
  className,
  isLoading,
  trailingIcon,
  ...props
}: Props) {
  return (
    <button className={button({ variant, className })} {...props}>
      {isLoading ? <LoadingSpinner /> : children}
    </button>
  );
}
