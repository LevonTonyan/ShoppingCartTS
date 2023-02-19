import React from 'react'
import { Offcanvas, Stack } from 'react-bootstrap'
import { CartItem, useShoppingCart } from '../context/shoppingCartContext'
import { StoreItem } from '../models'
import CartItemComp from './CartItemComp'




type ShoppingCartProps = {
    isOpen: boolean
    closeCart: () => void
    cartItems: CartItem[]
    items:StoreItem[]
}




const ShoppingCart = ({ isOpen, closeCart, cartItems,items }: ShoppingCartProps) => {

  return (
      <Offcanvas show={isOpen} onHide={closeCart } placement="end">
          <Offcanvas.Header closeButton >
              <Offcanvas.Title>
                  Cart
              </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
              <Stack gap={3}>
                  {cartItems.map(item => (
                      <CartItemComp key={item.id} {...item} />
                  ))}
                  <div className="ms-auto fw-bold fs-5">
                      Total: ${cartItems.reduce((total, cartItem) => {
                          const item = items.find(i => i.id === cartItem.id)
                            return total +(item?.price || 0)  * cartItem.quantity
                      } ,0) }
                  </div>
              </Stack>
          </Offcanvas.Body>
    </Offcanvas>
  )
}

export default ShoppingCart