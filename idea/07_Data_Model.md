# CodePilot AI - Data Model

## Overview

This document defines the data structures used throughout CodePilot AI.

The extension stores user information locally using the Chrome Storage API.

The data model is designed to be scalable, allowing future support for cloud synchronization and additional coding platforms.

---

# Data Overview

The extension stores the following entities:

- Problems
- Notes
- Bookmarks
- Tags
- Revision Status
- User Settings
- AI Configuration
- Flashcards

---

# 1. Problem

Represents a coding problem.

Fields

| Field | Type | Description |
|------|------|-------------|
| id | String | Unique Problem ID |
| title | String | Problem Title |
| platform | String | LeetCode |
| difficulty | String | Easy / Medium / Hard |
| url | String | Problem URL |
| topics | Array<String> | Problem Topics |
| createdAt | Date | First Saved |
| updatedAt | Date | Last Updated |

---

# Example

```json
{
    "id": "lc_1",
    "title": "Two Sum",
    "platform": "LeetCode",
    "difficulty": "Easy",
    "url": "...",
    "topics": [
        "Array",
        "Hash Map"
    ]
}
```

---

# 2. Notes

Stores user notes for a problem.

| Field | Type |
|------|------|
| problemId | String |
| intuition | String |
| bruteForce | String |
| optimized | String |
| mistakes | String |
| edgeCases | String |
| createdAt | Date |
| updatedAt | Date |

---

# Example

```json
{
    "problemId": "lc_1",
    "intuition": "...",
    "optimized": "...",
    "mistakes": "...",
    "edgeCases": "..."
}
```

---

# 3. Bookmark

Stores bookmarked problems.

| Field | Type |
|------|------|
| problemId | String |
| bookmarked | Boolean |
| bookmarkedAt | Date |

---

# 4. Tags

Stores custom user tags.

| Field | Type |
|------|------|
| problemId | String |
| tags | Array<String> |

Example

```
["Google","HashMap","Revision"]
```

---

# 5. Revision Status

Tracks learning progress.

Possible Values

- Not Started
- Learning
- Need Revision
- Mastered

| Field | Type |
|------|------|
| problemId | String |
| status | String |
| lastReviewed | Date |

---

# 6. Flashcards

Stores AI-generated flashcards.

| Field | Type |
|------|------|
| id | String |
| problemId | String |
| question | String |
| answer | String |

---

# 7. User Settings

Stores extension preferences.

| Field | Type |
|------|------|
| theme | String |
| aiProvider | String |
| keyboardShortcuts | Boolean |
| autoSave | Boolean |

---

# 8. AI Configuration

Stores AI-related settings.

| Field | Type |
|------|------|
| provider | String |
| apiKey | String |
| model | String |

---

# Storage Structure

```
chrome.storage.local

│

├── problems

├── notes

├── bookmarks

├── tags

├── revisionStatus

├── flashcards

├── settings

└── aiConfig
```

---

# Relationships

```
Problem
   │
   ├──── Notes

   ├──── Tags

   ├──── Bookmark

   ├──── Revision Status

   └──── Flashcards
```

One Problem can have:

- One Note
- One Revision Status
- One Bookmark
- Multiple Tags
- Multiple Flashcards

---

# Future Expansion

The data model is designed to support:

- Multiple coding platforms
- Cloud synchronization
- Multiple AI providers
- AI chat history
- Daily revision planner
- Community notes
- Team collaboration

No major schema changes will be required to support these features.

---

# Design Principles

- Single source of truth
- Normalized data
- Minimal duplication
- Easy serialization
- Scalable structure
- Future-proof design