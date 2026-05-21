"use client";

import { useState, useTransition, useCallback } from "react";
import {
  DndContext,
  DragOverlay,
  closestCorners,
  useSensor,
  useSensors,
  PointerSensor,
  type DragStartEvent,
  type DragOverEvent,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import {
  moveItem,
  updateItem,
  addItem,
  removeItem,
  reorderItems,
} from "./actions";

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

type Status = Item["status"];

const columns: { key: Status; label: string }[] = [
  { key: "backlog", label: "Backlog" },
  { key: "in-progress", label: "In Progress" },
  { key: "done", label: "Done" },
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

// --- Add Item Form ---

function AddItemForm({
  status,
  onAdd,
  defaultOpen = false,
  onCancel,
}: {
  status: Status;
  onAdd: (item: Item) => void;
  defaultOpen?: boolean;
  onCancel?: () => void;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState<Item["priority"]>("P2");
  const [type, setType] = useState<Item["type"]>("feature");
  const [pending, startTransition] = useTransition();

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="w-full rounded-sm border border-dashed border-border py-2 text-xs text-muted-foreground transition-colors hover:border-foreground/20 hover:text-foreground"
      >
        + Add item
      </button>
    );
  }

  function handleSubmit() {
    if (!title.trim()) return;
    startTransition(async () => {
      const newItem = await addItem({
        title: title.trim(),
        description: description.trim(),
        priority,
        type,
        status,
      });
      if (newItem) onAdd(newItem);
      setTitle("");
      setDescription("");
      setPriority("P2");
      setType("feature");
      setOpen(false);
    });
  }

  return (
    <Card size="sm">
      <CardContent className="space-y-2 pt-4">
        <Input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        />
        <Textarea
          placeholder="Description (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={2}
        />
        <div className="flex gap-2">
          <Select
            value={priority}
            onValueChange={(v) => setPriority(v as Item["priority"])}
          >
            <SelectTrigger className="h-8 flex-1 text-xs">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="P1">P1</SelectItem>
              <SelectItem value="P2">P2</SelectItem>
              <SelectItem value="P3">P3</SelectItem>
              <SelectItem value="P4">P4</SelectItem>
            </SelectContent>
          </Select>
          <Select
            value={type}
            onValueChange={(v) => setType(v as Item["type"])}
          >
            <SelectTrigger className="h-8 flex-1 text-xs">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="feature">feature</SelectItem>
              <SelectItem value="bug">bug</SelectItem>
              <SelectItem value="improvement">improvement</SelectItem>
              <SelectItem value="research">research</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex gap-2">
          <Button
            size="sm"
            onClick={handleSubmit}
            disabled={pending || !title.trim()}
          >
            Add
          </Button>
          <Button size="sm" variant="ghost" onClick={() => { setOpen(false); onCancel?.(); }}>
            Cancel
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

// --- Item Card (static, used for overlay) ---

function ItemCardContent({
  item,
  isDragging,
}: {
  item: Item;
  isDragging?: boolean;
}) {
  return (
    <Card
      size="sm"
      className={cn(isDragging && "opacity-80 shadow-lg ring-1 ring-foreground/20")}
    >
      <CardHeader>
        <CardTitle className="text-sm">{item.title}</CardTitle>
      </CardHeader>
      <CardContent>
        {item.description && (
          <p className="mb-3 text-sm text-muted-foreground">
            {item.description}
          </p>
        )}
        <div className="flex flex-wrap items-center gap-1.5">
          <Badge variant={priorityVariant[item.priority]}>
            {item.priority}
          </Badge>
          <Badge variant="outline">{item.type}</Badge>
        </div>
      </CardContent>
    </Card>
  );
}

// --- Sortable Item Card ---

function SortableItemCard({
  item,
  onUpdate,
  onRemove,
}: {
  item: Item;
  onUpdate: (updated: Item) => void;
  onRemove: (id: string) => void;
}) {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(item.title);
  const [description, setDescription] = useState(item.description);
  const [pending, startTransition] = useTransition();

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: item.id, disabled: editing });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  function handleSave() {
    startTransition(async () => {
      await updateItem(item.id, {
        title: title.trim(),
        description: description.trim(),
      });
      onUpdate({
        ...item,
        title: title.trim(),
        description: description.trim(),
      });
      setEditing(false);
    });
  }

  function handlePriority(p: Item["priority"]) {
    startTransition(async () => {
      await updateItem(item.id, { priority: p });
      onUpdate({ ...item, priority: p });
    });
  }

  function handleDelete() {
    startTransition(async () => {
      await removeItem(item.id);
      onRemove(item.id);
    });
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...(editing ? {} : { ...attributes, ...listeners })}
      className={cn(
        "cursor-grab touch-none transition-opacity active:cursor-grabbing",
        isDragging && "opacity-30",
        pending && "opacity-50 pointer-events-none",
        editing && "cursor-auto touch-auto"
      )}
    >
      <Card size="sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {editing ? (
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="h-7 flex-1 text-sm"
                autoFocus
                onKeyDown={(e) => e.key === "Enter" && handleSave()}
              />
            ) : (
              <button
                onClick={() => setEditing(true)}
                className="flex-1 text-left text-sm transition-colors hover:text-muted-foreground"
              >
                {item.title}
              </button>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {editing ? (
            <div className="space-y-2">
              <Textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={2}
                className="text-xs"
              />
              <div className="flex gap-2">
                <Button size="sm" onClick={handleSave}>
                  Save
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => {
                    setTitle(item.title);
                    setDescription(item.description);
                    setEditing(false);
                  }}
                >
                  Cancel
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  className="ml-auto text-destructive hover:text-destructive"
                  onClick={handleDelete}
                >
                  Delete
                </Button>
              </div>
            </div>
          ) : (
            <>
              {item.description && (
                <p className="mb-3 text-sm text-muted-foreground">
                  {item.description}
                </p>
              )}
              <div className="flex flex-wrap items-center gap-1.5">
                <Select
                  value={item.priority}
                  onValueChange={(v) =>
                    handlePriority(v as Item["priority"])
                  }
                >
                  <SelectTrigger className="h-5 w-auto gap-1 border-0 bg-transparent p-0 text-xs shadow-none">
                    <Badge variant={priorityVariant[item.priority]}>
                      {item.priority}
                    </Badge>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="P1">P1</SelectItem>
                    <SelectItem value="P2">P2</SelectItem>
                    <SelectItem value="P3">P3</SelectItem>
                    <SelectItem value="P4">P4</SelectItem>
                  </SelectContent>
                </Select>
                <Badge variant="outline">{item.type}</Badge>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

// --- Droppable Column ---

function Column({
  status,
  label,
  items,
  onUpdate,
  onRemove,
  onAdd,
}: {
  status: Status;
  label: string;
  items: Item[];
  onUpdate: (updated: Item) => void;
  onRemove: (id: string) => void;
  onAdd: (item: Item) => void;
}) {
  const [showTopForm, setShowTopForm] = useState(false);
  const { setNodeRef } = useSortable({
    id: `column-${status}`,
    data: { type: "column", status },
    disabled: true,
  });

  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
          {label}
          <span className="ml-2 tabular-nums">{items.length}</span>
        </h2>
        <button
          onClick={() => setShowTopForm(true)}
          className="rounded-sm p-1 text-muted-foreground/50 transition-colors hover:bg-muted hover:text-foreground"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </button>
      </div>
      {showTopForm && (
        <div className="mb-3">
          <AddItemForm
            status={status}
            onAdd={(item) => {
              onAdd(item);
              setShowTopForm(false);
            }}
            defaultOpen
            onCancel={() => setShowTopForm(false)}
          />
        </div>
      )}
      <SortableContext
        id={status}
        items={items.map((i) => i.id)}
        strategy={verticalListSortingStrategy}
      >
        <div ref={setNodeRef} className="flex min-h-[60px] flex-col gap-3">
          {items.map((item) => (
            <SortableItemCard
              key={item.id}
              item={item}
              onUpdate={onUpdate}
              onRemove={onRemove}
            />
          ))}
        </div>
      </SortableContext>
      <div className="mt-3">
        <AddItemForm status={status} onAdd={onAdd} />
      </div>
    </section>
  );
}

// --- Board ---

const priorities: Item["priority"][] = ["P1", "P2", "P3", "P4"];
const types: Item["type"][] = ["feature", "bug", "improvement", "research"];

function FilterBar({
  activePriorities,
  activeTypes,
  onTogglePriority,
  onToggleType,
  onClear,
  hasFilters,
}: {
  activePriorities: Set<Item["priority"]>;
  activeTypes: Set<Item["type"]>;
  onTogglePriority: (p: Item["priority"]) => void;
  onToggleType: (t: Item["type"]) => void;
  onClear: () => void;
  hasFilters: boolean;
}) {
  return (
    <div className="mb-6 flex flex-wrap items-center gap-1.5">
      {priorities.map((p) => (
        <button
          key={p}
          onClick={() => onTogglePriority(p)}
          className={cn(
            "rounded-sm px-2 py-1 text-xs font-medium transition-colors",
            activePriorities.has(p)
              ? "bg-foreground text-background"
              : "bg-muted text-muted-foreground hover:text-foreground"
          )}
        >
          {p}
        </button>
      ))}
      <span className="mx-1 h-4 w-px bg-border" />
      {types.map((t) => (
        <button
          key={t}
          onClick={() => onToggleType(t)}
          className={cn(
            "rounded-sm px-2 py-1 text-xs font-medium transition-colors",
            activeTypes.has(t)
              ? "bg-foreground text-background"
              : "bg-muted text-muted-foreground hover:text-foreground"
          )}
        >
          {t}
        </button>
      ))}
      {hasFilters && (
        <>
          <span className="mx-1 h-4 w-px bg-border" />
          <button
            onClick={onClear}
            className="rounded-sm px-2 py-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            Clear
          </button>
        </>
      )}
    </div>
  );
}

export function Board({ initialItems }: { initialItems: Item[] }) {
  const [items, setItems] = useState(initialItems);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [filterPriorities, setFilterPriorities] = useState<Set<Item["priority"]>>(new Set());
  const [filterTypes, setFilterTypes] = useState<Set<Item["type"]>>(new Set());
  const [, startTransition] = useTransition();

  const hasFilters = filterPriorities.size > 0 || filterTypes.size > 0;

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } })
  );

  const activeItem = activeId
    ? items.find((i) => i.id === activeId)
    : null;

  function matchesFilter(item: Item) {
    if (filterPriorities.size > 0 && !filterPriorities.has(item.priority)) return false;
    if (filterTypes.size > 0 && !filterTypes.has(item.type)) return false;
    return true;
  }

  const getColumnItems = useCallback(
    (status: Status) => items.filter((i) => i.status === status && matchesFilter(i)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [items, filterPriorities, filterTypes]
  );

  function findColumnForItem(id: string): Status | null {
    const item = items.find((i) => i.id === id);
    return item?.status ?? null;
  }

  function handleDragStart(event: DragStartEvent) {
    setActiveId(event.active.id as string);
  }

  function handleDragOver(event: DragOverEvent) {
    const { active, over } = event;
    if (!over) return;

    const activeItemId = active.id as string;
    const overId = over.id as string;

    // Determine target column
    let targetStatus: Status | null = null;

    if (overId.startsWith("column-")) {
      targetStatus = overId.replace("column-", "") as Status;
    } else {
      targetStatus = findColumnForItem(overId);
    }

    if (!targetStatus) return;

    const currentStatus = findColumnForItem(activeItemId);
    if (currentStatus === targetStatus) return;

    // Move item to new column
    setItems((prev) =>
      prev.map((i) =>
        i.id === activeItemId
          ? {
              ...i,
              status: targetStatus!,
              completed:
                targetStatus === "done"
                  ? new Date().toISOString().split("T")[0]
                  : null,
            }
          : i
      )
    );
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    setActiveId(null);

    if (!over) return;

    const activeItemId = active.id as string;
    const overId = over.id as string;
    const item = items.find((i) => i.id === activeItemId);
    if (!item) return;

    // Determine target column
    let targetStatus = item.status;
    if (overId.startsWith("column-")) {
      targetStatus = overId.replace("column-", "") as Status;
    } else {
      const overItem = items.find((i) => i.id === overId);
      if (overItem) targetStatus = overItem.status;
    }

    // Build new order: place active item at over item's position
    const columnItems = items
      .filter((i) => i.status === targetStatus)
      .map((i) => i.id);

    if (!overId.startsWith("column-")) {
      const overIndex = columnItems.indexOf(overId);
      const activeIndex = columnItems.indexOf(activeItemId);

      if (overIndex !== -1 && activeIndex !== -1) {
        columnItems.splice(activeIndex, 1);
        columnItems.splice(overIndex, 0, activeItemId);
      } else if (overIndex !== -1 && activeIndex === -1) {
        columnItems.splice(overIndex, 0, activeItemId);
      }
    }

    // Rebuild full item list preserving column order
    const newItems: Item[] = [];
    for (const col of columns) {
      if (col.key === targetStatus) {
        for (const id of columnItems) {
          const i = items.find((x) => x.id === id);
          if (i) {
            newItems.push({
              ...i,
              status: targetStatus,
              completed:
                targetStatus === "done"
                  ? i.completed ?? new Date().toISOString().split("T")[0]
                  : null,
            });
          }
        }
      } else {
        newItems.push(
          ...items
            .filter((i) => i.status === col.key && i.id !== activeItemId)
        );
      }
    }

    setItems(newItems);

    // Persist
    startTransition(async () => {
      await moveItem(activeItemId, targetStatus);
      await reorderItems(newItems.map((i) => i.id));
    });
  }

  function handleUpdate(updated: Item) {
    setItems((prev) =>
      prev.map((i) => (i.id === updated.id ? updated : i))
    );
  }

  function handleRemove(id: string) {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }

  function handleAdd(newItem: Item) {
    setItems((prev) => [...prev, newItem]);
  }

  function togglePriority(p: Item["priority"]) {
    setFilterPriorities((prev) => {
      const next = new Set(prev);
      next.has(p) ? next.delete(p) : next.add(p);
      return next;
    });
  }

  function toggleType(t: Item["type"]) {
    setFilterTypes((prev) => {
      const next = new Set(prev);
      next.has(t) ? next.delete(t) : next.add(t);
      return next;
    });
  }

  return (
    <>
      <FilterBar
        activePriorities={filterPriorities}
        activeTypes={filterTypes}
        onTogglePriority={togglePriority}
        onToggleType={toggleType}
        onClear={() => { setFilterPriorities(new Set()); setFilterTypes(new Set()); }}
        hasFilters={hasFilters}
      />
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {columns.map((col) => (
          <Column
            key={col.key}
            status={col.key}
            label={col.label}
            items={getColumnItems(col.key)}
            onUpdate={handleUpdate}
            onRemove={handleRemove}
            onAdd={handleAdd}
          />
        ))}
      </div>
      <DragOverlay>
        {activeItem ? (
          <div className="w-[300px]">
            <ItemCardContent item={activeItem} isDragging />
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
    </>
  );
}
