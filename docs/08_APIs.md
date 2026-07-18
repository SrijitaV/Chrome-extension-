# CodePilot AI - Chrome APIs

## Overview

This document describes all Chrome Extension APIs used in CodePilot AI.

Each API has a clearly defined responsibility to ensure the extension follows Manifest V3 best practices.

---

# API Overview

| Chrome API | Purpose | MVP |
|------------|---------|-----|
| chrome.storage | Store user data | ✅ |
| chrome.runtime | Message passing | ✅ |
| chrome.tabs | Access active tab | ✅ |
| chrome.scripting | Inject scripts | ✅ |
| chrome.sidePanel | Main workspace | ✅ |
| chrome.action | Popup | ✅ |
| chrome.commands | Keyboard shortcuts | ✅ |
| chrome.contextMenus | Right-click actions | Optional |
| chrome.notifications | User notifications | Optional |
| chrome.alarms | Future revision reminders | Future |

---

# 1. chrome.storage

## Purpose

Persist extension data locally.

## Stores

- Problems
- Notes
- Bookmarks
- Tags
- Revision Status
- Flashcards
- User Settings
- AI Configuration

## Why?

Data remains available even after closing Chrome.

---

# 2. chrome.runtime

## Purpose

Enable communication between different extension components.

## Used For

- Popup → Background
- Side Panel → Background
- Content Script → Background
- Options → Background

## Example Use Cases

- Request AI Hint
- Save Notes
- Update Revision Status

---

# 3. chrome.tabs

## Purpose

Access information about the currently active browser tab.

## Used For

- Detect active website
- Detect current LeetCode problem
- Open Dashboard
- Navigate users

---

# 4. chrome.scripting

## Purpose

Inject scripts into supported webpages.

## Used For

- Extract problem information
- Read webpage content
- Detect coding platform

---

# 5. chrome.sidePanel

## Purpose

Display the primary workspace.

## Features

- Notes
- AI Assistant
- Revision
- Bookmarks
- Tags

## Why Side Panel?

The Side Panel stays open while users solve problems, reducing context switching.

---

# 6. chrome.action

## Purpose

Manage the extension popup.

## Used For

- Quick Actions
- Open Side Panel
- Recent Problems
- Open Dashboard
- Open Settings

---

# 7. chrome.commands

## Purpose

Support keyboard shortcuts.

## Planned Shortcuts

Alt + Shift + H

Generate Hint

Alt + Shift + S

Save Notes

Alt + Shift + B

Bookmark Problem

---

# 8. chrome.contextMenus

## Purpose

Provide right-click actions.

## Future Features

- Explain Selected Text
- Summarize Selection
- Save Selection as Note

---

# 9. chrome.notifications

## Purpose

Display lightweight notifications.

## Examples

- Notes Saved
- Bookmark Added
- AI Request Failed
- API Key Missing

---

# 10. chrome.alarms

## Purpose

Schedule future reminders.

## Future Features

- Daily Revision Reminder
- Weekly Progress Summary
- Practice Notifications

---

# Message Flow

```
Content Script
      │
      ▼
Background Service Worker
      ▲
      │
Popup

Side Panel

Options
```

The Background Service Worker acts as the central communication hub.

---

# Permissions Required

| Permission | Reason |
|------------|--------|
| storage | Save user data |
| activeTab | Access current webpage |
| scripting | Inject scripts |
| sidePanel | Display workspace |
| tabs | Read active tab |
| contextMenus | Right-click menu |
| notifications | User alerts |

Additional host permissions will be limited to supported coding platforms.

---

# Manifest V3 Considerations

The extension follows Manifest V3 best practices.

- Uses a Background Service Worker instead of a persistent background page.
- Minimizes requested permissions.
- Uses message passing for component communication.
- Limits host permissions to supported websites.
- Avoids unnecessary script injections.

---

# Security Considerations

- Never request unnecessary permissions.
- Store API keys securely using Chrome Storage.
- Restrict script execution to supported websites.
- Validate all messages before processing.
- Handle API failures gracefully.
- Never expose API keys in the UI.

---

# Future API Integrations

Future versions may include:

- chrome.identity
- chrome.sync
- chrome.offscreen
- chrome.omnibox
- chrome.downloads

These APIs are intentionally excluded from Version 1 to keep the extension lightweight and focused.

---

# Design Principles

- Least privilege principle
- Secure by default
- Modular API usage
- Scalable architecture
- Manifest V3 compliance
- Minimal performance overhead