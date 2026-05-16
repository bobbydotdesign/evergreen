---
description: Update Evergreen skills and configuration to the latest version from GitHub.
disable-model-invocation: true
---

## Current version

!`cat .claude/VERSION 2>/dev/null || echo "unknown"`

## Instructions

Update the Evergreen skills and configuration from GitHub. Follow these steps exactly:

1. **Fetch the latest version** from GitHub:
   ```bash
   curl -sf https://raw.githubusercontent.com/bobbydotdesign/evergreen/main/.claude/VERSION
   ```

2. **Compare versions**. If the remote version matches the local version above, tell the user they're already up to date and stop.

3. **If an update is available**, tell the user what version they're on and what the latest is, then proceed:

4. **Clone the latest Evergreen to a temp directory**:
   ```bash
   git clone --depth 1 https://github.com/bobbydotdesign/evergreen.git /tmp/evergreen-update
   ```

5. **Back up the current skills**:
   ```bash
   cp -r .claude/skills .claude/skills.backup
   cp .claude/VERSION .claude/VERSION.backup
   ```

6. **Copy the updated files**:
   ```bash
   rm -rf .claude/skills
   cp -r /tmp/evergreen-update/.claude/skills .claude/skills
   cp /tmp/evergreen-update/.claude/VERSION .claude/VERSION
   cp /tmp/evergreen-update/CLAUDE.md CLAUDE.md
   ```

7. **Clean up**:
   ```bash
   rm -rf /tmp/evergreen-update .claude/skills.backup .claude/VERSION.backup
   ```

8. **Report** what was updated and suggest restarting Claude Code to load the new skills.

Important:
- Only update `.claude/skills/`, `.claude/VERSION`, and `CLAUDE.md`
- Never touch the user's source code, components, or other project files
- If anything fails, restore from the backup and report the error
