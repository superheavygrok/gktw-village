import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "sm";
}

export function Button({
  variant = "primary",
  size = "default",
  className,
  children,
  ...props
}: ButtonProps) {
  const base = "inline-flex items-center justify-center gap-2 rounded-2xl font-medium transition-all active:scale-[0.985] disabled:opacity-60 disabled:pointer-events-none";

  const variants = {
    primary: "bg-text text-surface hover:bg-black px-8 py-3.5",
    secondary: "border border-text/20 bg-surface hover:bg-cream px-8 py-3.5 text-text",
    ghost: "text-text-muted hover:text-text hover:bg-surface px-6 py-2 text-sm",
  };

  const sizes = {
    default: "text-base",
    sm: "text-sm py-2 px-5",
  };

  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
