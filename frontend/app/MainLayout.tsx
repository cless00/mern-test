import { MainNavigation } from "~/shared/Navigation/MainNavigation";
import { Outlet } from "react-router";
import { APIProvider } from "@vis.gl/react-google-maps";
import { AuthContext } from "~/shared/context/AuthContext";
import { useCallback, useState } from "react";

const MainLayout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  return (
    <>
      <AuthContext
        value={{
          isLoggedIn: isLoggedIn,
          login: login,
          logout: logout,
        }}
      >
        <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
          <MainNavigation />
          <main>
            <Outlet />
          </main>
        </APIProvider>
      </AuthContext>
    </>
  );
};

export default MainLayout;
