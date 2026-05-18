---
description: Set up or modify the design system — colors, typography, spacing, radius, and component conventions. Use when the user wants to change colors, fonts, theme, or audit design consistency.
argument-hint: "[setup | colors | typography | audit | export]"
---

### Context Detection
Before starting, check for existing project context:
- If `docs/prd.md` exists, read it — the product's personality and audience should inform the visual direction
- If `docs/research.md` exists, read it — competitor aesthetics and design opportunities can guide choices
- If wireframe or design components exist in `src/components/` or pages in `src/app/`, scan them — extract the visual patterns that have already emerged (colors used, spacing, type sizes) and use these as a starting point rather than asking from scratch
- If `docs/design-system.md` already exists, treat this as an update/refinement
- Summarize what context you found so the user knows you're building on prior work

If no argument was provided, use AskUserQuestion to let the user choose:

When design components or wireframes exist but no design system yet:
- question: "I see existing [wireframes/components] with these visual patterns: [summary]. How would you like to proceed?"
- options:
  - label: "Formalize from what's here", description: "Extract the colors, typography, and spacing already in use and turn them into a design system"
  - label: "Set up from scratch", description: "Walk through colors, typography, and spacing step by step"
  - label: "Audit consistency", description: "Scan the codebase for hardcoded values and inconsistencies"

When a design system already exists:
- question: "You have an existing design system. What would you like to do?"
- options:
  - label: "Update colors", description: "Change the color palette"
  - label: "Update typography", description: "Change fonts or type scale"
  - label: "Audit consistency", description: "Scan the codebase for design system violations"
  - label: "Export documentation", description: "Generate or update docs/design-system.md"

### Modes

**Setup** — `/ev-designsystem setup` or `/ev-designsystem` (first time)
Walk the user through configuring their design system:

1. **Colors** — Ask for a primary brand color or palette direction (warm, cool, vibrant, muted, monochrome). Generate a full semantic color set:
   - primary, secondary, muted, accent, destructive
   - foreground/background pairs for each
   - Light and dark mode variants
   - Update `:root` and `.dark` in `globals.css`

2. **Typography** — Confirm or change the font stack:
   - Default is Geist Sans + Geist Mono
   - If changing: install the font, update `layout.tsx` and `globals.css`
   - Set the type scale (heading sizes, body, caption, code)

3. **Spacing & Radius** — Set the base radius and confirm the spacing scale:
   - Default radius: `0.625rem`
   - Adjust for sharper (0.25rem) or rounder (1rem) aesthetic

4. **Component Style** — Review shadcn component defaults:
   - Button sizes and variants
   - Card padding and borders
   - Input styling

Save a summary to `docs/design-system.md`.

After setup or any design change, update the **Design System** section in `CLAUDE.md` below the `<!-- EVERGREEN:END -->` marker with the user's choices (theme mode, colors, font, radius). This ensures Claude always knows the current design decisions and they survive Evergreen updates.

**Update** — `/ev-designsystem colors`, `/ev-designsystem typography`, etc.
Modify a specific aspect without re-running the full setup.

**Audit** — `/ev-designsystem audit`
Scan the codebase for design system violations:
- Hardcoded colors (hex, rgb, oklch not using CSS variables)
- Inconsistent spacing (arbitrary values instead of the scale)
- Typography outside the type scale
- Components not using `cn()` for class merging
Report findings and offer to fix them.

**Export** — `/ev-designsystem export`
Generate a summary of the current design system:
- All CSS variables with their values
- Color swatches (light + dark)
- Typography scale
- Spacing and radius values
- Save to `docs/design-system.md`

### Color Generation Guidelines
When generating colors from a brand color:
- Use oklch color space (matches the existing globals.css format)
- Primary: the brand color
- Secondary: a desaturated/lighter variant
- Muted: very low saturation, used for backgrounds
- Accent: a complementary or analogous color
- Destructive: red-based, for errors and destructive actions
- Ensure WCAG AA contrast ratios for all foreground/background pairs
- Test both light and dark mode

### File Locations
- Color tokens: `src/app/globals.css` (`:root` and `.dark` blocks)
- Font config: `src/app/layout.tsx`
- Theme mapping: `@theme inline` block in `globals.css`
- Component styles: `src/components/ui/`
- Documentation: `docs/design-system.md`
