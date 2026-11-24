import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SignatureCollections } from './components/SignatureCollections';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ConsultationSection } from './components/ConsultationSection';
import { Footer } from './components/Footer';
import { PortfolioModal } from './components/PortfolioModal';
import { usePortfolioFilter } from './hooks/usePortfolioFilter';
import { useConsultationForm } from './hooks/useConsultationForm';

export interface AppProps {
  readonly initialFilter?: string;
}

export const App: React.FC<Readonly<AppProps>> = () => {
  const {
    activeFilter,
    filteredItems,
    selectedItem,
    handleFilterChange,
    openItemModal,
    closeItemModal,
  } = usePortfolioFilter();

  const {
    formData,
    isSubmitted,
    updateField,
    prefillFromPortfolioItem,
    handleSubmit,
    resetForm,
    getWhatsAppInquiryUrl,
    getMailtoInquiryUrl,
  } = useConsultationForm();

  return (
    <div id="top" className="min-h-screen bg-[#FAF8F5] text-[#1C1C1C] font-sans antialiased">
      {/* 1. MINIMALIST TOP NAVIGATION BAR */}
      <Header />

      <main className="pt-20">
        {/* 2. FULL-BLEED EDITORIAL HERO SECTION (~85vh) */}
        <HeroSection />

        {/* BRAND PHILOSOPHY / ABOUT */}
        <AboutSection />

        {/* 3. SIGNATURE EVENT COLLECTIONS */}
        <SignatureCollections
          activeFilter={activeFilter}
          items={filteredItems}
          onFilterChange={handleFilterChange}
          onSelectItem={openItemModal}
        />

        {/* 4. CURATED INVESTMENT TIERS ANCHOR */}
        <div id="investment-tiers" className="scroll-mt-20" />

        {/* 5. SOCIAL PROOF & CLIENT LOVE */}
        <TestimonialsSection />

        {/* 6. DIRECT CONSULTATION & DATE-AVAILABILITY FORM (SPLIT LAYOUT) */}
        <ConsultationSection
          formData={formData}
          isSubmitted={isSubmitted}
          onUpdateField={updateField}
          onSubmit={handleSubmit}
          onReset={resetForm}
          getWhatsAppInquiryUrl={getWhatsAppInquiryUrl}
          getMailtoInquiryUrl={getMailtoInquiryUrl}
        />
      </main>

      {/* 7. REFINED FOOTER */}
      <Footer />

      {/* PORTFOLIO DETAIL MODAL */}
      <PortfolioModal
        item={selectedItem}
        onClose={closeItemModal}
        onInquire={prefillFromPortfolioItem}
      />
    </div>
  );
};

export default App;
