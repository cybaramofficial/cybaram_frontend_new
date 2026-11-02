import React, { useState, useEffect } from 'react';
import { soundManager } from '../../utils/soundEffects.ts';
import { IllustratedScene } from './IllustratedScene.tsx';
import { PuzzleControlPanel } from './PuzzleControlPanel.tsx';
import { Volume2, VolumeX, Music, Award } from 'lucide-react';
import { ReferencePuzzleData } from '../../data/scenariosReferenceBook.ts';
export type { ReferencePuzzleData };

interface PuzzleBoardProps {
  puzzle: ReferencePuzzleData;
  score: number;
  roundIndex: number;
  totalRoundCount: number;
  onSolve: (isCorrect: boolean, pointsAwarded: number, tip: string) => void;
  onNext: () => void;
  onExit: () => void;
}

export const PuzzleBoard: React.FC<PuzzleBoardProps> = ({
  puzzle,
  score,
  roundIndex,
  totalRoundCount,
  onSolve,
  onNext,
  onExit
}) => {
  const [isMusicMuted, setIsMusicMuted] = useState(() => soundManager.isMusicMuted());
  const [isSfxMuted, setIsSfxMuted] = useState(() => soundManager.isSfxMuted());

  // Interactive state
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<Record<string, string>>({});
  const [activeLeftMatch, setActiveLeftMatch] = useState<string | null>(null);
  const [orderedStepIds, setOrderedStepIds] = useState<string[]>([]);
  const [textAnswer, setTextAnswer] = useState<string>('');

  const [isSolved, setIsSolved] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [hasAwardedPoints, setHasAwardedPoints] = useState(false);

  // Determine if current puzzle is multi-select
  const isMultiSelect =
    puzzle.interactionType === 'multi-select' ||
    (puzzle.correctTargetIds && puzzle.correctTargetIds.length > 1) ||
    puzzle.sceneType === 'symptoms_checklist';

  // Reset when puzzle changes
  useEffect(() => {
    setSelectedId(null);
    setSelectedIds([]);
    setMatchedPairs({});
    setActiveLeftMatch(null);
    setTextAnswer('');
    setIsSolved(false);
    setIsCorrect(null);
    setHasAwardedPoints(false);

    // Initialize ordering steps if present
    if (puzzle.orderingSteps && puzzle.orderingSteps.length > 0) {
      // Reverse or shuffle steps to ensure the user must actively order them
      const ids = puzzle.orderingSteps.map((s) => s.id);
      setOrderedStepIds([...ids].reverse());
    } else {
      setOrderedStepIds([]);
    }
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

  // 1. Single Select / Tap-to-discover handler
  const handleSingleSelect = (targetId: string) => {
    if (isSolved) return;

    // Safety guard: if this is actually a multi-select puzzle, route to toggle!
    if (isMultiSelect) {
      handleToggleMultiOption(targetId);
      return;
    }

    soundManager.playTap();
    setSelectedId(targetId);
    setIsSolved(true);

    const isMatch =
      targetId === puzzle.correctTargetId ||
      (puzzle.correctTargetIds?.includes(targetId) && puzzle.correctTargetIds.length === 1);

    setIsCorrect(Boolean(isMatch));

    if (!hasAwardedPoints) {
      setHasAwardedPoints(true);
      if (isMatch) {
        soundManager.playSuccess();
        onSolve(true, puzzle.points || 100, puzzle.learningTip);
      } else {
        soundManager.playWarning();
        onSolve(false, 0, puzzle.learningTip);
      }
    }
  };

  // 2. Multi-Select Toggle Handler
  const handleToggleMultiOption = (optionId: string) => {
    if (isSolved) return;
    soundManager.playTap();
    setSelectedIds((prev) =>
      prev.includes(optionId) ? prev.filter((id) => id !== optionId) : [...prev, optionId]
    );
  };

  // 3. Multi-Select Clear Handler
  const handleClearMultiSelection = () => {
    if (isSolved) return;
    soundManager.playTap();
    setSelectedIds([]);
  };

  // 4. Multi-Select Submit ("Check Answers") Handler — STRICT SET VALIDATION
  const handleSubmitMultiSelect = () => {
    if (isSolved || selectedIds.length === 0) return;

    // Target answer IDs required for this puzzle
    const targetIds =
      puzzle.correctTargetIds && puzzle.correctTargetIds.length > 0
        ? puzzle.correctTargetIds
        : puzzle.correctTargetId
        ? [puzzle.correctTargetId]
        : ['urgent_deadline', 'unrealistic_offer'];

    const targetSet = new Set(targetIds);
    const userSet = new Set(selectedIds);

    // Exact set equality: same size and every selected ID must be in targetSet
    const isMatch = userSet.size === targetSet.size && [...userSet].every((id) => targetSet.has(id));

    setIsSolved(true);
    setIsCorrect(isMatch);

    if (!hasAwardedPoints) {
      setHasAwardedPoints(true);
      if (isMatch) {
        soundManager.playSuccess();
        onSolve(true, puzzle.points || 100, puzzle.learningTip);
      } else {
        soundManager.playWarning();
        onSolve(false, 0, puzzle.learningTip);
      }
    }
  };

  // 5. Matching Handlers
  const handleSelectLeftMatch = (leftId: string) => {
    if (isSolved) return;
    soundManager.playTap();
    setActiveLeftMatch(leftId);
  };

  const handleSelectRightMatch = (rightId: string) => {
    if (isSolved) return;
    soundManager.playTap();
    if (activeLeftMatch) {
      setMatchedPairs((prev) => ({
        ...prev,
        [activeLeftMatch]: rightId
      }));
      setActiveLeftMatch(null);
    }
  };

  const handleSubmitMatching = () => {
    if (isSolved) return;

    const pairs = puzzle.matchingPairs || [];
    let allCorrect = true;

    if (Object.keys(matchedPairs).length < pairs.length) {
      allCorrect = false;
    } else {
      for (const pair of pairs) {
        if (matchedPairs[pair.leftId] !== pair.rightId) {
          allCorrect = false;
          break;
        }
      }
    }

    setIsSolved(true);
    setIsCorrect(allCorrect);

    if (!hasAwardedPoints) {
      setHasAwardedPoints(true);
      if (allCorrect) {
        soundManager.playSuccess();
        onSolve(true, puzzle.points || 100, puzzle.learningTip);
      } else {
        soundManager.playWarning();
        onSolve(false, 0, puzzle.learningTip);
      }
    }
  };

  // 6. Ordering Handlers
  const handleMoveStep = (stepId: string, direction: 'up' | 'down') => {
    if (isSolved) return;
    soundManager.playTap();
    const index = orderedStepIds.indexOf(stepId);
    if (index === -1) return;

    const newArr = [...orderedStepIds];
    if (direction === 'up' && index > 0) {
      [newArr[index - 1], newArr[index]] = [newArr[index], newArr[index - 1]];
    } else if (direction === 'down' && index < newArr.length - 1) {
      [newArr[index + 1], newArr[index]] = [newArr[index], newArr[index + 1]];
    }
    setOrderedStepIds(newArr);
  };

  const handleSubmitOrdering = () => {
    if (isSolved) return;

    const steps = [...(puzzle.orderingSteps || [])].sort((a, b) => a.correctOrder - b.correctOrder);
    const correctIds = steps.map((s) => s.id);

    const isMatch =
      orderedStepIds.length === correctIds.length &&
      orderedStepIds.every((id, idx) => id === correctIds[idx]);

    setIsSolved(true);
    setIsCorrect(isMatch);

    if (!hasAwardedPoints) {
      setHasAwardedPoints(true);
      if (isMatch) {
        soundManager.playSuccess();
        onSolve(true, puzzle.points || 100, puzzle.learningTip);
      } else {
        soundManager.playWarning();
        onSolve(false, 0, puzzle.learningTip);
      }
    }
  };

  // 7. Text Refusal Handlers
  const handleSubmitText = () => {
    if (isSolved || !textAnswer.trim()) return;

    const trimmed = textAnswer.trim().toLowerCase();
    const accepted = (puzzle.acceptedAnswers || []).map((a) => a.toLowerCase());

    const isMatch =
      accepted.length === 0 ||
      accepted.some((a) => trimmed.includes(a) || a.includes(trimmed));

    setIsSolved(true);
    setIsCorrect(isMatch);

    if (!hasAwardedPoints) {
      setHasAwardedPoints(true);
      if (isMatch) {
        soundManager.playSuccess();
        onSolve(true, puzzle.points || 100, puzzle.learningTip);
      } else {
        soundManager.playWarning();
        onSolve(false, 0, puzzle.learningTip);
      }
    }
  };

  const characterEmotion = !isSolved
    ? 'curious'
    : isCorrect
    ? 'celebrating'
    : 'cautious';

  const currentNum = puzzle.puzzleNumber ?? (roundIndex + 1);
  const totalInRound = puzzle.totalInRound ?? totalRoundCount ?? 5;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
      {/* 1. TOP HEADER BAR */}
      <div className="flex items-center justify-between gap-4 mb-4 bg-white/90 backdrop-blur-xs px-4 sm:px-6 py-3 rounded-2xl border border-[#E8EEEA] shadow-xs">
        {/* Left: Puzzle X of Y | Category */}
        <div className="flex items-center gap-2">
          <span className="text-xs sm:text-sm font-bold text-[#172B4D]">
            Puzzle {currentNum} of {totalInRound}
          </span>
          <span className="text-xs text-[#8C9B95]">|</span>
          <span className="text-xs sm:text-sm font-medium text-[#53615C]">
            {puzzle.categoryLabel}
          </span>
        </div>

        {/* Center: Dynamic Responsive Progress Indicator */}
        <div className="hidden sm:flex items-center gap-2">
          {totalInRound <= 15 ? (
            <div className="flex items-center gap-1.5">
              {Array.from({ length: totalInRound }).map((_, idx) => {
                const isCompleted = idx < currentNum - 1;
                const isCurrent = idx === currentNum - 1;

                return (
                  <div
                    key={idx}
                    className={`h-2.5 rounded-full transition-all ${
                      isCurrent
                        ? 'w-7 bg-[#F59E0B]'
                        : isCompleted
                        ? 'w-4 bg-[#123C35]'
                        : 'w-4 bg-[#E2E8F0]'
                    }`}
                  />
                );
              })}
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <div className="w-32 lg:w-44 h-2.5 rounded-full bg-[#E2E8F0] overflow-hidden p-0.5">
                <div
                  className="h-full rounded-full bg-[#123C35] transition-all duration-300"
                  style={{ width: `${Math.round(((currentNum - 1) / totalInRound) * 100)}%` }}
                />
              </div>
              <span className="text-[11px] font-bold text-[#53615C]">
                {Math.round(((currentNum - 1) / totalInRound) * 100)}%
              </span>
            </div>
          )}
        </div>

        {/* Right Controls: Score Badge, Music & SFX */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#123C35] text-white shadow-2xs">
            <span className="text-xs">⭐</span>
            <span className="text-xs font-bold font-mono tracking-tight">{score} pts</span>
          </div>

          <button
            type="button"
            onClick={handleToggleMusic}
            className={`p-2 rounded-xl text-xs font-semibold transition-all border cursor-pointer ${
              isMusicMuted
                ? 'bg-[#F6F8F6] text-[#8C9B95] border-[#E8EEEA]'
                : 'bg-[#FFF1C2] text-[#8C6D15] border-[#D8A84E]'
            }`}
            title={isMusicMuted ? 'Music paused' : 'Music playing'}
          >
            <Music className="w-3.5 h-3.5" />
          </button>

          <button
            type="button"
            onClick={handleToggleSfx}
            className={`p-2 rounded-xl text-xs font-semibold transition-all border cursor-pointer ${
              isSfxMuted
                ? 'bg-[#F6F8F6] text-[#8C9B95] border-[#E8EEEA]'
                : 'bg-[#E8F5EE] text-[#123C35] border-[#DCECE3]'
            }`}
            title={isSfxMuted ? 'SFX muted' : 'SFX on'}
          >
            {isSfxMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
          </button>

          <button
            type="button"
            onClick={onExit}
            className="text-xs font-medium text-[#53615C] hover:text-[#172B4D] px-2 py-1 transition-colors cursor-pointer"
          >
            Exit
          </button>
        </div>
      </div>

      {/* 2. MAIN TWO-COLUMN GAMEPLAY CARD */}
      <div className="bg-white rounded-3xl border-2 border-[#E8EEEA] shadow-md overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch">
        {/* Left Visual Stage */}
        <div className="lg:col-span-7 p-3 sm:p-5 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-[#E8EEEA] bg-[#FAF8F5]">
          <IllustratedScene
            puzzle={puzzle}
            sceneType={puzzle.sceneType}
            characterId={puzzle.characterId}
            characterEmotion={characterEmotion}
            selectedId={selectedId}
            selectedIds={selectedIds}
            matchedPairs={matchedPairs}
            activeLeftMatch={activeLeftMatch}
            orderedStepIds={orderedStepIds}
            textAnswer={textAnswer}
            isSolved={isSolved}
            isCorrect={isCorrect}
            onSelectOption={handleSingleSelect}
            onToggleOption={handleToggleMultiOption}
            onSubmitMultiSelect={handleSubmitMultiSelect}
            onClearMultiSelect={handleClearMultiSelection}
            onSelectLeftMatch={handleSelectLeftMatch}
            onSelectRightMatch={handleSelectRightMatch}
            onSubmitMatching={handleSubmitMatching}
            onMoveStep={handleMoveStep}
            onSubmitOrdering={handleSubmitOrdering}
            onChangeText={setTextAnswer}
            onSubmitText={handleSubmitText}
          />
        </div>

        {/* Right Control & Learning Panel */}
        <div className="lg:col-span-5 p-4 sm:p-6 flex flex-col justify-between bg-white">
          <PuzzleControlPanel
            iconType={puzzle.iconType}
            title={puzzle.title}
            instruction={puzzle.instruction}
            hintText={puzzle.hintText}
            isSolved={isSolved}
            isCorrect={isCorrect}
            feedbackText={
              isCorrect ? puzzle.successFeedback : puzzle.correctionFeedback
            }
            learningTip={puzzle.learningTip}
            onNextPuzzle={() => {
              soundManager.playTap();
              onNext();
            }}
          />
        </div>
      </div>
    </div>
  );
};
