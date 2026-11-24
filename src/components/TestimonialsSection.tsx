import React from 'react';
import { TESTIMONIALS } from '../data/mockData';

export interface TestimonialsSectionProps {
  readonly id?: string;
}

export const TestimonialsSection: React.FC<Readonly<TestimonialsSectionProps>> = ({
  id = 'testimonials',
}) => {
  return (
    <section className="py-20 bg-[#F3EFEA]" id={id}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF8F5] border border-[#C5A059]/30 mb-4">
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
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#1B3B2B]">
              Verified 4.9★ Google Rating
            </span>
          </div>
          <h2 className="font-serif text-3xl lg:text-[42px] text-[#1B3B2B]">
            Voices of Our Honored Hosts
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#FAF8F5] p-8 rounded shadow-sm border border-[#1C1C1C]/5 flex flex-col justify-between"
            >
              <p className="font-serif italic text-lg text-[#1B3B2B] leading-relaxed">
                {t.quote}
              </p>
              <div className="mt-6 pt-4 border-t border-[#1C1C1C]/10 flex items-center justify-between">
                <div>
                  <p className="font-serif text-base font-semibold text-[#1B3B2B]">{t.author}</p>
                  <p className="text-xs uppercase tracking-wider text-[#C5A059] mt-0.5">
                    {t.subtitle}
                  </p>
                </div>
                <span className="material-symbols-outlined text-[#C5A059] text-[24px]">
                  {t.icon}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
