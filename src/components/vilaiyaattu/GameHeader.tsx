import React from 'react';
import { Volume2, VolumeX, Award, X, Sparkles } from 'lucide-react';
import { soundManager } from '../../utils/soundEffects.ts';

interface GameHeaderProps {
  title: string;
  categoryLabel: string;
  currentIndex: number;
  totalCount: number;
  score: number;
  isAudioMuted: boolean;
  onToggleAudio: () => void;
  onExit: () => void;
}

export const GameHeader: React.FC<GameHeaderProps> = ({
  title,
  categoryLabel,
  currentIndex,
  totalCount,
  score,
  isAudioMuted,
  onToggleAudio,
  onExit
}) => {
  return (
    <div className="bg-[#172B4D] text-white rounded-2xl p-4 sm:p-5 mb-6 shadow-md border border-[#2B426B]">
      <div className="flex flex-wrap items-center justify-between gap-4">
        {/* Left: Title & Round Progress */}
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#DCECE3] bg-[#123C35] px-2.5 py-0.5 rounded-full border border-[#DCECE3]/30">
              {categoryLabel}
            </span>
            <span className="text-xs text-[#DCECE3]/80">
              Scenario <span className="text-white font-bold">{currentIndex + 1}</span> of {totalCount}
            </span>
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
            {title}
          </h2>
        </div>

        {/* Center: Progress Bar & Dots */}
        <div className="hidden md:flex items-center gap-1.5">
          {Array.from({ length: totalCount }).map((_, idx) => (
            <div
              key={idx}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? 'w-8 bg-emerald-400'
                  : idx < currentIndex
                  ? 'w-4 bg-emerald-700'
                  : 'w-4 bg-white/20'
              }`}
            />
          ))}
        </div>

        {/* Right: Score, Audio Toggle & Exit Button */}
        <div className="flex items-center gap-3">
          {/* Score Badge */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#123C35] text-white border border-[#DCECE3]/30 shadow-xs">
            <Award className="w-4 h-4 text-emerald-300" />
            <span className="text-xs font-bold font-mono tracking-tight">
              {score} pts
            </span>
          </div>

          {/* Sound Mute/Unmute */}
          <button
            type="button"
            onClick={onToggleAudio}
            className={`p-2 rounded-xl transition-colors cursor-pointer border ${
              isAudioMuted
                ? 'bg-white/10 text-white/60 border-white/10 hover:bg-white/20 hover:text-white'
                : 'bg-emerald-500/20 text-emerald-300 border-emerald-400/40 hover:bg-emerald-500/30'
            }`}
            title={isAudioMuted ? 'Sound effects disabled. Click to enable audio.' : 'Sound effects enabled. Click to mute audio.'}
            aria-label={isAudioMuted ? 'Unmute sound effects' : 'Mute sound effects'}
          >
            {isAudioMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>

          {/* Exit Game */}
          <button
            type="button"
            onClick={() => {
              soundManager.playTap();
              onExit();
            }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer border border-white/15"
          >
            <X className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Exit</span>
          </button>
        </div>
      </div>
    </div>
  );
};
