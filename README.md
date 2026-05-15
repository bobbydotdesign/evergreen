# Evergreen

A starter kit for agentic product design. Built for product designers who use Claude Code to go from idea to deployed prototype.

## What's Inside

- **Next.js + TypeScript** — App Router, server components by default
- **Tailwind CSS v4 + shadcn/ui** — Complete design system with light/dark mode
- **Geist Font** — Clean, modern typography from Vercel
- **Claude Code Skills** — Built-in commands for your design workflow
- **Figma MCP Support** — Bidirectional design-to-code workflow

## Quick Start

```bash
# Clone the template
git clone https://github.com/bobbydotdesign/evergreen.git my-project
cd my-project

# Install dependencies
npm install

# Start the dev server
npm run dev

# Open Claude Code and start building
claude
```

## Skills

These skills are available in Claude Code when working in this project:

| Skill | What it does |
|-------|-------------|
| `/prd` | Generate a product requirements document from an idea |
| `/research` | Competitive analysis and market research |
| `/design` | Create and refine UI components and pages |
| `/wireframe` | Rapid low-fi interactive prototypes |
| `/ship` | Deploy to Vercel and set up feedback collection |

## Recommended Workflow

1. **Define** — Run `/prd` to create a product requirements doc
2. **Research** — Run `/research` to validate your assumptions
3. **Prototype** — Run `/wireframe` to quickly build interactive screens
4. **Refine** — Run `/design` to polish components and layouts
5. **Ship** — Run `/ship` to deploy to Vercel and collect feedback

## Figma Integration

If you have Figma MCP configured, you can:
- Pull designs from Figma and translate them to code
- Push component mappings back to Figma
- Use Figma as your source of truth while Claude Code builds the implementation

## Design System

The project includes a full design system via shadcn/ui:

- **Colors** — Semantic tokens (primary, secondary, muted, accent, destructive) with light/dark mode
- **Typography** — Geist Sans for UI, Geist Mono for code
- **Components** — Button, Card, Input, Textarea, Badge, Tabs, Dialog, Sheet, Separator, Skeleton
- **Spacing & Radius** — Consistent scale via CSS variables

Add more shadcn components anytime:

```bash
npx shadcn@latest add [component-name]
```

## Project Structure

```
src/
  app/                 <- Pages and layouts
  components/
    ui/                <- shadcn/ui components
    wireframe/         <- Wireframe components (from /wireframe)
  lib/
    utils.ts           <- Utilities (cn helper)
docs/
  prd.md               <- PRD (from /prd)
  research.md          <- Research (from /research)
.claude/
  skills/              <- Claude Code skills
```

## Contributing

Contributions welcome! This is an open-source tool for the design community. Feel free to:
- Add new skills
- Improve existing ones
- Suggest workflow improvements
- Share how you use it

## License

MIT
