import React from 'react';
import { PageRoute } from '../types.ts';
import { ChevronRight, ShieldCheck } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  path?: PageRoute;
}

interface PageHeroBannerProps {
  imageSrc: string;
  imageAlt: string;
  kicker: string;
  title: React.ReactNode;
  subtitle: React.ReactNode;
  breadcrumbs?: BreadcrumbItem[];
  actions?: React.ReactNode;
  bottomBar?: React.ReactNode;
  onNavigate?: (path: PageRoute) => void;
}

export const PageHeroBanner: React.FC<PageHeroBannerProps> = ({
  imageSrc,
  imageAlt,
  kicker,
  title,
  subtitle,
  breadcrumbs,
  actions,
  bottomBar,
  onNavigate
}) => {
  return (
    <section className="bg-gradient-to-b from-[#F6F8F6] via-[#FBFDFB] to-white border-b border-[#E8EEEA] py-10 sm:py-14 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Optional Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-2 text-xs font-semibold text-[#53615C] mb-6 sm:mb-8" aria-label="Breadcrumb">
            {breadcrumbs.map((crumb, idx) => {
              const isLast = idx === breadcrumbs.length - 1;
              return (
                <React.Fragment key={idx}>
                  {idx > 0 && <ChevronRight className="w-3.5 h-3.5 text-[#53615C]/50 shrink-0" />}
                  {crumb.path && !isLast && onNavigate ? (
                    <button
                      type="button"
                      onClick={() => onNavigate(crumb.path!)}
                      className="hover:text-[#123C35] transition-colors cursor-pointer"
                    >
                      {crumb.label}
                    </button>
                  ) : (
                    <span className={isLast ? 'text-[#172B4D] font-bold' : ''}>
                      {crumb.label}
                    </span>
                  )}
                </React.Fragment>
              );
            })}
          </nav>
        )}

        {/* Expansive Editorial Hero Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Narrative Column */}
          <div className="lg:col-span-6 space-y-6">
            {/* Kicker / Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F5EE] border border-[#123C35]/15 text-[#123C35]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#123C35]" />
              <span className="text-[11px] font-bold tracking-wider uppercase">
                {kicker}
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#172B4D] leading-[1.12] [text-wrap:balance]">
              {title}
            </h1>

            {/* Subtitle / Narrative */}
            <div className="text-base sm:text-lg text-[#53615C] leading-relaxed font-normal max-w-2xl">
              {subtitle}
            </div>

            {/* Action CTAs */}
            {actions && (
              <div className="pt-2 flex flex-wrap items-center gap-4">
                {actions}
              </div>
            )}
          </div>

          {/* Right Expansive, Cinematic Hero Visual (Much larger, immersive, and elegant than a small box) */}
          <div className="lg:col-span-6 relative">
            {/* Subtle atmospheric ambient glow behind the photo */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-[#123C35]/15 via-[#FFF1C2]/20 to-[#123C35]/10 rounded-3xl filter blur-xl opacity-70 pointer-events-none" />

            <div className="relative rounded-3xl overflow-hidden shadow-xl border-2 border-[#172B4D]/10 bg-white h-72 sm:h-96 lg:h-[430px] w-full transition-all duration-300">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-full object-cover object-center transform hover:scale-[1.02] transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />

              {/* Gentle bottom gradient scrim for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />

              {/* Floating verified badge */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-white/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/60 shadow-md flex items-center gap-2 text-xs font-bold text-[#172B4D]">
                <ShieldCheck className="w-4 h-4 text-[#123C35] shrink-0" />
                <span className="truncate">CybAram · Human-Centred Digital Protection</span>
              </div>
            </div>
          </div>
        </div>

        {/* Optional bottom bar (e.g. trust indicators in clean row) */}
        {bottomBar && (
          <div className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-[#E8EEEA]">
            {bottomBar}
          </div>
        )}
      </div>
    </section>
  );
};
