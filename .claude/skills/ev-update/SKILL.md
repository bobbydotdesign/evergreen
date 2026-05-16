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
   cp .claude/VERSION .claude/VERSION.backup 2>/dev/null
   ```

6. **Copy the updated framework files**:
   ```bash
   rm -rf .claude/skills .claude/hooks
   cp -r /tmp/evergreen-update/.claude/skills .claude/skills
   cp -r /tmp/evergreen-update/.claude/hooks .claude/hooks 2>/dev/null
   cp /tmp/evergreen-update/.claude/VERSION .claude/VERSION
   cp /tmp/evergreen-update/.claude/settings.json .claude/settings.json
   ```

7. **Update CLAUDE.md (preserve user content)**:
   ```bash
   # Save user content (everything after EVERGREEN:END marker)
   USER_CONTENT=$(sed -n '/<!-- EVERGREEN:END/,$p' CLAUDE.md | tail -n +2)

   # Get updated Evergreen section (up to and including EVERGREEN:END)
   sed -n '1,/<!-- EVERGREEN:END/p' /tmp/evergreen-update/CLAUDE.md > CLAUDE.md

   # Append user's preserved content
   echo "$USER_CONTENT" >> CLAUDE.md
   ```

8. **Clean up**:
   ```bash
   rm -rf /tmp/evergreen-update .claude/skills.backup .claude/VERSION.backup
   ```

9. **Report** what was updated and suggest restarting Claude Code to load the new skills.

Important:
- NEVER touch content below the `<!-- EVERGREEN:END -->` marker — that belongs to the user
- Only update `.claude/skills/`, `.claude/hooks/`, `.claude/settings.json`, `.claude/VERSION`, and the Evergreen section of `CLAUDE.md`
- Never touch the user's source code, components, or other project files
- User settings in `.claude/settings.local.json` are never overwritten
- If anything fails, restore from the backup and report the error
