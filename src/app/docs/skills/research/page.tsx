import Link from "next/link";
import { DocsContent } from "@/components/docs/docs-content";
import { CodeBlock } from "@/components/docs/code-block";

export default function ResearchDocs() {
  return (
    <DocsContent>
      <h1>/ev-research</h1>
      <p>
        Conduct competitive analysis, market research, and user insight
        gathering. Claude searches the web for real data and synthesizes it into
        an actionable research brief.
      </p>

      <h2>When to use this</h2>
      <ul>
        <li>You want to understand who your competitors are and what they do well</li>
        <li>You need to validate that your product idea has a real market</li>
        <li>You want to find design opportunities and unmet user needs</li>
      </ul>

      <h2>How to use it</h2>
      <CodeBlock>/ev-research</CodeBlock>
      <p>
        Claude will ask what you want to research. You can give it a broad topic
        or a specific question:
      </p>
      <ul>
        <li><code>/ev-research habit tracking apps</code> — broad market overview</li>
        <li><code>/ev-research how does Linear handle project views</code> — specific competitor deep-dive</li>
        <li><code>/ev-research how do freelancers manage invoicing</code> — user behavior research</li>
      </ul>

      <h2>What it creates</h2>
      <p>
        A markdown file at <code>docs/research.md</code> containing:
      </p>
      <ul>
        <li><strong>Market Landscape</strong> — size, trends, and key players</li>
        <li><strong>Competitive Analysis</strong> — a comparison table of existing products</li>
        <li><strong>User Insights</strong> — common pain points and behavioral patterns</li>
        <li><strong>Design Opportunities</strong> — gaps and potential differentiators</li>
        <li><strong>Key Takeaways</strong> — actionable insights for your product</li>
      </ul>
      <p>
        If a PRD already exists, Claude will cross-reference research findings
        with your product definition.
      </p>

      <h2>What to do next</h2>
      <p>
        Use your findings to refine the PRD, then run{" "}
        <Link href="/docs/skills/wireframe"><code>/ev-wireframe</code></Link> to
        start prototyping based on what you learned.
      </p>
    </DocsContent>
  );
}
