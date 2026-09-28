import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BackgroundFX } from "@/components/BackgroundFX";

export default function NotFound() {
  return (
    <>
      <BackgroundFX />
      <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <span className="font-mono text-sm font-medium tracking-wider text-accent">
          404
        </span>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          This page doesn&apos;t exist
        </h1>
        <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
          The page you&apos;re looking for may have moved or never existed.
          Let&apos;s get you back on track.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-bg shadow-lg shadow-ink/10 transition-transform hover:-translate-y-0.5"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
      </div>
    </>
  );
}
