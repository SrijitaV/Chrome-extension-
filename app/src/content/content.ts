import { parseProblem } from "../services/parser/problemParser";
import { sendProblem } from "../services/messaging/runtime";

let previousUrl = "";

function detectProblem() {
  if (window.location.href === previousUrl) return;

  previousUrl = window.location.href;

  const problem = parseProblem();

  console.table(problem);

  sendProblem(problem);
}

detectProblem();

setInterval(detectProblem, 1000);