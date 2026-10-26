import { createColumnHelper } from "@tanstack/react-table";
import type { DataTableFeatures } from "~/components/data-table/data-table-features";
import { Badge } from "~/components/ui/badge";

export type Transaction = {
  id: string;
  customer: string;
  email: string;
  amount: number;
  status: "success" | "pending" | "failed";
  date: string;
};

// 1. O Helper recebe as Features e o Tipo
const columnHelper = createColumnHelper<DataTableFeatures, Transaction>();

// 2. Exporta como columnHelper.columns
export const columns = columnHelper.columns([
  {
    accessorKey: "customer",
    header: "Customer",
    cell: ({ row }) => (
      <div className="flex flex-col">
        <span className="font-medium text-foreground">
          {row.getValue("customer")}
        </span>
        <span className="text-xs text-muted-foreground">
          {row.original.email}
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
      return (
        <div className="text-right font-medium font-mono">{formatted}</div>
      );
    },
  },
  {
    accessorKey: "date",
    header: () => <div className="text-right">Date</div>,
    cell: ({ row }) => (
      <div className="text-right text-muted-foreground">
        {row.getValue("date")}
      </div>
    ),
  },
]);
