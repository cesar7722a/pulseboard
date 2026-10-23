interface ChartTooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
  formatter?: (value: number) => string;
  labelFormatter?: (label: string) => string;
}

export function ChartTooltip({
  active,
  payload,
  label,
  formatter = (v) => v.toString(),
  labelFormatter = (l) => l,
}: ChartTooltipProps) {
  if (!active || !payload || payload.length === 0) return null;

  return (
    <div className="rounded-lg border border-border bg-foreground px-3 py-2 shadow-md">
      <p className="text-[11px] font-medium text-background/70 mb-1">
        {labelFormatter(label || "")}
      </p>
      <div className="flex flex-col gap-1">
        {payload.map((entry, index) => (
          <div
            key={index}
            className="flex items-center gap-2 text-sm font-semibold text-background"
          >
            <span
              className="size-2 rounded-full"
              style={{ backgroundColor: entry.color || "hsl(var(--primary))" }}
              aria-hidden="true"
            />
            <span>{formatter(entry.value as number)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
