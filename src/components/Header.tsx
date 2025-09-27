import { Search, Menu } from "lucide-react";

export function Header() {
  return (
    <header className="border-b border-border">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          {/* You can replace this with your actual logo component or SVG */}
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
            SBG
          </div>
          <span className="text-lg font-semibold">SMART BETTING GUIDE</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="rounded-full border p-2 transition-colors hover:bg-white/10">
            <Search className="h-5 w-5" />
          </button>
          <button className="rounded-full border p-2 transition-colors hover:bg-white/10">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
