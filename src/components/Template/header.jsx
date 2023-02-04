import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { React } from "react";
// import { Link, NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
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
              />
              Y-Elmouss
            </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto text-center">
                <Link
                  to="/"
                  className={`Navlink  shaked ${dark ? "text-dark" : "text-light"}`}
                >
                  Home
                </Link>
                <Link
                  to="/About"
                  className={`Navlink  shaked ${dark ? "text-dark" : "text-light"}`}
                >
                  About
                </Link>
                <Link
                  to="/Projet"
                  className={`Navlink shaked  ${dark ? "text-dark" : "text-light"}`}
                >
                  Protfolio
                </Link>
                <Link
                  to="/Service"
                  className={`Navlink shaked  ${dark ? "text-dark" : "text-light"}`}
                >
                  Services
                </Link>
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
                </div>
              </div>
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </Container>
        </Navbar>
      </header>

      <div className="icon-bar">
        <a href="https://facebook.com/yelmuss" className="facebook" target={"_blank"} rel="noreferrer">
          <i className="fa fa-facebook"></i>
        </a>       
        <a href="https://g.page/r/CU9JIKmBu2pkEB0/review" target={"_blank"} className="google" rel="noreferrer">
          <i className="fa fa-google"></i>
        </a>
        <a href="https://www.linkedin.com/in/yelmouss/" className="linkedin" target={"_blank"} rel="noreferrer">
          <i className="fa fa-linkedin"></i>
        </a>
        <a href="https://github.com/yelmouss" className="github"target={"_blank"} rel="noreferrer">
          <i className="fa fa-github"></i>
        </a>
      </div>
    </>
  );
}
export default Header;
