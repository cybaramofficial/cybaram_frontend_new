import React, { useState, useRef, useEffect } from 'react';
import { soundManager } from '../../utils/soundEffects.ts';
import {
  Volume2,
  VolumeX,
  Music,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Search,
  Lock,
  Unlock,
  KeyRound,
  Download,
  PhoneCall,
  Check,
  X,
  PhoneOff,
  Sparkles,
  HelpCircle
} from 'lucide-react';

export type PuzzleInteractionType =
  | 'puzzle_2fa'
  | 'puzzle_otp'
  | 'puzzle_fee'
  | 'puzzle_link'
  | 'puzzle_password'
  | 'puzzle_permissions'
  | 'puzzle_update'
  | 'puzzle_recovery'
  | 'drag_inspect'
  | 'device_toggle'
  | 'magnify_clue'
  | 'drag_sort'
  | 'phone_action';

export interface InteractivePuzzleData {
  id: string;
  levelNumber: number;
  totalLevels: number;
  category: string;
  situation?: string;
  instruction: string;
  characterName: string;
  characterRole?: string;
  characterType?: 'woman_at_home' | 'student' | 'small_business_owner' | 'elder' | 'delivery_recipient' | 'cyber_guide';
  type: PuzzleInteractionType;
  dragObjectLabel?: string;
  hiddenWarningStamp?: string;
  deviceSettingLabel?: string;
  deviceInitialState?: boolean;
  messageSender?: string;
  messageSnippet?: string;
  suspiciousUrl?: string;
  safeUrl?: string;
  otpCode?: string;
  clues?: Array<{
    id: string;
    label: string;
    detail: string;
    isScamClue: boolean;
  }>;
  safeActionLabel?: string;
  riskyActionLabel?: string;
  keyTakeaway: string;
  points: number;
}

interface InteractivePuzzleBoardProps {
  puzzle: InteractivePuzzleData;
  score: number;
  onSolve: (isSafe: boolean, points: number) => void;
  onNext: () => void;
  onExit: () => void;
}

// -------------------------------------------------------------
// ORIGINAL DISTINCTIVE CARTOON CARICATURE COMPANION
// Expressive faces, clear silhouettes, friendly personalities
// -------------------------------------------------------------
interface ExpressiveCaricatureProps {
  name: string;
  type?: 'woman_at_home' | 'student' | 'small_business_owner' | 'elder' | 'delivery_recipient' | 'cyber_guide';
  expression: 'neutral' | 'celebrating' | 'cautious';
}

const ExpressiveCaricature: React.FC<ExpressiveCaricatureProps> = ({
  name,
  type = 'woman_at_home',
  expression
}) => {
  const isHappy = expression === 'celebrating';
  const isCautious = expression === 'cautious';

  return (
    <div className="flex flex-col items-center select-none">
      <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-gradient-to-b from-[#FFF1C2] via-[#F6F8F6] to-[#DCECE3] border-3 border-[#172B4D] shadow-md flex items-center justify-center overflow-hidden">
        {/* Animated Celebration Aura */}
        {isHappy && (
          <div className="absolute inset-0 bg-emerald-400/20 animate-pulse rounded-3xl pointer-events-none" />
        )}

        <svg viewBox="0 0 120 120" className="w-full h-full" fill="none">
          <circle cx="60" cy="60" r="54" fill="#FFFFFF" opacity="0.6" />

          {/* 1. Priya — Work-from-Home Professional */}
          {(type === 'woman_at_home' || (!type && name.includes('Priya'))) && (
            <g transform="translate(0, 2)">
              {/* Hair bun and strands */}
              <circle cx="60" cy="24" r="15" fill="#1C1816" />
              <path d="M36 44 C34 22 86 22 84 44 C84 32 76 26 60 26 C44 26 36 32 36 44 Z" fill="#1C1816" />
              {/* Head & Neck */}
              <rect x="55" y="70" width="10" height="12" fill="#D49A6A" />
              <ellipse cx="60" cy="48" rx="22" ry="24" fill="#D49A6A" />
              {/* Maroon Bindi */}
              <circle cx="60" cy="38" r="2.5" fill="#8B0000" />
              {/* Kurti with collar */}
              <path d="M28 98 C28 78 92 78 92 98 Z" fill="#123C35" />
              <path d="M50 78 L60 92 L70 78 Z" fill="#FFF1C2" />
            </g>
          )}

          {/* 2. Rohan / Kavya — Student */}
          {type === 'student' && (
            <g transform="translate(0, 2)">
              {/* Headband Headphones */}
              <path d="M30 46 C30 18 90 18 90 46" stroke="#172B4D" strokeWidth="5" strokeLinecap="round" />
              <rect x="25" y="42" width="10" height="18" rx="5" fill="#E86C45" />
              <rect x="85" y="42" width="10" height="18" rx="5" fill="#E86C45" />
              {/* Modern hair */}
              <path d="M36 42 C36 22 84 22 84 42 C78 26 42 26 36 42 Z" fill="#1C1816" />
              {/* Head */}
              <ellipse cx="60" cy="48" rx="21" ry="23" fill="#D8A072" />
              {/* Blue Hoodie */}
              <path d="M28 98 C28 78 92 78 92 98 Z" fill="#2E5C8A" />
              <path d="M52 82 L60 94 L68 82 Z" fill="#FFFFFF" />
            </g>
          )}

          {/* 3. Murugan / Rajesh — Small Business Owner */}
          {type === 'small_business_owner' && (
            <g transform="translate(0, 2)">
              {/* Neat parted hair */}
              <path d="M36 38 C36 20 84 20 84 38 C78 22 42 22 36 38 Z" fill="#2C2826" />
              {/* Head */}
              <ellipse cx="60" cy="48" rx="22" ry="24" fill="#C68958" />
              {/* Distinguished mustache */}
              <path d="M46 58 Q60 65 74 58 Q60 54 46 58 Z" fill="#1C1816" />
              {/* Crisp White Shirt */}
              <path d="M28 98 C28 78 92 78 92 98 Z" fill="#FFFFFF" stroke="#172B4D" strokeWidth="2" />
              <line x1="60" y1="78" x2="60" y2="98" stroke="#172B4D" strokeWidth="2" />
              {/* Green pocket pen */}
              <line x1="44" y1="84" x2="44" y2="92" stroke="#123C35" strokeWidth="3" strokeLinecap="round" />
            </g>
          )}

          {/* 4. Thatha — Grandfather */}
          {type === 'elder' && (
            <g transform="translate(0, 2)">
              {/* Silver hair */}
              <path d="M34 44 C34 20 86 20 86 44 C78 24 42 24 34 44 Z" fill="#B0B8B4" />
              {/* Head */}
              <ellipse cx="60" cy="49" rx="22" ry="24" fill="#D8A072" />
              {/* Tortoiseshell spectacles */}
              <circle cx="50" cy="48" r="8" stroke="#704214" strokeWidth="2.5" fill="none" />
              <circle cx="70" cy="48" r="8" stroke="#704214" strokeWidth="2.5" fill="none" />
              <line x1="58" y1="48" x2="62" y2="48" stroke="#704214" strokeWidth="2.5" />
              {/* Cream Kurta */}
              <path d="M28 98 C28 78 92 78 92 98 Z" fill="#F4EDE2" stroke="#D8C7B2" strokeWidth="2" />
            </g>
          )}

          {/* 5. Ravi — Delivery Recipient */}
          {type === 'delivery_recipient' && (
            <g transform="translate(0, 2)">
              {/* Cap visor */}
              <path d="M34 38 C34 22 86 22 86 38 L98 40 L86 42 Z" fill="#C53030" />
              {/* Head */}
              <ellipse cx="60" cy="48" rx="21" ry="23" fill="#C88B5A" />
              {/* Polo Shirt */}
              <path d="M28 98 C28 78 92 78 92 98 Z" fill="#E86C45" />
            </g>
          )}

          {/* 6. Arun — CybAram Guide */}
          {type === 'cyber_guide' && (
            <g transform="translate(0, 2)">
              <path d="M36 36 C36 18 84 18 84 36 C78 22 42 22 36 36 Z" fill="#1C1816" />
              <ellipse cx="60" cy="48" rx="21" ry="23" fill="#D8A072" />
              <path d="M28 98 C28 78 92 78 92 98 Z" fill="#123C35" />
              <polygon points="60,82 66,85 65,91 60,94 55,91 54,85" fill="#FFF1C2" stroke="#D8A84E" strokeWidth="1.5" />
            </g>
          )}

          {/* Expressive Facial Animations */}
          {isHappy ? (
            // CELEBRATING: Cheerful arch eyes, broad toothy smile, blushing cheeks
            <g transform="translate(0, 2)">
              <path d="M46 46 Q51 40 56 46" stroke="#1C1816" strokeWidth="3" strokeLinecap="round" fill="none" />
              <path d="M64 46 Q69 40 74 46" stroke="#1C1816" strokeWidth="3" strokeLinecap="round" fill="none" />
              <path d="M48 57 Q60 70 72 57 Z" fill="#FFFFFF" stroke="#1C1816" strokeWidth="2.5" strokeLinejoin="round" />
              <circle cx="43" cy="54" r="5" fill="#F87171" opacity="0.5" />
              <circle cx="77" cy="54" r="5" fill="#F87171" opacity="0.5" />
              {/* Raised Victory Hands */}
              <circle cx="20" cy="40" r="8" fill="#D49A6A" />
              <circle cx="100" cy="40" r="8" fill="#D49A6A" />
            </g>
          ) : isCautious ? (
            // CAUTIOUS / SURPRISED: Raised eyebrow, round curious eyes, alert mouth
            <g transform="translate(0, 2)">
              <circle cx="51" cy="47" r="4.5" fill="#1C1816" />
              <circle cx="69" cy="47" r="4.5" fill="#1C1816" />
              <path d="M45 40 Q51 36 57 41" stroke="#1C1816" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              <path d="M63 42 Q69 39 75 41" stroke="#1C1816" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              <ellipse cx="60" cy="58" rx="5" ry="3.5" fill="#1C1816" />
            </g>
          ) : (
            // NEUTRAL / ATTENTIVE: Calm friendly smile, looking ahead
            <g transform="translate(0, 2)">
              <circle cx="51" cy="47" r="3.5" fill="#1C1816" />
              <circle cx="69" cy="47" r="3.5" fill="#1C1816" />
              <circle cx="52" cy="46" r="1.2" fill="#FFFFFF" />
              <circle cx="70" cy="46" r="1.2" fill="#FFFFFF" />
              <path d="M52 57 Q60 63 68 57" stroke="#1C1816" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            </g>
          )}
        </svg>

        {/* Small floating badge */}
        {isHappy && (
          <div className="absolute top-2 right-2 bg-emerald-500 text-white rounded-full p-1 shadow-md border-2 border-white animate-bounce">
            <Check className="w-3.5 h-3.5 stroke-[3]" />
          </div>
        )}
      </div>

      <div className="mt-1.5 text-center">
        <span className="text-xs font-bold text-[#172B4D] block">{name}</span>
        <span className="text-[10px] text-[#53615C] font-medium">
          {isHappy ? '🎉 Safe & Protected!' : isCautious ? '🤔 Needs a closer look...' : 'Ready to act'}
        </span>
      </div>
    </div>
  );
};

export const InteractivePuzzleBoard: React.FC<InteractivePuzzleBoardProps> = ({
  puzzle,
  score,
  onSolve,
  onNext,
  onExit
}) => {
  const [isMusicMuted, setIsMusicMuted] = useState(() => soundManager.isMusicMuted());
  const [isSfxMuted, setIsSfxMuted] = useState(() => soundManager.isSfxMuted());

  // Interaction States
  const [isSolved, setIsSolved] = useState(false);
  const [isFailed, setIsFailed] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);

  // Puzzle specific state
  const [selectedSettingId, setSelectedSettingId] = useState<string | null>(null);
  const [otpChoice, setOtpChoice] = useState<'vault' | 'caller' | null>(null);
  const [revealedFeeUnderneath, setRevealedFeeUnderneath] = useState(false);
  const [feeDragOffset, setFeeDragOffset] = useState({ x: 0, y: 0 });
  const [isDraggingFee, setIsDraggingFee] = useState(false);
  const [feeChoice, setFeeChoice] = useState<'refuse' | 'pay' | null>(null);
  const [linkMagnified, setLinkMagnified] = useState(false);
  const [linkChoice, setLinkChoice] = useState<'delete' | 'open' | null>(null);
  const [selectedPasswordOption, setSelectedPasswordOption] = useState<string | null>(null);
  const [revokedPermissions, setRevokedPermissions] = useState<{ contacts: boolean; sms: boolean }>({
    contacts: false,
    sms: false
  });
  const [updateChoice, setUpdateChoice] = useState<'official' | 'popup' | null>(null);
  const [recoveryChoice, setRecoveryChoice] = useState<'1930' | 'wait' | null>(null);

  const dragStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  // Reset states on puzzle level change
  useEffect(() => {
    setIsSolved(false);
    setIsFailed(false);
    setFeedbackMessage(null);
    setSelectedSettingId(null);
    setOtpChoice(null);
    setRevealedFeeUnderneath(false);
    setFeeDragOffset({ x: 0, y: 0 });
    setFeeChoice(null);
    setLinkMagnified(false);
    setLinkChoice(null);
    setSelectedPasswordOption(null);
    setRevokedPermissions({ contacts: false, sms: false });
    setUpdateChoice(null);
    setRecoveryChoice(null);
  }, [puzzle.id]);

  const handleToggleMusic = () => {
    const next = soundManager.toggleMusic();
    setIsMusicMuted(next);
  };

  const handleToggleSfx = () => {
    const next = soundManager.toggleSfx();
    setIsSfxMuted(next);
    if (!next) {
      soundManager.playTap();
    }
  };

  // SUCCESS TRIGGER
  const triggerSuccess = (customPoints?: number) => {
    if (isSolved) return;
    setIsSolved(true);
    setIsFailed(false);
    soundManager.playSuccess();
    const awarded = customPoints ?? puzzle.points;
    onSolve(true, awarded);
  };

  // CAUTION TRIGGER
  const triggerCaution = (msg?: string) => {
    if (isSolved || isFailed) return;
    setIsFailed(true);
    if (msg) setFeedbackMessage(msg);
    soundManager.playWarning();
    onSolve(false, 0);
  };

  // Drag fee sticker logic
  const handleTouchOrMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    if (isSolved) return;
    setIsDraggingFee(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    dragStartRef.current = { x: clientX - feeDragOffset.x, y: clientY - feeDragOffset.y };
    soundManager.playDrag();
  };

  const handleTouchOrMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDraggingFee || isSolved) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const newX = clientX - dragStartRef.current.x;
    const newY = clientY - dragStartRef.current.y;
    setFeeDragOffset({ x: newX, y: newY });

    if (Math.abs(newX) > 50 || Math.abs(newY) > 35) {
      if (!revealedFeeUnderneath) {
        setRevealedFeeUnderneath(true);
        soundManager.playClue();
      }
    }
  };

  const handleTouchOrMouseUp = () => {
    if (!isDraggingFee) return;
    setIsDraggingFee(false);
  };

  const characterExpression = isSolved ? 'celebrating' : isFailed ? 'cautious' : 'neutral';

  return (
    <div
      className="max-w-3xl mx-auto px-4 py-3 select-none"
      onMouseMove={handleTouchOrMouseMove}
      onTouchMove={handleTouchOrMouseMove}
      onMouseUp={handleTouchOrMouseUp}
      onTouchEnd={handleTouchOrMouseUp}
    >
      {/* 1. TOP HEADER: Level Banner, Score, Audio Controls, Exit */}
      <div className="flex items-center justify-between mb-2 text-xs">
        <button
          type="button"
          onClick={onExit}
          className="text-[#53615C] hover:text-[#172B4D] font-bold transition-colors cursor-pointer px-2 py-1 rounded-md"
        >
          ← Exit Game
        </button>

        <div className="flex items-center gap-2">
          <div className="px-3.5 py-1 rounded-full font-extrabold text-[#172B4D] bg-white border-2 border-[#172B4D] shadow-2xs tracking-wider">
            QUEST {puzzle.levelNumber} OF {puzzle.totalLevels}
          </div>
          <div className="font-mono font-bold text-[#123C35] bg-[#E8F5EE] border border-[#DCECE3] px-3 py-1 rounded-full">
            {score} pts
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleToggleMusic}
            className={`p-1.5 rounded-xl border transition-all cursor-pointer ${
              isMusicMuted
                ? 'bg-[#F6F8F6] text-[#8C9B95] border-[#E8EEEA]'
                : 'bg-[#E8F5EE] text-[#123C35] border-[#DCECE3]'
            }`}
            title={isMusicMuted ? 'Music: Off (Click to turn on)' : 'Music: On (Click to turn off)'}
          >
            <Music className="w-3.5 h-3.5" />
          </button>

          <button
            type="button"
            onClick={handleToggleSfx}
            className={`p-1.5 rounded-xl border transition-all cursor-pointer ${
              isSfxMuted
                ? 'bg-[#F6F8F6] text-[#8C9B95] border-[#E8EEEA]'
                : 'bg-[#E8F5EE] text-[#123C35] border-[#DCECE3]'
            }`}
            title={isSfxMuted ? 'Sound Effects: Off' : 'Sound Effects: On'}
          >
            {isSfxMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* 2. THE NOTEBOOK CANVAS */}
      <div className="relative bg-white rounded-3xl border-3 border-[#172B4D] shadow-md p-5 sm:p-6 overflow-hidden min-h-[460px] flex flex-col justify-between">
        {/* Top Perforated Spiral Rings */}
        <div className="absolute top-0 inset-x-0 h-3.5 flex justify-around px-4 pointer-events-none">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="w-2.5 h-3 bg-[#F6F8F6] border-b border-x border-[#172B4D] rounded-b-sm" />
          ))}
        </div>

        {/* Subtle notebook paper lines */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage:
              'repeating-linear-gradient(transparent, transparent 27px, #E8EEEA 28px)',
            backgroundSize: '100% 28px'
          }}
        />

        {/* TOP: Concise, Fun Task Headline (Without spoiling the answer!) */}
        <div className="relative z-10 pt-1 text-center space-y-1">
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#123C35] bg-[#E8F5EE] border border-[#DCECE3] px-2.5 py-0.5 rounded-full inline-block">
            {puzzle.category}
          </span>
          <h2 className="text-lg sm:text-xl font-black text-[#172B4D] leading-snug max-w-xl mx-auto [text-wrap:balance]">
            {puzzle.instruction}
          </h2>
        </div>

        {/* CENTER INTERACTIVE STAGE */}
        <div className="relative z-10 py-2 my-auto grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          {/* Expressive Caricature Mascot */}
          <div className="md:col-span-4 flex justify-center">
            <ExpressiveCaricature
              name={puzzle.characterName}
              type={puzzle.characterType}
              expression={characterExpression}
            />
          </div>

          {/* Interactive Scene Canvas */}
          <div className="md:col-span-8 flex flex-col justify-center">
            {/* -------------------------------------------------------------
                PUZZLE A: TWO-FACTOR AUTHENTICATION (GENUINE DISCOVERY)
                No pre-highlighting! Multiple security options on phone screen.
                ------------------------------------------------------------- */}
            {(puzzle.type === 'puzzle_2fa' || puzzle.type === 'device_toggle') && (
              <div className="w-full max-w-sm mx-auto bg-white rounded-3xl border-3 border-[#172B4D] p-4 shadow-sm space-y-3">
                <div className="w-12 h-1.5 bg-[#172B4D] rounded-full mx-auto" />
                <div className="flex items-center justify-between pb-1.5 border-b border-[#E8EEEA] text-xs">
                  <span className="font-extrabold text-[#172B4D]">Account Security Center</span>
                  <span className="text-[10px] text-[#53615C]">Choose a setting</span>
                </div>

                <div className="space-y-2">
                  {/* Option 1: Standard Password */}
                  <div
                    onClick={() => {
                      if (isSolved) return;
                      setSelectedSettingId('pwd');
                      soundManager.playTap();
                      triggerCaution('Changing your password is good, but it still leaves you with single-factor login. Look for the setting that adds a second verification step!');
                    }}
                    className={`p-2.5 rounded-xl border-2 cursor-pointer transition-all flex items-center justify-between ${
                      selectedSettingId === 'pwd'
                        ? 'bg-amber-50 border-amber-400 text-amber-950'
                        : 'bg-[#F6F8F6] hover:bg-[#E8EEEA] border-[#E8EEEA] text-[#172B4D]'
                    }`}
                  >
                    <div>
                      <strong className="text-xs block">Account Password</strong>
                      <span className="text-[10px] text-[#53615C]">Single master login password</span>
                    </div>
                    <span className="text-xs">🔑</span>
                  </div>

                  {/* Option 2: Two-Factor Authentication (Correct Choice) */}
                  <div
                    onClick={() => {
                      if (isSolved) return;
                      setSelectedSettingId('2fa');
                      soundManager.playToggleSwitch();
                      triggerSuccess();
                    }}
                    className={`p-2.5 rounded-xl border-2 cursor-pointer transition-all flex items-center justify-between ${
                      selectedSettingId === '2fa' && isSolved
                        ? 'bg-emerald-50 border-emerald-500 text-emerald-950 ring-2 ring-emerald-400'
                        : 'bg-[#F6F8F6] hover:bg-[#E8EEEA] border-[#E8EEEA] text-[#172B4D]'
                    }`}
                  >
                    <div>
                      <strong className="text-xs block">Two-Factor Authentication (2FA)</strong>
                      <span className="text-[10px] text-[#53615C]">
                        {selectedSettingId === '2fa' && isSolved
                          ? 'Active & Guarding Account'
                          : 'Adds secondary verification on new logins'}
                      </span>
                    </div>

                    {/* Animated Switch */}
                    <div
                      className={`w-11 h-6 rounded-full p-0.5 flex items-center transition-colors ${
                        selectedSettingId === '2fa' && isSolved
                          ? 'bg-emerald-600 justify-end'
                          : 'bg-slate-300 justify-start'
                      }`}
                    >
                      <div className="w-5 h-5 rounded-full bg-white shadow-xs" />
                    </div>
                  </div>

                  {/* Option 3: Security Question */}
                  <div
                    onClick={() => {
                      if (isSolved) return;
                      setSelectedSettingId('question');
                      soundManager.playTap();
                      triggerCaution('Security questions can often be guessed via social media! Look for a stronger live verification factor.');
                    }}
                    className={`p-2.5 rounded-xl border-2 cursor-pointer transition-all flex items-center justify-between ${
                      selectedSettingId === 'question'
                        ? 'bg-amber-50 border-amber-400 text-amber-950'
                        : 'bg-[#F6F8F6] hover:bg-[#E8EEEA] border-[#E8EEEA] text-[#172B4D]'
                    }`}
                  >
                    <div>
                      <strong className="text-xs block">Security Question</strong>
                      <span className="text-[10px] text-[#53615C]">Backup recovery question</span>
                    </div>
                    <span className="text-xs">❓</span>
                  </div>

                  {/* Option 4: Auto Login */}
                  <div
                    onClick={() => {
                      if (isSolved) return;
                      setSelectedSettingId('autologin');
                      soundManager.playTap();
                      triggerCaution('Auto-login on other devices actually increases risk if a device is lost!');
                    }}
                    className={`p-2.5 rounded-xl border-2 cursor-pointer transition-all flex items-center justify-between ${
                      selectedSettingId === 'autologin'
                        ? 'bg-amber-50 border-amber-400 text-amber-950'
                        : 'bg-[#F6F8F6] hover:bg-[#E8EEEA] border-[#E8EEEA] text-[#172B4D]'
                    }`}
                  >
                    <div>
                      <strong className="text-xs block">Auto-Login Nearby</strong>
                      <span className="text-[10px] text-[#53615C]">Convenience option</span>
                    </div>
                    <span className="text-xs">⚡</span>
                  </div>
                </div>
              </div>
            )}

            {/* -------------------------------------------------------------
                PUZZLE B: OTP PRIVACY (NEUTRAL BASE COLOR BEFORE CHOICE)
                Both buttons have identical neutral styling before choice!
                ------------------------------------------------------------- */}
            {puzzle.type === 'puzzle_otp' && (
              <div className="w-full max-w-md mx-auto space-y-3">
                {/* Incoming Call Header */}
                <div className="bg-[#FFF1C2]/50 border-2 border-[#D8A84E] rounded-2xl p-3 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-[#172B4D] text-white flex items-center justify-center">
                      <PhoneCall className="w-4 h-4 animate-bounce" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#172B4D] block">Unknown Caller</span>
                      <span className="text-[11px] text-[#704214]">“Quick, read out your 6-digit OTP!”</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-[#704214] uppercase bg-white px-2 py-0.5 rounded-full border border-[#D8A84E]">
                    Verification
                  </span>
                </div>

                {/* Floating OTP Code */}
                <div className="bg-white rounded-2xl border-2 border-[#172B4D] p-3 text-center shadow-xs">
                  <span className="text-[10px] text-[#53615C] font-semibold block mb-0.5">Your Private OTP:</span>
                  <div className="inline-flex items-center px-4 py-1.5 bg-[#F6F8F6] border border-[#E8EEEA] rounded-xl font-mono text-xl font-black tracking-widest text-[#172B4D]">
                    {puzzle.otpCode || '7 4 8 2 1 9'}
                  </div>
                </div>

                {/* Both Choices Start in Identical Neutral Base Styling */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <button
                    type="button"
                    onClick={() => {
                      setOtpChoice('vault');
                      triggerSuccess();
                    }}
                    disabled={isSolved}
                    className={`p-3.5 rounded-2xl font-bold text-xs sm:text-sm border-2 transition-all cursor-pointer shadow-xs flex flex-col items-center justify-center gap-1 active:scale-[0.98] ${
                      otpChoice === 'vault' && isSolved
                        ? 'bg-emerald-50 border-emerald-500 text-emerald-950 ring-2 ring-emerald-400'
                        : 'bg-[#FFF1C2] border-[#D8A84E] text-[#704214] hover:bg-[#FFE899]'
                    }`}
                  >
                    <Lock className="w-4 h-4" />
                    <span>Keep in Private Vault</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setOtpChoice('caller');
                      triggerCaution('Sharing your OTP lets an attacker take over your account or authorize bank transfers!');
                    }}
                    disabled={isSolved}
                    className={`p-3.5 rounded-2xl font-bold text-xs sm:text-sm border-2 transition-all cursor-pointer shadow-xs flex flex-col items-center justify-center gap-1 active:scale-[0.98] ${
                      otpChoice === 'caller' && isFailed
                        ? 'bg-rose-50 border-rose-400 text-rose-950 ring-2 ring-rose-400'
                        : 'bg-[#FFF1C2] border-[#D8A84E] text-[#704214] hover:bg-[#FFE899]'
                    }`}
                  >
                    <PhoneOff className="w-4 h-4" />
                    <span>Read OTP to Caller</span>
                  </button>
                </div>
              </div>
            )}

            {/* -------------------------------------------------------------
                PUZZLE C: UNMASK ADVANCE FEE (PEEL STICKER THEN NEUTRAL CHOICES)
                ------------------------------------------------------------- */}
            {(puzzle.type === 'puzzle_fee' || puzzle.type === 'drag_inspect') && (
              <div className="w-full max-w-md mx-auto space-y-3">
                <div className="relative bg-[#F6F8F6] rounded-2xl border-2 border-dashed border-[#172B4D]/30 p-4 text-center min-h-[130px] flex flex-col justify-center items-center overflow-hidden">
                  <div className={`transition-opacity duration-300 ${revealedFeeUnderneath ? 'opacity-100' : 'opacity-0'}`}>
                    <span className="inline-block px-3 py-1 rounded-xl bg-amber-100 border border-amber-400 text-amber-900 font-bold text-xs animate-bounce">
                      {puzzle.hiddenWarningStamp || '⚠️ ADVANCE FEE SCAM TRAP!'}
                    </span>
                    <p className="text-[10px] text-[#53615C] mt-1">
                      Real jobs never charge candidates registration fees to start work!
                    </p>
                  </div>

                  {!revealedFeeUnderneath && (
                    <p className="text-xs text-[#8C9B95] italic">
                      Drag or peel the deposit fee sticker to discover what is hidden!
                    </p>
                  )}

                  {/* Peelable / Draggable Fee Sticker */}
                  <div
                    onMouseDown={handleTouchOrMouseDown}
                    onTouchStart={handleTouchOrMouseDown}
                    style={{
                      transform: `translate(${feeDragOffset.x}px, ${feeDragOffset.y}px)`,
                      cursor: isDraggingFee ? 'grabbing' : 'grab'
                    }}
                    className={`absolute top-4 left-1/2 -translate-x-1/2 px-4 py-2.5 rounded-2xl border-2 shadow-md transition-shadow font-bold text-xs ${
                      revealedFeeUnderneath
                        ? 'bg-amber-100 border-amber-500 text-amber-900'
                        : 'bg-[#FFF1C2] border-[#D8A84E] text-[#704214] hover:shadow-lg'
                    }`}
                  >
                    <div className="flex items-center gap-1.5">
                      <span>✋</span>
                      <span>{puzzle.dragObjectLabel || '₹500 Registration Deposit'}</span>
                    </div>
                    <span className="text-[9px] block font-normal opacity-80 mt-0.5">
                      (Drag me away to inspect!)
                    </span>
                  </div>
                </div>

                {/* Both Choices Start in Neutral Styling */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <button
                    type="button"
                    onClick={() => {
                      setFeeChoice('refuse');
                      triggerSuccess();
                    }}
                    disabled={isSolved}
                    className={`p-3 rounded-xl font-bold text-xs sm:text-sm border-2 transition-all cursor-pointer shadow-xs active:scale-[0.98] ${
                      feeChoice === 'refuse' && isSolved
                        ? 'bg-emerald-50 border-emerald-500 text-emerald-950 ring-2 ring-emerald-400'
                        : 'bg-[#FFF1C2] border-[#D8A84E] text-[#704214] hover:bg-[#FFE899]'
                    }`}
                  >
                    Close & Block Offer
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setFeeChoice('pay');
                      triggerCaution('Paying an upfront registration fee is a classic task scam. The money cannot be recovered!');
                    }}
                    disabled={isSolved}
                    className={`p-3 rounded-xl font-bold text-xs sm:text-sm border-2 transition-all cursor-pointer shadow-xs active:scale-[0.98] ${
                      feeChoice === 'pay' && isFailed
                        ? 'bg-rose-50 border-rose-400 text-rose-950 ring-2 ring-rose-400'
                        : 'bg-[#FFF1C2] border-[#D8A84E] text-[#704214] hover:bg-[#FFE899]'
                    }`}
                  >
                    Pay the Deposit
                  </button>
                </div>
              </div>
            )}

            {/* -------------------------------------------------------------
                PUZZLE D: INSPECT UNSAFE LINK (NEUTRAL BUTTONS)
                ------------------------------------------------------------- */}
            {(puzzle.type === 'puzzle_link' || puzzle.type === 'magnify_clue') && (
              <div className="w-full max-w-md mx-auto space-y-3">
                <div className="bg-white rounded-2xl border-2 border-[#172B4D] p-3.5 shadow-xs space-y-2">
                  <div className="flex items-center justify-between text-xs pb-1 border-b border-[#E8EEEA]">
                    <span className="font-bold text-[#172B4D]">{puzzle.messageSender || 'Delivery SMS'}</span>
                    <span className="text-[10px] text-[#53615C]">SMS Message</span>
                  </div>

                  <p className="text-xs sm:text-sm font-medium text-[#172B4D]">
                    “{puzzle.messageSnippet || 'Your delivery parcel is delayed due to incomplete address. Update now:'}”
                  </p>

                  {/* Magnifying Glass Tool */}
                  <div
                    onClick={() => {
                      setLinkMagnified(true);
                      soundManager.playClue();
                    }}
                    className={`p-2.5 rounded-xl border-2 cursor-pointer transition-all flex items-center justify-between gap-2 ${
                      linkMagnified
                        ? 'bg-amber-100/70 border-amber-400 text-amber-950'
                        : 'bg-[#F6F8F6] hover:bg-[#E8EEEA] border-[#E8EEEA] text-[#172B4D]'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Search className="w-4 h-4 text-[#123C35]" />
                      <span className="text-xs font-mono font-bold break-all">
                        {puzzle.suspiciousUrl || 'http://indiapost-update.xyz/pay'}
                      </span>
                    </div>
                    <span className="text-[10px] font-bold underline shrink-0">
                      {linkMagnified ? '🔍 Inspected!' : 'Tap to Magnify'}
                    </span>
                  </div>

                  {linkMagnified && (
                    <div className="p-2 rounded-lg bg-amber-50 border border-amber-300 text-[11px] text-amber-950">
                      <strong>⚠️ Domain Clue:</strong> Notice the <code>.xyz</code> domain. Official government postal services strictly use <code>.gov.in</code>.
                    </div>
                  )}
                </div>

                {/* Neutral Decision Buttons */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <button
                    type="button"
                    onClick={() => {
                      setLinkChoice('delete');
                      triggerSuccess();
                    }}
                    disabled={isSolved}
                    className={`p-3 rounded-xl font-bold text-xs sm:text-sm border-2 transition-all cursor-pointer shadow-xs active:scale-[0.98] ${
                      linkChoice === 'delete' && isSolved
                        ? 'bg-emerald-50 border-emerald-500 text-emerald-950 ring-2 ring-emerald-400'
                        : 'bg-[#FFF1C2] border-[#D8A84E] text-[#704214] hover:bg-[#FFE899]'
                    }`}
                  >
                    Delete & Report Link
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setLinkChoice('open');
                      triggerCaution('Opening unverified links risks credential theft or malicious downloads!');
                    }}
                    disabled={isSolved}
                    className={`p-3 rounded-xl font-bold text-xs sm:text-sm border-2 transition-all cursor-pointer shadow-xs active:scale-[0.98] ${
                      linkChoice === 'open' && isFailed
                        ? 'bg-rose-50 border-rose-400 text-rose-950 ring-2 ring-rose-400'
                        : 'bg-[#FFF1C2] border-[#D8A84E] text-[#704214] hover:bg-[#FFE899]'
                    }`}
                  >
                    Open Link & Pay ₹5
                  </button>
                </div>
              </div>
            )}

            {/* -------------------------------------------------------------
                PUZZLE E: PASSWORD STRENGTH METHOD (NEUTRAL CHOICES)
                ------------------------------------------------------------- */}
            {puzzle.type === 'puzzle_password' && (
              <div className="w-full max-w-md mx-auto space-y-2.5">
                <div className="p-3 bg-white rounded-2xl border-2 border-[#172B4D] text-xs">
                  <span className="font-bold text-[#172B4D] block mb-1">Select Password Creation Strategy:</span>
                  <span className="text-[#53615C]">Which strategy gives maximum security against credential stuffers?</span>
                </div>

                <div className="space-y-2">
                  <div
                    onClick={() => {
                      if (isSolved) return;
                      setSelectedPasswordOption('manager');
                      soundManager.playClue();
                      triggerSuccess();
                    }}
                    className={`p-3 rounded-xl border-2 cursor-pointer transition-all flex items-center justify-between ${
                      selectedPasswordOption === 'manager' && isSolved
                        ? 'bg-emerald-50 border-emerald-500 text-emerald-950 ring-2 ring-emerald-400'
                        : 'bg-[#FFF1C2] border-[#D8A84E] text-[#704214] hover:bg-[#FFE899]'
                    }`}
                  >
                    <div>
                      <strong className="text-xs block">Password Manager Generator</strong>
                      <span className="text-[10px] opacity-80">16+ char random cipher: k9#mP$78!vQz-92A</span>
                    </div>
                    <span className="text-xs font-bold font-mono">100% Strength</span>
                  </div>

                  <div
                    onClick={() => {
                      if (isSolved) return;
                      setSelectedPasswordOption('dictionary');
                      soundManager.playTap();
                      triggerCaution('Dictionary words like Password123 are cracked in seconds by automated password-spraying tools!');
                    }}
                    className={`p-2.5 rounded-xl border-2 cursor-pointer transition-all flex items-center justify-between ${
                      selectedPasswordOption === 'dictionary' && isFailed
                        ? 'bg-rose-50 border-rose-400 text-rose-950'
                        : 'bg-[#F6F8F6] border-[#E8EEEA] text-[#172B4D]'
                    }`}
                  >
                    <div>
                      <strong className="text-xs block">Dictionary Word ("Password123")</strong>
                      <span className="text-[10px] text-[#53615C]">Easy to remember</span>
                    </div>
                    <span className="text-xs text-rose-600 font-bold">15% Weak</span>
                  </div>

                  <div
                    onClick={() => {
                      if (isSolved) return;
                      setSelectedPasswordOption('bday');
                      soundManager.playTap();
                      triggerCaution('Birthdays and family names are easily found through public records and social media!');
                    }}
                    className={`p-2.5 rounded-xl border-2 cursor-pointer transition-all flex items-center justify-between ${
                      selectedPasswordOption === 'bday' && isFailed
                        ? 'bg-rose-50 border-rose-400 text-rose-950'
                        : 'bg-[#F6F8F6] border-[#E8EEEA] text-[#172B4D]'
                    }`}
                  >
                    <div>
                      <strong className="text-xs block">Birthdate or Pet Name</strong>
                      <span className="text-[10px] text-[#53615C]">Common personal detail</span>
                    </div>
                    <span className="text-xs text-rose-600 font-bold">20% Weak</span>
                  </div>
                </div>
              </div>
            )}

            {/* -------------------------------------------------------------
                PUZZLE F: REVIEW APP PERMISSIONS (TAP TOGGLES TO REVOKE)
                ------------------------------------------------------------- */}
            {puzzle.type === 'puzzle_permissions' && (
              <div className="w-full max-w-sm mx-auto bg-white rounded-3xl border-3 border-[#172B4D] p-4 shadow-sm space-y-2.5">
                <div className="flex items-center gap-2 pb-1.5 border-b border-[#E8EEEA]">
                  <span className="text-lg">🔦</span>
                  <div>
                    <strong className="text-xs font-bold text-[#172B4D] block">Torch Light App</strong>
                    <span className="text-[10px] text-[#53615C]">Tap to revoke unneeded access</span>
                  </div>
                </div>

                <div className="space-y-1.5 text-xs">
                  <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="font-semibold text-slate-800">Camera Flash (LED)</span>
                    <span className="text-[10px] font-bold text-slate-600">Required</span>
                  </div>

                  {/* Revoke Contacts */}
                  <div
                    onClick={() => {
                      const next = !revokedPermissions.contacts;
                      setRevokedPermissions((prev) => ({ ...prev, contacts: next }));
                      soundManager.playToggleSwitch();
                      if (next && revokedPermissions.sms) {
                        triggerSuccess();
                      }
                    }}
                    className={`flex items-center justify-between p-2.5 rounded-xl border-2 cursor-pointer transition-all ${
                      revokedPermissions.contacts
                        ? 'bg-emerald-50 border-emerald-500 text-emerald-950'
                        : 'bg-[#FFF1C2] border-[#D8A84E] text-[#704214]'
                    }`}
                  >
                    <div>
                      <span className="font-bold block">Read Contacts</span>
                      <span className="text-[10px] opacity-85">
                        {revokedPermissions.contacts ? '✓ Access Revoked' : 'Tap to Deny'}
                      </span>
                    </div>
                    <span className="text-xs">{revokedPermissions.contacts ? '🛡️' : '⚠️'}</span>
                  </div>

                  {/* Revoke SMS */}
                  <div
                    onClick={() => {
                      const next = !revokedPermissions.sms;
                      setRevokedPermissions((prev) => ({ ...prev, sms: next }));
                      soundManager.playToggleSwitch();
                      if (next && revokedPermissions.contacts) {
                        triggerSuccess();
                      }
                    }}
                    className={`flex items-center justify-between p-2.5 rounded-xl border-2 cursor-pointer transition-all ${
                      revokedPermissions.sms
                        ? 'bg-emerald-50 border-emerald-500 text-emerald-950'
                        : 'bg-[#FFF1C2] border-[#D8A84E] text-[#704214]'
                    }`}
                  >
                    <div>
                      <span className="font-bold block">Read SMS</span>
                      <span className="text-[10px] opacity-85">
                        {revokedPermissions.sms ? '✓ Access Revoked' : 'Tap to Deny'}
                      </span>
                    </div>
                    <span className="text-xs">{revokedPermissions.sms ? '🛡️' : '⚠️'}</span>
                  </div>
                </div>

                <p className="text-[10px] text-[#53615C] text-center">
                  Deny both unneeded permissions to secure the device!
                </p>
              </div>
            )}

            {/* -------------------------------------------------------------
                PUZZLE G: SYSTEM UPDATE VS POP-UP (NEUTRAL CHOICES)
                ------------------------------------------------------------- */}
            {puzzle.type === 'puzzle_update' && (
              <div className="w-full max-w-md mx-auto space-y-3">
                <div className="p-3 bg-white rounded-2xl border-2 border-[#172B4D] text-center text-xs">
                  <span className="font-bold text-[#172B4D] block mb-0.5">
                    Browser Pop-up: “Chrome Browser Damaged! Update immediately.”
                  </span>
                  <span className="text-[10px] text-[#53615C]">Where should Priya obtain legitimate updates?</span>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-1">
                  <button
                    type="button"
                    onClick={() => {
                      setUpdateChoice('official');
                      triggerSuccess();
                    }}
                    disabled={isSolved}
                    className={`p-3.5 rounded-2xl font-bold text-xs sm:text-sm border-2 transition-all cursor-pointer shadow-xs active:scale-[0.98] flex flex-col items-center gap-1 ${
                      updateChoice === 'official' && isSolved
                        ? 'bg-emerald-50 border-emerald-500 text-emerald-950 ring-2 ring-emerald-400'
                        : 'bg-[#FFF1C2] border-[#D8A84E] text-[#704214] hover:bg-[#FFE899]'
                    }`}
                  >
                    <Download className="w-4 h-4" />
                    <span>Official Google Play / App Store</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setUpdateChoice('popup');
                      triggerCaution('Web pop-ups masquerading as system updates distribute malware APKs. Never install APK files from browser pop-ups!');
                    }}
                    disabled={isSolved}
                    className={`p-3.5 rounded-2xl font-bold text-xs sm:text-sm border-2 transition-all cursor-pointer shadow-xs active:scale-[0.98] flex flex-col items-center gap-1 ${
                      updateChoice === 'popup' && isFailed
                        ? 'bg-rose-50 border-rose-400 text-rose-950 ring-2 ring-rose-400'
                        : 'bg-[#FFF1C2] border-[#D8A84E] text-[#704214] hover:bg-[#FFE899]'
                    }`}
                  >
                    <AlertTriangle className="w-4 h-4" />
                    <span>Download .apk from Web Pop-up</span>
                  </button>
                </div>
              </div>
            )}

            {/* -------------------------------------------------------------
                PUZZLE H: POST-INCIDENT RECOVERY ACTION (NEUTRAL CHOICES)
                ------------------------------------------------------------- */}
            {puzzle.type === 'puzzle_recovery' && (
              <div className="w-full max-w-md mx-auto space-y-3">
                <div className="p-3 bg-white rounded-2xl border-2 border-[#172B4D] text-center text-xs">
                  <span className="font-bold text-[#172B4D] block mb-0.5">
                    Accidental Click! Card details were entered on a trick page.
                  </span>
                  <span className="text-[10px] text-[#53615C]">What is the safest immediate action?</span>
                </div>

                <div className="space-y-2 pt-1">
                  <button
                    type="button"
                    onClick={() => {
                      setRecoveryChoice('1930');
                      triggerSuccess();
                    }}
                    disabled={isSolved}
                    className={`w-full p-3.5 rounded-xl font-bold text-xs sm:text-sm border-2 transition-all cursor-pointer shadow-xs flex items-center justify-between ${
                      recoveryChoice === '1930' && isSolved
                        ? 'bg-emerald-50 border-emerald-500 text-emerald-950 ring-2 ring-emerald-400'
                        : 'bg-[#FFF1C2] border-[#D8A84E] text-[#704214] hover:bg-[#FFE899]'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <PhoneCall className="w-4 h-4" />
                      <span>Dial 1930 Helpline & Freeze Card in Bank App</span>
                    </div>
                    <span className="text-[10px] font-bold uppercase">Action A</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setRecoveryChoice('wait');
                      triggerCaution('Delay allows scammers to siphon funds! Immediate card freeze via official bank app is crucial.');
                    }}
                    disabled={isSolved}
                    className={`w-full p-3 rounded-xl font-bold text-xs sm:text-sm border-2 transition-all cursor-pointer ${
                      recoveryChoice === 'wait' && isFailed
                        ? 'bg-rose-50 border-rose-400 text-rose-950 ring-2 ring-rose-400'
                        : 'bg-[#F6F8F6] border-[#E8EEEA] text-[#53615C] hover:bg-[#E8EEEA]'
                    }`}
                  >
                    <span>Wait and hope nothing gets deducted</span>
                  </button>
                </div>
              </div>
            )}

            {/* FALLBACK FOR LEGACY MODES (ALWAYS NEUTRAL BASE) */}
            {(puzzle.type === 'drag_sort' || puzzle.type === 'phone_action') && (
              <div className="w-full max-w-md mx-auto space-y-3">
                <div className="p-3 rounded-2xl bg-[#F6F8F6] border-2 border-[#172B4D]/30 text-center">
                  <p className="text-xs sm:text-sm font-bold text-[#172B4D]">
                    “{puzzle.messageSnippet}”
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-1">
                  <button
                    type="button"
                    onClick={() => triggerSuccess()}
                    disabled={isSolved}
                    className="p-3.5 rounded-xl font-bold text-xs sm:text-sm bg-[#FFF1C2] border-2 border-[#D8A84E] text-[#704214] hover:bg-[#FFE899] active:scale-[0.98] transition-all cursor-pointer shadow-xs"
                  >
                    🛡️ {puzzle.safeActionLabel || 'Pause & Verify First'}
                  </button>

                  <button
                    type="button"
                    onClick={() => triggerCaution()}
                    disabled={isSolved}
                    className="p-3.5 rounded-xl font-bold text-xs sm:text-sm bg-[#FFF1C2] border-2 border-[#D8A84E] text-[#704214] hover:bg-[#FFE899] active:scale-[0.98] transition-all cursor-pointer shadow-xs"
                  >
                    ⚡ {puzzle.riskyActionLabel || 'Proceed Immediately'}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 3. STEP C, D, E: REACT, LEARN ONE PRACTICAL LESSON, CONTINUE */}
        <div className="relative z-10 pt-2">
          {/* SUCCESS REACTION */}
          {isSolved && (
            <div className="space-y-2.5 animate-in fade-in duration-300">
              <div className="flex items-center justify-center gap-2.5 text-xl animate-bounce">
                <span>🎉</span>
                <span>✨</span>
                <span>🛡️</span>
                <span>⭐</span>
              </div>

              {/* Step D: ONE SHORT PRACTICAL LESSON */}
              <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-300 text-center text-emerald-950 text-xs sm:text-sm font-semibold leading-relaxed shadow-2xs">
                <strong>Safety Habit:</strong> {puzzle.keyTakeaway}
              </div>

              {/* Step E: CLEAR NEXT BUTTON */}
              <div className="flex justify-center pt-0.5">
                <button
                  type="button"
                  onClick={onNext}
                  className="inline-flex items-center gap-3 px-8 py-3 rounded-2xl text-sm sm:text-base font-black bg-[#123C35] text-white hover:bg-[#0e2f2a] active:scale-[0.98] transition-all cursor-pointer shadow-md hover:shadow-lg"
                >
                  <span>{puzzle.levelNumber < puzzle.totalLevels ? 'NEXT PUZZLE' : 'SEE FINAL RESULTS'}</span>
                  <ArrowRight className="w-4 h-4 text-[#DCECE3]" />
                </button>
              </div>
            </div>
          )}

          {/* CAUTION FEEDBACK */}
          {isFailed && !isSolved && (
            <div className="p-3 rounded-2xl bg-amber-50 border border-amber-300 text-amber-950 text-center space-y-1.5 animate-in fade-in">
              <div className="flex items-center justify-center gap-2 font-bold text-xs sm:text-sm">
                <span>💡</span>
                <span>Pause & Review!</span>
              </div>
              <p className="text-xs leading-relaxed font-medium">
                {feedbackMessage || puzzle.keyTakeaway}
              </p>
              <div className="flex justify-center gap-3 pt-1">
                <button
                  type="button"
                  onClick={() => setIsFailed(false)}
                  className="px-4 py-1.5 rounded-xl text-xs font-bold bg-[#FFF1C2] border border-[#D8A84E] text-[#704214] hover:bg-[#FFE899] cursor-pointer"
                >
                  Try Again
                </button>
                <button
                  type="button"
                  onClick={onNext}
                  className="px-4 py-1.5 rounded-xl text-xs font-bold bg-[#123C35] text-white hover:bg-[#0e2f2a] cursor-pointer"
                >
                  Continue
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
