import * as React from "react";
import { cn } from "./ui/utils";

export interface SleepLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const SleepLabel = React.forwardRef<HTMLLabelElement, SleepLabelProps>(
  ({ className, ...props }, ref) => (
    <label
      ref={ref}
      className={cn("block text-foreground mb-2", className)}
      style={{ fontSize: "var(--text-label)", fontWeight: "var(--font-weight-medium)" }}
      {...props}
    />
  )
);
SleepLabel.displayName = "SleepLabel";

export { SleepLabel };
