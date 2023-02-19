import React from "react";
import { StoreItem } from "../models";
import { Button, Card } from "react-bootstrap";
import "./ItemStyles.css";
import { useShoppingCart } from "../context/shoppingCartContext";

interface StoreItemProps {
  item: StoreItem;
}

const Item = ({ item }: StoreItemProps) => {

const {getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart, closeCart} = useShoppingCart()



  const quantity = getItemQuantity(item.id);

  return (
    <Card>
      <Card.Img variant="top" src={item.image} height="350px" />
      <div className="title-price">
        <div className="item-title">{item.title}</div>
        <div className="item-price">{item.price}$</div>
      </div>
      <div className="btn-section">
        {!quantity ? (
          <Button className="w-100" onClick={() => increaseCartQuantity(item.id)}>Add to cart</Button>
        ) : (
          <>
            <div>
              <Button onClick={() => decreaseCartQuantity(item.id)}>-</Button>
              <span style={{ margin: "0 10px" }} className="fs-2">
                {quantity}
              </span>
              <span style={{ marginRight: "10px" }}>in cart</span>
              <Button onClick={() => increaseCartQuantity(item.id)}>+</Button>
            </div>

            <div className="d-flex justify-content-center aligh-items-center">
              <Button className="bg-danger " onClick={() => removeFromCart(item.id)}>Remove</Button>
            </div>
          </>
        )}
      </div>
    </Card>
  );
};

export default Item;
