"use client";

import dynamic from "next/dynamic";

const Board = dynamic(() => import("./board").then((m) => m.Board), {
  ssr: false,
});

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

export function BoardWrapper({ initialItems }: { initialItems: Item[] }) {
  return <Board initialItems={initialItems} />;
}
