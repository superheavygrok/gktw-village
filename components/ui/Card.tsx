import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export function Card({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "bg-surface rounded-3xl shadow-soft border border-black/5 p-8",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
