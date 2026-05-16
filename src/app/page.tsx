import Link from "next/link";
import { CodeBlock } from "@/components/docs/code-block";

const skills = [
  {
    command: "/ev-prd",
    title: "Product Requirements",
    description: "Generate a structured PRD from a product idea or brief.",
    href: "/docs/skills/prd",
  },
  {
    command: "/ev-research",
    title: "Market Research",
    description: "Competitive analysis, user insights, and market validation.",
    href: "/docs/skills/research",
  },
  {
    command: "/ev-design",
    title: "Frontend Design",
    description: "Create and refine UI components and full page layouts.",
    href: "/docs/skills/design",
  },
  {
    command: "/ev-wireframe",
    title: "Rapid Prototype",
    description: "Quick interactive wireframes from a simple description.",
    href: "/docs/skills/wireframe",
  },
  {
    command: "/ev-designsystem",
    title: "Design System",
    description: "Configure colors, typography, spacing, and audit consistency.",
    href: "/docs/skills/design-system",
  },
  {
    command: "/ev-figma",
    title: "Figma Integration",
    description: "Pull designs, extract tokens, and sync components with Figma.",
    href: "/docs/skills/figma",
  },
  {
    command: "/ev-ship",
    title: "Deploy & Feedback",
    description: "Ship to Vercel and set up user feedback collection.",
    href: "/docs/skills/ship",
  },
];

const newProjectSteps = [
  {
    title: "Clone the repo",
    description: "This creates a new folder with the project files.",
    code: "git clone https://github.com/bobbydotdesign/evergreen.git my-project",
  },
  {
    title: "Open the project folder",
    description: "Skip this if you're already there.",
    code: "cd my-project",
  },
  {
    title: "Install dependencies",
    description: "This installs everything the project needs to run.",
    code: "npm install",
  },
  {
    title: "Start Claude Code",
    description: "You may be asked to trust the project folder — select \"Yes, I trust this folder\" to continue. Claude Code can start the dev server for you when you're ready to preview.",
    code: "claude",
  },
  {
    title: "Start building",
    description: "Describe your idea and Claude generates a full PRD, then prototype it.",
    code: "/ev-prd",
  },
];

const existingProjectSteps = [
  {
    title: "Clone Evergreen temporarily",
    description: "Pull down the skills and configuration files.",
    code: "git clone https://github.com/bobbydotdesign/evergreen.git /tmp/evergreen",
  },
  {
    title: "Copy the skills into your project",
    description: "Add the Claude Code skills and project instructions to your codebase.",
    code: "cp -r /tmp/evergreen/.claude .claude\ncp /tmp/evergreen/CLAUDE.md CLAUDE.md",
  },
  {
    title: "Clean up",
    description: "Remove the temporary clone.",
    code: "rm -rf /tmp/evergreen",
  },
  {
    title: "Open Claude Code",
    description: "Start Claude Code in your project. The skills are ready to use.",
    code: "claude",
  },
];

export default function Home() {
  return (
    <main className="flex flex-1 flex-col overflow-x-hidden">
      {/* Hero */}
      <section className="px-6 pt-32 pb-24 sm:px-10 sm:pt-40 sm:pb-32 lg:px-20">
        <div>
          <p className="animate-in mb-6 text-xs font-medium tracking-widest text-muted-foreground uppercase">
            Agentic Design Framework
          </p>
          <h1 className="animate-in-up w-full font-black tracking-tighter text-[var(--color-evergreen)] uppercase leading-[0.85] text-[clamp(3rem,12cqw,16rem)]">
            Evergreen
          </h1>
          <p className="animate-in delay-200 mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
            An agentic design framework for product designers who use{" "}
            <a
              href="https://docs.anthropic.com/en/docs/claude-code"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline underline-offset-4"
            >
              Claude Code
            </a>
            . Focus on your work, not the setup.
          </p>
        </div>
      </section>

      {/* Get Started */}
      <section
        id="get-started"
        className="border-t border-border bg-muted/30 px-6 py-20 sm:px-10 sm:py-32 lg:px-20"
      >
        <div>
          <div>
            <p className="mb-3 text-xs font-medium tracking-widest text-muted-foreground uppercase">
              Quick Start
            </p>
            <h2 className="text-2xl font-black tracking-tighter uppercase sm:text-3xl lg:text-4xl">
              Up and running in minutes
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Evergreen requires{" "}
              <a
                href="https://docs.anthropic.com/en/docs/claude-code"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 transition-colors duration-300 hover:text-foreground"
              >
                Claude Code
              </a>
              .{" "}
              <Link
                href="/docs/getting-started"
                className="underline underline-offset-4 transition-colors duration-300 hover:text-foreground"
              >
                Full setup guide
              </Link>
            </p>
          </div>

          <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-20">
            {/* New project */}
            <div className="min-w-0">
              <h3 className="text-sm font-bold tracking-tight uppercase">New project</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Start fresh with Evergreen as your foundation. Run these in your terminal.
              </p>
              <div className="mt-6 space-y-0 overflow-hidden">
                {newProjectSteps.map((step, i) => (
                  <div key={i} className="flex gap-4 py-4">
                    <span className="shrink-0 pt-0.5 font-mono text-sm font-bold text-muted-foreground">
                      {i + 1}
                    </span>
                    <div className="min-w-0 flex-1 space-y-1.5">
                      <p className="text-sm font-medium">{step.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {step.description}
                      </p>
                      <CodeBlock>{step.code}</CodeBlock>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Existing project */}
            <div className="min-w-0">
              <h3 className="text-sm font-bold tracking-tight uppercase">Existing project</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Already have a project? Add the skills to your codebase. Run these in your terminal.
              </p>
              <div className="mt-6 space-y-0 overflow-hidden">
                {existingProjectSteps.map((step, i) => (
                  <div key={i} className="flex gap-4 py-4">
                    <span className="shrink-0 pt-0.5 font-mono text-sm font-bold text-muted-foreground">
                      {i + 1}
                    </span>
                    <div className="min-w-0 flex-1 space-y-1.5">
                      <p className="text-sm font-medium">{step.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {step.description}
                      </p>
                      <CodeBlock>{step.code}</CodeBlock>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="border-t border-border py-20 overflow-hidden px-6 sm:px-10 sm:py-32 lg:px-20">
        <div>
          <p className="mb-3 text-xs font-medium tracking-widest text-muted-foreground uppercase">
            Built-in Skills
          </p>
          <h2 className="text-2xl font-black tracking-tighter uppercase sm:text-3xl lg:text-4xl">
            Your CLI Design Workflow
          </h2>
        </div>
        <div className="mt-10 -mr-6 flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pr-6 sm:-mr-10 sm:gap-5 sm:pr-10 lg:-mr-20 lg:pr-20">
          {skills.map((skill) => (
            <Link
              key={skill.command}
              href={skill.href}
              className="@container group flex min-h-[320px] w-[80vw] shrink-0 snap-start flex-col justify-between border border-border p-8 transition-all duration-300 ease-out hover:border-foreground/20 hover:-translate-y-1 sm:min-h-[400px] sm:w-[400px] sm:p-12 lg:w-[480px]"
            >
              <div>
                <p className="font-mono font-extralight tracking-tight text-[clamp(1.5rem,8cqw,4.5rem)]">
                  {skill.command}
                </p>
                <p className="mt-8 text-sm font-medium">{skill.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {skill.description}
                </p>
              </div>
              <p className="mt-8 text-xs text-muted-foreground transition-colors group-hover:text-foreground">
                View docs &rarr;
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Stack */}
      <section className="border-t border-border bg-muted/30 px-6 py-20 sm:px-10 sm:py-32 lg:px-20">
        <div>
          <p className="mb-3 text-xs font-medium tracking-widest text-muted-foreground uppercase">
            What&apos;s Inside
          </p>
          <h2 className="mb-10 text-2xl font-black tracking-tighter uppercase sm:text-3xl lg:text-4xl">
            A solid foundation, ready to go
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: "Next.js", detail: "App Router + TypeScript", href: "https://nextjs.org" },
              { label: "shadcn/ui", detail: "Accessible components", href: "https://ui.shadcn.com" },
              { label: "Tailwind v4", detail: "Utility-first styling", href: "https://tailwindcss.com" },
              { label: "Geist", detail: "Clean modern typography", href: "https://vercel.com/font" },
              { label: "Vercel", detail: "One-command deploys", href: "https://vercel.com" },
              { label: "Figma MCP", detail: "Design-to-code bridge", href: "https://www.figma.com/community/plugin/1441950583498498539" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="@container group flex min-h-[200px] flex-col justify-end border border-border bg-background p-6 transition-all duration-300 ease-out hover:border-foreground/20 hover:-translate-y-1 sm:min-h-[280px] sm:p-8"
              >
                <p className="font-black tracking-tight uppercase text-[clamp(1.25rem,6cqw,2rem)]">
                  {item.label}
                </p>
                <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                  {item.detail}
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
    </main>
  );
}
