import React from 'react';

export type CharacterType =
  | 'woman_at_home'
  | 'working_professional'
  | 'small_business_owner'
  | 'delivery_recipient'
  | 'family'
  | 'cyber_guide';

export type AnimationState =
  | 'idle'
  | 'reading_phone'
  | 'thinking'
  | 'safe_celebrating'
  | 'family_cheer'
  | 'consequence_concerned'
  | 'realising_mistake';

interface CompanionCharacterProps {
  character: CharacterType;
  animationState: AnimationState;
  companionName?: string;
  companionRole?: string;
  className?: string;
}

export const CompanionCharacter: React.FC<CompanionCharacterProps> = ({
  character,
  animationState,
  companionName = 'Priya',
  companionRole = 'Digital Companion',
  className = ''
}) => {
  const isHappy = animationState === 'safe_celebrating' || animationState === 'family_cheer';
  const isConcerned = animationState === 'consequence_concerned' || animationState === 'realising_mistake';
  const isThinking = animationState === 'thinking';

  return (
    <div
      className={`h-full min-h-[380px] sm:min-h-[440px] flex flex-col justify-between items-center bg-gradient-to-b from-[#E8F5EE] via-[#F6F8F6] to-[#E8F5EE]/70 rounded-2xl border border-[#DCECE3] p-4 relative overflow-hidden select-none ${className}`}
    >
      {/* Background ambient room lines & window */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <svg className="w-full h-full" viewBox="0 0 200 450" fill="none" preserveAspectRatio="none">
          <circle cx="160" cy="80" r="50" fill="#DCECE3" />
          <rect x="20" y="40" width="60" height="90" rx="4" stroke="#DCECE3" strokeWidth="2" fill="#FFFFFF" opacity="0.6" />
          <line x1="50" y1="40" x2="50" y2="130" stroke="#DCECE3" strokeWidth="1.5" />
          <line x1="20" y1="85" x2="80" y2="85" stroke="#DCECE3" strokeWidth="1.5" />
          <path d="M160 380 Q180 340 190 350 Q170 330 160 380" fill="#123C35" opacity="0.2" />
        </svg>
      </div>

      {/* Top: Companion Identity Badge & Status */}
      <div className="w-full relative z-10 flex items-center justify-between gap-2 pb-2">
        <div className="flex flex-col">
          <span className="text-xs font-bold text-[#172B4D] tracking-tight">{companionName}</span>
          <span className="text-[10px] text-[#53615C] font-medium">{companionRole}</span>
        </div>
        <div>
          {isHappy ? (
            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-emerald-100 border border-emerald-300 px-2 py-0.5 rounded-full animate-bounce">
              <span>🎉</span> Safe Move
            </span>
          ) : isConcerned ? (
            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-800 bg-amber-100 border border-amber-300 px-2 py-0.5 rounded-full animate-pulse">
              <span>⚠️</span> Alert
            </span>
          ) : isThinking ? (
            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-800 bg-blue-100 border border-blue-200 px-2 py-0.5 rounded-full">
              <span>🔍</span> Inspecting
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#123C35] bg-white/90 border border-[#DCECE3] px-2 py-0.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Attentive
            </span>
          )}
        </div>
      </div>

      {/* Center: Tall Standing / Reacting Character SVG (Approx 1:3 ratio) */}
      <div className="w-full flex-1 flex items-center justify-center relative z-10 py-2">
        <svg
          viewBox="0 0 160 320"
          className="w-full h-auto max-h-[300px] sm:max-h-[340px]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Floor Shadow */}
          <ellipse cx="80" cy="305" rx="55" ry="8" fill="#172B4D" opacity="0.1" />

          {/* Character Group */}
          <g transform="translate(10, 10)">
            {/* Hair Back */}
            <path d="M42 40 C42 16, 98 16, 98 40 C98 60, 92 70, 70 70 C48 70, 42 60, 42 40 Z" fill="#201A18" />
            <circle cx="70" cy="20" r="12" fill="#201A18" />

            {/* Head & Neck */}
            <rect x="65" y="70" width="10" height="15" fill="#D49A6A" />
            <ellipse cx="70" cy="46" rx="22" ry="26" fill="#D49A6A" />
            <ellipse cx="70" cy="48" rx="19" ry="22" fill="#E8B88A" />

            {/* Facial Features */}
            <circle cx="70" cy="38" r="1.5" fill="#8B0000" /> {/* Bindi */}
            {isConcerned ? (
              <>
                <circle cx="61" cy="46" r="3.5" fill="#FFFFFF" />
                <circle cx="61" cy="46" r="2" fill="#1C1816" />
                <circle cx="79" cy="46" r="3.5" fill="#FFFFFF" />
                <circle cx="79" cy="46" r="2" fill="#1C1816" />
                <path d="M57 40 Q62 38 67 41" stroke="#1C1816" strokeWidth="1.5" fill="none" />
                <path d="M73 41 Q78 38 83 40" stroke="#1C1816" strokeWidth="1.5" fill="none" />
                <ellipse cx="70" cy="58" rx="3" ry="4.5" fill="#8B0000" />
              </>
            ) : isHappy ? (
              <>
                <path d="M58 45 Q62 41 66 45" stroke="#1C1816" strokeWidth="2" strokeLinecap="round" fill="none" />
                <path d="M74 45 Q78 41 82 45" stroke="#1C1816" strokeWidth="2" strokeLinecap="round" fill="none" />
                <path d="M62 53 Q70 62 78 53 Z" fill="#FFFFFF" stroke="#1C1816" strokeWidth="1.2" />
                <circle cx="56" cy="50" r="2.5" fill="#F87171" opacity="0.4" />
                <circle cx="84" cy="50" r="2.5" fill="#F87171" opacity="0.4" />
              </>
            ) : (
              <>
                <circle cx="62" cy="46" r="2" fill="#1C1816" />
                <circle cx="78" cy="46" r="2" fill="#1C1816" />
                <path d="M63 54 Q70 58 77 54" stroke="#1C1816" strokeWidth="1.5" strokeLinecap="round" fill="none" />
              </>
            )}

            {/* Torso & Dress (Forest Green Kurti with soft sage embroidery) */}
            <path d="M48 84 L92 84 L102 185 L38 185 Z" fill="#123C35" />
            <path d="M70 84 L70 145" stroke="#DCECE3" strokeWidth="2" strokeLinecap="round" />
            <path d="M58 84 L70 100 L82 84" stroke="#DCECE3" strokeWidth="1.5" fill="none" />

            {/* Trousers / Salwar & Shoes */}
            <path d="M46 185 L58 185 L54 285 L44 285 Z" fill="#172B4D" />
            <path d="M82 185 L94 185 L96 285 L86 285 Z" fill="#172B4D" />
            <ellipse cx="48" cy="288" rx="9" ry="4" fill="#201A18" />
            <ellipse cx="92" cy="288" rx="9" ry="4" fill="#201A18" />

            {/* Arms & Hands based on state */}
            {isHappy ? (
              /* Celebrating / Thumbs Up / Clapping */
              <g className="animate-bounce">
                <path d="M42 96 Q24 75 32 50" stroke="#D49A6A" strokeWidth="7" strokeLinecap="round" />
                <path d="M98 96 Q116 75 108 50" stroke="#D49A6A" strokeWidth="7" strokeLinecap="round" />
                <circle cx="32" cy="48" r="5.5" fill="#D49A6A" />
                <circle cx="108" cy="48" r="5.5" fill="#D49A6A" />
                {/* Sparkles */}
                <path d="M22 30 L26 30 L24 25 Z" fill="#10B981" />
                <path d="M116 30 L120 30 L118 25 Z" fill="#10B981" />
              </g>
            ) : isConcerned ? (
              /* Surprised hands to cheeks */
              <g>
                <path d="M42 98 Q30 75 50 60" stroke="#D49A6A" strokeWidth="7" strokeLinecap="round" />
                <path d="M98 98 Q110 75 90 60" stroke="#D49A6A" strokeWidth="7" strokeLinecap="round" />
                <circle cx="50" cy="58" r="5" fill="#D49A6A" />
                <circle cx="90" cy="58" r="5" fill="#D49A6A" />
              </g>
            ) : isThinking ? (
              /* Hand to chin + magnifying glass */
              <g>
                <path d="M44 98 Q34 82 58 66" stroke="#D49A6A" strokeWidth="7" strokeLinecap="round" />
                <circle cx="60" cy="64" r="5" fill="#D49A6A" />
                <path d="M96 98 Q106 115 88 125" stroke="#D49A6A" strokeWidth="7" strokeLinecap="round" />
                {/* Magnifying Glass */}
                <circle cx="98" cy="80" r="10" stroke="#123C35" strokeWidth="2.5" fill="#E8F5EE" />
                <line x1="105" y1="87" x2="114" y2="96" stroke="#123C35" strokeWidth="3" strokeLinecap="round" />
              </g>
            ) : (
              /* Holding smartphone attentively */
              <g>
                <path d="M46 96 Q56 115 64 118" stroke="#D49A6A" strokeWidth="7" strokeLinecap="round" />
                <path d="M94 96 Q84 115 76 118" stroke="#D49A6A" strokeWidth="7" strokeLinecap="round" />
                {/* Phone */}
                <rect x="62" y="100" width="16" height="28" rx="2.5" fill="#172B4D" stroke="#324564" strokeWidth="1" />
                <rect x="64" y="102" width="12" height="20" rx="1.5" fill="#38BDF8" opacity="0.9" />
                <circle cx="70" cy="125" r="0.8" fill="#FFFFFF" />
              </g>
            )}
          </g>
        </svg>
      </div>

      {/* Bottom: Companion reaction thought bubble */}
      <div className="w-full relative z-10 pt-2 border-t border-[#DCECE3]/80 text-center">
        <p className="text-[11px] leading-snug font-medium text-[#172B4D]">
          {isHappy
            ? '“Well done! Pausing to verify kept our data and funds completely safe.”'
            : isConcerned
            ? '“Notice the urgency pressure? Scammers use panic to bypass verification.”'
            : isThinking
            ? '“Take a second to inspect the sender address and true link destination.”'
            : '“I’m right here with you. Look closely before making your choice.”'}
        </p>
      </div>
    </div>
  );
};

export const CharacterScene: React.FC<{
  character: CharacterType;
  animationState: AnimationState;
  settingName?: string;
  className?: string;
}> = ({ character, animationState, settingName, className = '' }) => {
  return (
    <CompanionCharacter
      character={character}
      animationState={animationState}
      companionName={character === 'working_professional' ? 'Arun' : 'Priya'}
      companionRole={character === 'working_professional' ? 'Forensic Analyst' : 'Everyday Guide'}
      className={className}
    />
  );
};
