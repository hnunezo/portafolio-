import { Container, Nav, Navbar } from "react-bootstrap";
import "./navstyles.css";

const NavbarHome = ({
  navRef,
  homeRef,
  aboutRef,
  skillsRef,
  projectsRef,
  contactRef,
}) => {
  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 3,
        width: "100%",
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
            <Nav.Link
              className="link"
              onClick={() => skillsRef.current.scrollIntoView()}
            >
              <p className="link">SKILLS</p>
            </Nav.Link>
            <Nav.Link
              className="link"
              onClick={() => projectsRef.current.scrollIntoView()}
            >
              <p className="link">PROJECTS</p>
            </Nav.Link>
            <Nav.Link
              className="link"
              onClick={() => contactRef.current.scrollIntoView()}
            >
              <p className="link">CONTACT</p>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarHome;
