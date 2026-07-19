import { parseProblem } from "../services/parser/problemParser";

console.clear();

console.log("🚀 LeetPilot Started");

const problem = parseProblem();

console.table(problem);