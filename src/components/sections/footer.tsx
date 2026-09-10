"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="footer"
      aria-label="Site Footer"
      className="relative w-full bg-[#070a12] text-slate-300 border-t border-slate-800/90 font-sans font-light selection:bg-blue-500/30 overflow-hidden"
    >
      {/* Subtle top ambient glow line */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-3xl h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 pt-14 sm:pt-16 md:pt-20 pb-10 sm:pb-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 sm:pb-14 border-b border-slate-800/70">
          {/* Col 1: Brand & Purpose (5 cols on desktop) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* White transparent brand logo */}
              <div className="mb-5 inline-block">
                <Link
                  href="/"
                  className="group inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                  aria-label="COMMERCIAX Home"
                >
                  <Image
                    src="/logo-white.png"
                    alt="COMMERCIAX"
                    width={253}
                    height={34}
                    priority
                    className="h-6 sm:h-7 w-auto object-contain transition-opacity duration-200 hover:opacity-90 active:scale-[0.98]"
                  />
                </Link>
              </div>

              <p className="text-slate-400 text-sm sm:text-base font-light leading-relaxed max-w-sm">
                AI-native engineering, product development and growth systems — built by senior teams and shipped at production speed.
              </p>
            </div>
          </div>

          {/* Col 2: Navigation (2 cols on desktop) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs uppercase tracking-[0.2em] text-slate-400 font-semibold font-mono mb-4 sm:mb-5">
              Capabilities
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="#services" className="text-slate-400 hover:text-white transition-colors">
                  AI Software Dev
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-slate-400 hover:text-white transition-colors">
                  B2B Lead Gen
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-slate-400 hover:text-white transition-colors">
                  Employee Pods
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-slate-400 hover:text-white transition-colors">
                  SaaS Product Studio
                </Link>
              </li>
              <li>
                <Link href="#products" className="text-slate-400 hover:text-white transition-colors">
                  Our Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Company (2 cols on desktop) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs uppercase tracking-[0.2em] text-slate-400 font-semibold font-mono mb-4 sm:mb-5">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Global Hubs & Contact (3 cols on desktop) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs uppercase tracking-[0.2em] text-slate-400 font-semibold font-mono mb-4 sm:mb-5">
              Presence & Inquiries
            </h3>
            <div className="space-y-4 text-sm">
              <div>
                <span className="block text-xs uppercase tracking-wider text-slate-400 mb-1">Global Coverage</span>
                <p className="text-slate-300 font-mono text-xs">
                  IN · US · UAE · KR · AU
                </p>
              </div>

              <div>
                <span className="block text-xs uppercase tracking-wider text-slate-400 mb-1">Direct Inquiries</span>
                <a
                  href="mailto:contact@commerciax.com"
                  className="inline-flex items-center gap-1.5 text-slate-200 hover:text-blue-400 transition-colors text-sm font-medium"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>contact@commerciax.com</span>
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Legal & Social */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-1.5 text-slate-400 text-center sm:text-left">
            <span>© {currentYear} COMMERCIAX Inc. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6 text-slate-400">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="COMMERCIAX on X"
              className="hover:text-white transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="COMMERCIAX on LinkedIn"
              className="hover:text-white transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0-.02-3.28 1.64 1.64 0 0 0 .02 3.28m1.39 9.74v-8.37H5.07v8.37h2.78z" />
              </svg>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="COMMERCIAX on GitHub"
              className="hover:text-white transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <Link href="#" className="hover:text-slate-300 transition-colors">
              Privacy
            </Link>
            <span className="text-slate-800">·</span>
            <Link href="#" className="hover:text-slate-300 transition-colors">
              Terms
            </Link>
            <span className="text-slate-800">·</span>
            <Link href="#" className="hover:text-slate-300 transition-colors">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
