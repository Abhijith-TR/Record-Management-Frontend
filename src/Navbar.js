import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
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
            <Link to="/" className="link">
              View Records
            </Link>
          </div>
          <div className="navbar-single-link">
            <Link to="/update" className="link">
              Insert / Update
            </Link>
          </div>
          <div className="navbar-single-link">
            <Link to="/admin" className="link">
              Config
            </Link>
          </div>
          <div className="navbar-single-link">
            <Link to="/change" className="link">
              Change Password
            </Link>
          </div>
          <div className="navbar-single-link">
            <Link to="/announcements" className="link">
              Announcements
            </Link>
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
