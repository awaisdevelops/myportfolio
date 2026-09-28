export type ThemeOption = {
  id: string;
  name: string;
  description: string;
  swatches: [string, string, string];
};

export const themes: ThemeOption[] = [
  {
    id: "dark-elegance",
    name: "Dark Elegance",
    description: "Charcoal black with cold purple & lavender accents",
    swatches: ["#08080c", "#a78bfa", "#d946ef"],
  },
  {
    id: "minimalist-neutral",
    name: "Minimalist Neutral",
    description: "Sandy beige, crisp white & deep navy",
    swatches: ["#faf4e8", "#1e3a8a", "#94a3fd"],
  },
  {
    id: "pastel-pop",
    name: "Soft Pastel Pop",
    description: "Pearl lustre, mauve & gorse yellow pop",
    swatches: ["#fdfaff", "#9a44b5", "#d9a82a"],
  },
  {
    id: "earthy-organic",
    name: "Earthy Organic",
    description: "Warm cream, forest green & mossy meadow",
    swatches: ["#faf6ed", "#2d6a4f", "#8da35c"],
  },
];

export const defaultThemeId = "dark-elegance";
