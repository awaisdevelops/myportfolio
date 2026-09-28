"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { Palette, Check } from "lucide-react";
import clsx from "clsx";
import { themes } from "@/data/themes";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  if (!mounted) {
    return (
      <div className="h-9 w-9 rounded-full border border-edge" aria-hidden />
    );
  }

  const active = themes.find((t) => t.id === theme) ?? themes[0];

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        aria-label="Change color theme"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex h-9 w-9 items-center justify-center rounded-full border border-edge text-muted transition-colors hover:bg-surface"
      >
        <Palette className="h-4 w-4" />
      </button>

      {open && (
        <div
          role="menu"
          className="card-surface absolute right-0 top-11 z-50 w-72 overflow-hidden p-2 shadow-lg"
        >
          <p className="px-3 pb-1.5 pt-1 font-mono text-[11px] font-medium uppercase tracking-wider text-muted">
            Color Theme
          </p>
          {themes.map((t) => {
            const isActive = t.id === theme;
            return (
              <button
                key={t.id}
                type="button"
                role="menuitemradio"
                aria-checked={isActive}
                onClick={() => {
                  setTheme(t.id);
                  setOpen(false);
                }}
                className={clsx(
                  "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors hover:bg-surface",
                  isActive && "bg-surface"
                )}
              >
                <span className="flex flex-none -space-x-1.5">
                  {t.swatches.map((color, i) => (
                    <span
                      key={i}
                      className="h-5 w-5 rounded-full ring-2 ring-bg"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-medium text-ink">
                    {t.name}
                  </span>
                  <span className="block truncate text-xs text-muted">
                    {t.description}
                  </span>
                </span>
                {isActive && (
                  <Check className="h-4 w-4 flex-none text-accent" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
