export type PortfolioCategory = 'all' | 'weddings' | 'cultural' | 'galas';

export interface PortfolioItem {
  readonly id: string;
  readonly category: Exclude<PortfolioCategory, 'all'>;
  readonly badge: string;
  readonly location: string;
  readonly title: string;
  readonly description: string;
  readonly formatLabel: string;
  readonly capacityLabel: string;
  readonly image: string;
  readonly fallbackImage: string;
  readonly imageAlt: string;
  readonly eventTypeValue: string;
  readonly highlights: readonly string[];
}

export interface TestimonialItem {
  readonly id: string;
  readonly quote: string;
  readonly author: string;
  readonly subtitle: string;
  readonly icon: string;
}

export interface StatItem {
  readonly value: string;
  readonly label: string;
}

export interface FilterTab {
  readonly id: PortfolioCategory;
  readonly label: string;
}

export const BRAND_DATA = {
  name: 'DECORSTEMS',
  subName: 'EVENTS AFRICA',
  fullName: 'Decorstems Events Africa',
  tagline: 'Bespoke Weddings & Curated Celebrations',
  logoImage: '/images/logo-avatar.jpg',
  logoFallback:
    'https://lh3.googleusercontent.com/aida/ALJJyrAMGrLpJetqUv4DZrIiee3o-DhbGZOvfzhQ7Ti-NatJvkTpPrPJyZ3xY9mbZL_E-9IrQNAL5T_Mx2YNuf9UK3ROp4eGLTlVyfBcgWD8drx3ViX2upNNN6saKL4-UFgYFOnb2AsaKro4LfBeQ8Itma9fdbCoZKmO7qtWtNt49ttk5j79X9RiiC2n8XbPJg6gY5qR7ZCB0iImIep6T-44cpytjFE5nBgO4N4BkyDgF943',
  whatsappDisplay: '+256 758 877829',
  whatsappRaw: '256758877829',
  email: 'omulangiralarkiibu@gmail.com',
  studioLocation: 'DTE CITY, Kampala, Uganda',
  instagramUrl: 'https://instagram.com',
  copyright: '© 2025 Decorstems Events Africa. All rights reserved.',
} as const;

export const NAV_LINKS = [
  { label: 'Portfolio', href: '#signature-collections' },
  { label: 'Services & Packages', href: '#investment-tiers' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'About', href: '#about' },
] as const;

export const HERO_DATA = {
  ratingText: '4.9 Rating on Google · Trusted Across Kenya, Uganda & Rwanda',
  headlinePrefix: 'Bespoke Weddings & ',
  headlineHighlight: 'Unforgettable',
  headlineSuffix: ' Celebrations Across East Africa',
  subheadline:
    'From sunlit marquee receptions with cascading floral arches and crystal chandeliers to royal cultural ceremonies in Kampala, we craft atmospheric elegance.',
  primaryCta: 'Explore Event Themes',
  secondaryCta: 'Inquire for Your Date',
  backgroundImage: '/images/hero-reception.jpg',
  backgroundFallback:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBIXYIthjCCv2Uwp6xN_xAbnVVOl0SDrMkkHkmM_rLkOiuhO_3YILgO-gQEhhe1ouSPAh8eLyuNXRTjJacb9Df5PyCntDTWMwImhAtktWdposM2VjyOO3VQOoE9NK-L1T_cbd6psS5WcBZJ7xfardplK_ivmobdjPr53uWWQ7wYvPLcmAm0AwXAS85980A2FFekiXs1kkwnQkAs7KS5G9GFulnjJDHPV2wxI5CGygJG4inRZraWqW4P',
  backgroundAlt:
    'Decorstems luxury wedding reception with floral arches and crystal chandeliers',
} as const;

export const ABOUT_DATA = {
  eyebrow: 'The Atelier Philosophy',
  headlinePrefix: 'Where ',
  headlineHighlight: 'African heritage',
  headlineSuffix: ' meets contemporary botanical luxury.',
  description:
    'Every celebration designed by Decorstems Events Africa is an architectural sculpture of memory. We harmonize the rich cultural cadence of traditional rites with modern sculptural flora, theatrical lighting, and flawless spatial orchestration.',
  stats: [
    { value: '12+', label: 'Years of Excellence' },
    { value: '450+', label: 'Luxury Events Curated' },
    { value: '4.9★', label: 'Google Rating' },
  ] satisfies readonly StatItem[],
  featuredImage: '/images/about-kwanjula.jpg',
  featuredFallback:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCrERT3sqAqbYol13HKMvHkjIKwc4f_MvjuPdc2oDZtPaxE0qntmRUkMEBtZOJvslYDfVdtaAhzd4gjnu5KDLG4ELa_hVaCoCQsrsiiS4WBHt6GiDnG9iBO1XwkyLy8VfIlrS_6PJJtB9pEooKwHlrxeni2b9Luur-yCyLbxV2TZVcM1gdUuCZT_hGEMWE_7q6dWxxL4oWEtAuEMsQ_REF6qv5WSbjTxT6iJabcuPpArqzIhx1-FK3u',
  featuredAlt: 'Ugandan traditional Kwanjula floral arch with emerald and terracotta fabrics',
  captionEyebrow: 'Featured Cultural Staging',
  captionTitle: 'Buganda Royal Kwanjula Pavilion',
} as const;

export const PORTFOLIO_FILTERS: readonly FilterTab[] = [
  { id: 'all', label: 'All Events' },
  { id: 'weddings', label: 'Luxury Weddings' },
  { id: 'cultural', label: 'Traditional Kwanjula & Cultural' },
  { id: 'galas', label: 'Corporate Galas' },
] as const;

export const PORTFOLIO_ITEMS: readonly PortfolioItem[] = [
  {
    id: 'grand-marquee-reception',
    category: 'weddings',
    badge: 'Luxury Wedding',
    location: 'Kampala, Uganda',
    title: 'The Grand Marquee Reception',
    description:
      'An extravagant outdoor marquee celebration featuring suspended floral canopies, crystal chandeliers, and gold-rimmed seating.',
    formatLabel: 'Marquee Architecture',
    capacityLabel: '420 Guests',
    image: '/images/portfolio-marquee.jpg',
    fallbackImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBjq4WANVUJrFug7XlezCiAGxvp9rz_8z1Xi-3NnWhPtjtsa-X5xUZzbn5PLfDz2Esqt5Hq6kZ9pULeHF7aEjofAUK4XRq9aPLejgpPhJcvV-bikmhUVX7RpLKfAwqiQZqEfiVG8_01rzTIENkKge4LsnKa4rWXtmkpSw0GeHu_-68zOjD7f6IRG8ARFcZKn-ZlfTjWKFcr8xd-KKoEBwHwS0YXGwZilADr4PcQZBEAY1hmBxTG8M4D',
    imageAlt: 'The Serena Grand Marquee Wedding',
    eventTypeValue: 'luxury-wedding',
    highlights: [
      'Custom clear-span structural marquee installation with silk ceiling drapery',
      'Suspended floral clouds of imported roses, hydrangeas, and cascading orchids',
      'Multi-tier crystal chandelier rigging and warm theatrical pin-spot lighting',
      'Bespoke gold-rimmed charger plates, crystal stemware, and velvet seating',
    ],
  },
  {
    id: 'royal-emerald-kwanjula',
    category: 'cultural',
    badge: 'Traditional Kwanjula',
    location: 'Kampala, Uganda',
    title: 'Royal Emerald & Terracotta Kwanjula',
    description:
      'Custom brass gazebo frame enveloped in pampas plumes, burnt orange chrysanthemums, and ceremonial seating for dignitaries.',
    formatLabel: 'Buganda Cultural Rite',
    capacityLabel: '350 Guests',
    image: '/images/portfolio-kwanjula.jpg',
    fallbackImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDY4spZ8cqfZVJr2KYYK7uiUAP9NzDmxAFAgXJmz-VA9hHaHF3SlXk6m9p6mBnuGpGNSEuU9fBnGmD1y7-GO_eXYlvsqNDbqTVABmpkfi7JOWsytVTHSA6nJtbT2pm-SjWLAV-XcihkeyR32P_OySEiPFtivqzpHxBoJed9PTfxPfN-nnOgQjwV4nhmYt3AOdvWXmTSdeNyRMmvnGlMuLAm0GfZikjjN8b0VOSkez9F9goP7UpPppfp',
    imageAlt: 'Royal Emerald & Terracotta Kwanjula',
    eventTypeValue: 'kwanjula',
    highlights: [
      'Regal Buganda bridal pavilion with hand-crafted brass architectural framing',
      'Rich emerald velvet drapery paired with terracotta & champagne botanical textures',
      'Dedicated royal lounge protocol layout for elders, Abakungu, and visiting entourage',
      'Custom woven cultural carpets and ambient chandelier canopy illumination',
    ],
  },
  {
    id: 'pan-african-leadership-gala',
    category: 'galas',
    badge: 'Corporate Gala',
    location: 'Nairobi, Kenya',
    title: 'The Pan-African Leadership Gala',
    description:
      'Sculptural white phalaenopsis orchids on brushed gold pedestals, layered candlelight columns, and emerald stage mapping.',
    formatLabel: 'Black-Tie Affair',
    capacityLabel: '500 Delegates',
    image: '/images/portfolio-leadership-gala.jpg',
    fallbackImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBy7qDUazC0G-aoVYaz_-p-jWb0SjjdvtAzk5iQ8d4yTcTfR8ltRjo3ioSA-I7kVSC70TbmHRI7MzuHfK5xFvxSzrZQE0ntRv31kstB6Uuv3JqRz3A1Ao2Cnr34I3cyz2tZET6aZwRyeKf11dMbgnP_SRfst5b8cWFFQozLnCuoR0C9ZWdkPUxxkoT4yWNKt4NtKmMRQBu0Di6RMw9Qyt_xGLosklCO7RwdFRdT7pM',
    imageAlt: 'The Pan-African Leadership Gala',
    eventTypeValue: 'corporate-gala',
    highlights: [
      'Architectural stage backdrop with custom gold monogram and emerald ambient lighting',
      'Sculptural white phalaenopsis orchid installations on tall brushed-brass stands',
      'Multi-height glass hurricane candle clusters across black-tie banquet rounds',
      'VIP executive lounge styling and red-carpet media arrival experience',
    ],
  },
  {
    id: 'green-serenity-wedding-vows',
    category: 'weddings',
    badge: 'Destination Wedding',
    location: 'Lake Naivasha, Kenya',
    title: 'Green Serenity Wedding Vows',
    description:
      'A sunlit tropical garden lawn featuring tall palm trees, lush greenery, and a sleek white platform with arched floral backdrops.',
    formatLabel: 'Open-Air Ceremony',
    capacityLabel: '220 Guests',
    image: '/images/portfolio-green-serenity.jpg',
    fallbackImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDBWmlmRsIaiY2DvIKjIIg1aN9UHfujm_PdAIbdfkS6VN2FY-XldLtPKd8hwuOHf2QrsvVtd5CkjXixCo9tvr7shIsS8Yft_njtb8kz75-lG42kr_X9FfxlZZij7LWtZx-EwAkKfTaGHmPEBoey08nGSDi3ccwgXJ2hxR5p1S7MS89CiY_ayYpaWHSOpx_7tVkbVkzK92voRrNJhaUqpI0ZAaOkYy7Xe7bBWN4OtFFerR1tAsHMSLmT',
    imageAlt: 'Green Serenity Wedding Vows',
    eventTypeValue: 'luxury-wedding',
    highlights: [
      'Custom mirror-finish white ceremony runway overlooking Rift Valley gardens',
      'Asymmetrical sculptural arches of white roses,ruscus, and tropical foliage',
      'Curated curved guest seating layout ensuring panoramic ceremony sightlines',
      'Champagne lawn terrace styling for post-ceremony string quartet reception',
    ],
  },
  {
    id: 'kigali-diplomatic-soiree',
    category: 'galas',
    badge: 'Diplomatic Gala',
    location: 'Kigali, Rwanda',
    title: 'Kigali Diplomatic Soirée',
    description:
      'Modern architectural lines pairing native greenery with monolithic golden totems and tailored acoustic ambiance.',
    formatLabel: 'State Reception',
    capacityLabel: '280 Delegates',
    image: '/images/portfolio-diplomatic-soiree.jpg',
    fallbackImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAUKPxceAgZwia3Vfoa78vhisehVLV67iljP9s_Mu3mLYeYFBq02CcpHbW8m16ifOxceOaIpLdQpHUCCOH2ynGSXyydyrsFEow0UPflM0PMvrcWK3Mb4GwHBvTJjh4K0qze2_HYLnwz8MvK7PruENok8hUNTPk4h2FwMsd-ZMrFhVGco3kS5mwyP4YMxg7HTHqPFQ22jzw2Bbuh1L71kNhnfqoyzfUyMniStOgmykQ774DJh3n2gz2-',
    imageAlt: 'Kampala Diplomatic Soiree',
    eventTypeValue: 'corporate-gala',
    highlights: [
      'Suspended botanical ceiling installations with mirrored sphere accents',
      'Monolithic brass totems and crimson-emerald statement floral arrangements',
      'Protocol-compliant diplomatic seating orchestration and translation staging',
      'Warm architectural uplighting tailored for evening state photography',
    ],
  },
  {
    id: 'botanical-canopy-reception',
    category: 'weddings',
    badge: 'High Society Wedding',
    location: 'Entebbe, Uganda',
    title: 'Botanical Canopy Reception',
    description:
      'An 80-foot suspended garden of white wisteria and crystal chandeliers hovering above mirrored tables along Lake Victoria.',
    formatLabel: 'Glasshouse Marquee',
    capacityLabel: '500 Guests',
    image: '/images/portfolio-botanical-canopy.jpg',
    fallbackImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCS5n1mQhXyFHof5yYZDVAtZgOw_or0-OjdF0wkCjqKcOaPzKL1m7xcpR6LEfjSAGh_R4YL-ns2C8IWJw6gpg1FEBc-Fz-DdXH3dho2uY650fqQamA9yeBYlbes_6xVvJ2_1lJivrtvo-BVq2OScb72IXiPhIkEPqJ8aOjSBYQn_MERdfa-OFaDF9Snl325yupFPjS8P6RbZionUvxcEItVGHPHKJi5rTxVX7tKM-k',
    imageAlt: 'Botanical Canopy Reception',
    eventTypeValue: 'luxury-wedding',
    highlights: [
      'Transparent lakeside glasshouse marquee on the shores of Lake Victoria',
      '80-foot overhead living canopy of trailing white wisteria and fern foliage',
      'Full-length mirrored banquet tables reflecting crystal chandelier light',
      'Bespoke champagne bar and midnight lakeside fireworks viewing deck',
    ],
  },
] as const;

export const TESTIMONIALS: readonly TestimonialItem[] = [
  {
    id: 'nalule-kato-mukasa',
    quote:
      '“Decorstems transformed our Kwanjula ceremony into a regal dream. The blend of rich royal emerald, terracotta florals, and authentic cultural majesty took our breath away. Our international guests are still talking about it.”',
    author: 'Dr. Nalule & Kato Mukasa',
    subtitle: 'Traditional Kwanjula • Kampala, Uganda',
    icon: 'favorite',
  },
  {
    id: 'amina-hassan',
    quote:
      '“For our annual East African Banking Gala, Decorstems delivered a breathtaking ballroom experience. The candlelit crystal tablescapes and emerald floral monoliths established the most prestigious setting in our company\'s history.”',
    author: 'Amina Hassan',
    subtitle: 'Head of Corporate Affairs • Nairobi, Kenya',
    icon: 'verified',
  },
] as const;
