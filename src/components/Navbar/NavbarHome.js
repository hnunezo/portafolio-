import { Container, Nav, Navbar } from "react-bootstrap";
import "./navstyles.css";

const NavbarHome = ({ navRef, homeRef, aboutRef }) => {
  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 3,
      }}
    >
      <Navbar className={`nav`} variant="dark" ref={navRef}>
        <Container>
          <Nav className="mx-auto">
            <Nav.Link onClick={() => homeRef.current.scrollIntoView()}>
              <p className="link">HOME</p>
            </Nav.Link>
            <Nav.Link
              className="link"
              onClick={() => aboutRef.current.scrollIntoView()}
            >
              <p className="link">ABOUT</p>
            </Nav.Link>
            <Nav.Link href="#skills" className="link">
              <p className="link">SKILLS</p>
            </Nav.Link>
            <Nav.Link href="#projects" className="link">
              <p className="link">PROJECTS</p>
            </Nav.Link>
            <Nav.Link href="#contact" className="link">
              <p className="link">CONTACT</p>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarHome;
