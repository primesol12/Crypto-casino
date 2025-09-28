"use client";

import { useState, useMemo } from "react";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { type Casino } from "@/components/CasinoCard";
import { StructuredData } from "@/components/StructuredData";
import casinos from "@/data/casino_cards.json";
import { Hero, CardsLayout } from "./front-page/index";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useErrorBoundary } from "@/hooks/useErrorBoundary";

const ITEMS_PER_PAGE = 6;

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [favorites, setFavorites] = useLocalStorage<Set<string>>("casino-favorites", new Set());
  const { error, resetError } = useErrorBoundary();

  const filteredCasinos = useMemo(() => {
    return (casinos as Casino[]).filter((casino) => {
      if (!activeFilter) return true;
      const groups = casino.filters ?? [];
      return groups.includes(activeFilter);
    });
  }, [activeFilter]);

  const totalPages = Math.ceil(filteredCasinos.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const displayedCasinos = filteredCasinos.slice(startIndex, endIndex);

  // Reset to page 1 when filter changes
  const handleFilterChange = (filter: string | null) => {
    setActiveFilter(filter);
    setCurrentPage(1);
    // Smooth scroll to top when filter changes
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const goToPage = (page: number) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
    // Smooth scroll to top when page changes
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleFavorite = (casino: Casino) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(casino.name)) {
        newFavorites.delete(casino.name);
      } else {
        newFavorites.add(casino.name);
      }
      return newFavorites;
    });
  };

  // Error handling
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
          <p className="text-muted-foreground mb-4">We encountered an error loading the casino data.</p>
          <button 
            onClick={resetError}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <StructuredData casinos={casinos as Casino[]} />
      <Header />
      <main className="flex-1">
        <Hero />

        <CardsLayout
          casinos={displayedCasinos}
          currentPage={currentPage}
          totalPages={totalPages}
          startIndex={startIndex}
          endIndex={endIndex}
          totalCount={filteredCasinos.length}
          onPageChange={goToPage}
          activeFilter={activeFilter}
          onFilterChange={handleFilterChange}
          onFavorite={handleFavorite}
          favorites={favorites}
        />
      </main>
      <Footer />
    </div>
  );
}
