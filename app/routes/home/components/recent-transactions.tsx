import { DataTable } from "~/components/data-table/data-table";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "~/components/ui/card";
import { columns, type Transaction } from "./table/columns";

// Dados de exemplo (idealmente viriam de um loader do React Router)
const data: Transaction[] = [
  {
    id: "1",
    customer: "Acme Corp",
    email: "contact@acme.com",
    amount: 1250.0,
    status: "success",
    date: "Há 2 min",
  },
  {
    id: "2",
    customer: "Globex Inc",
    email: "billing@globex.com",
    amount: 299.0,
    status: "pending",
    date: "Há 15 min",
  },
  {
    id: "3",
    customer: "Soylent Corp",
    email: "admin@soylent.com",
    amount: 49.0,
    status: "success",
    date: "Há 1 hora",
  },
  {
    id: "4",
    customer: "Initech",
    email: "support@initech.com",
    amount: 890.0,
    status: "failed",
    date: "Há 2 horas",
  },
  {
    id: "5",
    customer: "Umbrella Corp",
    email: "hr@umbrella.com",
    amount: 2400.0,
    status: "success",
    date: "Há 3 horas",
  },
];

export function RecentTransactions() {
  return (
    <Card className="shadow-card border-border bg-card">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle className="text-headline-md">
            Recent Transactions
          </CardTitle>
          <CardDescription className="text-body-sm text-muted-foreground">
            Últimos pagamentos recebidos.
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="pt-2">
        <DataTable columns={columns} data={data} />
      </CardContent>
    </Card>
  );
}
