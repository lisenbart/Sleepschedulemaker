import * as React from "react";
import { cn } from "./ui/utils";

export interface SleepChipProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "selected";
  removable?: boolean;
  onRemove?: () => void;
}

const SleepChip = React.forwardRef<HTMLDivElement, SleepChipProps>(
  ({ className, variant = "default", removable = false, onRemove, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center gap-1.5 rounded-[--radius-pill] px-3 py-1.5",
          "transition-colors",
          {
            "bg-muted text-foreground": variant === "default",
            "bg-primary/10 text-primary border border-primary/20": variant === "selected",
          },
          className
        )}
        style={{ fontSize: "var(--text-small)" }}
        {...props}
      >
        <span>{children}</span>
        {removable && (
          <button
            type="button"
            onClick={onRemove}
            className="ml-0.5 hover:text-foreground/80 focus:outline-none"
            aria-label="Remove"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )}
      </div>
    );
  }
);
SleepChip.displayName = "SleepChip";

export { SleepChip };
