import { CLICK_OR_SKIP_SCENARIOS_100, ClickOrSkipScenario } from '../data/scenariosClickOrSkip.ts';
import { SPOT_THE_SCAM_CASES_100, SpotTheScamCase } from '../data/scenariosSpotTheScam.ts';

const CLICK_OR_SKIP_RECENT_KEY = 'cybaram_recent_cos_ids';
const SPOT_THE_SCAM_RECENT_KEY = 'cybaram_recent_sts_ids';

function safeGetRecentIds(key: string): string[] {
  try {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      const stored = window.sessionStorage.getItem(key);
      if (stored) {
        return JSON.parse(stored);
      }
    }
  } catch {
    // fallback gracefully if sessionStorage is disabled/blocked
  }
  return [];
}

function safeSaveRecentIds(key: string, ids: string[]) {
  try {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      // keep max 50 recent IDs so pool never starves
      const trimmed = ids.slice(-50);
      window.sessionStorage.setItem(key, JSON.stringify(trimmed));
    }
  } catch {
    // fallback gracefully
  }
}

function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function getFreshClickOrSkipSession(count = 5): ClickOrSkipScenario[] {
  const recentIds = safeGetRecentIds(CLICK_OR_SKIP_RECENT_KEY);
  const allScenarios = CLICK_OR_SKIP_SCENARIOS_100;

  // Filter out recent scenarios if we have plenty of unused ones
  let eligible = allScenarios.filter((s) => !recentIds.includes(s.id));
  if (eligible.length < count) {
    // Pool exhausted or almost exhausted; reset recent memory
    eligible = allScenarios;
  }

  const shuffled = shuffleArray(eligible);
  const selected = shuffled.slice(0, count);

  // Update recent IDs
  const newRecent = [...recentIds, ...selected.map((s) => s.id)];
  safeSaveRecentIds(CLICK_OR_SKIP_RECENT_KEY, newRecent);

  return selected;
}

export function getFreshSpotTheScamSession(count = 5): SpotTheScamCase[] {
  const recentIds = safeGetRecentIds(SPOT_THE_SCAM_RECENT_KEY);
  const allCases = SPOT_THE_SCAM_CASES_100;

  let eligible = allCases.filter((c) => !recentIds.includes(c.id));
  if (eligible.length < count) {
    eligible = allCases;
  }

  const shuffled = shuffleArray(eligible);
  const selected = shuffled.slice(0, count);

  const newRecent = [...recentIds, ...selected.map((c) => c.id)];
  safeSaveRecentIds(SPOT_THE_SCAM_RECENT_KEY, newRecent);

  return selected;
}
