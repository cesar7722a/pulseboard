import { cn } from "~/lib/utils";
import { ArrowUp, ArrowDown, Circle } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import type { ReactNode } from "react";

export interface MetricCardProps {
  title: string;
  value: string;
  icon: ReactNode;
  delta: string;
  trend: "up" | "down";
  deltaLabel: string;
  footerLabel: string;
  footerValue: string;
  footerValueColor?: string;
}

export interface MetricCardProps {
  title: string;
  value: string;
  icon: ReactNode;
  delta: string;
  trend: "up" | "down";
  deltaLabel: string;
  footerLabel: string;
  footerValue: string;
  footerValueColor?: string;
}

export function MetricCard({
  title,
  value,
  icon,
  delta,
  trend,
  deltaLabel,
  footerLabel,
  footerValue,
  footerValueColor = "text-foreground",
}: MetricCardProps) {
  return (
    <Card className="shadow-card border-border bg-card flex flex-col overflow-hidden">
      <CardContent className="p-4 flex-1">
        {/* Topo: Título e Ícone */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-label-md text-muted-foreground font-medium">
            {title}
          </span>
          {/* Usando o background do teu sistema */}
          <div className="flex size-7 items-center justify-center rounded-md bg-muted text-muted-foreground">
            {icon}
          </div>
        </div>

        {/* Meio: Valor e Delta */}
        <div className="flex flex-col gap-2">
          <span className="text-metric-display text-foreground text-2xl font-bold">
            {value}
          </span>
          <div className="flex items-center gap-2">
            {/* Badge usando as variáveis semânticas de sucesso/perigo */}
            <span
              className={cn(
                "flex items-center gap-0.5 rounded-sm px-1.5 py-0.5 text-label-sm font-medium border",
                trend === "up" &&
                  "bg-success-surface text-success border-success-border",
                trend === "down" &&
                  "bg-danger-surface text-danger border-danger-border",
              )}
            >
              {trend === "up" ? (
                <ArrowUp className="size-3" aria-hidden="true" />
              ) : (
                <ArrowDown className="size-3" aria-hidden="true" />
              )}
              {delta}
            </span>
            <span className="text-body-sm text-muted-foreground">
              {deltaLabel}
            </span>
          </div>
        </div>
      </CardContent>

      {/* Footer com linha divisória */}
      <div className="border-t border-border/50 bg-muted/30 px-4 py-2.5 flex items-center justify-between mt-auto">
        <div className="flex items-center gap-1.5 text-body-sm text-muted-foreground">
          {/* Ponto verde usando a cor de sucesso */}
          <Circle
            className="size-2 fill-success text-success"
            aria-hidden="true"
          />
          <span>{footerLabel}</span>
        </div>
        <span className={cn("text-body-sm font-medium", footerValueColor)}>
          {footerValue}
        </span>
      </div>
    </Card>
  );
}
