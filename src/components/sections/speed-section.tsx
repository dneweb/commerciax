"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const TRADITIONAL_STEPS = ["Discovery", "Planning", "Development", "QA", "Launch"];
const COMMERCIAX_STEPS = ["Discovery", "Build", "Test"];

export function SpeedSection() {
  return (
    <section
      id="speed"
      aria-label="Speed to Production"
      className="relative w-full bg-[#faf8f5] text-slate-900 py-20 md:py-28 px-4 sm:px-6 md:px-8 lg:px-12 border-t border-slate-200/70 overflow-hidden font-sans font-light selection:bg-blue-500/30"
    >
      <div className="w-full max-w-[1660px] mx-auto">

        {/* 3-Column Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-start mb-16 md:mb-20">
          {/* Left Column: Huge 10x. headline, narrative & CTAs */}
          <div className="lg:col-span-4 flex flex-col justify-between pt-1">
            <div>
              {/* Massive 10x. with Blue Dot */}
              <div className="flex items-baseline">
                <span className="font-serif font-light text-[6.5rem] sm:text-[7.5rem] lg:text-[8.5rem] xl:text-[9.5rem] text-slate-950 leading-[0.88] tracking-tight">
                  10
                </span>
                <span className="font-serif font-light text-[5.5rem] sm:text-[6.5rem] lg:text-[7.5rem] xl:text-[8.5rem] text-slate-950 leading-[0.88] tracking-tight ml-0.5">
                  ×
                </span>
                <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-blue-600 ml-2 inline-block align-baseline shrink-0 shadow-[0_0_10px_rgba(37,99,235,0.4)]" />
              </div>

              {/* Subheading */}
              <h3 className="font-serif font-light text-4xl sm:text-5xl xl:text-[3.75rem] text-slate-950 leading-[1.04] tracking-tight mt-4 mb-6">
                Faster to
                <br />
                production.
              </h3>

              {/* Narrative */}
              <p className="text-slate-600 font-sans font-light text-base sm:text-lg leading-relaxed max-w-sm mb-9">
                We compress time from idea to impact. Without compromising on
                quality.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-6">
                <Link
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-sans text-sm sm:text-[15px] font-medium tracking-wide transition-all shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25),0_4px_20px_-2px_rgba(37,99,235,0.4)] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.35),0_8px_25px_-2px_rgba(37,99,235,0.5)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
                >
                  <span>See how</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
                </Link>

                <Link
                  href="#contact"
                  className="group inline-flex items-center gap-2 text-sm font-sans font-medium text-slate-800 hover:text-blue-600 transition-colors py-2"
                >
                  <span>Talk to our team</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* Center & Right Area: Synchronized Timeline Rows */}
          <div className="lg:col-span-8 flex flex-col">
            {/* Top Right Handwritten Callout Accent */}
            <div className="relative flex justify-end pr-2 mb-4">
              <div className="transform -rotate-[8deg] select-none text-right">
                <span className="block font-['Caveat',_cursive] text-2xl sm:text-[1.75rem] text-slate-500 font-medium tracking-wide leading-tight">
                  From
                </span>
                <span className="block font-['Caveat',_cursive] text-2xl sm:text-[1.75rem] text-slate-500 font-medium tracking-wide leading-tight">
                  months
                </span>
                <span className="block font-['Caveat',_cursive] text-2xl sm:text-[1.75rem] text-slate-600 font-semibold tracking-wide leading-tight">
                  to momentum.
                </span>
                {/* Hand-drawn underline swoop */}
                <svg
                  viewBox="0 0 140 14"
                  className="w-32 h-3.5 stroke-slate-400 ml-auto mt-0.5"
                  fill="none"
                >
                  <path
                    d="M 2 7 C 30 13, 100 2, 138 8"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>

            {/* Row 1: Traditional Development */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start pb-12 sm:pb-16">
              {/* Left 8 Cols: Title + Timeline */}
              <div className="lg:col-span-8 flex flex-col">
                <div className="text-[11px] font-sans font-medium tracking-[0.25em] text-slate-900 uppercase mb-8">
                  TRADITIONAL DEVELOPMENT
                </div>

                {/* Track Line & Nodes */}
                <div className="relative w-full">
                  {/* Line connects exactly from first dot center to last dot center */}
                  <div className="absolute top-[5px] left-10 right-10 h-[1.5px] bg-slate-200" />

                  {/* 5 Nodes */}
                  <div className="relative flex justify-between items-start w-full">
                    {TRADITIONAL_STEPS.map((step) => (
                      <div
                        key={step}
                        className="flex flex-col items-center w-20 text-center"
                      >
                        <span className="w-2.5 h-2.5 rounded-full bg-slate-400 border-2 border-white shadow-sm z-10" />
                        <span className="mt-3 text-xs sm:text-[13px] font-sans font-medium text-slate-600 whitespace-nowrap">
                          {step}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right 4 Cols: Timeline Header + 6-12 Months */}
              <div className="lg:col-span-4 lg:border-l border-slate-200/80 lg:pl-8 xl:pl-10 flex flex-col">
                <div className="text-xs font-sans text-slate-400 font-light tracking-wide mb-6">
                  Timeline
                </div>
                <div className="font-serif font-light text-3xl sm:text-4xl xl:text-[3.25rem] text-slate-400 leading-[1.05] tracking-tight">
                  6–12
                  <br />
                  Months
                </div>
              </div>
            </div>

            {/* Row 2: CommerciaX Approach */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Left 8 Cols: Title + Timeline */}
              <div className="lg:col-span-8 flex flex-col">
                <div className="text-[11px] font-sans font-medium tracking-[0.25em] text-slate-900 uppercase mb-8">
                  COMMERCIAX APPROACH
                </div>

                {/* Track Line & Nodes */}
                <div className="relative w-full">
                  {/* Container sized so Launch aligns with Traditional QA, and the line ends precisely at Launch dot */}
                  <div className="relative w-[calc(75%+20px)]">
                    {/* Blue line running from Discovery dot center (left-10) to Launch dot center (right-10) */}
                    <div className="absolute top-[5px] left-10 right-10 h-[2px] bg-blue-600" />

                    {/* 4 Nodes */}
                    <div className="relative flex justify-between items-start w-full">
                      {COMMERCIAX_STEPS.map((step) => (
                        <div
                          key={step}
                          className="flex flex-col items-center w-20 text-center"
                        >
                          <span className="w-2.5 h-2.5 rounded-full bg-blue-600 border-2 border-white shadow-sm z-10" />
                          <span className="mt-3 text-xs sm:text-[13px] font-sans font-medium text-slate-900 whitespace-nowrap">
                            {step}
                          </span>
                        </div>
                      ))}

                      {/* Node 4: Launch — line ends cleanly here, with soft borderless gradient glow */}
                      <div className="relative flex flex-col items-center w-20 text-center">
                        {/* Small soft borderless radial gradient glow (no circles, no borders) */}
                        <div
                          className="absolute -top-3 w-8 h-8 pointer-events-none rounded-full"
                          style={{
                            background:
                              "radial-gradient(circle, rgba(37, 99, 235, 0.45) 0%, rgba(37, 99, 235, 0.12) 50%, transparent 75%)",
                          }}
                        />

                        <span className="relative z-10 w-2.5 h-2.5 rounded-full bg-blue-600 border-2 border-white shadow-[0_0_8px_rgba(37,99,235,0.6)]" />
                        <span className="mt-3 text-xs sm:text-[13px] font-sans font-semibold text-slate-900 whitespace-nowrap">
                          Launch
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right 4 Cols: Timeline Header + Weeks */}
              <div className="lg:col-span-4 lg:border-l border-slate-200/80 lg:pl-8 xl:pl-10 flex flex-col">
                <div className="text-xs font-sans text-blue-600 font-medium tracking-wide mb-6">
                  Timeline
                </div>
                <div className="font-serif font-light text-4xl sm:text-5xl xl:text-[4.25rem] text-blue-600 leading-none tracking-tight">
                  Weeks
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Proof Metrics Strip with Vertical Dividers */}
        <div className="pt-8 pb-2 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-0 items-center">
          {/* Metric 1: 70% */}
          <div className="flex flex-col lg:pr-6 lg:border-r border-slate-200/80">
            <span className="text-3xl sm:text-4xl md:text-[2.75rem] font-serif font-light text-slate-950 tracking-tight leading-none mb-2">
              70%
            </span>
            <span className="text-[10px] sm:text-[11px] font-sans font-medium tracking-[0.2em] text-slate-500 uppercase leading-snug">
              FASTER TIME TO MARKET
            </span>
          </div>

          {/* Metric 2: 50% */}
          <div className="flex flex-col lg:px-6 lg:border-r border-slate-200/80">
            <span className="text-3xl sm:text-4xl md:text-[2.75rem] font-serif font-light text-slate-950 tracking-tight leading-none mb-2">
              50%
            </span>
            <span className="text-[10px] sm:text-[11px] font-sans font-medium tracking-[0.2em] text-slate-500 uppercase leading-snug">
              LOWER DEVELOPMENT COST
            </span>
          </div>

          {/* Metric 3: 3× */}
          <div className="flex flex-col lg:px-6 lg:border-r border-slate-200/80">
            <span className="text-3xl sm:text-4xl md:text-[2.75rem] font-serif font-light text-slate-950 tracking-tight leading-none mb-2">
              3×
            </span>
            <span className="text-[10px] sm:text-[11px] font-sans font-medium tracking-[0.2em] text-slate-500 uppercase leading-snug">
              MORE ITERATIONS
            </span>
          </div>

          {/* Metric 4: 99% */}
          <div className="flex flex-col lg:px-6 lg:border-r border-slate-200/80">
            <span className="text-3xl sm:text-4xl md:text-[2.75rem] font-serif font-light text-slate-950 tracking-tight leading-none mb-2">
              99%
            </span>
            <span className="text-[10px] sm:text-[11px] font-sans font-medium tracking-[0.2em] text-slate-500 uppercase leading-snug">
              PRODUCTION READINESS
            </span>
          </div>

          {/* Metric 5 Badge: SPEED CREATES OPPORTUNITY. with Blue Accent Dot */}
          <div className="flex items-center gap-3 lg:pl-6 col-span-2 sm:col-span-1">
            <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
            <span className="text-[10px] font-sans font-semibold tracking-[0.2em] text-slate-500 uppercase leading-snug select-none">
              SPEED
              <br />
              CREATES
              <br />
              OPPORTUNITY.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
