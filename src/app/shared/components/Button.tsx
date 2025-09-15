import type { ButtonHTMLAttributes, ReactNode } from "react";
import { tv } from "tailwind-variants";

const button = tv({
  base: "inline-flex items-center justify-center rounded-lg px-10 py-[14px] font-medium outline-none disabled:pointer-events-none",

  variants: {
    variant: {
      solid: "bg-primary text-foreground hover:opacity-80 duration-300",
      outline: "border border-primary hover:opacity-80 duration-300",
      ghost: "text-foreground underline",
    },
  },

  defaultVariants: {
    variant: "solid",
  },
});

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
  variant?: "solid" | "outline" | "ghost";
};

export default function Button({
  children,
  variant,
  className,
  ...props
}: Props) {
  return (
    <button className={button({ variant, className })} {...props}>
      {children}
    </button>
  );
}
