import type { Activity } from "../types/dashboard";

// Adiciona isto ao teu ficheiro de dados

export type ActivityType =
  | "upgrade"
  | "payment"
  | "onboard"
  | "settings"
  | "webhook";

export interface ActivityLog {
  id: number;
  type: ActivityType;
  title: string;
  subtitle: string;
  time: string;
}

export const recentActivities: ActivityLog[] = [
  {
    id: 1,
    type: "upgrade",
    title: "Acme Labs upgraded to Enterprise",
    subtitle: "+$2,201 MRR",
    time: "12m ago",
  },
  {
    id: 2,
    type: "payment",
    title: "Payment verified for #INV-2024-884",
    subtitle: "$499.00 processed",
    time: "45m ago",
  },
  {
    id: 3,
    type: "onboard",
    title: "Marcus Brody onboarded workspace",
    subtitle: "OrbitScale.org",
    time: "2h ago",
  },
  {
    id: 4,
    type: "settings",
    title: "Nexus Tech adjusted seats to Pro",
    subtitle: "Seat count: 14",
    time: "4h ago",
  },
  {
    id: 5,
    type: "webhook",
    title: "Stripe webhook batch processed",
    subtitle: "18 events confirmed",
    time: "6h ago",
  },
];

export const activities: Activity[] = [
  {
    id: 1,
    type: "customer",
    title: "New customer registered",
    description: "Ana Silva joined PulseBoard.",
    date: "2026-10-21T08:30:00",
  },
  {
    id: 2,
    type: "payment",
    title: "Payment received",
    description: "Enterprise annual payment of $999.",
    date: "2026-10-21T08:00:00",
  },
  {
    id: 3,
    type: "subscription",
    title: "Subscription activated",
    description: "Pro plan activated for João Pedro.",
    date: "2026-10-20T16:45:00",
  },
  {
    id: 4,
    type: "customer",
    title: "Customer profile updated",
    description: "Sofia Martins updated her company details.",
    date: "2026-10-20T15:20:00",
  },
  {
    id: 5,
    type: "payment",
    title: "Payment pending",
    description: "A payment of $49 is awaiting confirmation.",
    date: "2026-10-20T13:10:00",
  },
  {
    id: 6,
    type: "subscription",
    title: "Subscription cancelled",
    description: "Paulo Fernandes cancelled his Pro plan.",
    date: "2026-10-20T11:30:00",
  },
  {
    id: 7,
    type: "customer",
    title: "New customer registered",
    description: "Isabel Domingos joined PulseBoard.",
    date: "2026-10-19T17:00:00",
  },
  {
    id: 8,
    type: "payment",
    title: "Payment failed",
    description: "A payment of $49 could not be processed.",
    date: "2026-10-19T14:25:00",
  },
  {
    id: 9,
    type: "subscription",
    title: "Plan upgraded",
    description: "A customer moved to the Enterprise plan.",
    date: "2026-10-19T12:00:00",
  },
  {
    id: 10,
    type: "system",
    title: "Report generated",
    description: "The monthly analytics report was generated.",
    date: "2026-10-18T16:40:00",
  },
  {
    id: 11,
    type: "customer",
    title: "Customer profile updated",
    description: "Carlos Mendes updated his profile.",
    date: "2026-10-18T10:15:00",
  },
  {
    id: 12,
    type: "subscription",
    title: "Trial started",
    description: "A new customer started a free trial.",
    date: "2026-10-17T15:30:00",
  },
  {
    id: 13,
    type: "payment",
    title: "Payment received",
    description: "A Pro subscription payment of $49.",
    date: "2026-10-17T11:45:00",
  },
  {
    id: 14,
    type: "system",
    title: "Settings updated",
    description: "Dashboard notification preferences changed.",
    date: "2026-10-16T09:20:00",
  },
  {
    id: 15,
    type: "customer",
    title: "New customer registered",
    description: "Rita Francisco joined PulseBoard.",
    date: "2026-10-15T08:50:00",
  },
];
