import {
  index,
  layout,
  prefix,
  route,
  type RouteConfig,
} from "@react-router/dev/routes";

export default [
  layout("MainLayout.tsx", [
    index("routes/Users.tsx"),
    ...prefix("places", [
      route("new", "routes/NewPlace.tsx"),
      route(":placeId", "routes/UpdatePlace.tsx"),
    ]),
    route(":userId/places", "routes/UserPlaces.tsx"),
    route("auth", "routes/Auth.tsx"),
  ]),
] satisfies RouteConfig;
