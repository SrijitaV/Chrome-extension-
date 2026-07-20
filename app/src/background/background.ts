import { saveProblem } from "../services/storage/problemStorage";

console.log("🚀 Background Worker Started");

chrome.runtime.onMessage.addListener((message) => {
  if (message.type === "CURRENT_PROBLEM") {
    saveProblem(message.payload);

    console.log("✅ Current problem saved");
  }
});