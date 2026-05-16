import Link from "next/link";
import { DocsContent } from "@/components/docs/docs-content";
import { CodeBlock } from "@/components/docs/code-block";

export default function PrdDocs() {
  return (
    <DocsContent>
      <h1>/ev-prd</h1>
      <p>
        Generate a structured product requirements document from a product idea.
        This is usually the first skill you run on a new project.
      </p>

      <h2>When to use this</h2>
      <ul>
        <li>You have an idea and want to define scope before building</li>
        <li>You need to articulate goals, features, and user flows</li>
        <li>You want a document to share with collaborators or stakeholders</li>
      </ul>

      <h2>How to use it</h2>
      <p>In Claude Code, type:</p>
      <CodeBlock>/ev-prd</CodeBlock>
      <p>
        Claude will ask you to describe your product. You can be brief (&quot;a
        habit tracking app&quot;) or detailed. The more context you give, the
        better the output.
      </p>
      <p>You can also provide your brief directly:</p>
      <CodeBlock>/ev-prd a marketplace for freelance designers to sell templates</CodeBlock>

      <h2>What it creates</h2>
      <p>
        A markdown file at <code>docs/prd.md</code> with these sections:
      </p>
      <ul>
        <li><strong>Overview</strong> — what the product is and who it&apos;s for</li>
        <li><strong>Problem Statement</strong> — the pain point being solved</li>
        <li><strong>Target Users</strong> — primary personas and their needs</li>
        <li><strong>Goals & Success Metrics</strong> — measurable outcomes</li>
        <li><strong>Core Features (MVP)</strong> — prioritized feature list</li>
        <li><strong>User Flows</strong> — key journeys through the product</li>
        <li><strong>Out of Scope</strong> — what you&apos;re not building in v1</li>
        <li><strong>Technical Considerations</strong> — stack and constraints</li>
        <li><strong>Open Questions</strong> — decisions still to be made</li>
      </ul>

      <h2>What to do next</h2>
      <p>
        Run <Link href="/docs/skills/research"><code>/ev-research</code></Link> to
        validate your assumptions against the market, or jump to{" "}
        <Link href="/docs/skills/wireframe"><code>/ev-wireframe</code></Link> to
        start prototyping immediately.
      </p>
    </DocsContent>
  );
}
