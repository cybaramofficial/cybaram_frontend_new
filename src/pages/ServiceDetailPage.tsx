import React, { useState } from 'react';
import { PageRoute } from '../types.ts';
import { SERVICES_DATA } from '../data/siteData.ts';
import { FaqAccordion } from '../components/FaqAccordion.tsx';
import { ServiceConsent } from '../components/ServiceConsent.tsx';
import {
  ChevronRight,
  ArrowRight,
  Shield,
  ShieldAlert,
  AlertTriangle,
  Info,
  CheckCircle2,
  Lock,
  Clock,
  Heart,
  Scale,
  Users,
  EyeOff,
  UserCheck,
  FileText
} from 'lucide-react';

interface ServiceDetailPageProps {
  slug: string;
  onNavigate: (path: PageRoute) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ slug, onNavigate }) => {
  const service = SERVICES_DATA[slug];

  // Universal Inquiry Modal State
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [consentChecked, setConsentChecked] = useState(false);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [modalError, setModalError] = useState('');
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    emailOrPhone: '',
    preferredMethod: 'Audio Call',
    briefNote: ''
  });

  if (!service) {
    return (
      <div className="py-24 text-center max-w-xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-[#172B4D] mb-4">Service Not Found</h1>
        <p className="text-[#53615C] mb-8">The requested service page does not exist or has moved.</p>
        <button
          onClick={() => onNavigate('/services')}
          className="px-6 py-3 rounded-lg bg-[#123C35] text-white font-medium cursor-pointer"
        >
          Back to Services
        </button>
      </div>
    );
  }

  const isFormValid =
    inquiryForm.name.trim().length > 0 &&
    inquiryForm.emailOrPhone.trim().length > 0 &&
    consentChecked;

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consentChecked) {
      setModalError('Please review and accept the service-specific Terms & Conditions before submitting.');
      return;
    }
    setModalError('');
    setInquirySubmitted(true);
  };

  const serviceTermsRoute = `/services/${slug}/terms` as PageRoute;

  return (
    <div className="space-y-0">
      {/* 1. Header & Hero Section */}
      <section className="py-12 sm:py-18 bg-[#F6F8F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-medium text-[#53615C] mb-8" aria-label="Breadcrumb">
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
            <span className="text-[#172B4D] font-semibold">{service.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-semibold tracking-wider text-[#123C35] uppercase">
                {service.badge}
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#172B4D] leading-[1.14]">
                {service.heroHeadline}
              </h1>
              <p className="text-lg sm:text-xl text-[#53615C] leading-relaxed max-w-2xl">
                {service.heroSubheadline}
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                {slug === 'mental-wellbeing-support' ? (
                  <>
                    <button
                      type="button"
                      onClick={() => {
                        setConsentChecked(false);
                        setModalError('');
                        setInquirySubmitted(false);
                        setInquiryModalOpen(true);
                      }}
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-base font-semibold bg-[#123C35] text-white hover:bg-[#0e2f2a] active:scale-[0.99] transition-all shadow-xs cursor-pointer"
                    >
                      <span>Request a Listening Session</span>
                      <ArrowRight className="w-4 h-4 text-[#DCECE3]" />
                    </button>
                    <a
                      href="#boundaries"
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-base font-semibold bg-white text-[#123C35] border border-[#E8EEEA] hover:bg-[#E8F5EE] active:scale-[0.99] transition-all cursor-pointer"
                    >
                      <span>Read Service Boundaries</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </>
                ) : (
                  <>
                    <button
                      type="button"
                      onClick={() => {
                        setConsentChecked(false);
                        setModalError('');
                        setInquirySubmitted(false);
                        setInquiryModalOpen(true);
                      }}
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-base font-semibold bg-[#123C35] text-white hover:bg-[#0e2f2a] active:scale-[0.99] transition-all shadow-xs cursor-pointer"
                    >
                      <span>Send Inquiry</span>
                      <ArrowRight className="w-4 h-4 text-[#DCECE3]" />
                    </button>
                    <a
                      href="#deliverables"
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-base font-semibold bg-white text-[#123C35] border border-[#E8EEEA] hover:bg-[#E8F5EE] active:scale-[0.99] transition-all cursor-pointer"
                    >
                      <span>View Scope & Deliverables</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </>
                )}
                <button
                  type="button"
                  onClick={() => onNavigate(serviceTermsRoute)}
                  className="text-xs font-semibold text-[#123C35] underline hover:text-[#0e2f2a] cursor-pointer"
                >
                  View Service Terms →
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#E8EEEA] bg-white aspect-4/3">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advisory Banners */}
      {slug === 'cyber-victim-support' && (
        <section className="bg-[#172B4D] text-white py-4 border-b border-[#0f1d34]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm">
            <div className="flex items-center gap-2.5">
              <ShieldAlert className="w-4 h-4 text-[#DCECE3] shrink-0" />
              <span>
                <strong>Recent Financial Loss?</strong> Immediately report to your bank’s fraud desk and call the National Cyber Crime Helpline at <strong>1930</strong> (in India) or visit <strong>cybercrime.gov.in</strong>.
              </span>
            </div>
            <span className="text-[#DCECE3] bg-white/10 px-2.5 py-1 rounded text-xs shrink-0">
              Golden Hour Priority
            </span>
          </div>
        </section>
      )}

      {slug === 'osint-research' && (
        <section className="bg-[#E8F5EE] border-y border-[#DCECE3] py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-3">
            <Info className="w-4 h-4 text-[#123C35] shrink-0" />
            <p className="text-xs sm:text-sm text-[#123C35]">
              <strong>Business & Organizational Eligibility:</strong> This service is restricted strictly to verified small businesses, startups, and community entities for legitimate commercial and fraud protection. We strictly refuse inquiries into private individuals, spouses, or personal relationships.
            </p>
          </div>
        </section>
      )}

      {slug === 'digital-safety-net' && (
        <section className="bg-[#E8F5EE] border-y border-[#DCECE3] py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-3">
            <Info className="w-4 h-4 text-[#123C35] shrink-0" />
            <p className="text-xs sm:text-sm text-[#123C35]">
              <strong>Independent Advisory Disclosure:</strong> CybAram is NOT an insurance company, broker, agent, or claims administrator. We provide educational cyber-risk evaluations and policy concept clarity only; we do not underwrite risk, issue policies, or process insurance claims.
            </p>
          </div>
        </section>
      )}

      {slug === 'mental-wellbeing-support' && (
        <section className="bg-[#E8F5EE] border-y border-[#DCECE3] py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Info className="w-4 h-4 text-[#123C35] shrink-0" />
              <p className="text-xs sm:text-sm text-[#123C35]">
                <strong>Non-Clinical Peer Support:</strong> Open to anyone feeling lonely, overwhelmed, or recovering from digital deception. In an acute emotional crisis, please contact Tele-MANAS (<strong>14416</strong>) or emergency services (<strong>112</strong>) immediately.
              </p>
            </div>
            <a
              href="#boundaries"
              className="text-xs font-semibold text-[#123C35] underline hover:text-[#0e2f2a] whitespace-nowrap shrink-0 hidden sm:inline"
            >
              Review Conduct Boundaries →
            </a>
          </div>
        </section>
      )}

      {/* 2. Who is this for (Editorial Narrative Section) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-semibold tracking-wider text-[#123C35] uppercase">
                RELEVANCE & AUDIENCE
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-[#172B4D]">
                Who this service is designed for.
              </h2>
              <p className="text-base text-[#53615C] leading-relaxed">
                We focus on clear situations where independent guidance, fact organization, or patient human support can make a genuine difference.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-3.5">
              {service.whoIsItFor.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl border border-[#E8EEEA] bg-[#F6F8F6]/60 flex items-start gap-4 transition-all hover:bg-white hover:border-[#123C35]/30 hover:shadow-xs"
                >
                  <div className="w-6 h-6 rounded-full bg-[#E8F5EE] text-[#123C35] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <p className="text-sm sm:text-base text-[#172B4D] leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Scope & Deliverables (Clean Editorial List) */}
      <section id="deliverables" className="py-20 bg-[#F6F8F6] border-t border-[#E8EEEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4 mb-14">
            <span className="text-xs font-semibold tracking-wider text-[#123C35] uppercase">
              WHAT WE PROVIDE
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#172B4D]">
              Scope & potential deliverables.
            </h2>
            <p className="text-base sm:text-lg text-[#53615C] leading-relaxed">
              Every engagement is tailored to your circumstances, but generally encompasses these core advisory areas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.scopeDeliverables.map((del, idx) => {
              const colonIndex = del.text.indexOf(':');
              const heading = colonIndex !== -1 ? del.text.slice(0, colonIndex) : `Area ${del.num}`;
              const desc = colonIndex !== -1 ? del.text.slice(colonIndex + 1).trim() : del.text;

              return (
                <div
                  key={idx}
                  className="bg-white p-7 rounded-2xl border border-[#E8EEEA] space-y-3 shadow-xs flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <span className="text-xs font-semibold text-[#123C35] tracking-widest uppercase">
                      {del.num}
                    </span>
                    <h3 className="text-lg font-bold text-[#172B4D]">
                      {heading}
                    </h3>
                    <p className="text-sm text-[#53615C] leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Process: How it works (Horizontal Step Flow) */}
      <section className="py-20 bg-white border-t border-[#E8EEEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4 mb-16">
            <span className="text-xs font-semibold tracking-wider text-[#123C35] uppercase">
              STRUCTURED APPROACH
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#172B4D]">
              How we work together.
            </h2>
            <p className="text-base sm:text-lg text-[#53615C] leading-relaxed">
              A calm, stepwise process ensures clarity and keeps your sensitive information safeguarded.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.processSteps.map((stp, idx) => {
              const colonIndex = stp.text.indexOf(':');
              const stepTitle = colonIndex !== -1 ? stp.text.slice(0, colonIndex) : `Step ${stp.step}`;
              const stepDesc = colonIndex !== -1 ? stp.text.slice(colonIndex + 1).trim() : stp.text;

              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#F6F8F6] border border-[#E8EEEA] space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <span className="text-2xl font-bold text-[#123C35]/40 block">
                      {stp.step}
                    </span>
                    <h3 className="text-base font-bold text-[#172B4D]">
                      {stepTitle}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#53615C] leading-relaxed">
                      {stepDesc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Specialized Section for Mental Well-Being Support Boundaries */}
      {slug === 'mental-wellbeing-support' && (
        <section id="boundaries" className="py-20 bg-white border-t border-[#E8EEEA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-semibold tracking-wider text-[#123C35] uppercase">
                MUTUAL RESPECT & BOUNDARIES
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#172B4D]">
                Respectful Communication and Boundaries
              </h2>
              <p className="text-base sm:text-lg text-[#53615C] leading-relaxed">
                To keep this support safe, comfortable, and sustainable for both individuals and listeners, we operate under clear, non-negotiable boundaries. Please review these rules before requesting a session.
              </p>
            </div>

            <div className="divide-y divide-[#E8EEEA] border-y border-[#E8EEEA]">
              {/* Boundary A */}
              <div className="py-8 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#E8F5EE] text-[#123C35] flex items-center justify-center font-bold text-sm">
                    A
                  </div>
                  <h3 className="text-xl font-bold text-[#172B4D]">
                    Respectful conversations only
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-[#53615C] leading-relaxed pl-11">
                  Conversations must remain respectful, appropriate, and focused on emotional well-being, distress, and recovery. Sexual harassment, sexually explicit conversation, unsolicited sexual comments, and unwanted advances toward listeners or staff are strictly prohibited. Do not use this service to request intimate interactions or sexual favours.
                </p>
              </div>

              {/* Boundary B */}
              <div className="py-8 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#E8F5EE] text-[#123C35] flex items-center justify-center font-bold text-sm">
                    B
                  </div>
                  <h3 className="text-xl font-bold text-[#172B4D]">
                    Personal contact details and private relationships
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-[#53615C] leading-relaxed pl-11">
                  This service is not a dating, matchmaking, romantic, or companionship service. Users must not ask listeners or staff for their personal mobile numbers, personal email addresses, private social media profiles, or residential details. Do not ask listeners to meet outside authorised CybAram channels or pressure them into personal relationships.
                </p>
              </div>

              {/* Boundary C */}
              <div className="py-8 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#E8F5EE] text-[#123C35] flex items-center justify-center font-bold text-sm">
                    C
                  </div>
                  <h3 className="text-xl font-bold text-[#172B4D]">
                    Privacy and sensitive information
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-[#53615C] leading-relaxed pl-11">
                  Share only information you feel comfortable sharing and that is necessary for the conversation. Never request or share passwords, OTPs, PINs, banking credentials, or full payment card numbers. While CybAram treats your conversations with deep personal respect, absolute confidentiality or unconditional anonymity cannot be promised in cases involving imminent danger to life or child safeguarding duties.
                </p>
              </div>

              {/* Boundary D */}
              <div className="py-8 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#E8F5EE] text-[#123C35] flex items-center justify-center font-bold text-sm">
                    D
                  </div>
                  <h3 className="text-xl font-bold text-[#172B4D]">
                    Boundaries of the service & emergency care
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-[#53615C] leading-relaxed pl-11">
                  CybAram provides compassionate, non-clinical peer listening support. It is not psychotherapy, clinical counselling, psychiatric diagnosis, medical treatment, or crisis intervention. If you or someone you know requires emergency assistance, please contact <strong>Tele-MANAS (14416 / 1800-891-4416)</strong> or <strong>112</strong> immediately.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 5. What to Prepare & Good to Know */}
      <section className="py-20 bg-[#F6F8F6] border-t border-[#E8EEEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-semibold tracking-wider text-[#123C35] uppercase">
                PREPARATION & GUIDELINES
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-[#172B4D]">
                Good to know before reaching out.
              </h2>
              <p className="text-base text-[#53615C] leading-relaxed">
                Having the right items ready helps us evaluate your situation faster. Review these essential preparation points and safety rules.
              </p>
            </div>

            <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-[#E8EEEA] space-y-4 shadow-xs">
              {service.goodToKnow.map((item, idx) => {
                const isSafetyWarning = item.toLowerCase().includes('never share') || item.toLowerCase().includes('zero private') || item.toLowerCase().includes('not an insurance');
                const parts = item.split(':');
                const label = parts[0];
                const detail = parts.slice(1).join(':');

                return (
                  <div
                    key={idx}
                    className={`p-4 rounded-xl border ${
                      isSafetyWarning
                        ? 'bg-[#123C35]/5 border-[#123C35]/30 text-[#172B4D]'
                        : 'bg-[#F6F8F6] border-[#E8EEEA] text-[#172B4D]'
                    } flex items-start gap-3.5 text-sm sm:text-base leading-relaxed`}
                  >
                    {isSafetyWarning ? (
                      <Lock className="w-5 h-5 text-[#123C35] shrink-0 mt-0.5" />
                    ) : (
                      <Clock className="w-5 h-5 text-[#123C35] shrink-0 mt-0.5" />
                    )}
                    <div>
                      {detail ? (
                        <>
                          <strong className="text-[#172B4D]">{label}:</strong>{' '}
                          <span className="text-[#53615C]">{detail.trim()}</span>
                        </>
                      ) : (
                        <span>{item}</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Pricing & Plans Card */}
      <section className="py-20 bg-white border-t border-[#E8EEEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center space-y-3">
              <span className="text-xs font-semibold tracking-wider text-[#123C35] uppercase">
                PRICING & ENGAGEMENT SCOPE
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-[#172B4D]">
                Know the scope before you commit.
              </h2>
              <p className="text-sm sm:text-base text-[#53615C]">
                All services operate under an agreed scope before engagement.
              </p>
            </div>

            <div className="bg-[#F6F8F6] p-8 sm:p-10 rounded-2xl border border-[#E8EEEA] space-y-6 shadow-xs">
              <div className="border-b border-[#E8EEEA] pb-6 space-y-2">
                <span className="text-xs font-semibold tracking-wide uppercase text-[#53615C]">
                  {service.pricingCard.planName}
                </span>
                <h3 className="text-3xl font-bold text-[#172B4D]">
                  {service.pricingCard.headline}
                </h3>
                <p className="text-sm text-[#123C35] font-medium">
                  {service.pricingCard.pricingNote}
                </p>
              </div>

              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-semibold text-[#172B4D] mb-1">Scope</h4>
                  <p className="text-[#53615C] leading-relaxed">{service.pricingCard.scope}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-[#172B4D] mb-1">Potential Deliverables</h4>
                  <p className="text-[#53615C] leading-relaxed">{service.pricingCard.deliverables}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-[#172B4D] mb-1">Important Exclusions</h4>
                  <p className="text-[#53615C] leading-relaxed">{service.pricingCard.exclusions}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E8EEEA] space-y-3">
                <button
                  type="button"
                  onClick={() => {
                    setConsentChecked(false);
                    setModalError('');
                    setInquirySubmitted(false);
                    setInquiryModalOpen(true);
                  }}
                  className="w-full py-4 px-6 rounded-lg bg-[#123C35] text-white font-semibold hover:bg-[#0e2f2a] active:scale-[0.99] transition-all shadow-xs cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>{slug === 'mental-wellbeing-support' ? 'Request a Listening Session' : 'Send Inquiry'}</span>
                  <ArrowRight className="w-4 h-4 text-[#DCECE3]" />
                </button>
                <p className="text-xs text-center text-[#53615C]/80">
                  Deliverables, fees (if applicable), and mutual expectations are confirmed in writing prior to commencing work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Important Limitations & Terms Link */}
      <section className="py-16 bg-[#F6F8F6] border-t border-[#E8EEEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-2xl border border-[#E8EEEA] space-y-3 flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-[#123C35] shrink-0 mt-1" />
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-[#172B4D]">Important Service Boundaries & Governance</h3>
              <p className="text-sm text-[#53615C] leading-relaxed">
                {service.limitations}
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate(serviceTermsRoute)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#123C35] underline hover:text-[#0e2f2a] cursor-pointer"
                >
                  <span>Review Complete {service.title} Terms & Conditions →</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Tailored Interactive FAQs */}
      <FaqAccordion
        items={service.faqs}
        title="Frequently asked questions"
        subtitle="Honest answers, without the jargon."
        contactPrompt={{
          text: 'Still have a question? Contact us',
          actionText: 'Still have a question? Contact us',
          onAction: () => onNavigate('/contact-us')
        }}
      />

      {/* 9. Bottom CTA Banner */}
      <section className="py-20 bg-[#123C35] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Clear next steps begin with a conversation.
          </h2>
          <p className="text-lg text-[#DCECE3] max-w-xl mx-auto">
            Tell us about your situation and let us help you identify the right guidance.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setConsentChecked(false);
                setModalError('');
                setInquirySubmitted(false);
                setInquiryModalOpen(true);
              }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-base font-semibold bg-white text-[#123C35] hover:bg-[#F6F8F6] active:scale-[0.99] transition-all shadow-md cursor-pointer"
            >
              <span>{slug === 'mental-wellbeing-support' ? 'Request Listening Support' : 'Send Inquiry'}</span>
              <ArrowRight className="w-4 h-4 text-[#123C35]" />
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* Universal Mandatory Consent Service Inquiry Modal                         */}
      {/* ========================================================================= */}
      {inquiryModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-xl border border-[#E8EEEA] my-8 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-[#E8EEEA]">
              <div>
                <span className="text-xs font-semibold text-[#123C35] uppercase tracking-wider block">
                  {slug === 'mental-wellbeing-support' ? 'PEER LISTENING REQUEST' : 'SERVICE INQUIRY'}
                </span>
                <h3 className="text-xl font-bold text-[#172B4D]">
                  {slug === 'mental-wellbeing-support' ? 'Request a Listening Session' : `Inquire About ${service.title}`}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setInquiryModalOpen(false)}
                className="w-8 h-8 rounded-full bg-[#F6F8F6] text-[#53615C] hover:text-[#172B4D] flex items-center justify-center text-sm font-bold cursor-pointer"
                aria-label="Close dialog"
              >
                ✕
              </button>
            </div>

            {inquirySubmitted ? (
              <div className="py-6 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#E8F5EE] text-[#123C35] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-[#172B4D]">Inquiry Received</h4>
                <p className="text-sm text-[#53615C] leading-relaxed">
                  Thank you for reaching out regarding <strong>{service.title}</strong>. We treat your request with complete discretion. An advisor will review your note and contact you through <strong>{inquiryForm.emailOrPhone}</strong> with structured next steps.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setInquiryModalOpen(false);
                      setInquirySubmitted(false);
                      setConsentChecked(false);
                      setInquiryForm({ name: '', emailOrPhone: '', preferredMethod: 'Audio Call', briefNote: '' });
                    }}
                    className="px-6 py-2.5 rounded-lg bg-[#123C35] text-white text-sm font-semibold cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-4">
                <p className="text-xs text-[#53615C] leading-relaxed">
                  Share a concise summary of your concern. Never share passwords, PINs, OTP codes, or full banking numbers with anyone.
                </p>

                <div>
                  <label className="block text-xs font-semibold text-[#172B4D] mb-1">
                    Your Name <span className="text-[#123C35]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="How would you like us to address you?"
                    value={inquiryForm.name}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E8EEEA] text-sm text-[#172B4D] focus:outline-hidden focus:border-[#123C35] focus:ring-1 focus:ring-[#123C35] bg-[#F6F8F6]/40"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#172B4D] mb-1">
                    Email or Phone Number <span className="text-[#123C35]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Where should we send our follow-up guidance?"
                    value={inquiryForm.emailOrPhone}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, emailOrPhone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E8EEEA] text-sm text-[#172B4D] focus:outline-hidden focus:border-[#123C35] focus:ring-1 focus:ring-[#123C35] bg-[#F6F8F6]/40"
                  />
                </div>

                {slug === 'mental-wellbeing-support' && (
                  <div>
                    <label className="block text-xs font-semibold text-[#172B4D] mb-1">
                      Preferred Conversation Format
                    </label>
                    <select
                      value={inquiryForm.preferredMethod}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, preferredMethod: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#E8EEEA] text-sm text-[#172B4D] focus:outline-hidden focus:border-[#123C35] bg-[#F6F8F6]/40 cursor-pointer"
                    >
                      <option value="Audio Call">Audio Call (Voice only)</option>
                      <option value="Text Chat">Text Chat (Messaging)</option>
                      <option value="Email Exchange">Quiet Email Exchange</option>
                    </select>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold text-[#172B4D] mb-1">
                    Brief Note (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe what you are looking to understand or resolve..."
                    value={inquiryForm.briefNote}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, briefNote: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E8EEEA] text-sm text-[#172B4D] focus:outline-hidden focus:border-[#123C35] focus:ring-1 focus:ring-[#123C35] bg-[#F6F8F6]/40"
                  />
                </div>

                {/* Mandatory Service Consent Checkbox */}
                <ServiceConsent
                  serviceSlug={slug}
                  checked={consentChecked}
                  onChange={(checked) => {
                    setConsentChecked(checked);
                    if (checked) setModalError('');
                  }}
                  onNavigate={(path) => {
                    setInquiryModalOpen(false);
                    onNavigate(path);
                  }}
                  error={modalError}
                />

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setInquiryModalOpen(false)}
                    className="px-4 py-2.5 rounded-lg text-xs font-semibold text-[#53615C] hover:text-[#172B4D] cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={!isFormValid}
                    className={`px-5 py-2.5 rounded-lg text-xs font-semibold transition-all shadow-xs flex items-center gap-1.5 ${
                      isFormValid
                        ? 'bg-[#123C35] text-white hover:bg-[#0e2f2a] cursor-pointer'
                        : 'bg-[#53615C]/20 text-[#53615C] cursor-not-allowed border border-[#E8EEEA]'
                    }`}
                  >
                    <span>{slug === 'mental-wellbeing-support' ? 'Send Listening Request' : 'Send Inquiry'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
                {!isFormValid && (
                  <p className="text-[11px] text-right text-[#53615C]">
                    * Please check the mandatory consent box and fill required fields to enable inquiry submission.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
