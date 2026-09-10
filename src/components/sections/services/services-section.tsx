"use client";

import { useState, useEffect, useRef, useCallback, memo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ServiceBuild } from "./service-build";
import { ServiceGrow } from "./service-grow";
import { ServiceScale } from "./service-scale";
import { ServiceLaunch } from "./service-launch";

// Memoize heavy SVG-heavy components to prevent re-renders on every activeIndex change
const MemoizedBuild = memo(ServiceBuild);
const MemoizedGrow = memo(ServiceGrow);
const MemoizedScale = memo(ServiceScale);
const MemoizedLaunch = memo(ServiceLaunch);

interface ServiceTab {
  id: string;
  num: string;
  category: string;
  title: string;
}

const SERVICES_TABS: ServiceTab[] = [
  { id: "service-build", num: "01", category: "BUILD",  title: "AI Software Development" },
  { id: "service-grow",  num: "02", category: "GROW",   title: "B2B Lead Generation" },
  { id: "service-scale", num: "03", category: "SCALE",  title: "Employee Pods" },
  { id: "service-launch",num: "04", category: "LAUNCH", title: "SaaS Product Studio" },
];

// Target progress points for the 4 slides:
// Slide 0: 0.0000 | Slide 1: 0.3333 | Slide 2: 0.6667 | Slide 3: 0.9417 (safely resting in hold plateau)
const STAGE_TARGETS: number[] = [0, 1.0 / 3.0, 2.0 / 3.0, 2.825 / 3.0];

export function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);
  const isClickScrollingRef = useRef(false);

  // The outer section container stays in place in React DOM tree (never reparented by GSAP)
  const sectionRef = useRef<HTMLElement>(null);
  // The inner viewport container that GSAP pins inside the outer section
  const pinTargetRef = useRef<HTMLDivElement>(null);

  const slide0 = useRef<HTMLDivElement>(null);
  const slide1 = useRef<HTMLDivElement>(null);
  const slide2 = useRef<HTMLDivElement>(null);
  const slide3 = useRef<HTMLDivElement>(null);

  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  // ─── ScrollTrigger & Scrubbed Timeline Setup ─────────────────────────────
  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current || !pinTargetRef.current) return;

    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    const el0 = slide0.current;
    const el1 = slide1.current;
    const el2 = slide2.current;
    const el3 = slide3.current;
    if (!el0 || !el1 || !el2 || !el3) return;

    const ctx = gsap.context(() => {
      // 1. Initial visual state on GPU composited layers
      gsap.set(el0, { autoAlpha: 1, y: 0, zIndex: 10 });
      gsap.set([el1, el2, el3], { autoAlpha: 0, y: 24, zIndex: 1 });

      // 2. High-performance timeline:
      // - end: +=1800 (snappy ~600px per slide, no endless scrolling)
      // - scrub: 0.15 (150ms responsive tracking, eliminating the 600ms lag)
      // - anticipatePin: 0 (stops layout shift on section entry)
      // - Boundary-aware snap (never pulls back to 0 on entry)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: pinTargetRef.current,
          start: "top top",
          end: "+=1800",
          scrub: 0.15,
          anticipatePin: 0,
          pinSpacing: true,
          fastScrollEnd: true,
          snap: {
            snapTo: (value: number) => {
              // When entering the section (progress < 0.12), DO NOT snap back to 0!
              // This completely eliminates the "overshoot down then bounce back up" bug.
              if (value < 0.12) return value;
              // When leaving the section (progress > 0.96), DO NOT snap back to Slide 3!
              // Allows natural, seamless continuation to the next section.
              if (value > 0.96) return value;
              // For intermediate slide positions, settle onto the nearest slide target.
              return gsap.utils.snap(STAGE_TARGETS, value);
            },
            duration: { min: 0.15, max: 0.35 },
            delay: 0.05,
            ease: "power2.out",
            inertia: false,
          },
          onUpdate: (self) => {
            const p = self.progress;
            const newIdx = p < 0.20 ? 0 : p < 0.52 ? 1 : p < 0.84 ? 2 : 3;
            if (newIdx !== activeIndexRef.current && !isClickScrollingRef.current) {
              activeIndexRef.current = newIdx;
              setActiveIndex(newIdx);
            }
          },
        },
      });

      scrollTriggerRef.current = tl.scrollTrigger ?? null;

      // 3. Stage 0 -> Stage 1 transition
      // SEQUENCED HANDOFF: el0 fades out cleanly before el1 enters (ZERO text merging!)
      tl.to(el0, { autoAlpha: 0, y: -24, duration: 0.15, ease: "power2.in" }, 0.35)
        .set(el0, { zIndex: 1 }, 0.50)
        .fromTo(
          el1,
          { autoAlpha: 0, y: 24, zIndex: 10 },
          { autoAlpha: 1, y: 0, zIndex: 10, duration: 0.15, ease: "power2.out" },
          0.50
        );

      // 4. Stage 1 -> Stage 2 transition
      tl.to(el1, { autoAlpha: 0, y: -24, duration: 0.15, ease: "power2.in" }, 1.35)
        .set(el1, { zIndex: 1 }, 1.50)
        .fromTo(
          el2,
          { autoAlpha: 0, y: 24, zIndex: 10 },
          { autoAlpha: 1, y: 0, zIndex: 10, duration: 0.15, ease: "power2.out" },
          1.50
        );

      // 5. Stage 2 -> Stage 3 transition
      tl.to(el2, { autoAlpha: 0, y: -24, duration: 0.15, ease: "power2.in" }, 2.35)
        .set(el2, { zIndex: 1 }, 2.50)
        .fromTo(
          el3,
          { autoAlpha: 0, y: 24, zIndex: 10 },
          { autoAlpha: 1, y: 0, zIndex: 10, duration: 0.15, ease: "power2.out" },
          2.50
        );

      // Hold stage 3 in its plateau until end of pin
      tl.to({}, { duration: 0.35 }, 2.65);
    }, sectionRef);

    // Refresh after DOM measurement & font loading settles
    const handleRefresh = () => {
      if (sectionRef.current && pinTargetRef.current) {
        ScrollTrigger.refresh();
      }
    };

    const refreshTimer = setTimeout(handleRefresh, 200);
    window.addEventListener("resize", handleRefresh);
    if (typeof document !== "undefined" && document.fonts) {
      document.fonts.ready.then(handleRefresh);
    }

    return () => {
      window.removeEventListener("resize", handleRefresh);
      clearTimeout(refreshTimer);
      ctx.revert();
    };
  }, []);

  // ─── Click Navigation (Instant Tab Switch + Smooth Scroll) ───────────────
  const scrollToStage = useCallback((targetIndex: number) => {
    const st = scrollTriggerRef.current;
    if (!st) return;

    isClickScrollingRef.current = true;
    activeIndexRef.current = targetIndex;
    setActiveIndex(targetIndex);

    const targetProgress = STAGE_TARGETS[targetIndex];
    const targetY = st.start + targetProgress * (st.end - st.start);

    gsap.killTweensOf(window);
    gsap.to(window, {
      scrollTo: { y: targetY, autoKill: false },
      duration: 0.5,
      ease: "power2.out",
      onComplete: () => {
        isClickScrollingRef.current = false;
      },
    });
  }, []);

  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Auto-scroll active tab into view when activeIndex changes on mobile
  useEffect(() => {
    const activeTab = tabRefs.current[activeIndex];
    if (activeTab) {
      activeTab.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  }, [activeIndex]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };
  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50 && activeIndex < SERVICES_TABS.length - 1) {
      scrollToStage(activeIndex + 1);
    } else if (diff < -50 && activeIndex > 0) {
      scrollToStage(activeIndex - 1);
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // ─── Render ───────────────────────────────────────────────────────────────
  return (
    <section
      id="services"
      ref={sectionRef}
      aria-label="Our Services"
      className="relative w-full bg-[#fcfbf9] text-slate-900 border-t border-slate-200/70 font-sans font-light selection:bg-blue-500/30"
    >
      {/* Pinned Viewport Container — GSAP pins this inside the static section */}
      <div
        ref={pinTargetRef}
        className="w-full h-[100dvh] min-h-[580px] max-h-[1080px] flex flex-col justify-between px-3 sm:px-6 md:px-8 lg:px-12 py-2 sm:py-3 md:py-5 overflow-hidden"
      >
        <div className="w-full max-w-[1660px] mx-auto flex flex-col h-full justify-between">

          {/* Header + Navigation */}
          <div className="w-full flex flex-col items-center shrink-0 pt-0.5 pb-1 gap-1.5 sm:gap-2">
            <div className="text-[11px] sm:text-xs md:text-[13px] font-sans font-semibold tracking-[0.26em] uppercase text-slate-900 select-none">
              OUR SERVICES
            </div>

            <nav
              aria-label="Services Timeline Navigation"
              className="inline-flex items-center gap-1 sm:gap-2 p-1 sm:p-1.5 md:p-2 rounded-full bg-white/95 backdrop-blur-xl border border-slate-200/95 shadow-[0_8px_32px_-4px_rgba(15,23,42,0.08)] max-w-full overflow-x-auto scrollbar-none transition-all"
            >
              {SERVICES_TABS.map((tab, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <button
                    key={tab.id}
                    ref={(el) => {
                      tabRefs.current[idx] = el;
                    }}
                    type="button"
                    onClick={() => scrollToStage(idx)}
                    className={`relative flex items-center px-3 sm:px-4 md:px-5 lg:px-6 py-1.5 sm:py-2 md:py-2.5 rounded-full text-xs sm:text-sm font-sans tracking-tight transition-all duration-300 shrink-0 cursor-pointer ${
                      isActive
                        ? "bg-blue-50 text-blue-700 font-semibold shadow-sm border border-blue-200/80 ring-2 ring-blue-500/10"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 font-medium border border-transparent"
                    }`}
                  >
                    <span className="font-mono text-[10px] text-blue-600/80 mr-1.5 font-normal sm:hidden">
                      {tab.num}
                    </span>
                    <span className="whitespace-nowrap font-medium text-slate-800 text-xs sm:text-sm">
                      {tab.title}
                    </span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Slide Stage — position:relative container, slides are position:absolute inside */}
          <div
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="relative flex-1 w-full min-h-0"
          >

            {/* 01: AI Software Development */}
            <div
              ref={slide0}
              style={{
                opacity: 1,
                visibility: "visible",
                zIndex: 10,
                willChange: "transform, opacity",
                backfaceVisibility: "hidden",
                transform: "translate3d(0, 0, 0)",
              }}
              className="absolute inset-0 flex items-center justify-center w-full h-full"
            >
              <div className="w-full max-h-full overflow-y-auto lg:overflow-visible py-2">
                <MemoizedBuild />
              </div>
            </div>

            {/* 02: B2B Lead Generation */}
            <div
              ref={slide1}
              style={{
                opacity: 0,
                visibility: "hidden",
                zIndex: 1,
                willChange: "transform, opacity",
                backfaceVisibility: "hidden",
                transform: "translate3d(0, 24px, 0)",
              }}
              className="absolute inset-0 flex items-center justify-center w-full h-full"
            >
              <div className="w-full max-h-full overflow-y-auto lg:overflow-visible py-2">
                <MemoizedGrow />
              </div>
            </div>

            {/* 03: Employee Pods */}
            <div
              ref={slide2}
              style={{
                opacity: 0,
                visibility: "hidden",
                zIndex: 1,
                willChange: "transform, opacity",
                backfaceVisibility: "hidden",
                transform: "translate3d(0, 24px, 0)",
              }}
              className="absolute inset-0 flex items-center justify-center w-full h-full"
            >
              <div className="w-full max-h-full overflow-y-auto lg:overflow-visible py-2">
                <MemoizedScale />
              </div>
            </div>

            {/* 04: SaaS Product Studio */}
            <div
              ref={slide3}
              style={{
                opacity: 0,
                visibility: "hidden",
                zIndex: 1,
                willChange: "transform, opacity",
                backfaceVisibility: "hidden",
                transform: "translate3d(0, 24px, 0)",
              }}
              className="absolute inset-0 flex items-center justify-center w-full h-full"
            >
              <div className="w-full max-h-full overflow-y-auto lg:overflow-visible py-2">
                <MemoizedLaunch />
              </div>
            </div>

          </div>

          {/* Bottom Progress Footer */}
          <div className="w-full shrink-0 flex items-center justify-between pt-2 pb-0.5 border-t border-slate-200/60 text-xs text-slate-500 font-sans">
            <div className="flex-1 hidden sm:flex items-center gap-2">
              <span className="font-mono text-[11px] text-slate-400">
                0{activeIndex + 1} / 0{SERVICES_TABS.length}
              </span>
            </div>

            <div className="flex items-center gap-1 sm:gap-1.5">
              {SERVICES_TABS.map((tab, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => scrollToStage(idx)}
                  aria-label={`Jump to ${tab.title}`}
                  className="group py-2 px-1 cursor-pointer focus:outline-none"
                >
                  <div
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === activeIndex
                        ? "w-7 sm:w-8 bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.4)]"
                        : idx < activeIndex
                        ? "w-2.5 sm:w-3 bg-blue-300"
                        : "w-2.5 sm:w-3 bg-slate-200 group-hover:bg-slate-300"
                    }`}
                  />
                </button>
              ))}
            </div>

            <div className="flex-1 flex items-center justify-end gap-1.5 text-slate-500 text-[10px] sm:text-[11px]">
              <span className="hidden sm:inline font-light">Scroll or swipe to explore</span>
              <span className="inline-block animate-bounce text-blue-600">↓</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
