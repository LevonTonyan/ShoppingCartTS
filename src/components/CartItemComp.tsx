import React from 'react'
import { Stack } from 'react-bootstrap'
import { CartItem } from '../context/shoppingCartContext'
import { useShoppingCart } from '../context/shoppingCartContext'
import { Button } from 'react-bootstrap';



type CartItemsProps = {
  id: number
  quantity:number
}


const CartItemComp = ({id, quantity}:CartItemsProps) => {
  
const {items, removeFromCart} = useShoppingCart()
const item = items.find(i => i.id === id)
  
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
      <Button variant='outline-danger' size="sm" onClick={() => removeFromCart(item.id)}>&times;</Button>
    </Stack>
  )
}

export default CartItemComp