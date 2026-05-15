export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex-1 px-6 py-10 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-3xl">{children}</div>
    </main>
  );
}
