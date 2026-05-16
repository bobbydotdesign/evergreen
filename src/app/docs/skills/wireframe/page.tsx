import Link from "next/link";
import { DocsContent } from "@/components/docs/docs-content";
import { CodeBlock } from "@/components/docs/code-block";

export default function WireframeDocs() {
  return (
    <DocsContent>
      <h1>/ev-wireframe</h1>
      <p>
        Rapidly generate interactive wireframes and prototypes from a
        description. Speed matters more than polish — get something on screen
        fast, then iterate.
      </p>

      <h2>When to use this</h2>
      <ul>
        <li>You want to see your idea as a working prototype quickly</li>
        <li>You need to test a user flow before investing in design</li>
        <li>You want placeholder screens to iterate on with stakeholders</li>
      </ul>

      <h2>How to use it</h2>
      <CodeBlock>/ev-wireframe a todo app with projects and tags</CodeBlock>
      <p>
        Claude generates multiple screens with navigation between them, working
        form inputs, and basic state management. Placeholder content is used
        throughout — lorem ipsum and gray blocks for images.
      </p>
      <p>More examples:</p>
      <ul>
        <li><code>/ev-wireframe login and signup flow</code> — specific screens</li>
        <li><code>/ev-wireframe iterate on the dashboard</code> — refine existing wireframes</li>
        <li><code>/ev-wireframe</code> — if a PRD exists, Claude reads it and prototypes from that</li>
      </ul>

      <h2>What it creates</h2>
      <p>
        Pages in <code>src/app/</code> and wireframe-specific components in{" "}
        <code>src/components/wireframe/</code>. The wireframes use a distinct
        visual style:
      </p>
      <ul>
        <li>Dashed borders for placeholder containers</li>
        <li>Gray backgrounds for image placeholders</li>
        <li>Real text hierarchy but placeholder copy</li>
        <li>shadcn/ui components for interactive elements</li>
        <li>Grayscale only — no color until you add it</li>
      </ul>

      <h2>What to do next</h2>
      <p>
        Once your wireframes feel right, run{" "}
        <Link href="/docs/skills/design"><code>/ev-design</code></Link> to convert
        them to high-fidelity UI. Or run{" "}
        <Link href="/docs/skills/ship"><code>/ev-ship</code></Link> to deploy the
        wireframes for early feedback.
      </p>
    </DocsContent>
  );
}
