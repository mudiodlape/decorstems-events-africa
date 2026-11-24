import React from 'react';
import { ABOUT_DATA } from '../data/mockData';

export interface AboutSectionProps {
  readonly id?: string;
}

export const AboutSection: React.FC<Readonly<AboutSectionProps>> = ({ id = 'about' }) => {
  return (
    <section className="py-20 bg-[#FAF8F5]" id={id}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C5A059] block mb-3">
              {ABOUT_DATA.eyebrow}
            </span>
            <h2 className="font-serif text-3xl lg:text-[42px] lg:leading-[1.2] text-[#1B3B2B]">
              {ABOUT_DATA.headlinePrefix}
              <span className="italic text-[#C5A059]">{ABOUT_DATA.headlineHighlight}</span>
              {ABOUT_DATA.headlineSuffix}
            </h2>
            <p className="text-base text-[#1C1C1C]/80 font-light mt-5 leading-relaxed">
              {ABOUT_DATA.description}
            </p>
            <div className="mt-8 pt-6 border-t border-[#C5A059]/25 flex items-center gap-10">
              {ABOUT_DATA.stats.map((stat) => (
                <div key={stat.label}>
                  <span className="font-serif text-3xl font-semibold text-[#1B3B2B]">
                    {stat.value}
                  </span>
                  <p className="text-xs uppercase tracking-wider text-[#1C1C1C]/70 mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="relative rounded overflow-hidden shadow-xl aspect-[16/10]">
              <img
                alt={ABOUT_DATA.featuredAlt}
                className="w-full h-full object-cover"
                src={ABOUT_DATA.featuredImage}
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== ABOUT_DATA.featuredFallback) {
                    target.src = ABOUT_DATA.featuredFallback;
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B3B2B]/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-5 left-5 right-5 bg-[#FAF8F5]/95 backdrop-blur-sm p-4 rounded">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#C5A059]">
                  {ABOUT_DATA.captionEyebrow}
                </p>
                <p className="font-serif text-lg text-[#1B3B2B] mt-0.5">
                  {ABOUT_DATA.captionTitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
