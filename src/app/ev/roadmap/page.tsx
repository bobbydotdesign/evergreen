import { Metadata } from "next";
import roadmap from "@/../docs/roadmap.json";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Roadmap",
};

type Item = {
  id: string;
  title: string;
  description: string;
  status: "backlog" | "in-progress" | "done";
  priority: "P1" | "P2" | "P3" | "P4";
  type: "feature" | "bug" | "improvement" | "research";
  linked_prd: string | null;
  created: string;
  completed: string | null;
};

const columns = [
  { key: "backlog" as const, label: "Backlog" },
  { key: "in-progress" as const, label: "In Progress" },
  { key: "done" as const, label: "Done" },
];

const priorityVariant: Record<
  Item["priority"],
  "destructive" | "default" | "secondary" | "outline"
> = {
  P1: "destructive",
  P2: "default",
  P3: "secondary",
  P4: "outline",
};

export default function RoadmapPage() {
  const items = roadmap.items as Item[];

  if (items.length === 0) {
    return (
      <main className="mx-auto max-w-2xl px-6 py-16 sm:py-24">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-2xl font-bold tracking-tight">Roadmap</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            No items yet. Run{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
              /ev-roadmap
            </code>{" "}
            to add your first items or generate them from your PRD.
          </p>
          <div className="mt-8 grid w-full max-w-md gap-3 text-left">
            <div className="rounded-lg border border-dashed border-border p-4">
              <p className="text-sm font-medium">From your PRD</p>
              <p className="mt-1 text-xs text-muted-foreground">
                /ev-roadmap will extract features from docs/prd.md and create
                prioritized items automatically.
              </p>
            </div>
            <div className="rounded-lg border border-dashed border-border p-4">
              <p className="text-sm font-medium">Manually</p>
              <p className="mt-1 text-xs text-muted-foreground">
                /ev-roadmap add [feature name] to add items one at a time.
              </p>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <div className="mb-12">
        <h1 className="text-2xl font-bold tracking-tight">Roadmap</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {items.length} {items.length === 1 ? "item" : "items"} tracked
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {columns.map((col) => {
          const colItems = items.filter((item) => item.status === col.key);
          return (
            <section key={col.key}>
              <h2 className="mb-4 text-xs font-medium tracking-widest text-muted-foreground uppercase">
                {col.label}
                <span className="ml-2 tabular-nums">{colItems.length}</span>
              </h2>
              <div className="flex flex-col gap-3">
                {colItems.length === 0 ? (
                  <p className="py-8 text-center text-sm text-muted-foreground/50">
                    No items
                  </p>
                ) : (
                  colItems.map((item) => (
                    <Card key={item.id} size="sm">
                      <CardHeader>
                        <CardTitle>
                          {item.linked_prd ? (
                            <a
                              href={item.linked_prd}
                              className="underline underline-offset-4 transition-colors hover:text-muted-foreground"
                            >
                              {item.title}
                            </a>
                          ) : (
                            item.title
                          )}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-3 text-sm text-muted-foreground">
                          {item.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          <Badge variant={priorityVariant[item.priority]}>
                            {item.priority}
                          </Badge>
                          <Badge variant="outline">{item.type}</Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                )}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
