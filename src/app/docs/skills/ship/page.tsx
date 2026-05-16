import Link from "next/link";
import { DocsContent } from "@/components/docs/docs-content";
import { CodeBlock } from "@/components/docs/code-block";

export default function ShipDocs() {
  return (
    <DocsContent>
      <h1>/ev-ship</h1>
      <p>
        Deploy your project to Vercel and optionally set up feedback collection.
        One command to go from local prototype to a live URL you can share.
      </p>

      <h2>When to use this</h2>
      <ul>
        <li>Your prototype is ready for other people to see</li>
        <li>You want to share a live URL with stakeholders for feedback</li>
        <li>You want to set up a feedback form to collect user responses</li>
      </ul>

      <h2>How to use it</h2>
      <CodeBlock>/ev-ship</CodeBlock>
      <p>
        Claude checks that your project builds cleanly, then deploys to Vercel.
        If this is your first deploy, it walks you through linking to a Vercel
        project.
      </p>
      <p>
        For production deploys:
      </p>
      <CodeBlock>/ev-ship to production</CodeBlock>

      <h2>Feedback collection</h2>
      <p>
        Ask Claude to set up feedback and it offers two options:
      </p>
      <ul>
        <li>
          <strong>Floating widget</strong> — a small button in the corner that
          opens a quick feedback form (text + sentiment). Minimal and
          unobtrusive.
        </li>
        <li>
          <strong>Dedicated page</strong> — a full <code>/feedback</code> route
          with structured questions, feature ratings, and optional contact info.
        </li>
      </ul>

      <h2>Prerequisites</h2>
      <ul>
        <li>
          A <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">Vercel account</a> (free
          tier works)
        </li>
        <li>
          The Vercel CLI is used automatically via <code>npx vercel</code> — no
          global install needed
        </li>
      </ul>

      <h2>What to do next</h2>
      <p>
        Share your deploy URL and collect feedback. Use the insights to iterate —
        run <Link href="/docs/skills/design"><code>/ev-design</code></Link> to
        refine based on what you learn, then <code>/ev-ship</code> again.
      </p>
    </DocsContent>
  );
}
