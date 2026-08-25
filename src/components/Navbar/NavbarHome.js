import { Container, Nav, Navbar } from "react-bootstrap";
import "./navstyles.css";

const NavbarHome = ({
  navRef,
  homeRef,
  aboutRef,
  experienceRef,
  skillsRef,
  projectsRef,
  contactRef,
}) => {
  const go = (ref) => ref?.current?.scrollIntoView({ behavior: "smooth" });

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
          <Nav className="mx-auto flex-wrap justify-content-center">
            <Nav.Link onClick={() => go(homeRef)}>
              <p className="link">HOME</p>
            </Nav.Link>
            <Nav.Link onClick={() => go(aboutRef)}>
              <p className="link">ABOUT</p>
            </Nav.Link>
            <Nav.Link onClick={() => go(experienceRef)}>
              <p className="link">EXPERIENCE</p>
            </Nav.Link>
            <Nav.Link onClick={() => go(skillsRef)}>
              <p className="link">SKILLS</p>
            </Nav.Link>
            <Nav.Link onClick={() => go(projectsRef)}>
              <p className="link">PROJECTS</p>
            </Nav.Link>
            <Nav.Link onClick={() => go(contactRef)}>
              <p className="link">CONTACT</p>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarHome;
