"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/app/lib/cn";
import React from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-semibold transition-all",
  {
    variants: {
      variant: {
        default: "bg-neutral-14 text-black cursor-pointer",
        outline:
          "border-2 border-neutral-5 hover:border-0 hover:bg-neutral-14 hover:text-black cursor-pointer",
        ghost:
          "bg-transparent hover:bg-neutral-14 hover:text-black cursor-pointer",
        destructive: "bg-red-600 text-white hover:bg-red-700 cursor-pointer",
        disabled: "bg-neutral-alfa-1 text-neutral-alfa-8 cursor-not-allowed",
      },
      size: {
        default: "h-9 w-65 px-5 text-sm rounded-lg",
        sm: "h-9 px-4 text-sm rounded-lg",
        lg: "h-11 w-65 px-5 rounded-xl",
        icon: "h-10 w-10",
      },
      width: {
        default: "w-65",
        shrink: "w-min",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      width: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export default function Button({
  className,
  variant,
  size,
  width,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, width }), className)}
      {...props}
    />
  );
}
