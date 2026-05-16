# Evergreen

An agentic design framework for product designers who use [Claude Code](https://docs.anthropic.com/en/docs/claude-code). Go from idea to deployed prototype using built-in skills for research, design, prototyping, and deployment.

> **Requires [Claude Code](https://docs.anthropic.com/en/docs/claude-code)** — Evergreen is a set of skills and conventions that run inside Claude Code. You'll need it installed to use this framework.

## What's Inside

- **Claude Code Skills** — `/prd`, `/research`, `/design`, `/wireframe`, `/ship` and more
- **Next.js + TypeScript** — App Router, server components by default
- **Tailwind CSS v4 + shadcn/ui** — Complete design system with light/dark mode
- **Geist Font** — Clean, modern typography from Vercel
- **Figma MCP Support** — Bidirectional design-to-code workflow

## Quick Start

### New project

Start fresh with Evergreen as your foundation. Run these in your terminal.

```bash
git clone https://github.com/bobbydotdesign/evergreen.git my-project
cd my-project
npm install
claude
```

Once inside Claude Code, ask it to start the dev server when you're ready to preview in your browser.

### Existing project

Already have a project? Add the Evergreen skills and configuration to it. Run these in your terminal from your project folder.

```bash
git clone https://github.com/bobbydotdesign/evergreen.git /tmp/evergreen
cp -r /tmp/evergreen/.claude .claude
cp /tmp/evergreen/CLAUDE.md CLAUDE.md
rm -rf /tmp/evergreen
```

This gives you all the built-in skills without changing your existing stack. Open Claude Code in your project and they're ready to use.

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
