import Link from "next/link";
import { DocsContent } from "@/components/docs/docs-content";
import { CodeBlock } from "@/components/docs/code-block";

export default function DesignSystemDocs() {
  return (
    <DocsContent>
      <h1>/ev-designsystem</h1>
      <p>
        Configure the visual foundation of your project: colors, typography,
        spacing, and component conventions. Everything you build with{" "}
        <code>/ev-design</code> and <code>/ev-wireframe</code> uses these tokens.
      </p>

      <h2>When to use this</h2>
      <ul>
        <li>You&apos;re starting a new project and want to set your brand colors</li>
        <li>You want to change the font or adjust the spacing scale</li>
        <li>You want to audit your codebase for design inconsistencies</li>
      </ul>

      <h2>Four modes</h2>

      <h3>Setup</h3>
      <p>Run the full design system configuration:</p>
      <CodeBlock>/ev-designsystem</CodeBlock>
      <p>
        Claude walks you through choosing colors, typography, spacing, and
        radius. It generates all the CSS variables in{" "}
        <code>globals.css</code> for both light and dark mode, using the oklch
        color space with WCAG AA contrast ratios.
      </p>

      <h3>Update</h3>
      <p>Modify a specific part of the system:</p>
      <CodeBlock>/ev-designsystem colors</CodeBlock>
      <CodeBlock>/ev-designsystem typography</CodeBlock>
      <p>Changes only the aspect you specify without re-running the full setup.</p>

      <h3>Audit</h3>
      <p>Scan your codebase for violations:</p>
      <CodeBlock>/ev-designsystem audit</CodeBlock>
      <p>
        Claude checks for hardcoded colors, inconsistent spacing, typography
        outside the scale, and components not using <code>cn()</code>. It
        reports what it finds and offers to fix each issue.
      </p>

      <h3>Export</h3>
      <p>Generate a summary of your current design system:</p>
      <CodeBlock>/ev-designsystem export</CodeBlock>
      <p>
        Creates <code>docs/design-system.md</code> documenting all tokens,
        colors, type scale, and spacing values.
      </p>

      <h2>What to do next</h2>
      <p>
        With your design system set, run{" "}
        <Link href="/docs/skills/wireframe"><code>/ev-wireframe</code></Link> to
        prototype or{" "}
        <Link href="/docs/skills/design"><code>/ev-design</code></Link> to build
        polished components.
      </p>
    </DocsContent>
  );
}
