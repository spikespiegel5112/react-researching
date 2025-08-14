import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  route("", "./views/Layout/Layout.tsx", [
    route("Homepage", "./views/Homepage/Homepage.tsx"),
    route("Welcome", "./views/welcome/welcome.tsx"),
  ]),
] satisfies RouteConfig;
