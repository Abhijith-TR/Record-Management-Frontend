import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="tab-navbar">
        <div className="navbar-single-link">
          <NavLink
            to="/update/insertrecord"
            className={({ isActive }) =>
              isActive ? "active-sub-link" : "inactive-link"
            }
          >
            Insert Record
          </NavLink>
        </div>
        <div className="navbar-single-link">
          <NavLink
            to="/update/updategrade"
            className={({ isActive }) =>
              isActive ? "active-sub-link" : "inactive-link"
            }
          >
            Update Grade
          </NavLink>
        </div>
        <div className="navbar-single-link">
          <NavLink
            to="/update/addsubject"
            className={({ isActive }) =>
              isActive ? "active-sub-link" : "inactive-link"
            }
          >
            Add Subject
          </NavLink>
        </div>
        <div className="navbar-single-link">
          <NavLink
            to="/update/deleterecord"
            className={({ isActive }) =>
              isActive ? "active-sub-link" : "inactive-link"
            }
          >
            Delete Record
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
