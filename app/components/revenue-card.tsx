import { revenueTrends } from "~/data/analytics";
import { RevenueAreaChart } from "./charts/revenue-area-chart";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export function RevenueCard() {
  return (
    <Card className="col-span-1 lg:col-span-2 shadow-card border-border flex flex-col">
      <CardHeader className="flex flex-col xl:flex-row xl:items-start justify-between gap-4 pb-2">
        <div>
          <div className="flex items-center gap-2">
            <CardTitle className="text-headline-md">
              Revenue Analytics
            </CardTitle>
            <span className="rounded-sm bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
              ARR $579.5k
            </span>
          </div>
          <CardDescription className="text-body-sm mt-1">
            Monthly recurring revenue & net transaction volume over trailing 12
            months
          </CardDescription>
        </div>

        {/* Controlos do Gráfico - Apenas visuais por agora */}
        <div className="flex flex-wrap items-center gap-1 rounded-md bg-muted p-0.5 text-xs">
          <button className="rounded-sm px-2 py-1 font-medium text-foreground bg-background shadow-sm">
            MRR
          </button>
          <button className="rounded-sm px-2 py-1 font-medium text-muted-foreground hover:text-foreground">
            Gross Vol
          </button>
          <div className="w-px h-4 bg-border mx-1" /> {/* Divisor */}
          <button className="rounded-sm px-2 py-1 font-medium text-muted-foreground hover:text-foreground">
            7D
          </button>
          <button className="rounded-sm px-2 py-1 font-medium text-muted-foreground hover:text-foreground">
            30D
          </button>
          <button className="rounded-sm px-2 py-1 font-medium text-muted-foreground hover:text-foreground">
            6M
          </button>
          <button className="rounded-sm px-2 py-1 font-medium text-muted-foreground hover:text-foreground">
            12M
          </button>
        </div>
      </CardHeader>

      <CardContent className="flex-1 pb-4">
        {/* Passamos o array de dados diretamente para o nosso gráfico */}
        <RevenueAreaChart data={revenueTrends} />
      </CardContent>

      {/* Footer do Gráfico */}
      <div className="border-t border-border grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border bg-muted/20">
        <div className="p-4">
          <p className="text-label-sm text-muted-foreground">
            Avg. Order Value (AOV)
          </p>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-headline-md text-foreground">$142.50</span>
            <span className="text-label-sm text-success">+3.8%</span>
          </div>
        </div>
        <div className="p-4">
          <p className="text-label-sm text-muted-foreground">
            Net Expansion MRR
          </p>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-headline-md text-foreground">+$4,120</span>
            <span className="text-label-sm text-success">Healthy</span>
          </div>
        </div>
        <div className="p-4">
          <p className="text-label-sm text-muted-foreground">
            Est. Customer Lifetime Value (LTV)
          </p>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-headline-md text-foreground">$1,840</span>
            <span className="text-label-sm text-muted-foreground">
              4.2x CAC
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}
