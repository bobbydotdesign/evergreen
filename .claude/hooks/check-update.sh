#!/bin/bash
# Check if a newer version of Evergreen is available on GitHub.
# Runs on SessionStart — fast, non-blocking, silent on failure.

LOCAL_VERSION_FILE="${CLAUDE_PROJECT_DIR:-.}/.claude/VERSION"
REMOTE_URL="https://raw.githubusercontent.com/bobbydotdesign/evergreen/main/.claude/VERSION"

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
