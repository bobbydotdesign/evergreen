---
description: Rapidly prototype interactive wireframes and screens. Use when the user wants quick low-fi prototypes, screen layouts, or flow mockups.
argument-hint: "[app or screen description]"
---

The user wants a fast, working prototype — not a polished product. Speed matters more than perfection.

### Usage
- `/ev-wireframe a todo app` — generate a full wireframe prototype
- `/ev-wireframe login and signup flow` — specific screens/flows
- `/ev-wireframe iterate on the dashboard` — refine an existing prototype

### Context Detection
Before asking the user what to wireframe, check for existing project context:
- If `docs/prd.md` exists, read it — use the product definition, features, and user flows to inform the wireframe
- If `docs/research.md` exists, read it — incorporate design opportunities and UX patterns
- If wireframe components already exist in `src/components/wireframe/` or wireframe pages exist, treat this as an iteration

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
  - label: "Iterate on existing screens", description: "Refine and improve what's already built"
  - label: "Add new screens", description: "Wireframe additional screens or flows"
  - label: "Start fresh", description: "Replace the current wireframes with a new approach"

### Process
1. **Parse the request** — identify the screens, flows, and key interactions needed (use PRD/research context if available)
2. **Generate the prototype** — create pages and components directly in the app
3. **Keep it fast** — use placeholder content, lorem ipsum is fine, stock icons are fine
4. **Make it interactive** — basic navigation between screens, form inputs that work, state that updates
5. **Run the dev server** — offer to start `npm run dev` so they can preview immediately

### Wireframe Style Guide
- Use `border-2 border-dashed border-muted` for placeholder/wireframe containers
- Use `bg-muted` blocks for image placeholders with a label inside
- Use real text hierarchy (h1, h2, p) but placeholder copy is fine
- Keep layouts simple — single column on mobile, 2-3 columns on desktop
- Use shadcn/ui components for interactive elements (buttons, inputs, dialogs)
- Gray-scale only — no colors unless the user has specified a palette

### File Structure
```
src/app/
  page.tsx              <- main screen
  [flow]/
    page.tsx            <- additional screens
src/components/
  wireframe/            <- wireframe-specific components
```

### After Generating
- Start the dev server if not running
- List all screens created with brief descriptions
- Offer to:
  - Iterate on any screen
  - Convert wireframes to high-fidelity with `/ev-design`
  - Export to Figma for further design work
  - Generate a PRD from the prototype with `/ev-prd`
