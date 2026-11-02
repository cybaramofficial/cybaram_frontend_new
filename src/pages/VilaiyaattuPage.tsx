import React, { useState } from 'react';
import { PageRoute } from '../types.ts';
import { VILAIYAATTU_CONFIG } from '../data/vilaiyaattuConfig.ts';
import { CyberPuzzlesGame } from '../components/vilaiyaattu/CyberPuzzlesGame.tsx';
import { soundManager } from '../utils/soundEffects.ts';
import {
  Play,
  Shield,
  Volume2,
  VolumeX,
  Award,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Layers,
  Sparkles,
  Compass,
  Flame,
  ShieldCheck
} from 'lucide-react';

interface VilaiyaattuPageProps {
  onNavigate: (path: PageRoute) => void;
}

export const VilaiyaattuPage: React.FC<VilaiyaattuPageProps> = ({ onNavigate }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [soundMuted, setSoundMuted] = useState<boolean>(() => soundManager.isMuted());
  const [cumulativeScore, setCumulativeScore] = useState<number>(0);

  const toggleSound = () => {
    const isNowMuted = soundManager.toggleMute();
    setSoundMuted(isNowMuted);
    if (!isNowMuted) {
      soundManager.playTap();
    }
  };

  const handleAddScore = (pts: number) => {
    setCumulativeScore((prev) => prev + pts);
  };

  const handleLaunchGame = () => {
    soundManager.playTap();
    setIsPlaying(true);
    window.scrollTo({ top: 40, behavior: 'smooth' });
  };

  const handleExitToHub = () => {
    soundManager.playTap();
    setIsPlaying(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToGameCard = () => {
    soundManager.playTap();
    const elem = document.getElementById('game-card-section');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#F6F8F6] min-h-screen pb-20">
      {!isPlaying ? (
        <>
          {/* 1. CYBER UMBRELLA WIDE LANDSCAPE BANNER */}
          <section className="bg-white border-b border-[#E8EEEA] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-14">
              {/* Breadcrumbs */}
              <nav className="flex items-center gap-2 text-xs font-medium text-[#53615C] mb-6" aria-label="Breadcrumb">
                <button
                  onClick={() => onNavigate('/')}
                  className="hover:text-[#123C35] transition-colors cursor-pointer"
                >
                  Home
                </button>
                <ChevronRight className="w-3.5 h-3.5 text-[#53615C]/60" />
                <span className="text-[#172B4D] font-semibold">{VILAIYAATTU_CONFIG.sectionName}</span>
              </nav>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left: Clear Text Area on crisp white background */}
                <div className="lg:col-span-6 space-y-4">
                  <span className="text-xs font-semibold tracking-wider text-[#123C35] uppercase">
                    {VILAIYAATTU_CONFIG.heroEyebrow}
                  </span>

                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#172B4D] leading-[1.12]">
                    {VILAIYAATTU_CONFIG.heroHeadline}
                  </h1>

                  <p className="text-base sm:text-lg text-[#53615C] leading-relaxed max-w-xl font-normal">
                    {VILAIYAATTU_CONFIG.heroSubtitle}
                  </p>

                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <button
                      type="button"
                      onClick={handleLaunchGame}
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-[#123C35] text-white hover:bg-[#0e2f2a] active:scale-[0.99] transition-all shadow-xs cursor-pointer"
                    >
                      <Play className="w-4 h-4 fill-current text-[#DCECE3]" />
                      <span>Play CybAram Cyber Puzzles</span>
                    </button>

                    <button
                      type="button"
                      onClick={scrollToGameCard}
                      className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-bold bg-[#FFF1C2] text-[#704214] border border-[#D8A84E] hover:bg-[#FFE899] active:scale-[0.99] transition-all cursor-pointer"
                    >
                      <span>Explore Puzzle Mechanics</span>
                      <ArrowRight className="w-4 h-4 text-[#704214]" />
                    </button>
                  </div>

                  {/* Trust Indicators */}
                  <div className="pt-4 flex flex-wrap items-center gap-5 text-xs text-[#53615C] border-t border-[#E8EEEA]">
                    <span className="inline-flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#123C35]" />
                      100 Shuffled Puzzles
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Layers className="w-4 h-4 text-[#123C35]" />
                      10 Puzzle Mechanics
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Shield className="w-4 h-4 text-[#123C35]" />
                      100% Safe Interactive Sandbox
                    </span>
                  </div>
                </div>

                {/* Right: Crisp, Wide Landscape Cyber Umbrella Artwork */}
                <div className="lg:col-span-6 relative">
                  <div className="absolute -inset-2 bg-gradient-to-tr from-[#123C35]/15 via-[#FFF1C2]/20 to-[#123C35]/10 rounded-3xl filter blur-xl opacity-70 pointer-events-none" />
                  <div className="relative rounded-3xl overflow-hidden shadow-xl border-2 border-[#172B4D]/10 bg-white h-72 sm:h-96 lg:h-[430px] w-full">
                    <img
                      src={VILAIYAATTU_CONFIG.heroImage}
                      alt={VILAIYAATTU_CONFIG.heroImageAlt}
                      className="w-full h-full object-cover object-center transform hover:scale-[1.02] transition-transform duration-700 ease-out"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/60 shadow-md flex items-center gap-2 text-xs font-bold text-[#172B4D]">
                      <Sparkles className="w-4 h-4 text-[#D8A84E] shrink-0" />
                      <span>CybAram Vilaiyaattu · Casual Learning Adventure</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Control Strip (Sound Toggle & Global Score) */}
          <div className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-[#E8EEEA] py-2.5 shadow-2xs">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#172B4D] tracking-tight">
                  {VILAIYAATTU_CONFIG.sectionName}
                </span>
                <span className="text-xs text-[#53615C]">·</span>
                <span className="text-xs text-[#53615C] font-medium hidden sm:inline">
                  {VILAIYAATTU_CONFIG.cyberPuzzlesTitle}
                </span>
              </div>

              <div className="flex items-center gap-3 sm:gap-4">
                {/* Audio Toggle */}
                <button
                  type="button"
                  onClick={toggleSound}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer border ${
                    soundMuted
                      ? 'bg-[#F6F8F6] text-[#53615C] border-[#E8EEEA] hover:bg-[#E8EEEA]'
                      : 'bg-[#E8F5EE] text-[#123C35] border-[#DCECE3]'
                  }`}
                  title={soundMuted ? 'Sound effects disabled. Click to enable audio.' : 'Sound effects enabled. Click to mute audio.'}
                >
                  {soundMuted ? (
                    <>
                      <VolumeX className="w-3.5 h-3.5 text-[#8C9B95]" />
                      <span className="hidden sm:inline">Audio Off</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-3.5 h-3.5 text-[#123C35]" />
                      <span className="hidden sm:inline">Audio On</span>
                    </>
                  )}
                </button>

                {/* Total Cumulative Score */}
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#123C35] text-white">
                  <Award className="w-3.5 h-3.5 text-[#DCECE3]" />
                  <span className="text-xs font-bold font-mono tracking-tight">
                    {cumulativeScore} pts
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 2. UNIFIED GAME EXPERIENCE PRESENTATION CARD */}
          <section id="game-card-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14">
            {/* Section Introduction */}
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 space-y-2">
              <span className="text-xs font-bold tracking-wider text-[#123C35] uppercase">
                UNIFIED CASUAL PUZZLE GAME
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#172B4D]">
                CybAram Cyber Puzzles
              </h2>
              <p className="text-sm sm:text-base text-[#53615C] leading-relaxed">
                {VILAIYAATTU_CONFIG.cyberPuzzlesTagline} Solve everyday challenges across accounts, privacy, scam calls, and smart link inspection.
              </p>
            </div>

            {/* UNIFIED HERO GAME CARD */}
            <div className="max-w-4xl mx-auto bg-white rounded-3xl border-2 border-[#172B4D] overflow-hidden shadow-md hover:shadow-lg transition-all group mb-14">
              <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">
                {/* 16:9 Dedicated Illustrated Game Cover */}
                <div className="md:col-span-5 bg-[#F6F8F6] relative min-h-[240px] md:min-h-full overflow-hidden border-b md:border-b-0 md:border-r border-[#E8EEEA]">
                  <img
                    src={VILAIYAATTU_CONFIG.coverCyberPuzzles}
                    alt="CybAram Cyber Puzzles game cover illustration"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-[#123C35]/90 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-lg">
                    100 Puzzles (Shuffled)
                  </div>
                </div>

                {/* Right: Content & Launch CTA */}
                <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <div className="text-xs font-semibold text-[#53615C]">
                      <span>Everyday Digital Safety</span>
                      <span aria-hidden="true" className="mx-1.5">·</span>
                      <span>10 Puzzle Types</span>
                      <span aria-hidden="true" className="mx-1.5">·</span>
                      <span>Endless Mode</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-[#172B4D] group-hover:text-[#123C35] transition-colors">
                      CybAram Cyber Puzzles
                    </h3>

                    <p className="text-sm text-[#53615C] leading-relaxed">
                      Step into the shoes of Priya, Rohan, Murugan, and Thatha. Directly interact with incoming alerts, inspect disguised links, lock secret OTPs into private vaults, and learn practical habits through play.
                    </p>

                    {/* Feature tags */}
                    <div className="grid grid-cols-2 gap-2 pt-2">
                      <div className="p-2.5 rounded-xl bg-[#F6F8F6] border border-[#E8EEEA] text-xs font-medium text-[#172B4D] flex items-center gap-2">
                        <Compass className="w-3.5 h-3.5 text-[#123C35]" />
                        <span>3 Difficulty Tiers</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-[#F6F8F6] border border-[#E8EEEA] text-xs font-medium text-[#172B4D] flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-[#8C6D15]" />
                        <span>Milestone Posters</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-[#F6F8F6] border border-[#E8EEEA] text-xs font-medium text-[#172B4D] flex items-center gap-2">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#123C35]" />
                        <span>No Real Data Needed</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-[#F6F8F6] border border-[#E8EEEA] text-xs font-medium text-[#172B4D] flex items-center gap-2">
                        <Flame className="w-3.5 h-3.5 text-[#2E5C8A]" />
                        <span>Cumulative Scoring</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={handleLaunchGame}
                      className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-base font-bold bg-[#123C35] text-white hover:bg-[#0e2f2a] active:scale-[0.99] transition-all cursor-pointer shadow-md"
                    >
                      <Play className="w-5 h-5 fill-current text-[#DCECE3]" />
                      <span>Play CybAram Cyber Puzzles Now</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <CyberPuzzlesGame onAddScore={handleAddScore} onExit={handleExitToHub} />
      )}
    </div>
  );
};
