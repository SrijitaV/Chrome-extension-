import type { LeetCodeProblem } from "../../types/leetcode";

const CURRENT_PROBLEM_KEY = "current_problem";

export async function saveProblem(problem: LeetCodeProblem) {
  await chrome.storage.local.set({
    [CURRENT_PROBLEM_KEY]: problem,
  });
}

export async function getProblem(): Promise<LeetCodeProblem | null> {
  const result = await chrome.storage.local.get(CURRENT_PROBLEM_KEY);

  return (result[CURRENT_PROBLEM_KEY] as LeetCodeProblem) ?? null;
}

export async function clearProblem() {
  await chrome.storage.local.remove(CURRENT_PROBLEM_KEY);
}