export interface KPIStat {
  id: number;
  key: string;
  label: string;
  value: number;
  format: "currency" | "number" | "percentage" | "ratio";
  change: number;
  trend: "up" | "down" | "stable";
  description: string;
}

export interface RevenueTrend {
  id: number;
  period: string;
  revenue: number;
  newMRR: number;
  expansionMRR: number;
  contractionMRR: number;
  churnedMRR: number;
}

export interface AcquisitionChannel {
  id: number;
  channel: string;
  visitors: number;
  customers: number;
  conversionRate: number;
  cac: number;
}

export interface FunnelStage {
  id: number;
  stage: string;
  users: number;
  conversionRate: number;
}

export interface SubscriptionDistribution {
  id: number;
  segment: string;
  plan: "Starter" | "Pro" | "Enterprise";
  accounts: number;
  mrr: number;
  averagePrice: number;
  renewalRate: number;
}

export interface CohortRetention {
  id: number;
  cohort: string;
  newCustomers: number;
  retention: (number | null)[];
}

// 1. KPI statistics — 15 metrics
export const kpiStats: KPIStat[] = [
  {
    id: 1,
    key: "totalRevenue",
    label: "Total Revenue",
    value: 48295,
    format: "currency",
    change: 14.2,
    trend: "up",
    description: "Revenue for the selected period",
  },
  {
    id: 2,
    key: "totalCustomers",
    label: "Total Customers",
    value: 2845,
    format: "number",
    change: 8.1,
    trend: "up",
    description: "Registered customer accounts",
  },
  {
    id: 3,
    key: "activeSubscriptions",
    label: "Active Subscriptions",
    value: 1924,
    format: "number",
    change: 12.5,
    trend: "up",
    description: "Currently active subscriptions",
  },
  {
    id: 4,
    key: "churnRate",
    label: "Monthly Churn Rate",
    value: 2.4,
    format: "percentage",
    change: -0.6,
    trend: "down",
    description: "Lower churn is better",
  },
  {
    id: 5,
    key: "netMRRMovement",
    label: "Net MRR Movement",
    value: 4210,
    format: "currency",
    change: 18.4,
    trend: "up",
    description: "Net recurring revenue movement",
  },
  {
    id: 6,
    key: "arpu",
    label: "ARPU",
    value: 148.2,
    format: "currency",
    change: 6.1,
    trend: "up",
    description: "Average revenue per user",
  },
  {
    id: 7,
    key: "ltv",
    label: "Customer Lifetime Value",
    value: 1840,
    format: "currency",
    change: 9.2,
    trend: "up",
    description: "Estimated customer lifetime value",
  },
  {
    id: 8,
    key: "ltvCacRatio",
    label: "LTV to CAC Ratio",
    value: 4.8,
    format: "ratio",
    change: 0.4,
    trend: "up",
    description: "Lifetime value divided by acquisition cost",
  },
  {
    id: 9,
    key: "mrr",
    label: "Monthly Recurring Revenue",
    value: 38420,
    format: "currency",
    change: 15.8,
    trend: "up",
    description: "Recurring revenue per month",
  },
  {
    id: 10,
    key: "arr",
    label: "Annual Recurring Revenue",
    value: 461040,
    format: "currency",
    change: 15.8,
    trend: "up",
    description: "Annualised recurring revenue",
  },
  {
    id: 11,
    key: "pendingVerification",
    label: "Pending Verification",
    value: 284,
    format: "number",
    change: 9.9,
    trend: "up",
    description: "Accounts awaiting verification",
  },
  {
    id: 12,
    key: "churnedLast30Days",
    label: "Churned Customers (30D)",
    value: 143,
    format: "number",
    change: -1.8,
    trend: "down",
    description: "Customers lost in the last 30 days",
  },
  {
    id: 13,
    key: "conversionRate",
    label: "Visitor to Customer Conversion",
    value: 3.99,
    format: "percentage",
    change: 0.7,
    trend: "up",
    description: "Visitors converted into customers",
  },
  {
    id: 14,
    key: "averageOrderValue",
    label: "Average Order Value",
    value: 142.5,
    format: "currency",
    change: 3.8,
    trend: "up",
    description: "Average transaction value",
  },
  {
    id: 15,
    key: "renewalRate",
    label: "Subscription Renewal Rate",
    value: 97.8,
    format: "percentage",
    change: 1.2,
    trend: "up",
    description: "Percentage of subscriptions renewed",
  },
];

// 2. Revenue trends — 15 monthly periods
export const revenueTrends: RevenueTrend[] = [
  {
    id: 1,
    period: "2025-08",
    revenue: 18200,
    newMRR: 2400,
    expansionMRR: 800,
    contractionMRR: -350,
    churnedMRR: -620,
  },
  {
    id: 2,
    period: "2025-09",
    revenue: 19500,
    newMRR: 2600,
    expansionMRR: 950,
    contractionMRR: -400,
    churnedMRR: -700,
  },
  {
    id: 3,
    period: "2025-10",
    revenue: 20800,
    newMRR: 2800,
    expansionMRR: 1100,
    contractionMRR: -450,
    churnedMRR: -750,
  },
  {
    id: 4,
    period: "2025-11",
    revenue: 22100,
    newMRR: 3000,
    expansionMRR: 1250,
    contractionMRR: -500,
    churnedMRR: -800,
  },
  {
    id: 5,
    period: "2025-12",
    revenue: 23700,
    newMRR: 3200,
    expansionMRR: 1400,
    contractionMRR: -520,
    churnedMRR: -850,
  },
  {
    id: 6,
    period: "2026-01",
    revenue: 25100,
    newMRR: 3400,
    expansionMRR: 1500,
    contractionMRR: -550,
    churnedMRR: -900,
  },
  {
    id: 7,
    period: "2026-02",
    revenue: 26900,
    newMRR: 3600,
    expansionMRR: 1650,
    contractionMRR: -580,
    churnedMRR: -920,
  },
  {
    id: 8,
    period: "2026-03",
    revenue: 28400,
    newMRR: 3800,
    expansionMRR: 1800,
    contractionMRR: -600,
    churnedMRR: -950,
  },
  {
    id: 9,
    period: "2026-04",
    revenue: 30600,
    newMRR: 4000,
    expansionMRR: 1950,
    contractionMRR: -620,
    churnedMRR: -980,
  },
  {
    id: 10,
    period: "2026-05",
    revenue: 32900,
    newMRR: 4200,
    expansionMRR: 2100,
    contractionMRR: -650,
    churnedMRR: -1000,
  },
  {
    id: 11,
    period: "2026-06",
    revenue: 35100,
    newMRR: 4400,
    expansionMRR: 2250,
    contractionMRR: -680,
    churnedMRR: -1030,
  },
  {
    id: 12,
    period: "2026-07",
    revenue: 37800,
    newMRR: 4600,
    expansionMRR: 2300,
    contractionMRR: -700,
    churnedMRR: -1050,
  },
  {
    id: 13,
    period: "2026-08",
    revenue: 40500,
    newMRR: 4900,
    expansionMRR: 2400,
    contractionMRR: -720,
    churnedMRR: -1080,
  },
  {
    id: 14,
    period: "2026-09",
    revenue: 43900,
    newMRR: 5200,
    expansionMRR: 2450,
    contractionMRR: -800,
    churnedMRR: -1100,
  },
  {
    id: 15,
    period: "2026-10",
    revenue: 48295,
    newMRR: 6200,
    expansionMRR: 2400,
    contractionMRR: -850,
    churnedMRR: -1120,
  },
];

// 3. Customer acquisition channels — 15 sources
export const acquisitionChannels: AcquisitionChannel[] = [
  {
    id: 1,
    channel: "Organic Search",
    visitors: 20244,
    customers: 850,
    conversionRate: 4.2,
    cac: 42,
  },
  {
    id: 2,
    channel: "Referrals & Partners",
    visitors: 13496,
    customers: 620,
    conversionRate: 4.6,
    cac: 35,
  },
  {
    id: 3,
    channel: "Paid Acquisition",
    visitors: 8670,
    customers: 290,
    conversionRate: 3.3,
    cac: 95,
  },
  {
    id: 4,
    channel: "Direct & Brand",
    visitors: 5784,
    customers: 240,
    conversionRate: 4.1,
    cac: 28,
  },
  {
    id: 5,
    channel: "Email Marketing",
    visitors: 4260,
    customers: 205,
    conversionRate: 4.8,
    cac: 18,
  },
  {
    id: 6,
    channel: "Social Media",
    visitors: 8940,
    customers: 190,
    conversionRate: 2.1,
    cac: 54,
  },
  {
    id: 7,
    channel: "Content Marketing",
    visitors: 7650,
    customers: 280,
    conversionRate: 3.7,
    cac: 31,
  },
  {
    id: 8,
    channel: "Webinars",
    visitors: 1840,
    customers: 125,
    conversionRate: 6.8,
    cac: 46,
  },
  {
    id: 9,
    channel: "Affiliate Marketing",
    visitors: 5320,
    customers: 210,
    conversionRate: 3.9,
    cac: 61,
  },
  {
    id: 10,
    channel: "Product Hunt",
    visitors: 3250,
    customers: 145,
    conversionRate: 4.5,
    cac: 39,
  },
  {
    id: 11,
    channel: "LinkedIn",
    visitors: 4680,
    customers: 175,
    conversionRate: 3.7,
    cac: 72,
  },
  {
    id: 12,
    channel: "YouTube",
    visitors: 3890,
    customers: 118,
    conversionRate: 3.0,
    cac: 44,
  },
  {
    id: 13,
    channel: "Community",
    visitors: 2760,
    customers: 165,
    conversionRate: 6.0,
    cac: 22,
  },
  {
    id: 14,
    channel: "Events & Conferences",
    visitors: 1420,
    customers: 96,
    conversionRate: 6.8,
    cac: 88,
  },
  {
    id: 15,
    channel: "Outbound Sales",
    visitors: 1980,
    customers: 132,
    conversionRate: 6.7,
    cac: 105,
  },
];

// 4. Conversion funnel — 15 stages
export const conversionFunnel: FunnelStage[] = [
  { id: 1, stage: "Site Visitors", users: 48200, conversionRate: 100 },
  { id: 2, stage: "Pricing Page Viewed", users: 24100, conversionRate: 50 },
  { id: 3, stage: "Sign-up Started", users: 9640, conversionRate: 40 },
  { id: 4, stage: "Sign-up Completed", users: 6840, conversionRate: 71 },
  { id: 5, stage: "Email Verified", users: 5472, conversionRate: 80 },
  { id: 6, stage: "Free Trial Started", users: 3840, conversionRate: 70.2 },
  { id: 7, stage: "Workspace Created", users: 3264, conversionRate: 85 },
  { id: 8, stage: "First Integration", users: 2780, conversionRate: 85.2 },
  { id: 9, stage: "Telemetry Connected", users: 2410, conversionRate: 86.7 },
  { id: 10, stage: "First Report Viewed", users: 2169, conversionRate: 90 },
  { id: 11, stage: "Team Member Invited", users: 1952, conversionRate: 90 },
  { id: 12, stage: "Subscription Selected", users: 1757, conversionRate: 90 },
  { id: 13, stage: "Payment Details Added", users: 1581, conversionRate: 90 },
  { id: 14, stage: "Paid Subscription", users: 1423, conversionRate: 90 },
  { id: 15, stage: "Renewed Subscription", users: 1281, conversionRate: 90 },
];

// 5. Subscription distribution — 15 segments
export const subscriptionDistribution: SubscriptionDistribution[] = [
  {
    id: 1,
    segment: "Small Business A",
    plan: "Starter",
    accounts: 120,
    mrr: 5880,
    averagePrice: 49,
    renewalRate: 87.2,
  },
  {
    id: 2,
    segment: "Small Business B",
    plan: "Starter",
    accounts: 135,
    mrr: 6615,
    averagePrice: 49,
    renewalRate: 88.1,
  },
  {
    id: 3,
    segment: "Small Business C",
    plan: "Starter",
    accounts: 145,
    mrr: 7105,
    averagePrice: 49,
    renewalRate: 86.8,
  },
  {
    id: 4,
    segment: "Small Business D",
    plan: "Starter",
    accounts: 160,
    mrr: 7840,
    averagePrice: 49,
    renewalRate: 89.0,
  },
  {
    id: 5,
    segment: "Small Business E",
    plan: "Starter",
    accounts: 175,
    mrr: 8575,
    averagePrice: 49,
    renewalRate: 87.9,
  },
  {
    id: 6,
    segment: "Professional A",
    plan: "Pro",
    accounts: 180,
    mrr: 35820,
    averagePrice: 199,
    renewalRate: 93.2,
  },
  {
    id: 7,
    segment: "Professional B",
    plan: "Pro",
    accounts: 195,
    mrr: 38805,
    averagePrice: 199,
    renewalRate: 94.0,
  },
  {
    id: 8,
    segment: "Professional C",
    plan: "Pro",
    accounts: 210,
    mrr: 41790,
    averagePrice: 199,
    renewalRate: 92.8,
  },
  {
    id: 9,
    segment: "Professional D",
    plan: "Pro",
    accounts: 225,
    mrr: 44775,
    averagePrice: 199,
    renewalRate: 94.4,
  },
  {
    id: 10,
    segment: "Professional E",
    plan: "Pro",
    accounts: 240,
    mrr: 47760,
    averagePrice: 199,
    renewalRate: 93.7,
  },
  {
    id: 11,
    segment: "Enterprise A",
    plan: "Enterprise",
    accounts: 30,
    mrr: 72000,
    averagePrice: 2400,
    renewalRate: 98.1,
  },
  {
    id: 12,
    segment: "Enterprise B",
    plan: "Enterprise",
    accounts: 35,
    mrr: 84000,
    averagePrice: 2400,
    renewalRate: 99.0,
  },
  {
    id: 13,
    segment: "Enterprise C",
    plan: "Enterprise",
    accounts: 38,
    mrr: 91200,
    averagePrice: 2400,
    renewalRate: 98.6,
  },
  {
    id: 14,
    segment: "Enterprise D",
    plan: "Enterprise",
    accounts: 45,
    mrr: 108000,
    averagePrice: 2400,
    renewalRate: 99.1,
  },
  {
    id: 15,
    segment: "Enterprise E",
    plan: "Enterprise",
    accounts: 52,
    mrr: 124800,
    averagePrice: 2400,
    renewalRate: 98.8,
  },
];

// 6. Cohort retention — 15 cohorts, 6 periods each
export const cohortRetention: CohortRetention[] = [
  {
    id: 1,
    cohort: "August 2025",
    newCustomers: 210,
    retention: [100, 94, 91, 88, 86, 85],
  },
  {
    id: 2,
    cohort: "September 2025",
    newCustomers: 225,
    retention: [100, 95, 92, 89, 87, 86],
  },
  {
    id: 3,
    cohort: "October 2025",
    newCustomers: 238,
    retention: [100, 94, 91, 88, 85, 84],
  },
  {
    id: 4,
    cohort: "November 2025",
    newCustomers: 245,
    retention: [100, 96, 93, 90, 88, 87],
  },
  {
    id: 5,
    cohort: "December 2025",
    newCustomers: 260,
    retention: [100, 95, 92, 89, 87, 86],
  },
  {
    id: 6,
    cohort: "January 2026",
    newCustomers: 275,
    retention: [100, 96, 94, 91, 89, null],
  },
  {
    id: 7,
    cohort: "February 2026",
    newCustomers: 290,
    retention: [100, 95, 92, 90, null, null],
  },
  {
    id: 8,
    cohort: "March 2026",
    newCustomers: 305,
    retention: [100, 96, 94, null, null, null],
  },
  {
    id: 9,
    cohort: "April 2026",
    newCustomers: 318,
    retention: [100, 95, 92, null, null, null],
  },
  {
    id: 10,
    cohort: "May 2026",
    newCustomers: 330,
    retention: [100, 96, null, null, null, null],
  },
  {
    id: 11,
    cohort: "June 2026",
    newCustomers: 348,
    retention: [100, 95, null, null, null, null],
  },
  {
    id: 12,
    cohort: "July 2026",
    newCustomers: 365,
    retention: [100, 97, null, null, null, null],
  },
  {
    id: 13,
    cohort: "August 2026",
    newCustomers: 392,
    retention: [100, null, null, null, null, null],
  },
  {
    id: 14,
    cohort: "September 2026",
    newCustomers: 410,
    retention: [100, null, null, null, null, null],
  },
  {
    id: 15,
    cohort: "October 2026",
    newCustomers: 445,
    retention: [100, null, null, null, null, null],
  },
];
