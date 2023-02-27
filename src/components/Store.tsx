import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Item from './Item';
import {useDispatch,useSelector} from 'react-redux';
import { StoreItem } from './../models';
import { getProducts } from './../features/data/dataSlice';





const Store = () => {

  

  const dispatch = useDispatch()
  const products = useSelector(state => state.data.products)

  useEffect(() => { 
    dispatch(getProducts())
  },[])


  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className='g-3'>
        {products.length&&products.map((item:StoreItem) => (
          <Col key={item.id } ><Item item={item}/></Col>
        ))}
      </Row>
    </>
  );
};

export default Store;
