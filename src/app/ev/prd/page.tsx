import { Metadata } from "next";
import { existsSync } from "fs";
import { join } from "path";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "PRD",
};

type PrdData = {
  title: string;
  subtitle: string;
  overview: string;
  target_user: string;
  features: { title: string; description: string; priority: string }[];
  future_features: string[];
};

export default function PrdPage() {
  const filePath = join(process.cwd(), "docs/prd.json");
  if (!existsSync(filePath)) {
    return (
      <main className="mx-auto max-w-2xl px-6 py-16 sm:py-24">
        <div className="text-center">
          <h1 className="text-2xl font-bold tracking-tight">
            Product Requirements
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            No PRD yet. Run{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
              /ev-prd
            </code>{" "}
            to define what you're building.
          </p>
        </div>
      </main>
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const prd: PrdData = require("@/../docs/prd.json");

  return (
    <main className="mx-auto max-w-2xl px-6 py-16 sm:py-24">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            {prd.title}
            {prd.subtitle && (
              <span className="ml-2 text-lg font-normal text-muted-foreground">
                {prd.subtitle}
              </span>
            )}
          </h1>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            {prd.overview}
          </p>
        </div>

        {/* Target User */}
        <section className="mt-10">
          <h2 className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
            Target User
          </h2>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            {prd.target_user}
          </p>
        </section>

        {/* Core Features */}
        <section className="mt-10">
          <h2 className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
            Core Features
          </h2>
          <div className="mt-4 grid gap-3">
            {prd.features.map((feature, i) => (
              <Card key={i} size="sm">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{feature.title}</span>
                    <Badge
                      variant={
                        feature.priority === "mvp" ? "default" : "secondary"
                      }
                    >
                      {feature.priority.toUpperCase()}
                    </Badge>
                  </CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Future Features */}
        {prd.future_features.length > 0 && (
          <section className="mt-10">
            <h2 className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
              Future Features
            </h2>
            <ul className="mt-4 space-y-2">
              {prd.future_features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-baseline gap-3 text-sm text-muted-foreground"
                >
                  <span className="h-1 w-1 shrink-0 rounded-full bg-muted-foreground/40" />
                  {feature}
                </li>
              ))}
            </ul>
          </section>
        )}
    </main>
  );
}
