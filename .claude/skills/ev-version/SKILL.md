---
description: Bump the Evergreen version and create a GitHub Release. Use when you've made changes to skills, hooks, or framework files and need to cut a new release.
argument-hint: "[patch | minor | major]"
disable-model-invocation: true
---

## Current version

!`cat .claude/VERSION 2>/dev/null || echo "unknown"`

## Instructions

Bump the version, tag it, and create a GitHub Release.

1. Read the current version from `.claude/VERSION`
2. Determine bump type from the argument:
   - `patch` (default if no argument) — bug fixes, small tweaks
   - `minor` — new or updated skills, features
   - `major` — breaking changes
3. Increment the appropriate segment, reset lower segments to 0
4. Write the new version to `.claude/VERSION`
5. Commit with message: `Bump version to X.Y.Z`
6. Push the commit
7. **Generate release notes** — Run `git log --oneline` from the previous version tag to HEAD. Summarize the changes as bullet points grouped by type (new, improved, fixed).
8. **Create a GitHub Release**:
   ```bash
   gh release create vX.Y.Z --title "vX.Y.Z" --notes "[release notes from step 7]"
   ```
9. Report the old version, new version, and link to the release
