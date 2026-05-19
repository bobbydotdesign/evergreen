import { Metadata } from "next";
import manifest from "@/../docs/evergreen.json";

export const metadata: Metadata = {
  title: "Evergreen",
};

export default function EvergreenPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16 sm:py-24">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Evergreen</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {manifest.tagline}
        </p>
        <a
          href={manifest.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block text-sm text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
        >
          Full docs
        </a>
      </div>

      {/* Workflow */}
      <section className="mt-12">
        <h2 className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
          Workflow
        </h2>
        <ol className="mt-4 space-y-3">
          {manifest.workflow.map((step) => (
            <li key={step.step} className="flex items-baseline gap-3">
              <span className="shrink-0 font-mono text-sm text-muted-foreground">
                {step.step}
              </span>
              <div>
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">
                  {step.command}
                </code>
                <span className="ml-2 text-sm text-muted-foreground">
                  {step.label}
                </span>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Skills */}
      <section className="mt-12">
        <h2 className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
          Skills
        </h2>
        <div className="mt-4 divide-y divide-border">
          {manifest.skills.map((skill) => (
            <div key={skill.command} className="flex items-baseline gap-4 py-3">
              <code className="shrink-0 font-mono text-sm">
                {skill.command}
              </code>
              <span className="text-sm text-muted-foreground">
                {skill.description}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Start */}
      <section className="mt-12">
        <h2 className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
          Quick Start
        </h2>
        <div className="mt-4 space-y-2">
          {manifest.quickstart.new.map((step, i) => (
            <div key={i} className="flex gap-3 py-1">
              <span className="shrink-0 font-mono text-sm text-muted-foreground">
                {i + 1}
              </span>
              <div className="min-w-0">
                <p className="text-sm">{step.title}</p>
                <code className="mt-1 block overflow-x-auto whitespace-pre rounded bg-muted px-2 py-1 font-mono text-xs text-muted-foreground">
                  {step.code}
                </code>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stack */}
      <section className="mt-12">
        <h2 className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
          Stack
        </h2>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {manifest.stack.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border p-3 text-sm transition-colors hover:border-foreground/20"
            >
              <p className="font-medium">{item.name}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                {item.detail}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 border-t border-border pt-6">
        <div className="flex gap-4 text-xs text-muted-foreground">
          <a
            href={manifest.url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 transition-colors hover:text-foreground"
          >
            Docs
          </a>
          <a
            href={manifest.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 transition-colors hover:text-foreground"
          >
            GitHub
          </a>
        </div>
      </footer>
    </main>
  );
}
