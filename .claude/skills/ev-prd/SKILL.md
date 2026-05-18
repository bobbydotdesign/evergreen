---
description: Generate a product requirements document from a brief. Use when the user wants to define what they're building, create a PRD, or plan a product.
argument-hint: "[product idea | guided | research-first | refine]"
---

### Context Detection
Before starting, check for existing project context:
- If `docs/research.md` exists, read it — use market data and competitor insights to ground the PRD
- If wireframe components exist in `src/components/wireframe/` or wireframe pages in `src/app/`, read them — the prototype reveals what features and flows the user is already exploring
- If design components exist in `src/components/`, scan them — the existing UI shows what's been built
- If `docs/design-system.md` exists, note the visual direction
- Summarize what context you found so the user knows you're building on prior work

### Getting Started

If the user provides a product brief as the argument (e.g. `/ev-prd a habit tracking app`), go straight to **Quick** mode.

If no argument is provided, you MUST use the AskUserQuestion tool to let the user pick a mode before doing anything else. Do NOT skip this step. Do NOT proceed without their choice.

Call AskUserQuestion with:
- question: "How would you like to create your PRD?"
- header: "Mode"
- options:
  - label: "Guided walkthrough (Recommended)", description: "I'll ask a few questions to shape your product thinking before generating"
  - label: "Quick generation", description: "Describe your idea and get a full PRD immediately"
  - label: "Research-first", description: "Research the market and competitors, then generate a grounded PRD"
  - label: "Refine existing", description: "Improve or restructure a PRD or notes you already have"

Context adjustments:
- If `docs/prd.md` exists, mention it before asking and recommend **Refine**
- If `docs/research.md` exists, note that research is available to inform the PRD

Wait for the user's choice, then proceed to the matching mode below.

### Modes

**Guided** — recommended default
Walk through product thinking one question at a time:

1. What are you building, in one sentence?
2. Who is this for, and what's their current pain?
3. What does success look like — how will you know it's working?
4. What are the 3-5 core features for a first version?
5. What are you explicitly NOT building yet?

After gathering answers, offer to run a quick research pass (WebSearch for 2-3 competitors and key market signals) before generating the PRD. The user can accept or skip. If they accept, weave findings into the Problem Statement and Technical Considerations sections.

Then generate the full PRD and save to `docs/prd.md`.

**Quick** — `/ev-prd a habit tracking app for runners`
User provides a product brief as the argument. Generate the full PRD immediately. No questions, no research — just output.

**Research-first** — `/ev-prd research-first [topic]`
1. Run the `/ev-research` skill first to gather competitive analysis and market data
2. Once research is saved to `docs/research.md`, generate a PRD grounded in those findings
3. Reference specific competitors, gaps, and opportunities from the research throughout the PRD

**Refine** — `/ev-prd refine` or when `docs/prd.md` already exists
1. Read the existing `docs/prd.md` (or accept rough notes pasted inline)
2. Analyze for gaps: missing sections, vague goals, undefined users, unscoped features
3. Present a brief assessment of what's strong and what needs work
4. Improve the PRD section by section, confirming changes with the user

### PRD Template

Save to `docs/prd.md`:

```markdown
# [Product Name] — PRD

## Overview
One paragraph summarizing the product, who it's for, and the core value proposition.

## Problem Statement
What problem does this solve? Why does it matter?

## Target Users
- Primary persona(s) with brief description
- Key user needs and pain points

## Goals & Success Metrics
- [ ] Goal 1 — metric
- [ ] Goal 2 — metric
- [ ] Goal 3 — metric

## Core Features (MVP)
Prioritized list of features for the first version:
1. **Feature** — brief description
2. **Feature** — brief description
3. **Feature** — brief description

## User Flows
Describe the 2-3 most critical user journeys.

## Out of Scope (v1)
What are we explicitly NOT building in the first version?

## Technical Considerations
Stack, integrations, constraints, or dependencies.

## Open Questions
Unresolved decisions that need input.

## Timeline
Rough phases: Design → Build → Test → Launch
```

### After Generating
- Create the `docs/` directory if it doesn't exist
- Save to `docs/prd.md`
- Offer to refine any section
- Suggest next step: `/ev-research` (if not already done) or `/ev-designsystem`
