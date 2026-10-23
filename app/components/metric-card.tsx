import type { ReactNode } from "react";
import { cn } from "~/lib/utils";
import { ArrowUp, ArrowDown, Minus, Circle } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export interface MetricCardProps {
  title: string;
  value: string;
  icon: ReactNode;
  delta: string;
  trend: "up" | "down" | "stable";
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
          <div className="flex size-7 items-center justify-center rounded-md bg-muted text-muted-foreground">
            {icon}
          </div>
        </div>

        {/* Meio: Valor e Delta */}
        <div className="flex flex-col gap-2">
          <span className="text-metric-display text-3xl font-bold text-foreground font-feature-settings-tnum">
            {value}
          </span>

          <div className="flex items-center gap-2">
            <span
              className={cn(
                "flex items-center gap-0.5 rounded-sm px-1.5 py-0.5 text-label-sm font-medium border",
                trend === "up" &&
                  "bg-success-surface text-success border-success-border",
                trend === "down" &&
                  "bg-danger-surface text-danger border-danger-border",
                trend === "stable" &&
                  "bg-muted text-muted-foreground border-border",
              )}
            >
              {trend === "up" && (
                <ArrowUp className="size-3" aria-hidden="true" />
              )}
              {trend === "down" && (
                <ArrowDown className="size-3" aria-hidden="true" />
              )}
              {trend === "stable" && (
                <Minus className="size-3" aria-hidden="true" />
              )}
              {delta}
            </span>
            <span className="text-body-sm text-muted-foreground">
              {deltaLabel}
            </span>
          </div>
        </div>
      </CardContent>

      {/* Footer */}
      <div className="border-t border-border/50 bg-muted/30 px-4 py-2.5 flex items-center justify-between mt-auto">
        <div className="flex items-center gap-1.5 text-body-sm text-muted-foreground">
          <Circle
            className="size-2 fill-success text-success"
            aria-hidden="true"
          />
          <span>{footerLabel}</span>
        </div>
        <span
          className={cn(
            "text-body-sm font-medium font-feature-settings-tnum",
            footerValueColor,
          )}
        >
          {footerValue}
        </span>
      </div>
    </Card>
  );
}
