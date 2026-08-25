import { Container, Nav, Navbar } from "react-bootstrap";
import { useLanguage } from "../../i18n/LanguageContext";
import LangToggle from "./LangToggle";
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
  const { t } = useLanguage();
  const go = (ref) => ref?.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <div className="lang-toggle-fixed">
        <LangToggle />
      </div>
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 3,
          width: "100%",
        }}
      >
        <Navbar className={`nav`} variant="dark" ref={navRef}>
          <Container className="nav-container">
            <Nav className="mx-auto flex-wrap justify-content-center align-items-center">
              <Nav.Link onClick={() => go(homeRef)}>
                <p className="link">{t("nav.home")}</p>
              </Nav.Link>
              <Nav.Link onClick={() => go(aboutRef)}>
                <p className="link">{t("nav.about")}</p>
              </Nav.Link>
              <Nav.Link onClick={() => go(experienceRef)}>
                <p className="link">{t("nav.experience")}</p>
              </Nav.Link>
              <Nav.Link onClick={() => go(skillsRef)}>
                <p className="link">{t("nav.skills")}</p>
              </Nav.Link>
              <Nav.Link onClick={() => go(projectsRef)}>
                <p className="link">{t("nav.projects")}</p>
              </Nav.Link>
              <Nav.Link onClick={() => go(contactRef)}>
                <p className="link">{t("nav.contact")}</p>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default NavbarHome;
