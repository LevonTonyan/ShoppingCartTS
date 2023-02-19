import React from "react";
import { Container, Navbar as NavbarBs, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import SC from "../assets/shopping_cart.svg";
import { useShoppingCart } from "../context/shoppingCartContext";

const Navbar = () => {
  const { openCart, closeCart, cartQuantity, isOpen } = useShoppingCart();

  console.log(isOpen);
  return (
    <NavbarBs className="bg-white shadow-sm mb-3" sticky="top">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home{" "}
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About{" "}
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store{" "}
          </Nav.Link>
        </Nav>
        <Button
          variant="outline-primary"
          style={{ position: "relative" }}
          onClick={openCart}
        >
          <img src={SC} />
          {cartQuantity ? (
            <div
              className="rounded-circle bg-danger d-flex justify-content-center aligh-items-center"
              style={{
                position: "absolute",
                color: "white",
                bottom: -10,
                right: -10,
                width: "1.5rem",
                height: "1.5rem",
              }}
            >
              {cartQuantity}
            </div>
          ) : null}
        </Button>
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
