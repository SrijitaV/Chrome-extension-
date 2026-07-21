import type { LeetCodeProblem } from "../../types/leetcode";

export function parseProblem(): LeetCodeProblem {
  const links = [
    ...document.querySelectorAll<HTMLAnchorElement>('a[href^="/problems/"]'),
  ];

  const rawTitle =
    links.find((link) => /^\d+\.\s/.test(link.textContent?.trim() ?? ""))
      ?.textContent?.trim() ?? "Unknown";

  const difficulty =
    document.querySelector(
      ".text-difficulty-easy, .text-difficulty-medium, .text-difficulty-hard"
    )?.textContent?.trim() ?? "Unknown";

  return {
    title: rawTitle.replace(/^\d+\.\s*/, ""),
    difficulty,
    url: window.location.href,
  };
}