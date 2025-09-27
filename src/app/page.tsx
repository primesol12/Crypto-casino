import { Header } from "@/components/Header";
import { CasinoCard } from "@/components/CasinoCard";

const casinos = [
  {
    name: "JB",
    logo: "https://placehold.co/80x80/2E2E2E/FFFFFF?text=JB",
    isNew: true,
    tags: ["Big welcome gift", "Broad bet market", "Crypto options"],
    bonus: "120% first deposit bonus up to",
    bonusTerms: "855€",
    country: "Germany",
    countryCode: "de",
  },
  {
    name: "Willbet.ai",
    logo: "https://placehold.co/80x80/2E2E2E/FFFFFF?text=WillBet",
    isNew: true,
    tags: ["Quick Signup", "Crypto Variety", "Great Design"],
    bonus: "100% first deposit bonus up to",
    bonusTerms: "1000 USDT",
    country: "Germany",
    countryCode: "de",
  },
];

const filters = ["Crypto Rating", "Web3 Betting", "Crypto Bonuses", "Anonymous"];

export default function Home() {
  return (
    <div>
      <Header />
      <main className="container py-8">
        <h1 className="text-4xl font-bold">
          Best Crypto Bonus Offers And Promotions
        </h1>
        <div className="mt-6 flex flex-wrap gap-2">
          {filters.map((filter, index) => (
            <button
              key={filter}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                index === 2
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-8 space-y-6">
          {casinos.map((casino) => (
            <CasinoCard key={casino.name} casino={casino} />
          ))}
        </div>
      </main>
    </div>
  );
}
