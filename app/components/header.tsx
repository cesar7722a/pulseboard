import { Search, Bell, Plus, Activity } from "lucide-react";
import { Input } from "./ui/input";

export function PageHeader() {
  return (
    <header
      className="flex h-16 items-center justify-between border-b border-border bg-background px-6 gap-4"
      aria-label="Cabeçalho da página"
    >
      {/* 1. Lado Esquerdo: Pesquisa */}
      <div className="flex flex-1 items-center gap-4">
        <form
          role="search"
          className="relative w-full max-w-md"
          onSubmit={(e) => e.preventDefault()}
        >
          {/* Label invisível para acessibilidade */}
          <label htmlFor="global-search" className="sr-only">
            Pesquisar telemetria e utilizadores
          </label>

          <Search
            className="absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />

          <Input
            id="global-search"
            type="search"
            placeholder="Search telemetry, users..."
            className="w-full bg-surface-container-lowest pl-9 pr-12 h-9 focus-visible:ring-1 focus-visible:ring-ring"
          />

          {/* Atalho visual - escondido de leitores de ecrã porque já está no placeholder ou é implícito */}
          <div
            className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2"
            aria-hidden="true"
          >
            <kbd className="flex h-5 items-center gap-0.5 rounded border border-border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
              <span className="text-xs">⌘</span>K
            </kbd>
          </div>
        </form>
      </div>

      {/* 2. Lado Direito: Controlos e Ações */}
      <div className="flex items-center gap-4">
        {/* Seletor de Tempo (Segmented Control) 
            Usamos role="radiogroup" porque apenas um pode estar selecionado */}
        <div
          className="flex h-9 items-center rounded-md bg-muted p-1"
          role="radiogroup"
          aria-label="Selecionar período de tempo"
        >
          <button
            role="radio"
            aria-checked="true"
            className="flex h-full items-center justify-center rounded-sm bg-background px-3 text-sm font-medium text-foreground shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Past 30d
          </button>
          <button
            role="radio"
            aria-checked="false"
            className="flex h-full items-center justify-center rounded-sm px-3 text-sm font-medium text-muted-foreground transition-all hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Quarter
          </button>
        </div>

        {/* Botão de Notificações */}
        <button
          type="button"
          className="relative flex size-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label="Ver notificações (3 não lidas)"
        >
          <Bell className="size-4" aria-hidden="true" />
          {/* Indicador visual de não lidas, escondido para leitores de ecrã porque o aria-label já o diz */}
          <span
            className="absolute right-2 top-2 flex size-2"
            aria-hidden="true"
          >
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-destructive opacity-75"></span>
            <span className="relative inline-flex size-2 rounded-full bg-destructive"></span>
          </span>
        </button>

        {/* Quick Action Button */}
        <button
          type="button"
          className="flex h-9 items-center gap-1.5 rounded-md bg-primary px-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <Plus className="size-4" aria-hidden="true" />
          Quick Action
        </button>

        {/* Avatar Escuro (Botão de Perfil) */}
        <button
          type="button"
          className="flex size-9 items-center justify-center rounded-full bg-zinc-950 text-emerald-400 transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          aria-label="Abrir menu de utilizador"
          aria-haspopup="menu"
          aria-expanded="false"
        >
          <Activity className="size-5" aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}
