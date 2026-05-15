# /design-system — Design System Configuration

## Description
Set up or modify the project's design system: colors, typography, spacing, radius, and component conventions.

## Instructions

When the user invokes `/design-system`, they want to configure the visual foundation of the project.

### Modes

**Setup** — `/design-system setup` or `/design-system` (first time)
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

**Update** — `/design-system colors`, `/design-system typography`, etc.
Modify a specific aspect without re-running the full setup.

**Audit** — `/design-system audit`
Scan the codebase for design system violations:
- Hardcoded colors (hex, rgb, oklch not using CSS variables)
- Inconsistent spacing (arbitrary values instead of the scale)
- Typography outside the type scale
- Components not using `cn()` for class merging
Report findings and offer to fix them.

**Export** — `/design-system export`
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
