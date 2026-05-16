import Link from "next/link";
import { DocsContent } from "@/components/docs/docs-content";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Skill {
  cmd: string;
  title: string;
  summary: string;
  output: string;
  href: string;
}

function SkillGrid({ skills }: { skills: Skill[] }) {
  return (
    <div className="grid gap-4">
      {skills.map((skill) => (
        <Link key={skill.cmd} href={skill.href} className="no-underline">
          <Card className="transition-colors hover:border-foreground/20">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Badge variant="outline">
                  <code className="!bg-transparent !px-0 !py-0">
                    {skill.cmd}
                  </code>
                </Badge>
                <CardTitle className="text-base font-semibold">
                  {skill.title}
                </CardTitle>
              </div>
              <CardDescription className="mt-2 leading-relaxed">
                {skill.summary}
              </CardDescription>
              <p className="mt-2 font-mono text-xs text-muted-foreground">
                Output: {skill.output}
              </p>
            </CardHeader>
          </Card>
        </Link>
      ))}
    </div>
  );
}

export default function SkillsOverview() {
  return (
    <DocsContent>
      <h1>Skills</h1>
      <p>
        Skills are slash commands you run inside Claude Code. Each one handles a
        specific part of the product design workflow — you describe what you
        want, and Claude does the rest.
      </p>

      <h2>How to use them</h2>
      <p>
        Open Claude Code in your project and type a skill command. You can run
        them bare (e.g. <code>/ev-prd</code>) and Claude will ask for details, or
        provide context directly (e.g.{" "}
        <code>/ev-wireframe a dashboard with analytics</code>).
      </p>
      <p>
        Skills are aware of each other. If you&apos;ve already run{" "}
        <code>/ev-prd</code>, then <code>/ev-wireframe</code> will use your PRD as
        context. They&apos;re designed to chain together — see the{" "}
        <Link href="/docs/workflow">Workflow</Link> page for the recommended
        order.
      </p>

      <h2>Define</h2>
      <p>Clarify what you&apos;re building and why.</p>
      <SkillGrid
        skills={[
          {
            cmd: "/ev-prd",
            title: "Product Requirements",
            summary:
              "Generate a structured PRD from a product idea. Covers goals, features, user flows, scope, and open questions.",
            output: "docs/prd.md",
            href: "/docs/skills/prd",
          },
          {
            cmd: "/ev-research",
            title: "Market Research",
            summary:
              "Competitive analysis, market landscape, and user insights. Searches the web for real data and synthesizes findings.",
            output: "docs/research.md",
            href: "/docs/skills/research",
          },
        ]}
      />

      <h2>Build</h2>
      <p>Set the foundation and create your prototype.</p>
      <SkillGrid
        skills={[
          {
            cmd: "/ev-designsystem",
            title: "Design System",
            summary:
              "Configure colors, typography, spacing, and radius. Audit your codebase for inconsistencies. Export a design system doc.",
            output: "globals.css + docs/design-system.md",
            href: "/docs/skills/design-system",
          },
          {
            cmd: "/ev-wireframe",
            title: "Rapid Prototype",
            summary:
              "Generate interactive wireframes from a description. Creates pages with navigation, forms, and placeholder content. Speed over polish.",
            output: "src/app/ + src/components/wireframe/",
            href: "/docs/skills/wireframe",
          },
          {
            cmd: "/ev-design",
            title: "Frontend Design",
            summary:
              "Create and refine UI components and pages. Three modes: component, page, and refine. Uses shadcn/ui and the design system.",
            output: "src/components/ + src/app/",
            href: "/docs/skills/design",
          },
        ]}
      />

      <h2>Integrate</h2>
      <p>Connect with external design tools.</p>
      <SkillGrid
        skills={[
          {
            cmd: "/ev-figma",
            title: "Figma Integration",
            summary:
              "Pull designs from Figma, extract tokens, build components from frames, and sync code-connect mappings. Requires Figma MCP.",
            output: "Components + globals.css tokens",
            href: "/docs/skills/figma",
          },
        ]}
      />

      <h2>Ship</h2>
      <p>Deploy and collect feedback.</p>
      <SkillGrid
        skills={[
          {
            cmd: "/ev-ship",
            title: "Deploy & Feedback",
            summary:
              "Deploy to Vercel with one command. Optionally add a feedback widget or dedicated feedback page to collect user responses.",
            output: "Live URL + optional feedback route",
            href: "/docs/skills/ship",
          },
        ]}
      />
    </DocsContent>
  );
}
