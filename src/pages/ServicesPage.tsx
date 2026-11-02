import React from 'react';
import { PageRoute } from '../types.ts';
import { SERVICES_PAGE_FAQS } from '../data/siteData.ts';
import { FaqAccordion } from '../components/FaqAccordion.tsx';
import { PageHeroBanner } from '../components/PageHeroBanner.tsx';
import { assetUrl } from '../utils/assetUrl.ts';
import {
  Shield,
  Eye,
  Building2,
  Fingerprint,
  Heart,
  ShieldCheck,
  ArrowRight,
  AlertCircle
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (path: PageRoute) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-0">
      {/* 1. Cinematic Landscape Hero Banner */}
      <PageHeroBanner
        imageSrc="/src/assets/images/hero_cinematic_services_1792753237458.jpg"
        imageAlt="Indian cybersecurity advisor and client reviewing transparent guidance documents"
        kicker="OUR SERVICES · HUMAN-CENTRED DIGITAL SAFETY"
        title="Practical support for a safer digital life."
        subtitle="Every digital concern is different. Explore our six core services to understand what support is appropriate for your situation, along with honest operational boundaries."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Services' }
        ]}
        onNavigate={onNavigate}
        actions={
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => onNavigate('/contact-us')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm sm:text-base font-semibold bg-[#123C35] text-white hover:bg-[#0e2f2a] active:scale-[0.99] transition-all shadow-xs cursor-pointer"
            >
              <span>Contact an Advisor</span>
              <ArrowRight className="w-4 h-4 text-[#DCECE3]" />
            </button>
            <a
              href="#service-directory"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm sm:text-base font-semibold bg-white text-[#123C35] border border-[#DCECE3] hover:bg-[#E8F5EE] active:scale-[0.99] transition-all cursor-pointer"
            >
              <span>Explore All 6 Services</span>
              <ArrowRight className="w-4 h-4 text-[#123C35]" />
            </a>
          </div>
        }
      />

      {/* 2. Service Directory */}
      <section id="service-directory" className="py-20 bg-white border-t border-[#E8EEEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-semibold tracking-wider text-[#123C35] uppercase">
              FIND THE RIGHT SUPPORT
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#172B4D]">
              Six services. One people-first approach.
            </h2>
            <p className="text-base sm:text-lg text-[#53615C]">
              Explore the audience, potential support, and strict operational boundaries of each service.
            </p>
          </div>

          <div className="space-y-6">
            {/* Service 1 */}
            <div className="bg-[#F6F8F6] p-6 sm:p-8 rounded-2xl border border-[#E8EEEA] hover:border-[#123C35]/40 transition-all grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-3">
                <div className="relative aspect-16/10 rounded-xl overflow-hidden border border-[#E8EEEA] bg-white">
                  <img
                    src={assetUrl('/assets/images/cyber_victim_support_1792741336142.jpg')}
                    alt="Cyber Victim Support"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="md:col-span-6 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#E8F5EE] text-[#123C35] flex items-center justify-center shrink-0">
                    <Shield className="w-4 h-4" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#172B4D]">Cyber Victim Support</h3>
                </div>
                <p className="text-xs sm:text-sm font-medium text-[#123C35]">
                  For people who have experienced or suspect an online scam, suspicious communication, or digital extortion.
                </p>
                <p className="text-xs sm:text-sm text-[#53615C] leading-relaxed">
                  Clear, calm next steps after scams or suspicious messages. We guide you on preserving evidence safely and using official reporting channels.
                </p>
              </div>
              <div className="md:col-span-3 flex md:justify-end">
                <button
                  type="button"
                  onClick={() => onNavigate('/services/cyber-victim-support')}
                  className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-lg text-sm font-semibold bg-white text-[#123C35] border border-[#E8EEEA] hover:bg-[#E8F5EE] transition-all cursor-pointer shadow-2xs whitespace-nowrap"
                >
                  <span>View scope & pricing</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-[#F6F8F6] p-6 sm:p-8 rounded-2xl border border-[#E8EEEA] hover:border-[#123C35]/40 transition-all grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-3">
                <div className="relative aspect-16/10 rounded-xl overflow-hidden border border-[#E8EEEA] bg-white">
                  <img
                    src={assetUrl('/assets/images/digital-exposure-assessment-people-and-digital-saf-3.jpg')}
                    alt="Digital Exposure Assessment"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="md:col-span-6 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#E8F5EE] text-[#123C35] flex items-center justify-center shrink-0">
                    <Eye className="w-4 h-4" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#172B4D]">Digital Exposure Assessment</h3>
                </div>
                <p className="text-xs sm:text-sm font-medium text-[#123C35]">
                  For people who want to understand information publicly exposed online and improve privacy.
                </p>
                <p className="text-xs sm:text-sm text-[#53615C] leading-relaxed">
                  Understand your public digital footprint across open search engines and public registries without invasive techniques or account access.
                </p>
              </div>
              <div className="md:col-span-3 flex md:justify-end">
                <button
                  type="button"
                  onClick={() => onNavigate('/services/digital-exposure-assessment')}
                  className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-lg text-sm font-semibold bg-white text-[#123C35] border border-[#E8EEEA] hover:bg-[#E8F5EE] transition-all cursor-pointer shadow-2xs whitespace-nowrap"
                >
                  <span>View scope & pricing</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-[#F6F8F6] p-6 sm:p-8 rounded-2xl border border-[#E8EEEA] hover:border-[#123C35]/40 transition-all grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-3">
                <div className="relative aspect-16/10 rounded-xl overflow-hidden border border-[#E8EEEA] bg-white">
                  <img
                    src={assetUrl('/assets/images/osint_small_business_1792741337713.jpg')}
                    alt="OSINT Research for Small Businesses"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="md:col-span-6 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#E8F5EE] text-[#123C35] flex items-center justify-center shrink-0">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#172B4D]">OSINT Research for Small Businesses</h3>
                </div>
                <p className="text-xs sm:text-sm font-medium text-[#123C35]">
                  For eligible small businesses and organizations seeking lawful, public-source research into relevant digital risks.
                </p>
                <p className="text-xs sm:text-sm text-[#53615C] leading-relaxed">
                  Responsible public-source research into digital risks, domain spoofing, and brand assets for legitimate organizational needs.
                </p>
              </div>
              <div className="md:col-span-3 flex md:justify-end">
                <button
                  type="button"
                  onClick={() => onNavigate('/services/osint-research')}
                  className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-lg text-sm font-semibold bg-white text-[#123C35] border border-[#E8EEEA] hover:bg-[#E8F5EE] transition-all cursor-pointer shadow-2xs whitespace-nowrap"
                >
                  <span>View scope & pricing</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-[#F6F8F6] p-6 sm:p-8 rounded-2xl border border-[#E8EEEA] hover:border-[#123C35]/40 transition-all grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-3">
                <div className="relative aspect-16/10 rounded-xl overflow-hidden border border-[#E8EEEA] bg-white">
                  <img
                    src={assetUrl('/assets/images/impersonation_check_1792741338258.jpg')}
                    alt="Impersonation Monitoring"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="md:col-span-6 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#E8F5EE] text-[#123C35] flex items-center justify-center shrink-0">
                    <Fingerprint className="w-4 h-4" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#172B4D]">Impersonation Monitoring</h3>
                </div>
                <p className="text-xs sm:text-sm font-medium text-[#123C35]">
                  For public figures, creators, and professionals concerned about suspected fake profiles or brand clones.
                </p>
                <p className="text-xs sm:text-sm text-[#53615C] leading-relaxed">
                  Guidance on gathering evidence, tracking suspected fake handles, and executing official platform takedown workflows.
                </p>
              </div>
              <div className="md:col-span-3 flex md:justify-end">
                <button
                  type="button"
                  onClick={() => onNavigate('/services/impersonation-monitoring')}
                  className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-lg text-sm font-semibold bg-white text-[#123C35] border border-[#E8EEEA] hover:bg-[#E8F5EE] transition-all cursor-pointer shadow-2xs whitespace-nowrap"
                >
                  <span>View scope & pricing</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Service 5 */}
            <div className="bg-[#F6F8F6] p-6 sm:p-8 rounded-2xl border border-[#E8EEEA] hover:border-[#123C35]/40 transition-all grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-3">
                <div className="relative aspect-16/10 rounded-xl overflow-hidden border border-[#E8EEEA] bg-white">
                  <img
                    src={assetUrl('/assets/images/wellbeing_listening_1792744888958.jpg')}
                    alt="Mental Well-Being Support"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="md:col-span-6 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#E8F5EE] text-[#123C35] flex items-center justify-center shrink-0">
                    <Heart className="w-4 h-4" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#172B4D]">Mental Well-Being Support</h3>
                </div>
                <p className="text-xs sm:text-sm font-medium text-[#123C35]">
                  For people seeking respectful, non-clinical listening support when feeling lonely or navigating life distress.
                </p>
                <p className="text-xs sm:text-sm text-[#53615C] leading-relaxed">
                  A confidential, empathetic space to be heard without blame or judgment, helping you regain calm to take practical protective steps.
                </p>
              </div>
              <div className="md:col-span-3 flex md:justify-end">
                <button
                  type="button"
                  onClick={() => onNavigate('/services/mental-wellbeing-support')}
                  className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-lg text-sm font-semibold bg-white text-[#123C35] border border-[#E8EEEA] hover:bg-[#E8F5EE] transition-all cursor-pointer shadow-2xs whitespace-nowrap"
                >
                  <span>View scope & pricing</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Service 6 — Digital Safety Net (NEW!) */}
            <div className="bg-[#F6F8F6] p-6 sm:p-8 rounded-2xl border border-[#E8EEEA] hover:border-[#123C35]/40 transition-all grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-3">
                <div className="relative aspect-16/10 rounded-xl overflow-hidden border border-[#E8EEEA] bg-white">
                  <img
                    src={assetUrl('/src/assets/images/service_digital_safety_net_1792753239595.jpg')}
                    alt="Digital Safety Net"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="md:col-span-6 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#E8F5EE] text-[#123C35] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#172B4D]">Digital Safety Net</h3>
                </div>
                <p className="text-xs sm:text-sm font-medium text-[#123C35]">
                  For individuals, families, and small businesses seeking independent cyber-risk awareness and cyber insurance guidance.
                </p>
                <p className="text-xs sm:text-sm text-[#53615C] leading-relaxed">
                  Understand your cyber risk profile, decrypt complex policy clauses and exclusions, and prepare mandatory security hygiene before talking to licensed brokers.
                </p>
              </div>
              <div className="md:col-span-3 flex md:justify-end">
                <button
                  type="button"
                  onClick={() => onNavigate('/services/digital-safety-net')}
                  className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-lg text-sm font-semibold bg-white text-[#123C35] border border-[#E8EEEA] hover:bg-[#E8F5EE] transition-all cursor-pointer shadow-2xs whitespace-nowrap"
                >
                  <span>View scope & pricing</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Concern Matching Guide ("Not sure where to begin?") */}
      <section className="py-20 bg-[#F6F8F6] border-t border-[#E8EEEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-semibold tracking-wider text-[#123C35] uppercase">
              START WITH YOUR CONCERN
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#172B4D]">
              Not sure where to begin?
            </h2>
            <p className="text-base sm:text-lg text-[#53615C]">
              Match what you are worried about to a relevant support option.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-7 rounded-2xl border border-[#E8EEEA] space-y-3 flex flex-col justify-between shadow-2xs">
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-[#172B4D]">A scam or suspicious message</h3>
                <p className="text-sm text-[#53615C]">
                  Understand evidence, official reporting, and immediate account-security steps.
                </p>
              </div>
              <button
                type="button"
                onClick={() => onNavigate('/services/cyber-victim-support')}
                className="text-sm font-semibold text-[#123C35] hover:underline inline-flex items-center gap-1 cursor-pointer pt-2"
              >
                <span>Explore this service</span>
                <span aria-hidden="true">→</span>
              </button>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-[#E8EEEA] space-y-3 flex flex-col justify-between shadow-2xs">
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-[#172B4D]">Your information is too public</h3>
                <p className="text-sm text-[#53615C]">
                  Review public exposure vectors and practical privacy configuration options.
                </p>
              </div>
              <button
                type="button"
                onClick={() => onNavigate('/services/digital-exposure-assessment')}
                className="text-sm font-semibold text-[#123C35] hover:underline inline-flex items-center gap-1 cursor-pointer pt-2"
              >
                <span>Explore this service</span>
                <span aria-hidden="true">→</span>
              </button>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-[#E8EEEA] space-y-3 flex flex-col justify-between shadow-2xs">
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-[#172B4D]">A business-related digital risk</h3>
                <p className="text-sm text-[#53615C]">
                  Define a lawful public-source research requirement for your enterprise.
                </p>
              </div>
              <button
                type="button"
                onClick={() => onNavigate('/services/osint-research')}
                className="text-sm font-semibold text-[#123C35] hover:underline inline-flex items-center gap-1 cursor-pointer pt-2"
              >
                <span>Explore this service</span>
                <span aria-hidden="true">→</span>
              </button>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-[#E8EEEA] space-y-3 flex flex-col justify-between shadow-2xs">
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-[#172B4D]">A suspected fake profile</h3>
                <p className="text-sm text-[#53615C]">
                  Understand documentation and platform reporting options for creators and leaders.
                </p>
              </div>
              <button
                type="button"
                onClick={() => onNavigate('/services/impersonation-monitoring')}
                className="text-sm font-semibold text-[#123C35] hover:underline inline-flex items-center gap-1 cursor-pointer pt-2"
              >
                <span>Explore this service</span>
                <span aria-hidden="true">→</span>
              </button>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-[#E8EEEA] space-y-3 flex flex-col justify-between shadow-2xs">
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-[#172B4D]">Feeling overwhelmed or lonely</h3>
                <p className="text-sm text-[#53615C]">
                  Ask about respectful, non-clinical listening support to talk things through.
                </p>
              </div>
              <button
                type="button"
                onClick={() => onNavigate('/services/mental-wellbeing-support')}
                className="text-sm font-semibold text-[#123C35] hover:underline inline-flex items-center gap-1 cursor-pointer pt-2"
              >
                <span>Explore this service</span>
                <span aria-hidden="true">→</span>
              </button>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-[#E8EEEA] space-y-3 flex flex-col justify-between shadow-2xs">
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-[#172B4D]">Cyber insurance & risk clarity</h3>
                <p className="text-sm text-[#53615C]">
                  Understand coverage concepts, prerequisites, and exclusions before speaking with brokers.
                </p>
              </div>
              <button
                type="button"
                onClick={() => onNavigate('/services/digital-safety-net')}
                className="text-sm font-semibold text-[#123C35] hover:underline inline-flex items-center gap-1 cursor-pointer pt-2"
              >
                <span>Explore this service</span>
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Service Boundaries */}
      <section className="py-20 bg-white border-t border-[#E8EEEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <span className="text-xs font-semibold tracking-wider text-[#123C35] uppercase">
              CLEAR EXPECTATIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#172B4D]">
              Responsible support. Honest boundaries.
            </h2>
            <p className="text-base sm:text-lg text-[#53615C]">
              We explain what each service may include, and clearly state what it does not:
            </p>

            <ul className="space-y-3 pt-2 text-sm sm:text-base text-[#172B4D]">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#123C35] mt-2 shrink-0" />
                <span><strong>No unauthorized access or hacking:</strong> We never break into accounts, deploy malware, or bypass security barriers.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#123C35] mt-2 shrink-0" />
                <span><strong>No guaranteed recovery:</strong> We cannot guarantee scam-money recovery, profile takedowns, or law enforcement outcomes.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#123C35] mt-2 shrink-0" />
                <span><strong>Business OSINT only:</strong> Open-source research is strictly for legitimate organizations, not personal relationship investigations.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#123C35] mt-2 shrink-0" />
                <span><strong>Not an insurer or broker:</strong> Digital Safety Net provides independent risk education only and does not issue policies or adjust claims.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#123C35] mt-2 shrink-0" />
                <span><strong>Non-clinical listening:</strong> Mental Well-Being Support is empathetic non-clinical listening, not psychiatric therapy or medical care.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#123C35] mt-2 shrink-0" />
                <span><strong>Mandatory Terms & Consent:</strong> Every inquiry is subject to verified, service-specific terms acknowledged prior to engagement.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Pricing Information Note */}
      <section className="py-16 bg-[#F6F8F6] border-t border-[#E8EEEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-2xl border border-[#E8EEEA] space-y-3 shadow-xs">
            <span className="text-xs font-semibold tracking-wider text-[#123C35] uppercase">
              PRICING & SCOPE
            </span>
            <h3 className="text-2xl font-bold text-[#172B4D]">
              A clear scope before any engagement.
            </h3>
            <p className="text-sm sm:text-base text-[#53615C] leading-relaxed">
              Detailed pricing enquiries are available on every service page. No official rates have been pre-set or confirmed. All services are marked as <strong>“Contact us for pricing”</strong>; exact scope, fees, and deliverables must be agreed before any work begins.
            </p>
          </div>
        </div>
      </section>

      {/* 6. FAQs */}
      <FaqAccordion
        items={SERVICES_PAGE_FAQS}
        contactPrompt={{
          text: 'Still have a question? Contact us',
          actionText: 'Still have a question? Contact us',
          onAction: () => onNavigate('/contact-us')
        }}
      />

      {/* 7. CTA Banner */}
      <section className="py-20 bg-[#123C35] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Not sure which service is right for you?
          </h2>
          <p className="text-lg text-[#DCECE3] max-w-xl mx-auto">
            Tell us your concern and ask about appropriate support. We’ll help you understand what guidance fits best.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => onNavigate('/contact-us')}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-base font-semibold bg-white text-[#123C35] hover:bg-[#F6F8F6] active:scale-[0.99] transition-all shadow-md cursor-pointer"
            >
              <span>Contact CybAram</span>
              <ArrowRight className="w-4 h-4 text-[#123C35]" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
