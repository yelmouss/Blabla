import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { React } from "react";

import {
  HiOutlineHomeModern,
  HiCommandLine,
  HiOutlineIdentification,
  HiOutlineBriefcase,
} from "react-icons/hi2";

import { Link } from "react-router-dom";
function Header({ dark, updateDark }) {
  return (
    <>
      <header>
        <Navbar
          bg={`${dark ? "light" : "dark"}`}
          variant={`${dark ? "light" : "dark"}`}
          expand="lg"
          className={`fw-bolder shadow-lg ${dark ? "col-12" : "col-12"}`}
          fixed="top"
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
              {" Yelmouss".split("").map((letter, index) => {
                return (
                  <span key={index} className="text-fun-pink">
                    {letter}
                  </span>
                );
              })}
            </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto text-center">
                <Link
                  to="/"
                  className={`Navlink  shaked ${
                    dark ? "text-dark" : "text-light"
                  }`}
                >
                  <HiOutlineHomeModern /> Home
                </Link>
                <Link
                  to="/About"
                  className={`Navlink  shaked ${
                    dark ? "text-dark" : "text-light"
                  }`}
                >
                  <HiOutlineIdentification /> About
                </Link>
                <Link
                  to="/Projet"
                  className={`Navlink shaked  ${
                    dark ? "text-dark" : "text-light"
                  }`}
                >
                 <HiOutlineBriefcase/> Protfolio
                </Link>
                <Link
                  to="/Service"
                  className={`Navlink shaked   ${
                    dark ? "text-dark" : "text-light"
                  }`}
                >
                  <HiCommandLine />
                  Services 
                </Link>
              </Nav>
            </Navbar.Collapse>
            <div className="justify-content-end">
              <div className={`fw-light ${dark ? "text-light" : "text-dark"}`}>
                <div className="row ">
                  <i
                    className={`fs-4  ${
                      dark
                        ? "fa-regular fa-moon text-dark col"
                        : "fa-regular fa-sun text-warning col"
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

      <div className="icon-bar rounded p-1">
        <a
          href="https://facebook.com/yelmuss"
          className="facebook rounded mb-1"
          target={"_blank"}
          rel="noreferrer"
        >
          <i className="fa fa-facebook"></i>
        </a>
        <a
          href="https://g.page/r/CU9JIKmBu2pkEB0/review"
          target={"_blank"}
          className="google rounded mb-1"
          rel="noreferrer"
        >
          <i className="fa fa-google"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/yelmouss/"
          className="linkedin rounded mb-1"
          target={"_blank"}
          rel="noreferrer"
        >
          <i className="fa fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/yelmouss"
          className="github rounded mb-1"
          target={"_blank"}
          rel="noreferrer"
        >
          <i className="fa fa-github"></i>
        </a>
      </div>
    </>
  );
}
export default Header;
