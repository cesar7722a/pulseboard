import { createColumnHelper } from "@tanstack/react-table";
import type { DataTableFeatures } from "~/components/data-table/data-table-features";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Avatar, AvatarFallback } from "~/components/ui/avatar";
import { Pencil, X, CheckCircle2 } from "lucide-react";
import { format } from "date-fns";
import { customers } from "~/data/customers";
import type { Subscription } from "~/types/dashboard";

const columnHelper = createColumnHelper<DataTableFeatures, Subscription>();

export const columns = columnHelper.columns([
  // 1. Cliente & Empresa
  columnHelper.accessor("customerId", {
    header: "CUSTOMER & COMPANY",
    cell: ({ row }) => {
      const customer = customers.find((c) => c.id === row.original.customerId);
      return (
        <div className="flex items-center gap-3">
          <Avatar className="size-8 rounded-md bg-muted">
            <AvatarFallback className="text-[10px] font-medium text-muted-foreground">
              {customer?.avatar || "??"}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="font-medium text-foreground text-sm">
              {customer ? customer.name : "Unknown"}
            </span>
            <span className="text-[11px] text-muted-foreground">
              {customer ? customer.email : "-"}
            </span>
          </div>
        </div>
      );
    },
  }),

  // 2. Plano
  columnHelper.accessor("plan", {
    header: "PLAN",
    cell: ({ row }) => {
      const plan = row.getValue("plan") as string;
      return (
        <Badge
          variant="outline"
          className={
            plan === "Enterprise"
              ? "bg-zinc-900 text-white border-zinc-900 dark:bg-zinc-100 dark:text-zinc-900"
              : plan === "Pro"
                ? "bg-zinc-800 text-white border-zinc-800 dark:bg-zinc-200 dark:text-zinc-900"
                : "bg-muted text-muted-foreground border-border"
          }
        >
          {plan}
        </Badge>
      );
    },
  }),

  // 3. Ciclo de Faturação
  columnHelper.accessor("billingCycle", {
    header: "BILLING CYCLE",
    cell: ({ row }) => {
      const cycle = row.getValue("billingCycle") as string;
      const amount = row.original.amount;
      const formattedAmount = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
      }).format(amount);

      return (
        <div className="flex flex-col">
          <span className="text-sm text-foreground">{cycle}</span>
          <span className="text-[11px] text-muted-foreground">
            {formattedAmount}/{cycle === "Monthly" ? "mo" : "yr"}
          </span>
        </div>
      );
    },
  }),

  // 4. Valor MRR (O valor da subscrição)
  columnHelper.accessor("amount", {
    header: () => <div className="text-right">MRR VALUE</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);
      return (
        <div className="text-right font-medium font-mono text-foreground">
          {formatted}
        </div>
      );
    },
  }),

  // 5. Próxima Fatura
  columnHelper.accessor("nextBillingDate", {
    header: "NEXT INVOICE",
    cell: ({ row }) => {
      const dateValue = row.getValue("nextBillingDate") as string | null;
      const status = row.original.status;

      if (!dateValue) return <span className="text-muted-foreground">-</span>;

      const date = new Date(dateValue);
      if (isNaN(date.getTime()))
        return <span className="text-muted-foreground">-</span>;

      if (status === "Past Due") {
        return (
          <div className="flex flex-col">
            <span className="text-sm font-medium text-danger">
              Retrying in 2 days
            </span>
            <span className="text-[11px] text-muted-foreground">
              Grace Period
            </span>
          </div>
        );
      }

      if (status === "Cancelled") {
        return <span className="text-sm text-muted-foreground">Expired</span>;
      }

      return (
        <span className="text-sm text-muted-foreground">
          {format(date, "MMM d, yyyy")}
        </span>
      );
    },
  }),

  // 6. Status
  columnHelper.accessor("status", {
    header: "STATUS",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      return (
        <Badge
          variant="outline"
          className={
            status === "Active"
              ? "bg-success-surface text-success border-transparent"
              : status === "Past Due"
                ? "bg-danger-surface text-danger border-transparent"
                : status === "Trial"
                  ? "bg-info-surface text-info border-transparent"
                  : "bg-muted text-muted-foreground border-transparent"
          }
        >
          <span
            className={`mr-1.5 size-1.5 rounded-full ${
              status === "Active"
                ? "bg-success"
                : status === "Past Due"
                  ? "bg-danger"
                  : status === "Trial"
                    ? "bg-info"
                    : "bg-muted-foreground"
            }`}
          />
          {status}
        </Badge>
      );
    },
  }),

  // 7. Ações (Editar e Cancelar/Reativar)
  columnHelper.display({
    id: "actions",
    cell: ({ row }) => {
      const isCancelled = row.original.status === "Cancelled";
      return (
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="size-8 text-muted-foreground hover:text-foreground"
          >
            <Pencil className="size-3.5" />
            <span className="sr-only">Editar</span>
          </Button>

          {isCancelled ? (
            <Button
              variant="ghost"
              size="sm"
              className="h-8 text-primary text-xs font-medium"
            >
              Reactivate
            </Button>
          ) : (
            <Button
              variant="ghost"
              size="icon"
              className="size-8 text-muted-foreground hover:text-danger"
            >
              <X className="size-4" />
              <span className="sr-only">Cancelar</span>
            </Button>
          )}
        </div>
      );
    },
  }),
]);
