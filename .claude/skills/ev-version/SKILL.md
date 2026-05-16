---
description: Bump the Evergreen version number. Use when you've made changes to skills, hooks, or framework files and need to cut a new release.
argument-hint: "[patch | minor | major]"
disable-model-invocation: true
---

## Current version

!`cat .claude/VERSION 2>/dev/null || echo "unknown"`

## Instructions

Bump the version in `.claude/VERSION` using semver (MAJOR.MINOR.PATCH).

1. Read the current version from `.claude/VERSION`
2. Determine bump type from the argument:
   - `patch` (default if no argument) — bug fixes, small tweaks
   - `minor` — new or updated skills, features
   - `major` — breaking changes
3. Increment the appropriate segment, reset lower segments to 0
4. Write the new version to `.claude/VERSION`
5. Commit with message: `Bump version to X.Y.Z`
6. Report the old and new version
