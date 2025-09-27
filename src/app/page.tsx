"use client";

import { useState } from "react";

import { Header } from "@/components/Header";
import { CasinoCard, type Casino } from "@/components/CasinoCard";
import casinos from "@/data/casino_cards.json";

const filters = ["Crypto Rating", "Web3 Betting", "Crypto Bonuses", "Anonymous"];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const displayedCasinos = (casinos as Casino[]).filter((casino) => {
    if (!activeFilter) return true;
    const groups = casino.filters ?? [];
    return groups.includes(activeFilter);
  });

  return (
    <div>
      <Header />
      <main className="container py-8">
        <h1 className="text-4xl font-bold">
          Best Crypto Bonus Offers And Promotions
        </h1>
        <div className="mt-6 flex flex-wrap gap-2">
          {["All", ...filters].map((filter) => {
            const targetFilter = filter === "All" ? null : filter;
            const isActive = activeFilter === targetFilter;

            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(targetFilter)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        <div className="mt-8 space-y-6">
          {displayedCasinos.map((casino) => (
            <CasinoCard key={casino.name} casino={casino} />
          ))}
        </div>
      </main>
    </div>
  );
}
