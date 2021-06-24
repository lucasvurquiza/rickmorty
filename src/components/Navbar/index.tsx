import { NavLink } from "react-router-dom";
import "./styles.css";

export const Navbar = () => {
  return (
    <div>
      <ul className="nav">
        <li>
          <NavLink className="navLink" to="/">
            Search
          </NavLink>
        </li>
        <li>
          <NavLink className="navLink" to="/favorites">
            Favorites
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
