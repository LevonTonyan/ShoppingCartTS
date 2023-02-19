import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Item from './Item';
import { useShoppingCart } from './../context/shoppingCartContext';





const Store = () => {

const {items} = useShoppingCart()


  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className='g-3'>
        {items.length&&items.map(item => (
          <Col key={item.id } ><Item item={item}/></Col>
        ))}
      </Row>
    </>
  );
};

export default Store;
