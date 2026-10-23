import { Wallet, Users, RefreshCw, Activity } from "lucide-react";
import { MetricCard } from "~/components/metric-card";
import { kpiStats, type KPIStat } from "~/data/analytics";

// Função auxiliar para formatar o valor do KPI
function formatKPIValue(value: number, format: KPIStat["format"]) {
  switch (format) {
    case "currency":
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
      }).format(value);
    case "percentage":
      return `${value.toFixed(1)}%`;
    case "ratio":
      return `${value.toFixed(1)}x`;
    case "number":
    default:
      return new Intl.NumberFormat("en-US").format(value);
  }
}

export function OverviewKPIs() {
  // Vamos buscar os primeiros 4 KPIs (ou podes filtrar por key se preferires)
  const topKPIs = kpiStats.slice(0, 4);

  // Mapeamento de ícones baseado na key do KPI
  const iconMap: Record<string, React.ReactNode> = {
    totalRevenue: <Wallet className="size-4" />,
    totalCustomers: <Users className="size-4" />,
    activeSubscriptions: <RefreshCw className="size-4" />,
    churnRate: <Activity className="size-4" />,
  };

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {topKPIs.map((kpi) => {
        // Definir o footer dinamicamente com base no KPI
        let footerLabel = "Target";
        let footerValue = "On track";
        let footerValueColor = "text-success";

        if (kpi.key === "totalRevenue") {
          footerLabel = "Goal: $50,000";
          footerValue = "96.6%";
          footerValueColor = "text-foreground";
        } else if (kpi.key === "totalCustomers") {
          footerLabel = "Acquisition Velocity";
          footerValue = "+214 new";
          footerValueColor = "text-success";
        } else if (kpi.key === "activeSubscriptions") {
          footerLabel = "Renewal Benchmark";
          footerValue = "89.2% rate";
          footerValueColor = "text-foreground";
        } else if (kpi.key === "churnRate") {
          footerLabel = "SaaS Benchmark";
          footerValue = "-0.8% below";
          footerValueColor = "text-success";
          // Para o churn, descer é bom, então invertemos a label
        }

        return (
          <MetricCard
            key={kpi.id}
            title={kpi.label}
            value={formatKPIValue(kpi.value, kpi.format)}
            icon={iconMap[kpi.key] || <Activity className="size-4" />}
            delta={`${kpi.change > 0 ? "+" : ""}${kpi.change}%`}
            trend={kpi.trend}
            deltaLabel={
              kpi.key === "churnRate" ? "favorable trend" : "vs last month"
            }
            footerLabel={footerLabel}
            footerValue={footerValue}
            footerValueColor={footerValueColor}
          />
        );
      })}
    </div>
  );
}
