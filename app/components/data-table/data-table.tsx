import * as React from "react";
import { useTable, type ColumnDef, type RowData } from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Mail, RefreshCcw, Trash2, Settings2, Search } from "lucide-react";

import { features, type DataTableFeatures } from "./data-table-features";

interface DataTableProps<TData extends RowData> {
  columns: ColumnDef<DataTableFeatures, TData>[];
  data: TData[];
  variant?: "overview" | "customers";
  searchKey?: string;
}

export function DataTable<TData extends RowData>({
  columns,
  data,
  variant = "overview",
  searchKey = "name",
}: DataTableProps<TData>) {
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useTable({
    features,
    data,
    columns,
    getRowId: (row: any) => row.id?.toString(),
    onRowSelectionChange: setRowSelection,
    state: {
      rowSelection,
    },
    initialState: {
      pagination: {
        pageIndex: 0, // <-- ADICIONA ESTA LINHA
        pageSize: 10, // O TanStack Table usa "pageSize" e não "pageSize"
      },
    },
  });

  const selectedCount = table.getFilteredSelectedRowModel().rows.length;
  const isCustomersView = variant === "customers";

  return (
    <div className="space-y-4">
      {/* TOOLBAR: Só aparece na página de Customers */}
      {isCustomersView && (
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search customers by name, email, or company..."
              value={
                (table.getColumn(searchKey)?.getFilterValue() as string) ?? ""
              }
              onChange={(event) =>
                table.getColumn(searchKey)?.setFilterValue(event.target.value)
              }
              className="h-9 pl-9 bg-background"
            />
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" className="h-9 bg-background">
              All Statuses
            </Button>
            <Button variant="outline" className="h-9 bg-background">
              All Plans
            </Button>
            <Button variant="outline" className="h-9 bg-background gap-2">
              Sort: Newest first <Settings2 className="size-4" />
            </Button>
          </div>
        </div>
      )}

      {/* BARRA DE AÇÕES EM MASSA: Só aparece na página de Customers e se houver seleção */}
      {isCustomersView && selectedCount > 0 && (
        <div className="flex items-center justify-between rounded-md bg-muted/50 px-3 py-1.5 text-sm">
          <div className="flex items-center gap-4">
            <span className="font-medium text-foreground">
              {selectedCount} account{selectedCount > 1 ? "s" : ""} selected
            </span>
            <div className="h-4 w-px bg-border" />
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                className="h-7 gap-1.5 text-muted-foreground hover:text-foreground"
              >
                <Mail className="size-3.5" /> Send Email
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-7 gap-1.5 text-muted-foreground hover:text-foreground"
              >
                <RefreshCcw className="size-3.5" /> Change Plan
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-7 gap-1.5 text-danger hover:bg-danger-surface hover:text-danger"
              >
                <Trash2 className="size-3.5" /> Delete Selected
              </Button>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="h-7 text-muted-foreground"
            onClick={() => table.resetRowSelection()}
          >
            Deselect all
          </Button>
        </div>
      )}

      {/* TABELA */}
      <div className="overflow-hidden rounded-md border border-border bg-card shadow-card">
        <Table>
          <TableHeader className="bg-surface-container-lowest">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow
                key={headerGroup.id}
                className="hover:bg-transparent border-b-border h-10"
              >
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground"
                    >
                      {header.isPlaceholder ? null : (
                        <table.FlexRender header={header} />
                      )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="border-b-border/50 hover:bg-muted/30 h-13 transition-colors data-[state=selected]:bg-muted/50"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="py-2 text-body-default">
                      <table.FlexRender cell={cell} />
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center text-muted-foreground"
                >
                  Nenhum resultado encontrado.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* PAGINAÇÃO: Só aparece na página de Customers */}
      {isCustomersView && (
        <div className="flex items-center justify-between px-1">
          <div className="text-sm text-muted-foreground">
            Showing{" "}
            <span className="font-medium text-foreground">
              {table.getRowModel().rows.length}
            </span>{" "}
            of{" "}
            <span className="font-medium text-foreground">
              {table.getFilteredRowModel().rows.length}
            </span>{" "}
            results
          </div>
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              className="text-muted-foreground"
            >
              Previous
            </Button>

            {/* Simulação visual da paginação */}
            <Button
              variant="ghost"
              size="sm"
              className="size-8 p-0 bg-primary/10 text-primary font-medium"
            >
              1
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="size-8 p-0 text-muted-foreground"
            >
              2
            </Button>
            <span className="px-2 text-muted-foreground">...</span>
            <Button
              variant="ghost"
              size="sm"
              className="size-8 p-0 text-muted-foreground"
            >
              {table.getPageCount()}
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              className="text-muted-foreground"
            >
              Next
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
