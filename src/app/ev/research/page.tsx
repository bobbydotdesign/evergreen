import { Metadata } from "next";
import { existsSync } from "fs";
import { join } from "path";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Research",
};

type ResearchData = {
  title: string;
  competitors: {
    name: string;
    url?: string;
    strength: string;
    weakness: string;
  }[];
  insights: { text: string; type: "insight" | "warning" | "opportunity" }[];
  opportunities: string[];
};

const insightStyle: Record<string, { badge: "default" | "destructive" | "secondary"; dot: string }> = {
  insight: { badge: "default", dot: "bg-foreground" },
  warning: { badge: "destructive", dot: "bg-destructive" },
  opportunity: { badge: "secondary", dot: "bg-muted-foreground" },
};

export default function ResearchPage() {
  const filePath = join(process.cwd(), "docs/research.json");
  if (!existsSync(filePath)) {
    return (
      <main className="mx-auto max-w-2xl px-6 py-16 sm:py-24">
        <div className="text-center">
          <h1 className="text-2xl font-bold tracking-tight">Research</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            No research yet. Run{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
              /ev-research
            </code>{" "}
            to validate assumptions.
          </p>
        </div>
      </main>
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const research: ResearchData = require("@/../docs/research.json");

  return (
    <main className="mx-auto max-w-2xl px-6 py-16 sm:py-24">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            {research.title}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Market research and competitive analysis
          </p>
        </div>

        {/* Competitors */}
        <section className="mt-10">
          <h2 className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
            Competitive Landscape
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {research.competitors.map((comp) => (
              <Card key={comp.name} size="sm">
                <CardHeader>
                  <CardTitle>
                    {comp.url ? (
                      <a
                        href={comp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-4 transition-colors hover:text-muted-foreground"
                      >
                        {comp.name}
                      </a>
                    ) : (
                      comp.name
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1.5 text-xs">
                    <div className="flex gap-2">
                      <span className="shrink-0 font-medium text-foreground">
                        +
                      </span>
                      <span className="text-muted-foreground">
                        {comp.strength}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <span className="shrink-0 font-medium text-destructive">
                        -
                      </span>
                      <span className="text-muted-foreground">
                        {comp.weakness}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Key Insights */}
        <section className="mt-10">
          <h2 className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
            Key Insights
          </h2>
          <div className="mt-4 space-y-3">
            {research.insights.map((insight, i) => {
              const style = insightStyle[insight.type] || insightStyle.insight;
              return (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-sm border border-border p-3"
                >
                  <span
                    className={cn(
                      "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full",
                      style.dot
                    )}
                  />
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {insight.text}
                    </p>
                  </div>
                  <Badge variant={style.badge} className="shrink-0">
                    {insight.type}
                  </Badge>
                </div>
              );
            })}
          </div>
        </section>

        {/* Opportunities */}
        {research.opportunities.length > 0 && (
          <section className="mt-10">
            <h2 className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
              Design Opportunities
            </h2>
            <div className="mt-4 space-y-3">
              {research.opportunities.map((opp, i) => (
                <div key={i} className="flex items-baseline gap-3">
                  <span className="shrink-0 font-mono text-sm text-muted-foreground">
                    {i + 1}
                  </span>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {opp}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}
    </main>
  );
}
