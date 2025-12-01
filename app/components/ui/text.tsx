import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/app/lib/cn";
import React from "react";

const textVariants = cva("text-neutral-14 transition-all", {
  variants: {
    variant: {
      h1: "scroll-m-20 text-4xl font-bold tracking-tight lg:text-6xl",
      h2: "scroll-m-20 text-3xl font-semibold tracking-tight",
      h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
      h4: "scroll-m-20 text-xl font-semibold tracking-tight",
      p: "text-base leading-relaxed",
      small: "text-sm leading-snug",
      span: "text-base",
    },
    weight: {
      regular: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    color: {
      default: "text-content-base-primary",
      heading:
        "bg-gradient-to-r from-neutral-14 to-neutral-13 inline-block text-transparent bg-clip-text",
      muted: "text-neutral-alfa-8 select-none",
      black: "text-black",
      primary: "text-brand-primary-9",
      secondary: "text-content-base-secondary",
      danger: "text-red-600",
      none: "",
    },
  },
  defaultVariants: {
    variant: "p",
    weight: "regular",
    color: "default",
  },
});

export interface TextProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "color">,
    VariantProps<typeof textVariants> {
  as?: keyof HTMLElementTagNameMap;
}

export default function Text({
  className,
  variant,
  weight,
  color,
  as,
  ...props
}: TextProps) {
  let Component: keyof HTMLElementTagNameMap = "p";

  if (as) Component = as;
  else if (variant === "small") Component = "p";
  else Component = (variant as keyof HTMLElementTagNameMap) || "p";

  return React.createElement(Component, {
    className: cn(textVariants({ variant, weight, color }), className),
    ...props,
  });
}
