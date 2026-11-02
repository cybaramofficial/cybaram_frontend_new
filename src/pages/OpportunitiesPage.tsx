import React, { useState, useMemo } from 'react';
import { PageRoute } from '../types.ts';
import { CONTRIBUTION_AREAS } from '../data/siteData.ts';
import { PageHeroBanner } from '../components/PageHeroBanner.tsx';
import {
  ChevronRight,
  ArrowRight,
  PenTool,
  Code,
  Search,
  BookOpen,
  Users,
  Handshake,
  CheckCircle2,
  Info,
  Sparkles,
  ShieldCheck,
  HeartHandshake,
  Share2,
  X,
  Copy,
  Check
} from 'lucide-react';

interface OpportunitiesPageProps {
  onNavigate: (path: PageRoute) => void;
}

export const OpportunitiesPage: React.FC<OpportunitiesPageProps> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [shareFeedback, setShareFeedback] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    area: '',
    skills: '',
    portfolio: '',
    availability: '',
    message: '',
    privacyAccepted: false
  });

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'PenTool':
        return <PenTool className="w-4 h-4 text-[#123C35]" />;
      case 'Code':
        return <Code className="w-4 h-4 text-[#123C35]" />;
      case 'Search':
        return <Search className="w-4 h-4 text-[#123C35]" />;
      case 'BookOpen':
        return <BookOpen className="w-4 h-4 text-[#123C35]" />;
      case 'Users':
        return <Users className="w-4 h-4 text-[#123C35]" />;
      case 'Handshake':
        return <Handshake className="w-4 h-4 text-[#123C35]" />;
      default:
        return <PenTool className="w-4 h-4 text-[#123C35]" />;
    }
  };

  // Client-side filtering across title, description, keywords, and details
  const filteredAreas = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return CONTRIBUTION_AREAS;

    return CONTRIBUTION_AREAS.filter((area) => {
      const matchTitle = area.title.toLowerCase().includes(query);
      const matchDesc = area.shortDesc?.toLowerCase().includes(query) ?? false;
      const matchKeywords = area.keywords?.some((k) => k.toLowerCase().includes(query)) ?? false;
      const matchDetails = area.details.some((d) => d.toLowerCase().includes(query));

      return matchTitle || matchDesc || matchKeywords || matchDetails;
    });
  }, [searchQuery]);

  const handleSelectArea = (areaTitle: string) => {
    setFormData((prev) => ({ ...prev, area: areaTitle }));
    const formElem = document.getElementById('interest-form');
    if (formElem) {
      formElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleShare = async (title: string, desc?: string, id?: string) => {
    const shareUrl = `${window.location.origin}/opportunities#${id || ''}`;
    const shareData = {
      title: `${title} · CybAram Volunteer Opportunities`,
      text: desc || `Contribute your skills to CybAram: ${title}`,
      url: shareUrl
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        setShareFeedback(`Shared "${title}" successfully!`);
        setTimeout(() => setShareFeedback(null), 4000);
        return;
      } catch (err) {
        // Fall back to copy link if user cancelled or API threw
      }
    }

    try {
      await navigator.clipboard.writeText(shareUrl);
      setShareFeedback(`Link to "${title}" copied to clipboard!`);
      setTimeout(() => setShareFeedback(null), 4000);
    } catch {
      setShareFeedback(`Could not copy link automatically: ${shareUrl}`);
      setTimeout(() => setShareFeedback(null), 5000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacyAccepted) {
      setErrorMessage('Please acknowledge the privacy policy to proceed.');
      return;
    }
    setErrorMessage('');
    setFormSubmitted(true);
    const formElem = document.getElementById('interest-form');
    if (formElem) {
      formElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-0">
      {/* 1. Cinematic Landscape Hero Banner */}
      <PageHeroBanner
        imageSrc="/src/assets/images/hero_cinematic_opportunities_1792753238747.jpg"
        imageAlt="Diverse young Indian professionals, designers, developers, and volunteers collaborating in a bright studio"
        kicker="CONTRIBUTE TO A SAFER DIGITAL WORLD"
        title="Bring your skills. Make a difference."
        subtitle="We welcome people who want to contribute design, frontend technology, research, writing, and community listening skills to make cybersecurity approachable, calm, and protective for everyday citizens."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Opportunities' }
        ]}
        onNavigate={onNavigate}
        actions={
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#search-opportunities"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm sm:text-base font-semibold bg-[#123C35] text-white hover:bg-[#0e2f2a] active:scale-[0.99] transition-all shadow-xs cursor-pointer"
            >
              <span>Explore Open Areas</span>
              <ArrowRight className="w-4 h-4 text-[#DCECE3]" />
            </a>
            <a
              href="#interest-form"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm sm:text-base font-semibold bg-white text-[#123C35] border border-[#DCECE3] hover:bg-[#E8F5EE] active:scale-[0.99] transition-all cursor-pointer"
            >
              <span>Volunteer Your Skills</span>
              <ArrowRight className="w-4 h-4 text-[#123C35]" />
            </a>
          </div>
        }
      />

      {/* 2. Opportunities Search Area (Placed immediately after hero banner) */}
      <section id="search-opportunities" className="py-12 bg-white border-t border-[#E8EEEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="text-center space-y-2 mb-6">
              <span className="text-xs font-semibold tracking-wider text-[#123C35] uppercase">
                FIND YOUR FIT
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#172B4D] tracking-tight">
                Search Contribution Opportunities
              </h2>
              <p className="text-sm text-[#53615C]">
                Filter by technical skills, design, content creation, community outreach, or peer listening.
              </p>
            </div>

            {/* Search Input Bar */}
            <div className="relative">
              <label htmlFor="opportunity-search-input" className="sr-only">
                Search opportunities by skill, role, or keyword
              </label>
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#53615C]">
                <Search className="w-5 h-5" />
              </div>
              <input
                id="opportunity-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search opportunities by skill, role, or keyword… (e.g. React, UI/UX, Research, Listening)"
                className="w-full pl-12 pr-10 py-3.5 rounded-xl border border-[#E8EEEA] bg-[#F6F8F6] text-sm text-[#172B4D] placeholder-[#53615C]/60 focus:bg-white focus:outline-hidden focus:border-[#123C35] focus:ring-1 focus:ring-[#123C35] transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[#53615C] hover:text-[#172B4D] cursor-pointer"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Keyword Quick Pills (functional filter buttons) */}
            <div className="flex flex-wrap items-center gap-1.5 pt-1 text-xs text-[#53615C]">
              <span className="font-medium mr-1 text-[#172B4D]">Popular filters:</span>
              {['Frontend', 'React', 'UI/UX', 'Design', 'Research', 'Content', 'Peer listening', 'Volunteering', 'HR'].map((keyword) => (
                <button
                  key={keyword}
                  type="button"
                  onClick={() => setSearchQuery(keyword)}
                  className={`px-2.5 py-1 rounded-md text-xs transition-colors cursor-pointer ${
                    searchQuery.toLowerCase() === keyword.toLowerCase()
                      ? 'bg-[#123C35] text-white'
                      : 'bg-[#F6F8F6] text-[#53615C] hover:text-[#123C35] hover:bg-[#E8F5EE] border border-[#E8EEEA]'
                  }`}
                >
                  {keyword}
                </button>
              ))}
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="text-xs text-[#123C35] underline ml-2 cursor-pointer"
                >
                  Reset filter
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Global Share Feedback Toast */}
      {shareFeedback && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#123C35] text-white px-5 py-3 rounded-xl shadow-lg border border-white/20 text-sm flex items-center gap-2.5 animate-fade-in">
          <Check className="w-4 h-4 text-[#DCECE3]" />
          <span>{shareFeedback}</span>
        </div>
      )}

      {/* 3. "Why Contributions Matter" Narrative Section */}
      <section className="py-16 bg-[#F6F8F6] border-t border-[#E8EEEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="space-y-3">
              <span className="text-xs font-semibold tracking-wider text-[#123C35] uppercase">
                WHY CONTRIBUTIONS MATTER
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-[#172B4D]">
                Digital safety is a collective community effort.
              </h2>
              <p className="text-base sm:text-lg text-[#53615C] leading-relaxed">
                Cyber fraud and online deception thrive in the gap between technical complexity and everyday user awareness. When an elder receives a malicious APK, or a local shopkeeper has their UPI spoofed, corporate security jargon does not help them.
              </p>
            </div>

            {/* Clean Editorial Pullquote */}
            <div className="p-7 rounded-2xl bg-white border border-[#E8EEEA] space-y-2">
              <p className="text-lg font-medium text-[#172B4D] italic leading-relaxed">
                “We don't need more panic. We need clearer explanations, compassionate listeners, and accessible interfaces that make self-protection second nature for every Indian household.”
              </p>
              <p className="text-xs font-semibold text-[#123C35] uppercase tracking-wider pt-1">
                CybAram Community Principle
              </p>
            </div>

            {/* 3 Impact Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="p-6 rounded-2xl bg-white border border-[#E8EEEA] space-y-2">
                <div className="w-10 h-10 rounded-lg bg-[#E8F5EE] flex items-center justify-center text-[#123C35]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#172B4D]">Educational Clarity</h3>
                <p className="text-xs sm:text-sm text-[#53615C] leading-relaxed">
                  Translating complex cybersecurity threats into plain, relatable guidance that seniors, parents, and students can immediately act upon.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#E8EEEA] space-y-2">
                <div className="w-10 h-10 rounded-lg bg-[#E8F5EE] flex items-center justify-center text-[#123C35]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#172B4D]">Responsible Tools</h3>
                <p className="text-xs sm:text-sm text-[#53615C] leading-relaxed">
                  Building accessible, lightweight web tools and checklists that respect privacy and never hoard user data.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#E8EEEA] space-y-2">
                <div className="w-10 h-10 rounded-lg bg-[#E8F5EE] flex items-center justify-center text-[#123C35]">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#172B4D]">Empathetic Grounding</h3>
                <p className="text-xs sm:text-sm text-[#53615C] leading-relaxed">
                  Providing respectful listening that removes the shame, guilt, and isolation people feel after falling for deceptive scams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Contribution Areas Grid */}
      <section id="contribution-areas" className="py-20 bg-white border-t border-[#E8EEEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs font-semibold tracking-wider text-[#123C35] uppercase">
                ACTIVE FOCUS TRACKS
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-[#172B4D]">
                Where You Could Contribute
              </h2>
              <p className="text-sm sm:text-base text-[#53615C]">
                Explore specific tracks where volunteers contribute their time, skills, and perspectives.
              </p>
            </div>
            <div className="text-xs text-[#53615C] whitespace-nowrap">
              Showing <strong className="text-[#172B4D]">{filteredAreas.length}</strong> of {CONTRIBUTION_AREAS.length} areas
            </div>
          </div>

          {/* Empty Search State */}
          {filteredAreas.length === 0 ? (
            <div className="bg-[#F6F8F6] rounded-2xl p-12 text-center space-y-4 border border-[#E8EEEA]">
              <div className="w-12 h-12 rounded-full bg-white border border-[#E8EEEA] flex items-center justify-center mx-auto text-[#53615C]">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#172B4D]">No matching contribution areas</h3>
              <p className="text-sm text-[#53615C] max-w-md mx-auto">
                No active tracks matched “{searchQuery}”. You can still submit an open expression of interest describing your unique skills below.
              </p>
              <div className="flex items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="px-4 py-2 rounded-lg bg-white border border-[#E8EEEA] text-xs font-semibold text-[#172B4D] hover:bg-[#E8F5EE] cursor-pointer"
                >
                  Clear search filter
                </button>
                <a
                  href="#interest-form"
                  className="px-4 py-2 rounded-lg bg-[#123C35] text-white text-xs font-semibold cursor-pointer"
                >
                  Submit general interest
                </a>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 items-stretch">
              {filteredAreas.map((area) => (
                <div
                  key={area.id}
                  id={area.id}
                  className="flex h-full flex-col overflow-hidden rounded-xl border border-[#E8EEEA] bg-[#F6F8F6] transition-colors hover:border-[#123C35]/30"
                >
                  <div className="aspect-[16/10] w-full overflow-hidden border-b border-[#E8EEEA] bg-[#E8F5EE]">
                    {area.image ? (
                      <img
                        src={area.image}
                        alt={area.imageAlt || area.title}
                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center">
                        {getIcon(area.icon)}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col gap-4 p-5">
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-lg font-bold text-[#172B4D]">
                          {area.title}
                        </h3>
                        <span className="text-xs font-medium text-[#123C35]">
                          {area.statusNote}
                        </span>
                      </div>

                      <p className="text-sm leading-relaxed text-[#53615C]">
                        {area.shortDesc}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-1.5">
                      {area.keywords?.slice(0, 5).map((kw, idx) => (
                        <span
                          key={idx}
                          className="rounded border border-[#E8EEEA] bg-white px-2 py-1 text-[11px] font-medium text-[#172B4D]/75"
                        >
                          {kw}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto flex flex-wrap items-center gap-2 border-t border-[#E8EEEA] pt-4">
                      <button
                        type="button"
                        onClick={() => handleSelectArea(area.title)}
                        className="flex-1 rounded-lg bg-[#123C35] px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#0e2f2a] cursor-pointer"
                      >
                        Express interest
                      </button>
                      <button
                        type="button"
                        onClick={() => handleShare(area.title, area.shortDesc, area.id)}
                        title={`Share ${area.title}`}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-[#E8EEEA] bg-white px-3 py-2.5 text-xs font-medium text-[#53615C] transition-colors hover:bg-[#E8F5EE] hover:text-[#172B4D] cursor-pointer"
                      >
                        <Share2 className="h-3.5 w-3.5" />
                        <span>Share</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 5. Expression of Interest Form */}
      <section id="interest-form" className="py-20 bg-[#F6F8F6] border-t border-[#E8EEEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="text-center space-y-3">
              <span className="text-xs font-semibold tracking-wider text-[#123C35] uppercase">
                GET INVOLVED
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-[#172B4D]">
                Express Your Interest to Contribute
              </h2>
              <p className="text-sm text-[#53615C] leading-relaxed">
                Fill out this short form to tell us about your skills, interests, and how you would like to help CybAram. All contributions are on a voluntary community basis.
              </p>
            </div>

            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-[#E8EEEA] shadow-sm">
              {formSubmitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#E8F5EE] text-[#123C35] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#172B4D]">Thank You for Your Interest</h3>
                  <p className="text-sm text-[#53615C] max-w-md mx-auto leading-relaxed">
                    We have received your details for <strong>{formData.area || 'Community Collaboration'}</strong>. A community coordinator will review your background and reach out via email.
                  </p>
                  <div className="p-4 bg-[#F6F8F6] rounded-xl text-xs text-[#53615C] border border-[#E8EEEA] max-w-md mx-auto">
                    <p className="font-semibold text-[#172B4D] mb-1">Integration Status Note</p>
                    <p>
                      This form validates client-side and records your submission state. Live email routing requires connecting an active mail provider (such as Resend or Google Workspace) to a backend endpoint.
                    </p>
                  </div>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({
                          fullName: '',
                          email: '',
                          area: '',
                          skills: '',
                          portfolio: '',
                          availability: '',
                          message: '',
                          privacyAccepted: false
                        });
                      }}
                      className="px-6 py-2.5 rounded-lg text-xs font-semibold bg-[#123C35] text-white hover:bg-[#0e2f2a] cursor-pointer"
                    >
                      Submit Another Expression
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-[#172B4D] mb-1.5">
                      Full Name <span className="text-[#123C35]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-[#E8EEEA] text-sm text-[#172B4D] placeholder-[#53615C]/50 focus:outline-hidden focus:border-[#123C35] focus:ring-1 focus:ring-[#123C35] transition-all bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#172B4D] mb-1.5">
                      Email Address <span className="text-[#123C35]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-[#E8EEEA] text-sm text-[#172B4D] placeholder-[#53615C]/50 focus:outline-hidden focus:border-[#123C35] focus:ring-1 focus:ring-[#123C35] transition-all bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#172B4D] mb-1.5">
                      Contribution Area of Interest <span className="text-[#123C35]">*</span>
                    </label>
                    <select
                      required
                      value={formData.area}
                      onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-[#E8EEEA] text-sm text-[#172B4D] focus:outline-hidden focus:border-[#123C35] focus:ring-1 focus:ring-[#123C35] transition-all bg-white cursor-pointer"
                    >
                      <option value="" disabled>Choose an area</option>
                      {CONTRIBUTION_AREAS.map((area) => (
                        <option key={area.id} value={area.title}>
                          {area.title}
                        </option>
                      ))}
                      <option value="General Volunteer Contribution">Other / General Volunteer Contribution</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#172B4D] mb-1.5">
                      Relevant Skills or Experience <span className="text-[#123C35]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="E.g., Figma, React, Technical Writing, Tamil translation, Peer listening..."
                      value={formData.skills}
                      onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-[#E8EEEA] text-sm text-[#172B4D] placeholder-[#53615C]/50 focus:outline-hidden focus:border-[#123C35] focus:ring-1 focus:ring-[#123C35] transition-all bg-white"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-[#172B4D] mb-1.5">
                        Portfolio or GitHub (optional)
                      </label>
                      <input
                        type="url"
                        placeholder="https://..."
                        value={formData.portfolio}
                        onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-[#E8EEEA] text-sm text-[#172B4D] placeholder-[#53615C]/50 focus:outline-hidden focus:border-[#123C35] focus:ring-1 focus:ring-[#123C35] transition-all bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#172B4D] mb-1.5">
                        Weekly Availability (approx.)
                      </label>
                      <select
                        value={formData.availability}
                        onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-[#E8EEEA] text-sm text-[#172B4D] focus:outline-hidden focus:border-[#123C35] focus:ring-1 focus:ring-[#123C35] transition-all bg-white cursor-pointer"
                      >
                        <option value="">Select availability</option>
                        <option value="1-3 hours/week">1–3 hours / week</option>
                        <option value="4-8 hours/week">4–8 hours / week</option>
                        <option value="Flexible / As needed">Flexible / As needed</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#172B4D] mb-1.5">
                      Brief Message or Motivation
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Why would you like to contribute to CybAram?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-[#E8EEEA] text-sm text-[#172B4D] placeholder-[#53615C]/50 focus:outline-hidden focus:border-[#123C35] focus:ring-1 focus:ring-[#123C35] transition-all bg-white"
                    />
                  </div>

                  <div className="pt-1">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        checked={formData.privacyAccepted}
                        onChange={(e) => setFormData({ ...formData, privacyAccepted: e.target.checked })}
                        className="mt-1 w-4 h-4 rounded text-[#123C35] focus:ring-[#123C35] border-[#E8EEEA]"
                      />
                      <span className="text-xs text-[#53615C] leading-normal">
                        I acknowledge that my enquiry will be handled as described in the{' '}
                        <button
                          type="button"
                          onClick={() => onNavigate('/privacy-policy')}
                          className="text-[#123C35] underline hover:text-[#0e2f2a]"
                        >
                          Privacy Policy
                        </button>.
                      </span>
                    </label>
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700">
                      {errorMessage}
                    </div>
                  )}

                  <div>
                    <button
                      type="submit"
                      disabled={!formData.fullName || !formData.email || !formData.area || !formData.skills || !formData.privacyAccepted}
                      className={`w-full py-4 px-6 rounded-lg font-semibold transition-all shadow-xs flex items-center justify-center gap-2 ${
                        formData.fullName && formData.email && formData.area && formData.skills && formData.privacyAccepted
                          ? 'bg-[#123C35] text-white hover:bg-[#0e2f2a] active:scale-[0.99] cursor-pointer'
                          : 'bg-[#53615C]/20 text-[#53615C] cursor-not-allowed border border-[#E8EEEA]'
                      }`}
                    >
                      <span>Submit Interest</span>
                      <ArrowRight className={`w-4 h-4 ${formData.fullName && formData.email && formData.area && formData.skills && formData.privacyAccepted ? 'text-[#DCECE3]' : 'text-[#53615C]'}`} />
                    </button>
                    {(!formData.fullName || !formData.email || !formData.area || !formData.skills || !formData.privacyAccepted) && (
                      <p className="text-xs text-center text-[#53615C]/80 mt-2">
                        * Please complete required fields and acknowledge the privacy policy to submit.
                      </p>
                    )}
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
