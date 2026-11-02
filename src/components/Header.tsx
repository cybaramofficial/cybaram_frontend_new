import React, { useState } from 'react';
import { PageRoute } from '../types.ts';
import { Menu, X, ArrowRight, Shield } from 'lucide-react';
import { VILAIYAATTU_CONFIG, VILAIYAATTU_ENABLED } from '../data/vilaiyaattuConfig.ts';
import { assetUrl } from '../utils/assetUrl.ts';

interface HeaderProps {
  currentPath: PageRoute;
  onNavigate: (path: PageRoute) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { label: string; path: PageRoute; isSpecial?: boolean }[] = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    ...(VILAIYAATTU_ENABLED ? [{ label: VILAIYAATTU_CONFIG.sectionName, path: '/vilaiyaattu' as const, isSpecial: true }] : []),
    { label: 'Opportunities', path: '/opportunities' },
    { label: 'About Us', path: '/about-us' },
    { label: 'Contact Us', path: '/contact-us' }
  ];

  const handleLinkClick = (path: PageRoute, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#F6F8F6]/95 backdrop-blur-md border-b border-[#E8EEEA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Zone 1: Brand Wordmark with Official Logo */}
          <a
            href="/"
            onClick={(e) => handleLinkClick('/', e)}
            className="flex items-center gap-3.5 group cursor-pointer shrink-0"
          >
            <div className="w-11 h-11 rounded-lg overflow-hidden border border-[#E8EEEA] bg-white shadow-xs p-0.5 flex items-center justify-center">
              <img
                src={assetUrl('/assets/images/cybaram-detect-protect-support.jpeg')}
                alt="CybAram Logo"
                className="w-full h-full object-cover rounded-md"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-[#172B4D] group-hover:text-[#123C35] transition-colors leading-none">
                CybAram
              </span>
              <span className="text-xs font-medium text-[#53615C] mt-1 tracking-wide">
                Detect. Protect. Support.
              </span>
            </div>
          </a>

          <div className="flex items-center gap-5">
            {/* Desktop navigation */}
            <nav className="hidden lg:flex items-center gap-4 xl:gap-7 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive =
                currentPath === link.path ||
                (link.path === '/services' && currentPath.startsWith('/services'));

              return (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={(e) => handleLinkClick(link.path, e)}
                  className={`group inline-flex items-center gap-1.5 transition-colors whitespace-nowrap py-1 relative ${
                    isActive
                      ? 'text-[#123C35] font-semibold'
                      : 'text-[#53615C] hover:text-[#172B4D]'
                  }`}
                >
                  {link.isSpecial && (
                    <span
                      className={`inline-flex items-center justify-center w-5 h-5 rounded-full transition-all shrink-0 ${
                        isActive
                          ? 'bg-[#123C35] text-[#DCECE3] ring-2 ring-[#DCECE3]'
                          : 'bg-[#E8F5EE] text-[#123C35] group-hover:bg-[#123C35] group-hover:text-white'
                      }`}
                      aria-hidden="true"
                    >
                      <svg className="w-2.5 h-2.5 fill-current ml-0.5" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  )}
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#123C35] rounded-full" />
                  )}
                </a>
              );
            })}
            </nav>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={(e) => handleLinkClick('/contact-us', e)}
                className="hidden lg:inline-flex items-center gap-2 px-4.5 py-2.5 rounded-lg text-sm font-medium bg-[#123C35] text-white hover:bg-[#0e2f2a] active:scale-[0.99] transition-all shadow-xs cursor-pointer whitespace-nowrap"
              >
                <span>Get Help</span>
                <ArrowRight className="w-4 h-4 text-[#DCECE3]" />
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2.5 rounded-lg text-[#172B4D] hover:bg-[#E8EEEA] transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#123C35]"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#E8EEEA] px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive =
                currentPath === link.path ||
                (link.path === '/services' && currentPath.startsWith('/services'));

              return (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={(e) => handleLinkClick(link.path, e)}
                  className={`flex items-center gap-2.5 px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-[#E8F5EE] text-[#123C35] font-semibold'
                      : 'text-[#53615C] hover:bg-[#F6F8F6] hover:text-[#172B4D]'
                  }`}
                >
                  {link.isSpecial && (
                    <span
                      className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#123C35] text-[#DCECE3] shrink-0"
                      aria-hidden="true"
                    >
                      <svg className="w-3 h-3 fill-current ml-0.5" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  )}
                  <span>{link.label}</span>
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-[#E8EEEA]">
            <button
              onClick={(e) => handleLinkClick('/contact-us', e)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-base font-medium bg-[#123C35] text-white hover:bg-[#0e2f2a] transition-colors shadow-xs"
            >
              <Shield className="w-4 h-4 text-[#DCECE3]" />
              <span>Get Support Now</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
