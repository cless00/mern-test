import {index, prefix, route, type RouteConfig} from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("users", "routes/users.tsx")
] satisfies RouteConfig;
