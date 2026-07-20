import { SELECTORS } from "../../constants/selectors";
import type { LeetCodeProblem } from "../../types/leetcode";

export function parseProblem(): LeetCodeProblem {
  const rawTitle =
    document.querySelector(SELECTORS.title)?.textContent?.trim() ??
    "Unknown";

  const difficulty =
    document.querySelector(SELECTORS.difficulty)?.textContent?.trim() ??
    "Unknown";

  const title = rawTitle.replace(/^\d+\.\s*/, "");

  return {
    title,
    difficulty,
    url: window.location.href,
  };
}