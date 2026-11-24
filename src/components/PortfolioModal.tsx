import React, { useEffect } from 'react';
import { PortfolioItem } from '../data/mockData';

export interface PortfolioModalProps {
  readonly item: PortfolioItem | null;
  readonly onClose: () => void;
  readonly onInquire: (item: PortfolioItem) => void;
}

export const PortfolioModal: React.FC<Readonly<PortfolioModalProps>> = ({
  item,
  onClose,
  onInquire,
}) => {
  useEffect(() => {
    if (!item) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#1C1C1C]/70 backdrop-blur-sm p-4 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-event-title"
    >
      <div
        className="bg-[#FAF8F5] border border-[#C5A059]/30 rounded shadow-2xl max-w-3xl w-full overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#1B3B2B]">
          <img
            alt={item.imageAlt}
            src={item.image}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.currentTarget;
              if (target.src !== item.fallbackImage) {
                target.src = item.fallbackImage;
              }
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1B3B2B]/80 via-transparent to-transparent" />
          <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#FAF8F5]/95 text-[#1B3B2B] text-[10px] font-semibold uppercase tracking-widest">
            {item.badge}
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#FAF8F5]/90 text-[#1B3B2B] hover:bg-[#1B3B2B] hover:text-[#FAF8F5] transition-colors flex items-center justify-center"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
          <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between text-[#FAF8F5]">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#C5A059]">
                {item.location}
              </p>
              <h3 id="modal-event-title" className="font-serif text-2xl sm:text-3xl mt-0.5">
                {item.title}
              </h3>
            </div>
            <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded bg-[#1B3B2B]/80 border border-[#C5A059]/40 text-[#C5A059]">
              {item.capacityLabel}
            </span>
          </div>
        </div>

        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C5A059] mb-2">
              Curatorial Overview · {item.formatLabel}
            </p>
            <p className="text-sm sm:text-base text-[#1C1C1C]/80 leading-relaxed">
              {item.description}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1B3B2B] mb-3">
              Bespoke Production Highlights
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {item.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-2 text-xs sm:text-sm text-[#1C1C1C]/80 bg-white p-3 rounded border border-[#C5A059]/20"
                >
                  <span className="material-symbols-outlined text-[#C5A059] text-[16px] mt-0.5">
                    auto_awesome
                  </span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 border-t border-[#1C1C1C]/10 flex flex-wrap items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded border border-[#1C1C1C]/20 text-xs font-semibold uppercase tracking-wider text-[#1C1C1C]/75 hover:text-[#1B3B2B] hover:border-[#1B3B2B] transition-colors"
            >
              Close Preview
            </button>
            <button
              type="button"
              onClick={() => {
                onInquire(item);
                onClose();
              }}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded bg-[#1B3B2B] text-[#FAF8F5] text-xs font-semibold uppercase tracking-[0.16em] hover:bg-[#C5A059] hover:text-[#1C1C1C] transition-all duration-300 shadow"
            >
              <span>Inquire About This Theme</span>
              <span className="material-symbols-outlined text-[16px]">calendar_today</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
