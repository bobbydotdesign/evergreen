# Evergreen

An opinionated agentic design framework, built from my preferences while building and launching products as a one-person team. Go from idea to deployed prototype using [Claude Code](https://docs.anthropic.com/en/docs/claude-code) with built-in skills for research, design, prototyping, and deployment.

If you're adding Evergreen to an existing project, I'd recommend removing the tech stack dependencies and just leveraging the skills — they work with any stack.

Like most things I do, this is an experiment. I'll continue to evolve and support it as I evolve my own workflow, and I welcome anyone's thoughts and contributions as we all figure out how to design in this new era.

> **Requires [Claude Code](https://docs.anthropic.com/en/docs/claude-code)** — Evergreen is a set of skills and conventions that run inside Claude Code. You'll need it installed to use this framework.

## What's Inside

- **Claude Code Skills** — `/ev-prd`, `/ev-research`, `/ev-roadmap`, `/ev-design`, `/ev-wireframe`, `/ev-ship` and more
- **Project Dashboard** — Live project hub at `/evergreen` with status cards, roadmap progress, and project links
- **HTML-First Docs** — PRD, research, roadmap, and design system render as rich interactive pages, not markdown
- **Next.js + TypeScript** — App Router, server components by default
- **Tailwind CSS v4 + shadcn/ui** — Complete design system with dark mode
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
rm -rf /tmp/evergreen
```

Then add the Evergreen section to your `CLAUDE.md` (or create one if you don't have it). Copy the content between the `<!-- EVERGREEN:START -->` and `<!-- EVERGREEN:END -->` markers from the [template CLAUDE.md](https://github.com/bobbydotdesign/evergreen/blob/main/CLAUDE.md) into yours.

This gives you all the built-in skills without changing your existing stack. Open Claude Code in your project and they're ready to use.

## Skills

Type `ev-` in Claude Code to see all available skills:

| Skill | What it does |
|-------|-------------|
| `/ev-prd` | Generate a product requirements document from an idea |
| `/ev-research` | Competitive analysis and market research |
| `/ev-roadmap` | Track features and priorities on a visual kanban board |
| `/ev-design` | Create and refine UI components and pages |
| `/ev-designsystem` | Configure colors, typography, spacing |
| `/ev-wireframe` | Rapid low-fi interactive prototypes |
| `/ev-figma` | Pull designs from Figma, extract tokens, sync components |
| `/ev-ship` | Deploy to Vercel and set up feedback collection |
| `/ev-update` | Update Evergreen to the latest version |
| `/ev-help` | Show all skills and the recommended workflow |

## Recommended Workflow

1. **Define** — Run `/ev-prd` to create a product requirements doc
2. **Research** — Run `/ev-research` to validate your assumptions
3. **Prototype** — Run `/ev-wireframe` to quickly build interactive screens
4. **Plan** — Run `/ev-roadmap` to break your PRD into trackable items
5. **Refine** — Run `/ev-design` to polish components and layouts
6. **Foundation** — Run `/ev-designsystem` to set your visual foundation
7. **Ship** — Run `/ev-ship` to deploy to Vercel and collect feedback

As you work, the roadmap updates automatically — wireframing moves items to in-progress, shipping marks them done.

## Project Dashboard

Visit `/ev` in your browser to see your project at a glance:

- **Project summary** pulled from your PRD
- **What's next** from your roadmap
- **Status cards** for PRD, research, roadmap, and design system
- **Project links** — repo, staging, production, Figma

All skill outputs render as rich interactive pages with persistent navigation. Everything lives under `/ev/` so it never conflicts with your app's routes or layouts:

| Page | What it shows |
|------|--------------|
| `/ev` | Project dashboard |
| `/ev/prd` | Product requirements with feature cards and priorities |
| `/ev/research` | Competitive analysis with competitor cards and insight badges |
| `/ev/roadmap` | Interactive kanban board with drag-and-drop, inline editing, and filters |
| `/ev/design-system` | Live color swatches, type scale, spacing, component samples |

## Figma Integration

If you have Figma MCP configured, you can:
- Pull designs from Figma and translate them to code
- Push component mappings back to Figma
- Use Figma as your source of truth while Claude Code builds the implementation

## Design System

The project includes a full design system via shadcn/ui:

- **Colors** — Semantic tokens (primary, secondary, muted, accent, destructive) with dark mode
- **Typography** — Geist Sans for UI, Geist Mono for code
- **Components** — Button, Card, Input, Textarea, Badge, Tabs, Dialog, Sheet, Separator, Skeleton
- **Spacing & Radius** — Consistent scale via CSS variables

Visit `/ev/design-system` in your browser to see a live visual reference of all tokens and components.

Add more shadcn components anytime:

```bash
npx shadcn@latest add [component-name]
```

## Project Structure

```
src/
  app/
    ev/                <- Evergreen dashboard (isolated from user app)
      roadmap/         <- Kanban board
      prd/             <- Product requirements
      research/        <- Research findings
      design-system/   <- Visual design system reference
  components/
    ui/                <- shadcn/ui components
    wireframe/         <- Wireframe components (from /wireframe)
    project-nav.tsx    <- Persistent navigation
  lib/
    utils.ts           <- Utilities (cn helper)
docs/
  evergreen.json       <- Content manifest (skills, workflow, stack)
  project.json         <- Project config (repo, staging, production, figma)
  prd.json             <- Product requirements (from /ev-prd)
  research.json        <- Research findings (from /ev-research)
  roadmap.json         <- Roadmap items (from /ev-roadmap)
.claude/
  skills/              <- Claude Code skills
  settings.json        <- Evergreen settings (managed by /ev-update)
CLAUDE.md              <- Project instructions (see Architecture below)
```

## Architecture

### HTML-first docs

Skill outputs use JSON as the data layer and TSX as the presentation layer:

- **JSON files** in `docs/` — structured data that skills read and write
- **TSX pages** in `src/app/` — rich interactive pages that render the data
- **No markdown rendering** — pages use shadcn/ui components directly

This means your PRD shows feature cards with priority badges, research shows competitor comparison cards, and the roadmap is a live kanban board — not just formatted text.

### CLAUDE.md — markers system

`CLAUDE.md` uses markers to separate Evergreen framework content from your project instructions:

```markdown
<!-- EVERGREEN:START — managed by /ev-update, do not edit below this line -->
... framework conventions (stack, coding standards, skills, workflow) ...
<!-- EVERGREEN:END — add your project instructions below -->

# Project Instructions
... your design system choices, project-specific rules, etc. ...
```

- **Between markers**: Evergreen-managed. Overwritten when you run `/ev-update`. Contains coding conventions, skill documentation, and workflow guidance.
- **Below markers**: Yours. Never touched by updates. This is where `/ev-designsystem` writes your color, typography, and spacing choices.

This means your project instructions always take priority (last instruction wins in Claude's context).

### Settings separation

- `.claude/settings.json` — Evergreen-managed permissions and hooks. Overwritten on update.
- `.claude/settings.local.json` — Your customizations. Never touched by updates. Claude Code merges both automatically.

### Updating

Run `/ev-update` inside Claude Code. It updates only the Evergreen section of `CLAUDE.md`, skills, hooks, and settings — your project instructions and source code are never modified.

## Troubleshooting

### Skills not showing up

If `/ev-` skills don't appear in Claude Code, your `.claude/skills/` directory is likely missing. This can happen when dotfiles don't get copied during setup — for example, when moving cloned files into an existing folder.

Evergreen checks for this automatically: you'll see a warning during `npm install` or when starting a Claude Code session if skills are missing.

**Fix it:**

```bash
git checkout -- .claude/
```

This restores all Evergreen framework files (skills, hooks, settings) from git. Then restart Claude Code.

### Skills still missing after fix

If `git checkout` doesn't work (e.g., `.claude/` was never committed), re-copy from the source:

```bash
git clone https://github.com/bobbydotdesign/evergreen.git /tmp/evergreen
cp -r /tmp/evergreen/.claude/skills .claude/skills
cp -r /tmp/evergreen/.claude/hooks .claude/hooks
cp /tmp/evergreen/.claude/settings.json .claude/settings.json
cp /tmp/evergreen/.claude/VERSION .claude/VERSION
rm -rf /tmp/evergreen
```

## Contributing

This is an open-source tool for the design community. If you have ideas, improvements, or want to share how you're using it — I'd love to hear from you. Feel free to open an issue or PR.

## License

MIT
