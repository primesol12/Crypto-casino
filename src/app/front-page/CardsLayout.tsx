"use client";

import { CasinoCard, type Casino } from "@/components/CasinoCard";

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
  onFilterChange
}: CardsLayoutProps) {
  return (
    <section className="container py-8">
      {/* Filter Buttons */}
      <div className="mb-8">
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
      </div>

      {/* Casino Cards */}
      <div className="space-y-6">
        {casinos.map((casino) => (
          <CasinoCard key={casino.name} casino={casino} />
        ))}
      </div>

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
