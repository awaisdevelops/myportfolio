export function BackgroundFX() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_40%,transparent_100%)]" />
      <div className="absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-accent/20 blur-[100px] animate-blob" />
      <div className="absolute top-1/3 right-1/4 h-96 w-96 rounded-full bg-accent-2/15 blur-[100px] animate-blob [animation-delay:4s]" />
      <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-accent/15 blur-[100px] animate-blob [animation-delay:8s]" />
    </div>
  );
}
