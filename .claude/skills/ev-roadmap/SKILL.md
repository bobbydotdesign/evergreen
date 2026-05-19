---
description: Manage your product roadmap — add, move, prioritize, and view items on a visual kanban board. Use when the user wants to track features, bugs, or improvements.
argument-hint: "[add | move | prioritize | remove | view]"
---

The user wants to manage their product roadmap. The roadmap lives in `docs/roadmap.json` and renders as a kanban board at `/roadmap`.

### Usage
- `/ev-roadmap` — show current roadmap and ask what to do
- `/ev-roadmap add auth flow` — add a new item
- `/ev-roadmap move r1 to done` — change an item's status
- `/ev-roadmap view` — open the roadmap board in the browser

### Context Detection
Before asking the user what to do, check for existing project context:
- If `docs/roadmap.json` exists, read it — know what items are already tracked
- If `docs/prd.json` exists, note it — offer to link items or generate from PRD
- If `docs/research.json` exists, note it — use insights to suggest priorities

If no argument was provided and `docs/roadmap.json` has items, use AskUserQuestion:
- question: "What would you like to do with your roadmap?"
- options:
  - label: "Add item", description: "Add a new feature, bug, improvement, or research item"
  - label: "Move item", description: "Change an item's status (backlog, in-progress, done)"
  - label: "Prioritize", description: "Change priority or reorder items"
  - label: "Remove item", description: "Remove an item from the roadmap"

If no argument and roadmap is empty, use AskUserQuestion:
- question: "No items on the roadmap yet. How would you like to start?"
- options (include "Create from PRD" only if `docs/prd.json` exists):
  - label: "Create from PRD", description: "Extract features from your PRD as roadmap items"
  - label: "Add first item", description: "Manually add your first roadmap item"
  - label: "Import a list", description: "Paste a list of features or tasks to populate the board"

### Modes

**Add:**
1. Ask for title (or use from argument)
2. Ask for a one-line description
3. Use AskUserQuestion for priority (P1-P4) and type (feature/bug/improvement/research)
4. Auto-generate next ID: find highest `rN` in items, increment to `r(N+1)`. First item is `r1`.
5. Default status: `backlog`. Set `created` to today's date (ISO 8601). Set `completed` to `null`.
6. Ask if they want to link to `docs/prd.json` (if it exists)
7. Write to `docs/roadmap.json` and regenerate `src/app/roadmap/page.tsx`

**Move:**
1. Show current items grouped by status with their IDs
2. Ask which item (by ID like `r1` or by title) and target status
3. If moving to `done`, auto-set `completed` to today's date
4. If moving away from `done`, clear `completed` back to `null`
5. Update `docs/roadmap.json` and regenerate `src/app/roadmap/page.tsx`

**Prioritize:**
1. Show current items with priorities
2. Ask which item and new priority level (P1/P2/P3/P4)
3. Update `docs/roadmap.json` and regenerate `src/app/roadmap/page.tsx`

**Remove:**
1. Show current items
2. Ask which item to remove (by ID or title)
3. Confirm with the user before removing
4. Update `docs/roadmap.json` and regenerate `src/app/roadmap/page.tsx`

**Create from PRD:**
1. Read `docs/prd.json`
2. If `docs/research.json` exists, read it too — use research findings to inform priority. Features validated by research get bumped to P1, unvalidated features stay P2 or lower.
3. Extract features from the "Core Features" or "MVP" sections
4. Create one roadmap item per feature: status `backlog`, type `feature`, `linked_prd: "docs/prd.json"`, priority informed by research
5. Show the extracted items with priorities and rationale, ask the user to confirm before writing
6. Write to `docs/roadmap.json` and regenerate `src/app/roadmap/page.tsx`

**Import a list:**
1. Ask the user to paste their list of items
2. Parse each line as a title
3. Create items: status `backlog`, priority `P2`, type `feature`, sequential IDs
4. Show parsed items for confirmation
5. Write to `docs/roadmap.json` and regenerate `src/app/roadmap/page.tsx`

### JSON Schema
`docs/roadmap.json` structure:
```json
{
  "items": [
    {
      "id": "r1",
      "title": "Feature name",
      "description": "One-line description",
      "status": "backlog",
      "priority": "P2",
      "type": "feature",
      "linked_prd": "docs/prd.json",
      "created": "2026-05-19",
      "completed": null
    }
  ]
}
```

Valid values:
- `status`: `backlog`, `in-progress`, `done`
- `priority`: `P1`, `P2`, `P3`, `P4`
- `type`: `feature`, `bug`, `improvement`, `research`

### Page Regeneration
After every mutation, regenerate `src/app/roadmap/page.tsx`. The page is a server component that imports from `@/../docs/roadmap.json` and renders a kanban board using `Card` and `Badge` from shadcn/ui. Follow the existing implementation — do not change the page structure, only update it if the component needs new features.

Read `src/app/roadmap/page.tsx` before regenerating to preserve the current implementation.

### After Any Change

Run `npm run dev` (skip if already running). Then output:

```
Roadmap updated → http://localhost:[port]/ev/roadmap

Items: X backlog · Y in progress · Z done

Run /ev-roadmap again to make changes.
```
