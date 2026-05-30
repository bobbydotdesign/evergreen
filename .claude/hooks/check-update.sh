#!/bin/bash
# Evergreen session start checks.
# Runs on SessionStart — fast, non-blocking, silent on failure.

PROJECT_DIR="${CLAUDE_PROJECT_DIR:-.}"
LOCAL_VERSION_FILE="$PROJECT_DIR/.claude/VERSION"
SKILLS_DIR="$PROJECT_DIR/.claude/skills"
REMOTE_URL="https://raw.githubusercontent.com/bobbydotdesign/evergreen/main/.claude/VERSION"

# Check if skills directory is missing — common when dotfiles don't get copied during install
if [ ! -d "$SKILLS_DIR" ]; then
  echo "{\"hookSpecificOutput\":{\"hookEventName\":\"SessionStart\",\"additionalContext\":\"⚠️ Evergreen skills are missing (.claude/skills/ not found). This usually happens when dotfiles weren't copied during setup. Fix it by running: git checkout -- .claude/\"}}"
  exit 0
fi

# Read local version
if [ ! -f "$LOCAL_VERSION_FILE" ]; then
  exit 0
fi
LOCAL_VERSION=$(cat "$LOCAL_VERSION_FILE" | tr -d '[:space:]')

# Fetch remote version (2 second timeout, silent on failure)
REMOTE_VERSION=$(curl -sf --connect-timeout 2 --max-time 2 "$REMOTE_URL" 2>/dev/null | tr -d '[:space:]')

# If fetch failed or empty, silently exit
if [ -z "$REMOTE_VERSION" ]; then
  exit 0
fi

# Compare versions
if [ "$LOCAL_VERSION" != "$REMOTE_VERSION" ]; then
  echo "{\"hookSpecificOutput\":{\"hookEventName\":\"SessionStart\",\"additionalContext\":\"Evergreen update available: v${LOCAL_VERSION} → v${REMOTE_VERSION}. Run /update to get the latest skills and configuration.\"}}"
fi

exit 0
