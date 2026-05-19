export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight">My App</h1>
        <p className="mt-2 text-muted-foreground">
          Start building — or run{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">
            /ev-prd
          </code>{" "}
          in Claude Code.
        </p>
        <a
          href="/evergreen"
          className="mt-6 inline-block text-sm text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
        >
          Evergreen reference
        </a>
      </div>
    </main>
  );
}
