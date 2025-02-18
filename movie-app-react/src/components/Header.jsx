import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink activeclassname="active" className="nav-link" to="/">
                Home
              </NavLink>
              <NavLink className="nav-link" to="/favourite">
                Favourite
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
