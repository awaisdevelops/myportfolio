import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeColorMeta } from "@/components/ThemeColorMeta";
import { personalInfo, softwareHouse } from "@/data/resume";
import { themes, defaultThemeId } from "@/data/themes";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${personalInfo.name} — ${personalInfo.role}`,
    template: `%s — ${personalInfo.name}`,
  },
  description: personalInfo.summary,
  keywords: [
    "Muhammad Awais Shafique",
    "Awais Shafique",
    "Full-Stack Developer",
    "Mobile App Developer",
    "Flutter Developer",
    "React Developer",
    "Blockchain Developer",
    "Web3 Developer",
    "Next.js Portfolio",
    "Software Engineer Pakistan",
  ],
  authors: [{ name: personalInfo.name, url: personalInfo.website }],
  creator: personalInfo.name,
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${personalInfo.name} — ${personalInfo.role}`,
    description: personalInfo.summary,
    siteName: `${personalInfo.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} — ${personalInfo.role}`,
    description: personalInfo.summary,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport = {
  themeColor: "#08080c",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personalInfo.name,
  jobTitle: personalInfo.role,
  url: siteUrl,
  email: `mailto:${personalInfo.email}`,
  telephone: personalInfo.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Faisalabad",
    addressCountry: "PK",
  },
  sameAs: [
    personalInfo.website,
    ...personalInfo.githubs.map((gh) => gh.url),
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "National Textile University",
  },
  worksFor: [
    { "@type": "Organization", name: softwareHouse.name, url: siteUrl },
    { "@type": "Organization", name: "CryptocurrencyChain", url: personalInfo.website },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme={defaultThemeId}
          themes={themes.map((t) => t.id)}
          enableSystem={false}
          disableTransitionOnChange
        >
          <ThemeColorMeta />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
