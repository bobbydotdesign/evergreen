---
description: Pull designs from Figma, extract tokens, translate to code, and sync component mappings. Use when the user wants to work with Figma files, inspect designs, or sync components.
argument-hint: "[inspect | build | sync | variables] [url]"
---

### Modes

**Inspect** — `/figma inspect [url or description]`
1. Use `mcp__figma__get_design_context` to pull layout, spacing, colors, typography from a Figma frame
2. Use `mcp__figma__get_screenshot` to capture a visual reference
3. Summarize the design: hierarchy, spacing system, color usage, component patterns
4. Map Figma tokens to the project's design system variables in `globals.css`
5. Flag any tokens that don't exist yet and suggest additions

**Build** — `/figma build [url or description]`
1. Inspect the design (same as above)
2. Create the component or page in code, matching the design as closely as possible
3. Use shadcn/ui primitives where they fit, create custom components where needed
4. Use the project's design tokens — never hardcode colors or spacing
5. Offer to preview with the dev server

**Sync** — `/figma sync`
1. Use `mcp__figma__get_code_connect_suggestions` to check for component mappings
2. Review suggestions and confirm with the user
3. Use `mcp__figma__send_code_connect_mappings` to push mappings back to Figma
4. Report what was synced

**Variables** — `/figma variables`
1. Use `mcp__figma__get_variable_defs` to pull Figma variables
2. Compare with the project's CSS variables in `globals.css`
3. Show a diff: what's in Figma but not in code, and vice versa
4. Offer to update `globals.css` to match

### Guidelines
- Always inspect before building — understand the design intent first
- Map to existing design tokens before creating new ones
- When colors or spacing don't match the system, ask the user: adapt the design to the system, or extend the system?
- Keep components consistent with the rest of the codebase (Tailwind classes, cn(), server components by default)
- After building from Figma, offer to sync the component mapping back

### Available MCP Tools
- `mcp__figma__get_design_context` — layout, spacing, colors, typography from a frame
- `mcp__figma__get_screenshot` — visual capture of a frame
- `mcp__figma__get_metadata` — file/project metadata
- `mcp__figma__get_code_connect_suggestions` — suggested component mappings
- `mcp__figma__send_code_connect_mappings` — push mappings to Figma
- `mcp__figma__get_variable_defs` — pull Figma variables
- `mcp__figma__get_figjam` — pull FigJam board content
