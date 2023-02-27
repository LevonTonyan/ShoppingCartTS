import React from "react";
import { StoreItem } from "../models";
import { Button, Card } from "react-bootstrap";
import "./ItemStyles.css";
import { useSelector, useDispatch } from 'react-redux'
import {addToCart, removeFromCart, removeAllcurrItems} from '../features/cart/cartSlice.js'

interface StoreItemProps {
  item: StoreItem;
}

const Item = ({ item }: StoreItemProps) => {


  

  const dispatch = useDispatch()
  const quantity = useSelector((store) => {
    const item1 = store.cart.cartItems.find(el => el.id === item.id)
    if (item1) { 
      return item1.quantity
    }
  })


  return (
    <Card>
      <Card.Img variant="top" src={item.image} height="350px" />
      <div className="title-price">
        <div className="item-title">{item.title}</div>
        <div className="item-price">${item.price}</div>
      </div>
      <div className="btn-section">
        {!quantity ? (
          <Button className="w-100" onClick={() => dispatch(addToCart(item.id))}>Add to cart</Button>
        ) : (
          <>
            <div>
              <Button onClick={() => dispatch(removeFromCart(item.id))}>-</Button>
              <span style={{ margin: "0 10px" }} className="fs-2">
                {quantity}
              </span>
              <span style={{ marginRight: "10px" }}>in cart</span>
              <Button onClick={() => dispatch(addToCart(item.id))}>+</Button>
            </div>

            <div className="d-flex justify-content-center aligh-items-center">
              <Button className="bg-danger " onClick={() => dispatch(removeAllcurrItems(item.id))}>Remove</Button>
            </div>
          </>
        )}
      </div>
    </Card>
  );
};

export default Item;
