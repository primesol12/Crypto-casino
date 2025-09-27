import { Star } from "lucide-react";
import Image from "next/image";
import cardTagsData from "@/data/card_tags.json";

type CardTag = {
  id: number;
  text: string;
};

export type Casino = {
  name: string;
  logo: string;
  rating: "New" | "Top" | string;
  tags: number[];
  bonus: string;
  bonusTerms: string;
  country: string;
  countryCode: string;
  filters?: string[];
};

type CasinoCardProps = {
  casino: Casino;
};

const TAG_LOOKUP = (cardTagsData.features as CardTag[]).reduce(
  (acc, { id, text }) => acc.set(id, text),
  new Map<number, string>()
);

const TAG_STYLE_PALETTE = [
  "border-emerald-400/35 from-emerald-500/25 via-emerald-400/15 to-emerald-500/25 text-emerald-100 shadow-[0_8px_24px_rgba(16,185,129,0.28)] hover:border-emerald-300/60 hover:shadow-[0_10px_28px_rgba(16,185,129,0.36)]",
  "border-sky-400/35 from-sky-500/25 via-sky-400/15 to-sky-500/25 text-sky-100 shadow-[0_8px_24px_rgba(14,165,233,0.28)] hover:border-sky-300/60 hover:shadow-[0_10px_28px_rgba(14,165,233,0.36)]",
  "border-fuchsia-400/35 from-fuchsia-500/25 via-fuchsia-400/15 to-fuchsia-500/25 text-fuchsia-100 shadow-[0_8px_24px_rgba(217,70,239,0.28)] hover:border-fuchsia-300/60 hover:shadow-[0_10px_28px_rgba(217,70,239,0.36)]",
  "border-amber-400/35 from-amber-500/25 via-amber-400/15 to-amber-500/25 text-amber-100 shadow-[0_8px_24px_rgba(245,158,11,0.24)] hover:border-amber-300/60 hover:shadow-[0_10px_28px_rgba(245,158,11,0.32)]",
  "border-teal-400/35 from-teal-500/25 via-teal-400/15 to-teal-500/25 text-teal-100 shadow-[0_8px_24px_rgba(20,184,166,0.26)] hover:border-teal-300/60 hover:shadow-[0_10px_28px_rgba(20,184,166,0.34)]",
  "border-rose-400/35 from-rose-500/25 via-rose-400/15 to-rose-500/25 text-rose-100 shadow-[0_8px_24px_rgba(244,63,94,0.26)] hover:border-rose-300/60 hover:shadow-[0_10px_28px_rgba(244,63,94,0.34)]",
];

const BASE_TAG_CLASSES =
  "relative flex items-center gap-1.5 rounded-full border bg-gradient-to-r px-3 py-1 text-xs font-semibold backdrop-blur-md transition-all";

export function CasinoCard({ casino }: CasinoCardProps) {
  const ratingValue = casino.rating;
  const numericRating = Number(ratingValue);
  const isNumericRating = !Number.isNaN(numericRating);

  const baseRatingClasses =
    "mt-1 inline-flex items-center gap-2 rounded-full border bg-gradient-to-r px-3 py-1 text-xs font-semibold uppercase tracking-wide backdrop-blur-md transition-shadow shadow-[0_8px_22px_rgba(56,189,248,0.25)]";

  const ratingVariantClass = (() => {
    if (ratingValue === "New") {
      return "from-fuchsia-600/30 via-purple-500/25 to-indigo-600/30 border-purple-400/40 text-violet-100 shadow-[0_0_25px_rgba(168,85,247,0.45)]";
    }
    if (ratingValue === "Top") {
      return "from-amber-500/35 via-orange-400/25 to-yellow-500/35 border-amber-300/45 text-amber-50 shadow-[0_0_22px_rgba(250,204,21,0.35)]";
    }
    if (isNumericRating) {
      return "from-slate-700/60 via-slate-800/65 to-slate-900/75 border-slate-500/40 text-slate-100 shadow-[0_0_24px_rgba(148,163,184,0.35)]";
    }
    return "from-cyan-500/35 via-blue-500/25 to-cyan-400/35 border-cyan-300/45 text-cyan-100 shadow-[0_0_22px_rgba(56,189,248,0.32)]";
  })();

  const ratingContent = (() => {
    if (ratingValue === "New") {
      return (
        <>
          <span className="inline-flex h-2.5 w-2.5 rounded-full bg-fuchsia-300 shadow-[0_0_12px_rgba(232,121,249,0.85)]" />
          <span>New</span>
        </>
      );
    }
    if (ratingValue === "Top") {
      return (
        <>
          <Star
            className="h-3.5 w-3.5 text-amber-200"
            fill="currentColor"
            strokeWidth={1.5}
          />
          <span>Top Pick</span>
        </>
      );
    }
    if (isNumericRating) {
      return (
        <>
          <div className="flex items-center gap-1 text-amber-300">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                className={`h-3 w-3 ${
                  index < Math.round((numericRating / 10) * 5)
                    ? "fill-amber-300 text-amber-300 drop-shadow-[0_0_8px_rgba(250,204,21,0.6)]"
                    : "fill-transparent text-slate-400"
                }`}
                strokeWidth={1.5}
              />
            ))}
          </div>
          <span className="text-sm font-semibold tracking-tight text-slate-100">
            {numericRating.toFixed(2)}
          </span>
        </>
      );
    }
    return <span>{ratingValue}</span>;
  })();

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
              <span className={`${baseRatingClasses} ${ratingVariantClass}`}>
                {ratingContent}
              </span>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2 overflow-hidden max-h-7">
            {casino.tags.map((tagId, index) => {
              const label = TAG_LOOKUP.get(tagId);
              if (!label) return null;

              const paletteIndex = index % TAG_STYLE_PALETTE.length;
              const paletteClass = TAG_STYLE_PALETTE[paletteIndex];

              return (
                <div
                  key={`${tagId}-${label}`}
                  className={`${BASE_TAG_CLASSES} ${paletteClass}`}
                >
                  {label}
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
