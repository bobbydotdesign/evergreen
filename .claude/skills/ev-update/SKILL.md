---
description: Update Evergreen skills and configuration to the latest version from GitHub.
disable-model-invocation: true
---

## Current version

!`cat .claude/VERSION 2>/dev/null || echo "unknown"`

## Instructions

Update the Evergreen skills and configuration from GitHub. Follow these steps exactly:

1. **Fetch the latest release tag from GitHub Releases** (NOT the VERSION file on main — that may be stale):
   ```bash
   LATEST_JSON=$(curl -sf https://api.github.com/repos/bobbydotdesign/evergreen/releases/latest)
   LATEST_VERSION=$(echo "$LATEST_JSON" | grep '"tag_name"' | sed 's/.*"v\(.*\)".*/\1/')
   RELEASE_NOTES=$(echo "$LATEST_JSON" | python3 -c "import sys,json; print(json.load(sys.stdin).get('body',''))" 2>/dev/null)
   echo "Latest: $LATEST_VERSION"
   ```
   You MUST use this GitHub Releases API endpoint. Do NOT fetch `raw.githubusercontent.com/.../VERSION` — that is the wrong source.

2. **Compare versions**. Compare `$LATEST_VERSION` against the local version shown above. If they match, tell the user they're already up to date and stop.

3. **Show what's new** — Present the release notes to the user using AskUserQuestion:
   - question: "Evergreen [current] → [latest]\n\n[release notes from the body field]\n\nProceed with update?"
   - header: "Update"
   - options:
     - label: "Update now", description: "Apply the update and refresh skills"
     - label: "Skip", description: "Stay on current version"

   If the user chooses **Skip**, stop.

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
   rm -rf .claude/skills/ev-version  # maintainer-only skill, not distributed
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

9. **Confirm completion** — Display a clean summary:
   - "Evergreen updated to [version]"
   - List what was updated (skills, CLAUDE.md, settings, etc.)
   - Note that user content in CLAUDE.md and settings.local.json were preserved
   - Suggest restarting Claude Code to load the new skills

Important:
- NEVER touch content below the `<!-- EVERGREEN:END -->` marker — that belongs to the user
- Only update `.claude/skills/`, `.claude/hooks/`, `.claude/settings.json`, `.claude/VERSION`, and the Evergreen section of `CLAUDE.md`
- Never touch the user's source code, components, or other project files
- User settings in `.claude/settings.local.json` are never overwritten
- If anything fails, restore from the backup and report the error
