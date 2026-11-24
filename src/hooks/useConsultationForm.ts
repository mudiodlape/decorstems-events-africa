import { useState, useCallback, FormEvent } from 'react';
import { BRAND_DATA, PortfolioItem } from '../data/mockData';

export interface ConsultationFormData {
  fullName: string;
  whatsapp: string;
  eventType: string;
  guestCount: string;
  eventDate: string;
  eventVision: string;
}

export interface SavedInquiry extends ConsultationFormData {
  id: string;
  submittedAt: string;
}

const INITIAL_FORM_STATE: ConsultationFormData = {
  fullName: '',
  whatsapp: '',
  eventType: '',
  guestCount: '',
  eventDate: '',
  eventVision: '',
};

const STORAGE_KEY = 'decorstems_consultation_inquiries';

export function useConsultationForm() {
  const [formData, setFormData] = useState<ConsultationFormData>(INITIAL_FORM_STATE);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [lastSubmitted, setLastSubmitted] = useState<SavedInquiry | null>(null);

  const updateField = useCallback(
    <K extends keyof ConsultationFormData>(field: K, value: ConsultationFormData[K]) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
    },
    []
  );

  const prefillFromPortfolioItem = useCallback((item: PortfolioItem) => {
    setIsSubmitted(false);
    setFormData((prev) => ({
      ...prev,
      eventType: item.eventTypeValue,
      eventVision: prev.eventVision
        ? prev.eventVision
        : `Inspired by "${item.title}" (${item.location} — ${item.formatLabel}, ~${item.capacityLabel}). `,
    }));
    const section = document.getElementById('consultation-inquiry');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const inquiry: SavedInquiry = {
        ...formData,
        id: `INQ-${Date.now().toString(36).toUpperCase()}`,
        submittedAt: new Date().toISOString(),
      };

      try {
        const existingRaw = localStorage.getItem(STORAGE_KEY);
        const existing: SavedInquiry[] = existingRaw ? JSON.parse(existingRaw) : [];
        localStorage.setItem(STORAGE_KEY, JSON.stringify([inquiry, ...existing]));
      } catch {
        // Ignore storage errors in restricted environments
      }

      setLastSubmitted(inquiry);
      setIsSubmitted(true);
    },
    [formData]
  );

  const resetForm = useCallback(() => {
    setFormData(INITIAL_FORM_STATE);
    setIsSubmitted(false);
  }, []);

  const getWhatsAppInquiryUrl = useCallback(() => {
    const source = lastSubmitted || formData;
    const message = [
      `Hello Decorstems Events Africa,`,
      `I would like to check date availability and request a bespoke proposal:`,
      `• Name: ${source.fullName}`,
      `• WhatsApp: ${source.whatsapp}`,
      `• Event Type: ${source.eventType}`,
      `• Guest Count: ${source.guestCount}`,
      `• Preferred Date: ${source.eventDate}`,
      source.eventVision ? `• Vision & Notes: ${source.eventVision}` : '',
    ]
      .filter(Boolean)
      .join('\n');

    return `https://wa.me/${BRAND_DATA.whatsappRaw}?text=${encodeURIComponent(message)}`;
  }, [formData, lastSubmitted]);

  const getMailtoInquiryUrl = useCallback(() => {
    const source = lastSubmitted || formData;
    const subject = `Date Availability Inquiry — ${source.fullName || 'New Celebration'} (${source.eventDate || 'TBD'})`;
    const body = [
      `Hello Decorstems Events Africa Concierge,`,
      ``,
      `Please find my consultation inquiry details below:`,
      `Full Name: ${source.fullName}`,
      `WhatsApp Number: ${source.whatsapp}`,
      `Event Type: ${source.eventType}`,
      `Estimated Guest Count: ${source.guestCount}`,
      `Event Date: ${source.eventDate}`,
      `Vision & Notes: ${source.eventVision || 'N/A'}`,
    ].join('\n');

    return `mailto:${BRAND_DATA.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [formData, lastSubmitted]);

  return {
    formData,
    isSubmitted,
    lastSubmitted,
    updateField,
    prefillFromPortfolioItem,
    handleSubmit,
    resetForm,
    getWhatsAppInquiryUrl,
    getMailtoInquiryUrl,
  };
}
