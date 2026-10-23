import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { ChartTooltip } from "./chart-tooltip";
import { formatNumber } from "~/lib/formatters";

interface CustomerGrowthChartProps {
  data: any[]; // Substitui pelo teu tipo CustomerGrowthData[]
}

export function CustomerGrowthChart({ data }: CustomerGrowthChartProps) {
  return (
    <div className="h-[200px] w-full mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 10, right: 0, left: -20, bottom: 0 }}
          barGap={4}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="hsl(var(--border))"
          />

          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }}
            dy={10}
          />

          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }}
            tickFormatter={(value) => formatNumber(value)}
          />

          <Tooltip
            cursor={{ fill: "hsl(var(--muted))", opacity: 0.5 }}
            content={<ChartTooltip formatter={(val) => `${val} customers`} />}
          />

          {/* Barra de Novos Clientes */}
          <Bar
            dataKey="newCustomers"
            name="New"
            fill="hsl(var(--primary))"
            radius={[2, 2, 0, 0]}
            barSize={12}
          />

          {/* Barra de Churn (Clientes Perdidos) */}
          <Bar
            dataKey="churnedCustomers"
            name="Churned"
            fill="hsl(var(--destructive))"
            radius={[2, 2, 0, 0]}
            barSize={12}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
