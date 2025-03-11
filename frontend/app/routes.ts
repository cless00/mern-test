import {
  index,
  layout,
  route,
  type RouteConfig,
} from "@react-router/dev/routes";

export default [
  layout("MainLayout.tsx", [
    index("routes/Users.tsx"),
    route("places/new", "routes/NewPlace.tsx"),
    route(":userId/places", "routes/UserPlaces.tsx"),
  ]),
] satisfies RouteConfig;
