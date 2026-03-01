import * as React from "react";
import { cn } from "./ui/utils";

const SleepCard = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-[--radius-card] border border-border bg-card text-card-foreground",
        "shadow-[--shadow-card]",
        className
      )}
      {...props}
    />
  )
);
SleepCard.displayName = "SleepCard";

const SleepCardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col gap-1.5 p-6", className)} {...props} />
  )
);
SleepCardHeader.displayName = "SleepCardHeader";

const SleepCardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn("font-medium leading-none tracking-tight", className)}
      style={{ fontSize: "var(--text-subtitle)" }}
      {...props}
    />
  )
);
SleepCardTitle.displayName = "SleepCardTitle";

const SleepCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-muted-foreground", className)}
    style={{ fontSize: "var(--text-small)" }}
    {...props}
  />
));
SleepCardDescription.displayName = "SleepCardDescription";

const SleepCardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
  )
);
SleepCardContent.displayName = "SleepCardContent";

const SleepCardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
  )
);
SleepCardFooter.displayName = "SleepCardFooter";

export {
  SleepCard,
  SleepCardHeader,
  SleepCardFooter,
  SleepCardTitle,
  SleepCardDescription,
  SleepCardContent,
};
