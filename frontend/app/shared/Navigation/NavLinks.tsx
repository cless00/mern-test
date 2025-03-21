import "./NavLinks.css";
import { NavLink } from "react-router";
import { AuthContext } from "~/shared/context/AuthContext";
import { useContext } from "react";

export const NavLinks = () => {
  const authContext = useContext(AuthContext);

  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/">All users</NavLink>
      </li>
      {authContext.isLoggedIn && (
        <li>
          <NavLink to="/u1/places">My places</NavLink>
        </li>
      )}
      {authContext.isLoggedIn && (
        <li>
          <NavLink to="/places/new">Add places</NavLink>
        </li>
      )}
      {!authContext.isLoggedIn && (
        <li>
          <NavLink to="/auth">Authenticate</NavLink>
        </li>
      )}
      {authContext.isLoggedIn && (
        <li>
          <NavLink to="/auth" onClick={authContext.logout}>
            Logout
          </NavLink>
        </li>
      )}
    </ul>
  );
};
