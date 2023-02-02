import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { React } from "react";

function Header({ dark, updateDark }) {
  return (
    <>
      <header>
        <Navbar
          bg={`${dark ? "light" : "dark"}`}
          variant={`${dark ? "light" : "dark"}`}
          expand="lg"
          className={`${dark ? "col-12" : "col-12"}`}
        >
          <Container>
            <Navbar.Brand href="/">
              <img
                src="./img/Geek.png"
                alt="Geek"
                width="30"
                height="30"
                className="d-inline-block align-top bg-light rounded"
              />{" "}
              Y-Elmouss
            </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto text-center">
                <Nav.Link href="/" className="active">
                  Home
                </Nav.Link>
                <Nav.Link href="About" className="active">
                  About
                </Nav.Link>
                <Nav.Link href="/Projects">Projects</Nav.Link>
                <Nav.Link href="Contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <div className="justify-content-end">
              <div className={`fw-light ${dark ? "text-light" : "text-dark"}`}>
                <div className="row">
                  <i
                    className={`${
                      dark
                        ? "fa-regular fa-moon text-dark col"
                        : "fa-regular fa-sun text-light col"
                    }`}
                    onClick={() =>
                      updateDark(!dark, localStorage.setItem("dark", !dark))
                    }
                  ></i>
                  {dark ? <i className="col text-nowrap text-dark">Mode Light</i> : ""}
                </div>
              </div>
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </Container>
        </Navbar>
      </header>
    </>
  );
}
export default Header;
