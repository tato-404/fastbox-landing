import logo from "@/assets/logo.png";

export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <img
        src={logo}
        alt="FastBox Logo"
        className="w-10 h-10 object-contain"
      />

      <span className="text-xl font-extrabold tracking-tight">
        Fast<span className="text-primary">Box24h</span>
      </span>
    </div>
  );
}
