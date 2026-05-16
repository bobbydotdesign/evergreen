import { Metadata } from "next";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Brand",
};

const colorTokens = [
  { name: "background", var: "--background", desc: "Page background" },
  { name: "foreground", var: "--foreground", desc: "Primary text" },
  { name: "muted", var: "--muted", desc: "Subtle backgrounds, sections" },
  { name: "muted-foreground", var: "--muted-foreground", desc: "Secondary text" },
  { name: "border", var: "--border", desc: "Borders, dividers" },
  { name: "primary", var: "--primary", desc: "Buttons, active states" },
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
        <h1 className="text-2xl font-black tracking-tighter uppercase text-evergreen sm:text-3xl lg:text-4xl">
          The Evergreen Brand
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
          The visual foundation for Evergreen. Colors, typography, spacing, and component
          conventions used across the site.
        </p>
      </section>

      {/* Brand Mark */}
      <section className="border-t border-border bg-muted/30 px-6 py-16 sm:px-10 sm:py-20 lg:px-20">
        <p className="mb-3 text-xs font-medium tracking-widest text-muted-foreground uppercase">
          Identity
        </p>
        <h2 className="text-2xl font-black tracking-tighter uppercase sm:text-3xl">
          Brand Mark
        </h2>
        <p className="mt-3 mb-10 text-sm text-muted-foreground">
          The Evergreen mark is a geometric chevron rendered in the brand accent color.
          Use it at a minimum size of 24px. Always maintain clear space equal to the mark height around it.
        </p>

        {/* Mark treatments */}
        <div className="grid gap-6 sm:grid-cols-2">
          {/* Default */}
          <div className="relative flex aspect-square items-center justify-center border border-border bg-background p-10">
            <img src="/evergreen.svg" alt="Evergreen mark" className="h-16 w-auto" />
            <p className="absolute right-4 bottom-4 text-xs text-muted-foreground">Default</p>
          </div>
          {/* Minimum size */}
          <div className="relative flex aspect-square items-center justify-center border border-border bg-background p-10">
            <img src="/evergreen.svg" alt="Evergreen mark minimum size" className="h-6 w-auto" />
            <p className="absolute right-4 bottom-4 text-xs text-muted-foreground">Min 24px</p>
          </div>
        </div>
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
        {/* Accent */}
        <div className="mb-8 flex items-center gap-4 border border-border p-4">
          <div
            className="size-10 shrink-0 border border-border"
            style={{ backgroundColor: "var(--color-evergreen)" }}
          />
          <div>
            <p className="text-sm font-medium">ever green</p>
            <p className="text-xs text-muted-foreground">
              Brand accent — <code className="bg-muted px-1 py-0.5 font-mono text-xs">#EAFC4E</code> — hero headline, logo
            </p>
          </div>
        </div>

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

      {/* Buttons & Links */}
      <section className="border-t border-border px-6 py-16 sm:px-10 sm:py-20 lg:px-20">
        <p className="mb-3 text-xs font-medium tracking-widest text-muted-foreground uppercase">
          Interactive
        </p>
        <h2 className="text-2xl font-black tracking-tighter uppercase sm:text-3xl">
          Buttons & Links
        </h2>
        <p className="mt-3 mb-10 text-sm text-muted-foreground">
          Sharp corners (brand override). All transitions ease-out at 300ms.
        </p>

        {/* Button variants */}
        <div className="mb-10">
          <p className="mb-4 text-xs font-medium tracking-widest text-muted-foreground uppercase">
            Button Variants
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a className={buttonVariants({ variant: "default" })}>Default</a>
            <a className={buttonVariants({ variant: "secondary" })}>Secondary</a>
            <a className={buttonVariants({ variant: "outline" })}>Outline</a>
            <a className={buttonVariants({ variant: "ghost" })}>Ghost</a>
            <a className={buttonVariants({ variant: "destructive" })}>Destructive</a>
            <a className={buttonVariants({ variant: "link" })}>Link variant</a>
          </div>
        </div>

        {/* Button sizes */}
        <div className="mb-10">
          <p className="mb-4 text-xs font-medium tracking-widest text-muted-foreground uppercase">
            Button Sizes
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a className={buttonVariants({ size: "xs" })}>Extra Small</a>
            <a className={buttonVariants({ size: "sm" })}>Small</a>
            <a className={buttonVariants({ size: "default" })}>Default</a>
            <a className={buttonVariants({ size: "lg" })}>Large</a>
          </div>
        </div>

        {/* Link styles */}
        <div>
          <p className="mb-4 text-xs font-medium tracking-widest text-muted-foreground uppercase">
            Link Styles
          </p>
          <div className="flex flex-wrap items-center gap-6 text-sm">
            <a href="#" className="text-foreground underline underline-offset-4">
              Inline link
            </a>
            <a href="#" className="text-muted-foreground transition-colors duration-300 hover:text-foreground">
              Muted link
            </a>
            <a href="#" className="underline underline-offset-4 transition-colors duration-300 hover:text-foreground">
              Hover link
            </a>
          </div>
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
