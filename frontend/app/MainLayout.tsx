import { MainNavigation } from "~/shared/Navigation/MainNavigation";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
