import Link from "next/link";
import { DocsContent } from "@/components/docs/docs-content";
import { CodeBlock } from "@/components/docs/code-block";
import { buttonVariants } from "@/components/ui/button";

export default function GettingStarted() {
  return (
    <DocsContent>
      <h1>Getting Started</h1>
      <p>
        Get Evergreen running on your machine and build your first prototype.
        This takes about 10 minutes.
      </p>

      <h2>Prerequisites</h2>
      <p>Make sure you have these installed before starting:</p>
      <ul>
        <li>
          <strong>Node.js 18+</strong> — download from{" "}
          <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer">
            nodejs.org
          </a>{" "}
          if you don&apos;t have it. Run <code>node --version</code> to check.
        </li>
        <li>
          <strong>Git</strong> — most systems have this pre-installed. Run{" "}
          <code>git --version</code> to check.
        </li>
        <li>
          <strong>A Claude account</strong> — either a{" "}
          <a
            href="https://claude.ai"
            target="_blank"
            rel="noopener noreferrer"
          >
            Claude Pro or Max subscription
          </a>
          , or an{" "}
          <a
            href="https://console.anthropic.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            API key
          </a>{" "}
          from the Anthropic console.
        </li>
      </ul>

      <hr />

      <h2>Step 1: Install Claude Code</h2>
      <p>
        Claude Code is a terminal-based AI assistant. Install it globally with
        npm:
      </p>
      <CodeBlock>npm install -g @anthropic-ai/claude-code</CodeBlock>
      <p>
        Verify it installed correctly:
      </p>
      <CodeBlock>claude --version</CodeBlock>

      <h2>Step 2: Clone and install</h2>
      <p>Clone the Evergreen repo and install dependencies:</p>
      <CodeBlock>{`git clone https://github.com/bobbydotdesign/evergreen.git my-project
cd my-project
npm install`}</CodeBlock>
      <p>
        Replace <code>my-project</code> with whatever you want to name your
        project.
      </p>

      <h2>Step 3: Start the dev server</h2>
      <p>This launches a local preview of your project:</p>
      <CodeBlock>npm run dev</CodeBlock>
      <p>
        Open{" "}
        <a href="http://localhost:3000" target="_blank" rel="noopener noreferrer">
          http://localhost:3000
        </a>{" "}
        in your browser. You should see the Evergreen landing page.
      </p>

      <h2>Step 4: Open Claude Code</h2>
      <p>
        Open a <strong>new terminal tab</strong> (keep the dev server running in
        the first one), navigate to your project folder, and start Claude Code:
      </p>
      <CodeBlock>{`cd my-project
claude`}</CodeBlock>
      <p>
        You&apos;re now talking to Claude inside your project. It can see all
        your files, understands the design system, and knows about the built-in
        skills.
      </p>

      <h2>Step 5: Build something</h2>
      <p>
        Try your first skill. Type this in Claude Code:
      </p>
      <CodeBlock>/prd</CodeBlock>
      <p>
        Claude will ask you to describe what you want to build. Tell it your
        idea in plain language — even a single sentence works. Claude generates a
        full product requirements document and saves it to{" "}
        <code>docs/prd.md</code>.
      </p>
      <p>
        Next, try generating your first prototype:
      </p>
      <CodeBlock>/wireframe</CodeBlock>
      <p>
        Claude will read your PRD and create interactive wireframe screens.
        Refresh your browser to see them.
      </p>

      <hr />

      <h2>What&apos;s next</h2>
      <p>
        Now that you&apos;re set up, learn how all the skills connect together:
      </p>
      <div className="flex gap-3">
        <Link
          href="/docs/workflow"
          className={buttonVariants({ variant: "default" }) + " no-underline"}
        >
          View the Workflow
        </Link>
        <Link
          href="/docs/skills/prd"
          className={buttonVariants({ variant: "outline" }) + " no-underline"}
        >
          Explore Skills
        </Link>
      </div>
    </DocsContent>
  );
}
