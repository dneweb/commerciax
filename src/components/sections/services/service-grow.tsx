"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Target,
  BarChart3,
  Building2,
  Layers,
  Database,
  Mail,
  Phone,
  MessageSquare,
  Calendar,
  ArrowRight,
  User,
} from "lucide-react";

function LinkedinBadge() {
  return (
    <div className="w-4 h-4 rounded-sm bg-[#0a66c2] flex items-center justify-center text-white font-sans font-bold text-[9px] leading-none shrink-0">
      in
    </div>
  );
}

function AdsBadge() {
  return (
    <div className="w-4 h-4 rounded-sm border border-slate-300 flex items-center justify-center text-slate-700 font-sans font-bold text-[9px] leading-none shrink-0">
      A
    </div>
  );
}

interface CustomerItem {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  dotColor: "black";
  y: number; // exact center Y coordinate
}

interface ChannelItem {
  id: string;
  name: string;
  subtitle?: string;
  customIcon?: React.ReactNode;
  icon?: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  dotColor: "blue" | "black";
  y: number; // exact center Y coordinate
}

const CUSTOMER_TRIGGERS: CustomerItem[] = [
  { id: "icp", name: "ICP Definition", icon: Target, dotColor: "black", y: 33 },
  { id: "intent", name: "Intent Data", icon: BarChart3, dotColor: "black", y: 114 },
  { id: "signals", name: "Company Signals", icon: Building2, dotColor: "black", y: 195 },
  { id: "stack", name: "Tech Stack", icon: Layers, dotColor: "black", y: 276 },
  { id: "enrichment", name: "Enrichment", icon: Database, dotColor: "black", y: 357 },
];

const OUTREACH_CHANNELS: ChannelItem[] = [
  {
    id: "email",
    name: "Email",
    icon: Mail,
    dotColor: "blue",
    y: 33,
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    customIcon: <LinkedinBadge />,
    dotColor: "blue",
    y: 114,
  },
  {
    id: "calls",
    name: "Calls",
    icon: Phone,
    dotColor: "black",
    y: 195,
  },
  {
    id: "ads",
    name: "Ads",
    customIcon: <AdsBadge />,
    dotColor: "black",
    y: 276,
  },
  {
    id: "messaging",
    name: "Personalised",
    subtitle: "Messaging",
    icon: MessageSquare,
    dotColor: "blue",
    y: 357,
  },
];

const METRICS = [
  { value: "3x", label: "More qualified leads" },
  { value: "50%", label: "Lower acquisition cost" },
  { value: "2–4 weeks", label: "To see results" },
];

export function ServiceGrow() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  return (
    <div className="w-full">
      {/* Main Top Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-12 items-start mb-4 lg:mb-8">
        {/* Left Column: Headline, Narrative & CTAs */}
        <div className="lg:col-span-4 flex flex-col justify-between pt-1">
          <div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl xl:text-[3.85rem] font-serif font-light tracking-tight leading-[1.03] text-slate-950 mb-3 sm:mb-6">
              B2B Lead
              <br />
              Generation
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-blue-600 ml-1.5 align-baseline" />
            </h3>

            <p className="text-slate-600 font-sans font-light text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-8 max-w-sm">
              AI-powered outreach. Human conversations. Qualified meetings.
            </p>

            <div className="flex flex-wrap items-center gap-3 sm:gap-5">
              <Link
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 sm:gap-2.5 px-6 sm:px-8 py-3 sm:py-3.5 md:py-4 rounded-full bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-sans text-xs sm:text-sm md:text-[15px] font-medium tracking-wide transition-all shadow-[0_4px_20px_-2px_rgba(37,99,235,0.4)] hover:shadow-[0_8px_25px_-2px_rgba(37,99,235,0.5)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
              >
                <span>Get more meetings</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
              </Link>

              <Link
                href="#work"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-sans font-medium text-slate-800 hover:text-blue-700 transition-colors py-2 group"
              >
                <span>See how it works</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Center Column: Engine Architecture Diagram */}
        <div className="lg:col-span-5 relative w-full flex flex-col items-center pt-1 overflow-hidden">
          {/* Stacked Headers matching reference */}
          <div className="w-full max-w-[660px] flex items-start justify-between text-[10px] sm:text-[11px] font-sans font-medium tracking-[0.25em] text-slate-500 uppercase mb-2 sm:mb-4 px-1 leading-tight">
            <div>
              IDEAL
              <br />
              CUSTOMERS
            </div>
            <div className="text-right">
              MULTI-CHANNEL
              <br />
              OUTREACH
            </div>
          </div>

          {/* Interactive Diagram Container with Absolute Mathematical Coordinate System (660px x 390px) */}
          <div className="relative w-full flex justify-center items-center py-1">
            <div className="w-[660px] h-[390px] shrink-0 scale-[0.48] xs:scale-[0.58] sm:scale-[0.76] md:scale-[0.88] lg:scale-100 origin-center select-none my-[-90px] xs:my-[-70px] sm:my-[-40px] md:my-[-20px] lg:my-0">
            {/* SVG Connecting Flow Curves & Precision Anchor Dots (Rendered in the exact same SVG coordinate space) */}
            <svg
              viewBox="0 0 660 390"
              className="absolute inset-0 w-full h-full pointer-events-none"
              fill="none"
            >
              <defs>
                {/* Soft radial blue gradient bloom */}
                <radialGradient id="outreach-bloom" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.32" />
                  <stop offset="40%" stopColor="#60a5fa" stopOpacity="0.16" />
                  <stop offset="70%" stopColor="#93c5fd" stopOpacity="0.05" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Soft ambient bloom background behind "OUTREACH ENGINE" */}
              <circle cx="330" cy="195" r="110" fill="url(#outreach-bloom)" />

              {/* Two Delicate Concentric Circular Rings (Enlarged inner circle for breathing room) */}
              <circle
                cx="330"
                cy="195"
                r="62"
                className="stroke-blue-400/35 fill-none"
                strokeWidth="1"
              />
              <circle
                cx="330"
                cy="195"
                r="86"
                className="stroke-slate-300/35 fill-none"
                strokeWidth="0.85"
              />

              {/* Anchor Dots on 12 o'clock and 6 o'clock of outer ring */}
              <circle cx="330" cy="109" r="2.5" fill="#2563eb" />
              <circle cx="330" cy="281" r="2.5" fill="#2563eb" />

              {/* Left Connector Curves (Starting at (185, y) and converging to (268, 195)) */}
              {[
                {
                  id: "icp",
                  d: "M 185 33 C 235 33, 235 190, 268 195",
                },
                {
                  id: "intent",
                  d: "M 185 114 C 230 114, 240 192, 268 195",
                },
                {
                  id: "signals",
                  d: "M 185 195 L 268 195",
                },
                {
                  id: "stack",
                  d: "M 185 276 C 230 276, 240 198, 268 195",
                },
                {
                  id: "enrichment",
                  d: "M 185 357 C 235 357, 235 200, 268 195",
                },
              ].map((curve) => {
                const active = hoveredNode === curve.id;
                return (
                  <path
                    key={`left-${curve.id}`}
                    d={curve.d}
                    stroke={active ? "#2563eb" : "#cbd5e1"}
                    strokeWidth={active ? "2" : "1.2"}
                    strokeOpacity={active ? 1 : 0.8}
                    className="transition-all duration-300"
                  />
                );
              })}

              {/* Left Card Anchor Dots: Placed at EXACT start of curves (185, y) */}
              {CUSTOMER_TRIGGERS.map((item) => {
                const active = hoveredNode === item.id;
                return (
                  <circle
                    key={`dot-left-${item.id}`}
                    cx="185"
                    cy={item.y}
                    r={active ? "3.5" : "2.5"}
                    fill={active ? "#2563eb" : "#0f172a"}
                    className="transition-all duration-300"
                  />
                );
              })}

              {/* Left 9 o'clock Convergence Focal Node */}
              <circle
                cx="268"
                cy="195"
                r="3.5"
                fill="#2563eb"
                className="shadow-sm"
              />

              {/* Right Connector Curves (Starting from (392, 195) and ending precisely at (475, y)) */}
              {[
                {
                  id: "email",
                  d: "M 392 195 C 425 190, 425 33, 475 33",
                },
                {
                  id: "linkedin",
                  d: "M 392 195 C 420 192, 430 114, 475 114",
                },
                {
                  id: "calls",
                  d: "M 392 195 L 475 195",
                },
                {
                  id: "ads",
                  d: "M 392 195 C 420 198, 430 276, 475 276",
                },
                {
                  id: "messaging",
                  d: "M 392 195 C 425 200, 425 357, 475 357",
                },
              ].map((curve) => {
                const active = hoveredNode === curve.id;
                return (
                  <path
                    key={`right-${curve.id}`}
                    d={curve.d}
                    stroke={active ? "#2563eb" : "#cbd5e1"}
                    strokeWidth={active ? "2" : "1.2"}
                    strokeOpacity={active ? 1 : 0.8}
                    className="transition-all duration-300"
                  />
                );
              })}

              {/* Right Card Anchor Dots: Placed at EXACT end of curves (475, y) */}
              {OUTREACH_CHANNELS.map((item) => {
                const active = hoveredNode === item.id;
                const isBlue = item.dotColor === "blue";
                return (
                  <circle
                    key={`dot-right-${item.id}`}
                    cx="475"
                    cy={item.y}
                    r={active ? "3.5" : "2.5"}
                    fill={active ? "#2563eb" : isBlue ? "#2563eb" : "#0f172a"}
                    className="transition-all duration-300"
                  />
                );
              })}

              {/* Right 3 o'clock Divergence Focal Node */}
              <circle
                cx="392"
                cy="195"
                r="3.5"
                fill="#2563eb"
                className="shadow-sm"
              />

              {/* Center "OUTREACH ENGINE" Typography */}
              <text
                x="330"
                y="191"
                textAnchor="middle"
                fontFamily="var(--font-sans), -apple-system, BlinkMacSystemFont, sans-serif"
                fontSize="12.5"
                fontWeight="700"
                fill="#0f172a"
                letterSpacing="2"
              >
                OUTREACH
              </text>
              <text
                x="330"
                y="208"
                textAnchor="middle"
                fontFamily="var(--font-sans), -apple-system, BlinkMacSystemFont, sans-serif"
                fontSize="12.5"
                fontWeight="700"
                fill="#0f172a"
                letterSpacing="2"
              >
                ENGINE
              </text>
            </svg>

            {/* Left Column: 5 Cards (Anchored at exact positions 0..185px, with center matching Y coordinates) */}
            {CUSTOMER_TRIGGERS.map((item, idx) => {
              const Icon = item.icon;
              const isHovered = hoveredNode === item.id;
              const topY = item.y - 23; // top = center Y - half of 46px

              return (
                <div
                  key={item.id}
                  style={{ top: `${topY}px` }}
                  onMouseEnter={() => setHoveredNode(item.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                  className={`absolute left-0 w-[185px] h-[46px] flex items-center gap-3 px-3.5 rounded-2xl border transition-all duration-300 cursor-pointer ${isHovered
                      ? "bg-white border-blue-500/80 shadow-[0_4px_14px_-2px_rgba(37,99,235,0.18)] scale-[1.02] z-20"
                      : "bg-white border-slate-200/85 hover:border-slate-300 shadow-[0_1px_3px_rgba(15,23,42,0.03)] z-10"
                    }`}
                >
                  <div
                    className={`p-1 rounded-lg transition-colors shrink-0 ${isHovered
                        ? "bg-blue-50 text-blue-600"
                        : "text-slate-700"
                      }`}
                  >
                    <Icon className="w-4 h-4" strokeWidth={1.75} />
                  </div>
                  <span className="text-xs sm:text-[13px] font-sans font-medium text-slate-800 whitespace-nowrap">
                    {item.name}
                  </span>
                </div>
              );
            })}

            {/* Right Column: 5 Cards (Anchored at exact positions 475..660px, with center matching Y coordinates) */}
            {OUTREACH_CHANNELS.map((item, idx) => {
              const Icon = item.icon;
              const isHovered = hoveredNode === item.id;
              const topY = item.y - 23; // top = center Y - half of 46px

              return (
                <div
                  key={item.id}
                  style={{ top: `${topY}px` }}
                  onMouseEnter={() => setHoveredNode(item.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                  className={`absolute right-0 w-[185px] h-[46px] flex items-center gap-3 px-3.5 rounded-2xl border transition-all duration-300 cursor-pointer ${isHovered
                      ? "bg-white border-blue-500/80 shadow-[0_4px_14px_-2px_rgba(37,99,235,0.18)] scale-[1.02] z-20"
                      : "bg-white border-slate-200/85 hover:border-slate-300 shadow-[0_1px_3px_rgba(15,23,42,0.03)] z-10"
                    }`}
                >
                  <div className="shrink-0 flex items-center justify-center text-blue-600">
                    {item.customIcon ? (
                      item.customIcon
                    ) : Icon ? (
                      <Icon className="w-4 h-4 text-blue-600" strokeWidth={1.75} />
                    ) : null}
                  </div>

                  <div className="flex flex-col min-w-0">
                    <span className="text-xs sm:text-[13px] font-sans font-medium text-slate-800 leading-tight whitespace-nowrap">
                      {item.name}
                    </span>
                    {item.subtitle && (
                      <span className="text-[11px] sm:text-xs font-sans font-medium text-slate-800 leading-tight whitespace-nowrap">
                        {item.subtitle}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          </div>
        </div>

        {/* Right Column: Qualified Meetings Floating Card & Arrow */}
        <div className="lg:col-span-3 lg:border-l border-slate-200/80 lg:pl-8 xl:pl-10 pt-1 relative">
          {/* Header */}
          <div className="text-[11px] font-sans font-medium tracking-[0.25em] text-slate-500 uppercase mb-5 leading-tight">
            QUALIFIED
            <br />
            MEETINGS
          </div>

          <div className="relative w-full max-w-[240px] pt-4">
            {/* Horizontal Connector Line from Center Column to Calendar Card with Blue Center Dot */}
            <div className="absolute -left-8 xl:-left-10 top-[88px] w-8 xl:w-10 h-[1.5px] bg-slate-200/90 hidden lg:flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-blue-600 shadow-sm" />
            </div>

            {/* Meetings on your calendar Card */}
            <div className="relative z-10 w-full rounded-3xl bg-white border border-slate-200/85 p-6 shadow-[0_4px_20px_rgba(15,23,42,0.04)] flex flex-col items-center text-center">
              {/* Top soft glowing icon badge */}
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center text-blue-600 mb-3.5">
                <Calendar className="w-6 h-6 stroke-[1.75]" />
              </div>

              <span className="font-serif font-medium text-slate-900 text-base leading-tight">
                Meetings
              </span>
              <span className="text-xs font-sans font-light text-slate-500 mt-1 mb-4">
                on your calendar
              </span>

              {/* Overlapping Avatars Row + Plus button */}
              <div className="flex items-center justify-center">
                <div className="w-7 h-7 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-slate-500 -mr-1.5 shadow-sm">
                  <User className="w-3.5 h-3.5" />
                </div>
                <div className="w-7 h-7 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-slate-500 -mr-1.5 shadow-sm">
                  <User className="w-3.5 h-3.5" />
                </div>
                <div className="w-7 h-7 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-slate-500 -mr-1.5 shadow-sm">
                  <User className="w-3.5 h-3.5" />
                </div>
                <div className="w-7 h-7 rounded-full border border-slate-200 bg-white text-slate-400 flex items-center justify-center text-xs font-medium ml-1">
                  +
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Proof Metrics Strip */}
      <div className="pt-3 sm:pt-4 md:pt-5 border-t border-slate-200/80 grid grid-cols-3 gap-2 sm:gap-6 md:gap-8 items-center">
        {METRICS.map((metric) => (
          <div key={metric.label} className="flex flex-col">
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-[2.75rem] font-serif font-light text-slate-950 tracking-tight leading-none mb-1 sm:mb-2">
              {metric.value}
            </span>
            <span className="text-[10px] sm:text-xs font-sans font-light tracking-wide text-slate-600 truncate">
              {metric.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
