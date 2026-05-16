"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const sections = [
  {
    items: [
      { href: "/", label: "Home" },
      { href: "/docs/getting-started", label: "Getting Started" },
      { href: "/docs/workflow", label: "Workflow" },
    ],
  },
  {
    title: "Skills",
    items: [
      { href: "/docs/skills", label: "Overview" },
      { href: "/docs/skills/prd", label: "/prd" },
      { href: "/docs/skills/research", label: "/research" },
      { href: "/docs/skills/design", label: "/design" },
      { href: "/docs/skills/wireframe", label: "/wireframe" },
      { href: "/docs/skills/design-system", label: "/design-system" },
      { href: "/docs/skills/figma", label: "/figma" },
      { href: "/docs/skills/ship", label: "/ship" },
    ],
  },
];

export function DocsSidebar({ className }: { className?: string }) {
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);
  const [indicator, setIndicator] = useState({ top: 0, height: 0 });
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!navRef.current) return;
    const activeLink = navRef.current.querySelector(
      `a[data-active="true"]`
    ) as HTMLElement | null;
    if (activeLink) {
      const navRect = navRef.current.getBoundingClientRect();
      const linkRect = activeLink.getBoundingClientRect();
      setIndicator({
        top: linkRect.top - navRect.top,
        height: linkRect.height,
      });
      setReady(true);
    }
  }, [pathname]);

  return (
    <nav className={cn("flex h-full flex-col", className)}>
      <div ref={navRef} className="relative flex-1 space-y-6">
        {/* Sliding indicator */}
        <div
          className={cn(
            "absolute left-0 w-[2px] bg-foreground",
            ready ? "transition-all duration-300 ease-out" : ""
          )}
          style={{
            top: indicator.top,
            height: indicator.height,
          }}
        />

        {sections.map((section, i) => (
          <div key={i} className="space-y-1">
            {section.title && (
              <p className="mb-2 px-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                {section.title}
              </p>
            )}
            {section.items.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  data-active={isActive}
                  className={cn(
                    "block px-4 py-1.5 text-sm transition-colors",
                    isActive
                      ? "font-medium text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        ))}
      </div>

      <div className="border-t border-border pt-4 space-y-2 text-xs text-muted-foreground">
        <p>
          Built by{" "}
          <a
            href="https://bobby.design"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 transition-colors hover:text-foreground"
          >
            Bobby
          </a>
          {" "}&copy; 2026
        </p>
        <div className="flex items-center gap-3">
          <Link
            href="/brand"
            className="transition-colors hover:text-foreground"
          >
            Brand
          </Link>
          <a
            href="https://github.com/bobbydotdesign/evergreen"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            GitHub
          </a>
          <span>MIT License</span>
        </div>
      </div>
    </nav>
  );
}
