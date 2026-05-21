import { Metadata } from "next";
import { readFileSync } from "fs";
import { join } from "path";
import { BoardWrapper } from "./board-wrapper";

export const metadata: Metadata = {
  title: "Roadmap",
};

export const dynamic = "force-dynamic";

export default function RoadmapPage() {
  const filePath = join(process.cwd(), "docs/roadmap.json");
  const data = JSON.parse(readFileSync(filePath, "utf-8"));
  const items = data.items;

  if (items.length === 0) {
    return (
      <main className="mx-auto max-w-2xl px-6 py-16 sm:py-24">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-2xl font-bold tracking-tight">Roadmap</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            No items yet. Add one below, or run{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
              /ev-roadmap
            </code>{" "}
            to generate from your PRD.
          </p>
        </div>
        <div className="mt-8">
          <BoardWrapper initialItems={[]} />
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
      <BoardWrapper initialItems={items} />
    </main>
  );
}
