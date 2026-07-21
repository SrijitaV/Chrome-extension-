import { saveProblem } from "../storage/problemStorage";

console.log("🚀 Background Worker Started");

chrome.runtime.onMessage.addListener(async (message) => {
  if (message.type !== "CURRENT_PROBLEM") {
    return;
  }

  try {
    await saveProblem(message.payload);
    console.log("✅ Problem Saved");
  } catch (error) {
    console.error("Failed to save problem:", error);
  }
});