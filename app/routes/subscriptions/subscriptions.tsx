import type { Route } from "./+types/subscriptions";
import {
  AlertCircle,
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  CreditCard,
  Download,
  PieChart,
  Plus,
  RefreshCcw,
  TrendingUp,
  Users,
} from "lucide-react";
import { DataTable } from "~/components/data-table/data-table";
import { columns } from "./components/columns";
import { subscriptionPlans, subscriptions } from "~/data/subscriptions";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { cn } from "cn";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "PulseBoard - Subscriptions" },
    { name: "description", content: "Gerir subscrições e faturação" },
  ];
}

export interface SubscriptionStat {
  id: number;
  key: string;
  label: string;
  value: number;
  format: "number" | "currency" | "percentage";
  change: number;
  trend: "up" | "down" | "stable";
  description: string;
  icon: string;
  color: "green" | "purple" | "red" | "gray";
}

export const subscriptionStats: SubscriptionStat[] = [
  {
    id: 1,
    key: "mrr",
    label: "Monthly Recurring Revenue",
    value: 124500,
    format: "currency",
    change: 8.2,
    trend: "up",
    description: "vs. last month",
    icon: "trending-up",
    color: "green",
  },
  {
    id: 2,
    key: "activeSubscriptions",
    label: "Active Subscriptions",
    value: 2418,
    format: "number",
    change: 124,
    trend: "up",
    description: "new this month",
    icon: "credit-card",
    color: "purple",
  },
  {
    id: 3,
    key: "upcomingRenewals",
    label: "Upcoming Renewals (30D)",
    value: 342,
    format: "number",
    change: 14,
    trend: "stable",
    description: "14% of total",
    icon: "refresh-cw",
    color: "gray",
  },
  {
    id: 4,
    key: "pastDue",
    label: "Past Due Amount",
    value: 4200,
    format: "currency",
    change: 2.1,
    trend: "down",
    description: "needs attention",
    icon: "alert-circle",
    color: "red",
  },
];

export default function SubscriptionsPage() {
  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between mb-6">
        {/* Lado Esquerdo: Título e Descrição */}
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold tracking-tight text-foreground">
              Subscriptions
            </h1>
            <Badge
              variant="outline"
              className="border-transparent bg-success-surface text-success text-[10px] font-bold uppercase tracking-wider px-2 py-0.5"
            >
              Real-Time Sync
            </Badge>
          </div>
          <p className="text-body-default text-muted-foreground mt-1 max-w-md">
            Oversee recurring billing cycles, tier distributions, upgrades,
            downgrades, and MRR health.
          </p>
        </div>

        {/* Lado Direito: Controlos */}
        <div className="flex flex-col items-end gap-3">
          {/* Linha de cima: Toggle Mensal/Anual */}
          <div className="flex h-8 items-center rounded-md bg-muted p-0.5">
            <button className="rounded-sm bg-background px-3 py-1 text-xs font-medium text-foreground shadow-sm">
              Monthly
            </button>
            <button className="rounded-sm px-3 py-1 text-xs font-medium text-muted-foreground hover:text-foreground flex items-center gap-1.5">
              Annual{" "}
              <span className="text-[10px] text-success font-bold bg-success/10 px-1 rounded">
                20% OFF
              </span>
            </button>
          </div>

          {/* Linha de baixo: Botões */}
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              className="h-9 gap-2 bg-background text-sm font-medium"
            >
              <Download className="size-4 text-muted-foreground" />
              Export Summary
            </Button>
            <Button className="h-9 gap-1.5 bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-medium">
              <Plus className="size-4" />
              New Subscription
            </Button>
          </div>
        </div>
      </div>

      {/* KPI Cards (Agora gerados dinamicamente) */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {/* Card 1 */}
        <div className="rounded-lg border border-border bg-card p-5 shadow-card flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <span className="text-label-md font-medium text-muted-foreground">
              Total Subscriptions
            </span>
            <div className="flex size-7 items-center justify-center rounded-md bg-muted text-muted-foreground">
              <Users className="size-4" />
            </div>
          </div>
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-semibold text-foreground font-mono">
                1,924
              </span>
              <span className="text-xs font-medium text-success bg-success-surface px-1.5 py-0.5 rounded-sm border border-success-border">
                ↑ 12.5%
              </span>
            </div>
            <div className="flex justify-between text-xs mt-4 text-muted-foreground">
              <span>Active cohort retention</span>
              <span className="font-medium text-foreground">97.8%</span>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="rounded-lg border border-border bg-card p-5 shadow-card flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <span className="text-label-md font-medium text-muted-foreground">
              Monthly Recurring Revenue
            </span>
            <div className="flex size-7 items-center justify-center rounded-md bg-muted text-muted-foreground">
              <CreditCard className="size-4" />
            </div>
          </div>
          <div>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-semibold text-foreground font-mono">
                $38,420
              </span>
              <span className="text-sm text-muted-foreground">.00</span>
              <span className="text-xs font-medium text-success ml-2">
                ↑ 15.8%
              </span>
            </div>
            <div className="flex justify-between text-xs mt-4 text-muted-foreground">
              <span>Run-rate (ARR)</span>
              <span className="font-medium text-foreground">$461,040</span>
            </div>
          </div>
        </div>

        {/* Card 3 (Com Barra de Progresso) */}
        <div className="rounded-lg border border-border bg-card p-5 shadow-card flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <span className="text-label-md font-medium text-muted-foreground">
              Active Plans Breakdown
            </span>
            <div className="flex size-7 items-center justify-center rounded-md bg-muted text-muted-foreground">
              <PieChart className="size-4" />
            </div>
          </div>
          <div>
            {/* Barra de progresso */}
            <div className="flex h-2 w-full overflow-hidden rounded-full bg-muted my-2">
              <div className="w-[73%] bg-primary" />
              <div className="w-[16%] bg-info" />
              <div className="w-[11%] bg-border" />
            </div>
            <div className="flex items-center gap-3 text-[10px] text-muted-foreground mt-3">
              <div className="flex items-center gap-1">
                <span className="size-1.5 rounded-full bg-primary" /> 1,420 Pro
              </div>
              <div className="flex items-center gap-1">
                <span className="size-1.5 rounded-full bg-info" /> 312 Ent
              </div>
              <div className="flex items-center gap-1">
                <span className="size-1.5 rounded-full bg-border" /> 192 St
              </div>
            </div>
          </div>
        </div>

        {/* Card 4 (Com fundo diferente) */}
        <div className="rounded-lg border border-border bg-muted/30 p-5 shadow-card flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <span className="text-label-md font-medium text-muted-foreground">
              Cancelled / At-Risk
            </span>
            <div className="flex size-7 items-center justify-center rounded-md bg-background text-muted-foreground shadow-sm">
              <AlertTriangle className="size-4" />
            </div>
          </div>
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-semibold text-foreground font-mono">
                38
              </span>
              <span className="text-xs font-medium text-danger bg-danger-surface px-1.5 py-0.5 rounded-sm border border-danger-border">
                ↓ 14.0%
              </span>
            </div>
            <div className="flex justify-between text-xs mt-4 text-muted-foreground">
              <span>Voluntary Churn</span>
              <span className="font-medium text-foreground">0.62%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        {/* Cabeçalho da Secção */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
          <div>
            <h2 className="text-headline-md font-semibold text-foreground">
              Tier Performance & Distributions
            </h2>
            <p className="text-body-sm text-muted-foreground">
              Comparative analysis across active subscription catalogs.
            </p>
          </div>
          <Button
            variant="link"
            className="text-primary text-sm gap-1 p-0 h-auto"
          >
            Modify Catalog Plans <ArrowRight className="size-4" />
          </Button>
        </div>

        {/* Grelha de Planos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {subscriptionPlans.map((plan) => (
            <div
              key={plan.id}
              className={cn(
                "relative flex flex-col rounded-xl border bg-card shadow-card",
                plan.isPopular
                  ? "border-primary ring-1 ring-primary shadow-md md:-mt-2 md:mb-2"
                  : "border-border",
              )}
            >
              {/* Badge "MOST POPULAR" flutuante (só no cartão do meio) */}
              {plan.isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground border-none text-[10px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full shadow-sm">
                    Most Popular
                  </Badge>
                </div>
              )}

              <div className="p-6 flex flex-col h-full">
                {/* Topo: Nome e Tag */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-bold text-foreground tracking-wide uppercase">
                    {plan.name}
                  </h3>
                  <Badge
                    variant="outline"
                    className={cn(
                      "text-[11px] font-medium border-transparent",
                      plan.isPopular
                        ? "bg-success-surface text-success"
                        : "bg-muted text-muted-foreground",
                    )}
                  >
                    {plan.tierLabel}
                  </Badge>
                </div>

                {/* Preço */}
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-3xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {plan.priceUnit}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mb-6 min-h-8">
                  {plan.description}
                </p>

                {/* Estatísticas do Plano */}
                <div className="rounded-lg bg-muted/50 p-3 mb-6 flex flex-col gap-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      Active Subscriptions
                    </span>
                    <span className="font-medium text-foreground font-mono">
                      {plan.activeSubscriptions.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Generated MRR</span>
                    <span className="font-medium text-foreground font-mono">
                      {plan.generatedMRR}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <ul className="flex flex-col gap-3 mb-8 flex-1">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="size-4 text-success shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Botão de Ação */}
                <Button
                  variant={plan.isPopular ? "default" : "secondary"}
                  className={cn(
                    "w-full mt-auto",
                    plan.isPopular
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                      : "bg-muted text-foreground hover:bg-muted/80",
                  )}
                >
                  {plan.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tabela de Subscrições */}
      <DataTable
        columns={columns}
        data={subscriptions}
        variant="customers"
        searchKey="plan" // A pesquisa vai filtrar por "Pro", "Enterprise", etc.
      />
    </div>
  );
}
