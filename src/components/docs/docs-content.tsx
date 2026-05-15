import { cn } from "@/lib/utils";

export function DocsContent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        // Headings — light weight, Scandinavian style
        "[&>h1]:mb-2 [&>h1]:text-4xl [&>h1]:font-extralight [&>h1]:tracking-tight",
        "[&>h2]:mb-4 [&>h2]:mt-14 [&>h2]:text-2xl [&>h2]:font-extralight [&>h2]:tracking-tight [&>h2]:first:mt-0",
        "[&>h3]:mb-3 [&>h3]:mt-8 [&>h3]:text-lg [&>h3]:font-light",

        // Lead paragraph (first p after h1)
        "[&>h1+p]:mb-8 [&>h1+p]:text-lg [&>h1+p]:font-light [&>h1+p]:leading-relaxed [&>h1+p]:text-muted-foreground",

        // Body text
        "[&>p]:mb-5 [&>p]:leading-7 [&>p]:text-muted-foreground",
        "[&>p>strong]:text-foreground [&>p>code]:text-foreground",

        // Lists
        "[&>ul]:mb-6 [&>ul]:ml-6 [&>ul]:list-disc [&>ul]:space-y-2 [&>ul]:text-muted-foreground",
        "[&>ul>li]:leading-7 [&>ul>li>strong]:text-foreground",
        "[&>ol]:mb-6 [&>ol]:ml-6 [&>ol]:list-decimal [&>ol]:space-y-2 [&>ol]:text-muted-foreground",
        "[&>ol>li]:leading-7 [&>ol>li>strong]:text-foreground",

        // Inline links (not buttons or cards — those use .no-underline)
        "[&_a:not(.no-underline)]:text-foreground [&_a:not(.no-underline)]:underline [&_a:not(.no-underline)]:underline-offset-4 [&_a:not(.no-underline)]:transition-colors [&_a:not(.no-underline)]:hover:text-muted-foreground",

        // Inline code
        "[&_code]:bg-muted [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-[0.8125rem]",

        // Code blocks (the CodeBlock component wrapper div)
        "[&>.group]:my-5",

        // Dividers
        "[&>hr]:my-12 [&>hr]:border-border",

        // Generic div children (button groups, grids)
        "[&>div]:my-6",

        className
      )}
    >
      {children}
    </div>
  );
}
