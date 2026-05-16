"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export function CodeBlock({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  function copy() {
    navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className={cn("relative overflow-hidden rounded-lg", className)}>
      <pre className="overflow-x-auto whitespace-pre rounded-lg bg-black px-4 py-3 font-mono text-sm leading-relaxed text-neutral-300">
        <code>{children}</code>
      </pre>
      <button
        onClick={copy}
        className="absolute right-2 top-2 flex size-8 items-center justify-center rounded-md bg-black/80 text-neutral-500 transition-colors hover:bg-white/20 hover:text-neutral-300"
        aria-label={copied ? "Copied" : "Copy to clipboard"}
      >
        {copied ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
        )}
      </button>
    </div>
  );
}
