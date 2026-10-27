import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { DatabaseZap } from "lucide-react";
import { toast } from "sonner";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "~/components/ui/alert-dialog";

export function CrudInteractionCenter() {
  const [addModalOpen, setAddModalOpen] = useState(false);

  return (
    <div className="mt-8">
      {/* Cabeçalho da Secção */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <DatabaseZap className="size-5 text-foreground" />
          <h2 className="text-headline-md font-semibold text-foreground">
            CRUD Interaction Center & State Previews
          </h2>
        </div>
        <span className="text-body-sm text-muted-foreground">
          Live validation demo & modal controls
        </span>
      </div>

      {/* Grelha de 3 Colunas */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {/* COLUNA 1: Customer Modals */}
        <Card className="bg-muted/30 border-none shadow-none flex flex-col">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Customer Modals</CardTitle>
            <CardDescription className="text-sm leading-relaxed">
              Test creating accounts with real-time field validation, or edit
              pre-populated telemetry records.
            </CardDescription>
          </CardHeader>
          {/* O mt-auto empurra os botões para o fundo do card, mantendo alinhamento perfeito entre colunas */}
          <CardContent className="mt-auto pt-4 flex flex-row items-center gap-2">
            <Dialog open={addModalOpen} onOpenChange={setAddModalOpen}>
              <DialogTrigger>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Launch Add Modal
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Customer</DialogTitle>
                  <DialogDescription>
                    This is a placeholder for your Add Customer form.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>

            <Button
              variant="outline"
              className="bg-background"
              onClick={() => toast.info("Opening edit modal...")}
            >
              Launch Edit Modal
            </Button>
          </CardContent>
        </Card>

        {/* COLUNA 2: Destructive Safeguard */}
        <Card className="bg-muted/30 border-none shadow-none flex flex-col">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Destructive Safeguard</CardTitle>
            <CardDescription className="text-sm leading-relaxed">
              Audit deletion confirmation triggers, cascading data warnings, and
              subscription termination notices.
            </CardDescription>
          </CardHeader>
          <CardContent className="mt-auto pt-4 flex flex-row items-center gap-2">
            <AlertDialog>
              <AlertDialogTrigger>
                <Button
                  variant="outline"
                  className="bg-danger-surface text-danger hover:bg-danger-surface/80 border-danger-border"
                >
                  Trigger Delete Dialog
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    the customer and remove their data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction className="bg-danger text-danger-foreground hover:bg-danger/90">
                    Delete
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </CardContent>
        </Card>

        {/* COLUNA 3: Toast Notifications */}
        <Card className="bg-muted/30 border-none shadow-none flex flex-col">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Toast Notifications</CardTitle>
            <CardDescription className="text-sm leading-relaxed">
              Review system response notifications, error payloads, and
              confirmation states.
            </CardDescription>
          </CardHeader>
          <CardContent className="mt-auto pt-4 flex flex-row items-center gap-2">
            <Button
              variant="outline"
              className="bg-background"
              onClick={() => {
                toast.success("Success!", {
                  description: "Customer record has been updated successfully.",
                });
              }}
            >
              Success Toast
            </Button>
            <Button
              variant="outline"
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90 border-transparent"
              onClick={() => {
                toast.error("Error!", {
                  description: "Failed to update customer. Please try again.",
                });
              }}
            >
              Error Toast
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
