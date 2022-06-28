import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useGlobalContext } from "./context";

const NavbarChanged = () => {
  const { setDisplayView, setDisplayAdmin, setDisplayUpdate, setLoggedIn } =
    useGlobalContext();

  const handleClick = (tabNumber) => {
    if (tabNumber === 1) {
      setDisplayView(true);
      setDisplayAdmin(false);
      setDisplayUpdate(false);
    }
    if (tabNumber === 2) {
      setDisplayView(false);
      setDisplayAdmin(false);
      setDisplayUpdate(true);
    }
    if (tabNumber === 3) {
      setDisplayView(false);
      setDisplayAdmin(true);
      setDisplayUpdate(false);
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.removeItem("Authorization");
  };

  return (
    <Navbar bg="dark" variant="dark" className="navbar">
      <Container>
        <div className="irms-name">IRMS</div>
        <div className="navbar-links">
          <div className="navbar-single-link" onClick={() => handleClick(1)}>
            View Records
          </div>
          <div className="navbar-single-link" onClick={() => handleClick(2)}>
            Insert / Update
          </div>
          <div className="navbar-single-link" onClick={() => handleClick(3)}>
            Config
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
