import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { SleepButton } from "../components/sleep-button";
import { SleepInput } from "../components/sleep-input";
import {
  SleepCard,
  SleepCardHeader,
  SleepCardTitle,
  SleepCardDescription,
  SleepCardContent,
} from "../components/sleep-card";
import { SleepChip } from "../components/sleep-chip";
import { SleepLabel } from "../components/sleep-label";
import {
  SleepSelect,
  SleepSelectContent,
  SleepSelectItem,
  SleepSelectTrigger,
  SleepSelectValue,
} from "../components/sleep-select";
import { SleepCheckbox } from "../components/sleep-checkbox";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../components/ui/accordion";
import { Moon, Clock, FileText, CheckSquare, AlertCircle, Download, ArrowRight } from "lucide-react";

function Home() {
  const navigate = useNavigate();
  const [childAge, setChildAge] = useState("");
  const [wakeTime, setWakeTime] = useState("07:00");
  const [bedtimeGoal, setBedtimeGoal] = useState("19:30");
  const [napsPerDay, setNapsPerDay] = useState("2");
  const [earlyRiser, setEarlyRiser] = useState(false);
  const [showMobileCTA, setShowMobileCTA] = useState(true);

  const handleGetSchedule = () => {
    navigate("/preview");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-card border-b border-border">
        <div className="max-w-[640px] mx-auto px-4 py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="space-y-3">
                <h1
                  className="text-foreground leading-tight"
                  style={{ fontSize: "var(--text-title)", fontWeight: "var(--font-weight-medium)" }}
                >
                  Sleep Schedule Maker
                </h1>
                <p
                  className="text-muted-foreground"
                  style={{ fontSize: "var(--text-base)" }}
                >
                  Baby & toddler. Minimal inputs, instant preview.
                </p>
              </div>
              <div className="space-y-3">
                <SleepButton variant="primary" className="w-full md:w-auto" onClick={() => {
                  document.getElementById('generator-form')?.scrollIntoView({ behavior: 'smooth' });
                }}>
                  Get started
                </SleepButton>
                <p
                  className="text-muted-foreground"
                  style={{ fontSize: "var(--text-label)" }}
                >
                  No account needed · Instant preview
                </p>
              </div>
            </div>
            <div className="rounded-[--radius-card] overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/flagged/photo-1567128723134-33238b1c5198?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJlbnQlMjBiYWJ5JTIwbmF0dXJhbCUyMGxpZ2h0JTIwcGVhY2VmdWx8ZW58MXx8fHwxNzcyNDA1NjA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Parent with baby in natural light"
                className="w-full h-[280px] md:h-[320px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Generator Form Section */}
      <section id="generator-form" className="py-12 md:py-16">
        <div className="max-w-[640px] mx-auto px-4">
          <SleepCard>
            <SleepCardHeader>
              <SleepCardTitle>Create Your Schedule</SleepCardTitle>
              <SleepCardDescription>
                Answer a few questions to generate a custom sleep schedule
              </SleepCardDescription>
            </SleepCardHeader>
            <SleepCardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <SleepLabel htmlFor="childAge">Child age</SleepLabel>
                  <SleepSelect value={childAge} onValueChange={setChildAge}>
                    <SleepSelectTrigger id="childAge">
                      <SleepSelectValue placeholder="Select age range" />
                    </SleepSelectTrigger>
                    <SleepSelectContent>
                      <SleepSelectItem value="0-3">0–3 months</SleepSelectItem>
                      <SleepSelectItem value="3-6">3–6 months</SleepSelectItem>
                      <SleepSelectItem value="6-9">6–9 months</SleepSelectItem>
                      <SleepSelectItem value="9-12">9–12 months</SleepSelectItem>
                      <SleepSelectItem value="12-18">12–18 months</SleepSelectItem>
                      <SleepSelectItem value="18-24">18–24 months</SleepSelectItem>
                      <SleepSelectItem value="24+">24+ months</SleepSelectItem>
                    </SleepSelectContent>
                  </SleepSelect>
                </div>

                <div className="space-y-2">
                  <SleepLabel htmlFor="napsPerDay">Naps per day</SleepLabel>
                  <SleepSelect value={napsPerDay} onValueChange={setNapsPerDay}>
                    <SleepSelectTrigger id="napsPerDay">
                      <SleepSelectValue placeholder="Select naps" />
                    </SleepSelectTrigger>
                    <SleepSelectContent>
                      <SleepSelectItem value="1">1 nap</SleepSelectItem>
                      <SleepSelectItem value="2">2 naps</SleepSelectItem>
                      <SleepSelectItem value="3">3 naps</SleepSelectItem>
                      <SleepSelectItem value="4">4 naps</SleepSelectItem>
                    </SleepSelectContent>
                  </SleepSelect>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <SleepLabel htmlFor="wakeTime">Wake time</SleepLabel>
                  <SleepInput
                    id="wakeTime"
                    type="time"
                    value={wakeTime}
                    onChange={(e) => setWakeTime(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <SleepLabel htmlFor="bedtimeGoal">Bedtime goal</SleepLabel>
                  <SleepInput
                    id="bedtimeGoal"
                    type="time"
                    value={bedtimeGoal}
                    onChange={(e) => setBedtimeGoal(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex items-start gap-3">
                <SleepCheckbox
                  id="earlyRiser"
                  checked={earlyRiser}
                  onCheckedChange={(checked) => setEarlyRiser(checked === true)}
                />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor="earlyRiser"
                    className="cursor-pointer"
                    style={{ fontSize: "var(--text-small)", fontWeight: "var(--font-weight-medium)" }}
                  >
                    Early riser / short naps
                  </label>
                  <p className="text-muted-foreground" style={{ fontSize: "var(--text-label)" }}>
                    Adjust wake windows for babies who wake early or take shorter naps
                  </p>
                </div>
              </div>

              <SleepButton variant="primary" className="w-full" onClick={handleGetSchedule}>
                <Clock className="w-4 h-4" />
                Get schedule
              </SleepButton>
            </SleepCardContent>
          </SleepCard>
        </div>
      </section>

      {/* Instant Preview Section */}
      <section id="instant-preview" className="py-12 md:py-16 bg-secondary/30">
        <div className="max-w-[640px] mx-auto px-4">
          <div className="text-center mb-8">
            <h2
              className="text-foreground mb-2"
              style={{ fontSize: "var(--text-subtitle)", fontWeight: "var(--font-weight-medium)" }}
            >
              Instant preview
            </h2>
            <p className="text-muted-foreground" style={{ fontSize: "var(--text-small)" }}>
              See your schedule instantly before choosing a plan
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <SleepCard>
              <SleepCardHeader>
                <SleepCardTitle>Today</SleepCardTitle>
                <SleepCardDescription>Your custom schedule</SleepCardDescription>
              </SleepCardHeader>
              <SleepCardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span style={{ fontSize: "var(--text-small)" }}>Wake</span>
                    <span className="font-medium" style={{ fontSize: "var(--text-small)" }}>7:00 AM</span>
                  </div>
                  <div className="h-px bg-border" />
                  <div className="flex justify-between items-center">
                    <span style={{ fontSize: "var(--text-small)" }}>Nap 1</span>
                    <span className="font-medium" style={{ fontSize: "var(--text-small)" }}>9:15 AM</span>
                  </div>
                  <div className="h-px bg-border" />
                  <div className="flex justify-between items-center">
                    <span style={{ fontSize: "var(--text-small)" }}>Nap 2</span>
                    <span className="font-medium" style={{ fontSize: "var(--text-small)" }}>12:30 PM</span>
                  </div>
                  <div className="h-px bg-border" />
                  <div className="flex justify-between items-center">
                    <span style={{ fontSize: "var(--text-small)" }}>Bedtime</span>
                    <span className="font-medium" style={{ fontSize: "var(--text-small)" }}>7:30 PM</span>
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
                  A balanced 2-nap schedule for 6–12 month olds, with 2.5–3 hour wake windows and 11–12 hours of overnight sleep.
                </p>
              </SleepCardContent>
            </SleepCard>
          </div>

          <div className="text-center">
            <button
              className="inline-flex items-center gap-1.5 text-primary hover:underline transition-colors"
              style={{ fontSize: "var(--text-small)", fontWeight: "var(--font-weight-medium)" }}
              onClick={() => {
                document.getElementById('choose-plan')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              See full preview
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Choose Your Plan Section */}
      <section id="choose-plan" className="py-12 md:py-16">
        <div className="max-w-[640px] mx-auto px-4">
          <div className="text-center mb-8">
            <h2
              className="text-foreground mb-2"
              style={{ fontSize: "var(--text-subtitle)", fontWeight: "var(--font-weight-medium)" }}
            >
              Choose your plan
            </h2>
            <p className="text-muted-foreground" style={{ fontSize: "var(--text-small)" }}>
              Select the timeframe that works for your family
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <SleepCard>
              <SleepCardHeader>
                <SleepCardTitle>Starter 7-Day</SleepCardTitle>
                <SleepCardDescription>Focused week, basic rules</SleepCardDescription>
              </SleepCardHeader>
              <SleepCardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2" style={{ fontSize: "var(--text-small)" }}>
                    <span className="text-primary mt-0.5">•</span>
                    <span>7 days of schedules</span>
                  </li>
                  <li className="flex items-start gap-2" style={{ fontSize: "var(--text-small)" }}>
                    <span className="text-primary mt-0.5">•</span>
                    <span>Basic wake windows</span>
                  </li>
                  <li className="flex items-start gap-2" style={{ fontSize: "var(--text-small)" }}>
                    <span className="text-primary mt-0.5">•</span>
                    <span>Printable PDF</span>
                  </li>
                </ul>
                <SleepButton variant="outline" className="w-full">
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
                  <SleepChip variant="selected" className="text-xs">Popular</SleepChip>
                </div>
              </SleepCardHeader>
              <SleepCardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2" style={{ fontSize: "var(--text-small)" }}>
                    <span className="text-primary mt-0.5">•</span>
                    <span>30 days of schedules</span>
                  </li>
                  <li className="flex items-start gap-2" style={{ fontSize: "var(--text-small)" }}>
                    <span className="text-primary mt-0.5">•</span>
                    <span>Detailed guidance</span>
                  </li>
                  <li className="flex items-start gap-2" style={{ fontSize: "var(--text-small)" }}>
                    <span className="text-primary mt-0.5">•</span>
                    <span>Common issues + solutions</span>
                  </li>
                  <li className="flex items-start gap-2" style={{ fontSize: "var(--text-small)" }}>
                    <span className="text-primary mt-0.5">•</span>
                    <span>Printable PDF</span>
                  </li>
                </ul>
                <SleepButton variant="primary" className="w-full">
                  Get 30-Day Plan
                </SleepButton>
              </SleepCardContent>
            </SleepCard>
          </div>

          <SleepCard>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="compare" className="border-0">
                <AccordionTrigger className="hover:no-underline px-6 py-4">
                  <span style={{ fontSize: "var(--text-small)", fontWeight: "var(--font-weight-medium)" }}>
                    Compare 7-Day vs 30-Day
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium mb-2" style={{ fontSize: "var(--text-small)" }}>7-Day Plan</p>
                      <p className="text-muted-foreground" style={{ fontSize: "var(--text-small)" }}>
                        Perfect for trying a schedule approach for the first time. Get one week of structured routines with basic wake windows and nap timing.
                      </p>
                    </div>
                    <div>
                      <p className="font-medium mb-2" style={{ fontSize: "var(--text-small)" }}>30-Day Plan</p>
                      <p className="text-muted-foreground" style={{ fontSize: "var(--text-small)" }}>
                        Build lasting sleep habits with a full month of schedules. Includes troubleshooting guidance, flexibility for growth spurts, and strategies for common challenges.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </SleepCard>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="max-w-[640px] mx-auto px-4">
          <div className="text-center mb-8">
            <h2
              className="text-foreground mb-2"
              style={{ fontSize: "var(--text-subtitle)", fontWeight: "var(--font-weight-medium)" }}
            >
              What you get
            </h2>
            <p className="text-muted-foreground" style={{ fontSize: "var(--text-small)" }}>
              Everything you need for a gentle sleep routine
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <SleepCard>
              <SleepCardHeader>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <SleepCardTitle className="text-base">Schedule cards</SleepCardTitle>
                    <SleepCardDescription>
                      Daily timelines
                    </SleepCardDescription>
                  </div>
                </div>
              </SleepCardHeader>
            </SleepCard>

            <SleepCard>
              <SleepCardHeader>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckSquare className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <SleepCardTitle className="text-base">Checklist steps</SleepCardTitle>
                    <SleepCardDescription>
                      Bedtime routine
                    </SleepCardDescription>
                  </div>
                </div>
              </SleepCardHeader>
            </SleepCard>

            <SleepCard>
              <SleepCardHeader>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <AlertCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <SleepCardTitle className="text-base">Common issues</SleepCardTitle>
                    <SleepCardDescription>
                      Troubleshooting
                    </SleepCardDescription>
                  </div>
                </div>
              </SleepCardHeader>
            </SleepCard>

            <SleepCard>
              <SleepCardHeader>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Download className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <SleepCardTitle className="text-base">Printable PDF</SleepCardTitle>
                    <SleepCardDescription>
                      Save & share
                    </SleepCardDescription>
                  </div>
                </div>
              </SleepCardHeader>
            </SleepCard>
          </div>

          <div className="text-center">
            <button
              className="inline-flex items-center gap-1.5 text-primary hover:underline transition-colors"
              style={{ fontSize: "var(--text-small)", fontWeight: "var(--font-weight-medium)" }}
            >
              See all included
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Trust & Proof Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-[640px] mx-auto px-4">
          <div className="text-center mb-8">
            <h2
              className="text-foreground mb-2"
              style={{ fontSize: "var(--text-subtitle)", fontWeight: "var(--font-weight-medium)" }}
            >
              Trust & proof
            </h2>
          </div>

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
                This tool provides general scheduling guidance and is not a substitute for professional medical advice.
              </p>
              <p className="text-muted-foreground" style={{ fontSize: "var(--text-label)" }}>
                Every baby is unique. Adjust schedules to fit your child's individual needs and cues.
              </p>
            </div>

            {/* Mini Cards */}
            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-xl border border-border bg-card p-3 text-center">
                <div className="w-8 h-8 mx-auto mb-2 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Clock className="w-4 h-4 text-primary" />
                </div>
                <p className="font-medium" style={{ fontSize: "var(--text-label)" }}>Today schedule</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-3 text-center">
                <div className="w-8 h-8 mx-auto mb-2 rounded-lg bg-primary/10 flex items-center justify-center">
                  <CheckSquare className="w-4 h-4 text-primary" />
                </div>
                <p className="font-medium" style={{ fontSize: "var(--text-label)" }}>Bedtime checklist</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-3 text-center">
                <div className="w-8 h-8 mx-auto mb-2 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText className="w-4 h-4 text-primary" />
                </div>
                <p className="font-medium" style={{ fontSize: "var(--text-label)" }}>Printable PDF</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="max-w-[640px] mx-auto px-4">
          <div className="text-center mb-8">
            <h2
              className="text-foreground mb-2"
              style={{ fontSize: "var(--text-subtitle)", fontWeight: "var(--font-weight-medium)" }}
            >
              Frequently asked questions
            </h2>
          </div>

          <SleepCard>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="q1" className="border-border">
                <AccordionTrigger className="px-6">What age is this for?</AccordionTrigger>
                <AccordionContent className="px-6">
                  <p style={{ fontSize: "var(--text-small)" }} className="text-foreground">
                    Sleep Schedule Maker is designed for babies and toddlers from 0 to 24+ months. Select your child's age range in the generator to get an appropriate schedule with age-specific wake windows and nap counts.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q2" className="border-border">
                <AccordionTrigger className="px-6">Is this sleep training?</AccordionTrigger>
                <AccordionContent className="px-6">
                  <p style={{ fontSize: "var(--text-small)" }} className="text-foreground">
                    No, this is a schedule tool, not a sleep training program. It provides a flexible daily timeline based on age-appropriate wake windows. You choose how to implement it with your preferred soothing methods.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q3" className="border-border">
                <AccordionTrigger className="px-6">Can I adjust the schedule?</AccordionTrigger>
                <AccordionContent className="px-6">
                  <p style={{ fontSize: "var(--text-small)" }} className="text-foreground">
                    Absolutely. The generated schedule is a starting framework. You can customize wake time, bedtime, and nap count in the generator. Follow your baby's cues and adjust as needed for your family's rhythm.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q4" className="border-border">
                <AccordionTrigger className="px-6">Do I need an account?</AccordionTrigger>
                <AccordionContent className="px-6">
                  <p style={{ fontSize: "var(--text-small)" }} className="text-foreground">
                    No account is required. You'll see an instant preview of your schedule and can access your plan immediately after generating it. Your privacy is protected—we don't collect personal data.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q5" className="border-border">
                <AccordionTrigger className="px-6">What if my baby doesn't follow it?</AccordionTrigger>
                <AccordionContent className="px-6">
                  <p style={{ fontSize: "var(--text-small)" }} className="text-foreground">
                    That's completely normal. Babies aren't robots. Use the schedule as a flexible guide, not a strict rule. The 30-Day Plan includes troubleshooting tips for common challenges like early waking and short naps.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q6" className="border-border">
                <AccordionTrigger className="px-6">Is this medical advice?</AccordionTrigger>
                <AccordionContent className="px-6">
                  <p style={{ fontSize: "var(--text-small)" }} className="text-foreground">
                    No. This tool provides general scheduling information based on common age-appropriate wake windows. It is not medical advice. Always consult your pediatrician for sleep concerns or health questions.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q7" className="border-border">
                <AccordionTrigger className="px-6">What's the difference between plans?</AccordionTrigger>
                <AccordionContent className="px-6">
                  <p style={{ fontSize: "var(--text-small)" }} className="text-foreground">
                    The 7-Day Plan is a one-week introduction with basic schedules. The 30-Day Plan includes four weeks of schedules, detailed guidance, troubleshooting for common issues, and strategies for building consistent sleep habits.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q8" className="border-border">
                <AccordionTrigger className="px-6">Can I print the schedule?</AccordionTrigger>
                <AccordionContent className="px-6">
                  <p style={{ fontSize: "var(--text-small)" }} className="text-foreground">
                    Yes! Both plans include a printable PDF. You can print it to hang on your fridge, share it with caregivers, or reference it offline. The PDF includes your full schedule and any checklists.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </SleepCard>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-8">
        <div className="max-w-[640px] mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Moon className="w-4 h-4 text-primary" />
              </div>
              <span className="font-medium" style={{ fontSize: "var(--text-small)" }}>
                Sleep Schedule Maker
              </span>
            </div>
            <div className="flex items-center gap-6">
              <button
                className="text-muted-foreground hover:text-foreground transition-colors"
                style={{ fontSize: "var(--text-small)" }}
              >
                Privacy
              </button>
              <button
                className="text-muted-foreground hover:text-foreground transition-colors"
                style={{ fontSize: "var(--text-small)" }}
              >
                Terms
              </button>
              <button
                className="text-muted-foreground hover:text-foreground transition-colors"
                style={{ fontSize: "var(--text-small)" }}
              >
                Support
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      {showMobileCTA && (
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4 shadow-[0_-4px_12px_rgba(0,0,0,0.08)] z-50">
          <SleepButton variant="primary" className="w-full" onClick={handleGetSchedule}>
            Get schedule
          </SleepButton>
        </div>
      )}
    </div>
  );
}

export default Home;
