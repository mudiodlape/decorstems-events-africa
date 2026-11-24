import React from 'react';
import {
  PORTFOLIO_FILTERS,
  PortfolioCategory,
  PortfolioItem,
} from '../data/mockData';
import { PortfolioCard } from './PortfolioCard';

export interface SignatureCollectionsProps {
  readonly activeFilter: PortfolioCategory;
  readonly items: readonly PortfolioItem[];
  readonly onFilterChange: (category: PortfolioCategory) => void;
  readonly onSelectItem: (item: PortfolioItem) => void;
}

export const SignatureCollections: React.FC<Readonly<SignatureCollectionsProps>> = ({
  activeFilter,
  items,
  onFilterChange,
  onSelectItem,
}) => {
  return (
    <section className="py-20 bg-[#F3EFEA]" id="signature-collections">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C5A059] block mb-2">
              Curated Archive
            </span>
            <h2 className="font-serif text-3xl lg:text-[44px] text-[#1B3B2B]">
              Signature Event Collections
            </h2>
            <p className="text-base text-[#1C1C1C]/75 font-light mt-2">
              An editorial showcase of immersive floral artistry, architectural marquee
              installations, and grand celebrations across East Africa.
            </p>
          </div>
          {/* Category Filter Tabs */}
          <div
            className="flex flex-wrap items-center gap-2 bg-[#FAF8F5] p-1.5 rounded border border-[#C5A059]/20 self-start md:self-auto"
            id="portfolio-filters"
          >
            {PORTFOLIO_FILTERS.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  data-filter={tab.id}
                  onClick={() => onFilterChange(tab.id)}
                  className={
                    isActive
                      ? 'filter-btn px-4 py-2 rounded text-xs font-semibold uppercase tracking-wider bg-[#1B3B2B] text-[#FAF8F5] transition-all'
                      : 'filter-btn px-4 py-2 rounded text-xs font-semibold uppercase tracking-wider text-[#1C1C1C]/75 hover:text-[#1B3B2B] transition-all'
                  }
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Editorial Grid of 6 Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="portfolio-grid">
          {items.map((item) => (
            <PortfolioCard key={item.id} item={item} onSelect={onSelectItem} />
          ))}
        </div>
      </div>
    </section>
  );
};
