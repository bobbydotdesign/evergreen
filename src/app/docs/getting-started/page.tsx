import Link from "next/link";
import { DocsContent } from "@/components/docs/docs-content";
import { CodeBlock } from "@/components/docs/code-block";
import { buttonVariants } from "@/components/ui/button";

export default function GettingStarted() {
  return (
    <DocsContent>
      <h1>Getting Started</h1>
      <p>
        Evergreen is an agentic design framework that runs inside{" "}
        <a href="https://docs.anthropic.com/en/docs/claude-code" target="_blank" rel="noopener noreferrer">
          Claude Code
        </a>
        . You can start a new project with it or add the skills to an existing one.
      </p>

      <h2>Prerequisites</h2>
      <ul>
        <li>
          <strong>Claude Code</strong> — Evergreen requires Claude Code.{" "}
          <a href="https://docs.anthropic.com/en/docs/claude-code" target="_blank" rel="noopener noreferrer">
            Install it
          </a>{" "}
          if you haven&apos;t already, then verify with <code>claude --version</code>.
        </li>
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
      </ul>

      <hr />

      <h2>Option A: New project</h2>
      <p>Start fresh with Evergreen as your foundation. Run these commands in your terminal.</p>

      <h3>1. Clone and install</h3>
      <p>Clone the Evergreen repo and install dependencies:</p>
      <CodeBlock>{`git clone https://github.com/bobbydotdesign/evergreen.git my-project
cd my-project
npm install`}</CodeBlock>
      <p>
        Replace <code>my-project</code> with whatever you want to name your
        project.
      </p>

      <h3>2. Start Claude Code</h3>
      <p>
        This is where you&apos;ll use the built-in skills to design and build:
      </p>
      <CodeBlock>claude</CodeBlock>
      <p>
        You may be asked to trust the project folder — select{" "}
        <strong>&quot;Yes, I trust this folder&quot;</strong> to continue.
        You&apos;re now talking to Claude inside your project. It can see all
        your files, understands the design system, and knows about the built-in
        skills.
      </p>

      <h3>3. Start building</h3>
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
      </p>

      <p>
        When you&apos;re ready to preview, just ask Claude to start the dev
        server — it runs in the background so you can keep working. Open{" "}
        <a href="http://localhost:3000" target="_blank" rel="noopener noreferrer">
          http://localhost:3000
        </a>{" "}
        in your browser to see your work.
      </p>

      <hr />

      <h2>Option B: Existing project</h2>
      <p>
        Already have a project with Claude Code? Add the Evergreen skills and
        configuration without changing your existing stack. Run these commands in your terminal from your project folder.
      </p>

      <h3>1. Copy the skills</h3>
      <p>From the root of your existing project:</p>
      <CodeBlock>{`git clone https://github.com/bobbydotdesign/evergreen.git /tmp/evergreen
cp -r /tmp/evergreen/.claude .claude
cp /tmp/evergreen/CLAUDE.md CLAUDE.md
rm -rf /tmp/evergreen`}</CodeBlock>
      <p>
        This adds the <code>.claude/skills/</code> directory and project
        instructions to your codebase.
      </p>

      <h3>2. Open Claude Code</h3>
      <p>Start Claude Code in your project:</p>
      <CodeBlock>claude</CodeBlock>
      <p>
        All skills (<code>/prd</code>, <code>/research</code>,{" "}
        <code>/design</code>, <code>/wireframe</code>, <code>/ship</code>, etc.)
        are immediately available. You may want to edit <code>CLAUDE.md</code> to
        match your project&apos;s stack and conventions.
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
