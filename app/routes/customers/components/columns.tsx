import { createColumnHelper } from "@tanstack/react-table";
import type { DataTableFeatures } from "~/components/data-table/data-table-features";
import { Badge } from "~/components/ui/badge";
import { Checkbox } from "~/components/ui/checkbox";
import { Button } from "~/components/ui/button";
import { Avatar, AvatarFallback } from "~/components/ui/avatar";
import { Pencil, Trash2, CheckCircle2, ArrowUpDown } from "lucide-react";
import { format } from "date-fns";

export type Customer = {
  id: number;
  name: string;
  email: string;
  company: string;
  plan: "Pro" | "Enterprise" | "Free";
  status: "Active" | "Pending" | "Inactive";
  joinedAt: string;
  avatar: string;
};

const getMRR = (plan: string) => {
  switch (plan) {
    case "Enterprise":
      return 2400;
    case "Pro":
      return 199;
    default:
      return 0;
  }
};

const columnHelper = createColumnHelper<DataTableFeatures, Customer>();

export const columns = columnHelper.columns([
  // 1. Checkbox (Nota: no columnHelper, podes definir apenas o `id` e omitir o `accessor`)
  columnHelper.display({
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Selecionar tudo"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Selecionar linha"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  }),

  // 2. Cliente
  columnHelper.accessor("name", {
    header: "CUSTOMER",
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <Avatar className="size-8">
          <AvatarFallback className="bg-muted text-muted-foreground text-xs font-medium">
            {row.original.avatar}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="font-medium text-foreground">
            {row.getValue("name")}
          </span>
          <span className="text-[11px] text-muted-foreground">
            ID: CUST-{row.original.id.toString().padStart(4, "0")}
          </span>
        </div>
      </div>
    ),
  }),

  // 3. Email
  columnHelper.accessor("email", {
    header: "EMAIL / DOMAIN",
    cell: ({ row }) => (
      <div className="flex items-center gap-1.5 text-muted-foreground">
        <span>{row.getValue("email")}</span>
        <CheckCircle2 className="size-3.5 text-muted-foreground/50" />
      </div>
    ),
  }),

  // 4. Company
  columnHelper.accessor("company", {
    header: "COMPANY",
    cell: ({ row }) => (
      <span className="text-foreground">{row.getValue("company")}</span>
    ),
  }),

  // 5. Plan
  columnHelper.accessor("plan", {
    header: "CURRENT PLAN",
    cell: ({ row }) => {
      const plan = row.getValue("plan") as string;
      const mrr = getMRR(plan);
      return (
        <div className="flex flex-col items-start gap-1">
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
          <span className="text-[11px] text-muted-foreground ml-1">
            (${mrr.toLocaleString()}/mo)
          </span>
        </div>
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
              : "bg-muted text-muted-foreground border-transparent"
          }
        >
          <span
            className={`mr-1.5 size-1.5 rounded-full ${
              status === "Active" ? "bg-success" : "bg-muted-foreground"
            }`}
          />
          {status}
        </Badge>
      );
    },
  }),

  // 7. MRR (usamos display porque o valor é derivado do plano)
  columnHelper.display({
    id: "mrr",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="-ml-4 h-8"
      >
        MRR <ArrowUpDown className="ml-2 size-3" />
      </Button>
    ),
    cell: ({ row }) => {
      const mrr = getMRR(row.original.plan);
      return (
        <span className="font-medium font-mono text-foreground">
          ${mrr.toLocaleString("en-US", { minimumFractionDigits: 2 })}
        </span>
      );
    },
  }),

  // 8. Joined Date
  // 8. Joined Date
  columnHelper.accessor("joinedAt", {
    header: "JOINED",
    cell: ({ row }) => {
      const dateValue = row.getValue("joinedAt") as string;
      const date = new Date(dateValue);

      // Verifica se a data é válida
      if (isNaN(date.getTime())) {
        return <span className="text-muted-foreground">-</span>;
      }

      return (
        <div className="text-muted-foreground flex flex-col">
          <span>{format(date, "MMM dd,")}</span>
          <span>{format(date, "yyyy")}</span>
        </div>
      );
    },
  }),

  // 9. Actions
  // 9. Actions
  columnHelper.accessor("id", {
    // Usa o ID como base
    id: "actions",
    header: "",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          className="size-8 text-muted-foreground hover:text-foreground"
          onClick={() => console.log("Editar", row.original.id)} // Exemplo de ação
        >
          <Pencil className="size-4" />
          <span className="sr-only">Editar</span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="size-8 text-muted-foreground hover:text-danger"
          onClick={() => console.log("Apagar", row.original.id)}
        >
          <Trash2 className="size-4" />
          <span className="sr-only">Apagar</span>
        </Button>
      </div>
    ),
  }),
]);
