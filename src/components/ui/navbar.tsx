"use client";

import { Logo } from "@/components/ui/logo";
import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { CALENDLY_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Services", href: "/#services" },
    { name: "Products", href: "/#products" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isLinkActive = (href: string) => {
    if (href === "/about") return pathname?.startsWith("/about");
    if (href === "/contact") return pathname?.startsWith("/contact");
    return pathname === href;
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      const targetId = href.replace("/#", "");
      if (pathname === "/") {
        e.preventDefault();
        const elem = document.getElementById(targetId);
        if (elem) {
          elem.scrollIntoView({ behavior: "smooth", block: "start" });
          window.history.pushState(null, "", href);
        }
      }
    }
  };

  return (
    <header className={cn("w-full max-w-5xl mx-auto z-50", className)}>
      <nav
        aria-label="Main Navigation"
        className="relative flex items-center justify-between px-6 py-3 md:px-8 md:py-3.5 rounded-full bg-white/70 backdrop-blur-xl backdrop-saturate-150 border border-white/80 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.95),inset_0_-1px_1px_0_rgba(0,0,0,0.02),0_12px_30px_-4px_rgba(15,23,42,0.06),0_2px_6px_0_rgba(15,23,42,0.03)] transition-all duration-300"
      >
        {/* Brand Logo */}
        <Logo />

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((item) => {
            const isActive = isLinkActive(item.href);

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={cn(
                  "group relative px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ease-out active:scale-95",
                  isActive
                    ? "bg-slate-900 text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-950 hover:bg-slate-900/[0.05]"
                )}
              >
                <span>{item.name}</span>
              </Link>
            );
          })}
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
          <div className="md:hidden absolute top-full mt-2.5 left-0 right-0 p-4 rounded-2xl bg-white/95 backdrop-blur-2xl backdrop-saturate-150 border border-white/80 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.9),0_16px_36px_-6px_rgba(15,23,42,0.12)] flex flex-col space-y-3 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
            <div className="flex flex-col space-y-1">
              {navLinks.map((item) => {
                const isActive = isLinkActive(item.href);

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      setMobileMenuOpen(false);
                      handleNavClick(e, item.href);
                    }}
                    className={cn(
                      "text-xs font-medium px-3.5 py-2.5 rounded-xl transition-colors",
                      isActive
                        ? "bg-slate-950 text-white font-medium"
                        : "text-slate-700 hover:text-slate-950 hover:bg-slate-100/80"
                    )}
                  >
                    {item.name}
                  </Link>
                );
              })}
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
  );
}
