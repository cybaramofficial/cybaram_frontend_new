import React, { useState, useEffect, useMemo } from 'react';
import { ClickOrSkipScenario } from '../../data/scenariosClickOrSkip.ts';
import { getFreshClickOrSkipSession } from '../../utils/gameSessionManager.ts';
import { soundManager } from '../../utils/soundEffects.ts';
import {
  InteractivePuzzleBoard,
  InteractivePuzzleData,
  PuzzleInteractionType
} from './InteractivePuzzleBoard.tsx';
import { ResultCelebration, RoundAnswerRecord } from './ResultCelebration.tsx';
import {
  Volume2,
  VolumeX,
  Music,
  Play,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

interface ClickOrSkipGameProps {
  onAddScore: (points: number) => void;
  onExit: () => void;
}

export const ClickOrSkipGame: React.FC<ClickOrSkipGameProps> = ({ onAddScore, onExit }) => {
  const [gameState, setGameState] = useState<'intro' | 'playing' | 'result'>('intro');
  const [scenarios, setScenarios] = useState<ClickOrSkipScenario[]>(() => getFreshClickOrSkipSession(5));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [roundScore, setRoundScore] = useState(0);
  const [isMusicMuted, setIsMusicMuted] = useState(() => soundManager.isMusicMuted());
  const [isSfxMuted, setIsSfxMuted] = useState(() => soundManager.isSfxMuted());
  const [answerHistory, setAnswerHistory] = useState<RoundAnswerRecord[]>([]);

  const currentScenario = scenarios[currentIndex];

  // Stop energetic BGM when leaving or unmounting
  useEffect(() => {
    return () => {
      soundManager.stopBgm();
    };
  }, []);

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

  const handleStartPlay = () => {
    soundManager.playTap();
    soundManager.startBgm();
    setGameState('playing');
  };

  // Convert scenario into interactive puzzle data across the 8 varied casual puzzle activities
  const currentPuzzleData: InteractivePuzzleData = useMemo(() => {
    if (!currentScenario) {
      return {
        id: 'fallback',
        levelNumber: 1,
        totalLevels: 5,
        category: 'Digital Safety',
        situation: 'An unexpected notification arrived.',
        instruction: 'Inspect the incoming message carefully.',
        characterName: 'Priya',
        characterType: 'woman_at_home',
        type: 'puzzle_fee',
        keyTakeaway: 'Always verify unexpected requests independently.',
        points: 100
      };
    }

    const cat = currentScenario.category.toLowerCase();
    const title = currentScenario.title.toLowerCase();
    const roundIdx = currentIndex;

    // Cycle through rich Indian characters
    const characterPool: Array<{
      name: string;
      role: string;
      type: 'woman_at_home' | 'student' | 'small_business_owner' | 'elder' | 'delivery_recipient' | 'cyber_guide';
    }> = [
      { name: 'Priya', role: 'Working from Home', type: 'woman_at_home' },
      { name: 'Rohan', role: 'College Student', type: 'student' },
      { name: 'Murugan', role: 'Small Business Owner', type: 'small_business_owner' },
      { name: 'Thatha', role: 'Grandfather', type: 'elder' },
      { name: 'Ravi', role: 'Delivery Recipient', type: 'delivery_recipient' },
      { name: 'Arun', role: 'CybAram Guide', type: 'cyber_guide' }
    ];

    const companion = characterPool[roundIdx % characterPool.length];

    let pType: PuzzleInteractionType = 'puzzle_fee';
    let pInstruction = `Help ${companion.name}! Drag the fee sticker away to inspect what is hidden underneath.`;
    let pSituation = currentScenario.fullMessageText;
    let pDragLabel = '₹500 Registration Deposit';
    let pHiddenStamp = '⚠️ ADVANCE FEE SCAM CLUE!';
    let pSettingLabel = 'Two-Factor Authentication (2FA)';
    let pSafeLabel = '🛡️ Verify via Official Portal';
    let pRiskyLabel = '⚡ Pay Unverified Link';
    let pOtpCode = '8 3 9 1 0 4';
    let pSuspiciousUrl = currentScenario.linkTargetDisplay || 'http://unverified-notice.xyz';

    // 8 Varied Interactive Puzzle Types with Discovery-Based Instructions
    if (
      cat.includes('otp') ||
      cat.includes('call') ||
      title.includes('otp') ||
      title.includes('code') ||
      roundIdx === 1
    ) {
      pType = 'puzzle_otp';
      pInstruction = `An unknown caller is demanding an OTP. Help ${companion.name} decide what to do.`;
      pOtpCode = '7 4 8 2 1 9';
    } else if (
      cat.includes('account') ||
      cat.includes('login') ||
      cat.includes('security') ||
      title.includes('password') ||
      roundIdx === 0
    ) {
      pType = 'puzzle_2fa';
      pInstruction = `Help ${companion.name} secure her account against unauthorized logins.`;
      pSettingLabel = 'Two-Factor Authentication (2FA)';
    } else if (
      cat.includes('job') ||
      cat.includes('task') ||
      cat.includes('work') ||
      title.includes('telegram') ||
      title.includes('rating') ||
      title.includes('fee') ||
      roundIdx === 2
    ) {
      pType = 'puzzle_fee';
      pInstruction = `Help ${companion.name} inspect the unexpected work-from-home offer.`;
      pDragLabel = '₹500 Upfront Deposit';
      pHiddenStamp = '⚠️ ADVANCE FEE SCAM TRAP!';
    } else if (
      cat.includes('delivery') ||
      cat.includes('parcel') ||
      cat.includes('electricity') ||
      cat.includes('bill') ||
      title.includes('power') ||
      title.includes('speed post') ||
      roundIdx === 3
    ) {
      pType = 'puzzle_link';
      pInstruction = `Help ${companion.name} verify the delivery address and link safely.`;
      pSuspiciousUrl = currentScenario.linkTargetDisplay || 'http://indiapost-update.xyz/pay-5rs';
    } else if (
      cat.includes('password') ||
      cat.includes('credential') ||
      title.includes('strength') ||
      roundIdx === 4
    ) {
      pType = 'puzzle_password';
      pInstruction = `Help ${companion.name} choose the strongest login security strategy.`;
    } else if (cat.includes('permission') || cat.includes('apk') || title.includes('torch')) {
      pType = 'puzzle_permissions';
      pInstruction = `Review permissions for the flashlight app and turn off unneeded access.`;
    } else if (cat.includes('update') || cat.includes('browser')) {
      pType = 'puzzle_update';
      pInstruction = `A pop-up demands an immediate update. Help ${companion.name} make the safe choice.`;
    } else {
      pType = 'puzzle_recovery';
      pInstruction = `Card details were entered on an unverified link. Help ${companion.name} take quick recovery action.`;
    }

    return {
      id: currentScenario.id,
      levelNumber: currentIndex + 1,
      totalLevels: scenarios.length,
      category: currentScenario.category,
      situation: pSituation,
      instruction: pInstruction,
      characterName: companion.name,
      characterRole: companion.role,
      characterType: companion.type,
      type: pType,
      dragObjectLabel: pDragLabel,
      hiddenWarningStamp: pHiddenStamp,
      deviceSettingLabel: pSettingLabel,
      deviceInitialState: false,
      messageSender: currentScenario.senderName,
      messageSnippet: currentScenario.fullMessageText,
      suspiciousUrl: pSuspiciousUrl,
      otpCode: pOtpCode,
      clues: [
        {
          id: 'clue_sender',
          label: `Sender: ${currentScenario.senderName}`,
          detail: currentScenario.inspectionClues.senderNote,
          isScamClue: false
        },
        {
          id: 'clue_url',
          label: `Destination: ${currentScenario.linkTargetDisplay}`,
          detail: currentScenario.inspectionClues.urlAnalysis,
          isScamClue: true
        }
      ],
      safeActionLabel: pSafeLabel,
      riskyActionLabel: pRiskyLabel,
      keyTakeaway: currentScenario.keyTakeaway,
      points: currentScenario.skipResolution.rewardPoints || 100
    };
  }, [currentScenario, currentIndex, scenarios.length]);

  const handleSolve = (isSafe: boolean, points: number) => {
    if (isSafe) {
      setRoundScore((prev) => prev + points);
      onAddScore(points);
    }
    setAnswerHistory((prev) => [
      ...prev,
      {
        scenarioTitle: currentScenario.title,
        category: currentScenario.category,
        isSafeOrCorrect: isSafe,
        takeaway: currentScenario.keyTakeaway
      }
    ]);
  };

  const handleNextPuzzle = () => {
    soundManager.playNextPuzzle();
    if (currentIndex + 1 < scenarios.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setGameState('result');
    }
  };

  const handleReplay = () => {
    soundManager.playTap();
    const fresh = getFreshClickOrSkipSession(5);
    setScenarios(fresh);
    setCurrentIndex(0);
    setRoundScore(0);
    setAnswerHistory([]);
    setGameState('playing');
    soundManager.startBgm();
  };

  const handleExitGame = () => {
    soundManager.stopBgm();
    onExit();
  };

  // 1. PLAYFUL INTRODUCTORY SCREEN FOR CYBARAM CYBER QUEST
  if (gameState === 'intro') {
    return (
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="bg-white rounded-3xl border-3 border-[#172B4D] p-6 sm:p-10 shadow-lg text-center relative overflow-hidden">
          {/* Notebook Paper Top Perforations */}
          <div className="absolute top-0 inset-x-0 h-4 flex justify-around px-4 pointer-events-none">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className="w-2.5 h-3.5 bg-[#F6F8F6] border-b border-x border-[#172B4D] rounded-b-md" />
            ))}
          </div>

          {/* Subtle notebook lines background */}
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage:
                'repeating-linear-gradient(transparent, transparent 27px, #E8EEEA 28px)',
              backgroundSize: '100% 28px'
            }}
          />

          <div className="relative z-10 space-y-6 pt-2">
            {/* Audio Controls Top-Right */}
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={handleToggleMusic}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                  isMusicMuted
                    ? 'bg-[#F6F8F6] text-[#8C9B95] border-[#E8EEEA]'
                    : 'bg-[#E8F5EE] text-[#123C35] border-[#DCECE3]'
                }`}
                title="Toggle Music"
              >
                <Music className="w-3.5 h-3.5" />
                <span>{isMusicMuted ? 'Music Off' : 'Music On'}</span>
              </button>

              <button
                type="button"
                onClick={handleToggleSfx}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                  isSfxMuted
                    ? 'bg-[#F6F8F6] text-[#8C9B95] border-[#E8EEEA]'
                    : 'bg-[#E8F5EE] text-[#123C35] border-[#DCECE3]'
                }`}
                title="Toggle Sound Effects"
              >
                {isSfxMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                <span>{isSfxMuted ? 'SFX Off' : 'SFX On'}</span>
              </button>
            </div>

            {/* Playful Hero Caricature Mascot */}
            <div className="flex justify-center py-1">
              <div className="relative w-32 h-32 rounded-full bg-gradient-to-b from-[#FFF1C2] to-[#DCECE3] border-3 border-[#172B4D] shadow-md flex items-center justify-center overflow-hidden">
                <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
                  <circle cx="50" cy="50" r="46" fill="#FBFDFA" />
                  {/* Arun the Guide Mascot */}
                  <g transform="translate(0, 4)">
                    <path d="M30 36 C30 20 70 20 70 36 C65 24 35 24 30 36 Z" fill="#1C1816" />
                    <ellipse cx="50" cy="48" rx="19" ry="21" fill="#D8A072" />
                    <path d="M38 46 Q42 41 46 46" stroke="#1C1816" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                    <path d="M54 46 Q58 41 62 46" stroke="#1C1816" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                    <path d="M40 56 Q50 68 60 56 Z" fill="#FFFFFF" stroke="#1C1816" strokeWidth="2" strokeLinejoin="round" />
                    <circle cx="35" cy="53" r="3.5" fill="#F87171" opacity="0.4" />
                    <circle cx="65" cy="53" r="3.5" fill="#F87171" opacity="0.4" />
                    <path d="M22 92 C22 72 78 72 78 92 Z" fill="#123C35" />
                    <polygon points="50,75 55,78 54,84 50,87 46,84 45,78" fill="#FFF1C2" stroke="#D8A84E" strokeWidth="1" />
                  </g>
                </svg>
                <div className="absolute -bottom-1 -right-1 bg-[#123C35] text-white rounded-full p-1.5 shadow-md border-2 border-white">
                  <ShieldCheck className="w-4 h-4 text-[#DCECE3]" />
                </div>
              </div>
            </div>

            {/* Game Title & Relatable Subtitle */}
            <div className="space-y-2">
              <span className="text-xs font-bold tracking-wider text-[#123C35] uppercase bg-[#E8F5EE] border border-[#DCECE3] px-3 py-1 rounded-full">
                Interactive Casual Puzzle Game
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172B4D] tracking-tight">
                CybAram Cyber Quest
              </h2>
              <p className="text-base sm:text-lg text-[#53615C] font-medium max-w-lg mx-auto">
                Help everyday people solve digital-safety puzzles. Tap, drag, and discover how to protect devices, spot trick links, and secure accounts.
              </p>
            </div>

            {/* Prominent Play Now Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={handleStartPlay}
                className="inline-flex items-center justify-center gap-3 px-9 py-4 rounded-2xl text-base sm:text-lg font-extrabold bg-[#123C35] text-white hover:bg-[#0e2f2a] active:scale-[0.98] transition-all cursor-pointer shadow-md hover:shadow-lg"
              >
                <Play className="w-5 h-5 fill-current text-[#DCECE3]" />
                <span>Play Now</span>
              </button>
            </div>

            <p className="text-xs text-[#53615C]">
              5 visual puzzles per round · Dynamic 124 BPM casual adventure BGM · Zero multiple-choice exam cards
            </p>
          </div>
        </div>
      </div>
    );
  }

  // 3. FINAL RESULTS SCREEN FOR CYBARAM CYBER QUEST
  if (gameState === 'result') {
    const maxScore = scenarios.length * 100;
    const safeCount = answerHistory.filter((a) => a.isSafeOrCorrect).length;
    const percentage = Math.min(100, Math.round((safeCount / scenarios.length) * 100));

    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <ResultCelebration
          gameTitle="CybAram Cyber Quest"
          score={roundScore}
          maxScore={maxScore}
          percentage={percentage}
          completedCount={scenarios.length}
          history={answerHistory}
          onReplay={handleReplay}
          onExit={handleExitGame}
        />
      </div>
    );
  }

  // 2. CASUAL INTERACTIVE NOTEBOOK PUZZLE BOARD
  return (
    <InteractivePuzzleBoard
      puzzle={currentPuzzleData}
      score={roundScore}
      onSolve={handleSolve}
      onNext={handleNextPuzzle}
      onExit={handleExitGame}
    />
  );
};
