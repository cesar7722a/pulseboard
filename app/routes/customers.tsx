import { MetricCard } from "~/components/metric-card";
import type { Route } from "./+types/home";
import { Activity, RefreshCw, Users, Wallet } from "lucide-react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Customers() {
  return (
    <div className="flex flex-col gap-6">
      {/* Cabeçalho da Página */}
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">
          Customers Overview
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          Monitor key performance metrics and customer acquisition trends.
        </p>
      </div>

      {/* Grelha de KPIs */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total Revenue"
          value="$48,295.00"
          icon={<Wallet className="size-4" />}
          delta="+14.2%"
          trend="up"
          deltaLabel="vs last month"
          footerLabel="Goal: $50,000"
          footerValue="96.6%"
        />

        <MetricCard
          title="Total Customers"
          value="2,845"
          icon={<Users className="size-4" />}
          delta="+8.1%"
          trend="up"
          deltaLabel="vs last month"
          footerLabel="Acquisition Velocity"
          footerValue="+214 new"
          footerValueColor="text-emerald-600 dark:text-emerald-400"
        />

        <MetricCard
          title="Active Subscriptions"
          value="1,924"
          icon={<RefreshCw className="size-4" />}
          delta="+12.5%"
          trend="up"
          deltaLabel="vs last month"
          footerLabel="Renewal Benchmark"
          footerValue="89.2% rate"
        />

        <MetricCard
          title="Monthly Churn Rate"
          value="2.4%"
          icon={<Activity className="size-4" />}
          delta="-0.6%"
          trend="down" // No churn, descer é bom (por isso o texto do footer é verde)
          deltaLabel="favorable trend"
          footerLabel="SaaS Benchmark"
          footerValue="-0.8% below"
          footerValueColor="text-emerald-600 dark:text-emerald-400"
        />
      </div>
    </div>
  );
}
