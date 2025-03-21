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
    route("places/new", "routes/NewPlace.tsx"),
    route("places/:placeId", "routes/UpdatePlace.tsx"),
    route(":userId/places", "routes/UserPlaces.tsx"),
    route("auth", "routes/Auth.tsx"),
  ]),
] satisfies RouteConfig;
