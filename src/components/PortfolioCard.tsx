import React from 'react';
import { PortfolioItem } from '../data/mockData';

export interface PortfolioCardProps {
  readonly item: PortfolioItem;
  readonly onSelect: (item: PortfolioItem) => void;
}

export const PortfolioCard: React.FC<Readonly<PortfolioCardProps>> = ({ item, onSelect }) => {
  return (
    <div
      className="portfolio-item group bg-[#FAF8F5] rounded overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
      data-category={item.category}
      onClick={() => onSelect(item)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(item);
        }
      }}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          alt={item.imageAlt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          src={item.image}
          onError={(e) => {
            const target = e.currentTarget;
            if (target.src !== item.fallbackImage) {
              target.src = item.fallbackImage;
            }
          }}
        />
        <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#FAF8F5]/95 text-[#1B3B2B] text-[10px] font-semibold uppercase tracking-widest">
          {item.badge}
        </span>
      </div>
      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#C5A059] mb-1">
            {item.location}
          </p>
          <h3 className="font-serif text-xl text-[#1B3B2B]">{item.title}</h3>
          <p className="text-sm text-[#1C1C1C]/75 mt-2 leading-relaxed">{item.description}</p>
        </div>
        <div className="pt-4 mt-4 border-t border-[#1C1C1C]/10 flex items-center justify-between text-xs uppercase tracking-wider text-[#1C1C1C]/65">
          <span>{item.formatLabel}</span>
          <span className="text-[#C5A059] font-semibold">{item.capacityLabel}</span>
        </div>
      </div>
    </div>
  );
};
