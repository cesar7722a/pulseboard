import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("./layout.tsx", [
    index("routes/home/home.tsx"),
    route("customers", "routes/customers/customers.tsx"),
    route("subscriptions", "routes/subscriptions.tsx"),
    route("analytics", "routes/analytics.tsx"),
    route("settings", "routes/settings.tsx"),
  ]),
] satisfies RouteConfig;
