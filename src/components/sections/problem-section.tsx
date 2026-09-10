"use client";

import { useState } from "react";
import {
  BarChart3,
  Database,
  FileText,
  Code2,
  LayoutGrid,
  Zap,
  TrendingUp,
} from "lucide-react";

interface ToolItem {
  id: string;
  name: string;
  icon: string;
  x: number;
  info: string;
}

const TOOLS: ToolItem[] = [
  { id: "crm", name: "CRM", icon: "salesforce", x: 45, info: "Customer accounts, deals & sales pipeline" },
  { id: "erp", name: "ERP", icon: "database", x: 147, info: "Financial records, operations & inventory" },
  { id: "bi", name: "BI", icon: "barchart", x: 249, info: "Executive reporting, KPIs & metrics" },
  { id: "data", name: "DATA", icon: "file", x: 351, info: "Spreadsheets, documents & customer logs" },
  { id: "apis", name: "APIs", icon: "code", x: 453, info: "Custom webhooks, 3rd-party services & syncs" },
  { id: "apps", name: "APPS", icon: "grid", x: 555, info: "Internal SaaS tools & productivity suites" },
];

export function ProblemSection() {
  const [activeTool, setActiveTool] = useState<string | null>(null);
  const [activeOutput, setActiveOutput] = useState<string | null>(null);
  const [hubHovered, setHubHovered] = useState(false);

  return (
    <section
      id="problem"
      aria-label="The Problem"
      className="relative w-full bg-[#fcfbf9] text-slate-900 py-16 sm:py-20 md:py-24 px-6 md:px-12 lg:px-16 overflow-hidden font-sans font-light selection:bg-blue-500/30"
    >
      <div className="max-w-7xl mx-auto">

        {/* Main 2-Column Grid: Headline & Stats (Left) + Architecture Diagram (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Headline, Narrative & Proof Metrics */}
          <div className="lg:col-span-5 flex flex-col justify-between pt-2">
            <div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-serif font-light tracking-tight leading-[1.05] text-slate-900 mb-8">
                Too many tools.<br />
                Not enough outcome<span className="text-blue-600 font-normal">.</span>
              </h2>

              <p className="text-slate-600 text-base md:text-lg font-light leading-relaxed max-w-md mb-12">
                Your data, teams and tools are everywhere.<br className="hidden sm:inline" />
                We bring it together and turn it into decisions and action.
              </p>
            </div>

            {/* 3 Proof Stats */}
            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-slate-200/80">
              {/* Stat 1 */}
              <div>
                <div className="text-3xl sm:text-4xl font-serif font-light text-slate-900 mb-2 tracking-tight">
                  70%
                </div>
                <div className="text-[10px] md:text-[11px] font-light tracking-[0.16em] text-slate-500 uppercase leading-snug">
                  Businesses use<br />5+ tools
                </div>
              </div>

              {/* Stat 2 */}
              <div>
                <div className="text-3xl sm:text-4xl font-serif font-light text-slate-900 mb-2 tracking-tight">
                  40%
                </div>
                <div className="text-[10px] md:text-[11px] font-light tracking-[0.16em] text-slate-500 uppercase leading-snug">
                  Data goes<br />unused
                </div>
              </div>

              {/* Stat 3 */}
              <div>
                <div className="text-3xl sm:text-4xl font-serif font-light text-slate-900 mb-2 tracking-tight">
                  3x
                </div>
                <div className="text-[10px] md:text-[11px] font-light tracking-[0.16em] text-slate-500 uppercase leading-snug">
                  Slower<br />decisions
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Architecture Convergence Diagram */}
          <div className="lg:col-span-7 relative w-full flex justify-center items-center">
            {/* Diagram Container */}
            <div className="relative w-full max-w-[620px] aspect-[600/440]">
              {/* SVG Layer: Connecting Curves, Ambient Glow & Animated Flow Pulses */}
              <svg
                viewBox="0 0 600 440"
                className="w-full h-full absolute inset-0 overflow-visible select-none"
                fill="none"
              >
                <defs>
                  {/* Radial Blue Glow for CommerciaX Hub */}
                  <radialGradient id="blue-hub-glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#2563eb" stopOpacity="0.4" />
                    <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.18" />
                    <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
                  </radialGradient>

                  {/* Linear Gradients for Streams */}
                  <linearGradient id="stream-blue" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#94a3b8" stopOpacity="0.4" />
                    <stop offset="60%" stopColor="#3b82f6" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#2563eb" stopOpacity="1" />
                  </linearGradient>

                  <linearGradient id="stream-active" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#38bdf8" />
                    <stop offset="100%" stopColor="#2563eb" />
                  </linearGradient>

                  {/* Soft Blur Filter */}
                  <filter id="soft-glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="8" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* 1. Background Aura behind CommerciaX Hub */}
                <circle
                  cx="300"
                  cy="225"
                  r="95"
                  fill="url(#blue-hub-glow)"
                  className={`transition-opacity duration-500 ${
                    hubHovered ? "opacity-100 scale-110" : "opacity-80"
                  }`}
                />

                {/* 2. Top Inward Flow Lines (from 6 tools to convergence point 300, 195) */}
                {/* Tool 1: CRM (x: 45) */}
                <path
                  d="M 45 68 C 45 130, 280 145, 300 195"
                  stroke={activeTool === "crm" || hubHovered ? "#2563eb" : "#cbd5e1"}
                  strokeWidth={activeTool === "crm" ? "2.5" : "1.25"}
                  className="transition-colors duration-300"
                />

                {/* Tool 2: ERP (x: 147) */}
                <path
                  d="M 147 68 C 147 125, 290 145, 300 195"
                  stroke={activeTool === "erp" || hubHovered ? "#2563eb" : "#94a3b8"}
                  strokeWidth={activeTool === "erp" ? "2.5" : "1.25"}
                  className="transition-colors duration-300"
                />

                {/* Tool 3: BI (x: 249) */}
                <path
                  d="M 249 68 C 249 120, 295 150, 300 195"
                  stroke={activeTool === "bi" || hubHovered ? "#2563eb" : "#cbd5e1"}
                  strokeWidth={activeTool === "bi" ? "2.5" : "1.25"}
                  className="transition-colors duration-300"
                />

                {/* Tool 4: DATA (x: 351) */}
                <path
                  d="M 351 68 C 351 120, 305 150, 300 195"
                  stroke={activeTool === "data" || hubHovered ? "#2563eb" : "#2563eb"}
                  strokeWidth={activeTool === "data" ? "2.5" : "1.25"}
                  opacity={activeTool === "data" || hubHovered ? 1 : 0.75}
                  className="transition-colors duration-300"
                />

                {/* Tool 5: APIs (x: 453) */}
                <path
                  d="M 453 68 C 453 125, 310 145, 300 195"
                  stroke={activeTool === "apis" || hubHovered ? "#2563eb" : "#cbd5e1"}
                  strokeWidth={activeTool === "apis" ? "2.5" : "1.25"}
                  className="transition-colors duration-300"
                />

                {/* Tool 6: APPS (x: 555) */}
                <path
                  d="M 555 68 C 555 130, 320 145, 300 195"
                  stroke={activeTool === "apps" || hubHovered ? "#2563eb" : "#e2e8f0"}
                  strokeWidth={activeTool === "apps" ? "2.5" : "1.25"}
                  className="transition-colors duration-300"
                />

                {/* Convergence Focal Dot at Hub Entry */}
                <circle cx="300" cy="195" r="3.5" fill="#2563eb" />

                {/* Animated Signal Pulses: Exactly TWO moving dots per line */}
                {/* Line 1: CRM (2 dots) */}
                <circle r="2.75" fill="#2563eb">
                  <animateMotion
                    path="M 45 68 C 45 130, 280 145, 300 195"
                    dur="3s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle r="2.75" fill="#38bdf8">
                  <animateMotion
                    path="M 45 68 C 45 130, 280 145, 300 195"
                    dur="3s"
                    begin="1.5s"
                    repeatCount="indefinite"
                  />
                </circle>

                {/* Line 2: ERP (2 dots) */}
                <circle r="2.75" fill="#2563eb">
                  <animateMotion
                    path="M 147 68 C 147 125, 290 145, 300 195"
                    dur="2.8s"
                    begin="0.2s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle r="2.75" fill="#38bdf8">
                  <animateMotion
                    path="M 147 68 C 147 125, 290 145, 300 195"
                    dur="2.8s"
                    begin="1.6s"
                    repeatCount="indefinite"
                  />
                </circle>

                {/* Line 3: BI (2 dots) */}
                <circle r="2.75" fill="#2563eb">
                  <animateMotion
                    path="M 249 68 C 249 120, 295 150, 300 195"
                    dur="2.6s"
                    begin="0.4s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle r="2.75" fill="#38bdf8">
                  <animateMotion
                    path="M 249 68 C 249 120, 295 150, 300 195"
                    dur="2.6s"
                    begin="1.7s"
                    repeatCount="indefinite"
                  />
                </circle>

                {/* Line 4: DATA (2 dots) */}
                <circle r="2.75" fill="#2563eb">
                  <animateMotion
                    path="M 351 68 C 351 120, 305 150, 300 195"
                    dur="2.6s"
                    begin="0.1s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle r="2.75" fill="#38bdf8">
                  <animateMotion
                    path="M 351 68 C 351 120, 305 150, 300 195"
                    dur="2.6s"
                    begin="1.4s"
                    repeatCount="indefinite"
                  />
                </circle>

                {/* Line 5: APIs (2 dots) */}
                <circle r="2.75" fill="#2563eb">
                  <animateMotion
                    path="M 453 68 C 453 125, 310 145, 300 195"
                    dur="2.8s"
                    begin="0.5s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle r="2.75" fill="#38bdf8">
                  <animateMotion
                    path="M 453 68 C 453 125, 310 145, 300 195"
                    dur="2.8s"
                    begin="1.9s"
                    repeatCount="indefinite"
                  />
                </circle>

                {/* Line 6: APPS (2 dots) */}
                <circle r="2.75" fill="#2563eb">
                  <animateMotion
                    path="M 555 68 C 555 130, 320 145, 300 195"
                    dur="3s"
                    begin="0.3s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle r="2.75" fill="#38bdf8">
                  <animateMotion
                    path="M 555 68 C 555 130, 320 145, 300 195"
                    dur="3s"
                    begin="1.8s"
                    repeatCount="indefinite"
                  />
                </circle>

                {/* 3. Bottom Output Lines (Connecting directly from Hub to Output Cards with ZERO gap) */}
                {/* Vertical Spine starting directly from bottom of hub */}
                <line
                  x1="300"
                  y1="228"
                  x2="300"
                  y2="295"
                  stroke="#2563eb"
                  strokeWidth="1.75"
                />
                {/* Central Spine Junction Dots */}
                <circle cx="300" cy="265" r="2.5" fill="#2563eb" />
                <circle cx="300" cy="295" r="3" fill="#2563eb" />

                {/* Horizontal Bus Line */}
                <path
                  d="M 105 358 L 105 295 L 495 295 L 495 358"
                  stroke="#2563eb"
                  strokeWidth="1.5"
                  fill="none"
                />
                <line
                  x1="300"
                  y1="295"
                  x2="300"
                  y2="358"
                  stroke="#2563eb"
                  strokeWidth="1.5"
                />

                {/* Terminal Junction Dots touching the card tops directly */}
                <circle cx="105" cy="358" r="3" fill="#2563eb" />
                <circle cx="300" cy="358" r="3" fill="#2563eb" />
                <circle cx="495" cy="358" r="3" fill="#2563eb" />
              </svg>

              {/* HTML Overlay: Interactive Cards positioned exactly over SVG endpoints */}
              {/* --- TOP ROW: 6 TOOL CARDS --- */}
              <div className="absolute top-0 left-0 w-full flex justify-between px-2.5 z-20">
                {TOOLS.map((tool) => {
                  const isHovered = activeTool === tool.id;
                  return (
                    <div
                      key={tool.id}
                      onMouseEnter={() => setActiveTool(tool.id)}
                      onMouseLeave={() => setActiveTool(null)}
                      className={`group relative flex flex-col items-center justify-center w-12 h-14 sm:w-16 sm:h-18 md:w-20 md:h-20 rounded-xl bg-white border transition-all duration-200 cursor-pointer select-none shadow-[0_2px_8px_-2px_rgba(15,23,42,0.06)] ${
                        isHovered
                          ? "border-blue-500 shadow-[0_8px_20px_-4px_rgba(37,99,235,0.25)] -translate-y-1 scale-105"
                          : "border-slate-200/90 hover:border-slate-300"
                      }`}
                    >
                      {/* Tool Icon */}
                      <div className="flex items-center justify-center text-slate-800 mb-1">
                        {tool.icon === "salesforce" && (
                          <svg
                            viewBox="0 0 24 24"
                            className="w-5 h-5 sm:w-6 sm:h-6 text-[#00A1E0]"
                            fill="currentColor"
                          >
                            <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
                          </svg>
                        )}
                        {tool.icon === "database" && (
                          <Database className="w-4 h-4 sm:w-5 sm:h-5 text-slate-700" />
                        )}
                        {tool.icon === "barchart" && (
                          <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 text-slate-700" />
                        )}
                        {tool.icon === "file" && (
                          <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-slate-700" />
                        )}
                        {tool.icon === "code" && (
                          <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-slate-700" />
                        )}
                        {tool.icon === "grid" && (
                          <LayoutGrid className="w-4 h-4 sm:w-5 sm:h-5 text-slate-700" />
                        )}
                      </div>

                      {/* Tool Name Label */}
                      <span className="text-[9px] sm:text-[10px] md:text-[11px] font-sans font-medium tracking-[0.14em] text-slate-600 uppercase group-hover:text-blue-600 transition-colors">
                        {tool.name}
                      </span>

                      {/* Tooltip on Hover */}
                      {isHovered && (
                        <div className="absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap bg-slate-900 text-white text-[10px] font-light px-2.5 py-1 rounded-md shadow-lg pointer-events-none z-30 animate-in fade-in zoom-in-95 duration-150">
                          {tool.info}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* --- MIDDLE: COMMERCIAX CENTRAL CONVERGENCE HUB --- */}
              <div className="absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center">
                <div
                  onMouseEnter={() => setHubHovered(true)}
                  onMouseLeave={() => setHubHovered(false)}
                  className={`group relative flex items-center justify-center px-8 py-3 sm:px-9 sm:py-3.5 rounded-full bg-white/95 backdrop-blur-xl border border-blue-500/30 transition-all duration-300 cursor-pointer shadow-[0_0_35px_-5px_rgba(37,99,235,0.35),0_10px_25px_-5px_rgba(15,23,42,0.08)] ${
                    hubHovered ? "scale-105 shadow-[0_0_55px_0_rgba(37,99,235,0.5)] border-blue-500" : ""
                  }`}
                >
                  <span className="text-base sm:text-lg md:text-xl font-serif font-light text-slate-900 tracking-tight">
                    Commercia<span className="text-blue-600 font-normal">X</span>
                  </span>
                </div>

                {/* Right Contextual Label */}
                <div className="hidden sm:block absolute left-[108%] top-1/2 -translate-y-1/2 whitespace-nowrap text-[9px] md:text-[10px] font-light tracking-[0.2em] text-slate-400 uppercase leading-tight select-none">
                  From<br />Fragmentation<br />To Focus
                </div>
              </div>

              {/* --- BOTTOM ROW: 3 OUTCOME CARDS (Connected directly to circuit drop lines) --- */}
              <div className="absolute top-[81.2%] left-0 w-full h-[52px] z-20">
                {/* Output 1: DECISIONS */}
                <div
                  onMouseEnter={() => setActiveOutput("decisions")}
                  onMouseLeave={() => setActiveOutput(null)}
                  className={`absolute left-[17.5%] -translate-x-1/2 group flex items-center justify-center gap-2 px-3.5 py-2.5 sm:px-5 sm:py-3 rounded-xl bg-white border transition-all duration-200 cursor-pointer shadow-[0_2px_8px_-2px_rgba(15,23,42,0.06)] ${
                    activeOutput === "decisions"
                      ? "border-blue-500 shadow-[0_6px_20px_-4px_rgba(37,99,235,0.2)] -translate-y-0.5"
                      : "border-slate-200/90 hover:border-slate-300"
                  }`}
                >
                  <BarChart3 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-800 group-hover:text-blue-600 transition-colors shrink-0" />
                  <span className="text-[10px] sm:text-xs font-sans font-medium tracking-[0.14em] text-slate-700 uppercase group-hover:text-slate-950 transition-colors whitespace-nowrap">
                    Decisions
                  </span>
                </div>

                {/* Output 2: ACTION */}
                <div
                  onMouseEnter={() => setActiveOutput("action")}
                  onMouseLeave={() => setActiveOutput(null)}
                  className={`absolute left-[50.0%] -translate-x-1/2 group flex items-center justify-center gap-2 px-3.5 py-2.5 sm:px-5 sm:py-3 rounded-xl bg-white border transition-all duration-200 cursor-pointer shadow-[0_2px_8px_-2px_rgba(15,23,42,0.06)] ${
                    activeOutput === "action"
                      ? "border-blue-500 shadow-[0_6px_20px_-4px_rgba(37,99,235,0.2)] -translate-y-0.5"
                      : "border-slate-200/90 hover:border-slate-300"
                  }`}
                >
                  <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 fill-blue-600 group-hover:scale-110 transition-transform shrink-0" />
                  <span className="text-[10px] sm:text-xs font-sans font-medium tracking-[0.14em] text-slate-700 uppercase group-hover:text-slate-950 transition-colors whitespace-nowrap">
                    Action
                  </span>
                </div>

                {/* Output 3: GROWTH */}
                <div
                  onMouseEnter={() => setActiveOutput("growth")}
                  onMouseLeave={() => setActiveOutput(null)}
                  className={`absolute left-[82.5%] -translate-x-1/2 group flex items-center justify-center gap-2 px-3.5 py-2.5 sm:px-5 sm:py-3 rounded-xl bg-white border transition-all duration-200 cursor-pointer shadow-[0_2px_8px_-2px_rgba(15,23,42,0.06)] ${
                    activeOutput === "growth"
                      ? "border-blue-500 shadow-[0_6px_20px_-4px_rgba(37,99,235,0.2)] -translate-y-0.5"
                      : "border-slate-200/90 hover:border-slate-300"
                  }`}
                >
                  <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-800 group-hover:text-blue-600 transition-colors shrink-0" />
                  <span className="text-[10px] sm:text-xs font-sans font-medium tracking-[0.14em] text-slate-700 uppercase group-hover:text-slate-950 transition-colors whitespace-nowrap">
                    Growth
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
