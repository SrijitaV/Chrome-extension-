import { getProblem } from "../services/storage/problemStorage";

chrome.runtime.onMessage.addListener(
  (message, _sender, sendResponse) => {
    switch (message.type) {
      case "GET_CURRENT_PROBLEM":
        getProblem()
          .then((problem) => sendResponse(problem))
          .catch((error) => {
            console.error("Failed to retrieve current problem:", error);
            sendResponse(null);
          });

        // Keeps the message channel open for the async response.
        return true;

      default:
        return false;
    }
  }
);