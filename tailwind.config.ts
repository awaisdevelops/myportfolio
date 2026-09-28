import type { Config } from "tailwindcss";

function withOpacity(varName: string, defaultAlpha = "1") {
  return ({ opacityValue }: { opacityValue?: string | number }) => {
    // When no explicit /NN modifier is used, Tailwind's corePlugins still pass
    // a placeholder like "var(--tw-border-opacity, 1)" (or the number 1 from
    // some derived plugins) instead of undefined, to support the legacy
    // `border-opacity-*` utilities. We don't use those, so treat that
    // placeholder the same as "no modifier" and fall back to this color's
    // own default alpha instead of Tailwind's implied 1.
    const raw = opacityValue === undefined ? undefined : String(opacityValue);
    const hasExplicitModifier = raw !== undefined && !raw.startsWith("var(--tw-");
    const alpha = hasExplicitModifier ? raw : defaultAlpha;
    return `rgb(var(${varName}) / ${alpha})`;
  };
}

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Tailwind supports opacity-resolver functions as color values at runtime
      // (see docs: "Customizing colors" > CSS variables), but the official
      // Config type only allows strings, so this needs a loose cast.
      colors: {
        bg: withOpacity("--color-bg"),
        surface: withOpacity("--color-surface"),
        ink: withOpacity("--color-ink"),
        muted: withOpacity("--color-muted"),
        edge: withOpacity("--color-border", "var(--color-border-alpha)"),
        accent: {
          DEFAULT: withOpacity("--color-accent"),
          2: withOpacity("--color-accent-2"),
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } as any,
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.7s ease-out forwards",
        blob: "blob 12s infinite ease-in-out",
        "spin-slow": "spin-slow 18s linear infinite",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgb(var(--color-muted) / 0.12) 1px, transparent 1px), linear-gradient(to bottom, rgb(var(--color-muted) / 0.12) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
