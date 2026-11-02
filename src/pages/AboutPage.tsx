import React from 'react';
import { PageRoute } from '../types.ts';
import { PageHeroBanner } from '../components/PageHeroBanner.tsx';
import { assetUrl } from '../utils/assetUrl.ts';
import {
  ChevronRight,
  ArrowRight,
  Shield,
  Heart,
  Search,
  Users,
  Lock,
  Eye,
  CheckCircle2,
  Sparkles,
  Compass,
  Scale,
  Smile,
  ShieldCheck
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (path: PageRoute) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-0">
      {/* ========================================================= */}
      {/* SECTION A — Cover / Hero with Wide Landscape Banner       */}
      {/* ========================================================= */}
      <PageHeroBanner
        imageSrc="/src/assets/images/hero_cinematic_about_1792753239867.jpg"
        imageAlt="Thoughtful Indian professionals and mentors discussing ethics, technology and community values"
        kicker="ABOUT CYBARAM · PURPOSE & ETHICS"
        title="Doing good in cyberspace."
        subtitle="CybAram brings digital safety, responsible research, and human-centered support together with a simple intention: to do good in cyberspace. Grounded in empathy, ethical principles, and respect for human dignity."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'About Us' }
        ]}
        onNavigate={onNavigate}
        actions={
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => onNavigate('/services')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm sm:text-base font-semibold bg-[#123C35] text-white hover:bg-[#0e2f2a] active:scale-[0.99] transition-all shadow-xs cursor-pointer"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-4 h-4 text-[#DCECE3]" />
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/contact-us')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm sm:text-base font-semibold bg-white text-[#123C35] border border-[#DCECE3] hover:bg-[#E8F5EE] active:scale-[0.99] transition-all cursor-pointer"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4 text-[#123C35]" />
            </button>
          </div>
        }
      />

      {/* ========================================================= */}
      {/* SECTION B — Signature Brand Story: The Meaning of CybAram */}
      {/* ========================================================= */}
      <section className="py-20 lg:py-28 bg-[#123C35] text-white relative overflow-hidden">
        {/* Subtle decorative background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#DCECE3]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
          {/* Section Header */}
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold tracking-wider text-[#DCECE3] uppercase">
              SIGNATURE BRAND IDENTITY
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              The Meaning of CybAram
            </h2>
            <p className="text-lg sm:text-xl text-[#DCECE3] leading-relaxed">
              CybAram was coined by uniting two profound concepts: the boundless interconnected world of cyberspace, and the ancient ethical compass of Tamil philosophy.
            </p>
          </div>

          {/* Central Typographic Showcase & Meaning Composition */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 lg:p-16 backdrop-blur-xs space-y-12">
            {/* The Brand Name Display */}
            <div className="text-center space-y-3 pb-8 border-b border-white/10">
              <div className="inline-flex items-baseline justify-center gap-1 font-bold text-4xl sm:text-6xl lg:text-7xl tracking-tight">
                <span className="text-[#DCECE3] hover:text-white transition-colors">CYB</span>
                <span className="text-white font-extrabold underline decoration-[#DCECE3]/40 underline-offset-8">ARAM</span>
              </div>
              <p className="text-sm sm:text-base text-[#DCECE3]/80 font-mono tracking-wider pt-2">
                CYBERSPACE + அறம் (ARAM)
              </p>
              <div className="pt-2 text-xl sm:text-2xl font-medium text-white italic">
                “Doing good in cyberspace.”
              </div>
            </div>

            {/* Two Balanced Columns on Desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-start">
              {/* Column 1: CYB */}
              <div className="space-y-4 pr-0 md:pr-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#DCECE3]">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#DCECE3] uppercase tracking-wider block">Part One</span>
                    <h3 className="text-2xl font-bold text-white tracking-wide">CYB · Cyberspace</h3>
                  </div>
                </div>
                <p className="text-base text-[#DCECE3] leading-relaxed">
                  Inspired by <strong>cyberspace</strong> — the modern, connected digital environment in which people communicate, work, learn, transact, and live a significant part of their daily lives.
                </p>
                <p className="text-sm text-white/70 leading-relaxed">
                  Cyberspace offers unprecedented opportunities for education and commerce, but it also presents complex, rapidly evolving risks that ordinary individuals often struggle to navigate alone.
                </p>
              </div>

              {/* Column 2: ARAM */}
              <div className="space-y-4 pl-0 md:pl-4 border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#DCECE3]">
                    <Scale className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#DCECE3] uppercase tracking-wider block">Part Two</span>
                    <h3 className="text-2xl font-bold text-white tracking-wide">
                      ARAM · <span className="font-serif">அறம்</span>
                    </h3>
                  </div>
                </div>
                <p className="text-base text-[#DCECE3] leading-relaxed">
                  Derived from the classical Tamil word <strong>“அறம்” (aram)</strong> — deeply rooted in virtue, righteousness, ethical conduct, moral duty, and the fundamental imperative of doing what is good and right.
                </p>
                <p className="text-sm text-white/70 leading-relaxed">
                  In classical Tamil literature like the <em>Tirukkural</em>, Aram is not merely an abstract moral code, but an active, lived commitment to protecting others, acting justly, and upholding integrity in everyday actions.
                </p>
              </div>
            </div>

            {/* Cultural Heritage Editorial Visual & Honest Clarification */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8 border-t border-white/10">
              <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-white/10 aspect-4/3 sm:aspect-16/10">
                <img
                  src={assetUrl('/assets/images/about_heritage_aram_1792746834801.jpg')}
                  alt="Classical Tamil stone inscription embodying Aram beside a brass lamp and modern research notebook"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#DCECE3] uppercase tracking-wider">
                  <Sparkles className="w-4 h-4 text-[#DCECE3]" />
                  <span>A Digital World Guided by Good Intentions</span>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-white">
                  Ancient moral wisdom applied to modern online challenges.
                </h4>
                <p className="text-sm sm:text-base text-[#DCECE3] leading-relaxed">
                  We do not claim that “CybAram” is an established ancient Tamil word. Rather, it is our deliberate, original brand identity: an intentional synthesis that holds cyberspace to the high moral standard of <em>Aram</em>.
                </p>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed border-l-2 border-[#DCECE3]/40 pl-4">
                  For us, doing good in cyberspace means rejecting opportunistic scare tactics, providing honest guidance without false guarantees, respecting personal privacy unconditionally, and treating every person with genuine empathy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION C — The Motivation Behind CybAram                 */}
      {/* ========================================================= */}
      <section className="py-20 lg:py-24 bg-white border-t border-[#E8EEEA]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Section Header */}
          <div className="space-y-4">
            <span className="text-xs font-semibold tracking-wider text-[#123C35] uppercase">
              THE MOTIVATION · FOUNDER-LED REFLECTION
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#172B4D] tracking-tight">
              Why We Are Building CybAram
            </h2>
            <p className="text-lg text-[#53615C] leading-relaxed">
              CybAram grew from professional experience in cybersecurity-related research, threat intelligence, and open-source intelligence, together with a simple personal intention: to use that knowledge to help people and contribute positively to society.
            </p>
          </div>

          {/* Narrative Flow */}
          <div className="prose prose-slate max-w-none space-y-6 text-base sm:text-lg text-[#53615C] leading-relaxed">
            <p>
              Beyond analyzing threat vectors, the core motivation is to make responsible guidance, digital awareness, and appropriate human support accessible to people who need it most. Working inside threat research reveals a stark, consistent reality: while the cybersecurity industry invests heavily in enterprise security operations and corporate defenses, everyday citizens and local small businesses are left almost entirely unprotected against basic psychological deception.
            </p>
            <p>
              When an individual or small business owner is targeted by a deceptive link, a cloned profile, an unauthorized transaction, or an impersonated invoice, the aftermath is confusing and distressing:
            </p>

            {/* Structured Insights without generic cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
              <div className="p-6 rounded-2xl bg-[#F6F8F6] border border-[#E8EEEA] space-y-3">
                <div className="w-8 h-8 rounded-lg bg-[#E8F5EE] text-[#123C35] flex items-center justify-center font-bold text-sm">
                  01
                </div>
                <h3 className="text-base font-bold text-[#172B4D]">Confusion Around What to Do Next</h3>
                <p className="text-sm text-[#53615C] leading-relaxed">
                  Victims of fraud are frequently inundated with conflicting advice, intimidating legal terminology, or predatory “recovery agents” making fraudulent promises. People need clear, calm, step-by-step guidance.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F6F8F6] border border-[#E8EEEA] space-y-3">
                <div className="w-8 h-8 rounded-lg bg-[#E8F5EE] text-[#123C35] flex items-center justify-center font-bold text-sm">
                  02
                </div>
                <h3 className="text-base font-bold text-[#172B4D]">A Shortage of Responsible Guidance</h3>
                <p className="text-sm text-[#53615C] leading-relaxed">
                  Small business owners often lack dedicated IT security teams. When a vendor domain is spoofed or brand assets are abused, they struggle to find affordable, lawful assistance that respects their operational reality.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F6F8F6] border border-[#E8EEEA] space-y-3">
                <div className="w-8 h-8 rounded-lg bg-[#E8F5EE] text-[#123C35] flex items-center justify-center font-bold text-sm">
                  03
                </div>
                <h3 className="text-base font-bold text-[#172B4D]">Approachable Digital Safety</h3>
                <p className="text-sm text-[#53615C] leading-relaxed">
                  Cybersecurity should not require an engineering degree to understand. Practical privacy checklists and exposure audits should be accessible to anyone who wants to protect their personal or family data.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F6F8F6] border border-[#E8EEEA] space-y-3">
                <div className="w-8 h-8 rounded-lg bg-[#E8F5EE] text-[#123C35] flex items-center justify-center font-bold text-sm">
                  04
                </div>
                <h3 className="text-base font-bold text-[#172B4D]">A Safe Space to Be Heard</h3>
                <p className="text-sm text-[#53615C] leading-relaxed">
                  Digital incidents often carry deep emotional weight: embarrassment, anxiety, isolation, or self-blame. Beyond technical advice, people need a welcoming space where they can speak openly without fear of judgment.
                </p>
              </div>
            </div>

            <p>
              CybAram is our response to these realities. We do not claim to solve every problem in cybersecurity, nor do we invent dramatic stories. Instead, we bring responsible digital research, transparent awareness, appropriate support, and genuine ethical conduct together in one human-centered place.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION D — The Work We Want to Do                        */}
      {/* ========================================================= */}
      <section className="py-20 lg:py-24 bg-[#F6F8F6] border-t border-[#E8EEEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold tracking-wider text-[#123C35] uppercase">
              OUR INTENDED WORK · PURPOSE & CONTRIBUTION
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#172B4D] tracking-tight">
              The Work We Are Dedicated to Doing
            </h2>
            <p className="text-lg text-[#53615C] leading-relaxed">
              We present our intended areas of work not as exaggerated claims of proven global impact, but as our clear, humble commitment to meaningful community service.
            </p>
          </div>

          {/* Split Editorial Layout: Context Image on Left, 4 Work Areas on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Visual Anchor */}
            <div className="lg:col-span-5 space-y-4 sticky top-8">
              <div className="rounded-2xl overflow-hidden border border-[#E8EEEA] shadow-md bg-white aspect-4/3 sm:aspect-16/11">
                <img
                  src={assetUrl('/assets/images/about_intended_work_1792746835310.jpg')}
                  alt="Indian advisors providing practical digital verification guidance to a local shopkeeper"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-xs text-[#53615C] leading-relaxed">
                Practical guidance in action: helping everyday citizens and small business owners verify digital communications safely and without intimidation.
              </p>
            </div>

            {/* The 4 Areas of Work in an Asymmetric Editorial List */}
            <div className="lg:col-span-7 space-y-8">
              {/* Area 1 */}
              <div className="pb-8 border-b border-[#E8EEEA] space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#E8F5EE] text-[#123C35] flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-[#172B4D]">
                    Understanding Digital Risks & Appropriate Next Steps
                  </h3>
                </div>
                <p className="text-base text-[#53615C] leading-relaxed pl-11">
                  Guiding individuals who have encountered financial deception, suspicious links, or account threats through methodical evidence collection, bank notification, and official reporting through portals such as the National Cyber Crime Helpline (1930 / cybercrime.gov.in).
                </p>
              </div>

              {/* Area 2 */}
              <div className="pb-8 border-b border-[#E8EEEA] space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#E8F5EE] text-[#123C35] flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-[#172B4D]">
                    Promoting Responsible Digital-Safety Awareness & Research
                  </h3>
                </div>
                <p className="text-base text-[#53615C] leading-relaxed pl-11">
                  Publishing objective, plain-language resources on personal digital footprints, privacy settings, credential hygiene, and social engineering awareness to help people minimize their exposure before incidents happen.
                </p>
              </div>

              {/* Area 3 */}
              <div className="pb-8 border-b border-[#E8EEEA] space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#E8F5EE] text-[#123C35] flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-[#172B4D]">
                    Helping Eligible Small Businesses Understand Relevant Online Risks
                  </h3>
                </div>
                <p className="text-base text-[#53615C] leading-relaxed pl-11">
                  Assisting small enterprises, startups, and community merchants in examining public domain spoofing, trademark lookalikes, and exposed corporate metadata using lawful, ethical open-source research methods.
                </p>
              </div>

              {/* Area 4 */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#E8F5EE] text-[#123C35] flex items-center justify-center font-bold text-sm">
                    4
                  </div>
                  <h3 className="text-xl font-bold text-[#172B4D]">
                    Offering Non-Clinical Listening Support
                  </h3>
                </div>
                <p className="text-base text-[#53615C] leading-relaxed pl-11">
                  Providing a compassionate, non-judgmental human presence for people who want someone to talk to—whether they are overwhelmed by a digital incident or simply dealing with everyday isolation, loneliness, or a difficult season of life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION E — Values & Closing Invitation                   */}
      {/* ========================================================= */}
      <section className="py-20 lg:py-24 bg-white border-t border-[#E8EEEA]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Values Heading */}
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-semibold tracking-wider text-[#123C35] uppercase">
              OUR GUIDING PRINCIPLES
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#172B4D] tracking-tight">
              Values That Define How We Work
            </h2>
            <p className="text-base text-[#53615C]">
              In an industry that often relies on fear and sensationalism, our principles keep our work ethical, transparent, and respectful.
            </p>
          </div>

          {/* 5 Core Values - Clean typography-led layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="text-sm font-bold text-[#123C35] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Responsibility</span>
              </div>
              <h3 className="text-lg font-bold text-[#172B4D]">Thorough & Measured Action</h3>
              <p className="text-sm text-[#53615C] leading-relaxed">
                We take our guidance seriously. We verify facts, emphasize lawful processes, and avoid reckless recommendations that could worsen a delicate situation.
              </p>
            </div>

            <div className="space-y-3">
              <div className="text-sm font-bold text-[#123C35] flex items-center gap-2">
                <Scale className="w-4 h-4" />
                <span>Ethical Conduct</span>
              </div>
              <h3 className="text-lg font-bold text-[#172B4D]">Aram in Practice</h3>
              <p className="text-sm text-[#53615C] leading-relaxed">
                We strictly reject offensive intrusions, password sniffing, and unauthorized access. We decline personal relationship investigations and never monetize fear.
              </p>
            </div>

            <div className="space-y-3">
              <div className="text-sm font-bold text-[#123C35] flex items-center gap-2">
                <Heart className="w-4 h-4" />
                <span>Empathy</span>
              </div>
              <h3 className="text-lg font-bold text-[#172B4D]">People Before Technicalities</h3>
              <p className="text-sm text-[#53615C] leading-relaxed">
                We meet people with patience and kindness. No one is blamed, shamed, or patronized for trusting a convincing scam or making an honest mistake online.
              </p>
            </div>

            <div className="space-y-3">
              <div className="text-sm font-bold text-[#123C35] flex items-center gap-2">
                <Eye className="w-4 h-4" />
                <span>Transparency</span>
              </div>
              <h3 className="text-lg font-bold text-[#172B4D]">Honesty About Limitations</h3>
              <p className="text-sm text-[#53615C] leading-relaxed">
                We are clear about what we can and cannot do. We never promise guaranteed fund recovery or profile takedowns, and we clarify that our listening support is non-clinical.
              </p>
            </div>

            <div className="space-y-3">
              <div className="text-sm font-bold text-[#123C35] flex items-center gap-2">
                <Lock className="w-4 h-4" />
                <span>Respect for Privacy</span>
              </div>
              <h3 className="text-lg font-bold text-[#172B4D]">Uncompromising Discretion</h3>
              <p className="text-sm text-[#53615C] leading-relaxed">
                Your personal inquiries, documents, and conversations remain completely confidential. We never sell, share, or exploit user data.
              </p>
            </div>

            <div className="space-y-3">
              <div className="text-sm font-bold text-[#123C35] flex items-center gap-2">
                <Smile className="w-4 h-4" />
                <span>Human Dignity</span>
              </div>
              <h3 className="text-lg font-bold text-[#172B4D]">Preserving Peace of Mind</h3>
              <p className="text-sm text-[#53615C] leading-relaxed">
                Our ultimate goal is not merely technical risk reduction, but helping real people regain their confidence, calm, and peace of mind in a connected world.
              </p>
            </div>
          </div>

          {/* Sincere Closing Invitation */}
          <div className="rounded-3xl bg-[#123C35] text-white p-8 sm:p-12 lg:p-16 space-y-6">
            <span className="text-xs font-semibold text-[#DCECE3] uppercase tracking-wider">
              CONNECT WITH US
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight max-w-2xl">
              You are always welcome to connect with CybAram.
            </h2>
            <p className="text-base sm:text-lg text-[#DCECE3] leading-relaxed max-w-3xl">
              Whether you are currently dealing with a confusing online issue, want to assess your digital exposure, wish to inquire about ethical business research, or want to contribute your time and skills through our volunteer opportunities—we are here.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                type="button"
                onClick={() => onNavigate('/services')}
                className="px-6 py-3.5 rounded-lg text-sm font-semibold bg-white text-[#123C35] hover:bg-[#F6F8F6] active:scale-[0.99] transition-all cursor-pointer shadow-xs"
              >
                Explore Services
              </button>
              <button
                type="button"
                onClick={() => onNavigate('/contact-us')}
                className="px-6 py-3.5 rounded-lg text-sm font-semibold bg-white/10 text-white hover:bg-white/20 active:scale-[0.99] transition-all cursor-pointer border border-white/20"
              >
                Contact CybAram
              </button>
              <button
                type="button"
                onClick={() => onNavigate('/opportunities')}
                className="px-6 py-3.5 rounded-lg text-sm font-semibold bg-transparent text-[#DCECE3] hover:text-white transition-all cursor-pointer hover:underline underline-offset-4"
              >
                Contribute Skills on Opportunities →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
