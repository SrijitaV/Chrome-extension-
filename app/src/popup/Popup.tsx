import { useEffect, useState } from "react";

import type { LeetCodeProblem } from "../types/leetcode";

import { getProblem } from "../services/storage/problemStorage";
import {
  addBookmark,
  removeBookmark,
  isBookmarked,
  getBookmarks,
} from "../services/storage/bookmarkStorage";
import {
  getNote,
  saveNote,
} from "../services/storage/notesStorage";

function Popup() {
  const [problem, setProblem] = useState<LeetCodeProblem | null>(null);
  const [bookmarked, setBookmarked] = useState(false);
  const [note, setNote] = useState("");
  const [bookmarks, setBookmarks] = useState<LeetCodeProblem[]>([]);

  useEffect(() => {
    async function loadProblem() {
      const currentProblem = await getProblem();

      setProblem(currentProblem);

      const savedBookmarks = await getBookmarks();
      setBookmarks(savedBookmarks);

      if (!currentProblem) {
        setBookmarked(false);
        setNote("");
        return;
      }

      setBookmarked(await isBookmarked(currentProblem.url));

      setNote(await getNote(currentProblem.url));
    }

    loadProblem();

    chrome.storage.onChanged.addListener(loadProblem);

    return () => {
      chrome.storage.onChanged.removeListener(loadProblem);
    };
  }, []);

  async function handleBookmark() {
    if (!problem) return;

    if (bookmarked) {
      await removeBookmark(problem.url);
      setBookmarked(false);
    } else {
      await addBookmark(problem);
      setBookmarked(true);
    }
  }

  async function handleSaveNote() {
    if (!problem) return;

    await saveNote(problem.url, note);

    alert("Notes Saved!");
  }

  return (
    <main className="p-6 w-80">

      <h1 className="text-3xl font-bold">
        🚀 LeetPilot
      </h1>

      <p className="mt-4 font-semibold">
        Current Problem
      </p>

      {!problem ? (
        <p className="mt-3">
          No problem detected.
        </p>
      ) : (
        <>
          <div className="mt-3">

            <h2 className="font-bold">
              {problem.title}
            </h2>

            <p>
              {problem.difficulty}
            </p>

            <p className="text-xs break-all">
              {problem.url}
            </p>

            <button
              onClick={handleBookmark}
              className="mt-4 w-full rounded bg-blue-600 py-2 text-white"
            >
              {bookmarked
                ? "⭐ Remove Bookmark"
                : "☆ Add Bookmark"}
            </button>

          </div>

          <div className="mt-6">

            <h3 className="font-semibold">
              📝 Notes
            </h3>

            <textarea
              className="mt-2 w-full rounded border p-2 text-sm"
              rows={6}
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Write your notes here..."
            />

            <button
              onClick={handleSaveNote}
              className="mt-3 w-full rounded bg-green-600 py-2 text-white"
            >
              💾 Save Notes
            </button>

            {bookmarks.length > 0 && (
            <div className="mt-6">
              <h2 className="font-semibold mb-2">
                📚 Bookmarks
              </h2>

              {bookmarks.map((bookmark) => (
                <div
                  key={bookmark.url}
                  onClick={() => chrome.tabs.create({ url: bookmark.url })}
                  className="cursor-pointer border rounded p-2 mb-2 hover:bg-gray-100"
                >
                  <p className="font-medium">
                    {bookmark.title}
                  </p>

                  <p className="text-xs text-gray-500">
                    {bookmark.difficulty}
                  </p>
                </div>
              ))}
            </div>
          )}
          </div>
        </>
      )}
    </main>
  );
}

export default Popup;