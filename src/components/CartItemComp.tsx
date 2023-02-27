import React from 'react'
import { Stack } from 'react-bootstrap'
import { Button } from 'react-bootstrap';
import {useDispatch, useSelector } from "react-redux"
import { removeAllcurrItems } from '../features/cart/cartSlice';



type CartItemsProps = {
  id: number
  quantity:number
}


const CartItemComp = ({id, quantity}:CartItemsProps) => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.data.products)
const item = products.find(i => i.id === id)
  
  if (item == null) { return null}  
  
  
  return (
    <Stack direction='horizontal' gap={2}>
      <img src={item.image} style={{ width: "125px", height:"125px",  } } alt="" />
      <div className="me-auto">
        <div style={{ fontSize: "10px" }}>{item.title}&times;{quantity }</div>
        <div className="text-mutetd" style={{fontSize:"1.5rem"}}>
          ${item.price }
        </div>
      </div>
      <div > total: ${item.price * quantity}</div>
      <Button variant='outline-danger' size="sm" onClick={() => dispatch(removeAllcurrItems(item.id))}>&times;</Button>
    </Stack>
  )
}

export default CartItemComp