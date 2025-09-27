"use client";

import { useState, useMemo } from "react";

import { Header } from "@/components/Header";
import { type Casino } from "@/components/CasinoCard";
import casinos from "@/data/casino_cards.json";
import { Hero, CardsLayout } from "./front-page/index";

const ITEMS_PER_PAGE = 6;

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

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

  return (
    <div>
      <Header />
      <main>
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
        />
      </main>
    </div>
  );
}
