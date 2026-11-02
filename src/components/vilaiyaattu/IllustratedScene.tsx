import React, { useState } from 'react';
import {
  Lock,
  Shield,
  KeyRound,
  AlertTriangle,
  CheckCircle2,
  ChevronRight,
  PhoneCall,
  PhoneOff,
  Video,
  Monitor,
  Heart,
  Clock,
  Smile,
  Gift,
  Building,
  Smartphone,
  Check,
  X,
  CreditCard,
  QrCode,
  Download,
  ArrowUp,
  ArrowDown,
  HelpCircle,
  RotateCcw,
  Square,
  CheckSquare,
  Send
} from 'lucide-react';
import {
  DetailedPuzzleData,
  PuzzleOption,
  MatchingPair,
  OrderingStep
} from '../../data/puzzlesBank100.ts';

export interface VisualSceneProps {
  puzzle: DetailedPuzzleData;
  sceneType: DetailedPuzzleData['sceneType'];
  characterId: 'arun' | 'priya' | 'thatha' | 'rohan' | 'maya' | 'sam';
  characterEmotion: 'curious' | 'celebrating' | 'cautious';
  selectedId: string | null;
  selectedIds: string[];
  matchedPairs: Record<string, string>;
  activeLeftMatch: string | null;
  orderedStepIds: string[];
  textAnswer: string;
  isSolved: boolean;
  isCorrect: boolean | null;
  onSelectOption: (id: string) => void;
  onToggleOption: (id: string) => void;
  onSubmitMultiSelect: () => void;
  onClearMultiSelect: () => void;
  onSelectLeftMatch: (leftId: string) => void;
  onSelectRightMatch: (rightId: string) => void;
  onSubmitMatching: () => void;
  onMoveStep: (stepId: string, direction: 'up' | 'down') => void;
  onSubmitOrdering: () => void;
  onChangeText: (text: string) => void;
  onSubmitText: () => void;
}

// Character Caricature Renderer
const CharacterCaricature: React.FC<{
  characterId: 'arun' | 'priya' | 'thatha' | 'rohan' | 'maya' | 'sam';
  emotion: 'curious' | 'celebrating' | 'cautious';
  sublabel?: string;
}> = ({ characterId, emotion, sublabel }) => {
  const isHappy = emotion === 'celebrating';

  switch (characterId) {
    case 'priya':
      return (
        <div className="w-32 sm:w-40 shrink-0 flex flex-col items-center">
          <svg viewBox="0 0 160 170" className="w-full h-auto drop-shadow-md">
            <g transform="translate(10, 5)">
              <circle cx="70" cy="22" r="18" fill="#1C1816" />
              <ellipse cx="70" cy="52" rx="26" ry="29" fill="#DE9F70" />
              <ellipse cx="58" cy="50" rx="9" ry="11" fill="#FFFFFF" stroke="#1C1816" strokeWidth="2.5" />
              <ellipse cx="82" cy="50" rx="9" ry="11" fill="#FFFFFF" stroke="#1C1816" strokeWidth="2.5" />
              <circle cx="61" cy="51" r="5" fill="#1C1816" />
              <circle cx="85" cy="51" r="5" fill="#1C1816" />
              <circle cx="59" cy="49" r="1.8" fill="#FFFFFF" />
              <circle cx="83" cy="49" r="1.8" fill="#FFFFFF" />
              <path d="M50,40 Q58,34 66,40" stroke="#1C1816" strokeWidth="3" strokeLinecap="round" fill="none" />
              <path d="M74,40 Q82,34 90,40" stroke="#1C1816" strokeWidth="3" strokeLinecap="round" fill="none" />
              {isHappy ? (
                <path d="M58,64 Q70,78 82,64 Z" fill="#FFFFFF" stroke="#1C1816" strokeWidth="2.5" />
              ) : (
                <path d="M60,65 Q70,72 80,65" stroke="#1C1816" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              )}
              <path d="M30,105 C30,82 110,82 110,105 L120,175 L20,175 Z" fill="#123C35" />
            </g>
          </svg>
          <div className="text-center mt-1">
            <span className="text-xs font-bold text-[#172B4D] block">Priya</span>
            <span className="text-[10px] text-[#53615C]">{sublabel || 'Digital Professional'}</span>
          </div>
        </div>
      );

    case 'thatha':
      return (
        <div className="w-32 sm:w-40 shrink-0 flex flex-col items-center">
          <svg viewBox="0 0 160 170" className="w-full h-auto drop-shadow-md">
            <g transform="translate(10, 5)">
              <path d="M34,44 C34,18 96,18 96,44 C88,24 42,24 34,44 Z" fill="#B0B8B4" />
              <ellipse cx="65" cy="50" rx="26" ry="28" fill="#D8A072" />
              <circle cx="53" cy="48" r="9" stroke="#704214" strokeWidth="2.5" fill="none" />
              <circle cx="77" cy="48" r="9" stroke="#704214" strokeWidth="2.5" fill="none" />
              <line x1="62" y1="48" x2="68" y2="48" stroke="#704214" strokeWidth="2" />
              <path d="M50,62 Q65,68 80,62 Q65,58 50,62 Z" fill="#4B3E36" />
              {isHappy ? (
                <path d="M54,67 Q65,75 76,67" stroke="#1C1816" strokeWidth="2" strokeLinecap="round" fill="none" />
              ) : (
                <path d="M56,70 Q65,65 74,70" stroke="#1C1816" strokeWidth="2" strokeLinecap="round" fill="none" />
              )}
              <path d="M25,100 C25,75 105,75 105,100 L115,160 L15,160 Z" fill="#F4EDE2" stroke="#D8C7B2" strokeWidth="2" />
            </g>
          </svg>
          <div className="text-center mt-1">
            <span className="text-xs font-bold text-[#172B4D] block">Thatha</span>
            <span className="text-[10px] text-[#53615C]">{sublabel || 'Wise Elder'}</span>
          </div>
        </div>
      );

    case 'rohan':
      return (
        <div className="w-32 sm:w-40 shrink-0 flex flex-col items-center">
          <svg viewBox="0 0 160 170" className="w-full h-auto drop-shadow-md">
            <g transform="translate(10, 5)">
              <path d="M30,46 C30,18 90,18 90,46" stroke="#172B4D" strokeWidth="5" strokeLinecap="round" />
              <path d="M36,42 C36,22 84,22 84,42 C78,26 42,26 36,42 Z" fill="#1C1816" />
              <ellipse cx="60" cy="48" rx="21" ry="23" fill="#D8A072" />
              <ellipse cx="51" cy="47" rx="3.5" ry="4" fill="#1C1816" />
              <ellipse cx="69" cy="47" rx="3.5" ry="4" fill="#1C1816" />
              {isHappy ? (
                <path d="M50,56 Q60,66 70,56" stroke="#1C1816" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              ) : (
                <ellipse cx="60" cy="58" rx="6" ry="4" fill="#1C1816" />
              )}
              <path d="M28,98 C28,78 92,78 92,98 Z" fill="#15803D" />
            </g>
          </svg>
          <div className="text-center mt-1">
            <span className="text-xs font-bold text-[#172B4D] block">Rohan</span>
            <span className="text-[10px] text-[#53615C]">{sublabel || 'Young Learner'}</span>
          </div>
        </div>
      );

    case 'maya':
      return (
        <div className="w-32 sm:w-40 shrink-0 flex flex-col items-center">
          <svg viewBox="0 0 160 170" className="w-full h-auto drop-shadow-md">
            <g transform="translate(10, 5)">
              <circle cx="70" cy="22" r="18" fill="#1C1816" />
              <ellipse cx="70" cy="52" rx="26" ry="29" fill="#DE9F70" />
              <ellipse cx="58" cy="50" rx="9" ry="11" fill="#FFFFFF" stroke="#1C1816" strokeWidth="2.5" />
              <ellipse cx="82" cy="50" rx="9" ry="11" fill="#FFFFFF" stroke="#1C1816" strokeWidth="2.5" />
              <circle cx="61" cy="51" r="5" fill="#1C1816" />
              <circle cx="85" cy="51" r="5" fill="#1C1816" />
              {isHappy ? (
                <path d="M58,64 Q70,78 82,64 Z" fill="#FFFFFF" stroke="#1C1816" strokeWidth="2.5" />
              ) : (
                <path d="M60,65 Q70,72 80,65" stroke="#1C1816" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              )}
              <path d="M30,105 C30,82 110,82 110,105 L120,175 L20,175 Z" fill="#D97706" />
            </g>
          </svg>
          <div className="text-center mt-1">
            <span className="text-xs font-bold text-[#172B4D] block">Maya</span>
            <span className="text-[10px] text-[#53615C]">{sublabel || 'Smart Shopper'}</span>
          </div>
        </div>
      );

    case 'sam':
      return (
        <div className="w-32 sm:w-40 shrink-0 flex flex-col items-center">
          <svg viewBox="0 0 160 170" className="w-full h-auto drop-shadow-md">
            <g transform="translate(10, 5)">
              <path d="M35,42 C35,18 95,18 95,42 Z" fill="#2563EB" />
              <ellipse cx="65" cy="52" rx="24" ry="26" fill="#E8B084" />
              <ellipse cx="55" cy="50" rx="4" ry="5" fill="#1C1816" />
              <ellipse cx="75" cy="50" rx="4" ry="5" fill="#1C1816" />
              {isHappy ? (
                <path d="M56,62 Q65,72 74,62" stroke="#1C1816" strokeWidth="2" strokeLinecap="round" fill="none" />
              ) : (
                <path d="M56,66 Q65,60 74,66" stroke="#1C1816" strokeWidth="2" strokeLinecap="round" fill="none" />
              )}
              <path d="M25,102 C25,78 105,78 105,102 L115,165 L15,165 Z" fill="#475569" />
            </g>
          </svg>
          <div className="text-center mt-1">
            <span className="text-xs font-bold text-[#172B4D] block">Sam</span>
            <span className="text-[10px] text-[#53615C]">{sublabel || 'Cautious User'}</span>
          </div>
        </div>
      );

    case 'arun':
    default:
      return (
        <div className="w-32 sm:w-40 shrink-0 flex flex-col items-center">
          <svg viewBox="0 0 160 170" className="w-full h-auto drop-shadow-md">
            <g transform="translate(10, 5)">
              <path d="M40,55 C20,30 35,0 75,5 C105,5 125,25 115,55 C125,40 135,55 120,70 C100,50 60,50 40,55 Z" fill="#1F1A17" />
              <ellipse cx="70" cy="75" rx="35" ry="38" fill="#E8B084" />
              <ellipse cx="56" cy="70" rx="10" ry="12" fill="#FFFFFF" stroke="#1F1A17" strokeWidth="2.5" />
              <ellipse cx="84" cy="70" rx="10" ry="12" fill="#FFFFFF" stroke="#1F1A17" strokeWidth="2.5" />
              <circle cx="60" cy="71" r="5.5" fill="#1F1A17" />
              <circle cx="88" cy="71" r="5.5" fill="#1F1A17" />
              {isHappy ? (
                <path d="M58,90 Q70,105 82,90 Z" fill="#FFFFFF" stroke="#1F1A17" strokeWidth="2.5" />
              ) : (
                <ellipse cx="70" cy="92" rx="7" ry="9" fill="#1F1A17" />
              )}
              <path d="M30,130 C30,105 110,105 110,130 L125,180 L15,180 Z" fill="#F97316" />
            </g>
          </svg>
          <div className="text-center mt-1">
            <span className="text-xs font-bold text-[#172B4D] block">Arun</span>
            <span className="text-[10px] text-[#53615C]">{sublabel || 'Tech Explorer'}</span>
          </div>
        </div>
      );
  }
};

export const IllustratedScene: React.FC<VisualSceneProps> = ({
  puzzle,
  sceneType,
  characterId,
  characterEmotion,
  selectedId,
  selectedIds,
  matchedPairs,
  activeLeftMatch,
  orderedStepIds,
  textAnswer,
  isSolved,
  isCorrect,
  onSelectOption,
  onToggleOption,
  onSubmitMultiSelect,
  onClearMultiSelect,
  onSelectLeftMatch,
  onSelectRightMatch,
  onSubmitMatching,
  onMoveStep,
  onSubmitOrdering,
  onChangeText,
  onSubmitText
}) => {
  const payload = puzzle.scenePayload || {};
  const isMultiSelect =
    puzzle.interactionType === 'multi-select' ||
    (puzzle.correctTargetIds && puzzle.correctTargetIds.length > 1) ||
    sceneType === 'symptoms_checklist';

  // Fallback options for symptoms if not in puzzle definition
  const symptomsOptions: PuzzleOption[] =
    puzzle.options && puzzle.options.length > 0
      ? puzzle.options
      : [
          { id: 'urgent_deadline', label: 'Urgent deadline', isSign: true },
          { id: 'friendly_greeting', label: 'Friendly greeting', isSign: false },
          { id: 'unrealistic_offer', label: 'Unrealistic offer', isSign: true },
          { id: 'company_name', label: 'Proper company name', isSign: false }
        ];

  const targetIdsList =
    puzzle.correctTargetIds && puzzle.correctTargetIds.length > 0
      ? puzzle.correctTargetIds
      : puzzle.correctTargetId
      ? [puzzle.correctTargetId]
      : ['urgent_deadline', 'unrealistic_offer'];

  return (
    <div className="relative w-full h-full min-h-[390px] sm:min-h-[460px] rounded-2xl overflow-hidden bg-gradient-to-br from-[#FDF7E7] via-[#FAF0E4] to-[#E5EFE9] border-2 border-[#E8EEEA] shadow-inner flex items-center justify-center p-3 sm:p-5 select-none">
      {/* Background Room Ambience */}
      <div className="absolute inset-0 pointer-events-none opacity-35">
        <svg className="w-full h-full" viewBox="0 0 600 400" preserveAspectRatio="none">
          <polygon points="30,10 200,5 180,290 10,295" fill="#FFFFFF" opacity="0.4" />
          <line x1="430" y1="85" x2="590" y2="85" stroke="#CBB49E" strokeWidth="5" strokeLinecap="round" />
          <line x1="450" y1="150" x2="595" y2="150" stroke="#CBB49E" strokeWidth="5" strokeLinecap="round" />
          <rect x="445" y="52" width="15" height="33" rx="3" fill="#123C35" opacity="0.45" />
          <rect x="465" y="47" width="14" height="38" rx="3" fill="#E86C45" opacity="0.55" />
          <rect x="483" y="55" width="17" height="30" rx="3" fill="#D8A84E" opacity="0.55" />
        </svg>
      </div>

      {/* =====================================================================
          1. SPOT THE SYMPTOMS (TRUE MULTI-SELECT WITH CHECK ANSWERS)
          ===================================================================== */}
      {sceneType === 'symptoms_checklist' && (
        <div className="relative z-10 w-full h-full flex flex-col sm:flex-row items-center justify-between gap-4">
          <CharacterCaricature
            characterId={characterId}
            emotion={characterEmotion}
            sublabel="Evaluating Red Flags"
          />

          {/* Interactive Multi-Select Options Card */}
          <div className="flex-1 max-w-[310px] sm:max-w-[340px] bg-white rounded-3xl border-3 border-[#172B4D] shadow-xl overflow-hidden p-3.5 space-y-2.5">
            <div className="flex items-center justify-between border-b border-[#E8EEEA] pb-2">
              <span className="text-xs font-bold text-[#172B4D]">Check all that apply</span>
              <span className="text-[10px] font-bold text-[#53615C] bg-[#F6F8F6] px-2 py-0.5 rounded-full border border-[#E8EEEA]">
                {selectedIds.length} selected
              </span>
            </div>

            <div className="space-y-1.5">
              {symptomsOptions.map((symp) => {
                const isSelected = selectedIds.includes(symp.id);
                const isTarget = targetIdsList.includes(symp.id);

                let cardStyle = 'bg-white border-[#E8EEEA] text-[#172B4D] hover:border-[#172B4D]/60';
                let badgeText: string | null = null;
                let badgeClass = '';

                if (!isSolved) {
                  // STRICTLY NEUTRAL: No green or red before the player clicks "Check Answers"!
                  if (isSelected) {
                    cardStyle = 'bg-[#172B4D]/5 border-[#172B4D] ring-2 ring-[#172B4D]/30 text-[#172B4D]';
                  }
                } else {
                  // Evaluated results after submission
                  if (isSelected && isTarget) {
                    cardStyle = 'bg-emerald-50 border-emerald-600 ring-2 ring-emerald-500 text-emerald-950 font-bold';
                    badgeText = '✓ Correct Red Flag';
                    badgeClass = 'bg-emerald-100 text-emerald-800';
                  } else if (isSelected && !isTarget) {
                    cardStyle = 'bg-rose-50 border-rose-600 ring-2 ring-rose-500 text-rose-950 font-bold';
                    badgeText = '✗ Not a red flag';
                    badgeClass = 'bg-rose-100 text-rose-800';
                  } else if (!isSelected && isTarget) {
                    cardStyle = 'bg-amber-50/70 border-2 border-dashed border-amber-500 text-amber-950';
                    badgeText = '! Missed Sign';
                    badgeClass = 'bg-amber-100 text-amber-900';
                  } else {
                    cardStyle = 'bg-[#F6F8F6] border-[#E8EEEA] opacity-50 text-[#53615C]';
                  }
                }

                return (
                  <button
                    key={symp.id}
                    type="button"
                    disabled={isSolved}
                    onClick={() => onToggleOption(symp.id)}
                    className={`w-full p-2.5 rounded-xl border-2 text-left flex items-center justify-between gap-2 transition-all cursor-pointer ${cardStyle}`}
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <div className="shrink-0">
                        {isSelected ? (
                          <div className={`w-4 h-4 rounded flex items-center justify-center text-white ${
                            !isSolved
                              ? 'bg-[#172B4D]'
                              : isTarget
                              ? 'bg-emerald-600'
                              : 'bg-rose-600'
                          }`}>
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                        ) : (
                          <div className={`w-4 h-4 rounded border-2 ${
                            isSolved && isTarget
                              ? 'border-dashed border-amber-500 bg-amber-100'
                              : 'border-[#8C9B95] bg-white'
                          }`} />
                        )}
                      </div>
                      <span className="text-xs font-semibold leading-tight break-words">{symp.label}</span>
                    </div>

                    {badgeText && (
                      <span className={`text-[9px] font-black px-1.5 py-0.5 rounded shrink-0 ${badgeClass}`}>
                        {badgeText}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Check Answers & Clear Selection Buttons */}
            {!isSolved ? (
              <div className="pt-2 flex items-center gap-2 border-t border-[#E8EEEA]">
                <button
                  type="button"
                  disabled={selectedIds.length === 0}
                  onClick={onSubmitMultiSelect}
                  className={`flex-1 py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer ${
                    selectedIds.length > 0
                      ? 'bg-[#123C35] text-white hover:bg-[#0D2B26] active:scale-98'
                      : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>Check Answers</span>
                </button>

                {selectedIds.length > 0 && (
                  <button
                    type="button"
                    onClick={onClearMultiSelect}
                    className="p-2 rounded-xl text-xs font-semibold text-[#53615C] hover:text-[#172B4D] hover:bg-[#F6F8F6] border border-[#E8EEEA] transition-colors cursor-pointer"
                    title="Clear selection"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            ) : (
              <div className="pt-2 border-t border-[#E8EEEA]">
                <div className={`p-2 rounded-xl text-center text-[11px] font-bold ${
                  isCorrect
                    ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                    : 'bg-rose-100 text-rose-900 border border-rose-300'
                }`}>
                  {isCorrect
                    ? '✓ Spot on! All symptoms identified.'
                    : '⚠️ Some signs were missed or incorrect.'}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* =====================================================================
          2. ROMANCE SCAMS & ONLINE RELATIONSHIPS
          ===================================================================== */}
      {sceneType === 'romance_scam_chat' && (
        <div className="relative z-10 w-full h-full flex flex-col sm:flex-row items-center justify-between gap-4">
          <CharacterCaricature
            characterId={characterId}
            emotion={characterEmotion}
            sublabel="Chatting Online"
          />

          <div className="flex-1 max-w-[280px] sm:max-w-[310px] bg-white rounded-3xl border-3 border-[#172B4D] shadow-xl overflow-hidden p-3 space-y-2.5">
            <div className="flex items-center gap-2 border-b border-[#E8EEEA] pb-2">
              <div className="w-8 h-8 rounded-full bg-rose-100 border border-rose-300 flex items-center justify-center font-bold text-xs text-rose-700">
                👤
              </div>
              <div>
                <span className="text-xs font-bold text-[#172B4D] block">
                  {payload.contactName || 'Alex'}
                </span>
                <span className="text-[9px] text-emerald-600 font-bold">● Online</span>
              </div>
            </div>

            <button
              type="button"
              disabled={isSolved}
              onClick={() => onSelectOption('chat_sweet')}
              className={`w-full p-2.5 rounded-xl text-left border-2 transition-all cursor-pointer ${
                !isSolved
                  ? 'bg-[#F6F8F6] border-[#E8EEEA] hover:border-[#172B4D]'
                  : selectedId === 'chat_sweet'
                  ? 'bg-rose-50 border-rose-600 ring-2 ring-rose-500 text-rose-950'
                  : 'bg-[#F6F8F6] border-[#E8EEEA] opacity-60'
              }`}
            >
              <p className="text-xs text-[#172B4D]">
                {payload.chatBubble1 || 'You are so special ❤️ I really care about you.'}
              </p>
            </button>

            {/* Target warning */}
            <button
              type="button"
              disabled={isSolved}
              onClick={() => onSelectOption('chat_money')}
              className={`w-full p-2.5 rounded-xl text-left border-2 transition-all cursor-pointer ${
                !isSolved
                  ? 'bg-[#F6F8F6] border-[#E8EEEA] hover:border-[#172B4D]'
                  : selectedId === 'chat_money'
                  ? 'bg-emerald-50 border-emerald-600 ring-2 ring-emerald-500 text-emerald-950 shadow-sm'
                  : 'bg-emerald-50/40 border-emerald-300'
              }`}
            >
              {isSolved && (
                <div className="flex items-center justify-between text-[10px] font-bold text-emerald-800 mb-0.5">
                  <span>Emergency Demand:</span>
                  <span className="text-emerald-700 font-black">✓ RED FLAG SPOTTED</span>
                </div>
              )}
              <p className="text-xs font-semibold text-[#172B4D] leading-snug">
                {payload.chatBubble2 ||
                  "I'm in a difficult emergency right now. Can you send ₹50,000 to help me? I'll pay you back soon."}
              </p>
            </button>

            <button
              type="button"
              disabled={isSolved}
              onClick={() => onSelectOption('chat_end')}
              className={`w-full p-2 rounded-xl text-left border-2 transition-all cursor-pointer ${
                !isSolved
                  ? 'bg-[#F6F8F6] border-[#E8EEEA] hover:border-[#172B4D]'
                  : selectedId === 'chat_end'
                  ? 'bg-rose-50 border-rose-600 ring-2 ring-rose-500 text-rose-950'
                  : 'bg-[#F6F8F6] border-[#E8EEEA] opacity-60'
              }`}
            >
              <p className="text-xs text-[#172B4D]">
                {payload.chatBubble3 || 'I love you ❤️'}
              </p>
            </button>
          </div>
        </div>
      )}

      {/* =====================================================================
          3. VIDEO CALL SCAMS & IMPERSONATION
          ===================================================================== */}
      {sceneType === 'video_call_inspect' && (
        <div className="relative z-10 w-full h-full flex flex-col sm:flex-row items-center justify-between gap-4">
          <CharacterCaricature
            characterId={characterId}
            emotion={characterEmotion}
            sublabel="Unexpected Video Call"
          />

          <div className="flex-1 max-w-[290px] sm:max-w-[320px] bg-white rounded-3xl border-3 border-[#172B4D] shadow-xl overflow-hidden p-3.5 space-y-2">
            <div className="relative h-28 bg-slate-800 rounded-2xl overflow-hidden flex items-center justify-center border-2 border-slate-700">
              <div className="w-16 h-16 rounded-full bg-slate-600 flex items-center justify-center text-3xl opacity-80">
                👤
              </div>
              <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-xs text-white text-[9px] px-2 py-0.5 rounded-full flex items-center gap-1">
                <Video className="w-3 h-3 text-rose-500" />
                <span>Caller (Unknown)</span>
              </div>
            </div>

            <div className="space-y-1.5 pt-1">
              <button
                type="button"
                disabled={isSolved}
                onClick={() => onSelectOption('screen_sharing')}
                className={`w-full p-2.5 rounded-xl text-left border-2 text-xs font-bold transition-all cursor-pointer flex items-center justify-between ${
                  !isSolved
                    ? 'bg-[#F6F8F6] border-[#E8EEEA] hover:border-[#172B4D]'
                    : selectedId === 'screen_sharing'
                    ? 'bg-emerald-50 border-emerald-600 ring-2 ring-emerald-500 text-emerald-950 shadow-sm'
                    : 'bg-emerald-50/40 border-emerald-300'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Monitor className={`w-4 h-4 ${isSolved ? 'text-emerald-700' : 'text-[#172B4D]'}`} />
                  <span>🖥️ Screen sharing requested</span>
                </div>
                {isSolved && <span className="text-[10px] text-emerald-700 font-black">✓ UNSAFE</span>}
              </button>

              <button
                type="button"
                disabled={isSolved}
                onClick={() => onSelectOption('end_call')}
                className={`w-full p-2 rounded-xl text-left border-2 text-xs font-bold transition-all cursor-pointer flex items-center justify-between ${
                  !isSolved
                    ? 'bg-[#F6F8F6] border-[#E8EEEA] hover:border-[#172B4D]'
                    : selectedId === 'end_call'
                    ? 'bg-rose-50 border-rose-600 ring-2 ring-rose-500 text-rose-950'
                    : 'bg-[#F6F8F6] border-[#E8EEEA] opacity-60'
                }`}
              >
                <span>📞 End call</span>
              </button>

              <button
                type="button"
                disabled={isSolved}
                onClick={() => onSelectOption('video_on')}
                className={`w-full p-2 rounded-xl text-left border-2 text-xs font-bold transition-all cursor-pointer flex items-center justify-between ${
                  !isSolved
                    ? 'bg-[#F6F8F6] border-[#E8EEEA] hover:border-[#172B4D]'
                    : selectedId === 'video_on'
                    ? 'bg-rose-50 border-rose-600 ring-2 ring-rose-500 text-rose-950'
                    : 'bg-[#F6F8F6] border-[#E8EEEA] opacity-60'
                }`}
              >
                <span>📹 Video on</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          4. INTERACTIVE MATCHING (LEFT TO RIGHT CONNECTION)
          ===================================================================== */}
      {sceneType === 'interactive_matching' && (
        <div className="relative z-10 w-full h-full flex flex-col sm:flex-row items-center justify-between gap-4">
          <CharacterCaricature
            characterId={characterId}
            emotion={characterEmotion}
            sublabel="Matching Safety Concepts"
          />

          <div className="flex-1 max-w-[340px] bg-white rounded-3xl border-3 border-[#172B4D] shadow-xl overflow-hidden p-3.5 space-y-2.5">
            <div className="border-b border-[#E8EEEA] pb-2 flex items-center justify-between">
              <span className="text-xs font-bold text-[#172B4D]">Connect Pairs</span>
              <span className="text-[10px] text-[#53615C]">
                {Object.keys(matchedPairs).length} / {puzzle.matchingPairs?.length || 3} matched
              </span>
            </div>

            <div className="space-y-2">
              {(puzzle.matchingPairs || []).map((pair) => {
                const isMatched = matchedPairs[pair.leftId] === pair.rightId;
                const isLeftSelected = activeLeftMatch === pair.leftId;

                return (
                  <div key={pair.leftId} className="flex items-center gap-2">
                    {/* Left Button */}
                    <button
                      type="button"
                      disabled={isSolved}
                      onClick={() => onSelectLeftMatch(pair.leftId)}
                      className={`flex-1 p-2 rounded-xl border-2 text-left text-xs font-bold transition-all cursor-pointer ${
                        !isSolved
                          ? isLeftSelected
                            ? 'bg-[#172B4D] text-white border-[#172B4D]'
                            : matchedPairs[pair.leftId]
                            ? 'bg-emerald-50 border-emerald-400 text-emerald-950'
                            : 'bg-[#F6F8F6] border-[#E8EEEA] text-[#172B4D] hover:border-[#172B4D]'
                          : isMatched
                          ? 'bg-emerald-50 border-emerald-600 text-emerald-950 font-bold'
                          : 'bg-rose-50 border-rose-500 text-rose-950'
                      }`}
                    >
                      {pair.leftText}
                    </button>

                    <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />

                    {/* Right Button */}
                    <button
                      type="button"
                      disabled={isSolved}
                      onClick={() => onSelectRightMatch(pair.rightId)}
                      className={`flex-1 p-2 rounded-xl border-2 text-left text-xs font-semibold transition-all cursor-pointer ${
                        !isSolved
                          ? Object.values(matchedPairs).includes(pair.rightId)
                            ? 'bg-emerald-50 border-emerald-400 text-emerald-950'
                            : 'bg-[#F6F8F6] border-[#E8EEEA] text-[#172B4D] hover:border-[#172B4D]'
                          : isMatched
                          ? 'bg-emerald-50 border-emerald-600 text-emerald-950 font-bold'
                          : 'bg-rose-50 border-rose-500 text-rose-950'
                      }`}
                    >
                      {pair.rightText}
                    </button>
                  </div>
                );
              })}
            </div>

            {!isSolved ? (
              <button
                type="button"
                onClick={onSubmitMatching}
                className="w-full mt-2 py-2.5 rounded-xl font-bold text-xs bg-[#123C35] text-white hover:bg-[#0D2B26] transition-all cursor-pointer shadow-xs flex items-center justify-center gap-1.5"
              >
                <Check className="w-3.5 h-3.5" />
                <span>Verify Matches</span>
              </button>
            ) : (
              <div className={`p-2 rounded-xl text-center text-xs font-bold ${
                isCorrect ? 'bg-emerald-100 text-emerald-900' : 'bg-rose-100 text-rose-900'
              }`}>
                {isCorrect ? '✓ All pairs matched correctly!' : '⚠️ Check the correct relationships.'}
              </div>
            )}
          </div>
        </div>
      )}

      {/* =====================================================================
          5. INCIDENT STEPS IN ORDER
          ===================================================================== */}
      {sceneType === 'incident_steps_order' && (
        <div className="relative z-10 w-full h-full flex flex-col sm:flex-row items-center justify-between gap-4">
          <CharacterCaricature
            characterId={characterId}
            emotion={characterEmotion}
            sublabel="Incident Response Order"
          />

          <div className="flex-1 max-w-[320px] bg-white rounded-3xl border-3 border-[#172B4D] shadow-xl overflow-hidden p-3.5 space-y-2">
            <div className="border-b border-[#E8EEEA] pb-2 flex items-center justify-between">
              <span className="text-xs font-bold text-[#172B4D]">Arrange in Safe Order</span>
              <span className="text-[10px] text-[#53615C]">Use arrows</span>
            </div>

            <div className="space-y-1.5">
              {orderedStepIds.map((stepId, idx) => {
                const stepObj = (puzzle.orderingSteps || []).find((s) => s.id === stepId);
                if (!stepObj) return null;

                return (
                  <div
                    key={stepId}
                    className={`p-2 rounded-xl border-2 flex items-center justify-between gap-2 transition-all ${
                      !isSolved
                        ? 'bg-white border-[#E8EEEA]'
                        : isCorrect
                        ? 'bg-emerald-50 border-emerald-600'
                        : 'bg-rose-50 border-rose-500'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-lg bg-[#123C35] text-white flex items-center justify-center font-bold text-[11px] shrink-0">
                        {idx + 1}
                      </span>
                      <span className="text-xs font-semibold text-[#172B4D]">{stepObj.text}</span>
                    </div>

                    {!isSolved && (
                      <div className="flex items-center gap-1">
                        <button
                          type="button"
                          disabled={idx === 0}
                          onClick={() => onMoveStep(stepId, 'up')}
                          className="p-1 rounded bg-[#F6F8F6] border border-[#E8EEEA] hover:bg-slate-200 disabled:opacity-30 cursor-pointer"
                        >
                          <ArrowUp className="w-3 h-3 text-[#172B4D]" />
                        </button>
                        <button
                          type="button"
                          disabled={idx === orderedStepIds.length - 1}
                          onClick={() => onMoveStep(stepId, 'down')}
                          className="p-1 rounded bg-[#F6F8F6] border border-[#E8EEEA] hover:bg-slate-200 disabled:opacity-30 cursor-pointer"
                        >
                          <ArrowDown className="w-3 h-3 text-[#172B4D]" />
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {!isSolved ? (
              <button
                type="button"
                onClick={onSubmitOrdering}
                className="w-full mt-2 py-2.5 rounded-xl font-bold text-xs bg-[#123C35] text-white hover:bg-[#0D2B26] transition-all cursor-pointer shadow-xs flex items-center justify-center gap-1.5"
              >
                <Check className="w-3.5 h-3.5" />
                <span>Confirm Order</span>
              </button>
            ) : (
              <div className={`p-2 rounded-xl text-center text-xs font-bold ${
                isCorrect ? 'bg-emerald-100 text-emerald-900' : 'bg-rose-100 text-rose-900'
              }`}>
                {isCorrect ? '✓ Correct security workflow!' : '⚠️ Review step priority.'}
              </div>
            )}
          </div>
        </div>
      )}

      {/* =====================================================================
          6. TEXT REFUSAL ENTRY (EXPLICIT REFUSAL PRACTICE)
          ===================================================================== */}
      {sceneType === 'text_refusal_entry' && (
        <div className="relative z-10 w-full h-full flex flex-col sm:flex-row items-center justify-between gap-4">
          <CharacterCaricature
            characterId={characterId}
            emotion={characterEmotion}
            sublabel="Direct Refusal Practice"
          />

          <div className="flex-1 max-w-[320px] bg-white rounded-3xl border-3 border-[#172B4D] shadow-xl overflow-hidden p-3.5 space-y-2.5">
            <div className="border-b border-[#E8EEEA] pb-2">
              <span className="text-xs font-bold text-[#172B4D] block">Firm Refusal Response</span>
              <span className="text-[10px] text-[#53615C]">Choose or confirm the safe reply:</span>
            </div>

            {/* Quick choices if options provided */}
            {puzzle.options && puzzle.options.length > 0 ? (
              <div className="space-y-1.5">
                {puzzle.options.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    disabled={isSolved}
                    onClick={() => onSelectOption(opt.id)}
                    className={`w-full p-2.5 rounded-xl border-2 text-left text-xs font-semibold transition-all cursor-pointer ${
                      !isSolved
                        ? 'bg-[#F6F8F6] border-[#E8EEEA] hover:border-[#172B4D]'
                        : selectedId === opt.id
                        ? opt.id === puzzle.correctTargetId
                          ? 'bg-emerald-50 border-emerald-600 ring-2 ring-emerald-500 text-emerald-950 font-bold'
                          : 'bg-rose-50 border-rose-600 ring-2 ring-rose-500 text-rose-950'
                        : opt.id === puzzle.correctTargetId
                        ? 'bg-emerald-50 border-emerald-300'
                        : 'bg-[#F6F8F6] border-[#E8EEEA] opacity-60'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            ) : (
              <div className="space-y-2">
                <input
                  type="text"
                  disabled={isSolved}
                  value={textAnswer}
                  onChange={(e) => onChangeText(e.target.value)}
                  placeholder="Type your refusal here..."
                  className="w-full p-2.5 rounded-xl border-2 border-[#E8EEEA] text-xs font-medium focus:border-[#172B4D] outline-none"
                />
                {!isSolved && (
                  <button
                    type="button"
                    onClick={onSubmitText}
                    className="w-full py-2.5 rounded-xl font-bold text-xs bg-[#123C35] text-white hover:bg-[#0D2B26] transition-all cursor-pointer shadow-xs flex items-center justify-center gap-1.5"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Response</span>
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* =====================================================================
          7. BANK TRANSACTION LINK INSPECT ( amaz0n-pay / spoof domain )
          ===================================================================== */}
      {sceneType === 'bank_transaction_link' && (
        <div className="relative z-10 w-full h-full flex flex-col sm:flex-row items-center justify-between gap-4">
          <CharacterCaricature
            characterId={characterId}
            emotion={characterEmotion}
            sublabel="Verifying Bank Alert"
          />

          <div className="flex-1 max-w-[280px] sm:max-w-[310px] bg-white rounded-3xl border-3 border-[#172B4D] shadow-xl overflow-hidden p-3.5 space-y-2.5">
            <div className="flex items-center gap-2 border-b border-[#E8EEEA] pb-2">
              <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">
                🏦
              </div>
              <span className="text-xs font-bold text-[#172B4D]">Your Bank · Transaction Alert</span>
            </div>

            <button
              type="button"
              disabled={isSolved}
              onClick={() => onSelectOption('msg_text')}
              className={`w-full p-2 rounded-xl text-left border text-xs transition-all cursor-pointer ${
                !isSolved
                  ? 'bg-transparent border-transparent hover:border-[#E8EEEA]'
                  : selectedId === 'msg_text'
                  ? 'bg-rose-50 border-rose-600 text-rose-950'
                  : 'text-[#172B4D]'
              }`}
            >
              ₹4,999 transferred to AMAZON PAY. If not you, click below:
            </button>

            {/* The Target Link: Tap the suspicious URL */}
            <button
              type="button"
              disabled={isSolved}
              onClick={() => onSelectOption('spoof_link')}
              className={`w-full p-2.5 rounded-xl text-left border-2 transition-all cursor-pointer ${
                !isSolved
                  ? 'bg-[#F6F8F6] border-[#E8EEEA] hover:border-[#172B4D]'
                  : selectedId === 'spoof_link'
                  ? 'bg-emerald-50 border-emerald-600 ring-2 ring-emerald-500 font-bold text-emerald-950 shadow-sm'
                  : 'bg-emerald-50/40 border-emerald-300 font-bold'
              }`}
            >
              <div className="flex items-center justify-between text-[10px] font-bold mb-0.5">
                <span className={isSolved ? 'text-emerald-800' : 'text-[#53615C]'}>Clickable Link:</span>
                {isSolved && <span className="text-emerald-700 font-black">✓ SUSPICIOUS LINK SPOTTED</span>}
              </div>
              <div className={`text-xs font-mono underline break-all ${isSolved ? 'text-emerald-950 font-bold' : 'text-[#172B4D]'}`}>
                {payload.suspiciousUrl || 'https://amaz0n-pay.secure.in'}
              </div>
            </button>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <button
                type="button"
                disabled={isSolved}
                onClick={() => onSelectOption('report_btn')}
                className={`py-1.5 rounded-lg text-center text-xs font-bold border transition-all cursor-pointer ${
                  !isSolved
                    ? 'bg-slate-100 border-slate-200 text-[#53615C] hover:bg-slate-200'
                    : selectedId === 'report_btn'
                    ? 'bg-rose-50 border-rose-600 text-rose-950'
                    : 'bg-slate-100 text-[#53615C] opacity-60'
                }`}
              >
                Report
              </button>
              <button
                type="button"
                disabled={isSolved}
                onClick={() => onSelectOption('ignore_btn')}
                className={`py-1.5 rounded-lg text-center text-xs font-bold border transition-all cursor-pointer ${
                  !isSolved
                    ? 'bg-slate-100 border-slate-200 text-[#53615C] hover:bg-slate-200'
                    : selectedId === 'ignore_btn'
                    ? 'bg-rose-50 border-rose-600 text-rose-950'
                    : 'bg-slate-100 text-[#53615C] opacity-60'
                }`}
              >
                Ignore
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          8. SHOPPING OFFER COMPARE (Website A vs Website B)
          ===================================================================== */}
      {sceneType === 'shopping_offer_compare' && (
        <div className="relative z-10 w-full h-full flex flex-col sm:flex-row items-center justify-between gap-4">
          <CharacterCaricature
            characterId={characterId}
            emotion={characterEmotion}
            sublabel="Comparing Storefronts"
          />

          <div className="flex-1 max-w-[340px] grid grid-cols-2 gap-2.5">
            {/* Website A (Fake Trap) */}
            <button
              type="button"
              disabled={isSolved}
              onClick={() => onSelectOption('site_fake')}
              className={`p-2.5 sm:p-3 rounded-2xl border-2 text-center transition-all cursor-pointer flex flex-col justify-between ${
                !isSolved
                  ? 'bg-white border-[#E8EEEA] hover:border-[#172B4D] shadow-xs'
                  : selectedId === 'site_fake'
                  ? 'bg-rose-50 border-rose-600 ring-2 ring-rose-500 text-rose-950'
                  : 'bg-white border-[#E8EEEA] opacity-60'
              }`}
            >
              <div>
                <div className="w-full h-16 sm:h-20 bg-gradient-to-b from-slate-100 to-slate-200 rounded-xl mb-2 flex items-center justify-center p-1.5 border border-slate-200/80 overflow-hidden relative">
                  <span className="text-2xl">📱</span>
                  <span className="absolute bottom-1 right-1 text-[8px] font-bold text-slate-600 bg-white/80 px-1 rounded">
                    Flash Deal
                  </span>
                </div>
                <div className="text-xs font-black text-[#172B4D] mb-0.5">Website A</div>
                <div className="text-sm font-black text-[#172B4D] font-mono leading-tight">
                  {payload.websiteAPrice || '₹9,999'}
                </div>
                <div className="text-[9px] text-[#53615C] line-through">₹79,999</div>
              </div>
              <div className="mt-2 text-[9px] text-slate-500 font-mono truncate px-1 py-0.5 rounded bg-slate-50 border border-slate-100">
                {payload.websiteAUrl || 'discount-hub.in'}
              </div>
            </button>

            {/* Website B (Official Real Store) */}
            <button
              type="button"
              disabled={isSolved}
              onClick={() => onSelectOption('site_real')}
              className={`p-2.5 sm:p-3 rounded-2xl border-2 text-center transition-all cursor-pointer flex flex-col justify-between ${
                !isSolved
                  ? 'bg-white border-[#E8EEEA] hover:border-[#172B4D] shadow-xs'
                  : selectedId === 'site_real'
                  ? 'bg-emerald-50 border-emerald-600 ring-2 ring-emerald-500 text-emerald-950 shadow-md font-bold'
                  : 'bg-emerald-50/40 border-emerald-300'
              }`}
            >
              <div>
                <div className="w-full h-16 sm:h-20 bg-gradient-to-b from-slate-100 to-slate-200 rounded-xl mb-2 flex items-center justify-center p-1.5 border border-slate-200/80 overflow-hidden relative">
                  <span className="text-2xl">📱</span>
                  <span className="absolute bottom-1 right-1 text-[8px] font-bold text-emerald-700 bg-white/80 px-1 rounded">
                    Official
                  </span>
                </div>
                <div className="text-xs font-black text-[#172B4D] mb-0.5">Website B</div>
                <div className={`text-sm font-black font-mono leading-tight ${isSolved ? 'text-emerald-800' : 'text-[#172B4D]'}`}>
                  {payload.websiteBPrice || '₹54,999'}
                </div>
                <div className="text-[9px] text-[#53615C]">Official Price</div>
              </div>
              <div className="mt-2 text-[9px] text-slate-600 font-mono truncate px-1 py-0.5 rounded bg-slate-50 border border-slate-100">
                {payload.websiteBUrl || 'official-store.com'}
              </div>
            </button>
          </div>
        </div>
      )}

      {/* =====================================================================
          9. ACCOUNT SECURITY SETTINGS (Strictly neutral before selection)
          ===================================================================== */}
      {sceneType === 'account_security_settings' && (
        <div className="relative z-10 w-full h-full flex flex-col sm:flex-row items-center justify-between gap-4">
          <CharacterCaricature
            characterId={characterId}
            emotion={characterEmotion}
            sublabel="Protecting Account"
          />

          <div className="flex-1 max-w-[290px] sm:max-w-[320px] bg-white rounded-3xl border-3 border-[#172B4D] shadow-xl overflow-hidden p-3.5 space-y-2">
            <div className="border-b border-[#E8EEEA] pb-1.5 flex items-center justify-between">
              <span className="text-xs font-bold text-[#172B4D]">Account Settings</span>
              <span className="text-[10px] text-[#53615C]">Security</span>
            </div>

            <button
              type="button"
              disabled={isSolved}
              onClick={() => onSelectOption('set_pwd')}
              className={`w-full p-2.5 rounded-xl border-2 text-left flex items-center justify-between transition-all cursor-pointer ${
                !isSolved
                  ? 'bg-[#F6F8F6] border-[#E8EEEA] hover:border-[#172B4D]'
                  : selectedId === 'set_pwd'
                  ? 'bg-rose-50 border-rose-600 text-rose-950'
                  : 'bg-[#F6F8F6] border-[#E8EEEA] opacity-60'
              }`}
            >
              <span className="text-xs font-bold text-[#172B4D]">🔒 Password</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>

            {/* Target 2FA */}
            <button
              type="button"
              disabled={isSolved}
              onClick={() => onSelectOption('set_2fa')}
              className={`w-full p-2.5 rounded-xl border-2 text-left flex items-center justify-between transition-all cursor-pointer ${
                !isSolved
                  ? 'bg-[#F6F8F6] border-[#E8EEEA] hover:border-[#172B4D]'
                  : selectedId === 'set_2fa'
                  ? 'bg-emerald-50 border-emerald-600 ring-2 ring-emerald-500 text-emerald-950 font-bold'
                  : 'bg-emerald-50/50 border-emerald-300'
              }`}
            >
              <div className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-[#172B4D]" />
                <span className="text-xs font-bold text-[#172B4D]">Two-Factor Authentication</span>
              </div>
              <span className="text-[10px] font-semibold text-[#53615C]">
                {isSolved ? '🛡️ Enabled' : 'Off >'}
              </span>
            </button>

            <button
              type="button"
              disabled={isSolved}
              onClick={() => onSelectOption('set_alerts')}
              className={`w-full p-2.5 rounded-xl border-2 text-left flex items-center justify-between transition-all cursor-pointer ${
                !isSolved
                  ? 'bg-[#F6F8F6] border-[#E8EEEA] hover:border-[#172B4D]'
                  : 'bg-[#F6F8F6] border-[#E8EEEA] opacity-60'
              }`}
            >
              <span className="text-xs font-bold text-[#172B4D]">🔔 Login Alerts</span>
              <span className="text-[10px] text-[#53615C]">Off &gt;</span>
            </button>

            <button
              type="button"
              disabled={isSolved}
              onClick={() => onSelectOption('set_rec')}
              className={`w-full p-2.5 rounded-xl border-2 text-left flex items-center justify-between transition-all cursor-pointer ${
                !isSolved
                  ? 'bg-[#F6F8F6] border-[#E8EEEA] hover:border-[#172B4D]'
                  : 'bg-[#F6F8F6] border-[#E8EEEA] opacity-60'
              }`}
            >
              <span className="text-xs font-bold text-[#172B4D]">✉️ Recovery Email</span>
              <span className="text-[10px] text-[#53615C]">Not set &gt;</span>
            </button>
          </div>
        </div>
      )}

      {/* =====================================================================
          10. WORK FROM HOME & JOB OFFERS
          ===================================================================== */}
      {sceneType === 'work_from_home_banner' && (
        <div className="relative z-10 w-full h-full flex flex-col sm:flex-row items-center justify-between gap-4">
          <CharacterCaricature
            characterId={characterId}
            emotion={characterEmotion}
            sublabel="Evaluating Job Offer"
          />

          <div className="flex-1 max-w-[290px] sm:max-w-[320px] bg-white rounded-3xl border-3 border-[#172B4D] shadow-xl overflow-hidden p-4 space-y-2.5">
            <div className="text-center border-b border-[#E8EEEA] pb-2">
              <span className="text-xs font-bold text-[#53615C] uppercase tracking-wider block">
                {payload.jobTitle || 'Work from Home'}
              </span>
              <span className="text-base font-black text-rose-600 block">
                Earn ₹50,000 per week!
              </span>
            </div>

            <div className="space-y-1.5 text-xs text-[#172B4D]">
              <button
                type="button"
                disabled={isSolved}
                onClick={() => onSelectOption('no_exp')}
                className={`w-full p-2 rounded-xl text-left border-2 transition-all flex items-center gap-1.5 cursor-pointer ${
                  !isSolved
                    ? 'bg-[#F6F8F6] border-[#E8EEEA] hover:border-[#172B4D]'
                    : selectedId === 'no_exp'
                    ? 'bg-rose-50 border-rose-600 ring-2 ring-rose-500 text-rose-950'
                    : 'bg-[#F6F8F6] border-[#E8EEEA] opacity-60'
                }`}
              >
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>No experience needed</span>
              </button>

              {/* Target: Registration fee trap */}
              <button
                type="button"
                disabled={isSolved}
                onClick={() => onSelectOption('job_fee')}
                className={`w-full p-2.5 rounded-xl text-left border-2 transition-all flex items-center justify-between cursor-pointer ${
                  !isSolved
                    ? 'bg-white border-[#E8EEEA] hover:border-[#172B4D]'
                    : selectedId === 'job_fee'
                    ? 'bg-emerald-50 border-emerald-600 ring-2 ring-emerald-500 text-emerald-950 font-bold shadow-sm'
                    : 'bg-emerald-50/40 border-emerald-300 font-bold'
                }`}
              >
                <div className="flex items-center gap-1.5">
                  <AlertTriangle className={`w-4 h-4 shrink-0 ${isSolved ? 'text-emerald-700' : 'text-amber-500'}`} />
                  <span>{payload.jobFee || '₹2,000'} registration fee</span>
                </div>
                {isSolved && <span className="text-[9px] font-black text-emerald-800">✓ FEE TRAP</span>}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          11. OTP DRAG VAULT
          ===================================================================== */}
      {sceneType === 'otp_drag_vault' && (
        <div className="relative z-10 w-full h-full flex flex-col sm:flex-row items-center justify-between gap-4">
          <CharacterCaricature
            characterId={characterId}
            emotion={characterEmotion}
            sublabel="Protecting OTP Code"
          />

          <div className="flex-1 max-w-[280px] sm:max-w-[310px] space-y-3">
            <div className="bg-white rounded-2xl border-2 border-[#172B4D] p-3 text-center shadow-md">
              <span className="text-[10px] font-bold text-[#53615C] uppercase tracking-wider block mb-1">
                Your One-Time Code
              </span>
              <div className="flex justify-center gap-1.5">
                {(payload.otpCode || '7 4 8 2 1 9').split(' ').map((digit, idx) => (
                  <span
                    key={idx}
                    className="w-8 h-9 rounded-xl bg-[#F6F8F6] border-2 border-[#172B4D] flex items-center justify-center font-mono font-black text-base text-[#172B4D]"
                  >
                    {digit}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                disabled={isSolved}
                onClick={() => onSelectOption('vault')}
                className={`p-3 rounded-2xl border-2 text-center transition-all cursor-pointer ${
                  !isSolved
                    ? 'bg-white border-[#E8EEEA] hover:border-[#172B4D]'
                    : selectedId === 'vault'
                    ? 'bg-emerald-50 border-emerald-600 ring-2 ring-emerald-500 shadow-md text-emerald-950 font-bold'
                    : 'bg-emerald-50/50 border-emerald-300'
                }`}
              >
                <div className={`w-8 h-8 mx-auto rounded-xl flex items-center justify-center shadow-xs mb-1 ${
                  isSolved ? 'bg-emerald-600 text-white' : 'bg-[#F6F8F6] text-[#172B4D] border border-[#E8EEEA]'
                }`}>
                  <Lock className="w-4 h-4 stroke-[2.5]" />
                </div>
                <span className="text-xs font-bold block">Keep Private</span>
                <span className="text-[9px] text-[#53615C] block">
                  {isSolved ? '✓ Safe Vault' : 'Private Vault'}
                </span>
              </button>

              <button
                type="button"
                disabled={isSolved}
                onClick={() => onSelectOption('caller')}
                className={`p-3 rounded-2xl border-2 text-center transition-all cursor-pointer ${
                  !isSolved
                    ? 'bg-white border-[#E8EEEA] hover:border-[#172B4D]'
                    : selectedId === 'caller'
                    ? 'bg-rose-50 border-rose-600 ring-2 ring-rose-500 shadow-md text-rose-950'
                    : 'bg-rose-50/50 border-rose-300'
                }`}
              >
                <div className={`w-8 h-8 mx-auto rounded-xl flex items-center justify-center shadow-xs mb-1 ${
                  isSolved ? 'bg-rose-500 text-white' : 'bg-[#F6F8F6] text-[#172B4D] border border-[#E8EEEA]'
                }`}>
                  <PhoneOff className="w-4 h-4 stroke-[2.5]" />
                </div>
                <span className="text-xs font-bold block">Share with Caller</span>
                <span className="text-[9px] text-[#53615C] block">
                  {isSolved ? '🚩 Unsafe Choice' : 'Phone Caller'}
                </span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          12. STICKY NOTE SPOT
          ===================================================================== */}
      {sceneType === 'sticky_note_spot' && (
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-2">
          <div className="relative max-w-[340px] sm:max-w-[420px] w-full">
            <div className="h-44 sm:h-52 bg-[#172B4D] rounded-t-2xl border-4 border-[#334155] p-3 relative flex items-center justify-center shadow-lg">
              <button
                type="button"
                disabled={isSolved}
                onClick={() => onSelectOption('screen')}
                className={`w-full h-full rounded-lg p-2 text-left font-mono text-[10px] transition-all cursor-pointer ${
                  !isSolved
                    ? 'bg-[#1E293B] text-slate-400 opacity-70 hover:opacity-90'
                    : selectedId === 'screen'
                    ? 'bg-rose-950/70 border border-rose-500 text-rose-200'
                    : 'bg-[#1E293B] text-slate-400 opacity-50'
                }`}
              >
                &gt; Desktop: Work Station
              </button>

              <button
                type="button"
                disabled={isSolved}
                onClick={() => onSelectOption('stickynote')}
                className={`absolute bottom-3 left-6 p-3 rounded-md shadow-md transform -rotate-3 transition-all cursor-pointer border-2 ${
                  !isSolved
                    ? 'bg-yellow-300 border-yellow-400 hover:scale-105'
                    : selectedId === 'stickynote'
                    ? 'bg-yellow-100 border-emerald-600 ring-4 ring-emerald-400 text-emerald-950 scale-105 shadow-xl font-bold'
                    : 'bg-yellow-200 border-emerald-500'
                }`}
              >
                <div className="flex items-center justify-between text-[10px] font-bold text-amber-950 uppercase mb-0.5">
                  <span>My Password:</span>
                  {isSolved && (
                    <span className="text-[9px] bg-emerald-600 text-white px-1.5 py-0.5 rounded font-black ml-1">
                      ✓ SPOTTED
                    </span>
                  )}
                </div>
                <div className="text-xs sm:text-sm font-black text-amber-950 font-mono">
                  {payload.stickyNoteText || 'Priya#2023'}
                </div>
              </button>
            </div>
            <div className="h-4 bg-[#64748B] rounded-b-xl border-t border-[#94A3B8] shadow-md flex justify-center">
              <div className="w-16 h-1 bg-[#475569] rounded-b" />
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          13. APP PERMISSIONS REVIEW
          ===================================================================== */}
      {sceneType === 'app_permissions_review' && (
        <div className="relative z-10 w-full h-full flex flex-col sm:flex-row items-center justify-between gap-4">
          <CharacterCaricature
            characterId={characterId}
            emotion={characterEmotion}
            sublabel="Reviewing Permissions"
          />

          <div className="flex-1 max-w-[280px] sm:max-w-[310px] bg-white rounded-3xl border-3 border-[#172B4D] shadow-xl overflow-hidden p-3.5 space-y-2">
            <div className="border-b border-[#E8EEEA] pb-1.5">
              <span className="text-xs font-bold text-[#172B4D] block">
                {payload.appName || 'Photo Editor App'}
              </span>
              <span className="text-[10px] text-[#53615C]">Requests access to:</span>
            </div>

            <button
              type="button"
              disabled={isSolved}
              onClick={() => onSelectOption('photos_perm')}
              className={`w-full p-2 rounded-xl border-2 text-left flex items-center justify-between transition-all cursor-pointer ${
                !isSolved
                  ? 'bg-[#F6F8F6] border-[#E8EEEA] hover:border-[#172B4D]'
                  : selectedId === 'photos_perm'
                  ? 'bg-rose-50 border-rose-600 text-rose-950'
                  : 'bg-[#F6F8F6] border-[#E8EEEA] opacity-60'
              }`}
            >
              <span>🖼️ Photos</span>
              <span className="text-[9px] text-slate-500">Enabled</span>
            </button>

            {/* Target Contacts: Unnecessary for a photo app */}
            <button
              type="button"
              disabled={isSolved}
              onClick={() => onSelectOption('contacts')}
              className={`w-full p-2.5 rounded-xl border-2 text-left flex items-center justify-between transition-all cursor-pointer ${
                !isSolved
                  ? 'bg-[#F6F8F6] border-[#E8EEEA] hover:border-[#172B4D]'
                  : selectedId === 'contacts'
                  ? 'bg-emerald-50 border-emerald-600 ring-2 ring-emerald-500 font-bold text-emerald-950 shadow-sm'
                  : 'bg-emerald-50/40 border-emerald-300 font-bold'
              }`}
            >
              <span className="text-xs font-bold text-[#172B4D]">👥 Contacts</span>
              <span className={`text-[9px] font-bold ${isSolved ? 'text-emerald-800' : 'text-slate-500'}`}>
                {isSolved ? '✓ RISKY PERMISSION' : 'Enabled'}
              </span>
            </button>

            <button
              type="button"
              disabled={isSolved}
              onClick={() => onSelectOption('loc_perm')}
              className={`w-full p-2 rounded-xl border-2 text-left flex items-center justify-between transition-all cursor-pointer ${
                !isSolved
                  ? 'bg-[#F6F8F6] border-[#E8EEEA] hover:border-[#172B4D]'
                  : selectedId === 'loc_perm'
                  ? 'bg-rose-50 border-rose-600 text-rose-950'
                  : 'bg-[#F6F8F6] border-[#E8EEEA] opacity-60'
              }`}
            >
              <span>📍 Location</span>
              <span className="text-[9px] text-slate-500">Enabled</span>
            </button>
          </div>
        </div>
      )}

      {/* =====================================================================
          14. FALLBACK / SCAM MESSAGE INSPECT
          ===================================================================== */}
      {sceneType === 'scam_message_inspect' && (
        <div className="relative z-10 w-full h-full flex flex-col sm:flex-row items-center justify-between gap-4">
          <CharacterCaricature
            characterId={characterId}
            emotion={characterEmotion}
            sublabel="Inspecting Incoming SMS"
          />

          <div className="flex-1 max-w-[280px] sm:max-w-[310px] bg-white rounded-3xl border-3 border-[#172B4D] shadow-xl overflow-hidden p-3.5 space-y-2.5">
            <div className="flex items-center justify-between border-b border-[#E8EEEA] pb-2">
              <span className="text-xs font-bold text-[#172B4D]">Messages</span>
              <span className="text-[10px] text-[#53615C]">Incoming SMS</span>
            </div>

            <button
              type="button"
              disabled={isSolved}
              onClick={() => onSelectOption('sender')}
              className={`w-full p-2 rounded-xl text-left border-2 transition-all cursor-pointer ${
                !isSolved
                  ? 'bg-[#F6F8F6] border-[#E8EEEA] hover:border-[#172B4D]'
                  : selectedId === 'sender'
                  ? 'bg-rose-50 border-rose-600 ring-2 ring-rose-500 text-rose-950'
                  : 'bg-[#F6F8F6] border-[#E8EEEA] opacity-60'
              }`}
            >
              <div className="text-[10px] text-[#53615C]">Sender Phone Header:</div>
              <div className="text-xs font-bold font-mono text-[#172B4D]">
                {payload.senderPhone || '+91 81234 56789 (Personal Mobile)'}
              </div>
            </button>

            <button
              type="button"
              disabled={isSolved}
              onClick={() => onSelectOption('body')}
              className={`w-full p-2.5 rounded-xl text-left border-2 transition-all cursor-pointer ${
                !isSolved
                  ? 'bg-[#F6F8F6] border-[#E8EEEA] hover:border-[#172B4D]'
                  : selectedId === 'body'
                  ? 'bg-rose-50 border-rose-600 ring-2 ring-rose-500 text-rose-950'
                  : 'bg-[#F6F8F6] border-[#E8EEEA] opacity-60'
              }`}
            >
              <div className="text-[10px] text-[#53615C] mb-1">Message Text:</div>
              <p className="text-xs font-medium text-[#172B4D] leading-snug">
                {payload.messageText ||
                  'Your KYC will expire today. Update now to avoid account block.'}
              </p>
            </button>

            {/* Target Link */}
            <button
              type="button"
              disabled={isSolved}
              onClick={() => onSelectOption('link')}
              className={`w-full p-2.5 rounded-xl text-left border-2 transition-all relative cursor-pointer ${
                !isSolved
                  ? 'bg-[#F6F8F6] border-[#E8EEEA] hover:border-[#172B4D]'
                  : selectedId === 'link'
                  ? 'bg-emerald-50 border-emerald-600 ring-2 ring-emerald-500 font-bold text-emerald-950 shadow-sm'
                  : 'bg-emerald-50/40 border-emerald-300 font-bold'
              }`}
            >
              <div className="flex items-center justify-between gap-1 mb-1">
                <span className={`text-[10px] font-bold ${isSolved ? 'text-emerald-800' : 'text-[#53615C]'}`}>
                  {isSolved ? 'Unverified Link:' : 'Attached Link:'}
                </span>
                {isSolved && (
                  <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold">
                    ✓
                  </span>
                )}
              </div>
              <div className={`text-xs font-mono font-bold underline truncate ${
                isSolved ? 'text-emerald-950' : 'text-[#172B4D]'
              }`}>
                {payload.suspiciousUrl || 'https://bank-verify.in'}
              </div>
            </button>
          </div>
        </div>
      )}

      {/* =====================================================================
          15. UPI PAYMENT REVIEW / OTHER SINGLE SELECT FALLBACKS
          ===================================================================== */}
      {sceneType === 'upi_payment_review' && (
        <div className="relative z-10 w-full h-full flex flex-col sm:flex-row items-center justify-between gap-4">
          <CharacterCaricature
            characterId={characterId}
            emotion={characterEmotion}
            sublabel="Reviewing UPI Payment"
          />

          <div className="flex-1 max-w-[280px] sm:max-w-[310px] bg-white rounded-3xl border-3 border-[#172B4D] shadow-xl overflow-hidden p-3.5 space-y-2.5">
            <div className="flex items-center gap-2 border-b border-[#E8EEEA] pb-2">
              <span className="text-xs font-bold text-[#172B4D]">Send Money</span>
            </div>

            <button
              type="button"
              disabled={isSolved}
              onClick={() => onSelectOption('recipient')}
              className={`w-full p-2 rounded-xl text-left border-2 transition-all cursor-pointer ${
                !isSolved
                  ? 'bg-[#F6F8F6] border-[#E8EEEA] hover:border-[#172B4D]'
                  : selectedId === 'recipient'
                  ? 'bg-emerald-50 border-emerald-600 ring-2 ring-emerald-500 font-bold'
                  : 'bg-emerald-50/50 border-emerald-300'
              }`}
            >
              <div className="text-[10px] text-[#53615C]">Recipient:</div>
              <div className="text-xs font-bold text-[#172B4D]">
                {payload.upiRecipient || 'Rahul Kumar (+91 98765 43210)'}
              </div>
            </button>

            <div className="p-2 rounded-xl bg-[#F6F8F6] border border-[#E8EEEA] flex items-center justify-between">
              <span className="text-xs text-[#53615C]">Amount:</span>
              <span className="text-base font-black font-mono text-[#172B4D]">
                {payload.upiAmount || '₹5,000'}
              </span>
            </div>

            <div className="w-full py-2.5 bg-[#123C35] text-white rounded-xl text-center text-xs font-bold shadow-xs">
              Pay ₹5,000
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          16. SOFTWARE UPDATE CHOICE
          ===================================================================== */}
      {sceneType === 'software_update_choice' && (
        <div className="relative z-10 w-full h-full flex flex-col sm:flex-row items-center justify-between gap-4">
          <CharacterCaricature
            characterId={characterId}
            emotion={characterEmotion}
            sublabel="Official Update Prompt"
          />

          <div className="flex-1 max-w-[290px] sm:max-w-[320px] bg-white rounded-3xl border-3 border-[#172B4D] shadow-xl overflow-hidden p-4 space-y-3">
            <div className="text-center border-b border-[#E8EEEA] pb-2">
              <div className="w-10 h-10 mx-auto rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center text-xl mb-1">
                ⚙️
              </div>
              <span className="text-xs font-bold text-[#172B4D] block">Software Update</span>
              <span className="text-[10px] text-[#53615C]">Version 11.2 (Official)</span>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <button
                type="button"
                disabled={isSolved}
                onClick={() => onSelectOption('update_now')}
                className={`py-2 px-3 rounded-xl text-center text-xs font-bold border-2 transition-all cursor-pointer ${
                  !isSolved
                    ? 'bg-[#172B4D] border-[#172B4D] text-white hover:bg-[#0f1d33]'
                    : selectedId === 'update_now'
                    ? 'bg-emerald-600 border-emerald-700 text-white ring-2 ring-emerald-500'
                    : 'bg-emerald-600 text-white'
                }`}
              >
                Update Now
              </button>

              <button
                type="button"
                disabled={isSolved}
                onClick={() => onSelectOption('remind_later')}
                className={`py-2 px-3 rounded-xl text-center text-xs font-bold border-2 transition-all cursor-pointer ${
                  !isSolved
                    ? 'bg-[#F6F8F6] border-[#E8EEEA] text-[#53615C]'
                    : selectedId === 'remind_later'
                    ? 'bg-rose-50 border-rose-600 text-rose-950'
                    : 'bg-[#F6F8F6] border-[#E8EEEA] opacity-60'
                }`}
              >
                Remind Later
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          17. INFO SORTING PRIVACY
          ===================================================================== */}
      {sceneType === 'info_sorting_privacy' && (
        <div className="relative z-10 w-full h-full flex flex-col sm:flex-row items-center justify-between gap-4">
          <CharacterCaricature
            characterId={characterId}
            emotion={characterEmotion}
            sublabel="Sorting Confidential Data"
          />

          <div className="flex-1 max-w-[310px] space-y-3">
            <div className="p-3 bg-white rounded-2xl border-2 border-dashed border-[#172B4D] shadow-sm text-center">
              <span className="text-[10px] text-[#53615C] uppercase font-bold block mb-1">Select category for:</span>
              <span className="text-sm font-black text-[#172B4D] bg-[#F6F8F6] px-3 py-1 rounded-xl border border-[#E8EEEA] inline-block">
                Aadhaar & Bank Account Number
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <button
                type="button"
                disabled={isSolved}
                onClick={() => onSelectOption('safe_share')}
                className={`p-3 rounded-2xl border-2 text-center transition-all cursor-pointer ${
                  !isSolved
                    ? 'bg-white border-[#E8EEEA] hover:border-[#172B4D]'
                    : selectedId === 'safe_share'
                    ? 'bg-rose-50 border-rose-600 ring-2 ring-rose-500'
                    : 'bg-white border-[#E8EEEA] opacity-60'
                }`}
              >
                <div className="w-8 h-8 mx-auto rounded-xl bg-slate-100 flex items-center justify-center text-[#172B4D] mb-1">
                  🌐
                </div>
                <span className="text-xs font-bold block">Safe to Share</span>
                <span className="text-[9px] text-[#53615C]">(Publicly)</span>
              </button>

              <button
                type="button"
                disabled={isSolved}
                onClick={() => onSelectOption('keep_private')}
                className={`p-3 rounded-2xl border-2 text-center transition-all cursor-pointer ${
                  !isSolved
                    ? 'bg-white border-[#E8EEEA] hover:border-[#172B4D]'
                    : selectedId === 'keep_private'
                    ? 'bg-emerald-50 border-emerald-600 ring-2 ring-emerald-500 shadow-md text-emerald-950 font-bold'
                    : 'bg-emerald-50/50 border-emerald-300'
                }`}
              >
                <div className="w-8 h-8 mx-auto rounded-xl bg-rose-100 flex items-center justify-center text-rose-700 mb-1">
                  🔒
                </div>
                <span className="text-xs font-bold block">Keep Private</span>
                <span className="text-[9px] text-[#53615C]">(Trusted only)</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
