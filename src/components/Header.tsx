"use client";

import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import clsx from "clsx";
import { navLinks, personalInfo } from "@/data/resume";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { Logo } from "./Logo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-edge bg-bg/75 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="section-container flex h-16 items-center justify-between">
        <a
          href="#top"
          className="flex items-center gap-2 font-mono text-lg font-semibold tracking-tight text-ink"
        >
          <Logo className="h-8 w-8 text-[12px]" />
          <span className="hidden sm:inline">{personalInfo.name}</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={personalInfo.resumeFile}
            download
            className="hidden items-center gap-1.5 rounded-full border border-edge px-4 py-2 text-sm font-medium text-muted transition-colors hover:bg-surface hover:text-ink sm:inline-flex"
          >
            <Download className="h-3.5 w-3.5" />
            Resume
          </a>

          <ThemeSwitcher />

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-edge text-muted md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-edge bg-bg/95 px-6 py-4 backdrop-blur-xl md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink hover:bg-surface"
            >
              {link.label}
            </a>
          ))}
          <a
            href={personalInfo.resumeFile}
            download
            className="mt-2 flex items-center gap-1.5 rounded-lg border border-edge px-3 py-2.5 text-sm font-medium text-ink"
          >
            <Download className="h-3.5 w-3.5" />
            Download Resume
          </a>
        </nav>
      )}
    </header>
  );
}
