"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  Phone,
  Clock,
  MapPin,
  Calendar,
  Copy,
  Check,
  Building2,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/sections/footer";
import { CALENDLY_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

// Service options matching the brief
const HELP_OPTIONS = [
  "AI Software Development",
  "B2B Lead Generation",
  "Employee Pods (Remote Staffing)",
  "SaaS Product Studio",
  "Neweb.ai — AI Website Builder",
  "Fonda.co — AI Co-Founder",
  "Partnership / Other",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    role: "",
    message: "",
  });

  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate clean dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  return (
    <div className="relative min-h-screen w-full text-slate-900 bg-[#fcfbf9] font-sans font-light selection:bg-blue-500/30 overflow-x-clip">
      {/* Top Atmosphere Radial Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 right-0 h-[650px] -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(37,99,235,0.08)_0%,rgba(248,250,252,0)_100%)]"
      />

      {/* Persistent Top Navigation */}
      <div className="px-6 py-6 md:px-12 md:py-8">
        <Navbar />
      </div>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pt-10 pb-24 md:pt-14 md:pb-32">
        {/* Editorial Overline Folio */}
        <div className="flex items-center gap-3.5 mb-6 select-none">
          <span className="h-px w-8 bg-slate-300" />
          <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.22em] text-slate-500 font-medium">
            Direct Inquiries
          </span>
          <span className="text-slate-300">/</span>
          <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.22em] text-slate-400">
            Global Studio
          </span>
        </div>

        {/* Hero Headline & Intro */}
        <div className="max-w-3xl mb-14 md:mb-18">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-light tracking-tight leading-[1.05] text-slate-950 mb-6">
            Start the <span className="italic text-blue-600 font-light pr-2">conversation.</span>
          </h1>
          <p className="text-slate-600 font-sans font-light text-base sm:text-lg md:text-xl leading-relaxed">
            Tell us what you&apos;re looking to build, scale, or automate. We reply within 24 hours with senior engineers and transparent timelines — zero sales runaround.
          </p>
        </div>

        {/* 2-Column Asymmetric Grid: Info & Global Hubs (Left) + Interactive Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* ========================================================================= */}
          {/* LEFT COLUMN: GLOBAL HUBS & DIRECT LINES (5 Cols)                          */}
          {/* ========================================================================= */}
          <div className="lg:col-span-5 flex flex-col space-y-10 lg:pr-4">
            {/* Quick Call Out / Calendly Banner */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-[0_12px_30px_-10px_rgba(15,23,42,0.05)] flex flex-col justify-between group">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 font-semibold">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Instant Intro Call</span>
                </div>
                <span className="text-[11px] text-slate-400 font-mono">15–30 min</span>
              </div>
              <p className="text-slate-600 text-sm font-light leading-relaxed mb-5">
                Prefer to talk through your project directly with an engineering partner right away?
              </p>
              <Link
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white text-xs sm:text-sm font-medium tracking-wide transition-all shadow-[0_4px_16px_-2px_rgba(37,99,235,0.35)] hover:shadow-[0_6px_20px_-2px_rgba(37,99,235,0.45)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Book a call</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

            {/* Direct Lines Section */}
            <div>
              <h2 className="text-xs uppercase tracking-[0.2em] text-slate-400 font-mono mb-4">
                Direct Lines
              </h2>
              <div className="divide-y divide-slate-200/80 rounded-2xl border border-slate-200/90 bg-white/80 backdrop-blur-md overflow-hidden shadow-sm">
                {/* Phone */}
                <div className="p-4 sm:p-5 flex items-center justify-between hover:bg-slate-50/80 transition-colors group">
                  <div>
                    <span className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-0.5">
                      Phone
                    </span>
                    <a
                      href="tel:+19789811118"
                      className="text-sm sm:text-base font-mono text-slate-900 font-medium hover:text-blue-600 transition-colors"
                    >
                      +1 978 981 1118
                    </a>
                  </div>
                  <button
                    onClick={() => handleCopy("+19789811118", "phone")}
                    aria-label="Copy phone number"
                    className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                  >
                    {copiedKey === "phone" ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* General Email */}
                <div className="p-4 sm:p-5 flex items-center justify-between hover:bg-slate-50/80 transition-colors group">
                  <div>
                    <span className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-0.5">
                      General Inquiries
                    </span>
                    <a
                      href="mailto:info@commerciax.com"
                      className="text-sm sm:text-base text-slate-900 font-medium hover:text-blue-600 transition-colors"
                    >
                      info@commerciax.com
                    </a>
                  </div>
                  <button
                    onClick={() => handleCopy("info@commerciax.com", "general")}
                    aria-label="Copy general email"
                    className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                  >
                    {copiedKey === "general" ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Careers */}
                <div className="p-4 sm:p-5 flex items-center justify-between hover:bg-slate-50/80 transition-colors group">
                  <div>
                    <span className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-0.5">
                      Careers & Talent
                    </span>
                    <a
                      href="mailto:careers@commerciax.com"
                      className="text-sm sm:text-base text-slate-900 font-medium hover:text-blue-600 transition-colors"
                    >
                      careers@commerciax.com
                    </a>
                  </div>
                  <button
                    onClick={() => handleCopy("careers@commerciax.com", "careers")}
                    aria-label="Copy careers email"
                    className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                  >
                    {copiedKey === "careers" ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Partners */}
                <div className="p-4 sm:p-5 flex items-center justify-between hover:bg-slate-50/80 transition-colors group">
                  <div>
                    <span className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-0.5">
                      Partnerships
                    </span>
                    <a
                      href="mailto:partners@commerciax.com"
                      className="text-sm sm:text-base text-slate-900 font-medium hover:text-blue-600 transition-colors"
                    >
                      partners@commerciax.com
                    </a>
                  </div>
                  <button
                    onClick={() => handleCopy("partners@commerciax.com", "partners")}
                    aria-label="Copy partners email"
                    className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                  >
                    {copiedKey === "partners" ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Global Offices Section */}
            <div>
              <h2 className="text-xs uppercase tracking-[0.2em] text-slate-400 font-mono mb-4">
                Office Locations
              </h2>
              <div className="space-y-4">
                {/* India Office */}
                <div className="p-6 rounded-2xl border border-slate-200/90 bg-white/90 shadow-sm transition-all hover:border-slate-300">
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span className="text-xs font-mono font-semibold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                      <Building2 className="w-3.5 h-3.5 text-blue-600" />
                      India Studio & HQ
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                      IST GMT+5:30
                    </span>
                  </div>
                  <address className="not-italic text-sm text-slate-600 font-light leading-relaxed mb-3">
                    909, Sharan Circle Business Hub, <br />
                    Zundal Circle, Ahmedabad, Gujarat, India — 382421
                  </address>
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-mono pt-2 border-t border-slate-100">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>Hours: Mon–Fri, 10:00–19:00 IST</span>
                  </div>
                </div>

                {/* USA Office */}
                <div className="p-6 rounded-2xl border border-slate-200/90 bg-white/90 shadow-sm transition-all hover:border-slate-300">
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span className="text-xs font-mono font-semibold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                      <Building2 className="w-3.5 h-3.5 text-blue-600" />
                      United States Office
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                      MST GMT-7
                    </span>
                  </div>
                  <address className="not-italic text-sm text-slate-600 font-light leading-relaxed mb-3">
                    30 N Gould St Ste R, <br />
                    Sheridan, WY 82801, United States
                  </address>
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-mono pt-2 border-t border-slate-100">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>Hours: Mon–Fri, 09:00–18:00 MST</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* RIGHT COLUMN: INTERACTIVE INQUIRY FORM (7 Cols)                           */}
          {/* ========================================================================= */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-12 shadow-[0_20px_60px_-15px_rgba(15,23,42,0.06)] relative overflow-hidden">
              {isSubmitted ? (
                /* Success Confirmation State */
                <div className="py-12 sm:py-16 text-center space-y-6 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-blue-50 border border-blue-200 text-blue-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-slate-950">
                    Message Received.
                  </h3>
                  <p className="text-slate-600 font-sans font-light text-base max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out, <span className="font-medium text-slate-900">{formData.firstName}</span>. A senior partner will review your inquiry and get back to you within 24 hours.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                      href={CALENDLY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-medium transition-colors"
                    >
                      <span>Book a call</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          firstName: "",
                          lastName: "",
                          email: "",
                          company: "",
                          role: "",
                          message: "",
                        });
                        setSelectedServices([]);
                      }}
                      className="text-xs sm:text-sm font-medium text-slate-600 hover:text-slate-950 py-2.5 transition-colors cursor-pointer"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                /* Interactive Form */
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Row 1: First Name & Last Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-xs uppercase tracking-wider text-slate-500 font-mono mb-2"
                      >
                        First Name <span className="text-blue-600">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        required
                        value={formData.firstName}
                        onChange={(e) =>
                          setFormData({ ...formData, firstName: e.target.value })
                        }
                        placeholder="Alex"
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-50/60 border border-slate-200 text-slate-900 text-sm font-light focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-xs uppercase tracking-wider text-slate-500 font-mono mb-2"
                      >
                        Last Name <span className="text-blue-600">*</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        required
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData({ ...formData, lastName: e.target.value })
                        }
                        placeholder="Chen"
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-50/60 border border-slate-200 text-slate-900 text-sm font-light focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  {/* Row 2: Work Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs uppercase tracking-wider text-slate-500 font-mono mb-2"
                    >
                      Work Email <span className="text-blue-600">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-50/60 border border-slate-200 text-slate-900 text-sm font-light focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400"
                    />
                  </div>

                  {/* Row 3: Company & Role */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-xs uppercase tracking-wider text-slate-500 font-mono mb-2"
                      >
                        Company <span className="text-blue-600">*</span>
                      </label>
                      <input
                        type="text"
                        id="company"
                        required
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        placeholder="Acme Labs"
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-50/60 border border-slate-200 text-slate-900 text-sm font-light focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="role"
                        className="block text-xs uppercase tracking-wider text-slate-500 font-mono mb-2"
                      >
                        Role
                      </label>
                      <input
                        type="text"
                        id="role"
                        value={formData.role}
                        onChange={(e) =>
                          setFormData({ ...formData, role: e.target.value })
                        }
                        placeholder="Founder / CTO / VP Product"
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-50/60 border border-slate-200 text-slate-900 text-sm font-light focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  {/* Row 4: What can we help with? (Multi-select Chips) */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-slate-500 font-mono mb-3">
                      What can we help with?
                    </label>
                    <div className="flex flex-wrap gap-2.5">
                      {HELP_OPTIONS.map((option) => {
                        const isSelected = selectedServices.includes(option);

                        return (
                          <button
                            type="button"
                            key={option}
                            onClick={() => toggleService(option)}
                            className={cn(
                              "px-3.5 py-2 rounded-xl text-xs sm:text-sm transition-all duration-200 cursor-pointer text-left",
                              isSelected
                                ? "bg-blue-600 text-white shadow-sm ring-2 ring-blue-600/30"
                                : "bg-slate-100/80 hover:bg-slate-200/80 text-slate-700 border border-slate-200/60"
                            )}
                          >
                            <span>{option}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Row 5: Tell us more */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label
                        htmlFor="message"
                        className="block text-xs uppercase tracking-wider text-slate-500 font-mono"
                      >
                        Tell us more <span className="text-blue-600">*</span>
                      </label>
                      <span className="text-[11px] text-slate-400 font-mono">
                        Scope, goals, or timeline
                      </span>
                    </div>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Give us a brief overview of your vision, target timeline, or what problem you need solved..."
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-50/60 border border-slate-200 text-slate-900 text-sm font-light focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400 resize-y"
                    />
                  </div>

                  {/* Submit Button & Direct Call Notice */}
                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 active:bg-blue-700 disabled:opacity-60 text-white font-sans text-sm sm:text-[15px] font-medium tracking-wide transition-all shadow-[0_4px_20px_-2px_rgba(37,99,235,0.4)] hover:shadow-[0_8px_25px_-2px_rgba(37,99,235,0.5)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                    >
                      <span>{isSubmitting ? "Sending..." : "Send message"}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>

                    <div className="text-xs text-slate-500 font-sans">
                      <span>Prefer a direct call? </span>
                      <Link
                        href={CALENDLY_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline font-medium inline-flex items-center gap-0.5"
                      >
                        <span>Schedule a call</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>

                  {/* Privacy Policy Disclaimer */}
                  <p className="text-[11px] text-slate-400 font-sans leading-relaxed pt-2 border-t border-slate-100">
                    By sending, you agree to our{" "}
                    <Link
                      href="https://commerciax.com/privacy.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline text-slate-500 hover:text-slate-800"
                    >
                      Privacy Policy
                    </Link>
                    . We never share your data or send unsolicited marketing.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Reusable Dark Footer */}
      <Footer />
    </div>
  );
}
