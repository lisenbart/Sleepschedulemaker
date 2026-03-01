import * as React from "react";
import { cn } from "./ui/utils";

export interface SleepButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "default" | "sm";
}

const SleepButton = React.forwardRef<HTMLButtonElement, SleepButtonProps>(
  ({ className, variant = "primary", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-50",
          {
            // Primary - accent fill
            "bg-primary text-primary-foreground hover:bg-[#265858] active:bg-[#1f4a4a]":
              variant === "primary",
            // Secondary - muted fill
            "bg-muted text-foreground hover:bg-[#e8e6e3] active:bg-border":
              variant === "secondary",
            // Outline - bordered
            "border-2 border-border bg-card text-foreground hover:bg-secondary active:bg-muted":
              variant === "outline",
          },
          {
            // Default size - 44px min height as specified
            "h-11 px-6 rounded-[--radius-button]": size === "default",
            // Small size
            "h-9 px-4 rounded-[--radius-button]": size === "sm",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
SleepButton.displayName = "SleepButton";

export { SleepButton };
