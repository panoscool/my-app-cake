const steps = [1, 2, 3];

export function ProgressIndicator({ current }: { current: number }) {
  return (
    <ol className="flex items-center justify-center gap-4 text-sm">
      {steps.map((s) => (
        <li key={s} className="flex items-center gap-2">
          <span
            className={
              "size-6 rounded-full flex items-center justify-center border text-xs " +
              (s === current
                ? "bg-primary text-primary-foreground border-primary"
                : s < current
                ? "bg-primary/70 text-primary-foreground border-primary/60"
                : "bg-muted text-muted-foreground border-border")
            }
          >
            {s}
          </span>
          <span className="hidden md:inline-block">Step {s}</span>
          {s !== steps.length && <span className="text-muted-foreground">→</span>}
        </li>
      ))}
    </ol>
  );
}
