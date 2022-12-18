import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="tab-navbar">
        <div className="navbar-single-link">
          <NavLink
            to="/admin/addadmin"
            className={({ isActive }) =>
              isActive ? "active-sub-link" : "inactive-link"
            }
          >
            Add Admin
          </NavLink>
        </div>
        <div className="navbar-single-link">
          <NavLink
            to="/admin/adduser"
            className={({ isActive }) =>
              isActive ? "active-sub-link" : "inactive-link"
            }
          >
            Add Student
          </NavLink>
        </div>
        <div className="navbar-single-link">
          <NavLink
            to="/admin/removeadmin"
            className={({ isActive }) =>
              isActive ? "active-sub-link" : "inactive-link"
            }
          >
            Remove Admin
          </NavLink>
        </div>
        <div className="navbar-single-link">
          <NavLink
            to="/admin/removeuser"
            className={({ isActive }) =>
              isActive ? "active-sub-link" : "inactive-link"
            }
          >
            Remove Student
          </NavLink>
        </div>
        <div className="navbar-single-link">
          <NavLink
            to="/admin/clearsubject"
            className={({ isActive }) =>
              isActive ? "active-sub-link" : "inactive-link"
            }
          >
            Clear Subject
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
