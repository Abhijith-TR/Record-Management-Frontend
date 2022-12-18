import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "./context";

const NavbarChanged = () => {
  const { setLoggedIn } = useGlobalContext();

  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.removeItem("Authorization");
  };

  return (
    <Navbar
      bg="dark"
      variant="dark"
      className="navbar"
      style={{ height: "fit-content" }}
    >
      <Container>
        <div className="irms-name">IRMS</div>
        <div className="navbar-links">
          <div className="navbar-single-link">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "active-main-link" : "inactive-link"
              }
            >
              View Records
            </NavLink>
          </div>
          <div className="navbar-single-link">
            <NavLink
              to="/update/insertrecord"
              className={({ isActive }) =>
                isActive ? "active-main-link" : "inactive-link"
              }
            >
              Insert / Update
            </NavLink>
          </div>
          <div className="navbar-single-link">
            <NavLink
              to="/admin/addadmin"
              className={({ isActive }) =>
                isActive ? "active-main-link" : "inactive-link"
              }
            >
              Config
            </NavLink>
          </div>
          <div className="navbar-single-link">
            <NavLink
              to="/change"
              className={({ isActive }) =>
                isActive ? "active-main-link" : "inactive-link"
              }
            >
              Change Password
            </NavLink>
          </div>
          <div className="navbar-single-link">
            <NavLink
              to="/announcements/view"
              className={({ isActive }) =>
                isActive ? "active-main-link" : "inactive-link"
              }
            >
              Announcements
            </NavLink>
          </div>
        </div>
        <div style={{ color: "white" }}>
          <Button variant="danger" onClick={handleLogout}>
            Log Out
          </Button>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavbarChanged;
