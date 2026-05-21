"use server";

import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

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

type Roadmap = { items: Item[] };

const filePath = join(process.cwd(), "docs/roadmap.json");

function readRoadmap(): Roadmap {
  return JSON.parse(readFileSync(filePath, "utf-8"));
}

function writeRoadmap(data: Roadmap) {
  writeFileSync(filePath, JSON.stringify(data, null, 2) + "\n");
}

export async function getItems(): Promise<Item[]> {
  return readRoadmap().items;
}

export async function moveItem(id: string, status: Item["status"]) {
  const data = readRoadmap();
  const item = data.items.find((i) => i.id === id);
  if (!item) return;
  item.status = status;
  item.completed =
    status === "done" ? new Date().toISOString().split("T")[0] : null;
  writeRoadmap(data);
}

export async function updateItem(
  id: string,
  updates: Partial<Pick<Item, "title" | "description" | "priority" | "type">>
) {
  const data = readRoadmap();
  const item = data.items.find((i) => i.id === id);
  if (!item) return;
  Object.assign(item, updates);
  writeRoadmap(data);
}

export async function addItem(input: {
  title: string;
  description: string;
  priority: Item["priority"];
  type: Item["type"];
  status: Item["status"];
}) {
  const data = readRoadmap();
  const maxNum = data.items.reduce((max, item) => {
    const n = parseInt(item.id.replace("r", ""), 10);
    return isNaN(n) ? max : Math.max(max, n);
  }, 0);
  const newItem: Item = {
    id: `r${maxNum + 1}`,
    title: input.title,
    description: input.description,
    status: input.status,
    priority: input.priority,
    type: input.type,
    linked_prd: null,
    created: new Date().toISOString().split("T")[0],
    completed: input.status === "done" ? new Date().toISOString().split("T")[0] : null,
  };
  data.items.push(newItem);
  writeRoadmap(data);
  return newItem;
}

export async function removeItem(id: string) {
  const data = readRoadmap();
  data.items = data.items.filter((i) => i.id !== id);
  writeRoadmap(data);
}

export async function reorderItems(orderedIds: string[]) {
  const data = readRoadmap();
  const itemMap = new Map(data.items.map((i) => [i.id, i]));
  data.items = orderedIds
    .map((id) => itemMap.get(id))
    .filter((i): i is Item => !!i);
  // Append any items not in the ordered list (safety net)
  for (const item of itemMap.values()) {
    if (!orderedIds.includes(item.id)) data.items.push(item);
  }
  writeRoadmap(data);
}
