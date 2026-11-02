import React from 'react';
import {
  Search,
  Shield,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  ArrowRight,
  ListOrdered
} from 'lucide-react';

export interface PuzzleControlPanelProps {
  iconType: 'magnifier' | 'shield' | 'list';
  title: string;
  instruction: string;
  hintText: string;
  isSolved: boolean;
  isCorrect: boolean | null;
  feedbackText: string;
  learningTip: string;
  onNextPuzzle: () => void;
}

export const PuzzleControlPanel: React.FC<PuzzleControlPanelProps> = ({
  iconType,
  title,
  instruction,
  hintText,
  isSolved,
  isCorrect,
  feedbackText,
  learningTip,
  onNextPuzzle
}) => {
  return (
    <div className="bg-white rounded-2xl p-5 sm:p-7 flex flex-col justify-between h-full border border-[#E8EEEA] space-y-5">
      {/* 1. TOP HEADER: Icon Badge + Main Action Title + Short Instruction */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#E8F5EE] border-2 border-[#123C35] text-[#123C35] flex items-center justify-center shrink-0 shadow-2xs">
            {iconType === 'magnifier' ? (
              <Search className="w-5 h-5 stroke-[2.5]" />
            ) : iconType === 'shield' ? (
              <Shield className="w-5 h-5 stroke-[2.5]" />
            ) : (
              <ListOrdered className="w-5 h-5 stroke-[2.5]" />
            )}
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-[#172B4D] tracking-tight leading-tight">
            {title}
          </h2>
        </div>

        <p className="text-sm sm:text-base text-[#53615C] font-normal leading-relaxed">
          {instruction}
        </p>
      </div>

      {/* 2. DYNAMIC BOTTOM SECTION: Hint Box BEFORE Action vs Feedback AFTER Action */}
      {!isSolved ? (
        /* Yellow Hint Box (Directly matching image_b94b5097.png) */
        <div className="bg-[#FFF9DB] border border-[#FDE047] rounded-2xl p-4 flex items-start gap-3 shadow-2xs">
          <div className="w-6 h-6 rounded-full bg-[#FEF08A] text-[#854D0E] flex items-center justify-center shrink-0 mt-0.5">
            <Lightbulb className="w-4 h-4 fill-current text-amber-500" />
          </div>
          <p className="text-xs sm:text-sm font-medium text-[#713F12] leading-snug">
            {hintText}
          </p>
        </div>
      ) : (
        /* Post-Action Feedback & Learning Tip Box */
        <div className="space-y-3 animate-fadeIn">
          <div
            className={`p-4 rounded-2xl border-2 ${
              isCorrect
                ? 'bg-emerald-50 border-emerald-600 text-emerald-950'
                : 'bg-rose-50 border-rose-600 text-rose-950'
            }`}
          >
            <div className="flex items-start gap-2.5">
              {isCorrect ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              ) : (
                <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
              )}
              <div className="space-y-1">
                <span className="text-xs sm:text-sm font-bold block">
                  {feedbackText}
                </span>
              </div>
            </div>
          </div>

          {/* Golden Learning Tip Card (from Reference Book) */}
          <div className="bg-[#FFF9DB] border-2 border-[#D8A84E] rounded-2xl p-3.5 space-y-1 shadow-2xs">
            <span className="text-[10px] font-black tracking-wider text-[#854D0E] uppercase block">
              💡 LEARNING TIP
            </span>
            <p className="text-xs sm:text-sm font-medium text-[#172B4D] leading-snug">
              {learningTip}
            </p>
          </div>

          {/* Next Puzzle CTA Button */}
          <button
            type="button"
            onClick={onNextPuzzle}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-[#123C35] text-white hover:bg-[#0e2f2a] active:scale-[0.99] transition-all cursor-pointer shadow-md"
          >
            <span>Next Puzzle</span>
            <ArrowRight className="w-4 h-4 text-[#DCECE3]" />
          </button>
        </div>
      )}
    </div>
  );
};
