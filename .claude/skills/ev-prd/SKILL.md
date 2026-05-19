---
description: Generate a product requirements document from a brief. Use when the user wants to define what they're building, create a PRD, or plan a product.
argument-hint: "[product idea | guided | research-first | refine]"
---

### Context Detection
Before starting, check for existing project context:
- If `docs/research.json` exists, read it — use market data and competitor insights to ground the PRD
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
  - label: "Refine existing", description: "Improve or restructure a PRD you already have"

Context adjustments:
- If `docs/prd.json` exists, mention it before asking and recommend **Refine**
- If `docs/research.json` exists, note that research is available to inform the PRD

Wait for the user's choice, then proceed to the matching mode below.

### Modes

**Guided** — recommended default
Walk through product thinking one question at a time:

1. What are you building, in one sentence?
2. Who is this for, and what's their current pain?
3. What does success look like — how will you know it's working?
4. What are the 3-5 core features for a first version?
5. What are you explicitly NOT building yet?

After gathering answers, offer to run a quick research pass (WebSearch for 2-3 competitors and key market signals) before generating the PRD. The user can accept or skip. If they accept, weave findings into the PRD.

Then generate and save to `docs/prd.json`, then regenerate `src/app/prd/page.tsx`.

**Quick** — `/ev-prd a habit tracking app for runners`
User provides a product brief as the argument. Generate the full PRD immediately. No questions, no research — just output.

**Research-first** — `/ev-prd research-first [topic]`
1. Run the `/ev-research` skill first to gather competitive analysis and market data
2. Once research is saved to `docs/research.json`, generate a PRD grounded in those findings
3. Reference specific competitors, gaps, and opportunities from the research

**Refine** — `/ev-prd refine` or when `docs/prd.json` already exists
1. Read the existing `docs/prd.json`
2. Analyze for gaps: missing sections, vague goals, undefined users, unscoped features
3. Present a brief assessment of what's strong and what needs work
4. Improve the PRD, confirming changes with the user

### Output Format

Save to `docs/prd.json`:

```json
{
  "title": "Product Name",
  "subtitle": "Short tagline",
  "overview": "One paragraph summarizing the product, who it's for, and the core value proposition.",
  "target_user": "Primary persona description with key needs and pain points.",
  "problem": "What problem does this solve? Why does it matter?",
  "goals": [
    { "goal": "Goal description", "metric": "How to measure it" }
  ],
  "features": [
    {
      "title": "Feature name",
      "description": "Brief description of the feature",
      "priority": "mvp | next | later"
    }
  ],
  "user_flows": [
    {
      "name": "Flow name",
      "steps": ["Step 1", "Step 2", "Step 3"]
    }
  ],
  "out_of_scope": ["Thing 1", "Thing 2"],
  "technical": "Stack, integrations, constraints, or dependencies.",
  "open_questions": ["Question 1", "Question 2"],
  "future_features": ["Feature 1", "Feature 2"]
}
```

### Page Regeneration
After writing `docs/prd.json`, read the existing `src/app/prd/page.tsx` and regenerate it to render the new data. The page is a server component that imports from `@/../docs/prd.json` and renders structured sections using shadcn/ui components (Card, Badge). Follow the existing page structure — only add new sections if the JSON schema requires it.

### After Generating
- Save to `docs/prd.json` and regenerate the page
- Run `npm run dev` (skip if already running)
- Output: `PRD ready → http://localhost:[port]/prd`
- Offer to refine any section
- Suggest next step: `/ev-research` (if not already done) or `/ev-roadmap`
