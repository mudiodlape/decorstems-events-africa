import React, { useState } from 'react';
import { BRAND_DATA, NAV_LINKS } from '../data/mockData';

export interface HeaderProps {
  readonly activeSection?: string;
}

export const Header: React.FC<Readonly<HeaderProps>> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#C5A059]/20">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Brand Wordmark Left */}
        <a
          className="flex items-center gap-3 group"
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setMobileMenuOpen(false);
          }}
        >
          <img
            alt={BRAND_DATA.fullName}
            className="w-9 h-9 rounded-full object-cover border border-[#C5A059]/40"
            src={BRAND_DATA.logoImage}
            onError={(e) => {
              const target = e.currentTarget;
              if (target.src !== BRAND_DATA.logoFallback) {
                target.src = BRAND_DATA.logoFallback;
              }
            }}
          />
          <div className="flex flex-col">
            <span className="font-serif text-lg font-semibold tracking-wider text-[#1B3B2B] uppercase leading-none">
              {BRAND_DATA.name}
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C5A059] mt-0.5">
              {BRAND_DATA.subName}
            </span>
          </div>
        </a>

        {/* Center Links */}
        <nav className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1C1C1C]/80 hover:text-[#1B3B2B] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C5A059] hover:after:w-full after:transition-all"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="flex items-center gap-4">
          <a
            className="inline-flex items-center px-5 py-2.5 rounded border border-[#C5A059] bg-[#FAF8F5] text-[#1B3B2B] text-xs font-semibold uppercase tracking-[0.14em] hover:bg-[#1B3B2B] hover:text-[#FAF8F5] hover:border-[#1B3B2B] transition-all duration-300"
            href="#consultation-inquiry"
          >
            Check Date Availability
          </a>
          <button
            type="button"
            aria-label="Toggle navigation menu"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded border border-[#C5A059]/40 text-[#1B3B2B] hover:bg-[#1B3B2B]/5 transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer (only visible on <lg when toggled) */}
      {mobileMenuOpen && (
        <nav className="lg:hidden bg-[#FAF8F5] border-b border-[#C5A059]/20 px-6 py-4 flex flex-col gap-3">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1C1C1C]/80 hover:text-[#1B3B2B] py-2 border-b border-[#C5A059]/10 last:border-b-0"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};
