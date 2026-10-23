import { CustomerGrowthChart } from "~/components/charts/customer-growth-chart";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { customerGrowthData } from "~/data/customers";

export function CustomerGrowthCard() {
  return (
    <Card className="col-span-1 shadow-card border-border flex flex-col h-full">
      <CardHeader className="flex flex-row items-start justify-between pb-2">
        <div>
          <CardTitle className="text-headline-md">Customer Growth</CardTitle>
          <p className="text-body-sm text-muted-foreground mt-1">
            New vs Churned subscribers
          </p>
        </div>
        <span className="rounded-sm bg-success-surface px-1.5 py-0.5 text-label-sm font-medium text-success border border-success-border">
          +342 Q2
        </span>
      </CardHeader>

      <CardContent className="flex-1 pb-4">
        <CustomerGrowthChart data={customerGrowthData} />
      </CardContent>

      {/* Legenda em baixo */}
      <div className="border-t border-border px-4 py-3 flex items-center justify-center gap-6">
        <div className="flex items-center gap-2">
          <div className="size-2.5 rounded-sm bg-primary" aria-hidden="true" />
          <span className="text-label-sm text-muted-foreground">
            New <span className="text-foreground font-medium">(+284)</span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div
            className="size-2.5 rounded-sm bg-destructive"
            aria-hidden="true"
          />
          <span className="text-label-sm text-muted-foreground">
            Churned <span className="text-foreground font-medium">(-42)</span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="size-2.5 rounded-sm bg-muted" aria-hidden="true" />
          <span className="text-label-sm text-muted-foreground">
            Net <span className="text-foreground font-medium">+242</span>
          </span>
        </div>
      </div>
    </Card>
  );
}
