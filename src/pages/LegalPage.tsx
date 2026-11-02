import React, { useState } from 'react';
import { PageRoute } from '../types.ts';
import {
  ChevronRight,
  AlertCircle,
  ShieldAlert,
  PhoneCall,
  FileText,
  Lock,
  ArrowRight,
  Scale,
  Shield,
  Info
} from 'lucide-react';

interface LegalPageProps {
  type: 'privacy-policy' | 'terms' | 'disclaimer';
  onNavigate: (path: PageRoute) => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({ type, onNavigate }) => {
  const isPrivacy = type === 'privacy-policy';
  const isTerms = type === 'terms';
  const isDisclaimer = type === 'disclaimer';

  const [activeSection, setActiveSection] = useState<string>('');

  const title = isPrivacy
    ? 'Privacy Policy'
    : isTerms
    ? 'Terms of Service'
    : 'Service Disclaimer';

  const subtitle = isPrivacy
    ? 'This draft explains the intended collection and handling of website enquiries and contributor submissions. Business-specific processing details and hosting arrangements must be reviewed and confirmed before live publication.'
    : isTerms
    ? 'Draft Terms of Service prepared for business and legal review. Outlines mutual expectations, acceptable use, service eligibility, and communication boundaries.'
    : 'Draft service disclaimer prepared for business and legal review. Clarifies the realistic scope of independent guidance, lack of recovery guarantees, and essential emergency safeguards.';

  // Table of contents definitions per legal page type
  const disclaimerSections = [
    { id: 'general-scope', label: '1. General Scope of Guidance' },
    { id: 'financial-recovery', label: '2. No Guaranteed Financial Recovery' },
    { id: 'platform-moderation', label: '3. Platform Moderation & Takedowns' },
    { id: 'public-research', label: '4. Limitations of Public-Source Research' },
    { id: 'unlawful-prohibition', label: '5. Zero Unlawful or Offensive Actions' },
    { id: 'non-clinical', label: '6. Non-Clinical Listening Support' },
    { id: 'emergency-safeguards', label: '7. Emergency & Legal Signposting' },
    { id: 'digital-safety-net-disclaimer', label: '8. Digital Safety Net & Insurance Notice' }
  ];

  const termsSections = [
    { id: 'terms-eligibility', label: '1. Service Scope & Eligibility' },
    { id: 'terms-responsibilities', label: '2. User Responsibilities & Authority' },
    { id: 'terms-acceptable-use', label: '3. Lawful & Acceptable Use' },
    { id: 'terms-communication', label: '4. Communication & Boundary Rules' },
    { id: 'terms-pricing', label: '5. Enquiries, Scope & Fees' },
    { id: 'terms-cancellation', label: '6. Scope Changes & Cancellations' },
    { id: 'terms-disclaimer-ref', label: '7. Limitation of Liability' },
    { id: 'terms-service-specific', label: '8. Service-Specific Terms & Consent' }
  ];

  const privacySections = [
    { id: 'privacy-collection', label: '1. Information We Collect' },
    { id: 'privacy-purpose', label: '2. Purpose of Collection' },
    { id: 'privacy-handling', label: '3. Handling & Confidentiality' },
    { id: 'privacy-hosting', label: '4. Third-Party Hosting & Processing' },
    { id: 'privacy-retention', label: '5. Data Retention & Deletion Policy' },
    { id: 'privacy-security', label: '6. Security Safeguards & Limits' },
    { id: 'privacy-choices', label: '7. Your Choices & Contact Route' }
  ];

  const currentToc = isDisclaimer ? disclaimerSections : isTerms ? termsSections : privacySections;

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
            <span className="text-[#172B4D] font-semibold">{title}</span>
          </nav>

          <div className="max-w-4xl space-y-4">
            <span className="text-xs font-semibold tracking-wider text-[#123C35] uppercase">
              LEGAL DOCUMENTATION · CYBARAM.COM
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#172B4D]">
              {title}
            </h1>
            <p className="text-base sm:text-lg text-[#53615C] leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* Quick Document Navigation Switcher Tabs */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#E8EEEA]">
            <span className="text-xs font-medium text-[#53615C] mr-2">Switch document:</span>
            <button
              type="button"
              onClick={() => onNavigate('/disclaimer')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                isDisclaimer
                  ? 'bg-[#123C35] text-white shadow-2xs'
                  : 'bg-white text-[#53615C] hover:text-[#172B4D] border border-[#E8EEEA]'
              }`}
            >
              Disclaimer
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/terms')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                isTerms
                  ? 'bg-[#123C35] text-white shadow-2xs'
                  : 'bg-white text-[#53615C] hover:text-[#172B4D] border border-[#E8EEEA]'
              }`}
            >
              Terms of Service
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/privacy-policy')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                isPrivacy
                  ? 'bg-[#123C35] text-white shadow-2xs'
                  : 'bg-white text-[#53615C] hover:text-[#172B4D] border border-[#E8EEEA]'
              }`}
            >
              Privacy Policy
            </button>
          </div>

          {/* Transparent Draft Status Banner */}
          <div className="bg-[#E8F5EE] border border-[#DCECE3] p-4.5 rounded-xl flex items-start gap-3.5 max-w-4xl">
            <Info className="w-5 h-5 text-[#123C35] shrink-0 mt-0.5" />
            <div className="text-xs text-[#123C35] space-y-1">
              <p className="font-semibold text-sm">Draft for Business & Legal Review</p>
              <p className="text-[#53615C] leading-relaxed">
                This document is a transparent draft reflecting CybAram’s ethical philosophy and operational boundaries. It does not constitute formal legal counsel, a ratified corporate policy, or final contractual commitments until formalized upon public rollout.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Editorial Legal Article Layout */}
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
                {currentToc.map((sec) => (
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
                    {sec.label}
                  </button>
                ))}
              </nav>

              <div className="pt-4 border-t border-[#E8EEEA] space-y-2">
                <span className="text-[11px] font-semibold text-[#172B4D] uppercase block">
                  Need Clarification?
                </span>
                <p className="text-xs text-[#53615C] leading-relaxed">
                  Have questions regarding our service boundaries or legal drafts? Reach out to our team.
                </p>
                <button
                  type="button"
                  onClick={() => onNavigate('/contact-us')}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#123C35] hover:underline pt-1 cursor-pointer"
                >
                  <span>Contact CybAram</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </aside>

            {/* Right: Article Body */}
            <main className="lg:col-span-8 space-y-12">
              {/* ========================================================= */}
              {/* DISCLAIMER CONTENT                                        */}
              {/* ========================================================= */}
              {isDisclaimer && (
                <div className="space-y-10 divide-y divide-[#E8EEEA]">
                  {/* Section 1 */}
                  <div id="general-scope" className="space-y-3 pt-6 first:pt-0">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#172B4D]">
                      1. Guidance Within an Agreed Scope
                    </h2>
                    <p className="text-sm sm:text-base text-[#53615C] leading-relaxed">
                      CybAram is an independent cybersecurity educational and advisory initiative. We aim to provide practical, people-first guidance and public-source research within the specific scope agreed upon for an inquiry.
                    </p>
                    <p className="text-sm sm:text-base text-[#53615C] leading-relaxed">
                      Availability, eligibility, and potential deliverables vary depending on the nature of the inquiry. CybAram does not act as a law enforcement entity, financial ombudsman, telecommunications carrier, or certified forensic laboratory. Our guidance is designed to help you organize facts, understand technical concepts, and prepare for appropriate official channels.
                    </p>
                  </div>

                  {/* Section 2 (Highlighted Warning) */}
                  <div id="financial-recovery" className="space-y-4 pt-10">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#172B4D]">
                      2. No Guaranteed Financial Recovery
                    </h2>
                    <div className="p-5 rounded-xl bg-[#172B4D] text-white space-y-2">
                      <div className="flex items-center gap-2 text-[#DCECE3] text-xs font-semibold uppercase tracking-wider">
                        <ShieldAlert className="w-4 h-4" />
                        <span>Crucial Scam Consumer Advisory</span>
                      </div>
                      <p className="text-sm leading-relaxed text-[#DCECE3]">
                        <strong>CybAram cannot guarantee the recovery of stolen money, bank reversals, or favorable decisions by police and financial authorities.</strong> Anyone claiming they can “hack back” or guarantee 100% recovery of scam funds is running a secondary recovery fraud.
                      </p>
                    </div>
                    <p className="text-sm sm:text-base text-[#53615C] leading-relaxed">
                      If you have suffered an unauthorized debit or fraudulent transfer, you must notify your bank’s fraud response unit immediately (via the emergency number on your physical card) and lodge an official complaint via the National Cyber Crime Helpline at <strong>1930</strong> or <strong>cybercrime.gov.in</strong>. CybAram assists by helping you organize transaction references (UTR codes), screenshots, and chronology for bank and police dispute filings.
                    </p>
                  </div>

                  {/* Section 3 */}
                  <div id="platform-moderation" className="space-y-3 pt-10">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#172B4D]">
                      3. Platform Moderation & Takedowns Are Outside Our Control
                    </h2>
                    <p className="text-sm sm:text-base text-[#53615C] leading-relaxed">
                      Third-party social networks, hosting providers, domain registrars, and messaging platforms (including Meta, X, Google, LinkedIn, Telegram, and others) maintain exclusive, autonomous moderation authority over accounts on their systems.
                    </p>
                    <p className="text-sm sm:text-base text-[#53615C] leading-relaxed">
                      CybAram does not possess administrative deletion privileges on any platform. While we assist in preparing standardized, high-evidence impersonation and copyright packages for submission, we cannot guarantee takedown approval, account deletion, or specific turnaround times.
                    </p>
                  </div>

                  {/* Section 4 */}
                  <div id="public-research" className="space-y-3 pt-10">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#172B4D]">
                      4. Limitations of Public-Source Research
                    </h2>
                    <p className="text-sm sm:text-base text-[#53615C] leading-relaxed">
                      Our research methodologies rely strictly upon open-source intelligence (OSINT), public search engine indexes, open registry records, and verified DNS/WHOIS databases.
                    </p>
                    <p className="text-sm sm:text-base text-[#53615C] leading-relaxed">
                      Public-source research is inherently limited by data freshness, platform scraping restrictions, and third-party index accuracy. An assessment reflects observations at a single point in time. It does not certify that a person, website, or counterparty is completely safe, nor can it discover every hidden digital vulnerability or private exposure.
                    </p>
                  </div>

                  {/* Section 5 */}
                  <div id="unlawful-prohibition" className="space-y-3 pt-10">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#172B4D]">
                      5. Zero Unlawful or Offensive Actions
                    </h2>
                    <p className="text-sm sm:text-base text-[#53615C] leading-relaxed">
                      CybAram strictly prohibits and refuses any requests for offensive hacking, credential sniffing, password cracking, unauthorized network intrusions, illicit surveillance, doxxing, harassment, or retaliation.
                    </p>
                    <p className="text-sm sm:text-base text-[#53615C] leading-relaxed">
                      Furthermore, research services are strictly confined to legitimate corporate risk mitigation for eligible businesses. We categorically refuse investigations into spouses, romantic partners, friends, family members, or private personal disputes.
                    </p>
                  </div>

                  {/* Section 6 */}
                  <div id="non-clinical" className="space-y-3 pt-10">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#172B4D]">
                      6. Non-Clinical Listening Support
                    </h2>
                    <p className="text-sm sm:text-base text-[#53615C] leading-relaxed">
                      Mental Well-Being Support provided through CybAram is non-clinical peer listening and emotional grounding support. It is not psychotherapy, clinical counselling, psychiatric diagnosis, medical treatment, or crisis intervention.
                    </p>
                    <p className="text-sm sm:text-base text-[#53615C] leading-relaxed">
                      Our peer listeners offer patient, human presence without judgment, but they do not claim clinical licensure or therapeutic qualifications. CybAram cannot guarantee that personal difficulties, anxiety, or life situations will be resolved through a listening session.
                    </p>
                  </div>

                  {/* Section 7 */}
                  <div id="emergency-safeguards" className="space-y-4 pt-10">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#172B4D]">
                      7. Emergency & Crisis Assistance
                    </h2>
                    <p className="text-sm sm:text-base text-[#53615C] leading-relaxed">
                      Website content, guides, and listening conversations are not substitutes for qualified legal counsel, financial advisors, mental health professionals, or emergency services.
                    </p>
                    <div className="p-4 bg-[#F6F8F6] rounded-xl border border-[#E8EEEA] space-y-2 text-xs sm:text-sm text-[#172B4D]">
                      <p className="font-semibold text-[#123C35]">Emergency Helplines (India):</p>
                      <ul className="space-y-1 text-[#53615C]">
                        <li>• <strong>National Cyber Crime Helpline:</strong> Dial 1930 or visit cybercrime.gov.in</li>
                        <li>• <strong>Mental Health Support (Tele-MANAS):</strong> Dial 14416 or 1800-891-4416 (24/7, Toll-Free)</li>
                        <li>• <strong>National Emergency Service:</strong> Dial 112 for urgent physical safety or police assistance</li>
                      </ul>
                    </div>
                  </div>

                  {/* Section 8 */}
                  <div id="digital-safety-net-disclaimer" className="space-y-4 pt-10">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#172B4D]">
                      8. Digital Safety Net & Insurance Notice
                    </h2>
                    <p className="text-sm sm:text-base text-[#53615C] leading-relaxed">
                      CybAram is strictly an independent cybersecurity educational initiative. CybAram is NOT an insurance company, insurance broker, insurance agent, or third-party claims administrator under the Insurance Regulatory and Development Authority of India (IRDAI) or any other regulatory regime.
                    </p>
                    <p className="text-sm sm:text-base text-[#53615C] leading-relaxed">
                      We do not sell insurance, underwrite risk, issue policies, collect premiums, or guarantee claim payouts. Any guidance provided regarding cyber insurance policies, endorsements, or clauses is educational only. All decisions regarding insurance coverage must be made through licensed brokers or insurance companies.
                    </p>
                  </div>
                </div>
              )}

              {/* ========================================================= */}
              {/* TERMS & CONDITIONS CONTENT                                */}
              {/* ========================================================= */}
              {isTerms && (
                <div className="space-y-10 divide-y divide-[#E8EEEA]">
                  <div id="terms-eligibility" className="space-y-3 pt-6 first:pt-0">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#172B4D]">
                      1. Service Scope & Eligibility
                    </h2>
                    <p className="text-sm sm:text-base text-[#53615C] leading-relaxed">
                      CybAram provides independent, human-centered digital safety guidance, exposure assessments, business open-source risk evaluation, impersonation documentation support, non-clinical listening, and cyber-risk awareness education.
                    </p>
                    <p className="text-sm sm:text-base text-[#53615C] leading-relaxed">
                      Eligibility and service availability are evaluated on a case-by-case basis. Inquiries must have a legitimate, lawful foundation. Business research is strictly limited to verified enterprises and organizations.
                    </p>
                  </div>

                  <div id="terms-responsibilities" className="space-y-3 pt-10">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#172B4D]">
                      2. User Responsibilities & Authority
                    </h2>
                    <p className="text-sm sm:text-base text-[#53615C] leading-relaxed">
                      When contacting CybAram or requesting services, you agree to provide truthful, accurate information regarding your identity and legal authority over the accounts, domains, or trademarks under review.
                    </p>
                    <p className="text-sm sm:text-base text-[#53615C] leading-relaxed">
                      You are responsible for your own credentials. You must never provide passwords, PINs, OTP codes, banking credentials, or full payment card numbers to anyone, including CybAram representatives.
                    </p>
                  </div>

                  <div id="terms-acceptable-use" className="space-y-3 pt-10">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#172B4D]">
                      3. Lawful & Acceptable Use
                    </h2>
                    <p className="text-sm sm:text-base text-[#53615C] leading-relaxed">
                      You agree not to use CybAram’s website, educational resources, or communication channels to solicit unlawful acts. Prohibited activities include attempting to compromise systems, obtaining unauthorized access, scraping private databases, stalking, doxxing, or seeking personal information about individuals in romantic or domestic disputes.
                    </p>
                  </div>

                  <div id="terms-communication" className="space-y-3 pt-10">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#172B4D]">
                      4. Communication & Boundary Rules
                    </h2>
                    <p className="text-sm sm:text-base text-[#53615C] leading-relaxed">
                      All interactions with CybAram staff and peer listeners must remain respectful, professional, and appropriate to the agreed purpose.
                    </p>
                    <p className="text-sm sm:text-base text-[#53615C] leading-relaxed">
                      Sexual harassment, sexually explicit comments, abusive language, intimidation, and unsolicited personal advances toward listeners or volunteers are strictly barred. Users must not pressure staff to disclose personal mobile numbers or meet privately outside authorized channels. Violation of these boundaries will result in immediate termination of the session and restriction of future service access.
                    </p>
                  </div>

                  <div id="terms-pricing" className="space-y-3 pt-10">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#172B4D]">
                      5. Enquiries, Scope & Fees
                    </h2>
                    <p className="text-sm sm:text-base text-[#53615C] leading-relaxed">
                      No commercial prices are finalized on this website. All offerings are designated as “Contact us for pricing”. Submitting an enquiry does not establish a binding commercial retainer or guarantee acceptance of a client engagement.
                    </p>
                    <p className="text-sm sm:text-base text-[#53615C] leading-relaxed">
                      Where fees apply, deliverables, milestones, and payment arrangements must be explicitly confirmed in writing prior to initiating work.
                    </p>
                  </div>

                  <div id="terms-cancellation" className="space-y-3 pt-10">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#172B4D]">
                      6. Scope Changes & Cancellations
                    </h2>
                    <p className="text-sm sm:text-base text-[#53615C] leading-relaxed">
                      Either party may choose not to proceed with an inquiry before formal engagement. In the event of new facts emerging that violate legal or ethical guidelines (such as discovering an inquiry involves personal stalking or unauthorized access), CybAram reserves the right to terminate assistance immediately.
                    </p>
                  </div>

                  <div id="terms-disclaimer-ref" className="space-y-3 pt-10">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#172B4D]">
                      7. Limitation of Liability
                    </h2>
                    <p className="text-sm sm:text-base text-[#53615C] leading-relaxed">
                      To the maximum extent permitted by applicable law, CybAram and its contributors will not be liable for any indirect, incidental, or consequential damages resulting from reliance on website materials, guidance notes, or third-party platform actions. All services are subject to the limitations set forth in our Service Disclaimer.
                    </p>
                  </div>

                  <div id="terms-service-specific" className="space-y-4 pt-10">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#172B4D]">
                      8. Service-Specific Terms & Mandatory Consent
                    </h2>
                    <p className="text-sm sm:text-base text-[#53615C] leading-relaxed">
                      Each core service provided by CybAram has tailored operational boundaries and explicit terms that must be reviewed and accepted before submitting an inquiry:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => onNavigate('/services/cyber-victim-support/terms')}
                        className="p-3.5 bg-[#F6F8F6] rounded-xl border border-[#E8EEEA] text-left hover:border-[#123C35] transition-colors cursor-pointer"
                      >
                        <p className="text-xs font-bold text-[#123C35]">Cyber Victim Support Terms →</p>
                        <p className="text-[11px] text-[#53615C] mt-0.5">Evidence guidance, reporting, no fund recovery guarantees</p>
                      </button>
                      <button
                        type="button"
                        onClick={() => onNavigate('/services/digital-exposure-assessment/terms')}
                        className="p-3.5 bg-[#F6F8F6] rounded-xl border border-[#E8EEEA] text-left hover:border-[#123C35] transition-colors cursor-pointer"
                      >
                        <p className="text-xs font-bold text-[#123C35]">Digital Exposure Assessment Terms →</p>
                        <p className="text-[11px] text-[#53615C] mt-0.5">Public sources only, authorization required, de-indexing limits</p>
                      </button>
                      <button
                        type="button"
                        onClick={() => onNavigate('/services/osint-research/terms')}
                        className="p-3.5 bg-[#F6F8F6] rounded-xl border border-[#E8EEEA] text-left hover:border-[#123C35] transition-colors cursor-pointer"
                      >
                        <p className="text-xs font-bold text-[#123C35]">Business OSINT Terms →</p>
                        <p className="text-[11px] text-[#53615C] mt-0.5">Eligible businesses only, no private surveillance</p>
                      </button>
                      <button
                        type="button"
                        onClick={() => onNavigate('/services/impersonation-monitoring/terms')}
                        className="p-3.5 bg-[#F6F8F6] rounded-xl border border-[#E8EEEA] text-left hover:border-[#123C35] transition-colors cursor-pointer"
                      >
                        <p className="text-xs font-bold text-[#123C35]">Impersonation Monitoring Terms →</p>
                        <p className="text-[11px] text-[#53615C] mt-0.5">Evidence dossiers, third-party platform moderation autonomy</p>
                      </button>
                      <button
                        type="button"
                        onClick={() => onNavigate('/services/mental-wellbeing-support/terms')}
                        className="p-3.5 bg-[#F6F8F6] rounded-xl border border-[#E8EEEA] text-left hover:border-[#123C35] transition-colors cursor-pointer"
                      >
                        <p className="text-xs font-bold text-[#123C35]">Mental Well-Being Support Terms →</p>
                        <p className="text-[11px] text-[#53615C] mt-0.5">Non-clinical peer listening, personal conduct & boundary rules</p>
                      </button>
                      <button
                        type="button"
                        onClick={() => onNavigate('/services/digital-safety-net/terms')}
                        className="p-3.5 bg-[#F6F8F6] rounded-xl border border-[#E8EEEA] text-left hover:border-[#123C35] transition-colors cursor-pointer"
                      >
                        <p className="text-xs font-bold text-[#123C35]">Digital Safety Net Terms →</p>
                        <p className="text-[11px] text-[#53615C] mt-0.5">Educational risk evaluation, not an insurance broker/underwriter</p>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* ========================================================= */}
              {/* PRIVACY POLICY CONTENT                                    */}
              {/* ========================================================= */}
              {isPrivacy && (
                <div className="space-y-10 divide-y divide-[#E8EEEA]">
                  <div id="privacy-collection" className="space-y-3 pt-6 first:pt-0">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#172B4D]">
                      1. Information We Collect
                    </h2>
                    <p className="text-sm sm:text-base text-[#53615C] leading-relaxed">
                      We collect only information voluntarily submitted through our website forms:
                    </p>
                    <ul className="space-y-2 text-sm sm:text-base text-[#53615C] pl-4 list-disc">
                      <li><strong>General & Service Contact:</strong> Name, email address, enquiry category, subject, message text, and optional public URLs under review.</li>
                      <li><strong>Volunteer & Contributor Applications:</strong> Full name, email address, selected contribution area, self-reported skills, weekly availability, optional portfolio link, and motivation note.</li>
                      <li><strong>Listening Session Requests:</strong> Preferred name, contact email or phone number, communication format preference, and brief situational note.</li>
                    </ul>
                    <p className="text-sm text-[#53615C] leading-relaxed pt-2">
                      We explicitly do not collect passwords, PINs, OTP codes, banking credentials, biometric identifiers, or unnecessary government identity documents through this website.
                    </p>
                  </div>

                  <div id="privacy-purpose" className="space-y-3 pt-10">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#172B4D]">
                      2. Purpose of Collection
                    </h2>
                    <p className="text-sm sm:text-base text-[#53615C] leading-relaxed">
                      Your submitted information is used strictly to understand your concern, assess relevant guidance options, coordinate scheduled conversations, and communicate directly with you regarding your submission. We do not use your information for third-party advertising, commercial profiling, or data brokerage.
                    </p>
                  </div>

                  <div id="privacy-handling" className="space-y-3 pt-10">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#172B4D]">
                      3. Handling & Confidentiality
                    </h2>
                    <p className="text-sm sm:text-base text-[#53615C] leading-relaxed">
                      All submitted details are treated with personal respect and professional confidentiality. Access is restricted strictly to coordinators and designated peer listeners who need the information to respond to your request.
                    </p>
                    <p className="text-sm sm:text-base text-[#53615C] leading-relaxed">
                      While we maintain strict internal confidentiality, users must note that absolute anonymity or exemption from law cannot be guaranteed in rare scenarios where there is an imminent threat to life, self-harm, or child protection safeguarding obligations.
                    </p>
                  </div>

                  <div id="privacy-hosting" className="space-y-3 pt-10">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#172B4D]">
                      4. Third-Party Hosting & Processing Providers
                    </h2>
                    <p className="text-sm sm:text-base text-[#53615C] leading-relaxed">
                      The CybAram website is hosted on secure cloud infrastructure. In live production, form transmissions utilize transport layer security (HTTPS). Specific external mail delivery partners, transactional SMTP providers, and database services will be documented and published alongside our live production rollout.
                    </p>
                  </div>

                  <div id="privacy-retention" className="space-y-3 pt-10">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#172B4D]">
                      5. Data Retention & Deletion Policy
                    </h2>
                    <p className="text-sm sm:text-base text-[#53615C] leading-relaxed">
                      We retain enquiry records only for the duration necessary to address your request, provide agreed support follow-ups, or maintain administrative integrity. Once an inquiry is resolved or closed, associated communication records are scheduled for secure deletion under our data minimization practices.
                    </p>
                  </div>

                  <div id="privacy-security" className="space-y-3 pt-10">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#172B4D]">
                      6. Security Safeguards & Limitations
                    </h2>
                    <p className="text-sm sm:text-base text-[#53615C] leading-relaxed">
                      We apply appropriate administrative, technical, and organizational measures to safeguard submitted data against unauthorized disclosure or loss.
                    </p>
                    <p className="text-sm sm:text-base text-[#53615C] leading-relaxed">
                      However, no method of transmission over the public internet or electronic storage is 100% impenetrable. We urge users never to transmit sensitive credentials, payment card numbers, or unredacted confidential records through web forms.
                    </p>
                  </div>

                  <div id="privacy-choices" className="space-y-3 pt-10">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#172B4D]">
                      7. Your Choices & Contact Route
                    </h2>
                    <p className="text-sm sm:text-base text-[#53615C] leading-relaxed">
                      You have the right to request access to the information you have submitted, request correction of inaccurate details, or ask for the deletion of your enquiry records.
                    </p>
                    <p className="text-sm sm:text-base text-[#53615C] leading-relaxed">
                      To exercise your privacy choices or raise questions regarding data handling, please contact CybAram through our contact form.
                    </p>
                  </div>
                </div>
              )}

              {/* Cross-Document Footer Navigation */}
              <div className="pt-12 border-t border-[#E8EEEA] space-y-4">
                <span className="text-xs font-semibold text-[#172B4D] uppercase tracking-wider block">
                  Other Legal Documentation
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {!isDisclaimer && (
                    <button
                      type="button"
                      onClick={() => onNavigate('/disclaimer')}
                      className="p-4 rounded-xl border border-[#E8EEEA] bg-[#F6F8F6] hover:border-[#123C35] text-left transition-colors cursor-pointer space-y-1"
                    >
                      <h4 className="text-sm font-bold text-[#172B4D]">Service Disclaimer →</h4>
                      <p className="text-xs text-[#53615C]">Scope limitations, no financial recovery guarantees, and emergency contacts.</p>
                    </button>
                  )}
                  {!isTerms && (
                    <button
                      type="button"
                      onClick={() => onNavigate('/terms')}
                      className="p-4 rounded-xl border border-[#E8EEEA] bg-[#F6F8F6] hover:border-[#123C35] text-left transition-colors cursor-pointer space-y-1"
                    >
                      <h4 className="text-sm font-bold text-[#172B4D]">Terms of Service →</h4>
                      <p className="text-xs text-[#53615C]">Acceptable use, user responsibilities, and communication boundaries.</p>
                    </button>
                  )}
                  {!isPrivacy && (
                    <button
                      type="button"
                      onClick={() => onNavigate('/privacy-policy')}
                      className="p-4 rounded-xl border border-[#E8EEEA] bg-[#F6F8F6] hover:border-[#123C35] text-left transition-colors cursor-pointer space-y-1"
                    >
                      <h4 className="text-sm font-bold text-[#172B4D]">Privacy Policy →</h4>
                      <p className="text-xs text-[#53615C]">Information handling, purpose of collection, and security practices.</p>
                    </button>
                  )}
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
};
