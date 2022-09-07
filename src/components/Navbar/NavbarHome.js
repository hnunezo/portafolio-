import { Container, Nav, Navbar } from "react-bootstrap";
import "./navstyles.css";

const NavbarHome = ({ navRef, homeRef, aboutRef }) => {
  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 999,
      }}
    >
      <Navbar className={`nav`} variant="dark" ref={navRef}>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link
                onClick={() => homeRef.current.scrollIntoView()}
                className="link"
              >
                HOME
              </Nav.Link>
              <Nav.Link
                className="link"
                onClick={() => aboutRef.current.scrollIntoView()}
              >
                ABOUT
              </Nav.Link>
              <Nav.Link href="#skills" className="link">
                SKILLS
              </Nav.Link>
              <Nav.Link href="#projects" className="link">
                PROJECTS
              </Nav.Link>
              <Nav.Link href="#contact" className="link">
                CONTACT
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarHome;
