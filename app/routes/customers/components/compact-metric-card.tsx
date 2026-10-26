import { cn } from "~/lib/utils";
import { ArrowUpRight, ArrowDownRight, Minus } from "lucide-react";
import type { ReactNode } from "react";

interface CompactMetricCardProps {
  title: string;
  value: string;
  change: number;
  trend: "up" | "down" | "stable";
  description: string;
  icon: ReactNode;
  colorStyles: {
    bg: string;
    text: string;
  };
}

export function CompactMetricCard({
  title,
  value,
  change,
  trend,
  description,
  icon,
  colorStyles,
}: CompactMetricCardProps) {
  // Formatar o valor de mudança para 1 casa decimal e adicionar o sinal
  const formattedChange = `${change > 0 ? "+" : ""}${change}%`;

  return (
    <div className="flex items-start gap-3 rounded-lg border border-border bg-card p-4 shadow-card">
      {/* Ícone com cor de fundo dinâmica */}
      <div
        className={cn(
          "flex size-9 shrink-0 items-center justify-center rounded-md",
          colorStyles.bg,
          colorStyles.text,
        )}
      >
        {icon}
      </div>

      {/* Conteúdo */}
      <div className="flex flex-col w-full">
        <span className="text-label-sm font-medium text-muted-foreground">
          {title}
        </span>

        <div className="flex items-baseline justify-between mt-1">
          <span className="text-xl font-semibold text-foreground font-mono">
            {value}
          </span>

          {/* Badge de Variação (Change) */}
          <div
            className={cn(
              "flex items-center gap-0.5 text-xs font-medium",
              trend === "up" && "text-success",
              trend === "down" && "text-danger",
              trend === "stable" && "text-muted-foreground",
            )}
          >
            {trend === "up" && <ArrowUpRight className="size-3" />}
            {trend === "down" && <ArrowDownRight className="size-3" />}
            {trend === "stable" && <Minus className="size-3" />}
            {formattedChange}
          </div>
        </div>

        <span className="text-[11px] text-muted-foreground mt-0.5">
          {description}
        </span>
      </div>
    </div>
  );
}
