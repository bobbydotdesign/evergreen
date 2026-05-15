# /design — Frontend Design Skill

## Description
Create, refine, and implement UI components and pages using the project's design system. This skill builds on the Anthropic `frontend-design` skill and adds project-specific conventions.

## Instructions

**Important**: Always apply the built-in Anthropic `frontend-design` skill as the design foundation. It provides opinionated, production-grade design thinking — distinctive layouts, intentional typography, and visual choices that avoid generic "AI slop." This skill layers project-specific constraints on top of those principles.

When the user invokes `/design`, they want to create or modify frontend UI. This skill operates in several modes:

### Modes

**Component mode** — `/design button variants` or `/design a pricing card`
- Create or modify components in `src/components/`
- Use shadcn/ui primitives as building blocks
- Follow the existing design system tokens (colors, spacing, radius)
- Export from a clean file with props interface

**Page mode** — `/design the landing page` or `/design settings page`
- Create full page layouts in `src/app/`
- Use existing components, create new ones as needed
- Ensure responsive design (mobile-first)
- Include proper metadata

**Refine mode** — `/design refine the header`
- Read the existing component, analyze it
- Suggest and apply improvements (spacing, hierarchy, contrast, alignment)
- Explain design rationale for changes

### Design Approach
- Read `globals.css` to understand the current design system tokens before building anything
- If `/design-system` has been run and `docs/design-system.md` exists, follow those conventions
- If no design system has been configured yet, suggest running `/design-system` first or use the shadcn defaults
- Always respect the project's existing visual language — don't impose a style, extend what's there

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
When the user wants to translate a Figma design:
1. Use `mcp__figma__get_design_context` or `mcp__figma__get_screenshot` to inspect the design
2. Extract colors, spacing, typography, and layout
3. Map Figma tokens to the project's design system variables
4. Build the component matching the design as closely as possible
5. Use `mcp__figma__get_code_connect_suggestions` to check for existing code mappings
