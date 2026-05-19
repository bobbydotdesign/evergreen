import { ProjectNav } from "@/components/project-nav";

export default function EvLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <ProjectNav />
      <div className="flex-1">{children}</div>
    </div>
  );
}
