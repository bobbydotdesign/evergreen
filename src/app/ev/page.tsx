import { Metadata } from "next";
import { existsSync, readFileSync } from "fs";
import { join } from "path";
import manifest from "@/../docs/evergreen.json";
import roadmapData from "@/../docs/roadmap.json";
import projectData from "@/../docs/project.json";
import { cn } from "@/lib/utils";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Evergreen",
};

type RoadmapItem = {
  id: string;
  title: string;
  status: "backlog" | "in-progress" | "done";
  priority: "P1" | "P2" | "P3" | "P4";
  type: string;
};

function getFileStatus(relativePath: string) {
  const fullPath = join(process.cwd(), relativePath);
  return existsSync(fullPath);
}

function getJson<T>(relativePath: string): T | null {
  const fullPath = join(process.cwd(), relativePath);
  if (!existsSync(fullPath)) return null;
  return JSON.parse(readFileSync(fullPath, "utf-8")) as T;
}

type PrdJson = { title: string; subtitle: string; overview: string };
type ResearchJson = { title: string };

export default function EvergreenPage() {
  const prd = getJson<PrdJson>("docs/prd.json");
  const research = getJson<ResearchJson>("docs/research.json");
  const hasDesignSystem = getFileStatus("docs/design-system.md");

  const hasPrd = !!prd;
  const hasResearch = !!research;
  const prdTitle = prd ? `${prd.title} — ${prd.subtitle}` : null;
  const prdOverview = prd?.overview ?? null;
  const researchTitle = research?.title ?? null;

  const items = roadmapData.items as RoadmapItem[];
  const backlog = items.filter((i) => i.status === "backlog").length;
  const inProgress = items.filter((i) => i.status === "in-progress").length;
  const done = items.filter((i) => i.status === "done").length;
  const upNext = items.filter((i) => i.status === "in-progress" || i.status === "backlog")
    .sort((a, b) => {
      const statusOrder = { "in-progress": 0, backlog: 1, done: 2 };
      if (statusOrder[a.status] !== statusOrder[b.status]) return statusOrder[a.status] - statusOrder[b.status];
      const prioOrder = { P1: 0, P2: 1, P3: 2, P4: 3 };
      return prioOrder[a.priority] - prioOrder[b.priority];
    })
    .slice(0, 4);

  return (
    <main className="mx-auto max-w-2xl px-6 py-16 sm:py-24">
      {/* Header */}
      <div>
        {prdTitle ? (
          <>
            <h1 className="text-2xl font-bold tracking-tight">{prdTitle}</h1>
            {prdOverview && (
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {prdOverview}
              </p>
            )}
            <a
              href="/ev/prd"
              className="mt-3 inline-block text-xs text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
            >
              View full PRD
            </a>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-bold tracking-tight">Project Dashboard</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Your project at a glance. Powered by Evergreen.
            </p>
          </>
        )}
      </div>

      {/* Project Links */}
      {(projectData.repo || projectData.staging || projectData.production || projectData.figma) && (
        <div className="mt-6 flex flex-wrap gap-x-4 gap-y-1">
          {projectData.repo && (
            <a
              href={projectData.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
            >
              GitHub
            </a>
          )}
          {projectData.staging && (
            <a
              href={projectData.staging}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
            >
              Staging
            </a>
          )}
          {projectData.production && (
            <a
              href={projectData.production}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
            >
              Production
            </a>
          )}
          {projectData.figma && (
            <a
              href={projectData.figma}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
            >
              Figma
            </a>
          )}
        </div>
      )}

      {/* What's Next */}
      {upNext.length > 0 && (
        <section className="mt-8">
          <h2 className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
            What's next
          </h2>
          <div className="mt-3 divide-y divide-border">
            {upNext.map((item) => (
              <div key={item.id} className="flex items-center gap-3 py-2.5">
                <span
                  className={cn(
                    "h-1.5 w-1.5 shrink-0 rounded-full",
                    item.status === "in-progress"
                      ? "bg-foreground"
                      : "bg-muted-foreground/40"
                  )}
                />
                <span className="text-sm">{item.title}</span>
                <Badge
                  variant={
                    item.priority === "P1"
                      ? "destructive"
                      : item.priority === "P2"
                        ? "default"
                        : "secondary"
                  }
                  className="ml-auto"
                >
                  {item.priority}
                </Badge>
              </div>
            ))}
          </div>
          {items.length > upNext.length && (
            <a
              href="/ev/roadmap"
              className="mt-3 inline-block text-xs text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
            >
              View full roadmap
            </a>
          )}
        </section>
      )}

      {/* Dashboard Cards */}
      <div className="mt-8 grid gap-3">
        {/* Roadmap */}
        {items.length > 0 ? (
          <a href="/ev/roadmap" className="group block">
            <Card size="sm">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Roadmap</span>
                  <span className="text-xs font-normal text-muted-foreground">
                    {backlog} backlog · {inProgress} in progress · {done} done
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-1.5">
                  {done > 0 && (
                    <div
                      className="h-1.5 rounded-full bg-foreground"
                      style={{
                        width: `${(done / items.length) * 100}%`,
                      }}
                    />
                  )}
                  {inProgress > 0 && (
                    <div
                      className="h-1.5 rounded-full bg-muted-foreground"
                      style={{
                        width: `${(inProgress / items.length) * 100}%`,
                      }}
                    />
                  )}
                  {backlog > 0 && (
                    <div
                      className="h-1.5 rounded-full bg-muted"
                      style={{
                        width: `${(backlog / items.length) * 100}%`,
                      }}
                    />
                  )}
                </div>
              </CardContent>
            </Card>
          </a>
        ) : (
          <Card size="sm">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Roadmap</span>
                <Badge variant="outline">Not started</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">
                Run <code className="rounded bg-muted px-1 py-0.5 font-mono">/ev-roadmap</code> to
                plan what to build first.
              </p>
            </CardContent>
          </Card>
        )}

        {/* PRD */}
        <a href="/ev/prd" className="block">
          <Card size="sm">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Product Requirements</span>
                {hasPrd ? (
                  <Badge variant="secondary">Ready</Badge>
                ) : (
                  <Badge variant="outline">Not started</Badge>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {hasPrd ? (
                <p className="text-xs text-muted-foreground">{prdTitle}</p>
              ) : (
                <p className="text-xs text-muted-foreground">
                  Run <code className="rounded bg-muted px-1 py-0.5 font-mono">/ev-prd</code> to
                  define what you're building.
                </p>
              )}
            </CardContent>
          </Card>
        </a>

        {/* Research */}
        <a href="/ev/research" className="block">
          <Card size="sm">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Research</span>
                {hasResearch ? (
                  <Badge variant="secondary">Ready</Badge>
                ) : (
                  <Badge variant="outline">Not started</Badge>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {hasResearch ? (
                <p className="text-xs text-muted-foreground">{researchTitle}</p>
              ) : (
                <p className="text-xs text-muted-foreground">
                  Run <code className="rounded bg-muted px-1 py-0.5 font-mono">/ev-research</code> to
                  validate assumptions.
                </p>
              )}
            </CardContent>
          </Card>
        </a>

        {/* Design System */}
        <a href="/ev/design-system" className="block">
          <Card size="sm">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Design System</span>
                {hasDesignSystem ? (
                  <Badge variant="secondary">Configured</Badge>
                ) : (
                  <Badge variant="outline">Default</Badge>
                )}
              </CardTitle>
            </CardHeader>
          <CardContent>
            {hasDesignSystem ? (
              <p className="text-xs text-muted-foreground">
                Custom tokens configured. See docs/design-system.md.
              </p>
            ) : (
              <p className="text-xs text-muted-foreground">
                Using shadcn defaults. Run{" "}
                <code className="rounded bg-muted px-1 py-0.5 font-mono">/ev-designsystem</code> to
                customize.
              </p>
            )}
          </CardContent>
        </Card>
        </a>
      </div>

      {/* Divider */}
      <Separator className="my-12" />

      {/* Reference — existing content */}
      <div>
        <h2 className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
          Evergreen Reference
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          {manifest.tagline}
        </p>
        <a
          href={manifest.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block text-sm text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
        >
          Full docs
        </a>
      </div>

      {/* Workflow */}
      <section className="mt-12">
        <h2 className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
          Workflow
        </h2>
        <ol className="mt-4 space-y-3">
          {manifest.workflow.map((step) => (
            <li key={step.step} className="flex items-baseline gap-3">
              <span className="shrink-0 font-mono text-sm text-muted-foreground">
                {step.step}
              </span>
              <div>
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">
                  {step.command}
                </code>
                <span className="ml-2 text-sm text-muted-foreground">
                  {step.label}
                </span>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Skills */}
      <section className="mt-12">
        <h2 className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
          Skills
        </h2>
        <div className="mt-4 divide-y divide-border">
          {manifest.skills.map((skill) => (
            <div key={skill.command} className="flex items-baseline gap-4 py-3">
              <code className="shrink-0 font-mono text-sm">
                {skill.command}
              </code>
              <span className="text-sm text-muted-foreground">
                {skill.description}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Start */}
      <section className="mt-12">
        <h2 className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
          Quick Start
        </h2>
        <div className="mt-4 space-y-2">
          {manifest.quickstart.new.map((step, i) => (
            <div key={i} className="flex gap-3 py-1">
              <span className="shrink-0 font-mono text-sm text-muted-foreground">
                {i + 1}
              </span>
              <div className="min-w-0">
                <p className="text-sm">{step.title}</p>
                <code className="mt-1 block overflow-x-auto whitespace-pre rounded bg-muted px-2 py-1 font-mono text-xs text-muted-foreground">
                  {step.code}
                </code>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stack */}
      <section className="mt-12">
        <h2 className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
          Stack
        </h2>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {manifest.stack.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border p-3 text-sm transition-colors hover:border-foreground/20"
            >
              <p className="font-medium">{item.name}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                {item.detail}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 border-t border-border pt-6">
        <div className="flex gap-4 text-xs text-muted-foreground">
          <a
            href={manifest.url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 transition-colors hover:text-foreground"
          >
            Docs
          </a>
          <a
            href={manifest.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 transition-colors hover:text-foreground"
          >
            GitHub
          </a>
        </div>
      </footer>
    </main>
  );
}
