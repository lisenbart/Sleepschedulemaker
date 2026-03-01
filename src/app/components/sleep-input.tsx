import * as React from "react";
import { cn } from "./ui/utils";

export interface SleepInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const SleepInput = React.forwardRef<HTMLInputElement, SleepInputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-11 w-full rounded-[--radius-input] border border-input bg-input-background",
          "px-4 py-2 transition-colors",
          "file:border-0 file:bg-transparent file:font-medium",
          "placeholder:text-muted-foreground",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
SleepInput.displayName = "SleepInput";

export { SleepInput };
