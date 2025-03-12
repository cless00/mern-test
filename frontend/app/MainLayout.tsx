import { MainNavigation } from "~/shared/Navigation/MainNavigation";
import { Outlet } from "react-router";
import { APIProvider } from "@vis.gl/react-google-maps";

const MainLayout = () => {
  return (
    <>
      <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        <MainNavigation />
        <main>
          <Outlet />
        </main>
      </APIProvider>
    </>
  );
};

export default MainLayout;
