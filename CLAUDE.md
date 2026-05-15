# Evergreen — Agentic Design Framework

## Project Overview
An agentic design framework for product designers. Built on Next.js, shadcn/ui, Tailwind CSS, and Geist font. Go from idea to deployed prototype using Claude Code.

## Stack
- **Framework**: Next.js (App Router, TypeScript)
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui
- **Font**: Geist Sans + Geist Mono (via next/font)
- **Deploy**: Vercel
- **Theme**: Dark mode by default

## Project Structure
```
src/
  app/              <- Pages and layouts (App Router)
  components/
    ui/             <- shadcn/ui primitives (button, card, input, etc.)
    wireframe/      <- Wireframe-specific components (created by /wireframe)
  lib/
    utils.ts        <- cn() helper and shared utilities
docs/
  prd.md            <- Product requirements (created by /prd)
  research.md       <- Research findings (created by /research)
  design-system.md  <- Design system docs (created by /design-system)
.claude/
  skills/           <- Custom skills for agentic workflow
```

## Design System Conventions
- Use Tailwind theme tokens (`bg-primary`, `text-muted-foreground`, etc.) — never hardcode colors
- Use CSS variables defined in `globals.css` for custom values
- Use `cn()` from `@/lib/utils` for conditional class merging
- Use shadcn/ui components as building blocks — don't rebuild existing primitives
- Mobile-first responsive design: 375px -> 768px -> 1280px
- Server components by default; add `"use client"` only when needed
- Dark mode is the default (set on `<html>` via `dark` class)

## Skills
- `/prd` — Generate a product requirements document
- `/research` — Conduct market and competitive research
- `/design` — Create and refine UI components and pages
- `/design-system` — Configure colors, typography, spacing, and audit consistency
- `/wireframe` — Rapid low-fi prototyping
- `/figma` — Pull designs from Figma, extract tokens, sync components
- `/ship` — Deploy to Vercel and set up feedback

## Figma MCP Integration
This project supports Figma MCP via the `/figma` skill. Available MCP tools:
- `mcp__figma__get_design_context` — Inspect Figma designs for layout, spacing, colors
- `mcp__figma__get_screenshot` — Capture Figma frames as reference
- `mcp__figma__get_code_connect_suggestions` — Map Figma components to code
- `mcp__figma__send_code_connect_mappings` — Push code mappings back to Figma
- `mcp__figma__get_variable_defs` — Pull Figma variables and tokens

When translating from Figma: extract tokens, map to the design system variables, and build components to match.

## Git & Commit Conventions
- Do NOT include `Co-Authored-By: Claude` in commit messages
- Do NOT list Claude as a contributor
- Write concise commit messages focused on the "why"
- Commit only when explicitly asked

## Workflow
1. Start with `/prd` to define what you're building
2. Run `/research` to validate assumptions
3. Run `/design-system` to set your visual foundation
4. Use `/wireframe` to quickly prototype screens
5. Refine with `/design` (and `/figma` when working from Figma files)
6. Deploy with `/ship` when ready for feedback
