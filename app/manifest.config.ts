import type { ManifestV3Export } from "@crxjs/vite-plugin";

const manifest: ManifestV3Export = {
  manifest_version: 3,

  name: "LeetPilot",

  version: "1.0.0",

  description: "Learn. Organize. Improve.",

  action: {
    default_popup: "index.html",
    default_title: "LeetPilot",
  },

  permissions: [
    "storage",
    "tabs"
  ],

  host_permissions: [
    "https://leetcode.com/*"
  ],

  background: {
    service_worker: "src/background/background.ts",
    type: "module"
  },

  content_scripts: [
    {
      matches: ["https://leetcode.com/problems/*"],
      js: ["src/content/content.ts"]
    }
  ]
};

export default manifest;