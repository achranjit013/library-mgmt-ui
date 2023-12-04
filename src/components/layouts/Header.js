import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { TbLayoutDashboard } from "react-icons/tb";
import { IoHomeOutline } from "react-icons/io5";
import { BiLogIn } from "react-icons/bi";
import { SiGnuprivacyguard } from "react-icons/si";

export const Header = () => {
  return (
    <Navbar expand="lg" variant="dark" className="bg-dark">
      <Container fluid>
        <Link className="navbar-brand" to="/">
          LM
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link
              className="nav-link d-flex align-items-center gap-1"
              to="/dashboard"
            >
              <TbLayoutDashboard />
              Dashboard
            </Link>
            <Link className="nav-link d-flex align-items-center gap-1" to="/">
              <IoHomeOutline />
              Home
            </Link>
            <Link
              className="nav-link d-flex align-items-center gap-1"
              to="/login"
            >
              <BiLogIn />
              Login
            </Link>
            <Link
              className="nav-link d-flex align-items-center gap-1"
              to="/signup"
            >
              <SiGnuprivacyguard />
              Signup
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
