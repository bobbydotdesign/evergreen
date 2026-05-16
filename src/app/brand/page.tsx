import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brand",
};

const colorTokens = [
  { name: "background", var: "--background", desc: "Page background" },
  { name: "foreground", var: "--foreground", desc: "Primary text" },
  { name: "primary", var: "--primary", desc: "Buttons, active states" },
  { name: "primary-foreground", var: "--primary-foreground", desc: "Text on primary" },
  { name: "secondary", var: "--secondary", desc: "Secondary surfaces" },
  { name: "secondary-foreground", var: "--secondary-foreground", desc: "Text on secondary" },
  { name: "muted", var: "--muted", desc: "Subtle backgrounds" },
  { name: "muted-foreground", var: "--muted-foreground", desc: "Secondary text" },
  { name: "accent", var: "--accent", desc: "Highlights, hover" },
  { name: "accent-foreground", var: "--accent-foreground", desc: "Text on accent" },
  { name: "destructive", var: "--destructive", desc: "Errors, danger" },
  { name: "border", var: "--border", desc: "Borders, dividers" },
  { name: "input", var: "--input", desc: "Input borders" },
  { name: "ring", var: "--ring", desc: "Focus rings" },
];

const typeScale = [
  { name: "Hero", className: "text-6xl font-black tracking-tighter uppercase", sample: "Evergreen" },
  { name: "Section heading", className: "text-2xl font-black tracking-tighter uppercase sm:text-3xl lg:text-4xl", sample: "Up and running" },
  { name: "Label", className: "text-xs font-medium tracking-widest text-muted-foreground uppercase", sample: "Quick Start" },
  { name: "Subheading", className: "text-sm font-bold tracking-tight uppercase", sample: "New project" },
  { name: "Body", className: "text-sm text-muted-foreground", sample: "Start fresh with Evergreen as your foundation." },
  { name: "Mono / code", className: "font-mono text-sm", sample: "/ev-wireframe" },
  { name: "Caption", className: "text-xs text-muted-foreground", sample: "View docs →" },
];

const spacingScale = [
  { name: "4", px: "16px" },
  { name: "6", px: "24px" },
  { name: "8", px: "32px" },
  { name: "10", px: "40px" },
  { name: "12", px: "48px" },
  { name: "16", px: "64px" },
  { name: "20", px: "80px" },
  { name: "32", px: "128px" },
];

export default function BrandPage() {
  return (
    <main className="flex flex-1 flex-col overflow-x-hidden">
      {/* Header */}
      <section className="px-6 pt-32 pb-16 sm:px-10 sm:pt-40 lg:px-20">
        <p className="mb-3 text-xs font-medium tracking-widest text-muted-foreground uppercase">
          Design System
        </p>
        <h1 className="text-2xl font-black tracking-tighter uppercase sm:text-3xl lg:text-4xl">
          Brand
        </h1>
        <p className="mt-3 max-w-lg text-sm text-muted-foreground">
          The visual foundation for Evergreen. Colors, typography, spacing, and component
          conventions used across the site.
        </p>
      </section>

      {/* Colors */}
      <section className="border-t border-border px-6 py-16 sm:px-10 sm:py-20 lg:px-20">
        <p className="mb-3 text-xs font-medium tracking-widest text-muted-foreground uppercase">
          Tokens
        </p>
        <h2 className="text-2xl font-black tracking-tighter uppercase sm:text-3xl">
          Colors
        </h2>
        <p className="mt-3 mb-10 text-sm text-muted-foreground">
          Semantic color tokens from <code className="bg-muted px-1.5 py-0.5 font-mono text-xs">globals.css</code>. All
          colors use oklch and support light/dark mode.
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {colorTokens.map((token) => (
            <div key={token.name} className="flex items-center gap-3 border border-border p-3">
              <div
                className="size-10 shrink-0 border border-border"
                style={{ backgroundColor: `var(${token.var})` }}
              />
              <div className="min-w-0">
                <p className="text-sm font-medium truncate">{token.name}</p>
                <p className="text-xs text-muted-foreground">{token.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Accent */}
        <div className="mt-8 flex items-center gap-4 border border-border p-4">
          <div
            className="size-10 shrink-0 border border-border"
            style={{ backgroundColor: "var(--color-evergreen)" }}
          />
          <div>
            <p className="text-sm font-medium">evergreen</p>
            <p className="text-xs text-muted-foreground">
              Brand accent — <code className="bg-muted px-1 py-0.5 font-mono text-xs">#EAFC4E</code> — hero headline, logo
            </p>
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="border-t border-border bg-muted/30 px-6 py-16 sm:px-10 sm:py-20 lg:px-20">
        <p className="mb-3 text-xs font-medium tracking-widest text-muted-foreground uppercase">
          Type Scale
        </p>
        <h2 className="text-2xl font-black tracking-tighter uppercase sm:text-3xl">
          Typography
        </h2>
        <p className="mt-3 mb-10 text-sm text-muted-foreground">
          Geist Sans for UI, Geist Mono for code. Minimal type scale — 7 treatments total.
        </p>
        <div className="space-y-0">
          {typeScale.map((level) => (
            <div key={level.name} className="flex flex-col gap-1 border-b border-border py-6 last:border-0 sm:flex-row sm:items-baseline sm:gap-8">
              <p className="w-40 shrink-0 text-xs text-muted-foreground uppercase tracking-widest">
                {level.name}
              </p>
              <p className={level.className}>{level.sample}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Spacing */}
      <section className="border-t border-border px-6 py-16 sm:px-10 sm:py-20 lg:px-20">
        <p className="mb-3 text-xs font-medium tracking-widest text-muted-foreground uppercase">
          Layout
        </p>
        <h2 className="text-2xl font-black tracking-tighter uppercase sm:text-3xl">
          Spacing
        </h2>
        <p className="mt-3 mb-10 text-sm text-muted-foreground">
          Tailwind default 4px grid. Key values used across sections and components.
        </p>
        <div className="space-y-3">
          {spacingScale.map((s) => (
            <div key={s.name} className="flex items-center gap-4">
              <p className="w-12 shrink-0 text-right font-mono text-xs text-muted-foreground">
                {s.name}
              </p>
              <div
                className="h-3 bg-foreground/20"
                style={{ width: s.px }}
              />
              <p className="text-xs text-muted-foreground">{s.px}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Radius */}
      <section className="border-t border-border bg-muted/30 px-6 py-16 sm:px-10 sm:py-20 lg:px-20">
        <p className="mb-3 text-xs font-medium tracking-widest text-muted-foreground uppercase">
          Shape
        </p>
        <h2 className="text-2xl font-black tracking-tighter uppercase sm:text-3xl">
          Radius & Borders
        </h2>
        <p className="mt-3 mb-10 text-sm text-muted-foreground">
          Sharp corners by default (Evergreen brand). Base radius is 0.625rem but overridden
          to 0 on UI components via <code className="bg-muted px-1.5 py-0.5 font-mono text-xs">evergreen-brand.css</code>.
        </p>
        <div className="flex flex-wrap gap-6">
          <div className="flex flex-col items-center gap-2">
            <div className="size-20 border-2 border-foreground/30" />
            <p className="text-xs text-muted-foreground">0 — UI components</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="size-20 rounded-lg border-2 border-foreground/30" />
            <p className="text-xs text-muted-foreground">lg — code blocks</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="size-20 rounded-full border-2 border-foreground/30" />
            <p className="text-xs text-muted-foreground">full — avatars</p>
          </div>
        </div>
      </section>

      {/* Breakpoints */}
      <section className="border-t border-border px-6 py-16 sm:px-10 sm:py-20 lg:px-20">
        <p className="mb-3 text-xs font-medium tracking-widest text-muted-foreground uppercase">
          Responsive
        </p>
        <h2 className="text-2xl font-black tracking-tighter uppercase sm:text-3xl">
          Breakpoints
        </h2>
        <p className="mt-3 mb-10 text-sm text-muted-foreground">
          Mobile-first. Three breakpoints, matched to Tailwind defaults.
        </p>
        <div className="space-y-0">
          {[
            { name: "Mobile", bp: "Default", width: "375px+" },
            { name: "Tablet", bp: "sm (640px)", width: "640px+" },
            { name: "Desktop", bp: "lg (1024px)", width: "1024px+" },
          ].map((row) => (
            <div key={row.name} className="flex items-baseline gap-8 border-b border-border py-4 last:border-0">
              <p className="w-20 text-sm font-medium">{row.name}</p>
              <p className="font-mono text-sm text-muted-foreground">{row.bp}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
