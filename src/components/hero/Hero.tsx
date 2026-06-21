"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import { hero } from "@/lib/content";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

export default function Hero() {
  return (
    <section className="px-4 sm:px-6">
      <div className="relative w-full max-w-[1400px] mx-auto rounded-[48px] bg-white border border-slate-200/50 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.03)] overflow-hidden h-[600px] flex flex-col">
        {/* Background video layer (no overlays, per spec) */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-105 transition-transform duration-1000"
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260505_101331_74f9b798-3f00-4e86-8a01-377aa16ffeaa.mp4"
          />
        </div>

        {/* Hero text content */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE_OUT }}
          className="relative z-20 flex-1 px-8 md:px-16 pt-12 md:pt-16 flex flex-col items-start"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0087d1] border border-slate-200/60 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00aeef]" />
            DPC Ponorogo · Resmi
          </span>

          <h1
            className="mt-6 font-display text-[42px] md:text-[56px] font-medium tracking-tight leading-[1.04] text-[#0a1b33]"
            dangerouslySetInnerHTML={{ __html: hero.headline }}
          />

          <p className="mt-5 max-w-xl font-sans text-[14px] md:text-[15px] leading-relaxed text-[#64748b]">
            {hero.subheadline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href={hero.primaryCta.href}
                className="inline-flex items-center gap-2 bg-gradient-to-br from-[#00aeef] to-[#0087d1] text-white rounded-full px-6 py-3 text-[13px] font-semibold shadow-[0_10px_30px_rgba(0,135,209,0.35)]"
              >
                {hero.primaryCta.label}
                <ChevronRight className="h-4 w-4" strokeWidth={2.25} />
              </Link>
            </motion.div>

            <Link
              href={hero.secondaryCta.href}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur text-[#0a1b33] rounded-full px-6 py-3 text-[13px] font-semibold border border-slate-200/60 shadow-sm hover:border-slate-300 transition-all"
            >
              {hero.secondaryCta.label}
            </Link>
          </div>
        </motion.div>

        {/* Floating bottom navbar */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30">
          <motion.nav
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.35 }}
            className="flex items-center bg-white/90 backdrop-blur-2xl px-1.5 py-1.5 rounded-full shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-slate-200/40"
          >
            <span className="w-9 h-9 grid place-items-center bg-white border border-slate-100 shadow-sm rounded-full text-[#00aeef] text-sm">
              ✦
            </span>
            <Link
              href="/program"
              className="px-4 text-[12px] font-semibold text-slate-500 hover:text-[#0a1b33] transition-colors"
            >
              Program
            </Link>
            <Link
              href="/subsektor"
              className="px-4 text-[12px] font-semibold text-slate-500 hover:text-[#0a1b33] transition-colors"
            >
              Subsektor
            </Link>
            <Link
              href="/daftar"
              className="flex items-center gap-1 bg-white px-5 py-2 rounded-full text-[12px] font-semibold text-[#0a1b33] border border-slate-200/60 shadow-sm hover:border-slate-300 transition-all"
            >
              Daftar Anggota
              <ChevronRight className="h-3.5 w-3.5" strokeWidth={2.25} />
            </Link>
          </motion.nav>
        </div>
      </div>
    </section>
  );
}
