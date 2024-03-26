import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../context";

const Navbar = () => {
  const { isAdmin } = useGlobalContext();

  return (
    <div className="tab-navbar">
      <div className="navbar-single-link">
        <NavLink
          to="/announcements/view"
          className={({ isActive }) =>
            isActive ? "active-sub-link" : "inactive-link"
          }
        >
          {isAdmin ? "View / Remove" : "View"}
        </NavLink>
      </div>
      <div className="navbar-single-link">
        <NavLink
          to="/announcements/insert"
          className={({ isActive }) =>
            isActive ? "active-sub-link" : "inactive-link"
          }
        >
          Insert
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
