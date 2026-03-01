import React from "react";
import { Link, useLocation } from "react-router";
import { SleepButton } from "../components/sleep-button";
import {
  SleepCard,
  SleepCardHeader,
  SleepCardTitle,
  SleepCardDescription,
  SleepCardContent,
} from "../components/sleep-card";
import { Download, CheckCircle2 } from "lucide-react";

function Result() {
  const location = useLocation();
  const plan = location.state?.plan || "7-day";
  const planName = plan === "7-day" ? "7-Day" : "30-Day";

  return (
    <div className="min-h-screen bg-background">
      {/* Main Content */}
      <main className="max-w-[640px] mx-auto px-4 py-12 md:py-20">
        {/* Success Message */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <CheckCircle2 className="w-8 h-8 text-primary" />
          </div>
          <h1
            className="text-foreground mb-2"
            style={{ fontSize: "var(--text-title)", fontWeight: "var(--font-weight-medium)" }}
          >
            You're all set
          </h1>
          <p
            className="text-muted-foreground"
            style={{ fontSize: "var(--text-base)" }}
          >
            Your {planName} plan is ready.
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-4 mb-8">
          {/* Download Card */}
          <SleepCard>
            <SleepCardHeader>
              <SleepCardTitle>Download</SleepCardTitle>
              <SleepCardDescription>
                Keep or print for reference.
              </SleepCardDescription>
            </SleepCardHeader>
            <SleepCardContent>
              <SleepButton variant="primary" className="w-full">
                <Download className="w-4 h-4" />
                Download PDF
              </SleepButton>
            </SleepCardContent>
          </SleepCard>

          {/* Next Steps Card */}
          <SleepCard>
            <SleepCardHeader>
              <SleepCardTitle>Next steps today</SleepCardTitle>
              <SleepCardDescription>
                Quick actions to get started
              </SleepCardDescription>
            </SleepCardHeader>
            <SleepCardContent>
              <ol className="space-y-3">
                <li className="flex items-start gap-3">
                  <span
                    className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary shrink-0 mt-0.5"
                    style={{ fontSize: "var(--text-small)", fontWeight: "var(--font-weight-medium)" }}
                  >
                    1
                  </span>
                  <span style={{ fontSize: "var(--text-small)" }} className="text-foreground">
                    Save or print your plan PDF.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span
                    className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary shrink-0 mt-0.5"
                    style={{ fontSize: "var(--text-small)", fontWeight: "var(--font-weight-medium)" }}
                  >
                    2
                  </span>
                  <span style={{ fontSize: "var(--text-small)" }} className="text-foreground">
                    Pick a start day and stick to the same bedtime routine.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span
                    className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary shrink-0 mt-0.5"
                    style={{ fontSize: "var(--text-small)", fontWeight: "var(--font-weight-medium)" }}
                  >
                    3
                  </span>
                  <span style={{ fontSize: "var(--text-small)" }} className="text-foreground">
                    Use the adjustment rules when something doesn't fit.
                  </span>
                </li>
              </ol>
            </SleepCardContent>
          </SleepCard>
        </div>

        {/* Back Link */}
        <div className="text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-primary hover:underline transition-colors"
            style={{ fontSize: "var(--text-small)", fontWeight: "var(--font-weight-medium)" }}
          >
            Back to generator
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Result;
