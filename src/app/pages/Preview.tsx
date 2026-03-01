import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { SleepButton } from "../components/sleep-button";
import {
  SleepCard,
  SleepCardHeader,
  SleepCardTitle,
  SleepCardDescription,
  SleepCardContent,
} from "../components/sleep-card";
import { SleepChip } from "../components/sleep-chip";
import { ArrowLeft, Clock, FileText } from "lucide-react";

function Preview() {
  const navigate = useNavigate();
  const [showMobileCTA, setShowMobileCTA] = useState(true);

  const handleChoosePlan = (plan: "7-day" | "30-day") => {
    navigate("/result", { state: { plan } });
  };

  return (
    <div className="min-h-screen bg-background pb-24 md:pb-8">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-40">
        <div className="max-w-[640px] mx-auto px-4 py-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary hover:underline transition-colors"
            style={{ fontSize: "var(--text-small)", fontWeight: "var(--font-weight-medium)" }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to generator
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[640px] mx-auto px-4 py-8 md:py-12">
        {/* Page Title */}
        <div className="text-center mb-8">
          <h1
            className="text-foreground mb-2"
            style={{ fontSize: "var(--text-title)", fontWeight: "var(--font-weight-medium)" }}
          >
            Your schedule preview
          </h1>
          <p className="text-muted-foreground" style={{ fontSize: "var(--text-base)" }}>
            Choose a plan to get the full PDF.
          </p>
        </div>

        {/* Schedule Cards */}
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          <SleepCard>
            <SleepCardHeader>
              <SleepCardTitle>Today</SleepCardTitle>
              <SleepCardDescription>Your custom schedule</SleepCardDescription>
            </SleepCardHeader>
            <SleepCardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span style={{ fontSize: "var(--text-small)" }}>Wake</span>
                  <span className="font-medium" style={{ fontSize: "var(--text-small)" }}>
                    7:00 AM
                  </span>
                </div>
                <div className="h-px bg-border" />
                <div className="flex justify-between items-center">
                  <span style={{ fontSize: "var(--text-small)" }}>Nap 1</span>
                  <span className="font-medium" style={{ fontSize: "var(--text-small)" }}>
                    9:15 AM
                  </span>
                </div>
                <div className="h-px bg-border" />
                <div className="flex justify-between items-center">
                  <span style={{ fontSize: "var(--text-small)" }}>Nap 2</span>
                  <span className="font-medium" style={{ fontSize: "var(--text-small)" }}>
                    12:30 PM
                  </span>
                </div>
                <div className="h-px bg-border" />
                <div className="flex justify-between items-center">
                  <span style={{ fontSize: "var(--text-small)" }}>Bedtime</span>
                  <span className="font-medium" style={{ fontSize: "var(--text-small)" }}>
                    7:30 PM
                  </span>
                </div>
              </div>
            </SleepCardContent>
          </SleepCard>

          <SleepCard>
            <SleepCardHeader>
              <SleepCardTitle>Template day</SleepCardTitle>
              <SleepCardDescription>Flexible framework</SleepCardDescription>
            </SleepCardHeader>
            <SleepCardContent>
              <p style={{ fontSize: "var(--text-small)" }} className="text-foreground leading-relaxed">
                A balanced 2-nap schedule for 6–12 month olds, with 2.5–3 hour wake windows and
                11–12 hours of overnight sleep.
              </p>
            </SleepCardContent>
          </SleepCard>
        </div>

        {/* Choose Your Plan Section */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2
              className="text-foreground mb-2"
              style={{
                fontSize: "var(--text-subtitle)",
                fontWeight: "var(--font-weight-medium)",
              }}
            >
              Choose your plan
            </h2>
            <p className="text-muted-foreground" style={{ fontSize: "var(--text-small)" }}>
              Select the timeframe that works for your family
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <SleepCard>
              <SleepCardHeader>
                <SleepCardTitle>Starter 7-Day</SleepCardTitle>
                <SleepCardDescription>Focused week, basic rules</SleepCardDescription>
              </SleepCardHeader>
              <SleepCardContent className="space-y-4">
                <ul className="space-y-2">
                  <li
                    className="flex items-start gap-2"
                    style={{ fontSize: "var(--text-small)" }}
                  >
                    <span className="text-primary mt-0.5">•</span>
                    <span>7 days of schedules</span>
                  </li>
                  <li
                    className="flex items-start gap-2"
                    style={{ fontSize: "var(--text-small)" }}
                  >
                    <span className="text-primary mt-0.5">•</span>
                    <span>Basic wake windows</span>
                  </li>
                  <li
                    className="flex items-start gap-2"
                    style={{ fontSize: "var(--text-small)" }}
                  >
                    <span className="text-primary mt-0.5">•</span>
                    <span>Printable PDF</span>
                  </li>
                </ul>
                <SleepButton
                  variant="outline"
                  className="w-full"
                  onClick={() => handleChoosePlan("7-day")}
                >
                  Get 7-Day Plan
                </SleepButton>
              </SleepCardContent>
            </SleepCard>

            <SleepCard className="border-2 border-primary">
              <SleepCardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <SleepCardTitle>Extended 30-Day</SleepCardTitle>
                    <SleepCardDescription>+ Stability</SleepCardDescription>
                  </div>
                  <SleepChip variant="selected" className="text-xs">
                    Popular
                  </SleepChip>
                </div>
              </SleepCardHeader>
              <SleepCardContent className="space-y-4">
                <ul className="space-y-2">
                  <li
                    className="flex items-start gap-2"
                    style={{ fontSize: "var(--text-small)" }}
                  >
                    <span className="text-primary mt-0.5">•</span>
                    <span>30 days of schedules</span>
                  </li>
                  <li
                    className="flex items-start gap-2"
                    style={{ fontSize: "var(--text-small)" }}
                  >
                    <span className="text-primary mt-0.5">•</span>
                    <span>Detailed guidance</span>
                  </li>
                  <li
                    className="flex items-start gap-2"
                    style={{ fontSize: "var(--text-small)" }}
                  >
                    <span className="text-primary mt-0.5">•</span>
                    <span>Common issues + solutions</span>
                  </li>
                  <li
                    className="flex items-start gap-2"
                    style={{ fontSize: "var(--text-small)" }}
                  >
                    <span className="text-primary mt-0.5">•</span>
                    <span>Printable PDF</span>
                  </li>
                </ul>
                <SleepButton
                  variant="primary"
                  className="w-full"
                  onClick={() => handleChoosePlan("30-day")}
                >
                  Get 30-Day Plan
                </SleepButton>
              </SleepCardContent>
            </SleepCard>
          </div>
        </section>

        {/* Trust Block - Compact */}
        <section className="bg-secondary/30 rounded-[--radius-card] p-6 md:p-8">
          <div className="space-y-6">
            {/* Trust Chips */}
            <div className="flex flex-wrap justify-center gap-2">
              <SleepChip variant="default">Not medical advice</SleepChip>
              <SleepChip variant="default">Privacy-first</SleepChip>
              <SleepChip variant="default">Gentle & flexible</SleepChip>
              <SleepChip variant="default">No guarantees</SleepChip>
              <SleepChip variant="default">Your pace</SleepChip>
            </div>

            {/* Disclaimers */}
            <div className="space-y-1 text-center">
              <p className="text-muted-foreground" style={{ fontSize: "var(--text-label)" }}>
                This tool provides general scheduling guidance and is not a substitute for
                professional medical advice.
              </p>
              <p className="text-muted-foreground" style={{ fontSize: "var(--text-label)" }}>
                Every baby is unique. Adjust schedules to fit your child's individual needs and
                cues.
              </p>
            </div>

            {/* Mini Cards - Only 2 */}
            <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
              <div className="rounded-xl border border-border bg-card p-3 text-center">
                <div className="w-8 h-8 mx-auto mb-2 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Clock className="w-4 h-4 text-primary" />
                </div>
                <p className="font-medium" style={{ fontSize: "var(--text-label)" }}>
                  Today schedule
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-3 text-center">
                <div className="w-8 h-8 mx-auto mb-2 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText className="w-4 h-4 text-primary" />
                </div>
                <p className="font-medium" style={{ fontSize: "var(--text-label)" }}>
                  Printable PDF
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Mobile Sticky CTA */}
      {showMobileCTA && (
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4 shadow-[0_-4px_12px_rgba(0,0,0,0.08)] z-50">
          <SleepButton
            variant="primary"
            className="w-full"
            onClick={() => handleChoosePlan("30-day")}
          >
            Choose plan
          </SleepButton>
        </div>
      )}
    </div>
  );
}

export default Preview;
