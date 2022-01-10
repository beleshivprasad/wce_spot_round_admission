import React from "react";
import { Badge, Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="secondary" expand={false}>
      <Container fluid>
        <Navbar.Brand href="/" className="mx-auto" style={{ color: "white" }}>
          <h1>Walchand College of Engineering , Sangli</h1>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/admin">Admin Login</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/register">Register for Spot Round</Link>
                <Badge pill bg="danger">
                  New
                </Badge>
              </Nav.Link>
              <Nav.Link>
                <Link to="/status">Check Status</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/vacancy">Check for Vacant Seats</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/instructions">Instructions and Schedule</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/contact">Contact Us</Link>
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Header;
