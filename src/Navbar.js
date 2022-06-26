import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const NavbarChanged = () => {
  return (
    <Navbar bg="dark" variant="dark" className="navbar">
      <Container>
        <div className="irms-name">IRMS</div>
        <div>
          <Nav className="me-auto">
            <Nav.Link href="#home">View Records</Nav.Link>
            <Nav.Link href="#features">Insert / Update</Nav.Link>
            <Nav.Link href="#pricing">Config</Nav.Link>
          </Nav>
        </div>
        <div style={{ color: "white" }}>
          <Button variant="danger">Log Out</Button>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavbarChanged;
