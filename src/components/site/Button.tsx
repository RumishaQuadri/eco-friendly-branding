import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-sans text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none disabled:opacity-60 active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:shadow-lift",
        gold: "text-primary hover:shadow-lift",
        outline: "border border-primary/25 text-primary hover:bg-primary hover:text-primary-foreground",
        outlineLight:
          "border border-background/50 text-background hover:bg-background hover:text-primary",
        ghost: "text-primary hover:text-gold",
      },
      size: {
        default: "px-7 py-3.5",
        sm: "px-5 py-2.5 text-xs",
        lg: "px-9 py-4 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, size, style, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      style={
        variant === "gold"
          ? { backgroundImage: "var(--gradient-gold)", ...style }
          : style
      }
      {...props}
    />
  );
}
