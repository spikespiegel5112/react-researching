import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  route("", "./views/Layout.tsx", [index("./views/welcome/welcome.tsx")]),
] satisfies RouteConfig;
