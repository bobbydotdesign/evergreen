import Link from "next/link";
import { DocsContent } from "@/components/docs/docs-content";
import { CodeBlock } from "@/components/docs/code-block";

export default function FigmaDocs() {
  return (
    <DocsContent>
      <h1>/ev-figma</h1>
      <p>
        Pull designs from Figma, extract tokens, translate them to code, and
        sync component mappings. This skill requires{" "}
        <a
          href="https://www.figma.com/community/plugin/1441950583498498539"
          target="_blank"
          rel="noopener noreferrer"
        >
          Figma MCP
        </a>{" "}
        to be configured.
      </p>

      <h2>When to use this</h2>
      <ul>
        <li>You have designs in Figma and want to translate them to code</li>
        <li>You want to keep Figma and code in sync</li>
        <li>You want to pull Figma variables into your CSS design tokens</li>
      </ul>

      <h2>Four modes</h2>

      <h3>Inspect</h3>
      <p>Analyze a Figma design without building anything:</p>
      <CodeBlock>/ev-figma inspect</CodeBlock>
      <p>
        Claude captures the design, summarizes the layout, spacing, colors, and
        typography, then maps Figma tokens to your project&apos;s design
        system. It flags any tokens that don&apos;t exist yet.
      </p>

      <h3>Build</h3>
      <p>Translate a Figma design directly into code:</p>
      <CodeBlock>/ev-figma build</CodeBlock>
      <p>
        Claude inspects the design, then creates the component or page in code
        using shadcn/ui primitives and your design tokens. It matches the Figma
        layout as closely as possible.
      </p>

      <h3>Sync</h3>
      <p>Push component mappings back to Figma:</p>
      <CodeBlock>/ev-figma sync</CodeBlock>
      <p>
        Claude checks for code-connect suggestions, reviews them with you, and
        pushes the mappings to Figma so your design file knows which code
        implements each component.
      </p>

      <h3>Variables</h3>
      <p>Compare Figma variables with your CSS tokens:</p>
      <CodeBlock>/ev-figma variables</CodeBlock>
      <p>
        Claude pulls your Figma variables and shows a diff: what&apos;s in
        Figma but not in code, and vice versa. It offers to update{" "}
        <code>globals.css</code> to match.
      </p>

      <h2>Setup</h2>
      <p>
        To use this skill, you need Figma MCP configured in your Claude Code
        environment. The MCP tools (<code>mcp__figma__*</code>) should be
        available — Claude will tell you if they&apos;re missing.
      </p>

      <h2>What to do next</h2>
      <p>
        After building from Figma, use{" "}
        <Link href="/docs/skills/design"><code>/ev-design refine</code></Link> to
        polish the output, or{" "}
        <Link href="/docs/skills/ship"><code>/ev-ship</code></Link> to deploy.
      </p>
    </DocsContent>
  );
}
