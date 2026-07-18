# CodePilot AI - User Flow

## Overview

This document describes how users interact with CodePilot AI throughout different stages of the application.

The objective is to create a seamless learning experience with minimal clicks, reduced context switching, and intuitive interactions.

---

# Flow 1: First-Time Setup

### Goal

Allow the user to configure the extension before using AI features.

### Flow

User installs the extension

↓

Clicks the extension icon

↓

Welcome screen appears

↓

Short product introduction

↓

Choose AI Provider

(OpenAI / Gemini)

↓

Enter API Key

↓

Click Save

↓

Open LeetCode

↓

Extension detects a supported page

↓

Extension is ready to use

---

# Flow 2: Opening a Coding Problem

### Goal

Automatically identify the current coding problem and load previously saved information.

### Flow

User opens a LeetCode problem

↓

Content Script loads

↓

Reads webpage

↓

Extracts

- Problem Title
- Difficulty
- URL
- Topics (if available)

↓

Background Service Worker receives data

↓

Checks Chrome Storage

↓

Existing data?

YES → Load saved notes

NO → Create new problem entry

↓

Open Side Panel

↓

Display problem workspace

---

# Flow 3: Taking Notes

### Goal

Allow users to maintain personal notes for every problem.

### Flow

User opens Side Panel

↓

Selects Notes

↓

Writes notes

↓

Clicks Save

↓

Validate input

↓

Store notes in Chrome Storage

↓

Show success notification

---

# Flow 4: Generating AI Hints

### Goal

Help users move forward without exposing the complete solution.

### Flow

User gets stuck

↓

Clicks Generate Hint

↓

Collect current problem information

↓

Send request to AI

↓

Receive AI response

↓

Display Hint Card

↓

User continues solving

---

# Flow 5: Bookmarking Problems

### Goal

Allow users to quickly save important problems.

### Flow

User clicks Bookmark

↓

Already bookmarked?

YES → Remove bookmark

NO → Save bookmark

↓

Update Dashboard

↓

Update bookmark icon

---

# Flow 6: Updating Revision Status

### Goal

Track learning progress.

### Flow

User finishes solving

↓

Clicks "Mark as Mastered"

↓

Update revision status

↓

Update statistics

↓

Refresh Dashboard

---

# Flow 7: Dashboard

### Goal

Provide an overview of learning progress.

### Flow

User opens Dashboard

↓

Read Chrome Storage

↓

Generate statistics

↓

Display

- Saved Problems
- Bookmarks
- Revision Queue
- Pattern Statistics
- Recent Activity

---

# Flow 8: Search

### Goal

Help users quickly find previously saved information.

### Flow

User enters a keyword

↓

Search

- Notes
- Tags
- Bookmarks

↓

Display matching results

---

# Flow 9: Flashcard Generation

### Goal

Generate revision flashcards using AI.

### Flow

User clicks Generate Flashcards

↓

AI receives notes

↓

Creates flashcards

↓

Store flashcards

↓

Display flashcards

---

# Error Flow 1: Invalid API Key

### Flow

User clicks Generate Hint

↓

AI Provider returns Unauthorized

↓

Display

"Invalid API Key"

↓

Redirect user to Settings

---

# Error Flow 2: Network Failure

### Flow

User requests AI assistance

↓

Network unavailable

↓

Display

"No Internet Connection"

↓

Retry option

---

# Error Flow 3: Unsupported Website

### Flow

User opens an unsupported website

↓

Extension checks current URL

↓

Website not supported

↓

Display

"CodePilot AI currently supports LeetCode."

---

# Error Flow 4: Empty Notes

### Flow

User clicks Save

↓

Notes are empty

↓

Display validation message

↓

Remain on Notes page

---

# UX Principles

The extension follows the following design principles:

- Maximum two clicks for common actions
- Minimal context switching
- Auto-save where appropriate
- Fast response time
- Non-intrusive notifications
- Consistent navigation across all screens
- Clear error messages with recovery options
- Accessibility-friendly interface
- Keyboard-first interactions wherever possible