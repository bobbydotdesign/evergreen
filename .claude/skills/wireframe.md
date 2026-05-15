# /wireframe — Rapid Prototyping

## Description
Quickly generate low-fidelity or high-fidelity interactive prototypes from a description.

## Instructions

When the user invokes `/wireframe`, they want a fast, working prototype — not a polished product. Speed matters more than perfection.

### Usage
- `/wireframe a todo app` — generate a full wireframe prototype
- `/wireframe login and signup flow` — specific screens/flows
- `/wireframe iterate on the dashboard` — refine an existing prototype

### Process

1. **Parse the request** — identify the screens, flows, and key interactions needed
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
  page.tsx              ← main screen
  [flow]/
    page.tsx            ← additional screens
src/components/
  wireframe/            ← wireframe-specific components
```

### After Generating
- Start the dev server if not running
- List all screens created with brief descriptions
- Offer to:
  - Iterate on any screen
  - Convert wireframes to high-fidelity with `/design`
  - Export to Figma for further design work
  - Generate a PRD from the prototype with `/prd`
