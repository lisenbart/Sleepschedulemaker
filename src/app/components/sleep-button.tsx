import * as React from "react";
import { cn } from "./ui/utils";

export interface SleepButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "default" | "sm" | "lg";
}

const SleepButton = React.forwardRef<HTMLButtonElement, SleepButtonProps>(
  ({ className, variant = "primary", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center gap-2 whitespace-nowrap transition-all",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-50",
          {
            // Primary - soft rose/mauve fill with shadow
            "bg-primary text-primary-foreground hover:bg-[--primary-hover] shadow-[--shadow-button] hover:shadow-lg":
              variant === "primary",
            // Secondary - muted fill
            "bg-secondary text-foreground hover:bg-muted":
              variant === "secondary",
            // Outline - bordered
            "border-2 border-border bg-card text-foreground hover:bg-secondary hover:border-primary/20":
              variant === "outline",
          },
          {
            // Large size
            "h-14 px-8 rounded-[--radius-button]": size === "lg",
            // Default size - 44px min height
            "h-12 px-7 rounded-[--radius-button]": size === "default",
            // Small size
            "h-10 px-5 rounded-[--radius-button]": size === "sm",
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