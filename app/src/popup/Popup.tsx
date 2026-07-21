import { useEffect, useState } from "react";
import { getProblem } from "../services/storage/problemStorage";
import {
  addBookmark,
  removeBookmark,
  isBookmarked,
} from "../services/storage/bookmarkStorage";
import type { LeetCodeProblem } from "../types/leetcode";

function Popup() {
  const [problem, setProblem] = useState<LeetCodeProblem | null>(null);
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    async function loadProblem() {
        const currentProblem = await getProblem();

        setProblem(currentProblem);

        if (currentProblem) {
        const exists = await isBookmarked(currentProblem.url);
        setBookmarked(exists);
        }
    }

    loadProblem();
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

  return (
    <main className="p-6 w-80">

    <h1 className="text-2xl font-bold">
        🚀 LeetPilot
    </h1>

    <p className="mt-4 font-semibold">
        Current Problem
    </p>

    {problem ? (

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
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
            >
                {bookmarked ? "⭐ Remove Bookmark" : "☆ Add Bookmark"}
            </button>

        </div>

    ) : (

        <p className="mt-3">
            No problem detected.
        </p>

    )}

    </main>
  );
}

export default Popup;