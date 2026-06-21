"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, ChevronRight } from "lucide-react";
import { nav } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50">
      <div
        className={cn(
          "transition-all duration-300",
          scrolled
            ? "bg-white/80 backdrop-blur-xl border-b border-slate-200/60 shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="flex h-16 items-center justify-between gap-4">
            <Link href="/" aria-label="GEKRAFS Ponorogo — Beranda">
              <Logo />
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {nav.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative px-3.5 py-2 text-[13px] font-semibold rounded-full transition-colors",
                      active
                        ? "text-[#0a1b33]"
                        : "text-slate-500 hover:text-[#0a1b33]"
                    )}
                  >
                    {item.label}
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 -z-10 rounded-full bg-slate-100"
                        transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-2">
              <Link
                href="/daftar"
                className="hidden sm:inline-flex items-center gap-1 bg-gradient-to-br from-[#00aeef] to-[#0087d1] text-white rounded-full px-5 py-2.5 text-[13px] font-semibold shadow-sm hover:scale-[1.03] active:scale-[0.97] transition-transform"
              >
                Gabung GEKRAFS
                <ChevronRight className="h-4 w-4" strokeWidth={2.25} />
              </Link>
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-label={open ? "Tutup menu" : "Buka menu"}
                aria-expanded={open}
                className="lg:hidden grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-[#0a1b33]"
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="lg:hidden border-b border-slate-200/60 bg-white/95 backdrop-blur-xl"
          >
            <div className="mx-auto max-w-[1400px] px-5 sm:px-8 py-4">
              <div className="grid grid-cols-2 gap-1.5">
                {nav.map((item) => {
                  const active =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "rounded-xl px-4 py-3 text-sm font-semibold transition-colors",
                        active
                          ? "bg-slate-100 text-[#0a1b33]"
                          : "text-slate-600 hover:bg-slate-50"
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
              <Link
                href="/daftar"
                className="mt-3 flex items-center justify-center gap-1 bg-gradient-to-br from-[#00aeef] to-[#0087d1] text-white rounded-full px-5 py-3 text-sm font-semibold"
              >
                Gabung GEKRAFS
                <ChevronRight className="h-4 w-4" strokeWidth={2.25} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
