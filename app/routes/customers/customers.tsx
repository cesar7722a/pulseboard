import {
  BadgeCheck,
  Hourglass,
  Slash,
  UserMinus,
  UserRoundX,
  Users,
} from "lucide-react";
import type { Route } from "./+types/customers";
import { CompactMetricCard } from "./components/compact-metric-card";
import { customers, customerStats, type CustomerStat } from "~/data/customers";
import { DataTable } from "~/components/data-table/data-table";
import { columns } from "./components/columns";
import { CrudInteractionCenter } from "./components/crud-interaction-center";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "PulseBoard - Customers" },
    { name: "description", content: "Gerir clientes e subscrições" },
  ];
}

export default function Customers() {
  // 1. Dicionário de Ícones
  const iconMap: Record<string, React.ReactNode> = {
    users: <Users className="size-4" />,
    "badge-check": <BadgeCheck className="size-4" />,
    hourglass: <Hourglass className="size-4" />,
    "user-round-x": <UserRoundX className="size-4" />,
  };

  // 2. Dicionário de Cores (Mapeado para o teu Design System)
  // Nota: Se tiveres um 'purple' no teu CSS, podes usar bg-purple-50.
  // Caso contrário, mapeei o purple para uma cor neutra ou aviso para adicionares.
  const colorMap: Record<CustomerStat["color"], { bg: string; text: string }> =
    {
      green: { bg: "bg-success-surface", text: "text-success" },
      red: { bg: "bg-danger-surface", text: "text-danger" },
      gray: { bg: "bg-muted", text: "text-muted-foreground" },
      purple: {
        bg: "bg-indigo-50 dark:bg-indigo-950/30",
        text: "text-indigo-600 dark:text-indigo-400",
      },
    };

  // 3. Formatador de Números
  const formatValue = (value: number, format: "number" | "percentage") => {
    if (format === "percentage") return `${value}%`;
    return new Intl.NumberFormat("en-US").format(value);
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Cabeçalho da Página */}
      <div className="flex flex-col gap-1">
        {/* Breadcrumb */}
        <div className="flex items-center gap-1.5 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
          <span className="text-primary">Pulse Telemetry</span>
          <Slash className="size-3" aria-hidden="true" />
          <span className="text-foreground">Accounts</span>
        </div>

        {/* Título e Descrição */}
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground mt-1">
            Customers
          </h1>
          <p className="text-body-default text-muted-foreground mt-1">
            Manage your client accounts, view subscription statuses, and monitor
            account health.
          </p>
        </div>
      </div>

      {/* 4. Renderizar os KPI Cards dinamicamente */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {customerStats.map((stat) => (
          <CompactMetricCard
            key={stat.id}
            title={stat.label}
            value={formatValue(stat.value, stat.format)}
            change={stat.change}
            trend={stat.trend}
            description={stat.description}
            icon={iconMap[stat.icon]}
            colorStyles={colorMap[stat.color]}
          />
        ))}
      </div>

      <DataTable
        columns={columns}
        data={customers}
        variant="customers" // Ativa a Toolbar, Barra de Ações e Paginação
        searchKey="name" // Define que a pesquisa vai filtrar pela coluna "name"
      />

      <CrudInteractionCenter />
    </div>
  );
}
