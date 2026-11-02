// CybAram Cyber Puzzles — Reference Book Data Bridge
// Re-exports the complete, validated 100-puzzle bank with multi-select support and zero duplicates

import {
  PUZZLES_BANK_100,
  DetailedPuzzleData,
  PuzzleOption,
  MatchingPair,
  OrderingStep,
  PuzzleInteractionType,
  CharacterId,
  DifficultyLevel,
  getFreshShuffledPuzzlesBank,
  validatePuzzleRegistry
} from './puzzlesBank100.ts';

export type ReferencePuzzleData = DetailedPuzzleData;
export type {
  PuzzleOption,
  MatchingPair,
  OrderingStep,
  PuzzleInteractionType,
  CharacterId,
  DifficultyLevel
};

export const PUZZLES_100: ReferencePuzzleData[] = PUZZLES_BANK_100;

// Fisher-Yates pure shuffling function to randomize deck every time game opens
export function getFreshShuffled100Puzzles(): ReferencePuzzleData[] {
  return getFreshShuffledPuzzlesBank();
}

export { validatePuzzleRegistry };
