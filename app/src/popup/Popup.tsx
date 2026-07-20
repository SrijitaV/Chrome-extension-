import { useEffect, useState } from "react";
import type { LeetCodeProblem } from "../types/leetcode";
import { getProblem } from "../services/storage/problemStorage";

function Popup() {
  const [problem, setProblem] = useState<LeetCodeProblem | null>(null);

  useEffect(() => {
    async function loadProblem() {
      const currentProblem = await getProblem();
      setProblem(currentProblem);
    }

    loadProblem();
  }, []);

  return (
    <main className="min-w-[360px] p-5">
      <h1 className="text-3xl font-bold text-blue-600">
        🚀 LeetPilot
      </h1>

      <p className="mt-2 text-gray-600">
        Learn. Organize. Improve.
      </p>

      <hr className="my-5" />

      {problem ? (
        <div>
          <h2 className="text-lg font-semibold">
            Current Problem
          </h2>

          <p className="mt-2 text-xl font-bold">
            {problem.title}
          </p>

          <p className="text-green-600">
            {problem.difficulty}
          </p>
        </div>
      ) : (
        <p className="text-gray-500">
          Open a LeetCode problem first.
        </p>
      )}
    </main>
  );
}

export default Popup;