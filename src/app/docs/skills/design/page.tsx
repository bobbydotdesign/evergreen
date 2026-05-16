import Link from "next/link";
import { DocsContent } from "@/components/docs/docs-content";
import { CodeBlock } from "@/components/docs/code-block";

export default function DesignDocs() {
  return (
    <DocsContent>
      <h1>/ev-design</h1>
      <p>
        Create, refine, and implement UI components and pages using the
        project&apos;s design system. This is your main tool for turning
        wireframes into polished interfaces.
      </p>

      <h2>When to use this</h2>
      <ul>
        <li>You want to create a new component (button, card, header, etc.)</li>
        <li>You want to build a full page layout</li>
        <li>You want to improve the visual quality of existing UI</li>
      </ul>

      <h2>Three modes</h2>

      <h3>Component mode</h3>
      <p>Create or modify individual components:</p>
      <CodeBlock>/ev-design a pricing card with three tiers</CodeBlock>
      <p>
        Claude builds the component using shadcn/ui primitives and your design
        system tokens. Components are saved to <code>src/components/</code>.
      </p>

      <h3>Page mode</h3>
      <p>Build full page layouts:</p>
      <CodeBlock>/ev-design the settings page</CodeBlock>
      <p>
        Claude creates the page with responsive layout, proper metadata, and
        reuses existing components where possible.
      </p>

      <h3>Refine mode</h3>
      <p>Improve existing UI:</p>
      <CodeBlock>/ev-design refine the header</CodeBlock>
      <p>
        Claude reads the existing component, analyzes it, suggests improvements
        for spacing, hierarchy, and contrast, then applies the changes.
      </p>

      <h2>Design principles</h2>
      <p>Claude follows these principles when designing:</p>
      <ul>
        <li><strong>Hierarchy first</strong> — size, weight, and color guide the eye</li>
        <li><strong>Generous whitespace</strong> — spacing is a feature, not waste</li>
        <li><strong>Consistency</strong> — reuse design tokens, never hardcode values</li>
        <li><strong>Responsive</strong> — mobile-first at 375px, 768px, 1280px</li>
        <li><strong>Accessible</strong> — proper contrast, semantic HTML, ARIA labels</li>
      </ul>

      <h2>What to do next</h2>
      <p>
        Run <Link href="/docs/skills/ship"><code>/ev-ship</code></Link> to deploy
        your design, or use{" "}
        <Link href="/docs/skills/figma"><code>/ev-figma</code></Link> to sync
        with Figma.
      </p>
    </DocsContent>
  );
}
