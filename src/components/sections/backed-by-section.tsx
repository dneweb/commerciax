"use client";

import Image from "next/image";

interface PartnerLogo {
  id: string;
  name: string;
  category: string;
  src?: string;
  isMicrosoft?: boolean;
  width: number;
  height: number;
}

const PARTNER_LOGOS: PartnerLogo[] = [
  {
    id: "aifod",
    name: "AIFOD",
    category: "United Nations · AI for Development",
    src: "/logos/aifod.png",
    width: 150,
    height: 48,
  },
  {
    id: "aiforgood",
    name: "AI for Good",
    category: "Global AI for Social Impact",
    src: "/logos/aiforgood.png",
    width: 180,
    height: 44,
  },
  {
    id: "gitex",
    name: "Gitex Global",
    category: "World's Largest Tech Expo",
    src: "/logos/gitex.png",
    width: 160,
    height: 42,
  },
  {
    id: "dpiit",
    name: "Startup India",
    category: "DPIIT Recognized · Govt. of India",
    src: "/logos/dpiit.png",
    width: 180,
    height: 46,
  },
  {
    id: "microsoft",
    name: "Microsoft for Startups",
    category: "Founders Hub Partner",
    isMicrosoft: true,
    width: 200,
    height: 44,
  },
  {
    id: "function1",
    name: "Function1",
    category: "Industry Event & Community",
    src: "/logos/function1.png",
    width: 170,
    height: 36,
  },
];

export function BackedBySection() {
  return (
    <section
      id="backed-by"
      aria-label="Recognized and Backed By"
      className="relative w-full bg-[#fcfbf9] text-slate-900 py-20 md:py-28 px-4 sm:px-6 md:px-8 lg:px-10 border-t border-slate-200/70 overflow-hidden font-sans font-light selection:bg-blue-500/30"
    >
      <div className="w-full max-w-[1660px] mx-auto flex flex-col items-center">
        {/* Narrative Context Headline from Image 1 - Positioned BEFORE the block */}
        <div className="text-center max-w-3xl mx-auto px-4 mb-10 md:mb-12">
          <p className="text-slate-700 text-base sm:text-lg md:text-xl font-light leading-relaxed">
            Part of the{" "}
            <span className="font-serif italic font-normal text-blue-700 hover:text-blue-600 transition-colors">
              AI for Good
            </span>{" "}
            (UN),{" "}
            <span className="font-serif italic font-normal text-blue-700 hover:text-blue-600 transition-colors">
              Microsoft for Startups
            </span>
            ,{" "}
            <span className="font-serif italic font-normal text-blue-700 hover:text-blue-600 transition-colors">
              Startup India
            </span>
            ,{" "}
            <span className="font-serif italic font-normal text-blue-700 hover:text-blue-600 transition-colors">
              Gitex Global
            </span>
            ,{" "}
            <span className="font-serif italic font-normal text-blue-700 hover:text-blue-600 transition-colors">
              AIFOD
            </span>
            , and{" "}
            <span className="font-serif italic font-normal text-blue-700 hover:text-blue-600 transition-colors">
              Function1
            </span>{" "}
            programs.
          </p>
        </div>

        {/* Card Block: Left label + Right logos (Expanded width to fit all 6 logos in one row) */}
        <div className="w-full rounded-2xl md:rounded-3xl bg-white/80 backdrop-blur-md border border-slate-200/85 px-6 py-8 sm:px-8 sm:py-8 md:px-10 md:py-9 lg:px-12 lg:py-9 flex flex-col xl:flex-row items-center justify-between gap-8 md:gap-10 shadow-[0_4px_24px_-4px_rgba(15,23,42,0.05)]">
          {/* Left Side: "RECOGNIZED & BACKED BY" */}
          <div className="flex items-center gap-3.5 shrink-0 xl:pr-10 xl:border-r border-slate-200/90 w-full xl:w-auto justify-center xl:justify-start">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-60"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
            </span>
            <span className="text-[11px] md:text-xs lg:text-[13px] font-sans font-semibold tracking-[0.22em] text-slate-600 uppercase leading-snug text-center xl:text-left select-none">
              Recognized &amp;<br className="hidden xl:block" /> Backed by
            </span>
          </div>

          {/* Right Side: Horizontal Row of Logos */}
          <div className="flex-1 w-full flex flex-wrap xl:flex-nowrap items-center justify-center xl:justify-between gap-8 sm:gap-10 md:gap-12 lg:gap-8 xl:gap-8 2xl:gap-10">
            {PARTNER_LOGOS.map((partner) => (
              <div
                key={partner.id}
                title={`${partner.name} (${partner.category})`}
                className="shrink-0 group relative flex items-center justify-center transition-all duration-300 ease-out cursor-pointer hover:scale-105 filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100"
              >
                {partner.isMicrosoft ? (
                  /* Microsoft for Startups lockup with authentic 4-color squares and serif italic subscript */
                  <div className="flex items-center gap-3 select-none py-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="w-6 h-6 md:w-7 md:h-7 shrink-0"
                    >
                      <path fill="#F35325" d="M1.04348 1.04347H11.4783V11.4783H1.04348V1.04347Z" />
                      <path fill="#81BC06" d="M12.5217 1.04347h10.4348V11.4783H12.5217V1.04347Z" />
                      <path fill="#05A6F0" d="M1.04348 12.5217H11.4783v10.4348H1.04348V12.5217Z" />
                      <path fill="#FFBA08" d="M12.5217 12.5217h10.4348v10.4348H12.5217V12.5217Z" />
                    </svg>
                    <span className="font-sans text-sm md:text-[15px] lg:text-base text-slate-800 font-medium tracking-tight whitespace-nowrap">
                      Microsoft{" "}
                      <span className="font-serif italic font-normal text-blue-700 text-xs md:text-sm">
                        for Startups
                      </span>
                    </span>
                  </div>
                ) : (
                  <div className="relative flex items-center justify-center py-1">
                    <Image
                      src={partner.src!}
                      alt={partner.name}
                      width={partner.width}
                      height={partner.height}
                      className={`${partner.id === "function1" ? "h-5 sm:h-6 md:h-7 lg:h-8" : "h-7 sm:h-8 md:h-9 lg:h-10"} w-auto max-w-[160px] object-contain transition-transform`}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
