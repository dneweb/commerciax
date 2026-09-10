"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SonarGrid } from "@/components/ui/sonar-grid";

export function CTASection() {
  return (
    <section
      id="contact"
      aria-label="Start a Conversation"
      className="relative w-full py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-10 lg:px-12 bg-[#fbf9f5] border-t border-slate-200/70 font-sans font-light selection:bg-blue-500/30 overflow-hidden"
    >
      {/* Big Container Box */}
      <div className="w-full max-w-6xl mx-auto rounded-3xl md:rounded-[2.5rem] overflow-hidden border border-slate-200/85 shadow-[0_20px_60px_-15px_rgba(15,23,42,0.06),0_1px_3px_rgba(15,23,42,0.03)] bg-white/80 backdrop-blur-xl relative">
        <SonarGrid
          spacing={24}
          dotRadius={1.4}
          baseOpacity={0.22}
          color="#2563eb"
          pingEvery={2.4}
          speed={260}
          ringWidth={90}
          amplitude={2.2}
          interactive={true}
          maxRings={6}
          seedPing={true}
          pingArea={[0.15, 0.2, 0.85, 0.8]}
          className="w-full min-h-[420px] sm:min-h-[460px] md:min-h-[500px] flex items-center justify-center"
        >
          {/* Soft ambient radial wash to keep text contrast crisp against animated wave rings */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_65%_60%_at_50%_50%,rgba(255,255,255,0.92)_0%,rgba(255,255,255,0.5)_60%,transparent_100%)]"
          />

          {/* Centered Content */}
          <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center justify-center px-6 py-14 sm:py-18 md:py-20 text-center">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/80 text-blue-700 text-xs font-sans font-medium tracking-wide mb-6">
              <span aria-hidden="true" className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span>Ready to Ship</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] font-serif font-light tracking-tight leading-[1.08] text-slate-950 mb-5 sm:mb-6 max-w-3xl">
              Have something <br className="hidden sm:inline" />
              <span className="italic text-blue-600 font-light">worth shipping?</span>
            </h2>

            {/* Subtitle */}
            <p className="text-slate-600 font-sans font-light text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mb-8 sm:mb-10">
              Whether it&apos;s an idea, a product, or a bigger vision we&apos;re here to help you make it real.
            </p>

            {/* CTA Button */}
            <Link
              href="#contact"
              className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-sans text-sm sm:text-[15px] font-medium tracking-wide transition-all shadow-[0_4px_20px_-2px_rgba(37,99,235,0.4)] hover:shadow-[0_8px_25px_-2px_rgba(37,99,235,0.5)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] cursor-pointer"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
            </Link>
          </div>
        </SonarGrid>
      </div>
    </section>
  );
}
