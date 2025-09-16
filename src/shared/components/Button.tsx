import type { ButtonHTMLAttributes, ReactElement, ReactNode } from "react";
import { tv } from "tailwind-variants";
import LoadingSpinner from "./LoadingSpinner";
import React from "react";

const button = tv({
  base: "inline-flex items-center justify-center rounded-lg px-12 py-[14px] font-medium outline-none disabled:pointer-events-none disabled:opacity-60",

  variants: {
    variant: {
      solid:
        "min-w-[210px] bg-primary text-foreground hover:opacity-80 duration-300",
      outline: "border border-border hover:opacity-80 duration-300",
      ghost: "px-4 text-foreground underline",
      circle: "p-4 rounded-full bg-muted-content hover:opacity-80 duration-300",
    },
  },

  defaultVariants: {
    variant: "solid",
  },
});

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
  variant?: "solid" | "outline" | "ghost" | "circle";
  isLoading?: boolean;
  trailingIcon?: ReactElement<SVGElement>;
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
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          {children}
          {trailingIcon &&
            React.cloneElement(trailingIcon, { className: "ml-2 text-2xl" })}
        </>
      )}
    </button>
  );
}
