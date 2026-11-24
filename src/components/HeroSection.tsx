import React from 'react';
import { HERO_DATA } from '../data/mockData';

export interface HeroSectionProps {
  readonly id?: string;
}

export const HeroSection: React.FC<Readonly<HeroSectionProps>> = () => {
  return (
    <section className="relative w-full h-[85vh] min-h-[620px] max-h-[820px] overflow-hidden flex items-center">
      {/* Background Photography */}
      <img
        alt={HERO_DATA.backgroundAlt}
        className="absolute inset-0 w-full h-full object-cover object-center"
        src={HERO_DATA.backgroundImage}
        onError={(e) => {
          const target = e.currentTarget;
          if (target.src !== HERO_DATA.backgroundFallback) {
            target.src = HERO_DATA.backgroundFallback;
          }
        }}
      />
      {/* Editorial Scrims */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1B3B2B]/85 via-[#1B3B2B]/55 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#1B3B2B]/70 via-transparent to-[#1B3B2B]/25"></div>
      {/* Hero Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 w-full">
        <div className="max-w-3xl">
          {/* 4.9-Star Google Rating Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#FAF8F5]/15 backdrop-blur-md border border-[#C5A059]/40 mb-6">
            <div className="flex items-center text-[#C5A059]">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className="material-symbols-outlined text-[16px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
              ))}
            </div>
            <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#FAF8F5]">
              {HERO_DATA.ratingText}
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[60px] lg:leading-[1.12] text-[#FAF8F5] font-normal tracking-tight">
            {HERO_DATA.headlinePrefix}
            <span className="italic text-[#C5A059]">{HERO_DATA.headlineHighlight}</span>
            {HERO_DATA.headlineSuffix}
          </h1>
          <p className="text-base sm:text-lg text-[#FAF8F5]/90 font-light max-w-2xl mt-5 leading-relaxed">
            {HERO_DATA.subheadline}
          </p>
          {/* Two CTAs */}
          <div className="flex flex-wrap items-center gap-4 mt-8">
            <a
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded bg-[#1B3B2B] text-[#FAF8F5] border border-[#C5A059]/40 text-xs font-semibold uppercase tracking-[0.16em] hover:bg-[#C5A059] hover:text-[#1C1C1C] transition-all duration-300 shadow-lg"
              href="#signature-collections"
            >
              <span>{HERO_DATA.primaryCta}</span>
              <span className="material-symbols-outlined text-[16px]">arrow_downward</span>
            </a>
            <a
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded bg-[#FAF8F5] text-[#1B3B2B] text-xs font-semibold uppercase tracking-[0.16em] hover:bg-[#C5A059] hover:text-[#1C1C1C] transition-all duration-300 shadow-lg"
              href="#consultation-inquiry"
            >
              <span>{HERO_DATA.secondaryCta}</span>
              <span className="material-symbols-outlined text-[16px] text-[#C5A059]">
                calendar_today
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
