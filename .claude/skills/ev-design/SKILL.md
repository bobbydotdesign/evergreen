---
description: Create and refine frontend UI components and pages. Use when the user wants to build, style, or improve UI elements using the design system.
argument-hint: "[component or page description]"
---

**Important**: Always apply the built-in Anthropic `frontend-design` skill as the design foundation. It provides opinionated, production-grade design thinking — distinctive layouts, intentional typography, and visual choices that avoid generic output. This skill layers project-specific constraints on top.

### Modes

**Component mode** — `/ev-designbutton variants` or `/ev-designa pricing card`
- Create or modify components in `src/components/`
- Use shadcn/ui primitives as building blocks
- Follow the existing design system tokens (colors, spacing, radius)
- Export from a clean file with props interface

**Page mode** — `/ev-designthe landing page` or `/ev-designsettings page`
- Create full page layouts in `src/app/`
- Use existing components, create new ones as needed
- Ensure responsive design (mobile-first)
- Include proper metadata

**Refine mode** — `/ev-designrefine the header`
- Read the existing component, analyze it
- Suggest and apply improvements (spacing, hierarchy, contrast, alignment)
- Explain design rationale for changes

### Design Approach
- Read `globals.css` to understand the current design system tokens before building
- If `docs/design-system.md` exists, follow those conventions
- If no design system has been configured yet, suggest running `/ev-designsystem` first or use the shadcn defaults
- Respect the project's existing visual language — extend what's there

### Technical Guidelines
- Use Tailwind utility classes
- Use CSS variables from `globals.css` via Tailwind theme (e.g., `bg-primary`, `text-muted-foreground`)
- Use shadcn/ui components when they exist — don't rebuild what's there
- Keep components as server components unless interactivity requires `"use client"`
- Use `cn()` from `@/lib/utils` for conditional classes
- Use `buttonVariants()` for link-as-button patterns (no `asChild` — this version of shadcn uses base-ui)

### After Creating
- Offer to preview by running the dev server
- Suggest connecting to Figma via MCP to sync the design
- If a PRD exists, reference it for feature alignment

### Figma Integration
When translating a Figma design:
1. Use `mcp__figma__get_design_context` or `mcp__figma__get_screenshot` to inspect
2. Extract colors, spacing, typography, and layout
3. Map Figma tokens to the project's design system variables
4. Build the component matching the design as closely as possible
5. Use `mcp__figma__get_code_connect_suggestions` to check for existing code mappings
