"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";
import { themes } from "@/data/themes";

export function ThemeColorMeta() {
  const { theme } = useTheme();

  useEffect(() => {
    const active = themes.find((t) => t.id === theme);
    if (!active) return;
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", active.swatches[0]);
  }, [theme]);

  return null;
}
