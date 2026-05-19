---
description: Conduct competitive analysis, market research, and user insights. Use when the user wants to research competitors, validate assumptions, or understand a market.
argument-hint: "[topic or product area]"
---

### Context Detection
Before starting, check for existing project context:
- If `docs/prd.json` exists, read it — use the product definition to focus the research on relevant competitors and market segments
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

Use WebSearch and WebFetch to gather real data.

### Output Format

Save to `docs/research.json`:

```json
{
  "title": "Research topic",
  "summary": "2-3 sentence overview of findings.",
  "competitors": [
    {
      "name": "Competitor Name",
      "url": "https://competitor.com",
      "strength": "What they do well",
      "weakness": "Where they fall short",
      "pricing": "Free / $X/mo / etc.",
      "notable_ux": "Specific UX pattern worth noting"
    }
  ],
  "insights": [
    {
      "text": "Actionable insight or finding",
      "type": "insight | warning | opportunity"
    }
  ],
  "opportunities": [
    "Design opportunity or differentiator"
  ],
  "sources": [
    { "title": "Source name", "url": "https://source.com" }
  ]
}
```

### Page Regeneration
After writing `docs/research.json`, read the existing `src/app/research/page.tsx` and regenerate it to render the new data. The page is a server component that imports from `@/../docs/research.json` and renders structured sections using shadcn/ui components (Card, Badge). Follow the existing page structure — only add new sections if the JSON schema requires it.

### After Generating
- Save to `docs/research.json` and regenerate the page
- Run `npm run dev` (skip if already running)
- Output: `Research ready → http://localhost:[port]/research`
- Offer to update the PRD based on research findings
- Suggest running `/ev-roadmap` to plan what to build or `/ev-wireframe` to start prototyping

### Guidelines
- Focus on actionable insights, not exhaustive data dumps
- Highlight design opportunities — this is for a product designer
- If a PRD exists in `docs/prd.json`, cross-reference findings with it
- Use `type: "warning"` for risks, `type: "opportunity"` for gaps to exploit, `type: "insight"` for everything else
