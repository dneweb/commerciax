"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface StepItem {
  num: string;
  name: string;
  desc: string;
  isActive: boolean;
}

const STEPS: StepItem[] = [
  {
    num: "01",
    name: "Idea",
    desc: "Validate the opportunity",
    isActive: true,
  },
  {
    num: "02",
    name: "Research",
    desc: "Market, users, competition",
    isActive: false,
  },
  {
    num: "03",
    name: "Design",
    desc: "Product & UI/UX",
    isActive: false,
  },
  {
    num: "04",
    name: "Engineering",
    desc: "Build with AI-native stack",
    isActive: false,
  },
  {
    num: "05",
    name: "AI Integration",
    desc: "Intelligence, automation, agents",
    isActive: false,
  },
  {
    num: "06",
    name: "Go-to-Market",
    desc: "Positioning, growth systems",
    isActive: false,
  },
  {
    num: "07",
    name: "Launch",
    desc: "Live. Iterate. Scale.",
    isActive: true,
  },
];

const METRICS = [
  { value: "8–14", label: "WEEKS TO LAUNCH" },
  { value: "3x", label: "FASTER TIME TO MARKET" },
  { value: "50+", label: "PRODUCTS BUILT" },
  { value: "90%", label: "REACH PRODUCT-MARKET FIT" },
];

export function ServiceLaunch() {
  const [activeStep, setActiveStep] = useState<string>("01");

  return (
    <div className="w-full">
      {/* Main Top Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 xl:gap-8 items-center mb-3 lg:mb-4">
        {/* Left Column: Headline, Narrative & CTAs */}
        <div className="lg:col-span-4 xl:col-span-4 flex flex-col justify-between pt-1">
          <div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl xl:text-[4.25rem] font-serif font-light tracking-tight leading-[1.0] text-slate-950 mb-3 sm:mb-6">
              SaaS Product
              <br />
              Studio
              <span className="inline-block w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-blue-600 ml-1.5 sm:ml-2 align-baseline" />
            </h3>

            <p className="text-slate-600 font-sans font-light text-sm sm:text-base lg:text-lg xl:text-[1.2rem] leading-relaxed mb-4 sm:mb-7 max-w-lg">
              From idea to a live SaaS product in 8–14 weeks. We combine strategy,
              design, engineering and AI to build products that scale.
            </p>

            <div className="flex flex-wrap items-center gap-3 sm:gap-5">
              <Link
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 sm:gap-2.5 px-6 sm:px-8 py-3 sm:py-3.5 md:py-4 rounded-full bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-sans text-xs sm:text-sm md:text-[15px] font-medium tracking-wide transition-all shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25),0_4px_20px_-2px_rgba(37,99,235,0.4)] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.35),0_8px_25px_-2px_rgba(37,99,235,0.5)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] shrink-0"
              >
                <span>Turn your idea into a product</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
              </Link>

              <Link
                href="#work"
                className="inline-flex items-center gap-2 text-xs sm:text-sm md:text-base font-sans font-medium text-slate-800 hover:text-blue-700 transition-colors py-2 group"
              >
                <span>See our products</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Area: Exact Replication of Reference Diagram */}
        <div className="lg:col-span-8 xl:col-span-8 relative w-full flex flex-col justify-center pt-1">
          {/* Layout: 7-Step Timeline (Left) + Spiral Trajectory S-Curve (Right) */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-6 xl:gap-8 w-full">
            {/* 7-Step Vertical Process Timeline - Form-fitted to content to remove inner dead space */}
            <div className="w-full md:w-auto md:shrink-0 relative pl-1">
              {/* Continuous Vertical Timeline Track Line */}
              <div className="absolute left-[40px] sm:left-[48px] md:left-[52px] top-3 bottom-3 w-[1px] bg-slate-200/90" />

              <div className="flex flex-col gap-2.5 sm:gap-3.5 md:gap-4 w-fit">
                {STEPS.map((step) => {
                  const isSelected = activeStep === step.num;
                  const isHighlighted = step.isActive || isSelected;

                  return (
                    <div
                      key={step.num}
                      onClick={() => setActiveStep(step.num)}
                      className="relative flex items-center gap-2.5 sm:gap-3.5 group cursor-pointer select-none"
                    >
                      {/* Step Number */}
                      <span className="text-[11px] sm:text-xs font-mono font-medium text-slate-400 w-4 sm:w-5 text-right shrink-0">
                        {step.num}
                      </span>

                      {/* Node Circle */}
                      <div className="relative z-10 flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 shrink-0">
                        {isHighlighted ? (
                          <>
                            {/* Outer soft blue halo */}
                            <div className="absolute inset-0 rounded-full bg-blue-500/15 ring-1 ring-blue-500/20" />
                            {/* Inner solid blue dot */}
                            <div className="relative w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.4)]" />
                          </>
                        ) : (
                          /* Hollow circle with dark slate outline */
                          <div className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full border-2 border-slate-800 bg-white group-hover:border-blue-600 transition-colors" />
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div
                          className={`text-xs sm:text-sm md:text-[15px] font-sans font-semibold tracking-tight leading-snug transition-colors ${
                            isHighlighted
                              ? "text-slate-900"
                              : "text-slate-800 group-hover:text-slate-950"
                          }`}
                        >
                          {step.name}
                        </div>
                        <div className="text-[10px] sm:text-[11px] md:text-xs font-sans font-light text-slate-500 leading-tight mt-0.5 whitespace-nowrap">
                          {step.desc}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Spiral Trajectory + S-Curve Diagram */}
            <div className="flex-1 relative w-full aspect-[480/420] max-w-[500px] xl:max-w-[550px] mx-auto select-none">
              <svg
                viewBox="0 0 480 420"
                className="w-full h-full overflow-visible select-none pointer-events-none"
                fill="none"
              >
                <defs>
                  {/* Soft blue radial gradient bloom for IDEAS and LIVE PRODUCT nodes */}
                  <radialGradient id="node-blue-glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.32" />
                    <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.14" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Faint Concentric Spiral Rings centered around (260, 205) */}
                <circle
                  cx="260"
                  cy="205"
                  r="58"
                  stroke="#93c5fd"
                  strokeOpacity="0.28"
                  strokeWidth="0.85"
                  fill="none"
                />
                <circle
                  cx="260"
                  cy="205"
                  r="112"
                  stroke="#93c5fd"
                  strokeOpacity="0.22"
                  strokeWidth="0.85"
                  fill="none"
                />
                <circle
                  cx="260"
                  cy="205"
                  r="168"
                  stroke="#93c5fd"
                  strokeOpacity="0.16"
                  strokeWidth="0.85"
                  fill="none"
                />
                <circle
                  cx="260"
                  cy="205"
                  r="224"
                  stroke="#93c5fd"
                  strokeOpacity="0.11"
                  strokeWidth="0.85"
                  fill="none"
                />

                {/* Smooth Single Cubic Sigmoid S-Curve from IDEAS (95, 325) to LIVE PRODUCT (375, 65) */}
                <path
                  d="M 95 325 C 215 325, 255 65, 375 65"
                  stroke="#2563eb"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className="drop-shadow-[0_2px_10px_rgba(37,99,235,0.35)]"
                />

                {/* Bottom-Left Node: IDEAS */}
                <circle cx="95" cy="325" r="26" fill="url(#node-blue-glow)" />
                <circle cx="95" cy="325" r="6.5" fill="#2563eb" />

                {/* Top-Right Node: LIVE PRODUCT */}
                <circle cx="375" cy="65" r="26" fill="url(#node-blue-glow)" />
                <circle cx="375" cy="65" r="6.5" fill="#2563eb" />
              </svg>

              {/* Node Labels in absolute positioning */}
              {/* IDEAS Label above (95, 325) */}
              <div
                className="absolute -translate-x-1/2 text-[11px] sm:text-xs font-sans font-bold tracking-[0.22em] text-slate-900 uppercase select-none pointer-events-none"
                style={{ left: `${(95 / 480) * 100}%`, top: `${((325 - 46) / 420) * 100}%` }}
              >
                IDEAS
              </div>

              {/* LIVE PRODUCT Label to the right of (375, 65) */}
              <div
                className="absolute text-[11px] sm:text-xs font-sans font-bold tracking-[0.18em] text-slate-900 uppercase leading-[1.3] select-none pointer-events-none pl-3.5"
                style={{ left: `${(375 / 480) * 100}%`, top: `${((65 - 16) / 420) * 100}%` }}
              >
                LIVE
                <br />
                PRODUCT
              </div>

              {/* Handwritten Marker Callout: "Ideas into a better tomorrow." matching reference image */}
              <div
                className="absolute select-none pointer-events-none -rotate-2 flex flex-col items-start"
                style={{
                  left: `${(356 / 480) * 100}%`,
                  top: `${(180 / 420) * 100}%`,
                }}
              >
                <div
                  style={{ fontFamily: "'Caveat', cursive, sans-serif" }}
                  className="text-2xl sm:text-[27px] font-medium text-slate-600/95 leading-[1.05] tracking-tight select-none"
                >
                  <div>Ideas</div>
                  <div>into a</div>
                  <div>better</div>
                  <div>tomorrow.</div>
                </div>

                {/* Hand-drawn underline strictly below 'tomorrow.' matching reference image */}
                <svg
                  viewBox="0 0 115 16"
                  className="w-[100px] sm:w-[115px] h-3.5 mt-0.5 overflow-visible ml-1.5"
                  fill="none"
                >
                  <path
                    d="M 6 13 L 110 2.5"
                    stroke="#52525b"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Proof Metrics Strip */}
      <div className="pt-3 sm:pt-4 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6 items-start">
        {METRICS.map((metric, idx) => (
          <div
            key={metric.label}
            className={`flex flex-col ${
              idx % 2 === 0 ? "pr-2" : "pl-2"
            } sm:pl-0 sm:pr-0 ${
              idx < METRICS.length - 1 ? "sm:border-r border-slate-200/80 sm:pr-4" : ""
            } ${idx > 0 ? "sm:pl-4" : ""}`}
          >
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-serif font-light text-slate-950 tracking-tight leading-none mb-1 sm:mb-1.5">
              {metric.value}
            </span>
            <span className="text-[10px] sm:text-[11px] font-sans font-medium tracking-[0.14em] uppercase text-slate-500 leading-snug">
              {metric.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
