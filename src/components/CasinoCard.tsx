import { Gift, Globe, Gem } from "lucide-react";
import Image from "next/image";

type CasinoCardProps = {
  casino: {
    name: string;
    logo: string;
    isNew: boolean;
    tags: string[];
    bonus: string;
    bonusTerms: string;
    country: string;
    countryCode: string;
  };
};

export function CasinoCard({ casino }: CasinoCardProps) {
  const tagIconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
    "Big welcome gift": Gift,
    "Broad bet market": Globe,
    "Crypto options": Gem,
    "Quick Signup": Gift,
    "Crypto Variety": Globe,
    "Great Design": Gem,
  };

  const tagStyles: {
    [key: string]: { wrapper: string; icon: string };
  } = {
    "Big welcome gift": {
      wrapper:
        "border-emerald-400/35 from-emerald-500/25 via-emerald-400/15 to-emerald-500/25 text-emerald-100 shadow-[0_8px_24px_rgba(16,185,129,0.28)] hover:border-emerald-300/60 hover:shadow-[0_10px_28px_rgba(16,185,129,0.36)]",
      icon: "text-emerald-100 drop-shadow-[0_0_8px_rgba(16,185,129,0.55)]",
    },
    "Broad bet market": {
      wrapper:
        "border-sky-400/35 from-sky-500/25 via-sky-400/15 to-sky-500/25 text-sky-100 shadow-[0_8px_24px_rgba(14,165,233,0.28)] hover:border-sky-300/60 hover:shadow-[0_10px_28px_rgba(14,165,233,0.36)]",
      icon: "text-sky-100 drop-shadow-[0_0_8px_rgba(14,165,233,0.55)]",
    },
    "Crypto options": {
      wrapper:
        "border-fuchsia-400/35 from-fuchsia-500/25 via-fuchsia-400/15 to-fuchsia-500/25 text-fuchsia-100 shadow-[0_8px_24px_rgba(217,70,239,0.28)] hover:border-fuchsia-300/60 hover:shadow-[0_10px_28px_rgba(217,70,239,0.36)]",
      icon: "text-fuchsia-100 drop-shadow-[0_0_8px_rgba(217,70,239,0.55)]",
    },
    "Quick Signup": {
      wrapper:
        "border-amber-400/35 from-amber-500/25 via-amber-400/15 to-amber-500/25 text-amber-100 shadow-[0_8px_24px_rgba(245,158,11,0.24)] hover:border-amber-300/60 hover:shadow-[0_10px_28px_rgba(245,158,11,0.32)]",
      icon: "text-amber-100 drop-shadow-[0_0_8px_rgba(245,158,11,0.45)]",
    },
    "Crypto Variety": {
      wrapper:
        "border-teal-400/35 from-teal-500/25 via-teal-400/15 to-teal-500/25 text-teal-100 shadow-[0_8px_24px_rgba(20,184,166,0.26)] hover:border-teal-300/60 hover:shadow-[0_10px_28px_rgba(20,184,166,0.34)]",
      icon: "text-teal-100 drop-shadow-[0_0_8px_rgba(20,184,166,0.48)]",
    },
    "Great Design": {
      wrapper:
        "border-rose-400/35 from-rose-500/25 via-rose-400/15 to-rose-500/25 text-rose-100 shadow-[0_8px_24px_rgba(244,63,94,0.26)] hover:border-rose-300/60 hover:shadow-[0_10px_28px_rgba(244,63,94,0.34)]",
      icon: "text-rose-100 drop-shadow-[0_0_8px_rgba(244,63,94,0.48)]",
    },
  };

  const baseWrapperClasses =
    "relative flex items-center gap-1.5 rounded-full border bg-gradient-to-r px-3 py-1 text-xs font-semibold backdrop-blur-md transition-all";
  const defaultStyle = {
    wrapper:
      "border-cyan-400/35 from-cyan-500/25 via-cyan-400/15 to-cyan-500/25 text-cyan-100 shadow-[0_8px_24px_rgba(34,211,238,0.28)] hover:border-cyan-300/60 hover:shadow-[0_10px_28px_rgba(34,211,238,0.36)]",
    icon: "text-cyan-100 drop-shadow-[0_0_8px_rgba(34,211,238,0.55)]",
  };

  return (
    <div className="rounded-lg bg-card text-card-foreground shadow-sm border border-border">
      <div className="flex flex-col md:flex-row">
        <div className="p-6 flex-1">
          <div className="flex items-center gap-4">
            <Image
              src={casino.logo}
              alt={`${casino.name} logo`}
              width={80}
              height={80}
              className="h-20 w-20 rounded-md"
              unoptimized
            />
            <div>
              <h2 className="text-2xl font-semibold">{casino.name}</h2>
              {casino.isNew && (
                <span className="inline-block bg-destructive text-white text-xs font-bold px-2 py-1 rounded-full mt-1">
                  NEW
                </span>
              )}
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {casino.tags.map((tag) => {
              const Icon = tagIconMap[tag] ?? Gem;
              const style = tagStyles[tag] ?? defaultStyle;

              return (
                <div key={tag} className={`${baseWrapperClasses} ${style.wrapper}`}>
                  <Icon className={`h-4 w-4 ${style.icon}`} />
                  {tag}
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-secondary p-6 flex-1 rounded-b-lg md:rounded-r-lg md:rounded-b-none flex flex-col items-center justify-center text-center">
          <p className="text-lg font-bold text-accent">{casino.bonus}</p>
          <p className="text-lg font-bold text-accent">{casino.bonusTerms}</p>
          <button className="mt-4 w-full rounded-md bg-primary py-3 font-semibold uppercase text-primary-foreground transition-colors hover:bg-primary/90">
            Visit Now
          </button>
          <p className="mt-2 text-sm text-muted-foreground">
            Accepts from {casino.country} 🇩🇪 ✅
          </p>
        </div>
      </div>
    </div>
  );
}
