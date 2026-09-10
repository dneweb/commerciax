"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface MetricItem {
  id: string;
  label: string;
  value: string;
  subtext: string;
}

const METRICS: MetricItem[] = [
  {
    id: "01",
    label: "PROJECTS SHIPPED",
    value: "50+",
    subtext: "AI + WEB + GROWTH STACKS",
  },
  {
    id: "02",
    label: "COUNTRIES LIVE",
    value: "5",
    subtext: "IN · US · UAE · KR · AU",
  },
  {
    id: "03",
    label: "FASTER DELIVERY",
    value: "10×",
    subtext: "VS. TRADITIONAL STUDIOS",
  },
  {
    id: "04",
    label: "UPTIME SLA",
    value: "99.99%",
    subtext: "MONITORED 24 / 7",
  },
];

export function NumbersSection() {
  return (
    <section
      id="numbers"
      aria-label="By The Numbers"
      className="relative w-full bg-[#faf8f5] text-slate-900 py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 border-t border-slate-200/70 overflow-hidden font-sans font-light selection:bg-blue-500/30"
    >
      <div className="w-full max-w-[1720px] mx-auto flex flex-col justify-between">
        {/* 1. Top Area: Eyebrow + Huge Headline + Right Narrative & Meta */}
        <div>


          <div className="mb-14 md:mb-18">
            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.75rem] 2xl:text-[5.25rem] font-serif font-light tracking-tight leading-[1.04] text-slate-950">
              Shipped in the last
              <br />
              <span className="text-blue-600 font-normal">24</span>{" "}
              months
              <span className="text-blue-600 font-normal">.</span>
            </h2>
          </div>

          {/* 2. Middle 4-Column Stat Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 pb-16 md:pb-20">
            {METRICS.map((metric, idx) => (
              <div
                key={metric.id}
                className={`flex flex-col justify-between ${idx !== 0 ? "lg:border-l border-slate-200/70 lg:pl-8 xl:pl-10" : ""
                  } ${idx !== METRICS.length - 1 ? "lg:pr-8 xl:pr-10" : ""}`}
              >
                {/* Column Top Header: Index + Label */}
                <div className="mb-6 sm:mb-8">
                  <div className="text-[11px] xl:text-xs font-sans font-light tracking-[0.2em] text-slate-400 mb-1.5">
                    {metric.id}
                  </div>
                  <div className="text-xs sm:text-[13px] font-sans font-medium tracking-[0.18em] text-slate-600 uppercase">
                    {metric.label}
                  </div>
                </div>

                {/* Massive Serif Stat Number */}
                <div className="font-serif font-light text-6xl sm:text-7xl lg:text-[5rem] xl:text-[6.25rem] text-slate-950 tracking-tight leading-[0.95] mb-6 sm:mb-8">
                  {metric.value}
                </div>

                {/* Column Bottom Detail Label */}
                <div className="text-[10px] sm:text-[11px] font-sans font-medium tracking-[0.2em] text-slate-400 uppercase">
                  {metric.subtext}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Bottom Bar: Metrics go further + Narrative + Pill CTA */}
        <div className="pt-10 md:pt-12 border-t border-slate-200/70 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Left Sub-heading & Divider */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8">
            <h3 className="font-serif font-normal text-3xl sm:text-4xl lg:text-[2.6rem] text-slate-950 leading-[1.08] tracking-tight">
              Metrics
              <br className="hidden sm:inline" />
              go further.
            </h3>

            <div className="hidden sm:block h-12 w-px bg-slate-200" />

            <p className="text-slate-600 font-sans font-light text-base sm:text-lg max-w-sm leading-relaxed">
              Real partnerships. Long-term growth.
            </p>
          </div>

          {/* Right Action */}
          <Link
            href="#contact"
            className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-slate-950 hover:bg-slate-800 text-white font-sans text-sm sm:text-[15px] font-medium tracking-wide transition-all shadow-[0_4px_16px_-2px_rgba(15,23,42,0.2)] hover:shadow-[0_6px_22px_-2px_rgba(15,23,42,0.3)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] shrink-0"
          >
            <span>Let&apos;s Talk</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
