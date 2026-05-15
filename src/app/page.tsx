import Link from "next/link";
import { CodeBlock } from "@/components/docs/code-block";

const skills = [
  {
    command: "/prd",
    title: "Product Requirements",
    description: "Generate a structured PRD from a product idea or brief.",
    href: "/docs/skills/prd",
  },
  {
    command: "/research",
    title: "Market Research",
    description: "Competitive analysis, user insights, and market validation.",
    href: "/docs/skills/research",
  },
  {
    command: "/design",
    title: "Frontend Design",
    description: "Create and refine UI components and full page layouts.",
    href: "/docs/skills/design",
  },
  {
    command: "/wireframe",
    title: "Rapid Prototype",
    description: "Quick interactive wireframes from a simple description.",
    href: "/docs/skills/wireframe",
  },
  {
    command: "/design-system",
    title: "Design System",
    description: "Configure colors, typography, spacing, and audit consistency.",
    href: "/docs/skills/design-system",
  },
  {
    command: "/figma",
    title: "Figma Integration",
    description: "Pull designs, extract tokens, and sync components with Figma.",
    href: "/docs/skills/figma",
  },
  {
    command: "/ship",
    title: "Deploy & Feedback",
    description: "Ship to Vercel and set up user feedback collection.",
    href: "/docs/skills/ship",
  },
];

const steps = [
  {
    title: "Clone and install",
    description: "Clone the repo and install dependencies.",
    code: "git clone https://github.com/bobbydotdesign/evergreen.git my-project\ncd my-project\nnpm install",
  },
  {
    title: "Start the dev server",
    description: "Launch a local preview of your project.",
    code: "npm run dev",
  },
  {
    title: "Open Claude Code",
    description: "In a new terminal tab, start Claude Code in your project.",
    code: "cd my-project\nclaude",
  },
  {
    title: "Define your product",
    description: "Describe your idea and Claude generates a full PRD.",
    code: "/prd",
  },
  {
    title: "Start prototyping",
    description:
      "Claude reads your PRD and builds interactive wireframes you can preview in the browser.",
    code: "/wireframe",
  },
];

export default function Home() {
  return (
    <main className="flex flex-1 flex-col overflow-x-hidden">
      {/* Hero */}
      <section className="px-6 pt-40 pb-32 sm:px-10 lg:px-20">
        <div>
          <p className="animate-in mb-8 text-xs font-medium tracking-widest text-muted-foreground uppercase">
            Agentic Design Framework
          </p>
          <h1 className="animate-in-up w-full font-black tracking-tighter text-[var(--color-evergreen)] uppercase leading-[0.85] text-[clamp(3rem,12cqw,16rem)]">
            Evergreen
          </h1>
          <p className="animate-in delay-200 mt-8 max-w-lg text-lg font-extralight leading-relaxed text-muted-foreground">
            An agentic design framework. Go from idea to deployed
            prototype using Claude Code, shadcn/ui, and Vercel.
          </p>

        </div>
      </section>

      {/* Get Started */}
      <section
        id="get-started"
        className="border-t border-border bg-muted/30 px-6 py-32 sm:px-10 lg:px-20"
      >
        <div>
          <div>
            <p className="mb-3 text-xs font-medium tracking-widest text-muted-foreground uppercase">
              Quick Start
            </p>
            <h2 className="text-5xl font-black tracking-tighter uppercase sm:text-7xl lg:text-8xl">
              Up and running in minutes
            </h2>
            <p className="mt-4 text-sm text-muted-foreground">
              You&apos;ll need{" "}
              <a
                href="https://nodejs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 transition-colors duration-300 hover:text-foreground"
              >
                Node.js 18+
              </a>
              {" "}and{" "}
              <a
                href="https://docs.anthropic.com/en/docs/claude-code"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 transition-colors duration-300 hover:text-foreground"
              >
                Claude Code
              </a>
              {" "}installed.{" "}
              <Link
                href="/docs/getting-started"
                className="underline underline-offset-4 transition-colors duration-300 hover:text-foreground"
              >
                Full setup guide
              </Link>
            </p>
          </div>
          <div className="mt-12 max-w-xl space-y-0">
            {steps.map((step, i) => (
              <div
                key={i}
                className="flex gap-5 py-5"
              >
                <span className="shrink-0 pt-1 font-mono text-sm text-muted-foreground">
                  {i + 1}
                </span>
                <div className="min-w-0 flex-1 space-y-2">
                  <p className="font-medium leading-8">{step.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                  <CodeBlock>{step.code}</CodeBlock>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="border-t border-border py-32 overflow-hidden px-6 sm:px-10 lg:px-20">
        <div>
          <p className="mb-3 text-xs font-medium tracking-widest text-muted-foreground uppercase">
            Built-in Skills
          </p>
          <h2 className="text-5xl font-black tracking-tighter uppercase sm:text-7xl lg:text-8xl">
            Your CLI Design Workflow
          </h2>
        </div>
        <div className="mt-12 -mr-6 flex gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory pt-2 -mt-2 pr-6 sm:-mr-10 sm:pr-10 lg:-mr-20 lg:pr-20">
          {skills.map((skill) => (
            <Link
              key={skill.command}
              href={skill.href}
              className="group flex min-h-[420px] w-[480px] shrink-0 snap-start flex-col justify-between border border-border p-12 transition-all duration-300 ease-out hover:border-foreground/20 hover:-translate-y-1"
            >
              <div>
                <p className="font-mono text-6xl font-extralight tracking-tight sm:text-7xl">
                  {skill.command}
                </p>
                <p className="mt-10 text-base font-medium">{skill.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {skill.description}
                </p>
              </div>
              <p className="mt-12 text-xs text-muted-foreground transition-colors group-hover:text-foreground">
                View docs &rarr;
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Stack */}
      <section className="border-t border-border bg-muted/30 px-6 py-32 sm:px-10 lg:px-20">
        <div>
          <p className="mb-3 text-xs font-medium tracking-widest text-muted-foreground uppercase">
            What&apos;s Inside
          </p>
          <h2 className="mb-12 text-5xl font-black tracking-tighter uppercase sm:text-7xl lg:text-8xl">
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
                className="group flex min-h-[280px] flex-col justify-end border border-border bg-background p-8 transition-all duration-300 ease-out hover:border-foreground/20 hover:-translate-y-1"
              >
                <p className="text-3xl font-black tracking-tight uppercase sm:text-4xl">
                  {item.label}
                </p>
                <p className="mt-3 flex items-center gap-1.5 text-sm text-muted-foreground transition-colors group-hover:text-foreground">
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
