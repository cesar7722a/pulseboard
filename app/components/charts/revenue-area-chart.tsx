import {
  Area,
  AreaChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { ChartTooltip } from "./chart-tooltip";
import {
  formatCurrency,
  formatCompactCurrency,
  formatMonthYear,
  formatMonth,
} from "~/lib/formatters";

// Interface simplificada baseada no teu array
interface RevenueData {
  period: string;
  revenue: number;
}

interface RevenueAreaChartProps {
  data: RevenueData[];
}

export function RevenueAreaChart({ data }: RevenueAreaChartProps) {
  // Formatamos os dados para o gráfico
  const chartData = data.map((item) => ({
    ...item,
    monthLabel: formatMonth(item.period),
  }));

  return (
    <div className="h-70 w-full mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={chartData}
          margin={{ top: 10, right: 0, left: -10, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="hsl(var(--primary))"
                stopOpacity={0.3}
              />
              <stop
                offset="95%"
                stopColor="hsl(var(--primary))"
                stopOpacity={0}
              />
            </linearGradient>
          </defs>

          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="hsl(var(--border))"
          />

          <XAxis
            dataKey="monthLabel"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
            dy={10}
          />

          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
            tickFormatter={(value) => formatCompactCurrency(value)}
          />

          <Tooltip
            content={
              <ChartTooltip
                formatter={(value) => formatCurrency(value)}
                labelFormatter={(label) => label}
              />
            }
            // Para o tooltip apanhar o mês real e não a abreviação
            labelFormatter={(label, payload) => {
              if (payload && payload.length > 0) {
                return formatMonthYear(payload[0].payload.period);
              }
              return label;
            }}
          />

          <Area
            type="monotone"
            dataKey="revenue"
            name="Revenue"
            stroke="hsl(var(--primary))"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorRevenue)"
            activeDot={{
              r: 4,
              fill: "hsl(var(--primary))",
              stroke: "hsl(var(--background))",
              strokeWidth: 2,
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
