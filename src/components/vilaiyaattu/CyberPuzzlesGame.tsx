import React, { useState, useEffect } from 'react';
import {
  getFreshShuffled100Puzzles,
  ReferencePuzzleData
} from '../../data/scenariosReferenceBook.ts';
import { soundManager } from '../../utils/soundEffects.ts';
import { PuzzleBoard } from './PuzzleBoard.tsx';
import { ResultCelebration, RoundAnswerRecord } from './ResultCelebration.tsx';
import {
  Volume2,
  VolumeX,
  Music,
  Play,
  ShieldCheck,
  Sparkles,
  Layers,
  ArrowRight,
  Compass,
  Flame,
  CheckCircle2,
  Lightbulb,
  Shuffle,
  User,
  Clock,
  Award,
  Zap,
  Edit2
} from 'lucide-react';

interface CyberPuzzlesGameProps {
  onAddScore: (points: number) => void;
  onExit: () => void;
}

export type GameLengthOption = 5 | 10 | 15 | 25 | 50 | 100;

interface LengthCardInfo {
  length: GameLengthOption;
  title: string;
  badge: string;
  duration: string;
  difficulty: string;
  desc: string;
  accent: string;
}

const LENGTH_OPTIONS: LengthCardInfo[] = [
  {
    length: 5,
    title: 'Quick Play',
    badge: '5 Puzzles',
    duration: '~2 mins',
    difficulty: 'Casual',
    desc: 'Rapid safety check-in covering essential everyday threats.',
    accent: 'border-[#123C35] bg-[#E8F5EE]/60 hover:bg-[#E8F5EE]'
  },
  {
    length: 10,
    title: 'Short Adventure',
    badge: '10 Puzzles',
    duration: '~4 mins',
    difficulty: 'Standard',
    desc: 'A popular balanced round testing varied scam vectors and settings.',
    accent: 'border-[#2E5C8A] bg-[#EBF3FB]/60 hover:bg-[#EBF3FB]'
  },
  {
    length: 15,
    title: 'Standard Adventure',
    badge: '15 Puzzles',
    duration: '~6 mins',
    difficulty: 'Balanced',
    desc: 'Well-rounded practice across phishing, OTPs, QR codes, and privacy.',
    accent: 'border-[#D8A84E] bg-[#FFF9DB]/70 hover:bg-[#FFF9DB]'
  },
  {
    length: 25,
    title: 'Extended Adventure',
    badge: '25 Puzzles',
    duration: '~10 mins',
    difficulty: 'Challenging',
    desc: 'Comprehensive drill sharpening your digital instincts against deceptive traps.',
    accent: 'border-[#123C35] bg-[#E8F5EE]/80 hover:bg-[#E8F5EE]'
  },
  {
    length: 50,
    title: 'Expert Challenge',
    badge: '50 Puzzles',
    duration: '~20 mins',
    difficulty: 'Advanced',
    desc: 'Intensive gauntlet navigating half of the validated puzzle vault.',
    accent: 'border-[#704214] bg-[#FFF1C2]/80 hover:bg-[#FFF1C2]'
  },
  {
    length: 100,
    title: 'Full Master Run',
    badge: '100 Puzzles',
    duration: '~40 mins',
    difficulty: 'Mastery',
    desc: 'The complete 100-scenario marathon. Zero duplicates, pure random shuffle.',
    accent: 'border-[#172B4D] bg-[#F0F4F8] hover:bg-[#E4ECF4]'
  }
];

export const CyberPuzzlesGame: React.FC<CyberPuzzlesGameProps> = ({
  onAddScore,
  onExit
}) => {
  // Stored player name
  const [playerName, setPlayerName] = useState<string>(() => {
    try {
      return localStorage.getItem('cybaram_player_name') || '';
    } catch {
      return '';
    }
  });

  const [nameInput, setNameInput] = useState<string>(() => {
    try {
      return localStorage.getItem('cybaram_player_name') || '';
    } catch {
      return '';
    }
  });

  // Flow states: 'name_input' (if no name yet) | 'length_select' | 'playing' | 'victory_summary'
  const [gameState, setGameState] = useState<'name_input' | 'length_select' | 'playing' | 'victory_summary'>(
    () => (playerName.trim().length > 0 ? 'length_select' : 'name_input')
  );

  const [chosenLength, setChosenLength] = useState<GameLengthOption>(10);
  const [activeDeck, setActiveDeck] = useState<ReferencePuzzleData[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cumulativeScore, setCumulativeScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [runHistory, setRunHistory] = useState<RoundAnswerRecord[]>([]);

  const [isMusicMuted, setIsMusicMuted] = useState(() => soundManager.isMusicMuted());
  const [isSfxMuted, setIsSfxMuted] = useState(() => soundManager.isSfxMuted());

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

  const handleSaveNameAndProceed = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    soundManager.playTap();
    const finalName = nameInput.trim() || 'Cyber Defender';
    setPlayerName(finalName);
    try {
      localStorage.setItem('cybaram_player_name', finalName);
    } catch {
      // ignore
    }
    setGameState('length_select');
  };

  // Launch a game of specified length with unique non-repeating shuffled puzzles
  const handleStartGame = (length: GameLengthOption) => {
    soundManager.playTap();
    soundManager.startBgm();

    // 1. Fresh pure random shuffle of the 100-puzzle bank
    const shuffled = getFreshShuffled100Puzzles();

    // 2. Take exactly `length` unique puzzles (no repeats within the game)
    const selected = shuffled.slice(0, length).map((p, index) => ({
      ...p,
      puzzleNumber: index + 1,
      totalInRound: length
    }));

    setChosenLength(length);
    setActiveDeck(selected);
    setCurrentIndex(0);
    setCumulativeScore(0);
    setStreak(0);
    setRunHistory([]);
    setGameState('playing');
  };

  const currentPuzzle = activeDeck[currentIndex];

  const handleSolvePuzzle = (
    isCorrect: boolean,
    pointsAwarded: number,
    tip: string
  ) => {
    const bonus = isCorrect && streak >= 2 ? 20 : 0;
    const finalPoints = isCorrect ? pointsAwarded + bonus : 0;

    if (isCorrect) {
      setCumulativeScore((prev) => prev + finalPoints);
      setStreak((prev) => prev + 1);
      onAddScore(finalPoints);
    } else {
      setStreak(0);
    }

    setRunHistory((prev) => [
      ...prev,
      {
        scenarioTitle: currentPuzzle?.title || 'Safety Challenge',
        category: currentPuzzle?.categoryLabel || 'Digital Safety',
        isSafeOrCorrect: isCorrect,
        takeaway: tip
      }
    ]);
  };

  const handleNextPuzzle = () => {
    const nextIndex = currentIndex + 1;
    // Check if player has finished all chosen puzzles
    if (nextIndex >= activeDeck.length) {
      setGameState('victory_summary');
    } else {
      setCurrentIndex(nextIndex);
    }
  };

  const handleReplayCurrentLength = () => {
    handleStartGame(chosenLength);
  };

  const safeCount = runHistory.filter((h) => h.isSafeOrCorrect).length;
  const percentage =
    runHistory.length > 0
      ? Math.round((safeCount / runHistory.length) * 100)
      : 100;

  return (
    <div className="min-h-screen bg-[#F6F8F6] pb-16">
      {/* =========================================================================
          SCREEN 1: PLAYER ONBOARDING & NAME ENTRY
          ========================================================================= */}
      {gameState === 'name_input' && (
        <div className="max-w-xl mx-auto px-4 sm:px-6 pt-10 sm:pt-16">
          <div className="bg-white rounded-3xl border-3 border-[#172B4D] shadow-xl overflow-hidden p-6 sm:p-8 space-y-6">
            <div className="text-center space-y-2">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FFF1C2] to-[#E8F5EE] border-2 border-[#172B4D] mx-auto flex items-center justify-center text-3xl shadow-sm">
                👋
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-[#172B4D] tracking-tight">
                Welcome to Cyber Puzzles
              </h1>
              <p className="text-sm text-[#53615C]">
                What should we call you on your digital safety journey?
              </p>
            </div>

            <form onSubmit={handleSaveNameAndProceed} className="space-y-4">
              <div>
                <label
                  htmlFor="player-name-input"
                  className="block text-xs font-bold text-[#172B4D] uppercase tracking-wider mb-1.5"
                >
                  Your Name or Nickname
                </label>
                <div className="relative">
                  <User className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    id="player-name-input"
                    type="text"
                    maxLength={20}
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    placeholder="Enter your name (e.g. Priya, Arun, Kavin)"
                    className="w-full pl-11 pr-4 py-3 rounded-2xl border-2 border-[#E8EEEA] focus:border-[#123C35] focus:outline-hidden text-sm sm:text-base font-bold text-[#172B4D] placeholder:font-normal placeholder:text-slate-400"
                    autoFocus
                  />
                </div>
              </div>

              {/* Quick Preset Chips */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-semibold text-[#53615C] block">
                  Quick suggestions:
                </span>
                <div className="flex flex-wrap gap-2">
                  {['Priya', 'Arun', 'Maya', 'Kavin', 'Ananya', 'Cyber Defender'].map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => {
                        soundManager.playTap();
                        setNameInput(preset);
                      }}
                      className="px-3 py-1 rounded-full text-xs font-bold bg-[#F6F8F6] border border-[#E8EEEA] hover:border-[#123C35] hover:bg-[#E8F5EE] text-[#172B4D] transition-colors cursor-pointer"
                    >
                      {preset}
                    </button>
                  ))}
                </div>
              </div>

              {/* Privacy Notice */}
              <div className="p-3 rounded-2xl bg-[#E8F5EE] border border-[#123C35]/20 flex items-start gap-2.5 text-xs text-[#123C35]">
                <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-700 mt-0.5" />
                <p className="leading-relaxed">
                  <strong>Privacy first:</strong> Your name stays 100% private in your local browser and is only used on your result card and downloadable certificate poster.
                </p>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl text-sm font-bold bg-[#123C35] text-white hover:bg-[#0e2f2a] active:scale-[0.98] transition-all cursor-pointer shadow-md"
              >
                <span>Continue to Choose Adventure</span>
                <ArrowRight className="w-4 h-4 text-[#DCECE3]" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* =========================================================================
          SCREEN 2: GAME LENGTH SELECTOR & HUB
          ========================================================================= */}
      {gameState === 'length_select' && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 sm:pt-10">
          <div className="bg-white rounded-3xl border-3 border-[#172B4D] shadow-xl overflow-hidden">
            {/* Header Art & Hero Banner */}
            <div className="bg-gradient-to-r from-[#FFF1C2] via-[#F6F8F6] to-[#E8F5EE] border-b-2 border-[#172B4D] p-5 sm:p-7">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white border-2 border-[#172B4D] shadow-xs flex items-center justify-center shrink-0">
                  <span className="text-3xl sm:text-4xl select-none">🧩</span>
                </div>

                <div className="flex-1 text-center sm:text-left space-y-1">
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#123C35]">
                      CybAram Vilaiyaattu
                    </span>
                    <span className="text-xs text-slate-300">·</span>
                    <span className="text-xs font-bold text-[#172B4D]">
                      Player: {playerName || 'Cyber Defender'}
                    </span>
                    <button
                      type="button"
                      onClick={() => setGameState('name_input')}
                      className="text-xs text-[#123C35] hover:underline inline-flex items-center gap-0.5 cursor-pointer ml-1"
                      title="Edit player name"
                    >
                      <Edit2 className="w-3 h-3" />
                      <span>Edit</span>
                    </button>
                  </div>

                  <h1 className="text-2xl sm:text-3xl font-black text-[#172B4D] tracking-tight">
                    CybAram Cyber Puzzles
                  </h1>

                  <p className="text-xs sm:text-sm text-[#53615C] font-medium leading-relaxed">
                    Select your adventure length to begin playing visual digital-safety puzzles.
                  </p>
                </div>
              </div>
            </div>

            {/* Selection Body */}
            <div className="p-5 sm:p-7 space-y-5">
              {/* Shuffling Announcement Banner */}
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#E8F5EE] border border-[#123C35]/20 text-xs text-[#123C35]">
                <Shuffle className="w-4 h-4 shrink-0 text-[#123C35]" />
                <p className="font-medium leading-relaxed">
                  <strong className="font-bold">Dynamic Random Shuffling:</strong> Every session pulls freshly randomized scenarios from the 100-puzzle bank with zero duplicates!
                </p>
              </div>

              {/* Game Length Selection Grid */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-[#172B4D]">
                    Choose Adventure Length
                  </h2>
                  <span className="text-xs text-[#53615C]">
                    All puzzles strictly unique per run
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {LENGTH_OPTIONS.map((opt) => (
                    <button
                      key={opt.length}
                      type="button"
                      onClick={() => handleStartGame(opt.length)}
                      className={`p-4 rounded-2xl border-2 text-left transition-all cursor-pointer group shadow-2xs hover:shadow-md flex flex-col justify-between ${opt.accent}`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-xs font-extrabold text-[#172B4D] uppercase tracking-wider">
                            {opt.title}
                          </span>
                          <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-[#172B4D] text-white">
                            {opt.badge}
                          </span>
                        </div>
                        <p className="text-xs text-[#53615C] leading-snug mb-3">
                          {opt.desc}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-black/5 text-[11px] font-semibold text-[#172B4D]">
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3 h-3 text-slate-500" />
                          {opt.duration}
                        </span>
                        <span className="inline-flex items-center gap-1 text-[#123C35] font-bold group-hover:translate-x-0.5 transition-transform">
                          <span>Start Run</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Audio Controls & Hub Exit */}
              <div className="p-3.5 rounded-xl bg-[#F6F8F6] border border-[#E8EEEA] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={handleToggleMusic}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border cursor-pointer ${
                      isMusicMuted
                        ? 'bg-white text-[#8C9B95] border-[#E8EEEA]'
                        : 'bg-[#FFF1C2] text-[#8C6D15] border-[#D8A84E]'
                    }`}
                  >
                    <Music className="w-3.5 h-3.5" />
                    <span>{isMusicMuted ? 'Music Off' : 'Music On'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleToggleSfx}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border cursor-pointer ${
                      isSfxMuted
                        ? 'bg-white text-[#8C9B95] border-[#E8EEEA]'
                        : 'bg-[#E8F5EE] text-[#123C35] border-[#DCECE3]'
                    }`}
                  >
                    {isSfxMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                    <span>{isSfxMuted ? 'SFX Off' : 'SFX On'}</span>
                  </button>
                </div>

                <button
                  type="button"
                  onClick={onExit}
                  className="text-xs font-semibold text-[#53615C] hover:text-[#172B4D] cursor-pointer"
                >
                  Exit to Hub
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          SCREEN 3: ACTIVE PLAYING STAGE
          ========================================================================= */}
      {gameState === 'playing' && currentPuzzle && (
        <PuzzleBoard
          puzzle={currentPuzzle}
          score={cumulativeScore}
          roundIndex={currentIndex}
          totalRoundCount={chosenLength}
          onSolve={handleSolvePuzzle}
          onNext={handleNextPuzzle}
          onExit={onExit}
        />
      )}

      {/* =========================================================================
          SCREEN 4: VICTORY CELEBRATION & DOWNLOADABLE POSTER
          ========================================================================= */}
      {gameState === 'victory_summary' && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 sm:pt-10">
          <ResultCelebration
            gameTitle={`CybAram Cyber Puzzles (${chosenLength} Puzzles)`}
            playerName={playerName || 'Cyber Defender'}
            score={cumulativeScore}
            maxScore={chosenLength * 100}
            percentage={percentage}
            completedCount={chosenLength}
            history={runHistory}
            onReplay={handleReplayCurrentLength}
            onChangeLength={() => setGameState('length_select')}
            onExit={onExit}
          />
        </div>
      )}
    </div>
  );
};
