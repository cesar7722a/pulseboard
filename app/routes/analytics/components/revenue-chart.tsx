import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "~/components/ui/card";
import { Info } from "lucide-react";
import {
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Line,
  ComposedChart,
} from "recharts";

// Dados mockados baseados na imagem
const chartData = [
  {
    name: "Q3 23",
    newMrr: 5000,
    expansion: 2500,
    contraction: -1000,
    churned: -1500,
    trend: 4000,
  },
  {
    name: "Q4 23",
    newMrr: 6000,
    expansion: 3000,
    contraction: -1200,
    churned: -1800,
    trend: 5000,
  },
  {
    name: "Q1 24",
    newMrr: 7000,
    expansion: 3500,
    contraction: -800,
    churned: -1200,
    trend: 6500,
  },
  {
    name: "Q2 24",
    newMrr: 8000,
    expansion: 4000,
    contraction: -1500,
    churned: -2000,
    trend: 7500,
  },
  {
    name: "Q3 24",
    newMrr: 9000,
    expansion: 4500,
    contraction: -1100,
    churned: -1600,
    trend: 8500,
  },
  {
    name: "Q4 24 (Now)",
    newMrr: 10000,
    expansion: 5000,
    contraction: -1300,
    churned: -1900,
    trend: 9500,
  },
];

export function RevenueChart() {
  return (
    <Card className="shadow-card border-border bg-card">
      <CardHeader className="flex flex-col gap-4 pb-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <CardTitle className="text-headline-md text-foreground">
              Revenue Trends & MRR Waterfall
            </CardTitle>
            <Info
              className="size-4 text-muted-foreground"
              aria-label="Mais informação"
            />
          </div>
          <CardDescription className="text-body-sm text-muted-foreground mt-1 max-w-lg">
            Sequential breakdown across New, Expansion, Contraction, and Churn
            components over 6 quarters.
          </CardDescription>
        </div>

        {/* Legenda Customizada */}
        <div className="flex flex-wrap gap-4 text-xs font-medium text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <div className="size-2.5 rounded-sm bg-[#006948]" /> New MRR{" "}
            <span className="text-emerald-600">+$6.2k</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="size-2.5 rounded-sm bg-[#68dba9]" /> Expansion{" "}
            <span className="text-emerald-600">+$2.4k</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="size-2.5 rounded-sm bg-zinc-400" /> Contraction{" "}
            <span className="text-muted-foreground">-$850</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="size-2.5 rounded-sm bg-[#e11d48]" /> Churned{" "}
            <span className="text-rose-600">-$1.1k</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-4">
        <div className="h-75 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              data={chartData}
              margin={{ top: 20, right: 0, left: -20, bottom: 0 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="hsl(var(--border))"
              />

              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                dy={10}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                tickFormatter={(value) => `$${value / 1000}k`}
              />

              <Tooltip
                cursor={{ fill: "hsl(var(--muted))", opacity: 0.5 }}
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  borderColor: "hsl(var(--border))",
                  borderRadius: "var(--radius-md)",
                  fontSize: "12px",
                  boxShadow: "var(--shadow-popover)",
                }}
              />

              {/* Barras */}
              <Bar
                dataKey="newMrr"
                name="New MRR"
                fill="#006948"
                radius={[2, 2, 0, 0]}
                barSize={24}
              />
              <Bar
                dataKey="expansion"
                name="Expansion"
                fill="#68dba9"
                radius={[2, 2, 0, 0]}
                barSize={24}
              />
              <Bar
                dataKey="contraction"
                name="Contraction"
                fill="#a1a1aa"
                radius={[0, 0, 2, 2]}
                barSize={24}
              />
              <Bar
                dataKey="churned"
                name="Churned"
                fill="#e11d48"
                radius={[0, 0, 2, 2]}
                barSize={24}
              />

              {/* Linha de Tendência */}
              <Line
                type="monotone"
                dataKey="trend"
                stroke="#09090b"
                strokeWidth={2}
                dot={{
                  r: 4,
                  fill: "#ffffff",
                  stroke: "#09090b",
                  strokeWidth: 2,
                }}
                activeDot={{ r: 6 }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        {/* Footer do Gráfico */}
        <div className="mt-6 grid grid-cols-2 gap-4 border-t border-border pt-4 md:grid-cols-4">
          <div>
            <p className="text-label-sm text-muted-foreground mb-1">New MRR</p>
            <p className="text-sm font-semibold text-foreground">+$6,200</p>
            <p className="text-xs text-emerald-600 mt-0.5">
              +24.5% vs baseline
            </p>
          </div>
          <div>
            <p className="text-label-sm text-muted-foreground mb-1">
              Expansion MRR
            </p>
            <p className="text-sm font-semibold text-foreground">+$2,400</p>
            <p className="text-xs text-muted-foreground mt-0.5">
              Upgrades & addons
            </p>
          </div>
          <div>
            <p className="text-label-sm text-muted-foreground mb-1">
              Contraction MRR
            </p>
            <p className="text-sm font-semibold text-foreground">-$850</p>
            <p className="text-xs text-muted-foreground mt-0.5">
              Seat downgrades
            </p>
          </div>
          <div>
            <p className="text-label-sm text-muted-foreground mb-1">
              Churned MRR
            </p>
            <p className="text-sm font-semibold text-foreground">-$1,120</p>
            <p className="text-xs text-muted-foreground mt-0.5">
              1.4% gross revenue churn
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
