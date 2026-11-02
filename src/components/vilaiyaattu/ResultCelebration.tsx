import React, { useState, useEffect } from 'react';
import { soundManager } from '../../utils/soundEffects.ts';
import { generateResultPosterBlob } from '../../utils/resultPosterGenerator.ts';
import {
  ShieldCheck,
  Share2,
  Download,
  RotateCcw,
  CheckCircle2,
  Copy,
  Award,
  Sparkles,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

export interface RoundAnswerRecord {
  scenarioTitle: string;
  category: string;
  isSafeOrCorrect: boolean;
  takeaway: string;
}

interface ResultCelebrationProps {
  gameTitle: string;
  playerName?: string;
  score: number;
  maxScore: number;
  percentage: number;
  completedCount: number;
  history: RoundAnswerRecord[];
  onReplay: () => void;
  onExit: () => void;
  onContinueAdventure?: () => void;
  onChangeLength?: () => void;
  milestoneNumber?: number;
}

export const ResultCelebration: React.FC<ResultCelebrationProps> = ({
  gameTitle,
  playerName,
  score,
  maxScore,
  percentage,
  completedCount,
  history,
  onReplay,
  onExit,
  onContinueAdventure,
  onChangeLength,
  milestoneNumber
}) => {
  const [copyNotice, setCopyNotice] = useState<string | null>(null);
  const [isGeneratingPoster, setIsGeneratingPoster] = useState(false);

  const isExcellent = percentage >= 90;
  const isGood = percentage >= 60 && percentage < 90;

  const tierName = isExcellent
    ? 'Cyber Defender'
    : isGood
    ? 'Vigilant User'
    : 'Safety Learner';

  const safeCount = history.filter((h) => h.isSafeOrCorrect).length;

  useEffect(() => {
    if (isExcellent) {
      soundManager.playHighScoreCelebration();
    } else if (isGood) {
      soundManager.playMediumScoreEncourage();
    } else {
      soundManager.playLowScoreSupport();
    }
  }, [isExcellent, isGood]);

  // Primary Action: Download Actual Image Poster
  const handleDownloadPoster = async () => {
    soundManager.playTap();
    setIsGeneratingPoster(true);
    try {
      const topTakeaway =
        history.find((h) => h.isSafeOrCorrect)?.takeaway ||
        history[0]?.takeaway ||
        'Always verify unexpected messages and keep private credentials safe.';

      const blob = await generateResultPosterBlob({
        gameTitle,
        playerName,
        score,
        maxScore,
        percentage,
        safeCount,
        totalCount: completedCount,
        tierName,
        headline: isExcellent
          ? 'Exceptional Digital Instincts!'
          : isGood
          ? 'Strong Digital Awareness!'
          : 'Building Solid Habits!',
        takeaway: topTakeaway
      });

      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `cybaram-${gameTitle.toLowerCase().replace(/\s+/g, '-')}-result.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      setCopyNotice('Poster downloaded successfully!');
      setTimeout(() => setCopyNotice(null), 4000);
    } catch (err) {
      setCopyNotice('Failed to generate poster. Please try again.');
      setTimeout(() => setCopyNotice(null), 4000);
    } finally {
      setIsGeneratingPoster(false);
    }
  };

  // Secondary Action: Share Image Poster via Web Share API
  const handleSharePoster = async () => {
    soundManager.playTap();
    setIsGeneratingPoster(true);

    const shareText = `I scored ${percentage}% (${score} pts) in ${gameTitle} — CybAram Vilaiyaattu! Can you spot everyday digital risks?`;
    const shareUrl = window.location.origin + '/vilaiyaattu';

    try {
      const topTakeaway =
        history.find((h) => h.isSafeOrCorrect)?.takeaway ||
        history[0]?.takeaway ||
        'Always verify unexpected messages and keep private credentials safe.';

      const blob = await generateResultPosterBlob({
        gameTitle,
        playerName,
        score,
        maxScore,
        percentage,
        safeCount,
        totalCount: completedCount,
        tierName,
        headline: isExcellent
          ? 'Exceptional Digital Instincts!'
          : isGood
          ? 'Strong Digital Awareness!'
          : 'Building Solid Habits!',
        takeaway: topTakeaway
      });

      const file = new File([blob], 'cybaram-result-poster.png', {
        type: 'image/png'
      });

      if (
        typeof navigator.canShare === 'function' &&
        navigator.canShare({ files: [file] })
      ) {
        await navigator.share({
          title: `${gameTitle} Achievement Poster`,
          text: shareText,
          files: [file]
        });
        setCopyNotice('Poster shared!');
        setTimeout(() => setCopyNotice(null), 4000);
        return;
      }
    } catch {
      // Fallback below
    } finally {
      setIsGeneratingPoster(false);
    }

    // Graceful fallback: Download the image and copy text
    handleDownloadPoster();
    try {
      await navigator.clipboard.writeText(`${shareText}\n${shareUrl}`);
      setCopyNotice('Poster downloaded & summary copied to clipboard!');
      setTimeout(() => setCopyNotice(null), 4500);
    } catch {
      // ignore clipboard error
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-3xl border-3 border-[#172B4D] p-5 sm:p-7 shadow-lg relative overflow-hidden select-none">
      {/* Notebook Perforation Top Detail */}
      <div className="absolute top-0 inset-x-0 h-3.5 flex justify-around px-4 pointer-events-none">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="w-2.5 h-3 bg-[#F6F8F6] border-b border-x border-[#172B4D] rounded-b-sm" />
        ))}
      </div>

      {/* Subtle notebook lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            'repeating-linear-gradient(transparent, transparent 27px, #E8EEEA 28px)',
          backgroundSize: '100% 28px'
        }}
      />

      <div className="relative z-10 space-y-4 pt-1">
        {/* 1. TOP SECTION: Branding, Mascot & Round Indicator */}
        <div className="flex items-center justify-between border-b border-[#E8EEEA] pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-full bg-gradient-to-b from-[#FFF1C2] to-[#DCECE3] border-2 border-[#172B4D] flex items-center justify-center shadow-xs">
              <span className="text-xl">🛡️</span>
            </div>
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#123C35] block">
                CybAram Vilaiyaattu
              </span>
              <h2 className="text-lg font-extrabold text-[#172B4D] leading-none">
                {gameTitle}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-[#E8F5EE] border border-[#DCECE3] text-[#123C35]">
            <Award className="w-3.5 h-3.5 text-emerald-600" />
            <span>Round Complete</span>
          </div>
        </div>

        {/* 2. MAIN SECTION: Score, Percentage, Performance Tier & Encouragement */}
        <div className="text-center space-y-2 py-1">
          {/* Confetti & Cheers */}
          <div className="flex justify-center items-center gap-2 text-2xl animate-bounce">
            <span>🎉</span>
            <span>⭐</span>
            <span>✨</span>
          </div>

          {playerName ? (
            <p className="text-base sm:text-lg font-black text-[#123C35] tracking-tight">
              Splendid job, {playerName}!
            </p>
          ) : null}

          <div className="inline-block px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FFF1C2] text-[#704214] border border-[#D8A84E]">
            ★ {tierName} ★
          </div>

          <div className="flex items-baseline justify-center gap-2">
            <span className="text-4xl sm:text-5xl font-black text-[#123C35] tracking-tight">
              {percentage}%
            </span>
            <span className="text-sm sm:text-base font-bold text-[#53615C]">
              ({score} / {maxScore} pts)
            </span>
          </div>

          <p className="text-xs sm:text-sm text-[#172B4D] font-medium max-w-md mx-auto">
            {isExcellent
              ? 'Outstanding! You made sharp, safe digital choices and protected everyday accounts.'
              : isGood
              ? 'Great progress! You spotted key red flags and made solid protective moves.'
              : 'Good practice! Practising in this safe simulator helps build instinctive reflexes.'}
          </p>

          <span className="text-[11px] font-bold text-[#123C35] bg-[#E8F5EE] px-3 py-0.5 rounded-full inline-block">
            {safeCount} of {completedCount} Safe Decisions
          </span>
        </div>

        {/* 3. COMPACT KEY TAKEAWAY CARD */}
        <div className="p-3.5 rounded-2xl bg-[#F6F8F6] border-2 border-[#172B4D]/20 text-left space-y-1">
          <span className="text-[11px] font-bold text-[#123C35] uppercase flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            Key Lesson Learned:
          </span>
          <p className="text-xs text-[#172B4D] font-medium leading-relaxed">
            {history.find((h) => h.isSafeOrCorrect)?.takeaway ||
              history[0]?.takeaway ||
              'Always enable 2FA, keep OTPs strictly private, and inspect links before clicking.'}
          </p>
        </div>

        {/* Notice Toast */}
        {copyNotice && (
          <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs font-bold text-center animate-in fade-in">
            {copyNotice}
          </div>
        )}

        {/* 4. COMPACT ACTIONS AREA: Download Poster, Share Poster, Replay, Exit */}
        <div className="pt-2 space-y-2">
          {/* Main Action Buttons Grid */}
          {onContinueAdventure && (
            <button
              type="button"
              onClick={onContinueAdventure}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-[#123C35] text-white hover:bg-[#0e2f2a] active:scale-[0.98] transition-all cursor-pointer shadow-md mb-2"
            >
              <Sparkles className="w-4 h-4 text-[#FFF1C2]" />
              <span>Continue Adventure (Next Milestone)</span>
              <ArrowRight className="w-4 h-4 text-[#DCECE3]" />
            </button>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {/* Download Poster Button */}
            <button
              type="button"
              onClick={handleDownloadPoster}
              disabled={isGeneratingPoster}
              className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold active:scale-[0.98] transition-all cursor-pointer shadow-xs disabled:opacity-60 ${
                onContinueAdventure
                  ? 'bg-white border-2 border-[#123C35] text-[#123C35] hover:bg-[#F6F8F6]'
                  : 'bg-[#123C35] text-white hover:bg-[#0e2f2a]'
              }`}
            >
              <Download className="w-4 h-4 text-[#123C35]" />
              <span>{isGeneratingPoster ? 'Generating Poster...' : 'Download Result Poster'}</span>
            </button>

            {/* Share Poster Button */}
            <button
              type="button"
              onClick={handleSharePoster}
              disabled={isGeneratingPoster}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold bg-[#FFF1C2] border-2 border-[#D8A84E] text-[#704214] hover:bg-[#FFE899] active:scale-[0.98] transition-all cursor-pointer shadow-xs disabled:opacity-60"
            >
              <Share2 className="w-4 h-4 text-[#704214]" />
              <span>Share Poster Image</span>
            </button>
          </div>

          {/* Secondary Controls: Replay, Change Length, and Exit */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-1">
            <button
              type="button"
              onClick={onReplay}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-white border border-[#E8EEEA] text-[#172B4D] hover:bg-[#F6F8F6] active:scale-[0.98] transition-all cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5 text-[#123C35]" />
              <span>Play Again</span>
            </button>

            {onChangeLength && (
              <button
                type="button"
                onClick={onChangeLength}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-[#E8F5EE] border border-[#DCECE3] text-[#123C35] hover:bg-[#D5EFE1] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>Choose Another Game Length</span>
              </button>
            )}

            <button
              type="button"
              onClick={onExit}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-[#53615C] hover:text-[#172B4D] transition-colors cursor-pointer"
            >
              Exit to Hub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
