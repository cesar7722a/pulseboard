import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

const healthMetrics = [
  { label: "Uptime 30d", value: "99.98%" },
  { label: "Webhook Lat", value: "42ms" },
  { label: "Live Sockets", value: "412" },
];

export function ServiceHealth() {
  return (
    // shrink-0 impede que este cartão seja esmagado
    <Card className="shadow-card border-border flex flex-col shrink-0">
      <CardHeader className="flex flex-row items-center justify-between pb-3">
        <CardTitle className="text-headline-md font-semibold">
          Service Health & API
        </CardTitle>

        <div className="flex items-center gap-1.5">
          <span className="relative flex size-2" aria-hidden="true">
            <span className="absolute inline-flex size-full animate-pulse rounded-full bg-success opacity-75"></span>
            <span className="relative inline-flex size-2 rounded-full bg-success"></span>
          </span>
          <span className="text-label-sm font-medium text-success">
            All Operational
          </span>
        </div>
      </CardHeader>

      <CardContent className="pb-5">
        <div className="flex w-full divide-x divide-border rounded-md border border-border bg-muted/20 overflow-hidden">
          {healthMetrics.map((metric, index) => (
            <div
              key={index}
              className="flex flex-1 flex-col items-center justify-center py-4 px-2"
            >
              <span className="text-label-sm text-muted-foreground mb-1.5">
                {metric.label}
              </span>
              <span className="text-lg font-semibold text-foreground tabular-nums leading-none">
                {metric.value}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
