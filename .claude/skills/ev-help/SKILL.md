---
description: Show all available Evergreen skills, the recommended workflow, and how to update.
disable-model-invocation: true
---

## Evergreen version

!`cat .claude/VERSION 2>/dev/null || echo "unknown"`

## Instructions

Display the following information to the user in a clean, readable format:

### Available Skills

| Skill | What it does |
|-------|-------------|
| `/ev-prd` | Define what you're building — guided, quick, research-first, or refine |
| `/ev-research` | Competitive analysis, market research, and user insights |
| `/ev-design` | Create and refine UI components and pages |
| `/ev-designsystem` | Configure colors, typography, spacing, and audit consistency |
| `/ev-wireframe` | Rapid interactive prototyping from a description |
| `/ev-figma` | Pull designs from Figma, extract tokens, sync components |
| `/ev-roadmap` | Track features and priorities on a visual kanban board |
| `/ev-ship` | Deploy to Vercel and set up feedback collection |
| `/ev-update` | Update Evergreen to the latest version |
| `/ev-help` | Show this help |

### Recommended Workflow

1. **Define** — `/ev-prd` to create a product requirements doc
2. **Research** — `/ev-research` to validate assumptions
3. **Plan** — `/ev-roadmap` to plan what to build first
4. **Prototype** — `/ev-wireframe` to quickly build interactive screens
5. **Refine** — `/ev-design` to explore the look and polish the UI
6. **Foundation** — `/ev-designsystem` to formalize the visual system from what emerged
7. **Ship** — `/ev-ship` to deploy and collect feedback

Each skill detects existing work — PRDs, research, wireframes, components — and builds on what's there. No need to explain context manually.

### Tips

- Type `ev-` to see all Evergreen skills in autocomplete
- Most skills accept arguments, e.g. `/ev-prd a habit tracking app`
- Run `/ev-update` to check for new skills and updates
- Skills work with any project — they're not tied to a specific stack

Show the version number from above at the bottom.
