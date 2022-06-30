import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useGlobalContext } from "./context";

const NavbarChanged = () => {
  const {
    displayAdmin,
    displayUpdate,
    displayView,
    changePassword,
    setDisplayView,
    setDisplayAdmin,
    setDisplayUpdate,
    setLoggedIn,
    setChangePassword,
  } = useGlobalContext();

  const handleClick = (tabNumber) => {
    const arr = [
      setDisplayView,
      setDisplayUpdate,
      setDisplayAdmin,
      setChangePassword,
    ];
    for (let i = 1; i <= 4; i++) {
      if (i === tabNumber) arr[i - 1](true);
      else arr[i - 1](false);
    }
  };

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
          <div
            className="navbar-single-link"
            onClick={() => handleClick(1)}
            style={{ color: displayView ? "#ffff80" : "white" }}
          >
            View Records
          </div>
          <div
            className="navbar-single-link"
            onClick={() => handleClick(2)}
            style={{ color: displayUpdate ? "#ffff80" : "white" }}
          >
            Insert / Update
          </div>
          <div
            className="navbar-single-link"
            onClick={() => handleClick(3)}
            style={{ color: displayAdmin ? "#ffff80" : "white" }}
          >
            Config
          </div>
          <div
            className="navbar-single-link"
            onClick={() => handleClick(4)}
            style={{ color: changePassword ? "#ffff80" : "white" }}
          >
            Change Password
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
