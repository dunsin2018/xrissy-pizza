import React from "react";
import { Navbar, Nav, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCartState } from "../../context/cartContext";

const Header = () => {
  const { cartItems } = useCartState();
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
            Cart <Badge variant="primary">{cartItems.length}</Badge>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
