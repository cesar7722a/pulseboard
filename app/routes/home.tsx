import { MetricCard } from "~/components/metric-card";
import type { Route } from "./+types/home";
import {
  Activity,
  Calendar,
  Download,
  RefreshCcw,
  RefreshCw,
  Users,
  Wallet,
} from "lucide-react";
import { Button } from "~/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { RevenueCard } from "~/components/revenue-card";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Customers() {
  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        {/* Lado Esquerdo: Título e Descrição */}
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-headline-xl text-foreground text-4xl font-bold">
              Overview
            </h1>
            {/* Badge de Live Telemetry usando as cores do sistema */}
            <span className="flex items-center gap-1.5 rounded-full border border-success-border bg-secondary px-2 py-0.5 text-xs text-success">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-75"></span>
                <span className="relative inline-flex size-2 rounded-full bg-success"></span>
              </span>
              Live telemetry
            </span>
          </div>
          <p className="text-body-default text-muted-foreground mt-1">
            Welcome back, Alex. Here's what's happening with your revenue and
            customer growth today.
          </p>
        </div>

        {/* Lado Direito: Filtros e Ações */}
        <div className="flex items-end gap-2">
          {/* Linha de cima: Selects */}
          <div className="flex h-8 items-center rounded-md bg-muted p-0.5">
            <Select defaultValue="30d">
              <SelectTrigger
                className="h-7 w-35 border-0 bg-background shadow-sm focus:ring-0 focus:ring-offset-0 text-label-sm font-medium gap-2"
                aria-label="Selecionar período"
              >
                <Calendar
                  className="size-3.5 text-muted-foreground"
                  aria-hidden="true"
                />
                <SelectValue placeholder="Período" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="30d">Last 30 Days</SelectItem>
                <SelectItem value="90d">Last 90 Days</SelectItem>
              </SelectContent>
            </Select>
            <span className="px-2 text-label-sm text-muted-foreground">
              vs Prev. Period
            </span>
          </div>

          {/* Linha de baixo: Botões de Ação */}
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              className="h-8 gap-2 bg-background text-label-md shadow-sm"
            >
              <Download
                className="size-3.5 text-muted-foreground"
                aria-hidden="true"
              />
              Download Report
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="size-8 bg-background shadow-sm"
              aria-label="Atualizar dados"
            >
              <RefreshCcw
                className="size-3.5 text-muted-foreground"
                aria-hidden="true"
              />
            </Button>
          </div>
        </div>
      </div>
      <RevenueCard />
    </div>
  );
}
