// Logo textual da FastBox — "Box" em verde neon.
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`text-2xl font-extrabold tracking-tight ${className}`}>
      Fast<span className="text-glow">Box</span>
    </span>
  );
}
