"use client";

import { useState } from "react";
import Link from "next/link";
import { CALENDLY_URL } from "@/lib/constants";
import {
  FileText,
  Database,
  Code2,
  MessageSquare,
  LayoutGrid,
  MessageSquareText,
  Settings,
  BarChart3,
  Lightbulb,
  AppWindow,
  ArrowRight,
} from "lucide-react";

interface DataItem {
  id: string;
  name: string;
  icon: typeof FileText;
  dotColor: "blue" | "black";
}

interface OutcomeItem {
  id: string;
  name: string;
  icon: typeof MessageSquareText;
  dotColor: "blue" | "black";
}

const DATA_INPUTS: DataItem[] = [
  { id: "docs", name: "Documents", icon: FileText, dotColor: "black" },
  { id: "dbs", name: "Databases", icon: Database, dotColor: "black" },
  { id: "apis", name: "APIs", icon: Code2, dotColor: "blue" },
  { id: "comms", name: "Communications", icon: MessageSquare, dotColor: "black" },
  { id: "tools", name: "Business Tools", icon: LayoutGrid, dotColor: "blue" },
];

const REAL_OUTCOMES: OutcomeItem[] = [
  { id: "assistants", name: "AI Assistants", icon: MessageSquareText, dotColor: "blue" },
  { id: "automation", name: "Process Automation", icon: Settings, dotColor: "black" },
  { id: "insights", name: "Predictive Insights", icon: BarChart3, dotColor: "blue" },
  { id: "decisions", name: "Smarter Decisions", icon: Lightbulb, dotColor: "blue" },
  { id: "custom-apps", name: "Custom Applications", icon: AppWindow, dotColor: "blue" },
];

const CAPABILITIES = [
  {
    num: "01",
    title: "LLM Applications",
    desc: "Chat, copilots, internal tools",
  },
  {
    num: "02",
    title: "RAG Systems",
    desc: "Your data, trusted answers",
  },
  {
    num: "03",
    title: "Autonomous Agents",
    desc: "Execute real workflows",
  },
  {
    num: "04",
    title: "Predictive Analytics",
    desc: "Forecast, detect, optimize",
  },
  {
    num: "05",
    title: "NLP & Computer Vision",
    desc: "Text, speech, images, video",
  },
];

export function ServiceBuild() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  return (
    <div className="w-full">
      {/* 3-Column Layout: Narrative (Left) + Diagram (Center) + Capabilities (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-12 items-start">
        {/* Left Column: Headline, Narrative & CTAs */}
        <div className="lg:col-span-4 flex flex-col justify-between pt-1">
          <div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl xl:text-[3.85rem] font-serif font-light tracking-tight leading-[1.03] text-slate-950 mb-4 sm:mb-6">
              AI Software
              <br />
              Development
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-blue-600 ml-1.5 align-baseline" />
            </h3>

            <p className="text-slate-600 font-sans font-light text-sm sm:text-base lg:text-lg leading-relaxed mb-5 sm:mb-8 max-w-sm">
              Custom AI applications, RAG systems, predictive models and
              autonomous agents — built around your business.
            </p>

            <div className="flex flex-wrap items-center gap-3 sm:gap-5">
              <Link
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 sm:gap-2.5 px-6 sm:px-8 py-3 sm:py-3.5 md:py-4 rounded-full bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-sans text-xs sm:text-sm md:text-[15px] font-medium tracking-wide transition-all shadow-[0_4px_20px_-2px_rgba(37,99,235,0.4)] hover:shadow-[0_8px_25px_-2px_rgba(37,99,235,0.5)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
              >
                <span>Discuss your use case</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
              </Link>

              <Link
                href="#work"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-sans font-medium text-slate-800 hover:text-blue-700 transition-colors py-2 group"
              >
                <span>See our work</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Center Column: Interactive AI Architecture Diagram */}
        <div className="lg:col-span-5 relative w-full flex flex-col items-center pt-1">
          {/* Column Headers */}
          <div className="w-full flex items-center justify-between text-[10px] sm:text-[11px] font-sans font-medium tracking-[0.25em] text-slate-500 uppercase mb-3 sm:mb-5 px-1">
            <span>YOUR DATA</span>
            <span>REAL OUTCOMES</span>
          </div>

          {/* Interactive Diagram Container */}
          <div className="relative w-full min-h-[340px] sm:min-h-[390px] flex items-center justify-between py-1">
            {/* Left Inputs Column (YOUR DATA) */}
            <div className="relative z-10 flex flex-col gap-2 sm:gap-3 w-[125px] xs:w-[140px] sm:w-[165px] xl:w-[195px] shrink-0">
              {DATA_INPUTS.map((item) => {
                const Icon = item.icon;
                const isHovered = hoveredNode === item.id;
                const isBlueDot = item.dotColor === "blue";

                return (
                  <div
                    key={item.id}
                    onMouseEnter={() => setHoveredNode(item.id)}
                    onMouseLeave={() => setHoveredNode(null)}
                    className={`relative flex items-center gap-2 sm:gap-3 px-2.5 sm:px-3.5 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl border transition-all duration-300 cursor-pointer ${
                      isHovered
                        ? "bg-white border-blue-500/80 shadow-[0_4px_14px_-2px_rgba(37,99,235,0.18)] scale-[1.02]"
                        : "bg-white border-slate-200/85 hover:border-slate-300 shadow-[0_1px_3px_rgba(15,23,42,0.03)]"
                    }`}
                  >
                    <div
                      className={`p-1 rounded-lg transition-colors shrink-0 ${
                        isHovered
                          ? "bg-blue-50 text-blue-600"
                          : "text-slate-700"
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" strokeWidth={1.75} />
                    </div>
                    <span className="text-[11px] xs:text-xs sm:text-[13px] font-sans font-medium text-slate-800 whitespace-nowrap truncate">
                      {item.name}
                    </span>

                    {/* Connector Node on Right Edge (Black / Blue matching reference) */}
                    <span
                      className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                        isHovered
                          ? "bg-blue-600 scale-125 ring-2 ring-blue-400/30"
                          : isBlueDot
                          ? "bg-blue-600"
                          : "bg-slate-900"
                      }`}
                    />
                  </div>
                );
              })}
            </div>

            {/* SVG Connecting Flow Curves & Glowing Central AI Node */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <svg
                viewBox="0 0 680 400"
                className="w-full h-full"
                fill="none"
              >
                <defs>
                  {/* Soft radial blue gradient bloom */}
                  <radialGradient id="ai-center-bloom" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.35" />
                    <stop offset="40%" stopColor="#60a5fa" stopOpacity="0.18" />
                    <stop offset="70%" stopColor="#93c5fd" stopOpacity="0.05" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Soft ambient bloom background behind "AI" */}
                <circle cx="340" cy="200" r="90" fill="url(#ai-center-bloom)" />

                {/* Vertical Dashed Centerline (Top and Bottom of AI hub) */}
                <line
                  x1="340"
                  y1="25"
                  x2="340"
                  y2="156"
                  stroke="#cbd5e1"
                  strokeWidth="1"
                  strokeDasharray="3 3"
                />
                <line
                  x1="340"
                  y1="244"
                  x2="340"
                  y2="375"
                  stroke="#cbd5e1"
                  strokeWidth="1"
                  strokeDasharray="3 3"
                />

                {/* Inner and Outer Delicate Concentric Circular Rings */}
                <circle
                  cx="340"
                  cy="200"
                  r="44"
                  className="stroke-blue-400/35 fill-none"
                  strokeWidth="1"
                />
                <circle
                  cx="340"
                  cy="200"
                  r="68"
                  className="stroke-slate-300/35 fill-none"
                  strokeWidth="0.85"
                />

                {/* Top and Bottom Anchor Dots on the 12 o'clock and 6 o'clock positions of inner ring */}
                <circle cx="340" cy="156" r="2.5" fill="#2563eb" />
                <circle cx="340" cy="244" r="2.5" fill="#2563eb" />

                {/* Left Connector Curves (All converging into the 9 o'clock focal node at 296, 200) */}
                {[
                  {
                    id: "docs",
                    d: "M 185 76 C 245 76, 255 195, 296 200",
                    isAccent: true,
                  },
                  {
                    id: "dbs",
                    d: "M 185 138 C 240 138, 260 196, 296 200",
                    isAccent: false,
                  },
                  {
                    id: "apis",
                    d: "M 185 200 C 235 200, 265 200, 296 200",
                    isAccent: true,
                  },
                  {
                    id: "comms",
                    d: "M 185 262 C 240 262, 260 204, 296 200",
                    isAccent: false,
                  },
                  {
                    id: "tools",
                    d: "M 185 324 C 245 324, 255 205, 296 200",
                    isAccent: false,
                  },
                ].map((curve) => {
                  const active = hoveredNode === curve.id;
                  const strokeColor = active
                    ? "#2563eb"
                    : curve.isAccent
                      ? "#60a5fa"
                      : "#cbd5e1";

                  return (
                    <path
                      key={`left-curve-${curve.id}`}
                      d={curve.d}
                      stroke={strokeColor}
                      strokeWidth={active ? "2" : "1.2"}
                      strokeOpacity={active ? 1 : curve.isAccent ? 0.85 : 0.75}
                      className="transition-all duration-300"
                    />
                  );
                })}

                {/* Left 9 o'clock Convergence Focal Node */}
                <circle
                  cx="296"
                  cy="200"
                  r="3.5"
                  fill="#2563eb"
                  className="shadow-sm"
                />

                {/* Right Connector Curves (All emerging from the 3 o'clock focal node at 384, 200) */}
                {[
                  {
                    id: "assistants",
                    d: "M 384 200 C 425 195, 435 76, 495 76",
                    isAccent: true,
                  },
                  {
                    id: "automation",
                    d: "M 384 200 C 420 198, 440 138, 495 138",
                    isAccent: false,
                  },
                  {
                    id: "insights",
                    d: "M 384 200 C 425 200, 455 200, 495 200",
                    isAccent: false,
                  },
                  {
                    id: "decisions",
                    d: "M 384 200 C 420 202, 440 262, 495 262",
                    isAccent: false,
                  },
                  {
                    id: "custom-apps",
                    d: "M 384 200 C 425 205, 435 324, 495 324",
                    isAccent: false,
                  },
                ].map((curve) => {
                  const active = hoveredNode === curve.id;
                  const strokeColor = active
                    ? "#2563eb"
                    : curve.isAccent
                      ? "#60a5fa"
                      : "#cbd5e1";

                  return (
                    <path
                      key={`right-curve-${curve.id}`}
                      d={curve.d}
                      stroke={strokeColor}
                      strokeWidth={active ? "2" : "1.2"}
                      strokeOpacity={active ? 1 : curve.isAccent ? 0.85 : 0.75}
                      className="transition-all duration-300"
                    />
                  );
                })}

                {/* Right Secondary Companion Curve to AI Assistants */}
                <path
                  d="M 384 200 C 430 190, 445 80, 495 76"
                  stroke="#cbd5e1"
                  strokeWidth="0.8"
                  strokeOpacity="0.5"
                />

                {/* Right 3 o'clock Divergence Focal Node */}
                <circle
                  cx="384"
                  cy="200"
                  r="3.5"
                  fill="#2563eb"
                  className="shadow-sm"
                />

                {/* Center "AI" Typography in Brand Blue Serif */}
                <text
                  x="340"
                  y="209"
                  textAnchor="middle"
                  fontFamily="var(--font-serif), Boska, Georgia, serif"
                  fontSize="28"
                  fontWeight="400"
                  fill="#2563eb"
                  letterSpacing="0.5"
                >
                  AI
                </text>
              </svg>
            </div>

            {/* Right Outcomes Column (REAL OUTCOMES) */}
            <div className="relative z-10 flex flex-col gap-2 sm:gap-3 w-[125px] xs:w-[140px] sm:w-[165px] xl:w-[195px] shrink-0">
              {REAL_OUTCOMES.map((item) => {
                const Icon = item.icon;
                const isHovered = hoveredNode === item.id;
                const isBlackDot = item.dotColor === "black";

                return (
                  <div
                    key={item.id}
                    onMouseEnter={() => setHoveredNode(item.id)}
                    onMouseLeave={() => setHoveredNode(null)}
                    className={`relative flex items-center gap-2 sm:gap-3 px-2.5 sm:px-3.5 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl border transition-all duration-300 cursor-pointer ${
                      isHovered
                        ? "bg-white border-blue-500/80 shadow-[0_4px_14px_-2px_rgba(37,99,235,0.18)] scale-[1.02]"
                        : "bg-white border-slate-200/85 hover:border-slate-300 shadow-[0_1px_3px_rgba(15,23,42,0.03)]"
                    }`}
                  >
                    {/* Connector Node on Left Edge (Black for Process Automation, Blue for others as in reference) */}
                    <span
                      className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                        isHovered
                          ? "bg-blue-600 scale-125 ring-2 ring-blue-400/30"
                          : isBlackDot
                          ? "bg-slate-900"
                          : "bg-blue-600"
                      }`}
                    />

                    <div
                      className={`p-1 rounded-lg transition-colors shrink-0 ${
                        isHovered
                          ? "bg-blue-50 text-blue-600"
                          : "text-slate-700"
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" strokeWidth={1.75} />
                    </div>
                    <span className="text-[11px] xs:text-xs sm:text-[13px] font-sans font-medium text-slate-800 whitespace-nowrap truncate">
                      {item.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Key Capabilities - Top-aligned with YOUR DATA */}
        <div className="lg:col-span-3 lg:border-l border-slate-200/80 lg:pl-6 xl:pl-10 pt-1">
          {/* Header - Identical height & margin to YOUR DATA / REAL OUTCOMES */}
          <div className="text-[10px] sm:text-[11px] font-sans font-medium tracking-[0.25em] text-slate-500 uppercase mb-3 sm:mb-5">
            KEY CAPABILITIES
          </div>

          {/* Capabilities List - Starts level with Documents / AI Assistants */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4 lg:gap-5 xl:gap-6">
            {CAPABILITIES.map((cap) => (
              <div key={cap.num} className="group flex items-start gap-3 sm:gap-4">
                <span className="text-xs font-mono font-normal text-slate-400 shrink-0 pt-0.5 group-hover:text-blue-600 transition-colors">
                  {cap.num}
                </span>
                <div>
                  <h4 className="font-serif font-normal text-slate-900 text-base sm:text-lg md:text-xl tracking-tight leading-snug group-hover:text-blue-700 transition-colors">
                    {cap.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs md:text-[13px] font-sans font-light text-slate-500 mt-0.5 sm:mt-1 leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

