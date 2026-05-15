# /prd — Product Requirements Document Generator

## Description
Generate a structured PRD from a brief product idea or description.

## Instructions

When the user invokes `/prd`, guide them through creating a product requirements document. If they provide a brief, generate the full PRD immediately. If not, ask for a one-liner about what they're building.

Generate a PRD using this structure and save it to `docs/prd.md`:

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

After generating:
- Save to `docs/prd.md`
- Create the `docs/` directory if it doesn't exist
- Offer to refine any section
- Suggest running `/research` to validate assumptions
