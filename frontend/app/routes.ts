import { index, layout, type RouteConfig } from "@react-router/dev/routes";

export default [
  layout("MainLayout.tsx", [index("routes/users.tsx")]),
] satisfies RouteConfig;
