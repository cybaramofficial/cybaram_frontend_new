import React from 'react';
import { PageRoute } from '../types.ts';
import { SERVICE_TERMS_MAP } from '../data/serviceTermsData.ts';
import { ShieldCheck, Info } from 'lucide-react';

interface ServiceConsentProps {
  serviceSlug?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  onNavigate: (path: PageRoute) => void;
  error?: string;
  isGeneralContact?: boolean;
}

export const ServiceConsent: React.FC<ServiceConsentProps> = ({
  serviceSlug,
  checked,
  onChange,
  onNavigate,
  error,
  isGeneralContact = false
}) => {
  const serviceTerms = serviceSlug ? SERVICE_TERMS_MAP[serviceSlug] : null;

  return (
    <div className="space-y-2.5">
      <div className={`p-4 rounded-xl border transition-colors ${
        error
          ? 'bg-red-50/70 border-red-200'
          : checked
          ? 'bg-[#E8F5EE]/60 border-[#DCECE3]'
          : 'bg-[#F6F8F6] border-[#E8EEEA]'
      }`}>
        <label className="flex items-start gap-3 cursor-pointer select-none">
          <input
            type="checkbox"
            required
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
            className="mt-0.5 w-4 h-4 rounded text-[#123C35] focus:ring-[#123C35] border-[#D0DDD6] accent-[#123C35] cursor-pointer shrink-0"
          />
          <div className="space-y-1 text-xs text-[#172B4D] leading-relaxed">
            {serviceTerms && !isGeneralContact ? (
              <>
                <p className="font-semibold text-[#123C35]">
                  Mandatory Service-Specific Consent
                </p>
                <p>
                  {serviceTerms.consentCheckboxText}
                </p>
                <p className="pt-1 text-[#53615C]">
                  Please review the complete{' '}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onNavigate(serviceTerms.termsRoute);
                    }}
                    className="font-semibold text-[#123C35] underline hover:text-[#0e2f2a] cursor-pointer inline-flex items-center gap-1"
                  >
                    <span>{serviceTerms.serviceTitle} Terms & Conditions</span>
                  </button>
                  {' '}before submitting.
                </p>
              </>
            ) : (
              <>
                <p className="font-semibold text-[#123C35]">
                  Acknowledgement of Scope & Privacy
                </p>
                <p>
                  I acknowledge that my inquiry will be handled in accordance with CybAram’s{' '}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onNavigate('/privacy-policy');
                    }}
                    className="font-semibold text-[#123C35] underline hover:text-[#0e2f2a] cursor-pointer"
                  >
                    Privacy Policy
                  </button>
                  {' '}and{' '}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onNavigate('/terms');
                    }}
                    className="font-semibold text-[#123C35] underline hover:text-[#0e2f2a] cursor-pointer"
                  >
                    Terms of Service
                  </button>. I understand that CybAram provides independent guidance, not emergency response or bank fund recovery.
                </p>
              </>
            )}
          </div>
        </label>
      </div>

      {error && (
        <p className="text-xs text-red-600 font-medium pl-1 flex items-center gap-1.5" role="alert">
          <span className="w-1.5 h-1.5 rounded-full bg-red-600" aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  );
};
