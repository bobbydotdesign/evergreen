import { cn } from "@/lib/utils";

interface Step {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export function StepList({
  steps,
  className,
}: {
  steps: Step[];
  className?: string;
}) {
  return (
    <div className={cn("space-y-0", className)}>
      {steps.map((step, i) => (
        <div
          key={i}
          className={cn(
            "flex gap-6 py-6",
            i < steps.length - 1 && "border-b border-border"
          )}
        >
          <span className="flex size-8 shrink-0 items-center justify-center rounded-none bg-foreground font-mono text-sm font-medium text-background">
            {i + 1}
          </span>
          <div className="min-w-0 flex-1 space-y-2">
            <p className="font-medium leading-8">{step.title}</p>
            {step.description && (
              <p className="text-sm text-muted-foreground">
                {step.description}
              </p>
            )}
            {step.children}
          </div>
        </div>
      ))}
    </div>
  );
}
