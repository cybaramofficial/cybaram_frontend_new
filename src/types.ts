export type PageRoute =
  | '/'
  | '/services'
  | '/services/cyber-victim-support'
  | '/services/cyber-victim-support/terms'
  | '/services/digital-exposure-assessment'
  | '/services/digital-exposure-assessment/terms'
  | '/services/osint-research'
  | '/services/osint-research/terms'
  | '/services/impersonation-monitoring'
  | '/services/impersonation-monitoring/terms'
  | '/services/mental-wellbeing-support'
  | '/services/mental-wellbeing-support/terms'
  | '/services/digital-safety-net'
  | '/services/digital-safety-net/terms'
  | '/vilaiyaattu'
  | '/opportunities'
  | '/about-us'
  | '/contact-us'
  | '/privacy-policy'
  | '/terms'
  | '/disclaimer';

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  badge: string;
  heroHeadline: string;
  heroSubheadline: string;
  image: string;
  imageAlt: string;
  whoIsItFor: string[];
  scopeDeliverables: {
    num: string;
    text: string;
  }[];
  processSteps: {
    step: string;
    text: string;
  }[];
  goodToKnow: string[];
  pricingCard: {
    planName: string;
    headline: string;
    pricingNote: string;
    scope: string;
    deliverables: string;
    exclusions: string;
  };
  limitations: string;
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ContributionArea {
  id: string;
  title: string;
  icon: string;
  image?: string;
  imageAlt?: string;
  shortDesc?: string;
  keywords?: string[];
  details: string[];
  statusNote: string;
}

export interface ServiceTermsSection {
  id: string;
  title: string;
  content: string[];
}

export interface ServiceTermsConfig {
  serviceSlug: string;
  serviceTitle: string;
  consentCheckboxText: string;
  termsRoute: PageRoute;
  serviceRoute: PageRoute;
  summary: string;
  sections: ServiceTermsSection[];
}
