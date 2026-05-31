---
description: Rapidly prototype interactive wireframes and screens. Use when the user wants quick low-fi prototypes, screen layouts, or flow mockups.
argument-hint: "[app or screen description]"
---

The user wants a fast, working prototype — not a polished product. Speed matters more than perfection. But always ask before building.

### Usage
- `/ev-wireframe a todo app` — generate a full wireframe prototype
- `/ev-wireframe login and signup flow` — specific screens/flows
- `/ev-wireframe iterate on the dashboard` — refine an existing prototype

### Context Detection
Before asking the user what to wireframe, check for existing project context:
- If `docs/prd.json` exists, read it — use the product definition, features, and user flows to inform the wireframe
- If `docs/research.json` exists, read it — incorporate design opportunities and UX patterns
- If wireframe components already exist in `src/components/wireframe/` or wireframe pages exist, treat this as an iteration — read the existing wireframe pages and components to understand current state before proposing changes
- If `docs/wireframe-log.md` exists, read it for full iteration history — what was built, feedback received, and direction. Use it to avoid repeating rejected approaches and to build on what the user already approved.

### Getting Started — Always Ask First

Never dive straight into generating screens. Start by understanding what the user wants, then ask clarifying questions before building anything.

**Step 1: Determine the starting point**

If no argument was provided and no project context exists, ask the generic "What would you like to wireframe?"

If no argument was provided but context exists (PRD, research, or existing wireframes), use AskUserQuestion to let the user choose:

When PRD exists but no wireframes yet:
- question: "I found your PRD for [product name]. How would you like to wireframe it?"
- options:
  - label: "Wireframe all core screens", description: "Generate screens for all features and user flows from the PRD"
  - label: "Pick specific screens", description: "Choose which features or flows to prototype first"
  - label: "Something else", description: "Wireframe something not in the PRD"

When wireframes already exist:
- question: "I see existing wireframes for [screens]. What would you like to do?"
- options:
  - label: "Iterate on existing screens", description: "Rework flows, layout, or screen architecture"
  - label: "Add new screens", description: "Wireframe additional screens or flows"
  - label: "Start fresh", description: "Replace the current wireframes with a new approach"

When the user chooses "Iterate on existing screens", ask a follow-up focused on wireframe-level concerns only (not visual polish):
- question: "What would you like to improve?"
- options:
  - label: "Screen flow", description: "Add, remove, or reorder screens and navigation paths"
  - label: "Page structure", description: "Rearrange sections, change information hierarchy"
  - label: "User interactions", description: "Change what happens when users tap/click things"
  - label: "Content priority", description: "Reorder what's prominent vs. secondary on each screen"

**Step 2: Ask clarifying questions**

Once you know what to wireframe (from the argument, PRD, or user's choice above), ask a few quick questions before generating. Use AskUserQuestion:

- question: "Before I start, a few quick questions about [what they want to wireframe]:"
- Present these as a brief numbered list in the question text:
  1. **Target screens** — "Which screens are most important? (e.g., home, detail, settings)" (skip if already clear from argument/PRD)
  2. **Key interactions** — "Any specific interactions or flows that matter most?"
  3. **Reference points** — "Any apps or sites you'd like it to feel like?"
- options:
  - label: "Here are my answers", description: "I'll type my answers below"
  - label: "Just go for it", description: "Use your best judgment based on the PRD and research"
  - label: "Show me concepts first", description: "Generate a few visual design concepts using /ev-design before wireframing"

If the user picks "Just go for it", proceed with the best approach based on available context.

If the user picks "Show me concepts first", invoke `/ev-design` to generate 2-3 visual concept directions for the key screens. Pass along all the context you've gathered (PRD, research, user answers). Once the user picks a direction, continue wireframing the remaining screens using that concept as the reference.

If the user picks "Here are my answers", wait for their response and incorporate it.

### Process
1. **Parse the request** — identify the screens, flows, and key interactions needed (use PRD/research context if available)
2. **Generate the prototype** — create pages and components directly in the app
3. **Keep it fast** — use placeholder content, lorem ipsum is fine, stock icons are fine
4. **Make it interactive** — basic navigation between screens, form inputs that work, state that updates
5. **Log the iteration** — append an entry to `docs/wireframe-log.md` (create it if it doesn't exist)

### Wireframe Style Guide

**Only use shadcn/ui components and Tailwind theme tokens.** This is the single rule — no exceptions unless the user explicitly asks.

Allowed:
- shadcn/ui components: `<Card>`, `<Button>`, `<Input>`, `<Skeleton>`, `<Dialog>`, `<Tabs>`, `<Badge>`, etc.
- Tailwind theme tokens: `bg-background`, `bg-card`, `bg-muted`, `text-foreground`, `text-muted-foreground`, `border`, `bg-primary`, `text-primary-foreground`, `bg-secondary`, `text-secondary-foreground`, `bg-accent`, `bg-destructive`
- Tailwind layout/spacing utilities: `flex`, `grid`, `gap-*`, `p-*`, `m-*`, `w-*`, `h-*`, `rounded-*`, etc.
- `cn()` from `@/lib/utils` for conditional classes

Banned:
- Arbitrary Tailwind colors: `bg-gray-200`, `text-slate-500`, `border-zinc-300`, etc.
- Inline styles, `style` attributes
- Custom CSS classes, `@apply` blocks, or any CSS overrides
- Project brand tokens: `text-evergreen`, `--color-evergreen`, or any custom CSS variables
- Hard-coded color values: `#fff`, `rgb()`, `oklch()`, etc.

Wireframe patterns:
- Placeholder containers → `<Card className="border-dashed">` with a label inside
- Image placeholders → `<Skeleton className="w-full h-48" />` with a text overlay
- Use real text hierarchy (`h1`, `h2`, `p`) but placeholder copy is fine
- Keep layouts simple — single column on mobile, 2-3 columns on desktop
- Gray-scale only — the theme tokens provide the right neutral palette automatically

The wireframe should look like a real grayscale app, not a hand-drawn sketch.

### File Structure
```
src/app/
  page.tsx              <- main screen (replaces the starter page)
  [flow]/
    page.tsx            <- additional screens
src/components/
  wireframe/            <- wireframe-specific components
```

The root layout is a clean minimal shell (fonts + Tailwind, no sidebar or docs UI), so wireframe pages render directly without any framework chrome getting in the way.

### After Generating

**Step 0: Update roadmap** (automatic, silent)

If `docs/roadmap.json` exists, check if any roadmap items match the screens or features just wireframed (match by title or description). For each matching item that is currently `backlog`, move it to `in-progress` and regenerate `src/app/roadmap/page.tsx`. If items were updated, include a brief note in your output: "Roadmap: moved [item title] to in-progress"

**Step 1: Update wireframe log** (automatic, silent)

Append an entry to `docs/wireframe-log.md` (create if it doesn't exist). Newest entry first (reverse chronological). Format:

```markdown
## [Date] — [Brief title]
**Request:** [What user asked for]
**Generated:** [Screens/components created or changed]
**Decisions:** [Key layout/structure choices and why]
**Feedback:** [User feedback that prompted this iteration, or "Initial wireframe"]
**Open:** [Unresolved items for next round]
```

Keep each field to 1-3 lines. Be concise.

**Step 2: Preview**

Run `npm run dev` (skip if already running). Then output:

```
Preview ready → http://localhost:3000

Screens:
- /           — [description]
- /[route]    — [description]

Navigation: [how to move between screens]
```

**Step 3: Prompt for feedback** (always end with this)

Wireframing is about flows, architecture, and high-level UX — not visual polish. The feedback prompt must reflect that. Do NOT ask about styling, theme tokens, transitions, animations, or visual refinement — those belong in `/ev-design`.

```
Review the screens, then tell me what to change:
- Screen flow: missing screens, wrong navigation, dead ends
- Information architecture: what's on each screen, what's grouped together
- User flow: steps feel wrong, too many clicks, confusing order
- Key interactions: what happens when you tap/click things
- Content priority: what's most important on each screen

Run /ev-wireframe again to iterate.

Happy with the flows? Run /ev-design to move into visual design and polish.
```
