import type { Subscription } from "../types/dashboard";

export interface SubscriptionPlan {
  id: string;
  name: string;
  tierLabel: string;
  price: string;
  priceUnit: string;
  description: string;
  isPopular?: boolean;
  activeSubscriptions: number;
  generatedMRR: string;
  features: string[];
  buttonText: string;
}

export const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: "starter",
    name: "STARTER",
    tierLabel: "Tier 1",
    price: "$49",
    priceUnit: "/ seat / mo",
    description: "For small teams getting started with core telemetry.",
    activeSubscriptions: 192,
    generatedMRR: "$9,408",
    features: [
      "Up to 5 team members",
      "Standard analytical pipeline",
      "30-day telemetry retention",
    ],
    buttonText: "Manage Starter Defaults",
  },
  {
    id: "pro",
    name: "PRO TIER",
    tierLabel: "73.8% Share",
    price: "$199",
    priceUnit: "/ seat / mo",
    description:
      "For scaling teams needing advanced insights and custom metrics.",
    isPopular: true,
    activeSubscriptions: 1420,
    generatedMRR: "$28,258",
    features: [
      "25 team member seats included",
      "Real-time custom metric rules",
      "1-year historical telemetry storage",
      "REST + GraphQL API ingress",
    ],
    buttonText: "Scale Pro Quotas",
  },
  {
    id: "enterprise",
    name: "ENTERPRISE",
    tierLabel: "Contract",
    price: "Custom",
    priceUnit: "~ $2,400/mo avg",
    description:
      "For organizations requiring dedicated infrastructure and support.",
    activeSubscriptions: 312,
    generatedMRR: "$74,880",
    features: [
      "Unlimited seats & workspace partitions",
      "Dedicated Enterprise Architect",
      "99.99% custom SLA guarantee",
      "Real-time high-throughput webhooks",
    ],
    buttonText: "Contract Terms",
  },
];

export const subscriptions: Subscription[] = [
  {
    id: 1,
    customerId: 1,
    plan: "Pro",
    billingCycle: "Monthly",
    amount: 49,
    status: "Active",
    startDate: "2026-01-10",
    nextBillingDate: "2026-11-10",
  },
  {
    id: 2,
    customerId: 2,
    plan: "Enterprise",
    billingCycle: "Yearly",
    amount: 999,
    status: "Active",
    startDate: "2026-01-18",
    nextBillingDate: "2027-01-18",
  },
  {
    id: 3,
    customerId: 3,
    plan: "Free",
    billingCycle: "Monthly",
    amount: 0,
    status: "Trial",
    startDate: "2026-02-03",
    nextBillingDate: "2026-11-03",
  },
  {
    id: 4,
    customerId: 4,
    plan: "Pro",
    billingCycle: "Monthly",
    amount: 49,
    status: "Active",
    startDate: "2026-02-12",
    nextBillingDate: "2026-11-12",
  },
  {
    id: 5,
    customerId: 5,
    plan: "Enterprise",
    billingCycle: "Yearly",
    amount: 999,
    status: "Active",
    startDate: "2026-03-05",
    nextBillingDate: "2027-03-05",
  },
  {
    id: 6,
    customerId: 6,
    plan: "Pro",
    billingCycle: "Monthly",
    amount: 49,
    status: "Cancelled",
    startDate: "2026-03-19",
    nextBillingDate: null,
  },
  {
    id: 7,
    customerId: 7,
    plan: "Free",
    billingCycle: "Monthly",
    amount: 0,
    status: "Active",
    startDate: "2026-04-02",
    nextBillingDate: null,
  },
  {
    id: 8,
    customerId: 8,
    plan: "Enterprise",
    billingCycle: "Yearly",
    amount: 999,
    status: "Active",
    startDate: "2026-04-14",
    nextBillingDate: "2027-04-14",
  },
  {
    id: 9,
    customerId: 9,
    plan: "Pro",
    billingCycle: "Monthly",
    amount: 49,
    status: "Past Due",
    startDate: "2026-05-08",
    nextBillingDate: "2026-11-08",
  },
  {
    id: 10,
    customerId: 10,
    plan: "Free",
    billingCycle: "Monthly",
    amount: 0,
    status: "Trial",
    startDate: "2026-05-21",
    nextBillingDate: "2026-11-21",
  },
  {
    id: 11,
    customerId: 11,
    plan: "Enterprise",
    billingCycle: "Yearly",
    amount: 999,
    status: "Active",
    startDate: "2026-06-04",
    nextBillingDate: "2027-06-04",
  },
  {
    id: 12,
    customerId: 12,
    plan: "Pro",
    billingCycle: "Monthly",
    amount: 49,
    status: "Cancelled",
    startDate: "2026-06-17",
    nextBillingDate: null,
  },
  {
    id: 13,
    customerId: 13,
    plan: "Free",
    billingCycle: "Monthly",
    amount: 0,
    status: "Active",
    startDate: "2026-07-01",
    nextBillingDate: null,
  },
  {
    id: 14,
    customerId: 14,
    plan: "Pro",
    billingCycle: "Monthly",
    amount: 49,
    status: "Active",
    startDate: "2026-07-12",
    nextBillingDate: "2026-11-12",
  },
  {
    id: 15,
    customerId: 15,
    plan: "Enterprise",
    billingCycle: "Yearly",
    amount: 999,
    status: "Active",
    startDate: "2026-08-06",
    nextBillingDate: "2027-08-06",
  },
];
