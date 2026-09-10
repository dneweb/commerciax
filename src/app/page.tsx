"use client";

import { GradientWave } from "@/components/ui/gradient-wave";
import { RadialBackground } from "@/components/ui/light-theme-tailwind-css-background-snippet";
import { Logo } from "@/components/ui/logo";
import { ProblemSection } from "@/components/sections/problem-section";
import { BackedBySection } from "@/components/sections/backed-by-section";
import { ServicesSection } from "@/components/sections/services/services-section";
import { SpeedSection } from "@/components/sections/speed-section";
import { ProductsSection } from "@/components/sections/products-section";
import { NumbersSection } from "@/components/sections/numbers-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CTASection } from "@/components/sections/cta-section";
import { Footer } from "@/components/sections/footer";
import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { CALENDLY_URL } from "@/lib/constants";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen w-full text-slate-900 bg-[#f8fafc] font-sans font-light selection:bg-blue-500/30 overflow-x-clip">
      {/* Hero Viewport Section */}
      <div className="relative min-h-screen w-full overflow-hidden isolate">
        <RadialBackground />
        <GradientWave
          colors={["#f1f5f9", "#ffffff", "#e2e8f0", "#ffffff", "#dbeafe", "#ffffff"]}
          className="opacity-90 mix-blend-multiply"
          shadowPower={10}
        />

        {/* Rest of the UI layered on top with z-10 */}
        <div className="relative z-10 min-h-[100dvh] flex flex-col justify-between px-6 py-6 md:px-12 md:py-8">
          {/* Navigation Header */}
          <header className="w-full max-w-5xl mx-auto">
            <nav className="relative flex items-center justify-between px-6 py-3 md:px-8 md:py-3.5 rounded-full bg-white/70 backdrop-blur-xl backdrop-saturate-150 border border-white/80 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.95),inset_0_-1px_1px_0_rgba(0,0,0,0.02),0_12px_30px_-4px_rgba(15,23,42,0.06),0_2px_6px_0_rgba(15,23,42,0.03)] transition-all duration-300">
              {/* Brand Logo */}
              <Logo />

              {/* Desktop Navigation Links */}
              <div className="hidden md:flex items-center space-x-1">
                {[
                  { name: "Services", href: "#" },
                  { name: "Products", href: "#" },
                  { name: "Our Work", href: "#" },
                  { name: "About", href: "#" },
                ].map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="group relative px-4 py-1.5 rounded-full text-xs font-medium text-slate-600 hover:text-slate-950 transition-all duration-200 ease-out hover:bg-slate-900/[0.05] active:scale-95"
                  >
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>

              {/* Right Action & Mobile Toggle */}
              <div className="flex items-center space-x-3">
                <Link
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative hidden md:inline-flex items-center gap-2 bg-slate-950 hover:bg-slate-800 active:bg-black text-white px-5 py-2.5 rounded-full text-xs font-medium tracking-wide shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25),0_4px_12px_-2px_rgba(15,23,42,0.25)] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.35),0_6px_18px_-2px_rgba(15,23,42,0.35)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 cursor-pointer"
                >
                  <span>Let&apos;s Talk</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 ease-out group-hover:translate-x-0.5" />
                </Link>

                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  aria-label="Toggle navigation menu"
                  aria-expanded={mobileMenuOpen}
                  className="md:hidden flex items-center justify-center w-9 h-9 rounded-full bg-slate-100/80 hover:bg-slate-200/80 active:scale-95 text-slate-800 hover:text-slate-950 transition-all duration-150 cursor-pointer"
                >
                  {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                </button>
              </div>

              {/* Mobile Dropdown Menu */}
              {mobileMenuOpen && (
                <div className="md:hidden absolute top-full mt-2.5 left-0 right-0 p-4 rounded-2xl bg-white/85 backdrop-blur-2xl backdrop-saturate-150 border border-white/80 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.9),0_16px_36px_-6px_rgba(15,23,42,0.12)] flex flex-col space-y-3 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                  <div className="flex flex-col space-y-1">
                    {[
                      { name: "Services", href: "#" },
                      { name: "Products", href: "#" },
                      { name: "Our Work", href: "#" },
                      { name: "About", href: "#" },
                    ].map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-xs font-medium text-slate-700 hover:text-slate-950 hover:bg-slate-100/80 px-3.5 py-2 rounded-xl transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className="pt-2 border-t border-slate-200/60">
                    <Link
                      href={CALENDLY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileMenuOpen(false)}
                      className="w-full flex items-center justify-center gap-2 bg-slate-950 hover:bg-slate-800 active:bg-black text-white py-2.5 rounded-full text-xs font-medium shadow-md transition-colors cursor-pointer"
                    >
                      <span>Let&apos;s Talk</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </nav>
          </header>

          {/* Main Content */}
          <main className="flex-1 flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto py-16 md:py-0">
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-serif font-light tracking-tight leading-[1.08] text-slate-900 mb-8">
              We turn ambitious <br />
              ideas into things <br />
              that <span className="italic text-blue-600 font-light pr-2">ship.</span>
            </h1>

            <p className="max-w-xl text-slate-700 text-base md:text-lg font-light leading-relaxed mb-10">
              AI-native engineering, product development and <br className="hidden md:block" />
              growth systems — built by senior teams and shipped <br className="hidden md:block" />
              at production speed.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-4 w-full sm:w-auto">
              <Link
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-sans text-sm sm:text-[15px] font-medium tracking-wide shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25),0_4px_20px_-2px_rgba(37,99,235,0.4)] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.35),0_8px_25px_-2px_rgba(37,99,235,0.5)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 cursor-pointer"
              >
                <span>Start a project</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
              </Link>
              <button className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white/80 hover:bg-white active:bg-slate-50 text-slate-800 hover:text-slate-950 font-sans text-sm sm:text-[15px] font-medium tracking-wide border border-slate-200/90 hover:border-slate-300 backdrop-blur-md shadow-[inset_0_1px_0_0_rgba(255,255,255,0.8),0_2px_8px_-2px_rgba(15,23,42,0.06)] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.9),0_6px_20px_-4px_rgba(15,23,42,0.12)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 cursor-pointer">
                <span>See how we work</span>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-slate-900 transition-all duration-200 ease-out group-hover:translate-x-1" />
              </button>
            </div>
          </main>
        </div>

        {/* Soft blurred transition and feathered ending border */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 sm:h-32 md:h-40 z-[5] bg-gradient-to-b from-transparent via-[#fcfbf9]/50 to-[#fcfbf9] backdrop-blur-md"
          style={{
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 80%)",
            maskImage: "linear-gradient(to bottom, transparent 0%, black 80%)",
          }}
        />
      </div>

      {/* Section 02: The Problem */}
      <ProblemSection />

      {/* Section 03: Recognized & Backed By */}
      <BackedBySection />

      {/* Section 04: Our Services */}
      <ServicesSection />

      {/* Section 05: Speed to Production */}
      <SpeedSection />

      {/* Section 06: Our Products */}
      <ProductsSection />

      {/* Section 07: By The Numbers */}
      <NumbersSection />

      {/* Section 08: Client Stories / Testimonials */}
      <TestimonialsSection />

      {/* Section 09: Call To Action (SonarGrid) */}
      <CTASection />

      {/* Section 10: Footer */}
      <Footer />
    </div>
  );
}
