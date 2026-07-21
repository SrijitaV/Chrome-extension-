import { useEffect, useState } from "react";
import { getProblem } from "../services/storage/problemStorage";
import type { LeetCodeProblem } from "../types/leetcode";

function Popup() {
  const [problem, setProblem] = useState<LeetCodeProblem | null>(null);

  useEffect(() => {

    getProblem().then(setProblem);

  }, []); 

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