import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useGlobalContext } from "./context";

const NavbarChanged = () => {
  const { tabs, setTabs, setLoggedIn } = useGlobalContext();

  const handleClick = (tabNumber) => {
    let arr = [0, 0, 0, 0, 0];
    for (let i = 1; i <= 5; i++) {
      if (i === tabNumber) arr[i - 1] = 1;
    }
    setTabs(arr);
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
            style={{ color: tabs[0] ? "#ffff80" : "white" }}
          >
            View Records
          </div>
          <div
            className="navbar-single-link"
            onClick={() => handleClick(2)}
            style={{ color: tabs[1] ? "#ffff80" : "white" }}
          >
            Insert / Update
          </div>
          <div
            className="navbar-single-link"
            onClick={() => handleClick(3)}
            style={{ color: tabs[2] ? "#ffff80" : "white" }}
          >
            Config
          </div>
          <div
            className="navbar-single-link"
            onClick={() => handleClick(4)}
            style={{ color: tabs[3] ? "#ffff80" : "white" }}
          >
            Change Password
          </div>
          <div
            className="navbar-single-link"
            onClick={() => handleClick(5)}
            style={{ color: tabs[4] ? "#ffff80" : "white" }}
          >
            Announcements
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
