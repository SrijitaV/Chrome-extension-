# CodePilot AI - Folder Structure

## Overview

This document defines the folder organization of CodePilot AI.

The project follows a modular architecture where each folder has a single responsibility. This structure improves maintainability, scalability, and readability.

---

# Project Structure

```
CodePilot-AI/

│
├── docs/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── background/
│   ├── content/
│   ├── popup/
│   ├── sidepanel/
│   ├── options/
│   ├── dashboard/
│   ├── components/
│   ├── hooks/
│   ├── services/
│   ├── store/
│   ├── types/
│   ├── utils/
│   ├── constants/
│   └── styles/
│
├── tests/
│
├── manifest.json
├── package.json
├── README.md
└── .gitignore
```

---

# Folder Responsibilities

## docs/

Contains all project documentation.

Examples

- Product Vision
- Feature Specification
- Architecture
- Roadmap

---

## public/

Stores static assets.

Examples

- Icons
- Images
- Fonts

---

## src/

Contains all application source code.

---

## assets/

Images, SVGs, and branding resources.

---

## background/

Background Service Worker.

Responsibilities

- Message routing
- AI requests
- Storage coordination

---

## content/

Content scripts injected into supported websites.

Responsibilities

- Detect problems
- Read webpage content
- Extract metadata

---

## popup/

Extension popup UI.

---

## sidepanel/

Primary learning workspace.

Contains

- Notes
- AI
- Revision
- Tags
- Bookmarks

---

## options/

Settings page.

---

## dashboard/

Analytics and progress tracking.

---

## components/

Reusable UI components.

Examples

- Button
- Card
- Modal
- Search Bar

---

## hooks/

Reusable React hooks.

---

## services/

Business logic.

Examples

- AI Service
- Storage Service
- Parser Service

---

## store/

Global application state.

---

## types/

Shared TypeScript interfaces.

---

## utils/

Helper functions.

---

## constants/

Application constants.

---

## styles/

Global styling.

---

# Design Principles

- Modular architecture
- Single Responsibility Principle
- Reusable components
- Scalable folder organization