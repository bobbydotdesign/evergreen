<!-- EVERGREEN:START — managed by /ev-update, do not edit below this line -->

# Evergreen Framework

## Stack
- **Framework**: Next.js (App Router, TypeScript)
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui
- **Font**: Geist Sans + Geist Mono (via next/font)
- **Deploy**: Vercel

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
  skills/
    ev-prd/SKILL.md           <- Product requirements generator
    ev-research/SKILL.md      <- Market & competitive research
    ev-design/SKILL.md        <- UI components and pages
    ev-designsystem/SKILL.md  <- Colors, typography, spacing
    ev-wireframe/SKILL.md     <- Rapid prototyping
    ev-figma/SKILL.md         <- Figma-to-code workflow
    ev-ship/SKILL.md          <- Deploy to Vercel
    ev-update/SKILL.md        <- Update Evergreen
    ev-help/SKILL.md          <- Show all skills
```

## Coding Conventions
- Use Tailwind theme tokens (`bg-primary`, `text-muted-foreground`, etc.) — never hardcode colors
- Use CSS variables defined in `globals.css` for custom values
- Use `cn()` from `@/lib/utils` for conditional class merging
- Use shadcn/ui components as building blocks — don't rebuild existing primitives
- Mobile-first responsive design: 375px -> 768px -> 1280px
- Server components by default; add `"use client"` only when needed

## Skills
All Evergreen skills are prefixed with `ev-`. Type `ev-` to see them all.
- `/ev-prd` — Generate a product requirements document
- `/ev-research` — Conduct market and competitive research
- `/ev-design` — Create and refine UI components and pages
- `/ev-designsystem` — Configure colors, typography, spacing, and audit consistency
- `/ev-wireframe` — Rapid low-fi prototyping
- `/ev-figma` — Pull designs from Figma, extract tokens, sync components
- `/ev-ship` — Deploy to Vercel and set up feedback
- `/ev-update` — Update Evergreen to the latest version
- `/ev-help` — Show all skills and the recommended workflow

## Figma MCP Integration
This project supports Figma MCP via the `/ev-figma` skill. Available MCP tools:
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
1. Start with `/ev-prd` to define what you're building
2. Run `/ev-research` to validate assumptions
3. Run `/ev-designsystem` to set your visual foundation
4. Use `/ev-wireframe` to quickly prototype screens
5. Refine with `/ev-design` (and `/ev-figma` when working from Figma files)
6. Deploy with `/ev-ship` when ready for feedback

<!-- EVERGREEN:END — add your project instructions below -->

# Project Instructions

## Design System
- **Theme**: Dark mode by default (set on `<html>` via `dark` class)
- **Colors**: Neutral palette (configured in `globals.css`)
- **Font**: Geist Sans + Geist Mono
- **Radius**: 0.625rem

Run `/ev-designsystem` to customize these choices for your project.
