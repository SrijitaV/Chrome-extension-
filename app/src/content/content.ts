import { parseProblem } from "../services/parser/problemParser";
import { sendProblem } from "../services/messaging/runtime";

const problem = parseProblem();

console.table(problem);

sendProblem(problem);