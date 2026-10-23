import {
  ArrowUpRight,
  CreditCard,
  UserPlus,
  Zap,
  Settings,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { ScrollArea } from "~/components/ui/scroll-area";
import { recentActivities, type ActivityType } from "~/data/activities";

// Mapeamento de ícones e cores baseados no tipo de atividade
const activityConfig: Record<
  ActivityType,
  { icon: React.ElementType; colorClass: string }
> = {
  upgrade: {
    icon: ArrowUpRight,
    colorClass: "bg-success-surface text-success border border-success-border",
  },
  payment: {
    icon: CreditCard,
    colorClass: "bg-muted text-muted-foreground border border-border",
  },
  onboard: {
    icon: UserPlus,
    colorClass: "bg-info-surface text-info border border-info-border",
  },
  settings: {
    icon: Settings,
    colorClass: "bg-muted text-muted-foreground border border-border",
  },
  webhook: {
    icon: Zap,
    colorClass: "bg-warning-surface text-warning border border-warning-border",
  },
};

export function ActivityStream() {
  return (
    <Card className="col-span-1 shadow-card border-border flex flex-col h-full max-h-115">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="flex items-center gap-2">
          <CardTitle className="text-headline-md">Activity Stream</CardTitle>
          {/* Indicador de Live (Pisca) */}
          <span className="relative flex size-2" aria-hidden="true">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-75"></span>
            <span className="relative inline-flex size-2 rounded-full bg-success"></span>
          </span>
        </div>
        <span className="text-label-sm text-muted-foreground">Real-time</span>
      </CardHeader>

      <CardContent className="p-0 flex-1 overflow-hidden">
        <ScrollArea className="h-full">
          <div className="flex flex-col p-4 pt-2">
            {recentActivities.map((activity) => {
              const config = activityConfig[activity.type];
              const Icon = config.icon;

              return (
                <div
                  key={activity.id}
                  className="flex items-start gap-3 py-3 border-b border-border/50 last:border-0 group cursor-default"
                >
                  {/* Ícone */}
                  <div
                    className={`flex size-8 shrink-0 items-center justify-center rounded-md mt-0.5 ${config.colorClass}`}
                  >
                    <Icon className="size-4" aria-hidden="true" />
                  </div>

                  {/* Textos */}
                  <div className="flex flex-col gap-0.5">
                    <span className="text-body-sm font-medium text-foreground leading-tight">
                      {activity.title}
                    </span>
                    <div className="flex items-center gap-1.5 text-label-sm text-muted-foreground">
                      <span>{activity.subtitle}</span>
                      <span aria-hidden="true">•</span>
                      <span>{activity.time}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
