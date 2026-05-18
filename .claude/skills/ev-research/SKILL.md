---
description: Conduct competitive analysis, market research, and user insights. Use when the user wants to research competitors, validate assumptions, or understand a market.
argument-hint: "[topic or product area]"
---

### Context Detection
Before starting, check for existing project context:
- If `docs/prd.md` exists, read it — use the product definition to focus the research on relevant competitors and market segments
- If wireframe components exist in `src/components/wireframe/` or wireframe pages in `src/app/`, scan them — the prototype reveals what UX patterns to research
- If design components exist in `src/components/`, scan them — the existing UI shows design directions to compare against competitors
- If `docs/design-system.md` exists, note the visual direction for competitive comparison
- Summarize what context you found so the user knows you're building on prior work

If no argument is provided and no context exists, ask the generic "What would you like to research?"

If no argument is provided but a PRD exists, use AskUserQuestion:
- question: "I found your PRD for [product name]. What would you like to research?"
- options:
  - label: "Full competitive analysis", description: "Research competitors, market landscape, and design patterns in this space"
  - label: "Deep-dive on a competitor", description: "Pick a specific competitor to analyze in detail"
  - label: "UX patterns research", description: "Find best practices and design patterns for the key user flows"
  - label: "Something else", description: "Research a different topic"

Accept topics like:
- A product idea or space (e.g., "habit tracking apps")
- A specific competitor (e.g., "how does Linear handle project views")
- A user need (e.g., "how do freelancers manage invoicing")

Use WebSearch and WebFetch to gather real data. Structure findings and save to `docs/research.md`:

```markdown
# Research: [Topic]

## Summary
2-3 sentence overview of findings.

## Market Landscape
- Market size / growth indicators
- Key trends shaping this space
- Relevant platforms and ecosystems

## Competitive Analysis
| Product | Strengths | Weaknesses | Pricing | Notable UX |
|---------|-----------|------------|---------|-------------|
| ...     | ...       | ...        | ...     | ...         |

## User Insights
- Common pain points across existing solutions
- Unmet needs and opportunities
- Behavioral patterns worth noting

## Design Opportunities
- Gaps in current offerings
- UX patterns that work well
- Potential differentiators

## Key Takeaways
Numbered list of actionable insights for the product.

## Sources
Links to sources used.
```

Guidelines:
- Focus on actionable insights, not exhaustive data dumps
- Highlight design opportunities — this is for a product designer
- If a PRD exists in `docs/prd.md`, cross-reference findings with it
- Offer to update the PRD based on research findings
- Suggest running `/ev-wireframe` to start prototyping based on insights
