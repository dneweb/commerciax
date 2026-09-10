"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles, Award, Globe, Users, Rocket, Calendar, ArrowUpRight, Compass, ShieldCheck } from "lucide-react";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/sections/footer";
import { CALENDLY_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

// Core studio metrics
const STATS = [
  { value: "2024", label: "Founded", detail: "Ahmedabad, India" },
  { value: "20+", label: "Team Members", detail: "Senior AI engineers & builders" },
  { value: "50+", label: "Projects Shipped", detail: "Zero shelfware delivered" },
  { value: "5", label: "Countries Served", detail: "Global client footprint" },
];

// 6 Core Operating Principles
const PRINCIPLES = [
  {
    id: "outcomes",
    num: "01",
    title: "Outcomes over artifacts",
    tagline: "Working prototypes, not pretty slides.",
    summary: "We don't pitch decks, we pitch demos. Our proposals are working prototypes, not pretty slides.",
    manifesto:
      "A 40-page deck is a monument to delay. When founders come to us with ambitious concepts, we return in days with interactive builds, verified API loops, and real interfaces. If you cannot click it, measure it, or deploy it, it does not count as progress.",
    tag: "Execution Discipline",
  },
  {
    id: "ai-human",
    num: "02",
    title: "AI + Humans, always",
    tagline: "Speed of agents with rigor of senior engineers.",
    summary: "Our agents draft. Our engineers review. Clients get code that is both fast and trustworthy.",
    manifesto:
      "Autonomous agents write rapid scaffolding, unit tests, and data ingest pipelines at superhuman pace. But senior human architects review every line, stress-test security boundaries, and ensure production-grade maintainability before shipping.",
    tag: "Engineering Truth",
  },
  {
    id: "weekly-compound",
    num: "03",
    title: "Ship weekly, compound weekly",
    tagline: "Value accumulates from week one — not month six.",
    summary: "Every sprint delivers something deployable. Value accumulates from week one — not month six.",
    manifesto:
      "Waterfall engineering kills momentum. We establish continuous deployment pipelines on day one. By the end of sprint one, you have working software in your hands. Small weekly iterations compound into unassailable market moats.",
    tag: "Cadence",
  },
  {
    id: "ethical-transparent",
    num: "04",
    title: "Ethical & transparent",
    tagline: "Every decision our systems make is inspectable.",
    summary: "We are proud holders of the Ethical AI award. Every decision our systems make is inspectable.",
    manifesto:
      "Black-box algorithms that hallucinate or leak proprietary data are unacceptable in enterprise environments. We architect explainable AI workflows, deterministic guardrails, and secure data sandboxes so you retain 100% control over your intelligence layer.",
    tag: "Ethical AI Award",
  },
  {
    id: "own-outcome",
    num: "05",
    title: "Own the outcome",
    tagline: "The team that writes the strategy writes the code.",
    summary: "No handoffs to 'implementation partners.' The same team that writes the strategy writes the code.",
    manifesto:
      "Traditional consultancies sell you a partner-level vision and hand off implementation to junior subcontractors. At CommerciaX, the senior founders and lead engineers who design your architecture are the ones who build, tune, and stand behind it in production.",
    tag: "Direct Accountability",
  },
  {
    id: "stay-curious",
    num: "06",
    title: "Stay curious, stay small",
    tagline: "Lean pods and zero management overhead.",
    summary: "We keep pods lean and specialists close. No management layers between you and the people doing the work.",
    manifesto:
      "Bloated teams produce meetings; small expert pods produce software. We deliberately keep our studio compact, rigorous, and hungry. You get direct Slack channels with the builders actively writing your codebase.",
    tag: "Agile Culture",
  },
];

// Chronological Compounding Milestones
const MILESTONES = [
  {
    id: "early-2024",
    period: "Early 2024",
    location: "Ahmedabad, India",
    title: "Founded in Ahmedabad",
    description:
      "CommerciaX Infotech Pvt Ltd launches with a small, senior team and a single promise: build AI that ships — not AI that slide-decks.",
    badge: "Origin",
    metric: "Day One",
  },
  {
    id: "mid-2024",
    period: "Mid 2024",
    location: "Global Beta",
    title: "Neweb.ai Launches",
    description:
      "Our flagship AI-powered website builder and online presence manager ships to public beta. Early customers report 40%+ conversion lifts in the first week.",
    badge: "Flagship Product",
    metric: "+40% Conversion Lift",
  },
  {
    id: "late-2024",
    period: "Late 2024",
    location: "IN · US · UAE · KR · AU",
    title: "First International Clients",
    description:
      "Remote engineering and growth pods start delivering across 5 countries. First 100 project milestones successfully shipped by end of year.",
    badge: "Global Expansion",
    metric: "5 Countries",
  },
  {
    id: "early-2025",
    period: "2025",
    location: "Studio Product",
    title: "Fonda.co Launches",
    description:
      "Our AI co-founder for aspiring founders ships — covering idea validation, business plans, pitch decks, and the complete founder toolkit.",
    badge: "SaaS Studio",
    metric: "Founder Co-pilot",
  },
  {
    id: "mid-2025",
    period: "2025",
    location: "Industry Honor",
    title: "AI Pioneer Recognition",
    description:
      "Recognized alongside other AI Startup and Next Big Thing winners. 50+ total production projects delivered across 5 continents.",
    badge: "Award Winner",
    metric: "50+ Shipped",
  },
  {
    id: "today",
    period: "Today",
    location: "20-Person AI Studio",
    title: "Services, Products & Pods",
    description:
      "We're a 20-person AI-native studio — services, products, and pods — all shipping weekly. Still Day One.",
    badge: "Present Day",
    metric: "Still Day One",
  },
];

export default function AboutPage() {
  const [activePrincipleId, setActivePrincipleId] = useState<string>(PRINCIPLES[0].id);
  const [activeMilestoneId, setActiveMilestoneId] = useState<string>(MILESTONES[0].id);

  const activePrinciple = PRINCIPLES.find((p) => p.id === activePrincipleId) || PRINCIPLES[0];
  const activeMilestone = MILESTONES.find((m) => m.id === activeMilestoneId) || MILESTONES[0];

  return (
    <div className="relative min-h-screen w-full text-slate-900 bg-[#fcfbf9] font-sans font-light selection:bg-blue-500/30 overflow-x-clip">
      {/* Top Background Atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 right-0 h-[600px] -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(37,99,235,0.07)_0%,rgba(248,250,252,0)_100%)]"
      />

      {/* Persistent Navigation */}
      <div className="px-6 py-6 md:px-12 md:py-8">
        <Navbar />
      </div>

      {/* ========================================================================= */}
      {/* SECTION 1: HERO / OUR STORY                                               */}
      {/* ========================================================================= */}
      <section
        aria-label="Our Story"
        className="relative w-full pt-12 pb-20 sm:pt-16 sm:pb-24 md:pt-20 md:pb-28 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto"
      >
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20">
          {/* Section Indicator */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/[0.04] border border-slate-200/80 text-slate-700 text-xs font-mono mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            <span>Our Story · CommerciaX Infotech</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-serif font-light tracking-tight leading-[1.06] text-slate-950 mb-8">
            Where AI innovation sparks <br className="hidden sm:inline" />
            <span className="italic text-blue-600 font-light pr-2">new possibilities.</span>
          </h1>

          {/* Opening Narrative */}
          <p className="text-slate-600 font-sans font-light text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            We are CommerciaX Infotech — a 20-person AI-native studio founded in 2024 in Ahmedabad. Senior engineers, product builders, and AI experts shipping intelligent software, online-presence products, and dedicated pods for founders and enterprises who ship, not ship-it-laters.
          </p>
        </div>

        {/* Architectural 4-Stat Strip */}
        <div className="w-full rounded-2xl md:rounded-3xl border border-slate-200/85 bg-white/80 backdrop-blur-md shadow-[0_12px_36px_-10px_rgba(15,23,42,0.05),0_1px_3px_rgba(15,23,42,0.02)] overflow-hidden">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-slate-200/75">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="group p-6 sm:p-8 md:p-10 flex flex-col justify-between transition-colors duration-200 hover:bg-slate-50/70"
              >
                <div className="text-xs uppercase tracking-[0.18em] text-slate-400 font-mono mb-3">
                  {stat.label}
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-slate-950 tracking-tight mb-2 group-hover:text-blue-600 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-500 font-sans font-light">
                    {stat.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: OUR MISSION (Editorial Manifesto)                              */}
      {/* ========================================================================= */}
      <section
        aria-label="Our Mission"
        className="relative w-full py-20 sm:py-24 md:py-32 px-6 md:px-12 lg:px-16 bg-[#f8f7f4] border-t border-b border-slate-200/70"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Context: Entity Details & Specialization */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-blue-600">
                <span>The Mission</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light tracking-tight leading-[1.12] text-slate-950">
                At CommerciaX Infotech, we specialize in leveraging advanced technologies.
              </h2>

              <p className="text-slate-600 font-sans font-light text-base sm:text-lg leading-relaxed">
                At CommerciaX Infotech Pvt Ltd, we specialize in leveraging advanced technologies to amplify brand presence and propel business growth through innovative strategies.
              </p>

              <div className="pt-2 flex items-center gap-3 text-xs text-slate-500 font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Incorporated & headquartered in Ahmedabad, India</span>
              </div>
            </div>

            {/* Right Context: The Direct Manifesto Pull-Quote */}
            <div className="lg:col-span-7">
              <div className="relative p-8 sm:p-12 md:p-14 rounded-3xl bg-white border border-slate-200/90 shadow-[0_20px_50px_-15px_rgba(15,23,42,0.06)]">
                {/* Decorative quote mark */}
                <div
                  aria-hidden="true"
                  className="select-none pointer-events-none absolute -top-5 left-8 text-7xl font-serif text-blue-500/20 leading-none"
                >
                  “
                </div>

                <blockquote className="relative z-10 text-xl sm:text-2xl md:text-3xl font-serif font-light text-slate-900 leading-relaxed tracking-tight mb-8">
                  We believe AI shouldn&apos;t be a science project. <br className="hidden sm:inline" />
                  It should ship. It should compound. <br className="hidden sm:inline" />
                  It should turn a founder&apos;s vision into a product customers actually use — <span className="text-blue-600 italic">measured in outcomes, not experiments.</span>
                </blockquote>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-slate-100 text-slate-600 font-sans text-sm">
                  <span className="font-medium text-slate-900">
                    — Pioneering tomorrow with AI&apos;s transformative power.
                  </span>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-mono">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Ethical AI Standard</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: WHAT WE BELIEVE (Interactive Principles Explorer)              */}
      {/* ========================================================================= */}
      <section
        aria-label="What We Believe"
        className="relative w-full py-20 sm:py-24 md:py-32 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto"
      >
        <div className="mb-14 sm:mb-18">
          <div className="text-xs uppercase tracking-[0.2em] text-slate-400 font-mono mb-3">
            What We Believe
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-light tracking-tight leading-[1.08] text-slate-950">
            Five principles, <span className="italic text-blue-600">zero exceptions.</span>
          </h2>
          <p className="text-slate-600 font-sans font-light text-base sm:text-lg max-w-xl mt-4">
            How we write software, structure engagements, and ensure every client receives partner-level velocity and code quality.
          </p>
        </div>

        {/* Dual-Panel Interactive Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Interactive Selector List */}
          <div className="lg:col-span-5 space-y-2.5">
            {PRINCIPLES.map((principle) => {
              const isSelected = activePrincipleId === principle.id;

              return (
                <button
                  key={principle.id}
                  onClick={() => setActivePrincipleId(principle.id)}
                  className={cn(
                    "w-full text-left p-5 sm:p-6 rounded-2xl border transition-all duration-200 cursor-pointer flex items-start justify-between gap-4 group",
                    isSelected
                      ? "bg-white border-blue-500/80 shadow-[0_8px_30px_-8px_rgba(37,99,235,0.2)] ring-1 ring-blue-500/20"
                      : "bg-white/60 hover:bg-white border-slate-200/80 hover:border-slate-300"
                  )}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={cn(
                        "text-xs font-mono font-medium pt-0.5 transition-colors",
                        isSelected ? "text-blue-600 font-semibold" : "text-slate-400 group-hover:text-slate-700"
                      )}
                    >
                      {principle.num}
                    </span>
                    <div>
                      <h3
                        className={cn(
                          "text-base sm:text-lg font-medium transition-colors mb-1",
                          isSelected ? "text-slate-950" : "text-slate-700 group-hover:text-slate-950"
                        )}
                      >
                        {principle.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 font-light line-clamp-1">
                        {principle.tagline}
                      </p>
                    </div>
                  </div>

                  <ArrowRight
                    className={cn(
                      "w-4 h-4 shrink-0 transition-transform duration-200 pt-0.5",
                      isSelected
                        ? "text-blue-600 translate-x-1"
                        : "text-slate-300 group-hover:text-slate-500 group-hover:translate-x-0.5"
                    )}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Principle Deep-Dive Panel */}
          <div className="lg:col-span-7">
            <div className="sticky top-24 rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-12 md:p-14 shadow-[0_20px_60px_-15px_rgba(15,23,42,0.06)]">
              <div className="flex items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 border border-blue-200/60">
                    {activePrinciple.num}
                  </span>
                  <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
                    {activePrinciple.tag}
                  </span>
                </div>
                <div className="text-xs text-slate-400 font-mono">
                  Principle {activePrinciple.num} of 06
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-slate-950 tracking-tight mb-4">
                {activePrinciple.title}
              </h3>

              <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-100 text-blue-900 font-medium text-sm sm:text-base mb-6">
                “{activePrinciple.summary}”
              </div>

              <div className="space-y-4 text-slate-600 font-sans font-light text-sm sm:text-base leading-relaxed">
                <p>{activePrinciple.manifesto}</p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span className="inline-flex items-center gap-1.5 text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  Zero exceptions policy
                </span>
                <span>CommerciaX Standard</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: HOW WE GOT HERE (Interactive Compounding Timeline)             */}
      {/* ========================================================================= */}
      <section
        aria-label="How We Got Here"
        className="relative w-full py-20 sm:py-24 md:py-32 px-6 md:px-12 lg:px-16 bg-[#f8f7f4] border-t border-slate-200/70"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 sm:mb-20">
            <div className="text-xs uppercase tracking-[0.2em] text-slate-400 font-mono mb-3">
              How We Got Here
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-light tracking-tight leading-[1.08] text-slate-950">
              One year of <span className="italic text-blue-600">compounding.</span>
            </h2>
            <p className="text-slate-600 font-sans font-light text-base sm:text-lg max-w-xl mt-4">
              From our founding in Ahmedabad to shipping software for clients across five continents.
            </p>
          </div>

          {/* Interactive Milestone Timeline */}
          <div className="relative">
            {/* Center spine on desktop */}
            <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-slate-200" />

            <div className="space-y-8 sm:space-y-12">
              {MILESTONES.map((milestone, index) => {
                const isEven = index % 2 === 0;
                const isSelected = activeMilestoneId === milestone.id;

                return (
                  <div
                    key={milestone.id}
                    onClick={() => setActiveMilestoneId(milestone.id)}
                    className={cn(
                      "relative flex flex-col lg:flex-row items-center gap-6 lg:gap-12 cursor-pointer group",
                      isEven ? "lg:flex-row-reverse" : ""
                    )}
                  >
                    {/* Content Box (Half Width) */}
                    <div className="w-full lg:w-1/2">
                      <div
                        className={cn(
                          "p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl border transition-all duration-200 bg-white",
                          isSelected
                            ? "border-blue-500 shadow-[0_16px_40px_-10px_rgba(37,99,235,0.2)] ring-1 ring-blue-500/20"
                            : "border-slate-200/80 hover:border-slate-300 shadow-[0_4px_16px_-4px_rgba(15,23,42,0.04)]"
                        )}
                      >
                        <div className="flex items-center justify-between gap-3 mb-3">
                          <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700">
                            {milestone.period}
                          </span>
                          <span className="text-xs text-slate-400 font-mono">
                            {milestone.location}
                          </span>
                        </div>

                        <h3 className="text-xl sm:text-2xl font-serif font-light text-slate-950 tracking-tight mb-3 group-hover:text-blue-600 transition-colors">
                          {milestone.title}
                        </h3>

                        <p className="text-slate-600 font-sans font-light text-sm sm:text-base leading-relaxed mb-4">
                          {milestone.description}
                        </p>

                        <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono">
                          <span className="text-blue-600 font-medium">{milestone.badge}</span>
                          <span className="text-slate-400">{milestone.metric}</span>
                        </div>
                      </div>
                    </div>

                    {/* Timeline Node Dot (Centered on desktop) */}
                    <div className="hidden lg:flex items-center justify-center absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#f8f7f4]">
                      <div
                        className={cn(
                          "w-3.5 h-3.5 rounded-full border-2 transition-all duration-200",
                          isSelected
                            ? "bg-blue-600 border-white ring-4 ring-blue-500/20 scale-125"
                            : "bg-slate-300 border-white group-hover:bg-blue-400"
                        )}
                      />
                    </div>

                    {/* Empty Half Column for alternating layout */}
                    <div className="hidden lg:block w-1/2" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: FINAL INVITATION / CALL TO ACTION                              */}
      {/* ========================================================================= */}
      <section
        aria-label="Work With Us"
        className="relative w-full py-20 sm:py-24 md:py-32 px-6 md:px-12 lg:px-16 max-w-5xl mx-auto text-center"
      >
        <div className="p-8 sm:p-14 md:p-20 rounded-3xl md:rounded-[2.5rem] bg-white border border-slate-200/90 shadow-[0_25px_70px_-20px_rgba(15,23,42,0.08)] relative overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(37,99,235,0.08)_0%,transparent_100%)]"
          />

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-mono mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            <span>Still Day One</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-tight leading-[1.08] text-slate-950 mb-6">
            Ready to build something <br className="hidden sm:inline" />
            <span className="italic text-blue-600">that compounds?</span>
          </h2>

          <p className="text-slate-600 font-sans font-light text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Whether you need custom AI development, high-converting presence systems, or a dedicated pod, let&apos;s talk about what we can ship for you next week.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-sans text-sm sm:text-[15px] font-medium tracking-wide transition-all shadow-[0_4px_20px_-2px_rgba(37,99,235,0.4)] hover:shadow-[0_8px_25px_-2px_rgba(37,99,235,0.5)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] cursor-pointer"
            >
              <span>Book an Intro Call</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
            </Link>

            <Link
              href="/#services"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-slate-100/80 hover:bg-slate-200/80 active:bg-slate-200 text-slate-800 text-sm sm:text-[15px] font-medium tracking-wide transition-colors"
            >
              <span>Explore Services</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: FOOTER                                                         */}
      {/* ========================================================================= */}
      <Footer />
    </div>
  );
}
