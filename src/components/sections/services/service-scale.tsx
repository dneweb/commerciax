"use client";

import { useState } from "react";
import Link from "next/link";
import { CALENDLY_URL } from "@/lib/constants";
import {
  Code2,
  Database,
  TrendingUp,
  Headphones,
  ArrowRight,
} from "lucide-react";

interface PodItem {
  id: string;
  name: string;
  desc: string;
  icon: typeof Code2;
  position: "top" | "right" | "bottom" | "left";
  x: number;
  y: number;
}

const PODS: PodItem[] = [
  {
    id: "build",
    name: "Build Pod",
    desc: "Full-stack product development",
    icon: Code2,
    position: "top",
    x: 262,
    y: 78,
  },
  {
    id: "ai",
    name: "AI Pod",
    desc: "Integrate AI into your product",
    icon: Database,
    position: "left",
    x: 44,
    y: 211,
  },
  {
    id: "growth",
    name: "Growth Pod",
    desc: "Experiment, acquire, grow",
    icon: TrendingUp,
    position: "right",
    x: 480,
    y: 211,
  },
  {
    id: "support",
    name: "Support Pod",
    desc: "Ongoing product support",
    icon: Headphones,
    position: "bottom",
    x: 262,
    y: 344,
  },
];

const METRICS = [
  { value: "10", label: "DAY AVERAGE KICKOFF" },
  { value: "4", label: "SPECIALISED PODS" },
  { value: "2–10", label: "TEAM MEMBERS" },
  { value: "100%", label: "FLEXIBLE & SCALABLE" },
];

export function ServiceScale() {
  const [hoveredPod, setHoveredPod] = useState<string | null>(null);

  return (
    <div className="w-full">
      {/* Top Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 xl:gap-8 items-center mb-3 lg:mb-4">
        {/* Left Column: Headline, Narrative & CTAs */}
        <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-between pt-1">
          <div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl xl:text-[4.25rem] font-serif font-light tracking-tight leading-[1.0] text-slate-950 mb-3 sm:mb-6">
              Employee
              <br />
              Pods
              <span className="inline-block w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-blue-600 ml-1.5 sm:ml-2 align-baseline" />
            </h3>

            <p className="text-slate-600 font-sans font-light text-sm sm:text-base lg:text-lg xl:text-[1.2rem] leading-relaxed mb-4 sm:mb-7 max-w-lg">
              On-demand technical and growth teams, ready to ship from week one.
            </p>

            <div className="flex flex-wrap items-center gap-3 sm:gap-5">
              <Link
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 sm:gap-2.5 px-6 sm:px-8 py-3 sm:py-3.5 md:py-4 rounded-full bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-sans text-xs sm:text-sm md:text-[15px] font-medium tracking-wide transition-all shadow-[0_4px_20px_-2px_rgba(37,99,235,0.4)] hover:shadow-[0_8px_25px_-2px_rgba(37,99,235,0.5)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
              >
                <span>Build your pod</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
              </Link>

              <Link
                href="#work"
                className="inline-flex items-center gap-2 text-xs sm:text-sm md:text-base font-sans font-medium text-slate-800 hover:text-blue-700 transition-colors py-2 group"
              >
                <span>See how it works</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column: High-Fidelity Orbital Diagram with 4 Pods (Enlarged & Centered) */}
        <div className="lg:col-span-7 xl:col-span-7 relative w-full flex flex-col items-center justify-center pt-1 lg:-ml-6 xl:-ml-12">
          {/* Top-Right Label */}
          <div className="w-full max-w-[850px] xl:max-w-[890px] flex justify-end text-[10px] sm:text-[11px] font-sans font-medium tracking-[0.2em] text-slate-400 uppercase leading-relaxed mb-1 px-2 hidden sm:flex">
            <div>
              SPECIALISED TEAMS.
              <br />
              REAL IMPACT.
            </div>
          </div>

          {/* Interactive Diagram Container with Absolute Mathematical Coordinate System */}
          <div className="relative w-full max-w-[850px] xl:max-w-[890px] aspect-[760/395] mx-auto select-none">
            <svg
              viewBox="0 45 760 395"
              className="w-full h-full overflow-visible select-none"
              fill="none"
            >
              <defs>
                {/* Soft ambient blue radial glow */}
                <radialGradient id="scale-bloom" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.28" />
                  <stop offset="45%" stopColor="#60a5fa" stopOpacity="0.14" />
                  <stop offset="75%" stopColor="#93c5fd" stopOpacity="0.04" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Soft ambient bloom background behind "CX" */}
              <circle cx="380" cy="245" r="115" fill="url(#scale-bloom)" />

              {/* Inner Orbit Circle (R=85) */}
              <circle
                cx="380"
                cy="245"
                r="85"
                className="stroke-blue-400/35 fill-none"
                strokeWidth="1"
              />

              {/* Connecting Cardinal Rays from CX to Pod Cards */}
              {/* Top Ray to Build Pod */}
              <line
                x1="380"
                y1="191"
                x2="380"
                y2="146"
                stroke={hoveredPod === "build" ? "#2563eb" : "#cbd5e1"}
                strokeWidth={hoveredPod === "build" ? "2" : "1.2"}
                className="transition-all duration-300"
              />
              {/* Bottom Ray to Support Pod */}
              <line
                x1="380"
                y1="299"
                x2="380"
                y2="344"
                stroke={hoveredPod === "support" ? "#2563eb" : "#cbd5e1"}
                strokeWidth={hoveredPod === "support" ? "2" : "1.2"}
                className="transition-all duration-300"
              />
              {/* Left Ray to AI Pod */}
              <line
                x1="326"
                y1="245"
                x2="280"
                y2="245"
                stroke={hoveredPod === "ai" ? "#2563eb" : "#cbd5e1"}
                strokeWidth={hoveredPod === "ai" ? "2" : "1.2"}
                className="transition-all duration-300"
              />
              {/* Right Ray to Growth Pod */}
              <line
                x1="434"
                y1="245"
                x2="480"
                y2="245"
                stroke={hoveredPod === "growth" ? "#2563eb" : "#cbd5e1"}
                strokeWidth={hoveredPod === "growth" ? "2" : "1.2"}
                className="transition-all duration-300"
              />

              {/* Continuous Lifecycle Flow Trajectories between the 4 Pods */}
              {/* AI Pod -> Build Pod curve */}
              <path
                d="M 162 211 C 162 135, 230 112, 262 112"
                stroke="#cbd5e1"
                strokeWidth="1"
                strokeOpacity="0.6"
                strokeDasharray="4 4"
              />
              {/* Build Pod -> Growth Pod curve */}
              <path
                d="M 498 112 C 530 112, 598 135, 598 211"
                stroke="#cbd5e1"
                strokeWidth="1"
                strokeOpacity="0.6"
                strokeDasharray="4 4"
              />
              {/* Growth Pod -> Support Pod curve */}
              <path
                d="M 598 279 C 598 355, 530 378, 498 378"
                stroke="#cbd5e1"
                strokeWidth="1"
                strokeOpacity="0.6"
                strokeDasharray="4 4"
              />
              {/* Support Pod -> AI Pod curve */}
              <path
                d="M 262 378 C 230 378, 162 355, 162 279"
                stroke="#cbd5e1"
                strokeWidth="1"
                strokeOpacity="0.6"
                strokeDasharray="4 4"
              />

              {/* Central Glowing CX Node */}
              <circle
                cx="380"
                cy="245"
                r="54"
                className="fill-white/95 stroke-blue-200/90"
                strokeWidth="1"
              />

              {/* Cardinal Dots on Central CX Node Border */}
              <circle cx="380" cy="191" r="2.5" fill="#2563eb" />
              <circle cx="380" cy="299" r="2.5" fill="#2563eb" />
              <circle cx="326" cy="245" r="2.5" fill="#2563eb" />
              <circle cx="434" cy="245" r="2.5" fill="#2563eb" />

              {/* Center Typography: "CX" and "YOUR EXTENDED TEAM" */}
              <text
                x="380"
                y="238"
                textAnchor="middle"
                fontFamily="var(--font-serif), Boska, Georgia, serif"
                fontSize="32"
                fontWeight="500"
                fill="#2563eb"
                letterSpacing="0.5"
              >
                CX
              </text>
              <text
                x="380"
                y="256"
                textAnchor="middle"
                fontFamily="var(--font-sans), -apple-system, BlinkMacSystemFont, sans-serif"
                fontSize="8"
                fontWeight="700"
                fill="#1e3a8a"
                letterSpacing="1.8"
              >
                YOUR EXTENDED
              </text>
              <text
                x="380"
                y="268"
                textAnchor="middle"
                fontFamily="var(--font-sans), -apple-system, BlinkMacSystemFont, sans-serif"
                fontSize="8"
                fontWeight="700"
                fill="#1e3a8a"
                letterSpacing="1.8"
              >
                TEAM
              </text>

              {/* 4 Pod Cards Rendered in exact SVG foreignObject Coordinate System (236px x 68px) */}
              {PODS.map((pod) => {
                const Icon = pod.icon;
                const isHovered = hoveredPod === pod.id;

                return (
                  <foreignObject
                    key={pod.id}
                    x={pod.x}
                    y={pod.y}
                    width={236}
                    height={68}
                    className="overflow-visible"
                  >
                    <div
                      onMouseEnter={() => setHoveredPod(pod.id)}
                      onMouseLeave={() => setHoveredPod(null)}
                      className={`w-[236px] h-[68px] flex items-center justify-between px-4 py-2.5 rounded-2xl bg-white border transition-all duration-300 cursor-pointer ${isHovered
                        ? "border-blue-500/80 shadow-[0_6px_24px_-2px_rgba(37,99,235,0.22)] scale-[1.03] z-20"
                        : "border-slate-200/90 hover:border-slate-300 shadow-[0_4px_16px_rgba(15,23,42,0.05)] z-10"
                        }`}
                    >
                      {/* Left Icon Badge */}
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${isHovered
                          ? "bg-blue-50 text-blue-600"
                          : "bg-slate-100 text-slate-700"
                          }`}
                      >
                        <Icon className="w-5 h-5" strokeWidth={1.75} />
                      </div>

                      {/* Middle Text: Title + Subtitle without truncation */}
                      <div className="flex-1 min-w-0 pl-3 pr-1">
                        <div className="text-[13px] sm:text-sm font-sans font-semibold text-slate-900 leading-snug whitespace-nowrap">
                          {pod.name}
                        </div>
                        <div className="text-[11px] font-sans font-light text-slate-500 leading-tight mt-0.5">
                          {pod.desc}
                        </div>
                      </div>
                    </div>
                  </foreignObject>
                );
              })}
            </svg>
          </div>
        </div>
      </div>

      {/* Bottom Proof Metrics Strip */}
      <div className="pt-3 sm:pt-4 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6 items-start">
        {METRICS.map((metric, idx) => (
          <div
            key={metric.label}
            className={`flex flex-col ${
              idx % 2 === 0 ? "pr-2" : "pl-2"
            } sm:pl-0 sm:pr-0 ${
              idx < METRICS.length - 1 ? "sm:border-r border-slate-200/80 sm:pr-4" : ""
            } ${idx > 0 ? "sm:pl-4" : ""}`}
          >
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-serif font-light text-slate-950 tracking-tight leading-none mb-1 sm:mb-1.5">
              {metric.value}
            </span>
            <span className="text-[10px] sm:text-[11px] font-sans font-medium tracking-[0.14em] uppercase text-slate-500 leading-snug">
              {metric.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
