import Link from "next/link";
import { cn } from "@/lib/utils";

const links = [
  { href: "/evergreen", label: "Dashboard" },
  { href: "/roadmap", label: "Roadmap" },
  { href: "/prd", label: "PRD" },
  { href: "/research", label: "Research" },
  { href: "/design-system", label: "Design System" },
];

export function ProjectNav({ active }: { active: string }) {
  return (
    <nav className="border-b border-border">
      <div className="mx-auto flex max-w-6xl items-center gap-1 overflow-x-auto px-6 py-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "shrink-0 rounded-sm px-3 py-1.5 text-xs font-medium transition-colors",
              active === link.href
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
