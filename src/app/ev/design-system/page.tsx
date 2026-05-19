import { Metadata } from "next";
import { existsSync } from "fs";
import { join } from "path";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Design System",
};

const colors = [
  { name: "Background", var: "bg-background", fg: "text-foreground" },
  { name: "Foreground", var: "bg-foreground", fg: "text-background" },
  { name: "Card", var: "bg-card", fg: "text-card-foreground" },
  { name: "Primary", var: "bg-primary", fg: "text-primary-foreground" },
  { name: "Secondary", var: "bg-secondary", fg: "text-secondary-foreground" },
  { name: "Muted", var: "bg-muted", fg: "text-muted-foreground" },
  { name: "Accent", var: "bg-accent", fg: "text-accent-foreground" },
  { name: "Destructive", var: "bg-destructive", fg: "text-white" },
];

const typeScale = [
  { name: "Hero", class: "text-4xl font-bold tracking-tight", sample: "Build something great" },
  { name: "Section", class: "text-xs font-medium tracking-widest text-muted-foreground uppercase", sample: "Section heading" },
  { name: "Title", class: "text-2xl font-bold tracking-tight", sample: "Page title" },
  { name: "Subheading", class: "text-base font-medium", sample: "Card or section subheading" },
  { name: "Body", class: "text-sm text-muted-foreground leading-relaxed", sample: "Body text for descriptions, paragraphs, and content that users read at length." },
  { name: "Label", class: "text-sm font-medium", sample: "Form label" },
  { name: "Mono", class: "font-mono text-xs", sample: "/ev-roadmap" },
  { name: "Caption", class: "text-xs text-muted-foreground", sample: "Last updated 2 hours ago" },
];

export default function DesignSystemPage() {
  const hasDoc = existsSync(join(process.cwd(), "docs/design-system.md"));

  return (
    <main className="mx-auto max-w-2xl px-6 py-16 sm:py-24">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Design System</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {hasDoc
              ? "Live reference of your project's visual tokens."
              : "Using shadcn defaults. Run /ev-designsystem to customize."}
          </p>
        </div>

        {/* Colors */}
        <section className="mt-10">
          <h2 className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
            Colors
          </h2>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {colors.map((color) => (
              <div key={color.name}>
                <div
                  className={`${color.var} ${color.fg} flex h-16 items-end rounded-sm border border-border p-2 text-xs font-medium`}
                >
                  {color.name}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Brand */}
        <section className="mt-10">
          <h2 className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
            Brand
          </h2>
          <div className="mt-4 flex gap-3">
            <div className="flex h-16 flex-1 items-end rounded-sm border border-border p-2 text-xs font-medium"
              style={{ backgroundColor: "var(--color-evergreen, #EAFC4E)", color: "#000" }}
            >
              Evergreen
            </div>
            <div className="flex h-16 flex-1 items-end rounded-sm border border-border bg-border p-2 text-xs font-medium text-muted-foreground">
              Border
            </div>
            <div className="flex h-16 flex-1 items-end rounded-sm border border-border bg-input p-2 text-xs font-medium text-muted-foreground">
              Input
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="mt-10">
          <h2 className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
            Typography
          </h2>
          <div className="mt-4 space-y-4">
            {typeScale.map((type) => (
              <div key={type.name} className="flex items-baseline gap-4">
                <span className="w-20 shrink-0 text-xs text-muted-foreground">
                  {type.name}
                </span>
                <span className={type.class}>{type.sample}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Spacing */}
        <section className="mt-10">
          <h2 className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
            Spacing
          </h2>
          <div className="mt-4 flex items-end gap-2">
            {[1, 2, 3, 4, 6, 8, 12, 16].map((n) => (
              <div key={n} className="flex flex-col items-center gap-1.5">
                <div
                  className="bg-foreground/20 rounded-sm"
                  style={{ width: `${n * 4}px`, height: `${n * 4}px` }}
                />
                <span className="text-[10px] tabular-nums text-muted-foreground">
                  {n * 4}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Radius */}
        <section className="mt-10">
          <h2 className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
            Radius
          </h2>
          <div className="mt-4 flex items-center gap-3">
            {[
              { name: "none", class: "rounded-none" },
              { name: "sm", class: "rounded-sm" },
              { name: "md", class: "rounded-md" },
              { name: "lg", class: "rounded-lg" },
              { name: "full", class: "rounded-full" },
            ].map((r) => (
              <div key={r.name} className="flex flex-col items-center gap-1.5">
                <div
                  className={`h-10 w-10 border border-border bg-muted ${r.class}`}
                />
                <span className="text-[10px] text-muted-foreground">
                  {r.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        {/* Components */}
        <section>
          <h2 className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
            Components
          </h2>

          {/* Buttons */}
          <div className="mt-6">
            <h3 className="text-sm font-medium">Buttons</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
          </div>

          {/* Badges */}
          <div className="mt-8">
            <h3 className="text-sm font-medium">Badges</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
            </div>
          </div>

          {/* Card */}
          <div className="mt-8">
            <h3 className="text-sm font-medium">Card</h3>
            <div className="mt-3">
              <Card size="sm">
                <CardHeader>
                  <CardTitle>Card title</CardTitle>
                  <CardDescription>
                    A brief description of the card content.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Card body content goes here.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Input */}
          <div className="mt-8">
            <h3 className="text-sm font-medium">Input</h3>
            <div className="mt-3 max-w-sm">
              <Input placeholder="Type something..." />
            </div>
          </div>
        </section>
    </main>
  );
}
