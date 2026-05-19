"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links = [
  { href: "/ev", label: "Dashboard" },
  { href: "/ev/roadmap", label: "Roadmap" },
  { href: "/ev/prd", label: "PRD" },
  { href: "/ev/research", label: "Research" },
  { href: "/ev/design-system", label: "Design System" },
];

export function ProjectNav() {
  const pathname = usePathname();

  return (
    <nav className="border-b border-border bg-background">
      <div className="mx-auto flex max-w-6xl items-center gap-1 overflow-x-auto px-6 py-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "shrink-0 rounded-sm px-3 py-1.5 text-xs font-medium transition-colors",
              pathname === link.href
                ? "bg-muted text-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
