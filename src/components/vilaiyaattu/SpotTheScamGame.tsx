import React, { useState, useEffect, useMemo } from 'react';
import { SpotTheScamCase } from '../../data/scenariosSpotTheScam.ts';
import { getFreshSpotTheScamSession } from '../../utils/gameSessionManager.ts';
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
  Play
} from 'lucide-react';

interface SpotTheScamGameProps {
  onAddScore: (points: number) => void;
  onExit: () => void;
}

export const SpotTheScamGame: React.FC<SpotTheScamGameProps> = ({ onAddScore, onExit }) => {
  const [gameState, setGameState] = useState<'intro' | 'playing' | 'result'>('intro');
  const [cases, setCases] = useState<SpotTheScamCase[]>(() => getFreshSpotTheScamSession(5));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [roundScore, setRoundScore] = useState(0);
  const [isMusicMuted, setIsMusicMuted] = useState(() => soundManager.isMusicMuted());
  const [isSfxMuted, setIsSfxMuted] = useState(() => soundManager.isSfxMuted());
  const [answerHistory, setAnswerHistory] = useState<RoundAnswerRecord[]>([]);

  const currentCase = cases[currentIndex];

  // Clean up BGM on unmount
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

  // Convert current Case to interactive discovery puzzle data
  const currentPuzzleData: InteractivePuzzleData = useMemo(() => {
    if (!currentCase) {
      return {
        id: 'fallback',
        levelNumber: 1,
        totalLevels: 5,
        category: 'Digital Investigation',
        instruction: 'Look closely. Find the clue.',
        characterName: 'Arun',
        type: 'magnify_clue',
        keyTakeaway: 'Always verify unexpected sender addresses independently.',
        points: 100
      };
    }

    const isLegit = currentCase.verdict === 'legitimate';
    const mainHotspot = currentCase.hotspots[0] || {
      id: 'h1',
      label: currentCase.senderAddress,
      description: 'Sender Address',
      isSuspicious: !isLegit,
      explanation: currentCase.investigatorTips[0]
    };

    let pType: PuzzleInteractionType = 'magnify_clue';
    let pInstruction = 'Can you spot the suspicious clue in this incoming message?';

    if (currentCase.title.toLowerCase().includes('wire') || currentCase.title.toLowerCase().includes('fee') || currentCase.title.toLowerCase().includes('bank')) {
      pType = 'drag_inspect';
      pInstruction = 'An urgent payment request arrived! Drag the bank coordinates away to inspect what is hidden underneath.';
    } else {
      pType = 'magnify_clue';
      pInstruction = 'Look closely at the message details. Tap the part that reveals whether it is genuine or deceptive.';
    }

    return {
      id: currentCase.id,
      levelNumber: currentIndex + 1,
      totalLevels: cases.length,
      category: currentCase.threatCategory,
      instruction: pInstruction,
      characterName: 'Arun',
      type: pType,
      dragObjectLabel: `Payment Coordinates: ₹${currentCase.pointsAwarded * 1000}`,
      hiddenWarningStamp: isLegit ? '✅ OFFICIAL VERIFIED VENDOR' : '⚠️ SPOOFED BANK COORDINATES!',
      messageSender: `${currentCase.senderDisplayName} (${currentCase.senderAddress})`,
      messageSnippet: `${currentCase.subjectOrHeader} — ${currentCase.bodyContent.paragraphs[0]}`,
      clues: currentCase.hotspots.map((h) => ({
        id: h.id,
        label: `${h.label}: ${h.description}`,
        detail: h.explanation,
        isScamClue: h.isSuspicious
      })),
      safeActionLabel: isLegit ? '✅ Verified Legitimate' : '🛡️ Flag Suspicious Address',
      riskyActionLabel: isLegit ? '⚡ Falsely Report as Scam' : '⚡ Accept without Checking',
      keyTakeaway: currentCase.investigatorTips[0] || currentCase.officialForensicExplanation,
      points: currentCase.pointsAwarded || 100,
      isScamScenario: !isLegit
    };
  }, [currentCase, currentIndex, cases.length]);

  const handleSolve = (isSafe: boolean, points: number) => {
    if (isSafe) {
      setRoundScore((prev) => prev + points);
      onAddScore(points);
    }
    setAnswerHistory((prev) => [
      ...prev,
      {
        scenarioTitle: currentCase.title,
        category: currentCase.threatCategory,
        isSafeOrCorrect: isSafe,
        takeaway: currentCase.investigatorTips[0] || currentCase.officialForensicExplanation
      }
    ]);
  };

  const handleNextPuzzle = () => {
    soundManager.playNextPuzzle();
    if (currentIndex + 1 < cases.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setGameState('result');
    }
  };

  const handleReplay = () => {
    soundManager.playTap();
    const fresh = getFreshSpotTheScamSession(5);
    setCases(fresh);
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

  // 1. CLEAN INTRODUCTORY SCREEN (Section 3)
  if (gameState === 'intro') {
    return (
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="bg-white rounded-3xl border-2 border-[#172B4D] p-6 sm:p-10 shadow-md text-center relative overflow-hidden">
          {/* Notebook Paper Top Perforation */}
          <div className="absolute top-0 inset-x-0 h-4 flex justify-around px-4 pointer-events-none">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className="w-2.5 h-3.5 bg-[#F6F8F6] border-b border-x border-[#172B4D] rounded-b-md" />
            ))}
          </div>

          {/* Subtle notebook lines background */}
          <div
            className="absolute inset-0 pointer-events-none opacity-30"
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

            {/* Playful Detective Magnifying Glass Illustration */}
            <div className="flex justify-center py-2">
              <svg
                viewBox="0 0 140 140"
                className="w-32 h-32 drop-shadow-sm"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="70" cy="70" r="65" fill="#E8F5EE" />
                <circle cx="70" cy="70" r="54" fill="#FFFFFF" />
                {/* Envelope / Document */}
                <rect x="40" y="44" width="60" height="42" rx="4" fill="#172B4D" />
                <path d="M40 46 L70 66 L100 46" stroke="#DCECE3" strokeWidth="2.5" />
                {/* Magnifying Glass with glow */}
                <circle cx="86" cy="78" r="22" fill="#FFF1C2" stroke="#123C35" strokeWidth="3.5" />
                <circle cx="86" cy="78" r="16" fill="#FFFFFF" opacity="0.6" />
                <line x1="102" y1="94" x2="118" y2="110" stroke="#123C35" strokeWidth="6" strokeLinecap="round" />
                <path d="M78 72 L84 78 L96 66" stroke="#123C35" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Game Title & Short Instruction */}
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172B4D] tracking-tight">
                Spot the Scam
              </h2>
              <p className="text-lg text-[#53615C] font-medium">
                “Look closely. Find the clue. Make your move.”
              </p>
            </div>

            {/* Prominent Play Now Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={handleStartPlay}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-bold bg-[#123C35] text-white hover:bg-[#0e2f2a] active:scale-[0.98] transition-all cursor-pointer shadow-md hover:shadow-lg"
              >
                <Play className="w-5 h-5 fill-current text-[#DCECE3]" />
                <span>Play Now</span>
              </button>
            </div>

            <p className="text-xs text-[#53615C]">
              5 visual discovery puzzles · Inspect lookalike domains, payment traps, and official alerts
            </p>
          </div>
        </div>
      </div>
    );
  }

  // 3. FINAL RESULTS SCREEN (Section 10)
  if (gameState === 'result') {
    const maxScore = cases.length * 100;
    const correctCount = answerHistory.filter((a) => a.isSafeOrCorrect).length;
    const percentage = Math.min(100, Math.round((correctCount / cases.length) * 100));

    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <ResultCelebration
          gameTitle="Spot the Scam"
          score={roundScore}
          maxScore={maxScore}
          percentage={percentage}
          completedCount={cases.length}
          history={answerHistory}
          onReplay={handleReplay}
          onExit={handleExitGame}
        />
      </div>
    );
  }

  // 2. CASUAL INTERACTIVE PUZZLE BOARD
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
