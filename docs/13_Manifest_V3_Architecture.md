# CodePilot AI - Manifest V3 Architecture

## Overview

This document describes the Manifest V3 configuration used by CodePilot AI.

---

# Manifest Version

Manifest Version

3

Reason

Latest Chrome Extension standard with improved security and performance.

---

# Components

- Popup
- Side Panel
- Background Service Worker
- Content Scripts
- Options Page

---

# Required Permissions

- storage
- activeTab
- scripting
- sidePanel
- tabs

Optional

- contextMenus
- notifications

---

# Host Permissions

Version 1

- https://leetcode.com/*

Future

- https://www.geeksforgeeks.org/*
- https://codeforces.com/*
- https://www.hackerrank.com/*

---

# Background Service Worker

Responsibilities

- Message routing
- AI requests
- Storage
- Lifecycle events

---

# Content Scripts

Responsibilities

- Read webpage
- Extract problem details
- Detect supported platform

---

# Popup

Responsibilities

- Quick actions
- Open Side Panel
- Settings

---

# Side Panel

Responsibilities

- Notes
- AI Assistant
- Revision
- Tags
- Bookmarks

---

# Options Page

Responsibilities

- API Key
- Theme
- AI Provider
- Preferences

---

# Security

- Minimum required permissions
- Secure API key storage
- Restricted host permissions
- Manifest V3 compliance

---

# Design Goals

- Secure
- Lightweight
- Modular
- Maintainable