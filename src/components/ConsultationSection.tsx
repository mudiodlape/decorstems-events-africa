import React, { FormEvent } from 'react';
import { BRAND_DATA } from '../data/mockData';
import { ConsultationFormData } from '../hooks/useConsultationForm';

export interface ConsultationSectionProps {
  readonly formData: ConsultationFormData;
  readonly isSubmitted: boolean;
  readonly onUpdateField: <K extends keyof ConsultationFormData>(
    field: K,
    value: ConsultationFormData[K]
  ) => void;
  readonly onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  readonly onReset: () => void;
  readonly getWhatsAppInquiryUrl: () => string;
  readonly getMailtoInquiryUrl: () => string;
}

const TABLESCAPE_IMAGE = '/images/portfolio-leadership-gala.jpg';
const TABLESCAPE_FALLBACK =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBy7qDUazC0G-aoVYaz_-p-jWb0SjjdvtAzk5iQ8d4yTcTfR8ltRjo3ioSA-I7kVSC70TbmHRI7MzuHfK5xFvxSzrZQE0ntRv31kstB6Uuv3JqRz3A1Ao2Cnr34I3cyz2tZET6aZwRyeKf11dMbgnP_SRfst5b8cWFFQozLnCuoR0C9ZWdkPUxxkoT4yWNKt4NtKmMRQBu0Di6RMw9Qyt_xGLosklCO7RwdFRdT7pM';

export const ConsultationSection: React.FC<Readonly<ConsultationSectionProps>> = ({
  formData,
  isSubmitted,
  onUpdateField,
  onSubmit,
  onReset,
  getWhatsAppInquiryUrl,
  getMailtoInquiryUrl,
}) => {
  return (
    <section className="py-20 bg-[#FAF8F5]" id="consultation-inquiry">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Side: Editorial Photo & Direct Contact Details */}
          <div className="lg:col-span-5 relative rounded overflow-hidden shadow-xl min-h-[480px] p-8 flex flex-col justify-between text-[#FAF8F5]">
            <img
              alt="Decorstems luxury event tablescape"
              className="absolute inset-0 w-full h-full object-cover"
              src={TABLESCAPE_IMAGE}
              onError={(e) => {
                const target = e.currentTarget;
                if (target.src !== TABLESCAPE_FALLBACK) {
                  target.src = TABLESCAPE_FALLBACK;
                }
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1B3B2B] via-[#1B3B2B]/85 to-[#1B3B2B]/65"></div>
            <div className="relative z-10">
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C5A059] block mb-2">
                Concierge Atelier
              </span>
              <h3 className="font-serif text-3xl text-[#FAF8F5]">Reserve Your Celebration</h3>
              <p className="text-sm text-[#FAF8F5]/85 font-light mt-3 leading-relaxed">
                We accept a limited number of commissions each quarter to preserve our bespoke
                standard and flawless execution.
              </p>
            </div>
            <div className="relative z-10 space-y-5 my-8 text-sm">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#C5A059] text-[20px] mt-0.5">
                  chat
                </span>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#C5A059]">
                    WhatsApp Hotline
                  </p>
                  <a
                    href={`https://wa.me/${BRAND_DATA.whatsappRaw}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[#FAF8F5] hover:text-[#C5A059] transition-colors"
                  >
                    {BRAND_DATA.whatsappDisplay}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#C5A059] text-[20px] mt-0.5">
                  alternate_email
                </span>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#C5A059]">
                    Private Email
                  </p>
                  <a
                    href={`mailto:${BRAND_DATA.email}`}
                    className="font-medium text-[#FAF8F5] hover:text-[#C5A059] transition-colors"
                  >
                    {BRAND_DATA.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#C5A059] text-[20px] mt-0.5">
                  location_on
                </span>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#C5A059]">
                    Design Studios
                  </p>
                  <p className="font-medium text-[#FAF8F5]">{BRAND_DATA.studioLocation}</p>
                </div>
              </div>
            </div>
            <div className="relative z-10 p-4 rounded bg-[#FAF8F5]/10 backdrop-blur-sm border border-[#C5A059]/30">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-[#C5A059]">
                Concierge Policy
              </p>
              <p className="text-xs text-[#FAF8F5]/85 mt-1">
                Private venue walk-throughs and 3D floral sketches scheduled after date clearance.
              </p>
            </div>
          </div>

          {/* Right Side: Structured Inquiry Card */}
          <div className="lg:col-span-7 bg-white p-8 lg:p-10 rounded shadow-xl border border-[#1C1C1C]/10 flex flex-col justify-center">
            <div className="mb-6">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C5A059] block mb-1">
                Confidential Consultation
              </span>
              <h3 className="font-serif text-3xl text-[#1B3B2B]">Check Date Availability</h3>
              <p className="text-sm text-[#1C1C1C]/70 mt-1">
                Submit your desired date and vision. Our principal stylists will respond within 24
                hours.
              </p>
            </div>
            <form
              className={`space-y-4 transition-opacity ${
                isSubmitted ? 'opacity-50 pointer-events-none' : ''
              }`}
              id="consultation-form"
              onSubmit={onSubmit}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    className="block text-xs font-semibold uppercase tracking-wider text-[#1C1C1C]/80 mb-1.5"
                    htmlFor="full-name"
                  >
                    Full Name *
                  </label>
                  <input
                    className="w-full px-4 py-2.5 rounded border border-[#1C1C1C]/20 bg-[#FAF8F5] text-sm focus:outline-none focus:border-[#C5A059]"
                    id="full-name"
                    placeholder="e.g. Lady Vanessa Mugisha"
                    required
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => onUpdateField('fullName', e.target.value)}
                  />
                </div>
                <div>
                  <label
                    className="block text-xs font-semibold uppercase tracking-wider text-[#1C1C1C]/80 mb-1.5"
                    htmlFor="whatsapp"
                  >
                    WhatsApp Number *
                  </label>
                  <input
                    className="w-full px-4 py-2.5 rounded border border-[#1C1C1C]/20 bg-[#FAF8F5] text-sm focus:outline-none focus:border-[#C5A059]"
                    id="whatsapp"
                    placeholder="+256 758 877829"
                    required
                    type="tel"
                    value={formData.whatsapp}
                    onChange={(e) => onUpdateField('whatsapp', e.target.value)}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label
                    className="block text-xs font-semibold uppercase tracking-wider text-[#1C1C1C]/80 mb-1.5"
                    htmlFor="event-type"
                  >
                    Event Type *
                  </label>
                  <select
                    className="w-full px-4 py-2.5 rounded border border-[#1C1C1C]/20 bg-[#FAF8F5] text-sm focus:outline-none focus:border-[#C5A059]"
                    id="event-type"
                    required
                    value={formData.eventType}
                    onChange={(e) => onUpdateField('eventType', e.target.value)}
                  >
                    <option disabled value="">
                      Select...
                    </option>
                    <option value="luxury-wedding">Luxury Wedding</option>
                    <option value="kwanjula">Traditional Kwanjula</option>
                    <option value="corporate-gala">Corporate Gala</option>
                    <option value="private-milestone">Private Milestone</option>
                  </select>
                </div>
                <div>
                  <label
                    className="block text-xs font-semibold uppercase tracking-wider text-[#1C1C1C]/80 mb-1.5"
                    htmlFor="guest-count"
                  >
                    Estimated Guest Count *
                  </label>
                  <select
                    className="w-full px-4 py-2.5 rounded border border-[#1C1C1C]/20 bg-[#FAF8F5] text-sm focus:outline-none focus:border-[#C5A059]"
                    id="guest-count"
                    required
                    value={formData.guestCount}
                    onChange={(e) => onUpdateField('guestCount', e.target.value)}
                  >
                    <option disabled value="">
                      Select...
                    </option>
                    <option value="50-150">50 – 150 Guests</option>
                    <option value="150-300">150 – 300 Guests</option>
                    <option value="300-600">300 – 600 Guests</option>
                    <option value="600+">600+ Guests</option>
                  </select>
                </div>
                <div>
                  <label
                    className="block text-xs font-semibold uppercase tracking-wider text-[#1C1C1C]/80 mb-1.5"
                    htmlFor="event-date"
                  >
                    Event Date *
                  </label>
                  <input
                    className="w-full px-4 py-2.5 rounded border border-[#1C1C1C]/20 bg-[#FAF8F5] text-sm focus:outline-none focus:border-[#C5A059]"
                    id="event-date"
                    required
                    type="date"
                    value={formData.eventDate}
                    onChange={(e) => onUpdateField('eventDate', e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label
                  className="block text-xs font-semibold uppercase tracking-wider text-[#1C1C1C]/80 mb-1.5"
                  htmlFor="event-vision"
                >
                  Vision &amp; Notes
                </label>
                <textarea
                  className="w-full px-4 py-2.5 rounded border border-[#1C1C1C]/20 bg-[#FAF8F5] text-sm focus:outline-none focus:border-[#C5A059] resize-none"
                  id="event-vision"
                  placeholder="Share your dream color palette, venue, floral preferences, or cultural requirements..."
                  rows={3}
                  value={formData.eventVision}
                  onChange={(e) => onUpdateField('eventVision', e.target.value)}
                />
              </div>
              <button
                className="w-full py-3.5 rounded bg-[#1B3B2B] text-[#FAF8F5] text-xs font-bold uppercase tracking-[0.18em] hover:bg-[#C5A059] hover:text-[#1C1C1C] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                type="submit"
              >
                <span>Check Availability &amp; Request Proposal</span>
                <span className="material-symbols-outlined text-[18px]">send</span>
              </button>
            </form>

            {isSubmitted && (
              <div
                className="mt-4 p-4 rounded bg-[#1B3B2B]/10 border border-[#1B3B2B]/20 text-[#1B3B2B]"
                id="form-success"
              >
                <p className="text-xs font-bold uppercase tracking-wider">
                  Inquiry Received with Distinction
                </p>
                <p className="text-sm mt-1">
                  Thank you. Our Head of Client Relations will review your date and contact your
                  WhatsApp within 24 hours.
                </p>
                <div className="mt-3 pt-3 border-t border-[#1B3B2B]/15 flex flex-wrap items-center gap-3">
                  <a
                    href={getWhatsAppInquiryUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-[#1B3B2B] text-[#FAF8F5] text-[11px] font-semibold uppercase tracking-wider hover:bg-[#C5A059] hover:text-[#1C1C1C] transition-colors"
                  >
                    <span className="material-symbols-outlined text-[14px]">chat</span>
                    <span>Send Instantly via WhatsApp</span>
                  </a>
                  <a
                    href={getMailtoInquiryUrl()}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded border border-[#1B3B2B]/30 text-[#1B3B2B] text-[11px] font-semibold uppercase tracking-wider hover:bg-[#1B3B2B]/10 transition-colors"
                  >
                    <span className="material-symbols-outlined text-[14px]">mail</span>
                    <span>Send via Email</span>
                  </a>
                  <button
                    type="button"
                    onClick={onReset}
                    className="text-[11px] font-semibold uppercase tracking-wider text-[#1C1C1C]/70 hover:text-[#1B3B2B] underline ml-auto"
                  >
                    New Inquiry
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
