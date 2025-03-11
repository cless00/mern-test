import './NavLinks.css'
import {NavLink} from "react-router";

export const NavLinks = () => {
    return (
        <ul className="nav-links">
            <li>
                <NavLink to="/">All users</NavLink>
            </li>
            <li>
                <NavLink to="/uid/places">My places</NavLink>
            </li>
            <li>
                <NavLink to="/places/new">Add places</NavLink>
            </li>
            <li>
                <NavLink to="/auth">Authenticate</NavLink>
            </li>
        </ul>
    );
};