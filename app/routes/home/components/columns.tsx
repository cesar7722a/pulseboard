import { Badge } from "~/components/ui/badge";
import { ColumnDef } from "@tanstack/react-table";

export type RecentActivity = {
  id: string;
  customer: string;
  plan: string;
  amount: number;
  status: "success" | "pending" | "failed";
  date: string;
};

export const recentActivityColumns: ColumnDef<RecentActivity>[] = [
  {
    accessorKey: "customer",
    header: "Customer",
    cell: ({ row }) => (
      <div className="flex flex-col">
        <span className="font-medium text-foreground">
          {row.getValue("customer")}
        </span>
        <span className="text-body-sm text-muted-foreground">
          {row.original.plan}
        </span>
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      return (
        <Badge
          variant="outline"
          className={
            status === "success"
              ? "bg-success-surface text-success border-success-border"
              : status === "pending"
                ? "bg-warning-surface text-warning border-warning-border"
                : "bg-danger-surface text-danger border-danger-border"
          }
        >
          {status === "success"
            ? "Concluído"
            : status === "pending"
              ? "Pendente"
              : "Falhou"}
        </Badge>
      );
    },
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);
      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
];
