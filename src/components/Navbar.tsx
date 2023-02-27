import React from "react";
import { Container, Navbar as NavbarBs, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import SC from "../assets/shopping_cart.svg";
import { useSelector, useDispatch } from 'react-redux'
import {toggleCart} from '../features/cart/cartSlice'
import ShoppingCart from './ShoppingCart';

import { products } from '../data1/products';


const Navbar = () => {



  const dispatch = useDispatch()

  const  cart   = useSelector((store) => store.cart);


  
  const cartQuantity = useSelector((store) => store.cart.cartItems).reduce((acc,item) => acc + item.quantity,0)


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
          onClick={() => dispatch(toggleCart(true))}
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
      
        <ShoppingCart/>
   
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
