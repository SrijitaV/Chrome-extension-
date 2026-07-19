import type { LeetCodeProblem } from "../../types/leetcode";

export function sendProblem(problem: LeetCodeProblem) {
  chrome.runtime.sendMessage({
    type: "CURRENT_PROBLEM",
    payload: problem,
  });
}