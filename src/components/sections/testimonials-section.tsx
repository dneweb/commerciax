"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: string;
  prefix: string;
  highlight: string;
  suffix: string;
  author: string;
  role: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "01",
    prefix: "If you're a startup that needs to ",
    highlight: "ship AI products fast",
    suffix: " without compromising on quality, these are the guys.",
    author: "Misung Ku",
    role: "CEO, BLUX.AI",
  },
  {
    id: "02",
    prefix: "They took our complex LLM pipeline from ",
    highlight: "architecture to production",
    suffix: " in four weeks. Incredible speed and technical execution.",
    author: "Sarah Jenkins",
    role: "FOUNDER & CTO, SYNAPSE LABS",
  },
  {
    id: "03",
    prefix: "The employee pod model felt like having an ",
    highlight: "elite Silicon Valley engineering squad",
    suffix: " embedded directly inside our company.",
    author: "Marcus Vance",
    role: "VP OF PRODUCT, NEXUS HEALTH",
  },
  {
    id: "04",
    prefix: "Our customer acquisition ",
    highlight: "quadrupled after deploying",
    suffix: " their autonomous AI lead generation engines. Truly game changing.",
    author: "Elena Rostova",
    role: "CHIEF GROWTH OFFICER, AURA CLOUD",
  },
  {
    id: "05",
    prefix: "They don't just build software they build ",
    highlight: "defensible competitive advantage.",
    suffix: " The best technical partner we've ever had.",
    author: "David Chen",
    role: "MANAGING DIRECTOR, ELEVATE VENTURES",
  },
];

const AUTO_SCROLL_DURATION = 6000; // 6 seconds per review

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [progress, setProgress] = useState(0);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Transition helper
  const changeSlide = useCallback((newIndex: number) => {
    setIsTransitioning(true);
    setProgress(0);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsTransitioning(false);
    }, 250);
  }, []);

  const nextSlide = useCallback(() => {
    changeSlide((currentIndex + 1) % TESTIMONIALS.length);
  }, [changeSlide, currentIndex]);

  const prevSlide = useCallback(() => {
    changeSlide((currentIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, [changeSlide, currentIndex]);

  const goToSlide = useCallback(
    (index: number) => {
      if (index === currentIndex) return;
      changeSlide(index);
    },
    [changeSlide, currentIndex]
  );

  // Auto-scroll progress and trigger
  useEffect(() => {
    if (isPaused) return;

    const intervalTime = 50; // update bar every 50ms
    const step = (intervalTime / AUTO_SCROLL_DURATION) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const currentReview = TESTIMONIALS[currentIndex];

  return (
    <section
      id="testimonials"
      aria-label="Client Stories and Testimonials"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative w-full bg-[#fbf9f5] text-slate-900 py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-10 lg:px-16 border-t border-slate-200/70 overflow-hidden font-sans font-light selection:bg-blue-500/30"
    >
      {/* Subtle warm center radial lighting to match mockup aesthetic */}
      <div className="absolute inset-0 pointer-events-none -z-10 [background:radial-gradient(ellipse_at_center,rgba(255,255,255,0.75)_0%,transparent_70%)]" />

      <div className="w-full max-w-7xl mx-auto flex flex-col justify-between min-h-[580px] sm:min-h-[620px] md:min-h-[660px]">
        {/* ─── Top Row: Eyebrow Header ────────────────────────────────────── */}
        <div className="relative flex items-center justify-between w-full">
          {/* Left: Client Stories */}
          <div className="flex items-center gap-3.5 sm:gap-4">
            <span className="text-xs sm:text-sm md:text-[15px] uppercase tracking-[0.22em] text-slate-800 font-medium">
              Client Stories
            </span>
            <div className="w-10 sm:w-20 md:w-24 h-px bg-slate-300" />
          </div>

          {/* Center: In Their Words */}
          <div className="sm:absolute sm:left-1/2 sm:-translate-x-1/2 flex flex-col items-center">
            <span className="text-xs sm:text-sm md:text-[15px] uppercase tracking-[0.22em] text-slate-800 font-medium">
              In Their Words
            </span>
            <div className="w-8 sm:w-10 h-[2px] bg-slate-300/90 mt-2" />
          </div>
        </div>

        {/* ─── Middle Area: Navigation Arrows + Quotation & Content ────────── */}
        <div className="relative my-auto py-10 sm:py-14 md:py-16 flex items-center justify-between">
          {/* Left Nav Button */}
          <div className="flex-shrink-0 z-10">
            <button
              onClick={prevSlide}
              aria-label="Previous client story"
              className="group w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border border-slate-300/90 hover:border-slate-800 bg-white/50 hover:bg-white active:scale-95 transition-all duration-200 flex items-center justify-center text-slate-700 hover:text-slate-950 shadow-sm cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:-translate-x-0.5 stroke-[1.75]" />
            </button>
          </div>

          {/* Center Quote Display */}
          <div className="flex-1 max-w-4xl mx-auto px-4 sm:px-8 md:px-12 text-center">
            {/* Elegant Quotation Mark SVG (Soft Cornflower Blue) */}
            <div className="flex justify-center mb-6 sm:mb-8">
              <svg
                className="w-10 h-8 sm:w-12 sm:h-9 md:w-14 md:h-10 text-blue-400/75 select-none"
                viewBox="0 0 44 32"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M0 18.667C0 8.36 6.44 1.333 19.32 0l2.027 3.52C14.747 4.8 11.2 8.32 10.773 13.013h7.467V32H0V18.667zm23.787 0C23.787 8.36 30.227 1.333 43.107 0l2.026 3.52c-6.6 1.28-10.146 4.8-10.573 9.493h7.467V32H23.787V18.667z" />
              </svg>
            </div>

            {/* Testimonial Quote with Editorial Serif + Italic Accent */}
            <div
              className={`transition-all duration-300 ease-out transform ${isTransitioning
                  ? "opacity-0 translate-y-3 scale-[0.99]"
                  : "opacity-100 translate-y-0 scale-100"
                }`}
            >
              <blockquote className="text-2xl sm:text-3xl md:text-4xl lg:text-[3.25rem] xl:text-[3.65rem] font-serif font-light tracking-tight leading-[1.18] sm:leading-[1.15] text-slate-900 mb-8 sm:mb-10">
                <span>{currentReview.prefix}</span>
                <span className="italic text-blue-600 font-normal">
                  {currentReview.highlight}
                </span>
                <span>{currentReview.suffix}</span>
              </blockquote>

              {/* Author & Role */}
              <div className="flex flex-col items-center justify-center space-y-1.5">
                <cite className="not-italic font-serif italic text-xl sm:text-2xl text-slate-900 font-normal">
                  {currentReview.author}
                </cite>
                <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-slate-500 font-medium">
                  {currentReview.role}
                </span>
              </div>
            </div>
          </div>

          {/* Right Nav Button */}
          <div className="flex-shrink-0 z-10">
            <button
              onClick={nextSlide}
              aria-label="Next client story"
              className="group w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border border-slate-300/90 hover:border-slate-800 bg-white/50 hover:bg-white active:scale-95 transition-all duration-200 flex items-center justify-center text-slate-700 hover:text-slate-950 shadow-sm cursor-pointer"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:translate-x-0.5 stroke-[1.75]" />
            </button>
          </div>
        </div>

        {/* ─── Bottom Row: Counter + Progress Dashes + Right Badge ───────── */}
        <div className="flex items-center justify-between w-full pt-6 border-t border-slate-200/40">
          {/* Bottom Left: Counter */}
          <div className="font-mono text-xs sm:text-sm tracking-widest text-slate-900 font-medium w-24">
            <span className="font-semibold text-slate-950">
              {String(currentIndex + 1).padStart(2, "0")}
            </span>
            <span className="text-slate-400 mx-2">/</span>
            <span className="text-slate-500">
              {String(TESTIMONIALS.length).padStart(2, "0")}
            </span>
          </div>

          {/* Bottom Center: Segmented Progress Bar */}
          <div className="flex items-center gap-2 sm:gap-3">
            {TESTIMONIALS.map((t, idx) => {
              const isActive = idx === currentIndex;
              const isPast = idx < currentIndex;

              return (
                <button
                  key={t.id}
                  onClick={() => goToSlide(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  className="group py-2 px-0.5 cursor-pointer focus:outline-none"
                >
                  <div className="w-7 sm:w-11 md:w-14 h-[2px] bg-slate-300/80 rounded-full overflow-hidden transition-colors duration-200 group-hover:bg-slate-400">
                    <div
                      className="h-full bg-slate-950 transition-all"
                      style={{
                        width: isActive
                          ? `${progress}%`
                          : isPast
                            ? "100%"
                            : "0%",
                        transition: isActive
                          ? "width 50ms linear"
                          : "width 300ms ease",
                      }}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Bottom Right: Real People. Real Progress. */}
          <div className="flex flex-col items-end text-right w-24 sm:w-32">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-slate-500 font-medium leading-tight">
              Real People.
            </span>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-slate-500 font-medium leading-tight">
              Real Progress.
            </span>
            <div className="w-8 sm:w-10 h-px bg-slate-300 mt-1.5" />
          </div>
        </div>
      </div>
    </section>
  );
}
