import { MetricCard } from "~/components/metric-card";
import type { Route } from "./+types/home";
import {
  Activity,
  Calendar,
  Download,
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
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-foreground">
            Overview
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Welcome back, Alex. Here's what's happening with your revenue and
            customer growth today.
          </p>
        </div>

        <div className="flex w-full items-center justify-between">
          {/* Contentor Cinzento */}
          <div className="flex h-9 items-center rounded-md bg-muted p-1">
            {/* O Select do shadcn */}
            <Select defaultValue="30d">
              <SelectTrigger
                className="h-7 w-37.5 border-0 bg-background shadow-sm focus:ring-0 focus:ring-offset-0 text-sm font-medium gap-2"
                aria-label="Selecionar período de tempo"
              >
                {/* O ícone fica ao lado do SelectValue. O shadcn distribui o espaço com flex. */}
                <Calendar
                  className="size-4 text-muted-foreground shrink-0"
                  aria-hidden="true"
                />
                <SelectValue placeholder="Período" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="7d">Last 7 Days</SelectItem>
                <SelectItem value="30d">Last 30 Days</SelectItem>
                <SelectItem value="90d">Last 90 Days</SelectItem>
                <SelectItem value="1y">Last Year</SelectItem>
              </SelectContent>
            </Select>

            {/* Texto comparativo */}
            <div className="flex items-center px-3 text-sm text-muted-foreground">
              <span className="text-xs font-medium uppercase tracking-wider mr-1">
                vs
              </span>
              <span>Prev. Period</span>
            </div>
          </div>

          {/* Botão de Download */}
          <Button
            variant="outline"
            className="h-9 gap-2 bg-background shadow-sm text-sm font-medium"
            aria-label="Descarregar relatório"
          >
            <Download
              className="size-4 text-muted-foreground"
              aria-hidden="true"
            />
            Download Report
          </Button>
        </div>
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
