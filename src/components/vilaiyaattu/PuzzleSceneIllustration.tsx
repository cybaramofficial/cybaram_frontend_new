import React from 'react';

export type SceneTheme =
  | 'job_offer'
  | 'delivery'
  | 'bank_alert'
  | 'electricity'
  | 'lottery_reward'
  | 'family_device'
  | 'investigation'
  | 'general';

export type ReactionType = 'idle' | 'happy' | 'caution' | 'investigating';

interface PuzzleSceneIllustrationProps {
  theme?: SceneTheme;
  reaction?: ReactionType;
  characterName?: string;
  messageText: string;
  senderName?: string;
  highlightClueText?: string;
  onClueClick?: () => void;
  className?: string;
}

export const PuzzleSceneIllustration: React.FC<PuzzleSceneIllustrationProps> = ({
  theme = 'general',
  reaction = 'idle',
  characterName = 'Priya',
  messageText,
  senderName = 'Incoming Alert',
  highlightClueText,
  onClueClick,
  className = ''
}) => {
  const isHappy = reaction === 'happy';
  const isCaution = reaction === 'caution';
  const isInvestigating = reaction === 'investigating';

  return (
    <div
      className={`relative w-full rounded-2xl border border-[#E8EEEA] bg-white p-4 sm:p-6 overflow-hidden select-none transition-all ${
        isHappy
          ? 'ring-2 ring-emerald-500/30 bg-emerald-50/20'
          : isCaution
          ? 'ring-2 ring-amber-500/30 bg-amber-50/20'
          : ''
      } ${className}`}
      style={{
        backgroundImage:
          'repeating-linear-gradient(transparent, transparent 27px, #F0F4F2 28px)',
        backgroundSize: '100% 28px'
      }}
    >
      {/* Subtle notebook left margin line for casual puzzle feel */}
      <div className="absolute top-0 bottom-0 left-6 sm:left-8 w-px bg-rose-200/50 pointer-events-none" />

      {/* Floating Reaction Sparkles / Warning Emojis */}
      {isHappy && (
        <div className="absolute top-3 right-4 z-20 flex items-center gap-1.5 animate-bounce">
          <span className="text-xl">✨</span>
          <span className="text-lg">🎉</span>
          <span className="text-xs font-bold text-emerald-800 bg-emerald-100 border border-emerald-300 px-2 py-0.5 rounded-full">
            Safe Move!
          </span>
        </div>
      )}

      {isCaution && (
        <div className="absolute top-3 right-4 z-20 flex items-center gap-1.5 animate-pulse">
          <span className="text-xl">⚠️</span>
          <span className="text-xs font-bold text-amber-800 bg-amber-100 border border-amber-300 px-2 py-0.5 rounded-full">
            Caution Needed!
          </span>
        </div>
      )}

      {/* Main Interactive Scene: Cartoon Character + Readable Message Device */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 pl-4 sm:pl-6">
        {/* Character Illustration SVG */}
        <div className="shrink-0 flex flex-col items-center">
          <div className="relative">
            <svg
              viewBox="0 0 140 180"
              className="w-28 sm:w-36 h-auto drop-shadow-xs transition-transform duration-300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Floor Shadow */}
              <ellipse cx="70" cy="172" rx="42" ry="6" fill="#172B4D" opacity="0.12" />

              {/* Character: Friendly Indian Cartoon Figure */}
              <g transform="translate(0, 4)">
                {/* Hair */}
                <path
                  d="M40 38 C40 16, 100 16, 100 38 C100 58, 92 68, 70 68 C48 68, 40 58, 40 38 Z"
                  fill="#221C1A"
                />
                <circle cx="70" cy="18" r="10" fill="#221C1A" />

                {/* Head & Neck */}
                <rect x="66" y="66" width="8" height="12" fill="#D49A6A" />
                <ellipse cx="70" cy="45" rx="20" ry="23" fill="#D49A6A" />
                <ellipse cx="70" cy="47" rx="17" ry="19" fill="#E8B88A" />

                {/* Bindi */}
                <circle cx="70" cy="38" r="1.5" fill="#991B1B" />

                {/* Facial Expression based on reaction */}
                {isHappy ? (
                  <>
                    {/* Happy curved eyes */}
                    <path d="M59 44 Q63 40 67 44" stroke="#1C1816" strokeWidth="2.2" strokeLinecap="round" fill="none" />
                    <path d="M73 44 Q77 40 81 44" stroke="#1C1816" strokeWidth="2.2" strokeLinecap="round" fill="none" />
                    {/* Big happy smile */}
                    <path d="M62 52 Q70 62 78 52 Z" fill="#FFFFFF" stroke="#1C1816" strokeWidth="1.5" />
                    <circle cx="56" cy="49" r="2.5" fill="#F87171" opacity="0.5" />
                    <circle cx="84" cy="49" r="2.5" fill="#F87171" opacity="0.5" />
                  </>
                ) : isCaution ? (
                  <>
                    {/* Surprised round eyes */}
                    <circle cx="62" cy="44" r="3.5" fill="#FFFFFF" />
                    <circle cx="62" cy="44" r="2" fill="#1C1816" />
                    <circle cx="78" cy="44" r="3.5" fill="#FFFFFF" />
                    <circle cx="78" cy="44" r="2" fill="#1C1816" />
                    {/* Worried brows */}
                    <path d="M57 39 Q62 37 67 40" stroke="#1C1816" strokeWidth="1.8" fill="none" />
                    <path d="M73 40 Q78 37 83 39" stroke="#1C1816" strokeWidth="1.8" fill="none" />
                    {/* Surprised 'O' mouth */}
                    <ellipse cx="70" cy="56" rx="3.5" ry="5" fill="#8B0000" />
                  </>
                ) : (
                  <>
                    {/* Gentle attentive eyes */}
                    <circle cx="62" cy="45" r="2" fill="#1C1816" />
                    <circle cx="78" cy="45" r="2" fill="#1C1816" />
                    {/* Calm smile */}
                    <path d="M64 53 Q70 57 76 53" stroke="#1C1816" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                  </>
                )}

                {/* Torso: Forest green outfit with warm yellow detail */}
                <path d="M50 78 L90 78 L98 155 L42 155 Z" fill="#123C35" />
                <path d="M70 78 L70 125" stroke="#FFF1C2" strokeWidth="2" strokeLinecap="round" />

                {/* Hands & Arms */}
                {isHappy ? (
                  /* Clapping / Cheering arms */
                  <g className="animate-bounce">
                    <path d="M46 90 Q30 72 38 52" stroke="#D49A6A" strokeWidth="6" strokeLinecap="round" />
                    <path d="M94 90 Q110 72 102 52" stroke="#D49A6A" strokeWidth="6" strokeLinecap="round" />
                    <circle cx="38" cy="50" r="5" fill="#D49A6A" />
                    <circle cx="102" cy="50" r="5" fill="#D49A6A" />
                  </g>
                ) : isCaution ? (
                  /* Hands to cheeks */
                  <g>
                    <path d="M46 92 Q34 76 52 64" stroke="#D49A6A" strokeWidth="6" strokeLinecap="round" />
                    <path d="M94 92 Q106 76 88 64" stroke="#D49A6A" strokeWidth="6" strokeLinecap="round" />
                    <circle cx="52" cy="62" r="4.5" fill="#D49A6A" />
                    <circle cx="88" cy="62" r="4.5" fill="#D49A6A" />
                  </g>
                ) : (
                  /* Holding smartphone attentively */
                  <g>
                    <path d="M48 90 Q58 110 66 112" stroke="#D49A6A" strokeWidth="6" strokeLinecap="round" />
                    <path d="M92 90 Q82 110 74 112" stroke="#D49A6A" strokeWidth="6" strokeLinecap="round" />
                  </g>
                )}
              </g>
            </svg>
          </div>
          <span className="text-[11px] font-bold text-[#172B4D] tracking-tight mt-1">{characterName}</span>
        </div>

        {/* Fictional Message Box (Clean Cartoon Smartphone / Parcel Card) */}
        <div className="flex-1 w-full max-w-lg bg-white rounded-2xl border-2 border-[#172B4D] shadow-md p-4 sm:p-5 relative overflow-hidden transition-all">
          {/* Header Bar of Phone/Card */}
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#E8EEEA] text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="font-bold text-[#172B4D] ml-1 truncate max-w-[160px] sm:max-w-xs">
                {senderName}
              </span>
            </div>
            <span className="text-[10px] text-[#53615C] font-mono">Just now</span>
          </div>

          {/* Message Content */}
          <div className="space-y-3">
            <p className="text-sm sm:text-base text-[#172B4D] leading-relaxed font-medium">
              “{messageText}”
            </p>

            {/* Optional Interactive Hotspot for Spot the Scam */}
            {highlightClueText && (
              <div
                onClick={onClueClick}
                className={`p-2.5 rounded-xl border border-dashed transition-all cursor-pointer flex items-center justify-between gap-2 ${
                  isInvestigating
                    ? 'bg-amber-100 border-amber-500 text-amber-900 ring-2 ring-amber-400/40'
                    : 'bg-[#FFF1C2]/60 hover:bg-[#FFF1C2] border-[#D8A84E] text-[#704214]'
                }`}
                title="Tap to inspect this suspicious detail"
              >
                <div className="flex items-center gap-2">
                  <span className="text-base">🔍</span>
                  <span className="text-xs font-semibold">{highlightClueText}</span>
                </div>
                <span className="text-[10px] font-bold underline shrink-0">Inspect Clue</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
