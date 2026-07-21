import type { LeetCodeProblem } from "../../types/leetcode";

const BOOKMARKS_KEY = "bookmarks";

export async function getBookmarks(): Promise<LeetCodeProblem[]> {
  const result = await chrome.storage.local.get(BOOKMARKS_KEY);

  return (result[BOOKMARKS_KEY] as LeetCodeProblem[] | undefined) ?? [];
}

export async function addBookmark(problem: LeetCodeProblem) {
  const bookmarks = await getBookmarks();

  const alreadyExists = bookmarks.some(
    (p) => p.url === problem.url
  );

  if (alreadyExists) return;

  bookmarks.push(problem);

  await chrome.storage.local.set({
    [BOOKMARKS_KEY]: bookmarks,
  });
}

export async function removeBookmark(url: string) {
  const bookmarks = await getBookmarks();

  const updated = bookmarks.filter(
    (problem) => problem.url !== url
  );

  await chrome.storage.local.set({
    [BOOKMARKS_KEY]: updated,
  });
}

export async function isBookmarked(
  url: string
): Promise<boolean> {
  const bookmarks = await getBookmarks();

  return bookmarks.some(
    (problem) => problem.url === url
  );
}