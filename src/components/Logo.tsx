import clsx from "clsx";

export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={clsx(
        "relative flex flex-none items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-accent to-accent-2 shadow-sm ring-1 ring-white/20",
        className
      )}
    >
      <span
        aria-hidden
        className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-black/10"
      />
      <span className="relative font-mono font-bold leading-none tracking-tighter text-white">
        M<span className="text-white/60">/</span>S
      </span>
    </span>
  );
}
