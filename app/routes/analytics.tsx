import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import type { Route } from "./+types/analytics";
import { Calendar, ChevronDown, Download, ListFilter } from "lucide-react";
import { Button } from "~/components/ui/button";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Analytics() {
  return (
    <div>
      <div className="flex flex-col gap-6">
        {/* Linha 1: Tag de Telemetria e Título */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="rounded-sm bg-emerald-100 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-700">
              Telemetry v2.4
            </span>
            <span className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500"></span>
              </span>
              Live Sync Active
            </span>
          </div>

          <h1 className="text-4xl font-semibold tracking-tight text-foreground">
            Analytics & Reports
          </h1>
          <p className="mt-2 text-sm text-muted-foreground max-w-md">
            Deep-dive cohort analysis, revenue retention, MRR breakdown, and
            customer acquisition metrics.
          </p>
        </div>

        {/* Linha 2: Barra de Ferramentas */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Lado Esquerdo: Data e Toggles */}
          <div className="flex items-center gap-3">
            {/* Seletor de Data (usa bg-background e borda) */}
            <Select defaultValue="ytd">
              <SelectTrigger className="h-9 w-55 bg-background text-sm font-medium shadow-sm">
                <Calendar
                  className="mr-2 size-4 text-muted-foreground"
                  aria-hidden="true"
                />
                <SelectValue placeholder="Select date range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ytd">Jan 1, 2024 – Dec 31, 2024</SelectItem>
                <SelectItem value="last30">Last 30 Days</SelectItem>
                <SelectItem value="last90">Last 90 Days</SelectItem>
              </SelectContent>
            </Select>

            {/* Toggle Group (Daily, Weekly, Monthly) */}
            <div
              className="flex h-9 items-center rounded-md bg-muted p-1"
              role="group"
              aria-label="Visualization granularity"
            >
              <button className="h-7 rounded-sm px-3 text-xs font-medium text-muted-foreground hover:text-foreground">
                Daily
              </button>
              <button className="h-7 rounded-sm px-3 text-xs font-medium text-muted-foreground hover:text-foreground">
                Weekly
              </button>
              <button className="h-7 rounded-sm bg-background px-3 text-xs font-medium text-foreground shadow-sm">
                Monthly
              </button>
            </div>
          </div>

          {/* Lado Direito: Ações */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" className="h-9 gap-2 text-sm font-medium">
              <ListFilter className="size-4" aria-hidden="true" />
              Schedule
            </Button>
            <Button className="h-9 gap-2 bg-primary text-sm font-medium text-primary-foreground hover:bg-primary/90">
              <Download className="size-4" aria-hidden="true" />
              Export Report
              <ChevronDown className="size-3 opacity-70" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
