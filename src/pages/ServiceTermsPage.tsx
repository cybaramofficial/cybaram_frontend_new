import React, { useState } from 'react';
import { PageRoute } from '../types.ts';
import { SERVICE_TERMS_MAP } from '../data/serviceTermsData.ts';
import {
  ChevronRight,
  Shield,
  ShieldAlert,
  ArrowRight,
  FileText,
  Lock,
  ArrowLeft,
  CheckCircle2,
  Info
} from 'lucide-react';

interface ServiceTermsPageProps {
  serviceSlug: string;
  onNavigate: (path: PageRoute) => void;
}

export const ServiceTermsPage: React.FC<ServiceTermsPageProps> = ({ serviceSlug, onNavigate }) => {
  const termsConfig = SERVICE_TERMS_MAP[serviceSlug];
  const [activeSection, setActiveSection] = useState<string>('');

  if (!termsConfig) {
    return (
      <div className="py-24 text-center max-w-xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-[#172B4D] mb-4">Terms Not Found</h1>
        <p className="text-[#53615C] mb-8">The requested service terms document could not be located.</p>
        <button
          onClick={() => onNavigate('/services')}
          className="px-6 py-3 rounded-lg bg-[#123C35] text-white font-medium cursor-pointer"
        >
          View All Services
        </button>
      </div>
    );
  }

  const scrollToAnchor = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-0">
      {/* 1. Header & Context */}
      <section className="py-12 sm:py-16 bg-[#F6F8F6] border-b border-[#E8EEEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-medium text-[#53615C]" aria-label="Breadcrumb">
            <button
              onClick={() => onNavigate('/')}
              className="hover:text-[#123C35] transition-colors cursor-pointer"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-[#53615C]/60" />
            <button
              onClick={() => onNavigate('/services')}
              className="hover:text-[#123C35] transition-colors cursor-pointer"
            >
              Services
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-[#53615C]/60" />
            <button
              onClick={() => onNavigate(termsConfig.serviceRoute)}
              className="hover:text-[#123C35] transition-colors cursor-pointer"
            >
              {termsConfig.serviceTitle}
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-[#53615C]/60" />
            <span className="text-[#172B4D] font-semibold">Terms & Conditions</span>
          </nav>

          <div className="max-w-4xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#123C35] uppercase">
              <Shield className="w-4 h-4 text-[#123C35]" />
              <span>SERVICE-SPECIFIC TERMS · CYBARAM.COM</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#172B4D]">
              {termsConfig.serviceTitle} Terms & Conditions
            </h1>
            <p className="text-base sm:text-lg text-[#53615C] leading-relaxed">
              {termsConfig.summary}
            </p>
          </div>

          {/* Service Links and Navigation */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => onNavigate(termsConfig.serviceRoute)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-white text-[#123C35] border border-[#E8EEEA] hover:bg-[#E8F5EE] transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to {termsConfig.serviceTitle} Overview</span>
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/terms')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium text-[#53615C] hover:text-[#172B4D] bg-white border border-[#E8EEEA] hover:bg-[#F6F8F6] transition-colors cursor-pointer"
            >
              <span>General Terms of Service</span>
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/disclaimer')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium text-[#53615C] hover:text-[#172B4D] bg-white border border-[#E8EEEA] hover:bg-[#F6F8F6] transition-colors cursor-pointer"
            >
              <span>Service Disclaimer</span>
            </button>
          </div>

          {/* Mandatory Consent Notice */}
          <div className="bg-[#E8F5EE] border border-[#DCECE3] p-4.5 rounded-xl flex items-start gap-3.5 max-w-4xl">
            <Info className="w-5 h-5 text-[#123C35] shrink-0 mt-0.5" />
            <div className="text-xs text-[#123C35] space-y-1">
              <p className="font-semibold text-sm">Mandatory Consent Acknowledged on Inquiry</p>
              <p className="text-[#53615C] leading-relaxed">
                Every visitor submitting an inquiry for {termsConfig.serviceTitle} must explicitly review and accept these specific operational boundaries prior to engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Article Layout */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Desktop Sticky Table of Contents Sidebar */}
            <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-6 bg-[#F6F8F6] p-6 rounded-2xl border border-[#E8EEEA]">
              <div>
                <span className="text-xs font-semibold text-[#123C35] uppercase tracking-wider block">
                  ON THIS PAGE
                </span>
                <h3 className="text-base font-bold text-[#172B4D] mt-1">
                  Table of Contents
                </h3>
              </div>

              <nav className="space-y-1.5" aria-label="Table of contents">
                {termsConfig.sections.map((sec) => (
                  <button
                    key={sec.id}
                    type="button"
                    onClick={() => scrollToAnchor(sec.id)}
                    className={`block w-full text-left text-xs py-1.5 px-2 rounded-md transition-colors cursor-pointer ${
                      activeSection === sec.id
                        ? 'bg-[#E8F5EE] text-[#123C35] font-semibold'
                        : 'text-[#53615C] hover:text-[#172B4D] hover:bg-white'
                    }`}
                  >
                    {sec.title}
                  </button>
                ))}
              </nav>

              <div className="pt-4 border-t border-[#E8EEEA] space-y-2">
                <span className="text-[11px] font-semibold text-[#172B4D] uppercase block">
                  Consent Statement Preview
                </span>
                <p className="text-xs text-[#53615C] italic leading-relaxed bg-white p-3 rounded-lg border border-[#E8EEEA]">
                  "{termsConfig.consentCheckboxText}"
                </p>
              </div>

              <div className="pt-2 space-y-2">
                <button
                  type="button"
                  onClick={() => onNavigate(termsConfig.serviceRoute)}
                  className="w-full py-2.5 px-4 rounded-lg bg-[#123C35] text-white text-xs font-semibold hover:bg-[#0e2f2a] transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <span>Inquire About This Service</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#DCECE3]" />
                </button>
              </div>
            </aside>

            {/* Right: Article Body */}
            <main className="lg:col-span-8 space-y-12">
              <div className="space-y-10 divide-y divide-[#E8EEEA]">
                {termsConfig.sections.map((sec, idx) => (
                  <div key={sec.id} id={sec.id} className="space-y-4 pt-8 first:pt-0">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#172B4D]">
                      {sec.title}
                    </h2>
                    <div className="space-y-3">
                      {sec.content.map((paragraph, pIdx) => (
                        <p key={pIdx} className="text-sm sm:text-base text-[#53615C] leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Cross-linking to General Legal Policies */}
              <div className="p-6 bg-[#F6F8F6] rounded-2xl border border-[#E8EEEA] space-y-4 mt-12">
                <h3 className="text-base font-bold text-[#172B4D]">
                  Related Policies & Governance
                </h3>
                <p className="text-sm text-[#53615C] leading-relaxed">
                  These service-specific terms operate in conjunction with CybAram’s comprehensive governance framework:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => onNavigate('/terms')}
                    className="p-3 bg-white rounded-xl border border-[#E8EEEA] text-left hover:border-[#123C35] transition-colors cursor-pointer"
                  >
                    <p className="text-xs font-semibold text-[#172B4D]">Terms of Service</p>
                    <p className="text-[11px] text-[#53615C] mt-0.5">Platform use & engagement</p>
                  </button>
                  <button
                    type="button"
                    onClick={() => onNavigate('/disclaimer')}
                    className="p-3 bg-white rounded-xl border border-[#E8EEEA] text-left hover:border-[#123C35] transition-colors cursor-pointer"
                  >
                    <p className="text-xs font-semibold text-[#172B4D]">Service Disclaimer</p>
                    <p className="text-[11px] text-[#53615C] mt-0.5">Recovery & liability limits</p>
                  </button>
                  <button
                    type="button"
                    onClick={() => onNavigate('/privacy-policy')}
                    className="p-3 bg-white rounded-xl border border-[#E8EEEA] text-left hover:border-[#123C35] transition-colors cursor-pointer"
                  >
                    <p className="text-xs font-semibold text-[#172B4D]">Privacy Policy</p>
                    <p className="text-[11px] text-[#53615C] mt-0.5">Data handling & retention</p>
                  </button>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
};
