# /research — Product & Market Research

## Description
Conduct competitive analysis, market research, and user insight gathering for a product idea.

## Instructions

When the user invokes `/research`, ask what they'd like to research if no topic is provided. Accept topics like:
- A product idea or space (e.g., "habit tracking apps")
- A specific competitor (e.g., "how does Linear handle project views")
- A user need (e.g., "how do freelancers manage invoicing")

Use WebSearch and WebFetch to gather real data. Structure findings into a research brief and save to `docs/research.md`.

### Research Brief Structure

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

### Guidelines
- Focus on actionable insights, not exhaustive data dumps
- Highlight design opportunities — this is for a product designer
- If a PRD exists in `docs/prd.md`, cross-reference findings with it
- Offer to update the PRD based on research findings
- Suggest running `/wireframe` to start prototyping based on insights
