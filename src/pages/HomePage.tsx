import React from 'react';
import { PageRoute } from '../types.ts';
import { HOME_FAQS } from '../data/siteData.ts';
import { FaqAccordion } from '../components/FaqAccordion.tsx';
import { PageHeroBanner } from '../components/PageHeroBanner.tsx';
import {
  Shield,
  ShieldAlert,
  Eye,
  Heart,
  Lock,
  Building2,
  Fingerprint,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  HelpCircle,
  Info,
  Play,
  Smartphone,
  FileSearch
} from 'lucide-react';
import { VILAIYAATTU_CONFIG } from '../data/vilaiyaattuConfig.ts';

interface HomePageProps {
  onNavigate: (path: PageRoute) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-0">
      {/* 1. Cinematic Landscape Hero Banner */}
      <PageHeroBanner
        imageSrc="/src/assets/images/hero_cinematic_home_1792753254587.jpg"
        imageAlt="Indian family and professionals using digital devices with confidence and calm"
        kicker="DIGITAL SAFETY FOR EVERYONE"
        title="You’re not alone in cyberspace."
        subtitle="Practical, human-centred guidance for online scams, personal privacy, digital risk awareness, and compassionate listening—supporting individuals, families, and small businesses across India."
        onNavigate={onNavigate}
        actions={
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => onNavigate('/contact-us')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm sm:text-base font-semibold bg-[#123C35] text-white hover:bg-[#0e2f2a] active:scale-[0.99] transition-all shadow-xs cursor-pointer"
            >
              <span>Get Support</span>
              <ArrowRight className="w-4 h-4 text-[#DCECE3]" />
            </button>

            <button
              type="button"
              onClick={() => onNavigate('/services')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm sm:text-base font-semibold bg-white text-[#123C35] border border-[#DCECE3] hover:bg-[#E8F5EE] active:scale-[0.99] transition-all cursor-pointer"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-4 h-4 text-[#123C35]" />
            </button>
          </div>
        }
        bottomBar={
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs sm:text-sm font-medium text-[#53615C]">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#123C35] shrink-0" />
              <span>Confidential Handling</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#123C35] shrink-0" />
              <span>Practical Advice</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-[#123C35] shrink-0" />
              <span>People First Support</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#123C35] shrink-0" />
              <span>Mandatory Service Consent</span>
            </div>
          </div>
        }
      />

      {/* 2. Who CybAram Helps Section */}
      <section className="py-16 bg-white border-t border-[#E8EEEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-semibold tracking-wider text-[#123C35] uppercase">
              WHO WE SERVE
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-[#172B4D]">
              Clear support designed for real people
            </h2>
            <p className="text-base text-[#53615C]">
              We tailor our practical guidance to the specific challenges faced across our community.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#F6F8F6] p-6 rounded-2xl border border-[#E8EEEA] space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#E8F5EE] text-[#123C35] flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#172B4D]">Individuals & Families</h3>
              <p className="text-xs sm:text-sm text-[#53615C] leading-relaxed">
                Everyday internet users, seniors, and parents seeking to protect their personal privacy and family accounts from deceptive links.
              </p>
            </div>

            <div className="bg-[#F6F8F6] p-6 rounded-2xl border border-[#E8EEEA] space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#E8F5EE] text-[#123C35] flex items-center justify-center">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#172B4D]">Scam Victims</h3>
              <p className="text-xs sm:text-sm text-[#53615C] leading-relaxed">
                People who recently lost funds or shared information in deceptive online frauds, needing immediate calm guidance and evidence preservation.
              </p>
            </div>

            <div className="bg-[#F6F8F6] p-6 rounded-2xl border border-[#E8EEEA] space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#E8F5EE] text-[#123C35] flex items-center justify-center">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#172B4D]">Small Businesses</h3>
              <p className="text-xs sm:text-sm text-[#53615C] leading-relaxed">
                Eligible small enterprises, local shops, and sole proprietors needing public-source risk assessments, supplier checks, or domain review.
              </p>
            </div>

            <div className="bg-[#F6F8F6] p-6 rounded-2xl border border-[#E8EEEA] space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#E8F5EE] text-[#123C35] flex items-center justify-center">
                <Fingerprint className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#172B4D]">Creators & Public Figures</h3>
              <p className="text-xs sm:text-sm text-[#53615C] leading-relaxed">
                Writers, digital creators, and educators dealing with fraudulent clone profiles, impersonation, or compromised public reputation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2B. OUR IMPACT STATISTICS SECTION */}
      <section className="py-16 bg-[#F6F8F6] border-t border-[#E8EEEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold tracking-wider text-[#123C35] uppercase bg-[#E8F5EE] px-3 py-1 rounded-full border border-[#123C35]/15 inline-block">
              OUR MEASURABLE REACH
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#172B4D]">
              Creating a safer digital world, together.
            </h2>
            <p className="text-base sm:text-lg text-[#53615C] leading-relaxed">
              Through awareness, guidance and research, we help individuals and organisations better understand online risks.
            </p>
          </div>

          {/* Three Clean Statistic Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Awareness Reach */}
            <div className="bg-white p-7 rounded-3xl border-2 border-[#E8EEEA] shadow-xs hover:border-[#123C35]/30 transition-colors space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#E8F5EE] text-[#123C35] flex items-center justify-center">
                <Eye className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div className="space-y-1">
                <div className="text-4xl font-black text-[#123C35] font-mono tracking-tight">
                  125,000+
                </div>
                <h3 className="text-base font-bold text-[#172B4D]">
                  Content views across social platforms
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#53615C] leading-relaxed font-normal">
                Total verified views across community safety reels, visual scam breakdowns, and public awareness advisories on supported platforms.
              </p>
            </div>

            {/* Card 2: People Supported */}
            <div className="bg-white p-7 rounded-3xl border-2 border-[#E8EEEA] shadow-xs hover:border-[#123C35]/30 transition-colors space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#FFF1C2] text-[#704214] flex items-center justify-center">
                <Heart className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div className="space-y-1">
                <div className="text-4xl font-black text-[#172B4D] font-mono tracking-tight">
                  480+
                </div>
                <h3 className="text-base font-bold text-[#172B4D]">
                  Individuals guided and supported
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#53615C] leading-relaxed font-normal">
                Distinct people who received dedicated, confidential cyber-incident guidance, digital privacy reviews, or compassionate peer support.
              </p>
            </div>

            {/* Card 3: Digital Ecosystem Insights */}
            <div className="bg-white p-7 rounded-3xl border-2 border-[#E8EEEA] shadow-xs hover:border-[#123C35]/30 transition-colors space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#EBF3FB] text-[#2E5C8A] flex items-center justify-center">
                <FileSearch className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div className="space-y-1">
                <div className="text-4xl font-black text-[#172B4D] font-mono tracking-tight">
                  95+
                </div>
                <h3 className="text-base font-bold text-[#172B4D]">
                  Research assessments & outputs
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#53615C] leading-relaxed font-normal">
                Documented public-source investigations into deceptive domains, fraudulent mobile APKs, impersonation campaigns, and emerging scam patterns.
              </p>
            </div>
          </div>

          {/* Reporting Period Note */}
          <div className="text-center">
            <span className="text-[11px] text-[#53615C] bg-white px-3.5 py-1.5 rounded-full border border-[#E8EEEA] inline-block font-medium">
              * Reporting Period: FY 2024–2026. Data aggregated from verified CybAram community channels and voluntary advisory logs.
            </span>
          </div>

          {/* 2C. OUR RESEARCH AREAS (Beneath Impact Statistics) */}
          <div className="pt-8 border-t border-[#E8EEEA] space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold tracking-wider text-[#123C35] uppercase">
                OUR RESEARCH AREAS
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#172B4D] tracking-tight">
                Understanding online risks. Building a safer digital world.
              </h3>
              <p className="text-sm text-[#53615C] leading-relaxed">
                We research online threats such as impersonation campaigns, suspicious websites and applications, and emerging scam patterns to support safer digital experiences for individuals and organisations.
              </p>
            </div>

            {/* 4 Compact Research Focus Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-5 rounded-2xl bg-white border border-[#E8EEEA] shadow-2xs space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#E8F5EE] text-[#123C35] flex items-center justify-center text-sm font-bold">
                  🌐
                </div>
                <h4 className="text-sm font-bold text-[#172B4D]">
                  Website & Domain Analysis
                </h4>
                <p className="text-xs text-[#53615C] leading-relaxed">
                  Reviewing suspicious websites, lookalike domains and deceptive pages.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#E8EEEA] shadow-2xs space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#FFF1C2] text-[#704214] flex items-center justify-center text-sm font-bold">
                  📱
                </div>
                <h4 className="text-sm font-bold text-[#172B4D]">
                  App & Scam Research
                </h4>
                <p className="text-xs text-[#53615C] leading-relaxed">
                  Studying suspicious applications and online scam patterns.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#E8EEEA] shadow-2xs space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#EBF3FB] text-[#2E5C8A] flex items-center justify-center text-sm font-bold">
                  🎭
                </div>
                <h4 className="text-sm font-bold text-[#172B4D]">
                  Impersonation & Misuse
                </h4>
                <p className="text-xs text-[#53615C] leading-relaxed">
                  Examining suspected misuse of identities and organisational presence.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#E8EEEA] shadow-2xs space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#F3E8FF] text-[#6B21A8] flex items-center justify-center text-sm font-bold">
                  📋
                </div>
                <h4 className="text-sm font-bold text-[#172B4D]">
                  Evidence & Reporting
                </h4>
                <p className="text-xs text-[#53615C] leading-relaxed">
                  Documenting relevant findings and identifying appropriate reporting routes.
                </p>
              </div>
            </div>

            {/* Research CTA Button & Disclaimer */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => onNavigate('/services/osint-research')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold bg-[#123C35] text-white hover:bg-[#0e2f2a] active:scale-[0.99] transition-all cursor-pointer shadow-xs"
              >
                <span>Explore Our Research</span>
                <ArrowRight className="w-4 h-4 text-[#DCECE3]" />
              </button>
            </div>

            <p className="text-[11px] text-center text-[#53615C] max-w-xl mx-auto">
              * Research examples and focus areas do not imply endorsement, a commercial relationship, or a confirmed incident involving any particular organisation.
            </p>
          </div>
        </div>
      </section>

      {/* 3. New Digital Safety Net Feature Teaser Section */}
      <section className="py-16 bg-[#E8F5EE] border-t border-[#DCECE3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2">
                <span className="text-xs font-semibold tracking-wider text-[#123C35] uppercase">
                  NEW SERVICE · DIGITAL RISK PROTECTION
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#172B4D]">
                Introducing Digital Safety Net: Cyber Risk & Insurance Guidance
              </h2>
              <p className="text-base sm:text-lg text-[#53615C] leading-relaxed">
                Cyber risks are rising, but insurance jargon and fine print can be bewildering. Digital Safety Net provides independent, objective risk evaluations and policy concept explanations—helping individuals, families, and small business owners understand what cyber insurance actually covers before talking to licensed brokers.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="bg-white p-4 rounded-xl border border-[#DCECE3] space-y-1">
                  <span className="text-xs font-bold text-[#123C35]">01. Risk Evaluation</span>
                  <p className="text-xs text-[#53615C]">Clear review of extortion, fraud, and identity exposure surfaces.</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-[#DCECE3] space-y-1">
                  <span className="text-xs font-bold text-[#123C35]">02. Exclusions Decryption</span>
                  <p className="text-xs text-[#53615C]">Plain-language translation of complex insurance clauses and traps.</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-[#DCECE3] space-y-1">
                  <span className="text-xs font-bold text-[#123C35]">03. Underwriting Readiness</span>
                  <p className="text-xs text-[#53615C]">Security hygiene checklists insurers require prior to policy approval.</p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate('/services/digital-safety-net')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-[#123C35] text-white hover:bg-[#0e2f2a] active:scale-[0.99] transition-all cursor-pointer shadow-xs"
                >
                  <span>Explore Digital Safety Net</span>
                  <ArrowRight className="w-4 h-4 text-[#DCECE3]" />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('/services/digital-safety-net/terms')}
                  className="text-xs font-semibold text-[#123C35] underline hover:text-[#0e2f2a] cursor-pointer"
                >
                  Review Service Terms & Disclaimers →
                </button>
              </div>

              <p className="text-[11px] text-[#53615C] leading-normal pt-1">
                * Transparency Notice: CybAram is NOT an insurance company, broker, or agent. We provide independent educational guidance only and do not sell or underwrite insurance policies.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#DCECE3] bg-white aspect-4/3">
                <img
                  src="/src/assets/images/service_digital_safety_net_1792753239595.jpg"
                  alt="Indian small-business founder and family reviewing a structured digital protection and cyber risk checklist on a tablet"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Services Section with All 6 Cards */}
      <section className="py-20 bg-[#F6F8F6] border-t border-[#E8EEEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-3">
              <span className="text-xs font-semibold tracking-wider text-[#123C35] uppercase">
                OUR SERVICES
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#172B4D]">
                How we can help you
              </h2>
              <p className="text-base sm:text-lg text-[#53615C] max-w-2xl">
                From scam support to cyber insurance guidance, we offer practical, understandable support grounded in ethics.
              </p>
            </div>
            <div>
              <button
                type="button"
                onClick={() => onNavigate('/services')}
                className="text-sm font-semibold text-[#123C35] hover:underline inline-flex items-center gap-1 cursor-pointer"
              >
                <span>View all 6 services</span>
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>

          {/* 6 Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1: Cyber Victim Support */}
            <div
              onClick={() => onNavigate('/services/cyber-victim-support')}
              className="group bg-white rounded-2xl border border-[#E8EEEA] hover:border-[#123C35]/40 hover:shadow-md transition-all cursor-pointer overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-16/10 overflow-hidden bg-[#F6F8F6]">
                  <img
                    src="/assets/images/cyber_support_man_1792744888948.jpg"
                    alt="An Indian man sitting at a desk calmly documenting incident details in a notebook beside his phone"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-md text-xs font-semibold text-[#123C35] flex items-center gap-1.5 shadow-2xs">
                    <Shield className="w-3.5 h-3.5" />
                    <span>Scam Support</span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-[#172B4D] group-hover:text-[#123C35] transition-colors">
                    Cyber Victim Support
                  </h3>
                  <p className="text-sm text-[#53615C] leading-relaxed">
                    Calm, practical guidance after scams, unauthorized transactions, or deceptive payment demands.
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 flex items-center gap-2 text-sm font-semibold text-[#123C35]">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 2: Digital Exposure Assessment */}
            <div
              onClick={() => onNavigate('/services/digital-exposure-assessment')}
              className="group bg-white rounded-2xl border border-[#E8EEEA] hover:border-[#123C35]/40 hover:shadow-md transition-all cursor-pointer overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-16/10 overflow-hidden bg-[#F6F8F6]">
                  <img
                    src="/assets/images/digital_privacy_review_1792744888804.jpg"
                    alt="An Indian woman reviewing account privacy settings and data visibility on a laptop"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-md text-xs font-semibold text-[#123C35] flex items-center gap-1.5 shadow-2xs">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Privacy Footprint</span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-[#172B4D] group-hover:text-[#123C35] transition-colors">
                    Digital Exposure Assessment
                  </h3>
                  <p className="text-sm text-[#53615C] leading-relaxed">
                    Understand your public digital footprint across search engines and platforms to improve personal privacy.
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 flex items-center gap-2 text-sm font-semibold text-[#123C35]">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 3: OSINT Research for Small Businesses */}
            <div
              onClick={() => onNavigate('/services/osint-research')}
              className="group bg-white rounded-2xl border border-[#E8EEEA] hover:border-[#123C35]/40 hover:shadow-md transition-all cursor-pointer overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-16/10 overflow-hidden bg-[#F6F8F6]">
                  <img
                    src="/assets/images/osint_small_business_1792741337713.jpg"
                    alt="Indian small business owner reviewing public enterprise records"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-md text-xs font-semibold text-[#123C35] flex items-center gap-1.5 shadow-2xs">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>Business Research</span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-[#172B4D] group-hover:text-[#123C35] transition-colors">
                    OSINT Research for Small Businesses
                  </h3>
                  <p className="text-sm text-[#53615C] leading-relaxed">
                    Responsible public-source research for eligible business needs, domain spoofing, and brand risk evaluation.
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 flex items-center gap-2 text-sm font-semibold text-[#123C35]">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 4: Impersonation Monitoring */}
            <div
              onClick={() => onNavigate('/services/impersonation-monitoring')}
              className="group bg-white rounded-2xl border border-[#E8EEEA] hover:border-[#123C35]/40 hover:shadow-md transition-all cursor-pointer overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-16/10 overflow-hidden bg-[#F6F8F6]">
                  <img
                    src="/assets/images/impersonation_check_1792741338258.jpg"
                    alt="Indian professional comparing tablet profiles to detect impersonator"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-md text-xs font-semibold text-[#123C35] flex items-center gap-1.5 shadow-2xs">
                    <Fingerprint className="w-3.5 h-3.5" />
                    <span>Identity Protection</span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-[#172B4D] group-hover:text-[#123C35] transition-colors">
                    Impersonation Monitoring
                  </h3>
                  <p className="text-sm text-[#53615C] leading-relaxed">
                    Guidance on suspected fake profiles and platform reporting pathways for creators, leaders, and public figures.
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 flex items-center gap-2 text-sm font-semibold text-[#123C35]">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 5: Mental Well-Being Support */}
            <div
              onClick={() => onNavigate('/services/mental-wellbeing-support')}
              className="group bg-white rounded-2xl border border-[#E8EEEA] hover:border-[#123C35]/40 hover:shadow-md transition-all cursor-pointer overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-16/10 overflow-hidden bg-[#F6F8F6]">
                  <img
                    src="/assets/images/wellbeing_listening_1792744888958.jpg"
                    alt="Two Indian adults having a warm, calm, non-clinical supportive conversation over tea in a serene room"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-md text-xs font-semibold text-[#123C35] flex items-center gap-1.5 shadow-2xs">
                    <Heart className="w-3.5 h-3.5" />
                    <span>Empathetic Listening</span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-[#172B4D] group-hover:text-[#123C35] transition-colors">
                    Mental Well-Being Support
                  </h3>
                  <p className="text-sm text-[#53615C] leading-relaxed">
                    A warm, confidential, non-clinical space to be heard when you feel lonely, overwhelmed, or carry worries you cannot share.
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 flex items-center gap-2 text-sm font-semibold text-[#123C35]">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 6: Digital Safety Net (NEW!) */}
            <div
              onClick={() => onNavigate('/services/digital-safety-net')}
              className="group bg-white rounded-2xl border border-[#E8EEEA] hover:border-[#123C35]/40 hover:shadow-md transition-all cursor-pointer overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-16/10 overflow-hidden bg-[#F6F8F6]">
                  <img
                    src="/src/assets/images/service_digital_safety_net_1792753239595.jpg"
                    alt="Indian small business founder and family reviewing a digital protection checklist"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-md text-xs font-semibold text-[#123C35] flex items-center gap-1.5 shadow-2xs">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Risk & Insurance</span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-[#172B4D] group-hover:text-[#123C35] transition-colors">
                    Digital Safety Net
                  </h3>
                  <p className="text-sm text-[#53615C] leading-relaxed">
                    Independent cyber-risk evaluation and cyber insurance guidance before discussing policies with licensed brokers.
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 flex items-center gap-2 text-sm font-semibold text-[#123C35]">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Interactive Awareness Experience: CybAram Vilaiyaattu */}
      <section className="py-20 bg-[#172B4D] text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/hero_cinematic_vilaiyaattu_1792756475424.jpg"
            alt="CybAram Vilaiyaattu Interactive Awareness Experience"
            className="w-full h-full object-cover object-center scale-[1.01] opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#172B4D] via-[#172B4D]/90 to-[#123C35]/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#123C35] border border-[#DCECE3]/30 text-xs font-semibold uppercase tracking-wider text-[#DCECE3]">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Interactive Learning Experience</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                {VILAIYAATTU_CONFIG.heroHeadline}
              </h2>

              <p className="text-base sm:text-lg text-[#F6F8F6]/85 leading-relaxed max-w-2xl">
                Cyber resilience is not memorized through multiple-choice quiz questions. Step into simulated high-pressure digital encounters, inspect incoming messages, experience the technical consequences of clicking, and master practical cyber self-defense.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate('/vilaiyaattu')}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-bold bg-[#123C35] text-white hover:bg-[#0e2f2a] transition-all shadow-md cursor-pointer border border-[#DCECE3]/30"
                >
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#DCECE3] text-[#123C35]">
                    <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                  </span>
                  <span>Enter {VILAIYAATTU_CONFIG.sectionName}</span>
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('/vilaiyaattu')}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold bg-white/10 text-white hover:bg-white/20 transition-all backdrop-blur-sm cursor-pointer border border-white/20"
                >
                  <span>Explore Scenarios</span>
                  <ArrowRight className="w-4 h-4 text-[#DCECE3]" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              <div
                onClick={() => onNavigate('/vilaiyaattu')}
                className="p-5 rounded-2xl bg-white/10 hover:bg-white/15 transition-all border border-white/15 backdrop-blur-md cursor-pointer space-y-2 group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-lg bg-[#123C35] text-[#DCECE3] flex items-center justify-center">
                    <Smartphone className="w-4.5 h-4.5" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-300">
                    Reaction Simulation
                  </span>
                </div>
                <h4 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                  1. Click or Skip: Everyday Reflex
                </h4>
                <p className="text-xs text-[#DCECE3]/80 leading-relaxed">
                  Real-time mobile notifications with genuine consequence simulations: rogue APK downloads, fake OTP traps, and fee extortion.
                </p>
              </div>

              <div
                onClick={() => onNavigate('/vilaiyaattu')}
                className="p-5 rounded-2xl bg-white/10 hover:bg-white/15 transition-all border border-white/15 backdrop-blur-md cursor-pointer space-y-2 group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-lg bg-[#123C35] text-[#DCECE3] flex items-center justify-center">
                    <FileSearch className="w-4.5 h-4.5" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-300">
                    Digital Forensics Desk
                  </span>
                </div>
                <h4 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                  2. Spot the Scam: Forensic Analysis
                </h4>
                <p className="text-xs text-[#DCECE3]/80 leading-relaxed">
                  Inspect email headers, reveal true hyperlink server destinations on hover, catch double extensions (.pdf.exe), and issue your verdict.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. A Simple Process Section */}
      <section className="py-20 bg-white border-t border-[#E8EEEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-semibold tracking-wider text-[#123C35] uppercase">
              ONE STEP AT A TIME
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#172B4D]">
              A simple process to get started
            </h2>
            <p className="text-base sm:text-lg text-[#53615C]">
              Getting support from CybAram is simple, clear, and confidential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F6F8F6] p-8 rounded-2xl border border-[#E8EEEA] shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#E8F5EE] text-[#123C35] font-bold text-lg flex items-center justify-center">
                01
              </div>
              <h3 className="text-xl font-bold text-[#172B4D]">Tell us your concern</h3>
              <p className="text-sm text-[#53615C] leading-relaxed">
                Share what happened or what you’re worried about through our secure, confidential inquiry form with mandatory service consent.
              </p>
            </div>

            <div className="bg-[#F6F8F6] p-8 rounded-2xl border border-[#E8EEEA] shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#E8F5EE] text-[#123C35] font-bold text-lg flex items-center justify-center">
                02
              </div>
              <h3 className="text-xl font-bold text-[#172B4D]">We understand and guide</h3>
              <p className="text-sm text-[#53615C] leading-relaxed">
                We review your situation, outline honest scope boundaries, and explain practical next-step options.
              </p>
            </div>

            <div className="bg-[#F6F8F6] p-8 rounded-2xl border border-[#E8EEEA] shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#E8F5EE] text-[#123C35] font-bold text-lg flex items-center justify-center">
                03
              </div>
              <h3 className="text-xl font-bold text-[#172B4D]">Take action with support</h3>
              <p className="text-sm text-[#53615C] leading-relaxed">
                Move forward with structured evidence, reporting clarity, privacy adjustments, or empathetic peer conversations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQs */}
      <FaqAccordion
        items={HOME_FAQS}
        title="Frequently asked questions"
        subtitle="Honest answers to common questions about how CybAram operates."
        contactPrompt={{
          text: 'Still have a question? Contact us',
          actionText: 'Still have a question? Contact us',
          onAction: () => onNavigate('/contact-us')
        }}
      />

      {/* 7. Bottom CTA Banner */}
      <section className="py-20 bg-[#123C35] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            You don't have to navigate digital worries alone.
          </h2>
          <p className="text-lg text-[#DCECE3] max-w-xl mx-auto">
            Reach out with your question. We’ll help you understand your options without judgment.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => onNavigate('/contact-us')}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-base font-semibold bg-white text-[#123C35] hover:bg-[#F6F8F6] active:scale-[0.99] transition-all shadow-md cursor-pointer"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4 text-[#123C35]" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
