import React, { Component } from "react";
import { Navbar, Nav, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Link className="navbar-brand" to="/">
          Xrissy Pizza
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link className="nav-link" to="/">
              {" "}
              Home
            </Link>
            <Link className="nav-link" to="/cart">
              Cart <Badge variant="primary">0</Badge>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
