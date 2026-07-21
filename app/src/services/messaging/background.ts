import type { LeetCodeProblem } from "../../types/leetcode";

export async function getCurrentProblem() {

  return await chrome.runtime.sendMessage({
    type: "GET_CURRENT_PROBLEM",
  }) as LeetCodeProblem | null;

}