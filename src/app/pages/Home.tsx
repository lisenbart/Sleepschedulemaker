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
import { Moon, Clock, FileText, CheckSquare, AlertCircle, Download, ArrowRight, Star, Heart } from "lucide-react";

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
      {/* Hero Section - Large with lifestyle image */}
      <section className="relative bg-gradient-to-br from-secondary/50 to-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 max-w-xl">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2">
                  <Heart className="w-4 h-4 text-primary" />
                  <span style={{ fontSize: "var(--text-small)", fontWeight: "var(--font-weight-medium)" }} className="text-primary">
                    Trusted by thousands of parents
                  </span>
                </div>
                <h1
                  className="text-foreground leading-tight"
                  style={{ fontSize: "clamp(36px, 5vw, 48px)", fontWeight: "var(--font-weight-medium)" }}
                >
                  Create peaceful sleep schedules for your little one
                </h1>
                <p
                  className="text-muted-foreground leading-relaxed"
                  style={{ fontSize: "var(--text-base)" }}
                >
                  Expert-designed sleep schedules for babies and toddlers. Get your personalized plan in minutes—no account needed.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <SleepButton variant="primary" size="lg" onClick={() => {
                  document.getElementById('generator-form')?.scrollIntoView({ behavior: 'smooth' });
                }}>
                  Create your schedule
                </SleepButton>
                <SleepButton variant="outline" size="lg">
                  Learn more
                </SleepButton>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center">
                        <Star className="w-4 h-4 text-primary fill-primary" />
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">2,000+</span> happy families
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-[32px] overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1688573483239-d07dfd3352a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RoZXIlMjBiYWJ5JTIwc2xlZXBpbmclMjBwZWFjZWZ1bCUyMGJlZHJvb218ZW58MXx8fHwxNzcyNDA2OTkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Mother and baby sleeping peacefully"
                  className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-card rounded-[24px] shadow-[--shadow-popover] p-6 max-w-[200px]">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">7-30</div>
                  <p className="text-sm text-muted-foreground">day personalized plans</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="border-y border-border bg-card py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-primary mb-1">2,000+</div>
              <p className="text-sm text-muted-foreground">Happy families</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-1">15min</div>
              <p className="text-sm text-muted-foreground">Average setup</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-1">0-24mo</div>
              <p className="text-sm text-muted-foreground">Age range</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-1">100%</div>
              <p className="text-sm text-muted-foreground">Privacy-first</p>
            </div>
          </div>
        </div>
      </section>

      {/* Generator Form Section */}
      <section id="generator-form" className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className="text-foreground mb-3"
              style={{ fontSize: "var(--text-title)", fontWeight: "var(--font-weight-medium)" }}
            >
              Get your personalized schedule
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto" style={{ fontSize: "var(--text-base)" }}>
              Answer a few simple questions and we'll create a customized sleep schedule tailored to your baby's age and routine.
            </p>
          </div>

          <SleepCard>
            <SleepCardContent className="p-8 md:p-10">
              <div className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <SleepLabel htmlFor="childAge">What is your child's age?</SleepLabel>
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

                  <div className="space-y-3">
                    <SleepLabel htmlFor="napsPerDay">How many naps per day?</SleepLabel>
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
                  <div className="space-y-3">
                    <SleepLabel htmlFor="wakeTime">Morning wake time</SleepLabel>
                    <SleepInput
                      id="wakeTime"
                      type="time"
                      value={wakeTime}
                      onChange={(e) => setWakeTime(e.target.value)}
                    />
                  </div>

                  <div className="space-y-3">
                    <SleepLabel htmlFor="bedtimeGoal">Ideal bedtime</SleepLabel>
                    <SleepInput
                      id="bedtimeGoal"
                      type="time"
                      value={bedtimeGoal}
                      onChange={(e) => setBedtimeGoal(e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex items-start gap-3 p-5 bg-muted/50 rounded-[20px]">
                  <SleepCheckbox
                    id="earlyRiser"
                    checked={earlyRiser}
                    onCheckedChange={(checked) => setEarlyRiser(checked === true)}
                  />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="earlyRiser"
                      className="cursor-pointer"
                      style={{ fontSize: "var(--text-base)", fontWeight: "var(--font-weight-medium)" }}
                    >
                      My baby is an early riser or takes short naps
                    </label>
                    <p className="text-muted-foreground" style={{ fontSize: "var(--text-small)" }}>
                      We'll adjust the wake windows to better suit your baby's natural rhythm
                    </p>
                  </div>
                </div>

                <SleepButton variant="primary" size="lg" className="w-full" onClick={handleGetSchedule}>
                  <Clock className="w-5 h-5" />
                  Create my schedule
                </SleepButton>

                <p className="text-center text-muted-foreground" style={{ fontSize: "var(--text-small)" }}>
                  No account required · Instant results · Privacy protected
                </p>
              </div>
            </SleepCardContent>
          </SleepCard>
        </div>
      </section>

      {/* Preview Example Section */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className="text-foreground mb-3"
              style={{ fontSize: "var(--text-title)", fontWeight: "var(--font-weight-medium)" }}
            >
              See what you'll get
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto" style={{ fontSize: "var(--text-base)" }}>
              Preview your personalized schedule before choosing a plan
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            <SleepCard className="lg:col-span-2">
              <SleepCardHeader>
                <SleepCardTitle>Your day at a glance</SleepCardTitle>
                <SleepCardDescription>Customized to your baby's age and rhythm</SleepCardDescription>
              </SleepCardHeader>
              <SleepCardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-muted/50 rounded-[16px]">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-sm font-medium text-primary">☀️</span>
                      </div>
                      <span style={{ fontSize: "var(--text-base)" }}>Morning wake</span>
                    </div>
                    <span className="font-medium" style={{ fontSize: "var(--text-base)" }}>7:00 AM</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-muted/50 rounded-[16px]">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-sm font-medium text-primary">🌙</span>
                      </div>
                      <span style={{ fontSize: "var(--text-base)" }}>First nap</span>
                    </div>
                    <span className="font-medium" style={{ fontSize: "var(--text-base)" }}>9:15 AM</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-muted/50 rounded-[16px]">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-sm font-medium text-primary">🌙</span>
                      </div>
                      <span style={{ fontSize: "var(--text-base)" }}>Second nap</span>
                    </div>
                    <span className="font-medium" style={{ fontSize: "var(--text-base)" }}>12:30 PM</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-muted/50 rounded-[16px]">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-sm font-medium text-primary">✨</span>
                      </div>
                      <span style={{ fontSize: "var(--text-base)" }}>Bedtime</span>
                    </div>
                    <span className="font-medium" style={{ fontSize: "var(--text-base)" }}>7:30 PM</span>
                  </div>
                </div>
              </SleepCardContent>
            </SleepCard>

            <SleepCard>
              <SleepCardHeader>
                <SleepCardTitle>Plus guidance</SleepCardTitle>
                <SleepCardDescription>Everything you need</SleepCardDescription>
              </SleepCardHeader>
              <SleepCardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span style={{ fontSize: "var(--text-small)" }}>Wake window recommendations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span style={{ fontSize: "var(--text-small)" }}>Bedtime routine checklist</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span style={{ fontSize: "var(--text-small)" }}>Troubleshooting tips</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span style={{ fontSize: "var(--text-small)" }}>Printable PDF</span>
                  </li>
                </ul>
              </SleepCardContent>
            </SleepCard>
          </div>

          <div className="text-center">
            <button
              className="inline-flex items-center gap-2 text-primary hover:underline transition-colors"
              style={{ fontSize: "var(--text-base)", fontWeight: "var(--font-weight-medium)" }}
              onClick={() => {
                document.getElementById('choose-plan')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Choose your plan
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Choose Your Plan Section */}
      <section id="choose-plan" className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className="text-foreground mb-3"
              style={{ fontSize: "var(--text-title)", fontWeight: "var(--font-weight-medium)" }}
            >
              Choose the right plan for your family
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto" style={{ fontSize: "var(--text-base)" }}>
              Both plans include personalized schedules. Choose based on how much support you need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto mb-8">
            <SleepCard className="relative">
              <SleepCardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-medium text-foreground mb-2">7-Day Starter</h3>
                    <p className="text-muted-foreground" style={{ fontSize: "var(--text-small)" }}>
                      Perfect for trying a structured approach
                    </p>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckSquare className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span style={{ fontSize: "var(--text-small)" }}>7 days of custom schedules</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckSquare className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span style={{ fontSize: "var(--text-small)" }}>Basic wake windows</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckSquare className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span style={{ fontSize: "var(--text-small)" }}>Printable PDF guide</span>
                    </li>
                  </ul>
                  <SleepButton variant="outline" className="w-full">
                    Start with 7 days
                  </SleepButton>
                </div>
              </SleepCardContent>
            </SleepCard>

            <SleepCard className="relative border-2 border-primary shadow-lg">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <SleepChip variant="selected" className="shadow-md">
                  <Star className="w-3 h-3 fill-current" />
                  Most popular
                </SleepChip>
              </div>
              <SleepCardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-medium text-foreground mb-2">30-Day Extended</h3>
                    <p className="text-muted-foreground" style={{ fontSize: "var(--text-small)" }}>
                      Build lasting sleep habits with comprehensive support
                    </p>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckSquare className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span style={{ fontSize: "var(--text-small)" }}>30 days of custom schedules</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckSquare className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span style={{ fontSize: "var(--text-small)" }}>Detailed guidance & flexibility</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckSquare className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span style={{ fontSize: "var(--text-small)" }}>Common issues + solutions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckSquare className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span style={{ fontSize: "var(--text-small)" }}>Printable PDF guide</span>
                    </li>
                  </ul>
                  <SleepButton variant="primary" className="w-full">
                    Get 30-day plan
                  </SleepButton>
                </div>
              </SleepCardContent>
            </SleepCard>
          </div>

          <SleepCard className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="compare" className="border-0">
                <AccordionTrigger className="hover:no-underline px-8 py-5">
                  <span style={{ fontSize: "var(--text-base)", fontWeight: "var(--font-weight-medium)" }}>
                    Compare plans in detail
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="font-medium mb-3" style={{ fontSize: "var(--text-base)" }}>7-Day Starter</p>
                      <p className="text-muted-foreground leading-relaxed" style={{ fontSize: "var(--text-small)" }}>
                        Great for parents who want to test a schedule-based approach. Includes one week of age-appropriate schedules with basic wake window guidance and a simple bedtime routine.
                      </p>
                    </div>
                    <div>
                      <p className="font-medium mb-3" style={{ fontSize: "var(--text-base)" }}>30-Day Extended</p>
                      <p className="text-muted-foreground leading-relaxed" style={{ fontSize: "var(--text-small)" }}>
                        Recommended for building consistent, long-term sleep habits. Includes four weeks of schedules with detailed troubleshooting, flexible adjustments for growth spurts, and comprehensive strategies for common sleep challenges.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </SleepCard>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary/5 to-secondary/50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className="text-foreground mb-3"
              style={{ fontSize: "var(--text-title)", fontWeight: "var(--font-weight-medium)" }}
            >
              Trusted by parents everywhere
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "Finally, a schedule that actually works with our routine. The flexibility is perfect.",
                author: "Sarah M.",
                detail: "Mom of 8-month-old"
              },
              {
                quote: "Clear, simple, and realistic. No overwhelming rules, just practical guidance.",
                author: "James K.",
                detail: "Dad of twin toddlers"
              },
              {
                quote: "The instant preview helped me see if it would fit before committing. Love that feature!",
                author: "Emma L.",
                detail: "Mom of 5-month-old"
              }
            ].map((testimonial, i) => (
              <SleepCard key={i}>
                <SleepCardContent className="p-6">
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-foreground mb-4 leading-relaxed" style={{ fontSize: "var(--text-small)" }}>
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-medium" style={{ fontSize: "var(--text-small)" }}>{testimonial.author}</p>
                    <p className="text-muted-foreground" style={{ fontSize: "var(--text-label)" }}>{testimonial.detail}</p>
                  </div>
                </SleepCardContent>
              </SleepCard>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className="text-foreground mb-3"
              style={{ fontSize: "var(--text-title)", fontWeight: "var(--font-weight-medium)" }}
            >
              Common questions
            </h2>
            <p className="text-muted-foreground" style={{ fontSize: "var(--text-base)" }}>
              Everything you need to know about our sleep schedules
            </p>
          </div>

          <SleepCard>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="q1" className="border-border">
                <AccordionTrigger className="px-6 md:px-8">What age is this suitable for?</AccordionTrigger>
                <AccordionContent className="px-6 md:px-8">
                  <p style={{ fontSize: "var(--text-small)" }} className="text-foreground leading-relaxed">
                    Our schedules are designed for babies and toddlers from newborn to 24+ months. Each age range gets specific wake window recommendations and nap timing appropriate for their developmental stage.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q2" className="border-border">
                <AccordionTrigger className="px-6 md:px-8">Is this a sleep training program?</AccordionTrigger>
                <AccordionContent className="px-6 md:px-8">
                  <p style={{ fontSize: "var(--text-small)" }} className="text-foreground leading-relaxed">
                    No. This is a gentle scheduling tool that provides age-appropriate daily routines. You maintain complete control over how you soothe and settle your baby. It's not prescriptive sleep training.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q3" className="border-border">
                <AccordionTrigger className="px-6 md:px-8">Can I customize the schedule?</AccordionTrigger>
                <AccordionContent className="px-6 md:px-8">
                  <p style={{ fontSize: "var(--text-small)" }} className="text-foreground leading-relaxed">
                    Absolutely. You set your preferred wake time, bedtime, and number of naps. The schedule adapts to your family's rhythm while maintaining age-appropriate wake windows.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q4" className="border-border">
                <AccordionTrigger className="px-6 md:px-8">What if my baby doesn't follow it exactly?</AccordionTrigger>
                <AccordionContent className="px-6 md:px-8">
                  <p style={{ fontSize: "var(--text-small)" }} className="text-foreground leading-relaxed">
                    That's completely normal and expected. Our schedules are flexible frameworks, not rigid rules. The 30-Day Plan includes adjustment strategies for when things don't go as planned.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q5" className="border-border">
                <AccordionTrigger className="px-6 md:px-8">Do I need to create an account?</AccordionTrigger>
                <AccordionContent className="px-6 md:px-8">
                  <p style={{ fontSize: "var(--text-small)" }} className="text-foreground leading-relaxed">
                    No account needed. Generate your schedule instantly and access it right away. We don't collect personal information—your privacy is our priority.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q6" className="border-border">
                <AccordionTrigger className="px-6 md:px-8">Is this medical advice?</AccordionTrigger>
                <AccordionContent className="px-6 md:px-8">
                  <p style={{ fontSize: "var(--text-small)" }} className="text-foreground leading-relaxed">
                    No. This tool provides general scheduling information based on age-appropriate wake windows. It's not medical advice. Always consult your pediatrician for health concerns.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </SleepCard>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center space-y-6">
            <div className="flex flex-wrap justify-center gap-3">
              <SleepChip variant="default">Not medical advice</SleepChip>
              <SleepChip variant="default">Privacy-first</SleepChip>
              <SleepChip variant="default">Gentle approach</SleepChip>
              <SleepChip variant="default">No guarantees</SleepChip>
              <SleepChip variant="default">Your pace</SleepChip>
            </div>
            <div className="space-y-2">
              <p className="text-muted-foreground max-w-2xl mx-auto" style={{ fontSize: "var(--text-small)" }}>
                This tool provides general scheduling guidance based on common wake window recommendations. It is not a substitute for professional medical advice or personalized sleep consultation.
              </p>
              <p className="text-muted-foreground max-w-2xl mx-auto" style={{ fontSize: "var(--text-small)" }}>
                Every baby is wonderfully unique. Use this as a flexible starting point and adjust based on your child's individual cues and needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Moon className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium text-lg">Sleep Schedule Maker</span>
              </div>
              <p className="text-muted-foreground mb-4" style={{ fontSize: "var(--text-small)" }}>
                Helping families create peaceful sleep routines with gentle, flexible schedules.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-3" style={{ fontSize: "var(--text-base)" }}>Resources</h3>
              <ul className="space-y-2">
                <li><button className="text-muted-foreground hover:text-foreground transition-colors" style={{ fontSize: "var(--text-small)" }}>How it works</button></li>
                <li><button className="text-muted-foreground hover:text-foreground transition-colors" style={{ fontSize: "var(--text-small)" }}>Sample schedules</button></li>
                <li><button className="text-muted-foreground hover:text-foreground transition-colors" style={{ fontSize: "var(--text-small)" }}>FAQ</button></li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-3" style={{ fontSize: "var(--text-base)" }}>Legal</h3>
              <ul className="space-y-2">
                <li><button className="text-muted-foreground hover:text-foreground transition-colors" style={{ fontSize: "var(--text-small)" }}>Privacy Policy</button></li>
                <li><button className="text-muted-foreground hover:text-foreground transition-colors" style={{ fontSize: "var(--text-small)" }}>Terms of Service</button></li>
                <li><button className="text-muted-foreground hover:text-foreground transition-colors" style={{ fontSize: "var(--text-small)" }}>Support</button></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center">
            <p className="text-muted-foreground" style={{ fontSize: "var(--text-small)" }}>
              © 2026 Sleep Schedule Maker. Made with care for tired parents.
            </p>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      {showMobileCTA && (
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4 shadow-[0_-8px_24px_rgba(0,0,0,0.08)] z-50 backdrop-blur-sm bg-card/95">
          <SleepButton variant="primary" size="lg" className="w-full" onClick={handleGetSchedule}>
            Create your schedule
          </SleepButton>
        </div>
      )}
    </div>
  );
}

export default Home;
