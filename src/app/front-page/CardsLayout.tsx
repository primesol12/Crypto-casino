"use client";

import { useState, useMemo } from "react";
import { CasinoCard, type Casino } from "@/components/CasinoCard";
import cardTagsData from "@/data/card_tags.json";

type CardsLayoutProps = {
  casinos: Casino[];
  currentPage: number;
  totalPages: number;
  startIndex: number;
  endIndex: number;
  totalCount: number;
  onPageChange: (page: number) => void;
  activeFilter: string | null;
  onFilterChange: (filter: string | null) => void;
  onFavorite?: (casino: Casino) => void;
  favorites?: Set<string>;
};

const filters = ["Crypto Rating", "Web3 Betting", "Crypto Bonuses", "Anonymous"];

export function CardsLayout({ 
  casinos, 
  currentPage, 
  totalPages, 
  startIndex, 
  endIndex, 
  totalCount, 
  onPageChange,
  activeFilter,
  onFilterChange,
  onFavorite,
  favorites = new Set()
}: CardsLayoutProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"rating" | "name" | "bonus" | "newest">("rating");

  // Enhanced filtering and sorting
  const filteredAndSortedCasinos = useMemo(() => {
    let filtered = casinos;

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(casino => 
        casino.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        casino.bonus.toLowerCase().includes(searchQuery.toLowerCase()) ||
        casino.tags.some(tagId => {
          const tag = cardTagsData.features.find(t => t.id === tagId);
          return tag?.text.toLowerCase().includes(searchQuery.toLowerCase());
        })
      );
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "rating":
          const aRating = a.rating === "New" ? 0 : a.rating === "Top" ? 10 : Number(a.rating) || 0;
          const bRating = b.rating === "New" ? 0 : b.rating === "Top" ? 10 : Number(b.rating) || 0;
          return bRating - aRating;
        case "name":
          return a.name.localeCompare(b.name);
        case "bonus":
          return b.bonus.length - a.bonus.length;
        case "newest":
          return a.rating === "New" ? -1 : b.rating === "New" ? 1 : 0;
        default:
          return 0;
      }
    });

    return filtered;
  }, [casinos, searchQuery, sortBy]);
  return (
    <section className="container py-8">
      {/* Search and Filter Controls */}
      <div className="mb-8 space-y-4">
        {/* Search Input - Hidden by default, shows on focus */}
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search casinos, bonuses, or features..."
            className="w-full px-4 py-2 rounded-lg bg-secondary text-secondary-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            style={{ display: searchQuery ? 'block' : 'none' }}
          />
          {!searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="w-full px-4 py-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-all text-left"
            >
              🔍 Search casinos, bonuses, or features...
            </button>
          )}
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3">
          {["All", ...filters].map((filter) => {
            const targetFilter = filter === "All" ? null : filter;
            const isActive = activeFilter === targetFilter;

            return (
              <button
                key={filter}
                onClick={() => onFilterChange(targetFilter)}
                className={`rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 ${
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

        {/* Sort Options - Hidden by default */}
        <div className="flex flex-wrap gap-2" style={{ display: 'none' }}>
          <span className="text-sm text-muted-foreground">Sort by:</span>
          {[
            { value: "rating", label: "Rating" },
            { value: "name", label: "Name" },
            { value: "bonus", label: "Bonus" },
            { value: "newest", label: "Newest" }
          ].map((option) => (
            <button
              key={option.value}
              onClick={() => setSortBy(option.value as "rating" | "name" | "bonus" | "newest")}
              className={`px-3 py-1 text-xs rounded-full transition-all ${
                sortBy === option.value
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Casino Cards */}
      <div className="space-y-6">
        {filteredAndSortedCasinos.map((casino) => (
          <CasinoCard 
            key={casino.name} 
            casino={casino}
            onFavorite={onFavorite}
            isFavorited={favorites.has(casino.name)}
          />
        ))}
      </div>

      {/* No Results Message */}
      {filteredAndSortedCasinos.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No casinos found matching your criteria.</p>
        </div>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="mt-8 flex items-center justify-center gap-2">
          <button
            onClick={() => {
              if (currentPage > 1) {
                onPageChange(currentPage - 1);
              }
            }}
            disabled={currentPage === 1}
            className="rounded-md bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          
          <div className="flex items-center gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
              // Show first page, last page, current page, and pages around current page
              const shouldShow = 
                page === 1 || 
                page === totalPages || 
                (page >= currentPage - 1 && page <= currentPage + 1);
              
              if (!shouldShow) {
                // Show ellipsis for gaps
                if (page === currentPage - 2 || page === currentPage + 2) {
                  return <span key={page} className="px-2 text-muted-foreground">...</span>;
                }
                return null;
              }

              return (
                <button
                  key={page}
                  onClick={() => onPageChange(page)}
                  className={`rounded-md px-3 py-2 text-sm font-semibold transition-colors ${
                    currentPage === page
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {page}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => {
              if (currentPage < totalPages) {
                onPageChange(currentPage + 1);
              }
            }}
            disabled={currentPage === totalPages}
            className="rounded-md bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      )}

      {/* Results info */}
      <div className="mt-4 text-center text-sm text-muted-foreground">
        Showing {startIndex + 1}-{Math.min(endIndex, totalCount)} of {totalCount} casinos
      </div>
    </section>
  );
}
