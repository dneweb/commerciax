"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Lock,
} from "lucide-react";

const NEWEB_FEATURES = [
  "Website",
  "SEO",
  "Content",
  "Social Media",
  "Analytics",
  "Growth",
];

const FONDA_FEATURES = [
  "Idea Validation",
  "Business Plan",
  "Pitch Deck",
  "Financial Model",
  "Go-to-Market",
  "Investor Research",
];

export function ProductsSection() {
  return (
    <section
      id="products"
      aria-label="Our Products"
      className="relative w-full bg-[#faf8f5] text-slate-900 py-20 md:py-28 px-4 sm:px-6 md:px-8 lg:px-12 border-t border-slate-200/70 overflow-hidden font-sans font-light selection:bg-blue-500/30"
    >
      <div className="w-full max-w-[1720px] mx-auto">
        {/* Section Header: Headline + Narrative + Right Meta */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14 md:mb-18">
          <div className="lg:col-span-9 flex flex-col">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.75rem] font-serif font-light tracking-tight leading-[1.04] text-slate-950 mb-6">
              Products we&apos;ve
              <br />
              built, for what&apos;s next
              <span className="inline-block w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-blue-600 ml-1.5 align-baseline shadow-[0_0_10px_rgba(37,99,235,0.4)]" />
            </h2>
            <p className="text-slate-600 font-sans font-light text-base sm:text-lg leading-relaxed max-w-2xl">
              From AI agents to growth systems, our products help businesses move
              faster, work smarter and scale further.
            </p>
          </div>

          {/* Right Meta Column */}
          <div className="hidden lg:flex lg:col-span-3 lg:border-l border-slate-200/80 lg:pl-8 h-full min-h-[140px] items-center">
            <div className="text-[10px] font-sans font-semibold tracking-[0.22em] text-slate-400 uppercase leading-[1.7] select-none">
              REAL
              <br />
              PRODUCTS.
              <br />
              REAL
              <br />
              PROGRESS.
            </div>
          </div>
        </div>

        {/* 2-Product Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12 pt-2">
          {/* ─────────────────────────────────────────────────────────────────
              Product 01: Neweb.ai
          ───────────────────────────────────────────────────────────────── */}
          <div className="flex flex-col xl:flex-row gap-6 xl:gap-8 items-start justify-between lg:pr-6 xl:pr-8 lg:border-r border-slate-200/80">
            {/* Left Content */}
            <div className="flex flex-col justify-between w-full xl:w-44 2xl:w-48 shrink-0 pt-1">
              <div>
                {/* Title */}
                <Link
                  href="https://neweb.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 mb-2.5"
                >
                  <h3 className="font-serif font-normal text-3xl sm:text-4xl text-slate-950 tracking-tight group-hover:text-blue-600 transition-colors">
                    Neweb.ai
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-slate-900 group-hover:text-blue-600 transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                {/* Subtitle */}
                <p className="text-slate-600 font-sans font-light text-sm leading-relaxed mb-5">
                  Your AI-powered online presence manager.
                </p>

                {/* Features Checklist */}
                <div className="flex flex-col gap-2 mb-7">
                  {NEWEB_FEATURES.map((feat) => (
                    <div key={feat} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-slate-900 stroke-[2.5] shrink-0" />
                      <span className="text-xs sm:text-[13px] font-sans font-light text-slate-800">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <Link
                href="https://neweb.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-slate-950 hover:bg-slate-800 text-white font-sans text-sm sm:text-[15px] font-medium tracking-wide transition-all shadow-[0_4px_16px_-2px_rgba(15,23,42,0.2)] hover:shadow-[0_6px_22px_-2px_rgba(15,23,42,0.3)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] w-fit"
              >
                <span>Try Neweb.ai</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Right: Exact Neweb.ai Screenshot View (Enlarged) */}
            <div className="w-full flex-1 min-w-0 rounded-2xl bg-white border border-slate-200/90 shadow-[0_20px_50px_-12px_rgba(15,23,42,0.12),0_4px_18px_-4px_rgba(15,23,42,0.06)] overflow-hidden flex flex-col">
              {/* Browser Chrome Header Bar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 bg-[#fbfbfb]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                </div>
                <div className="flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-slate-200/80 text-[11px] text-slate-600 font-sans shadow-2xs">
                  <Lock className="w-3 h-3 text-slate-400" />
                  <span className="font-medium text-slate-700">neweb.ai</span>
                </div>
                <a
                  href="https://neweb.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-600 transition-colors p-0.5"
                  aria-label="Visit Neweb.ai"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              {/* Exact Screenshot Image from User */}
              <a
                href="https://neweb.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative block w-full aspect-[16/11] sm:aspect-[16/10.5] min-h-[320px] sm:min-h-[380px] xl:min-h-[420px] bg-slate-50 group overflow-hidden"
              >
                <Image
                  src="/products/neweb-preview.png"
                  alt="Neweb.ai preview"
                  width={1024}
                  height={520}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  priority
                />
              </a>
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────────────
              Product 02: Fonda.co
          ───────────────────────────────────────────────────────────────── */}
          <div className="flex flex-col xl:flex-row gap-6 xl:gap-8 items-start justify-between lg:pl-6 xl:pl-8">
            {/* Left Content */}
            <div className="flex flex-col justify-between w-full xl:w-44 2xl:w-48 shrink-0 pt-1">
              <div>
                {/* Title */}
                <Link
                  href="https://fonda.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 mb-2.5"
                >
                  <h3 className="font-serif font-normal text-3xl sm:text-4xl text-slate-950 tracking-tight group-hover:text-blue-600 transition-colors">
                    Fonda.co
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-slate-900 group-hover:text-blue-600 transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                {/* Subtitle */}
                <p className="text-slate-600 font-sans font-light text-sm leading-relaxed mb-5">
                  Your AI co-founder for building businesses.
                </p>

                {/* Features Checklist */}
                <div className="flex flex-col gap-2 mb-7">
                  {FONDA_FEATURES.map((feat) => (
                    <div key={feat} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-slate-900 stroke-[2.5] shrink-0" />
                      <span className="text-xs sm:text-[13px] font-sans font-light text-slate-800">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <Link
                href="https://fonda.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-slate-950 hover:bg-slate-800 text-white font-sans text-sm sm:text-[15px] font-medium tracking-wide transition-all shadow-[0_4px_16px_-2px_rgba(15,23,42,0.2)] hover:shadow-[0_6px_22px_-2px_rgba(15,23,42,0.3)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] w-fit"
              >
                <span>Try Fonda.co</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Right: Exact Fonda.co Screenshot View (Enlarged) */}
            <div className="w-full flex-1 min-w-0 rounded-2xl bg-white border border-slate-200/90 shadow-[0_20px_50px_-12px_rgba(15,23,42,0.12),0_4px_18px_-4px_rgba(15,23,42,0.06)] overflow-hidden flex flex-col">
              {/* Browser Chrome Header Bar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 bg-[#fbfbfb]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                </div>
                <div className="flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-slate-200/80 text-[11px] text-slate-600 font-sans shadow-2xs">
                  <Lock className="w-3 h-3 text-slate-400" />
                  <span className="font-medium text-slate-700">fonda.co</span>
                </div>
                <a
                  href="https://fonda.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-[#f95738] transition-colors p-0.5"
                  aria-label="Visit Fonda.co"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              {/* Exact Screenshot Image from User */}
              <a
                href="https://fonda.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative block w-full aspect-[16/11] sm:aspect-[16/10.5] min-h-[320px] sm:min-h-[380px] xl:min-h-[420px] bg-slate-50 group overflow-hidden"
              >
                <Image
                  src="/products/fonda-preview.png"
                  alt="Fonda.co preview"
                  width={1024}
                  height={520}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  priority
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
