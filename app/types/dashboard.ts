export type CustomerStatus = "Active" | "Inactive" | "Pending";

export type Plan = "Free" | "Pro" | "Enterprise";

export type BillingCycle = "Monthly" | "Yearly";

export type SubscriptionStatus = "Active" | "Trial" | "Past Due" | "Cancelled";

export type TransactionStatus = "Paid" | "Pending" | "Failed";

export type ActivityType = "customer" | "subscription" | "payment" | "system";

export interface Customer {
  id: number;
  name: string;
  email: string;
  company: string;
  plan: Plan;
  status: CustomerStatus;
  joinedAt: string;
  avatar: string;
}

export interface Subscription {
  id: number;
  customerId: number;
  plan: Plan;
  billingCycle: BillingCycle;
  amount: number;
  status: SubscriptionStatus;
  startDate: string;
  nextBillingDate: string | null;
}

export interface Transaction {
  id: number;
  customerId: number;
  subscriptionId: number;
  amount: number;
  status: TransactionStatus;
  date: string;
  description: string;
}

export interface Activity {
  id: number;
  type: ActivityType;
  title: string;
  description: string;
  date: string;
}

export interface AnalyticsPoint {
  month: string;
  revenue: number;
  newCustomers: number;
  totalCustomers: number;
  activeSubscriptions: number;
  churnRate: number;
}
