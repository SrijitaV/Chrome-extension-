# CodePilot AI - Feature Specification

## Overview

This document defines all the features of CodePilot AI.

The features are divided into:

- Core Features (MVP)
- Advanced Features
- Future Enhancements

---

# CORE FEATURES (MVP)

## 1. Smart Problem Detection

### Purpose

Automatically detect the coding problem currently opened by the user.

### Problem

Users should not manually enter problem details every time.

### How it works

- Detect supported coding platform.
- Read the webpage.
- Extract:
  - Problem Title
  - Difficulty
  - URL
  - Topics (if available)

### User Flow

User opens a LeetCode problem.

↓

Extension automatically recognizes the problem.

↓

Loads any previously saved data.

### MVP

✅ Yes

---

## 2. Personal Notes

### Purpose

Allow users to save notes for every coding problem.

### Users can

- Write intuition
- Store optimized approaches
- Save mistakes
- Add revision notes

### Stored Data

- Title
- URL
- Notes
- Timestamp

### MVP

✅ Yes

---

## 3. Bookmarks

### Purpose

Save important problems for future practice.

### Users can

- Bookmark
- Remove bookmark
- Filter bookmarks

### MVP

✅ Yes

---

## 4. Tags

### Purpose

Categorize problems.

### Example Tags

- DP
- Graph
- Google
- Amazon
- Hard
- Revision
- Contest

### MVP

✅ Yes

---

## 5. Search

### Purpose

Quickly find saved problems.

### Search By

- Title
- Tags
- Difficulty

### MVP

✅ Yes

---

## 6. AI Hint Generator

### Purpose

Provide hints without revealing the complete solution.

### User clicks

Generate Hint

### AI returns

- Hint 1
- Hint 2
- Hint 3

No code.

No direct answer.

### MVP

✅ Yes

---

## 7. Complexity Helper

### Purpose

Explain

- Time Complexity
- Space Complexity

### Output

O(n)

Reason

Single traversal.

### MVP

✅ Yes

---

## 8. Pattern Detection

### Purpose

Identify the algorithmic pattern.

### Examples

- Sliding Window
- DFS
- BFS
- Binary Search
- Heap
- DP
- Greedy

### MVP

✅ Yes

---

## 9. Revision Status

### Purpose

Track learning progress.

### Status

- Not Started
- Learning
- Need Revision
- Mastered

### MVP

✅ Yes

---

# ADVANCED FEATURES

## 10. AI Explain

Explain the intuition behind a problem.

---

## 11. Flashcards

Generate revision flashcards.

---

## 12. Revision Suggestions

Recommend problems to revisit.

---

## 13. Dashboard

Display

- Problems Solved
- Saved Notes
- Bookmarks
- Pattern Statistics

---

## 14. Keyboard Shortcuts

Examples

Alt + Shift + H

Generate Hint

Alt + Shift + S

Save Notes

---

# FUTURE FEATURES

- Multi-platform Support
- GitHub Integration
- Cloud Sync
- PDF Export
- Markdown Export
- AI Interview Mode
- Spaced Repetition
- Daily Challenge
- Community Notes