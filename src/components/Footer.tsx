import React, { useState } from 'react';
import { PageRoute } from '../types.ts';
import { OFFICIAL_SOCIAL_LINKS, SocialLinkConfig } from '../data/siteData.ts';
import { ArrowRight, Shield, CheckCircle, Info } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [socialNotice, setSocialNotice] = useState<string | null>(null);

  const handleNav = (path: PageRoute, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSocialClick = (link: SocialLinkConfig, e: React.MouseEvent) => {
    if (link.isPendingConfirmation || link.href === '#') {
      e.preventDefault();
      setSocialNotice(`Official ${link.name} profile URL is pending formal administrative confirmation by CybAram.`);
      setTimeout(() => setSocialNotice(null), 5000);
    }
  };

  const renderSocialIcon = (platform: SocialLinkConfig['platform']) => {
    switch (platform) {
      case 'instagram':
        return (
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        );
      case 'facebook':
        return (
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        );
      case 'youtube':
        return (
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        );
      case 'x':
        return (
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        );
    }
  };

  return (
    <footer className="bg-white border-t border-[#E8EEEA] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1: Brand & Logo */}
          <div className="space-y-4">
            <a
              href="/"
              onClick={(e) => handleNav('/', e)}
              className="inline-flex items-center gap-3 group"
            >
              <div className="w-12 h-12 rounded-lg overflow-hidden border border-[#E8EEEA] p-0.5 bg-white shadow-2xs">
                <img
                  src="/assets/images/cybaram-detect-protect-support.jpeg"
                  alt="CybAram — Detect. Protect. Support."
                  className="w-full h-full object-cover rounded-md"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-[#172B4D]">CybAram</span>
                <p className="text-xs font-medium text-[#123C35] mt-0.5">Detect. Protect. Support.</p>
              </div>
            </a>
            <p className="text-sm text-[#53615C] leading-relaxed">
              Safer People. Safer Digital Life. Practical, human-centered guidance for everyday digital risks, online scams, and digital exposure.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 text-xs text-[#53615C]">
                <Shield className="w-3.5 h-3.5 text-[#123C35]" />
                <span>cybaram.com · Independent initiative</span>
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-semibold tracking-wide text-[#172B4D] uppercase mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="/"
                  onClick={(e) => handleNav('/', e)}
                  className="text-[#53615C] hover:text-[#123C35] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  onClick={(e) => handleNav('/services', e)}
                  className="text-[#53615C] hover:text-[#123C35] transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/vilaiyaattu"
                  onClick={(e) => handleNav('/vilaiyaattu', e)}
                  className="text-[#53615C] hover:text-[#123C35] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>CybAram Vilaiyaattu</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                </a>
              </li>
              <li>
                <a
                  href="/opportunities"
                  onClick={(e) => handleNav('/opportunities', e)}
                  className="text-[#53615C] hover:text-[#123C35] transition-colors"
                >
                  Opportunities
                </a>
              </li>
              <li>
                <a
                  href="/about-us"
                  onClick={(e) => handleNav('/about-us', e)}
                  className="text-[#53615C] hover:text-[#123C35] transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact-us"
                  onClick={(e) => handleNav('/contact-us', e)}
                  className="text-[#53615C] hover:text-[#123C35] transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div>
            <h4 className="text-sm font-semibold tracking-wide text-[#172B4D] uppercase mb-4">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="/services/cyber-victim-support"
                  onClick={(e) => handleNav('/services/cyber-victim-support', e)}
                  className="text-[#53615C] hover:text-[#123C35] transition-colors"
                >
                  Cyber Victim Support
                </a>
              </li>
              <li>
                <a
                  href="/services/digital-exposure-assessment"
                  onClick={(e) => handleNav('/services/digital-exposure-assessment', e)}
                  className="text-[#53615C] hover:text-[#123C35] transition-colors"
                >
                  Digital Exposure Assessment
                </a>
              </li>
              <li>
                <a
                  href="/services/osint-research"
                  onClick={(e) => handleNav('/services/osint-research', e)}
                  className="text-[#53615C] hover:text-[#123C35] transition-colors"
                >
                  OSINT Research for Small Businesses
                </a>
              </li>
              <li>
                <a
                  href="/services/impersonation-monitoring"
                  onClick={(e) => handleNav('/services/impersonation-monitoring', e)}
                  className="text-[#53615C] hover:text-[#123C35] transition-colors"
                >
                  Impersonation Monitoring
                </a>
              </li>
              <li>
                <a
                  href="/services/mental-wellbeing-support"
                  onClick={(e) => handleNav('/services/mental-wellbeing-support', e)}
                  className="text-[#53615C] hover:text-[#123C35] transition-colors"
                >
                  Mental Well-Being Support
                </a>
              </li>
              <li>
                <a
                  href="/services/digital-safety-net"
                  onClick={(e) => handleNav('/services/digital-safety-net', e)}
                  className="text-[#53615C] hover:text-[#123C35] transition-colors"
                >
                  Digital Safety Net
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Stay Connected & Official Social Media Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wide text-[#172B4D] uppercase mb-1">
              Stay Connected
            </h4>
            <p className="text-sm text-[#53615C] leading-relaxed">
              A safer digital life starts with a conversation. Reach out to ask about guidance or appropriate support options.
            </p>
            <div>
              <a
                href="/contact-us"
                onClick={(e) => handleNav('/contact-us', e)}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#123C35] hover:underline"
              >
                <span>Contact CybAram</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Official Social Media Channels */}
            <div className="pt-2 border-t border-[#E8EEEA] space-y-2">
              <span className="text-xs font-semibold text-[#172B4D] block uppercase tracking-wider">
                Official Channels
              </span>
              <div className="flex items-center gap-2">
                {OFFICIAL_SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.platform}
                    href={link.href}
                    onClick={(e) => handleSocialClick(link, e)}
                    aria-label={link.ariaLabel}
                    title={link.ariaLabel}
                    target={link.isPendingConfirmation ? undefined : '_blank'}
                    rel={link.isPendingConfirmation ? undefined : 'noopener noreferrer'}
                    className="w-9 h-9 rounded-lg bg-[#F6F8F6] border border-[#E8EEEA] flex items-center justify-center text-[#53615C] hover:text-[#123C35] hover:bg-[#E8F5EE] hover:border-[#DCECE3] transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#123C35] cursor-pointer"
                  >
                    {renderSocialIcon(link.platform)}
                  </a>
                ))}
              </div>

              {socialNotice && (
                <div className="p-2.5 rounded-lg bg-[#E8F5EE] border border-[#DCECE3] text-xs text-[#123C35] flex items-start gap-2 animate-fade-in">
                  <Info className="w-3.5 h-3.5 text-[#123C35] shrink-0 mt-0.5" />
                  <span>{socialNotice}</span>
                </div>
              )}

              <p className="text-[11px] text-[#53615C]/80 italic">
                Official profile handles are configured; real URLs will be active upon public rollout.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom row: Copyright & Legal */}
        <div className="mt-12 pt-8 border-t border-[#E8EEEA] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#53615C]">
          <p>© 2026 CybAram. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a
              href="/privacy-policy"
              onClick={(e) => handleNav('/privacy-policy', e)}
              className="hover:text-[#123C35] transition-colors"
            >
              Privacy Policy
            </a>
            <span className="text-[#E8EEEA]" aria-hidden="true">·</span>
            <a
              href="/terms"
              onClick={(e) => handleNav('/terms', e)}
              className="hover:text-[#123C35] transition-colors"
            >
              Terms of Service
            </a>
            <span className="text-[#E8EEEA]" aria-hidden="true">·</span>
            <a
              href="/disclaimer"
              onClick={(e) => handleNav('/disclaimer', e)}
              className="hover:text-[#123C35] transition-colors"
            >
              Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
