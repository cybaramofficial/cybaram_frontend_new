import React, { useState } from 'react';
import { PageRoute } from '../types.ts';
import { ServiceConsent } from '../components/ServiceConsent.tsx';
import { PageHeroBanner } from '../components/PageHeroBanner.tsx';
import {
  ShieldAlert,
  CheckCircle2,
  Lock,
  ArrowRight
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (path: PageRoute) => void;
}

const CATEGORY_TO_SLUG: Record<string, string> = {
  'Cyber Victim Support': 'cyber-victim-support',
  'Digital Exposure Assessment': 'digital-exposure-assessment',
  'OSINT Research for Small Businesses': 'osint-research',
  'Impersonation Monitoring': 'impersonation-monitoring',
  'Mental Well-Being Support': 'mental-wellbeing-support',
  'Digital Safety Net': 'digital-safety-net'
};

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [consentChecked, setConsentChecked] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    subject: '',
    message: '',
    publicUrl: ''
  });

  const selectedSlug = formData.category ? CATEGORY_TO_SLUG[formData.category] : undefined;

  // Form validity check for enabling the submit button
  const isFormValid =
    formData.name.trim().length > 0 &&
    formData.email.trim().length > 0 &&
    formData.category.trim().length > 0 &&
    formData.subject.trim().length > 0 &&
    formData.message.trim().length > 0 &&
    consentChecked;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!consentChecked) {
      setErrorMessage(
        selectedSlug
          ? 'Please review and accept the service-specific Terms & Conditions before submitting.'
          : 'Please acknowledge the privacy policy and general terms before submitting.'
      );
      return;
    }

    setErrorMessage('');
    setFormSubmitted(true);
    window.scrollTo({ top: document.getElementById('enquiry')?.offsetTop || 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-0">
      {/* 1. Cinematic Landscape Hero Banner */}
      <PageHeroBanner
        imageSrc="/src/assets/images/hero_cinematic_contact_1792753255228.jpg"
        imageAlt="CybAram digital safety coordinator in a warm, welcoming consultation office"
        kicker="CONTACT CYBARAM · CONFIDENTIAL GUIDANCE"
        title="Let’s talk about what you need."
        subtitle="Whether you have an urgent question after a suspicious incident or want independent guidance on digital exposure, our advisors are here to help you identify the right next step."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Contact Us' }
        ]}
        onNavigate={onNavigate}
        actions={
          <a
            href="#enquiry"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm sm:text-base font-semibold bg-[#123C35] text-white hover:bg-[#0e2f2a] active:scale-[0.99] transition-all shadow-xs cursor-pointer"
          >
            <span>Proceed to Inquiry Form</span>
            <ArrowRight className="w-4 h-4 text-[#DCECE3]" />
          </a>
        }
      />

      {/* 2. Urgent Fraud / Safety Advisory Banner */}
      <section className="bg-[#172B4D] text-white py-5 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldAlert className="w-5 h-5 text-[#DCECE3] shrink-0" />
            <p className="text-xs sm:text-sm leading-relaxed text-[#F6F8F6]">
              <strong>Urgent Financial Incident?</strong> If money was stolen recently via UPI, card, or netbanking, call your bank immediately to freeze the account. In India, call the National Cyber Crime Helpline at <strong>1930</strong> or file at <strong>cybercrime.gov.in</strong>.
            </p>
          </div>
          <span className="text-xs bg-white/10 px-3 py-1.5 rounded-md whitespace-nowrap text-[#DCECE3] shrink-0">
            Non-Emergency Advisory
          </span>
        </div>
      </section>

      {/* 3. Send an enquiry section with Form */}
      <section id="enquiry" className="py-16 sm:py-24 bg-[#F6F8F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left information column */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-semibold tracking-wider text-[#123C35] uppercase">
                A SAFE PLACE TO START
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-[#172B4D]">
                Independent, confidential guidance.
              </h2>
              <p className="text-base text-[#53615C] leading-relaxed">
                Share a concise description of what you are experiencing. Please avoid sending unnecessary sensitive personal information.
              </p>

              <div className="space-y-3 pt-2 text-sm text-[#172B4D]">
                <p className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#123C35] mt-2 shrink-0" />
                  <span><strong>Never share passwords, OTPs, PINs, or full card numbers.</strong> CybAram will never ask for them.</span>
                </p>
                <p className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#123C35] mt-2 shrink-0" />
                  <span>CybAram is not a law enforcement entity, insurer, or emergency service.</span>
                </p>
                <p className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#123C35] mt-2 shrink-0" />
                  <span>Report urgent suspected financial fraud through official banking channels promptly.</span>
                </p>
                <p className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#123C35] mt-2 shrink-0" />
                  <span>All inquiries are bound by mandatory service-specific terms and consent.</span>
                </p>
              </div>

              {/* Confidentiality card */}
              <div className="bg-white p-5 rounded-xl border border-[#E8EEEA] space-y-2 text-xs text-[#53615C]">
                <div className="flex items-center gap-1.5 font-semibold text-[#123C35]">
                  <Lock className="w-4 h-4 shrink-0" />
                  <span>Confidential Handling</span>
                </div>
                <p>
                  Your inquiry is treated with strict confidentiality. Details shared are used solely to assess which guidance or service fits your circumstance.
                </p>
              </div>
            </div>

            {/* Right form column */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-[#E8EEEA] shadow-xs">
              {formSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#E8F5EE] text-[#123C35] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#172B4D]">Inquiry Received</h3>
                  <p className="text-sm text-[#53615C] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. We have logged your request regarding <strong>{formData.category || 'General Inquiry'}</strong>. A CybAram advisor will review your message and reply to <strong>{formData.email}</strong> with structured guidance.
                  </p>
                  <div className="p-4 bg-[#F6F8F6] rounded-xl text-xs text-[#172B4D] max-w-md mx-auto text-left space-y-2 border border-[#E8EEEA]">
                    <p className="font-semibold text-[#123C35]">Next Steps & Practical Advice:</p>
                    <p>• If you suspect financial fraud, notify your bank immediately.</p>
                    <p>• Save unedited screenshots and transaction receipts in an orderly folder.</p>
                    <p>• Keep your devices and email secured with multi-factor authentication.</p>
                  </div>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setFormSubmitted(false);
                        setConsentChecked(false);
                        setFormData({
                          name: '',
                          email: '',
                          category: '',
                          subject: '',
                          message: '',
                          publicUrl: ''
                        });
                      }}
                      className="px-5 py-2.5 rounded-lg border border-[#E8EEEA] text-sm font-semibold text-[#123C35] hover:bg-[#F6F8F6] cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#172B4D] mb-1.5">
                      Name <span className="text-[#123C35]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Please enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-[#E8EEEA] text-sm text-[#172B4D] placeholder-[#53615C]/50 focus:outline-hidden focus:border-[#123C35] focus:ring-1 focus:ring-[#123C35] transition-all bg-[#F6F8F6]/40"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#172B4D] mb-1.5">
                      Email address <span className="text-[#123C35]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Please enter your email address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-[#E8EEEA] text-sm text-[#172B4D] placeholder-[#53615C]/50 focus:outline-hidden focus:border-[#123C35] focus:ring-1 focus:ring-[#123C35] transition-all bg-[#F6F8F6]/40"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#172B4D] mb-1.5">
                      Inquiry category <span className="text-[#123C35]">*</span>
                    </label>
                    <select
                      required
                      value={formData.category}
                      onChange={(e) => {
                        setFormData({ ...formData, category: e.target.value });
                        setConsentChecked(false); // Reset consent upon category change
                        setErrorMessage('');
                      }}
                      className="w-full px-4 py-3 rounded-lg border border-[#E8EEEA] text-sm text-[#172B4D] focus:outline-hidden focus:border-[#123C35] focus:ring-1 focus:ring-[#123C35] transition-all bg-[#F6F8F6]/40 cursor-pointer"
                    >
                      <option value="" disabled>Choose an option</option>
                      <option value="Cyber Victim Support">Cyber Victim Support</option>
                      <option value="Digital Exposure Assessment">Digital Exposure Assessment</option>
                      <option value="OSINT Research for Small Businesses">OSINT Research for Small Businesses</option>
                      <option value="Impersonation Monitoring">Impersonation Monitoring</option>
                      <option value="Mental Well-Being Support">Mental Well-Being Support</option>
                      <option value="Digital Safety Net">Digital Safety Net (Insurance & Risk Guidance)</option>
                      <option value="Opportunities and Collaboration">Opportunities and Collaboration</option>
                      <option value="General Enquiry">General Enquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#172B4D] mb-1.5">
                      Subject <span className="text-[#123C35]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Brief summary of the issue"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-[#E8EEEA] text-sm text-[#172B4D] placeholder-[#53615C]/50 focus:outline-hidden focus:border-[#123C35] focus:ring-1 focus:ring-[#123C35] transition-all bg-[#F6F8F6]/40"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#172B4D] mb-1.5">
                      Message <span className="text-[#123C35]">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Describe what happened or what you need guidance with..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-[#E8EEEA] text-sm text-[#172B4D] placeholder-[#53615C]/50 focus:outline-hidden focus:border-[#123C35] focus:ring-1 focus:ring-[#123C35] transition-all bg-[#F6F8F6]/40"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#172B4D] mb-1.5">
                      Relevant public URL (optional)
                    </label>
                    <input
                      type="url"
                      placeholder="https://... (suspected page or profile under review)"
                      value={formData.publicUrl}
                      onChange={(e) => setFormData({ ...formData, publicUrl: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-[#E8EEEA] text-sm text-[#172B4D] placeholder-[#53615C]/50 focus:outline-hidden focus:border-[#123C35] focus:ring-1 focus:ring-[#123C35] transition-all bg-[#F6F8F6]/40"
                    />
                  </div>

                  {/* Mandatory Dynamic Service Consent Box */}
                  <ServiceConsent
                    serviceSlug={selectedSlug}
                    isGeneralContact={!selectedSlug}
                    checked={consentChecked}
                    onChange={(checked) => {
                      setConsentChecked(checked);
                      if (checked) setErrorMessage('');
                    }}
                    onNavigate={onNavigate}
                    error={errorMessage}
                  />

                  <div>
                    <button
                      type="submit"
                      disabled={!isFormValid}
                      className={`w-full py-4 px-6 rounded-lg font-semibold transition-all shadow-xs flex items-center justify-center gap-2 ${
                        isFormValid
                          ? 'bg-[#123C35] text-white hover:bg-[#0e2f2a] active:scale-[0.99] cursor-pointer'
                          : 'bg-[#53615C]/20 text-[#53615C] cursor-not-allowed border border-[#E8EEEA]'
                      }`}
                    >
                      <span>Send Inquiry</span>
                      <ArrowRight className={`w-4 h-4 ${isFormValid ? 'text-[#DCECE3]' : 'text-[#53615C]'}`} />
                    </button>
                    {!isFormValid && (
                      <p className="text-xs text-center text-[#53615C]/80 mt-2">
                        * Please complete all required fields and check the mandatory consent box above to enable submission.
                      </p>
                    )}
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Official Contact Information Note */}
      <section className="py-16 bg-white border-t border-[#E8EEEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-semibold tracking-wider text-[#123C35] uppercase">
              COMMUNICATION POLICY
            </span>
            <h3 className="text-2xl font-bold text-[#172B4D]">
              Official channels, not personal contact numbers.
            </h3>
            <p className="text-sm sm:text-base text-[#53615C] leading-relaxed">
              Official email, physical mailing address, and verified communication routes are provided through authorized CybAram channels. CybAram staff and volunteers do not share personal mobile numbers or conduct private offline meetings. Please use verified official reporting channels for urgent financial or cyber incidents.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Bottom CTA */}
      <section className="py-20 bg-[#123C35] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Clear next steps begin with a conversation.
          </h2>
          <p className="text-lg text-[#DCECE3] max-w-xl mx-auto">
            Take a look at the support available, our ethical standards, and operational boundaries.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => onNavigate('/services')}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-base font-semibold bg-white text-[#123C35] hover:bg-[#F6F8F6] active:scale-[0.99] transition-all shadow-md cursor-pointer"
            >
              <span>Explore All 6 Services</span>
              <ArrowRight className="w-4 h-4 text-[#123C35]" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
