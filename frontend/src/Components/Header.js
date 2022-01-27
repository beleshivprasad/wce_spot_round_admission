import React, { useState } from "react";
import {
  Badge,
  Button,
  Container,
  Nav,
  Navbar,
  Offcanvas,
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

const Header = () => {
  const [isLogged, setIsLogged] = useState(localStorage.getItem("isAdmin"));
  const history = useHistory();
  return (
    <Navbar bg="secondary" expand={false} style={{ opacity: "1" }}>
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
            {!isLogged ? (
              <>
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
                    <Link to="/vacancy/show">Check for Vacant Seats</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/merit">Merit List </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/instructions">Instructions and Schedule</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/contact">Contact Us</Link>
                  </Nav.Link>
                </Nav>
              </>
            ) : (
              <>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link>
                    <Link to="/">Home</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/studentlist">Registered Student</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/allotment">Manage Student Allotment</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/vacancy/show">Check Vacancy</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/vacancy/update">Update Vacancy</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/displaymerit">Display Merit List</Link>
                  </Nav.Link>

                  <Nav.Link>
                    <Link to="/instructions">Instructions and Schedule</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/contact">Contact Us</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="">
                      <Button
                        type="button"
                        variant="dark"
                        onClick={() => {
                          localStorage.removeItem("isAdmin");
                          history.push("/");
                          window.location.reload(true);
                        }}
                      >
                        Logout
                      </Button>
                    </Link>
                  </Nav.Link>
                </Nav>
              </>
            )}
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Header;
