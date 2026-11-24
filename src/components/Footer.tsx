import React from 'react';
import { BRAND_DATA } from '../data/mockData';

export interface FooterProps {
  readonly id?: string;
}

export const Footer: React.FC<Readonly<FooterProps>> = () => {
  return (
    <footer className="bg-[#F3EFEA] border-t border-[#C5A059]/25 py-12">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand Monogram */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#1B3B2B] text-[#C5A059] font-serif text-lg font-bold flex items-center justify-center">
            D
          </div>
          <div>
            <p className="font-serif text-base font-semibold text-[#1B3B2B] tracking-wider uppercase">
              {BRAND_DATA.fullName}
            </p>
            <p className="text-xs text-[#1C1C1C]/65">{BRAND_DATA.tagline}</p>
          </div>
        </div>
        {/* Quick Links & Instagram */}
        <div className="flex flex-wrap items-center gap-6 text-xs font-semibold uppercase tracking-wider text-[#1C1C1C]/75">
          <a className="hover:text-[#1B3B2B] transition-colors" href="#signature-collections">
            Portfolio
          </a>
          <a className="hover:text-[#1B3B2B] transition-colors" href="#investment-tiers">
            Packages
          </a>
          <a className="hover:text-[#1B3B2B] transition-colors" href="#testimonials">
            Testimonials
          </a>
          <a className="hover:text-[#1B3B2B] transition-colors" href="#consultation-inquiry">
            Inquire
          </a>
          <a
            className="inline-flex items-center gap-1.5 text-[#1B3B2B] hover:text-[#C5A059] transition-colors"
            href={BRAND_DATA.instagramUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="material-symbols-outlined text-[16px]">photo_camera</span>
            <span>Instagram</span>
          </a>
        </div>
        {/* Copyright Notice */}
        <p className="text-xs text-[#1C1C1C]/65">{BRAND_DATA.copyright}</p>
      </div>
    </footer>
  );
};
