# CodePilot AI - Information Architecture

## Overview

This document defines the structure of the CodePilot AI Chrome Extension.

It explains every screen, how users navigate between them, and where each feature belongs.

The goal is to ensure a simple, intuitive, and scalable user experience.

---

# High-Level Architecture

```
                        CodePilot AI
                              │
        ┌─────────────────────┼─────────────────────┐
        │                     │                     │
      Popup               Side Panel            Options Page
        │                     │                     │
 Quick Actions        Problem Workspace        Settings
 Recent Problems      Notes                    AI Provider
 Settings             AI Assistant             API Keys
                       Bookmarks               Theme
                       Tags                    Keyboard Shortcuts
                       Revision                Export / Import
```

---

# Screen Hierarchy

```
CodePilot AI
│
├── Popup
│   ├── Quick Actions
│   ├── Recent Problems
│   ├── Open Dashboard
│   └── Open Settings
│
├── Side Panel
│   ├── Current Problem
│   ├── Notes
│   ├── AI Hint
│   ├── Complexity
│   ├── Pattern
│   ├── Revision Status
│   ├── Bookmarks
│   └── Tags
│
├── Dashboard
│   ├── Analytics
│   ├── Search
│   ├── Saved Problems
│   ├── Bookmarks
│   ├── Revision Queue
│   ├── Flashcards
│   └── Statistics
│
└── Options Page
    ├── AI Provider
    ├── API Key
    ├── Theme
    ├── Keyboard Shortcuts
    ├── Export Data
    ├── Import Data
    └── About
```

---

# 1. Popup

## Purpose

The popup acts as the entry point to the extension.

It provides quick access to the most frequently used actions.

### Components

- Extension Logo
- Current Platform
- Open Side Panel
- Recent Problems
- Dashboard Button
- Settings Button

### User Actions

- Open Dashboard
- Open Side Panel
- View Recent Problems
- Navigate to Settings

---

# 2. Side Panel

## Purpose

The Side Panel is the primary workspace where users interact while solving coding problems.

### Sections

### Problem Information

Displays

- Problem Title
- Difficulty
- Platform
- URL

---

### Notes

Users can

- Write notes
- Edit notes
- Delete notes

---

### AI Assistant

Functions

- Generate Hint
- Explain Problem
- Explain Complexity

---

### Pattern Detection

Displays

- Algorithm Pattern
- Data Structure Used

---

### Revision

Options

- Not Started
- Learning
- Need Revision
- Mastered

---

### Bookmarks

Allows users to

- Add Bookmark
- Remove Bookmark

---

### Tags

Users can

- Create Tags
- Delete Tags
- Assign Tags

---

# 3. Dashboard

## Purpose

Provide a complete overview of the user's learning progress.

### Sections

### Overview

Displays

- Total Problems Saved
- Total Notes
- Total Bookmarks
- Revision Progress

---

### Saved Problems

List of all stored problems.

---

### Search

Supports searching by

- Problem Title
- Tags
- Difficulty

---

### Flashcards

Displays generated flashcards.

---

### Statistics

Shows

- Problems by Difficulty
- Problems by Pattern
- Revision Status
- Learning Progress

---

# 4. Settings (Options Page)

## Purpose

Allow users to customize the extension.

### General

- Theme
- Default View

---

### AI Settings

- AI Provider
- API Key

---

### Keyboard Shortcuts

Examples

- Alt + Shift + H
- Alt + Shift + S

---

### Data Management

- Export Notes
- Import Notes
- Clear Storage

---

### About

Displays

- Version
- Documentation
- GitHub Repository

---

# Navigation Flow

```
Popup
 │
 ├─────────────► Side Panel
 │                    │
 │                    ├────► Notes
 │                    ├────► AI Assistant
 │                    ├────► Bookmarks
 │                    ├────► Revision
 │                    └────► Tags
 │
 ├─────────────► Dashboard
 │                    │
 │                    ├────► Search
 │                    ├────► Statistics
 │                    ├────► Flashcards
 │                    └────► Saved Problems
 │
 └─────────────► Settings
                      │
                      ├────► AI Provider
                      ├────► API Key
                      ├────► Theme
                      └────► Data Management
```

---

# User Navigation Principles

The navigation follows these principles:

- Maximum two clicks for common actions.
- The Side Panel is the primary workspace.
- Popup is designed only for quick access.
- Dashboard provides long-term progress tracking.
- Settings are isolated from daily workflow.
- Every feature should be reachable without opening unnecessary screens.

---

# Scalability

The architecture is designed to support future platforms without changing the navigation.

Future integrations include

- GeeksforGeeks
- Codeforces
- HackerRank
- AtCoder

Additional modules can be added to the Side Panel or Dashboard without affecting the existing structure.

---

# Design Goals

- Clean and minimal interface
- Consistent navigation
- Fast access to learning tools
- Reduced context switching
- Scalable architecture
- Accessibility-first design
- Responsive layout