import Link from "next/link";
import { DocsContent } from "@/components/docs/docs-content";
import { Badge } from "@/components/ui/badge";

const steps = [
  {
    cmd: "/ev-prd",
    title: "Define",
    description:
      "Start by describing what you want to build. Claude generates a structured product requirements document covering goals, features, user flows, and scope.",
    href: "/docs/skills/prd",
  },
  {
    cmd: "/ev-research",
    title: "Research",
    description:
      "Validate your idea against the market. Claude searches for competitors, analyzes their strengths and weaknesses, and identifies design opportunities.",
    href: "/docs/skills/research",
  },
  {
    cmd: "/ev-designsystem",
    title: "Foundation",
    description:
      "Set your visual identity. Configure colors, typography, spacing, and component styles. This becomes the source of truth for everything you build.",
    href: "/docs/skills/design-system",
  },
  {
    cmd: "/ev-wireframe",
    title: "Prototype",
    description:
      "Rapidly generate interactive wireframes. Claude creates pages, navigation, and basic interactions from your PRD. Speed over perfection.",
    href: "/docs/skills/wireframe",
  },
  {
    cmd: "/ev-design",
    title: "Refine",
    description:
      "Polish your wireframes into high-fidelity UI. Create new components, improve layouts, and fine-tune visual hierarchy using the design system.",
    href: "/docs/skills/design",
  },
  {
    cmd: "/ev-figma",
    title: "Sync (optional)",
    description:
      "If you work in Figma, pull designs into code or push component mappings back. This step is optional — you can build entirely in code.",
    href: "/docs/skills/figma",
  },
  {
    cmd: "/ev-ship",
    title: "Deploy",
    description:
      "Ship your prototype to Vercel with one command. Optionally set up a feedback widget or page to collect responses from testers.",
    href: "/docs/skills/ship",
  },
];

export default function Workflow() {
  return (
    <DocsContent>
      <h1>Workflow</h1>
      <p>
        Evergreen skills are designed to chain together. Each one builds on the
        output of the previous, guiding you from idea to deployed prototype.
        You can start anywhere, but this is the recommended path.
      </p>

      <div className="mt-8 space-y-0">
        {steps.map((step, i) => (
          <Link
            key={step.cmd}
            href={step.href}
            className="no-underline group flex gap-5 border-b border-border py-6 transition-colors last:border-0 hover:bg-muted/50 -mx-4 px-4"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="shrink-0 pt-0.5 font-mono text-sm font-bold text-foreground">
                {i + 1}
              </span>
              {i < steps.length - 1 && (
                <div className="w-px flex-1 bg-border" />
              )}
            </div>
            <div className="space-y-1 pb-2">
              <div className="flex items-center gap-2">
                <p className="font-medium">{step.title}</p>
                <Badge variant="secondary">
                  <code className="!bg-transparent !px-0 !py-0">{step.cmd}</code>
                </Badge>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <h2>Tips</h2>
      <ul>
        <li>
          You don&apos;t have to follow this order. Need to jump straight to a
          wireframe? Go for it.
        </li>
        <li>
          Skills are aware of each other. If a PRD exists, <code>/ev-wireframe</code>{" "}
          will use it as context.
        </li>
        <li>
          Run any skill multiple times to iterate. Each run refines the previous
          output.
        </li>
        <li>
          You can always talk to Claude directly without a skill — just describe
          what you need.
        </li>
      </ul>
    </DocsContent>
  );
}
